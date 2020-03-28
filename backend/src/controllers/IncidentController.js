const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    // page = 1: definindo padrão -> se não existir o param page, vai retonar por padrão a página 1
    const { page = 1 } = req.query;

    // [count] é a mesma coisa que count[0]
    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      /**
       * (page - 1 = 0) * 5 = 0 -> primeiros 5 registros
       * 1 * 5 = 5 -> a partir do 5o registro
       * 2 * 5 = 10 -> a partir do 10o registro e poraí vai...
       */
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    // Cabeçalho da resposta que vai retornar a quantidade de incidents existente na table
    res.header("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    // Pegando o ID utilizando desesctruturing
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first(); // vai retornar apenas um resultado

      if (incident.ong_id !== ong_id) {
        return res.status(401).json({ error: "Operation not permitted" });
      }

      await connection("incidents")
        .where("id", id)
        .delete();

      // Status 204 -> No Content
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
