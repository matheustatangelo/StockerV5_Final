import Client from '../models/Client';

class ClientController {
  async store(req, res) {
    try {
      const novoClient = await Client.create(req.body);
      return res.json(novoClient);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const clients = await Client.findAll();
      return res.json(clients);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByPk(id);
      return res.json(client);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não existe'],
        });
      }
      const clientAtualizado = await client.update(req.body);
      return res.json(clientAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não existe'],
        });
      }
      await client.destroy();
      return res.json(client);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ClientController();
