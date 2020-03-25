const crypto = require("crypto"); // Pacote que vem com o Node.js

const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    // Gerar 4 bits de caracteres hexadecimal
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      await connection("ongs")
        .delete()
        .where("id", id);

      return res.json({ message: "ONG deleted" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
