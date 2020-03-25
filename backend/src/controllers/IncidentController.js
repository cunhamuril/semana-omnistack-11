const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const incidents = await connection("incidents").select("*");

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
