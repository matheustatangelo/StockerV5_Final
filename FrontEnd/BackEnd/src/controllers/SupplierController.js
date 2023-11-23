import Supplier from '../models/Supplier';

class SupplierController {
  async store(req, res) {
    try {
      const novoSupplier = await Supplier.create(req.body);
      return res.json(novoSupplier);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const suppliers = await Supplier.findAll();
      return res.json(suppliers);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const supplier = await Supplier.findByPk(id);
      return res.json(supplier);
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
      const supplier = await Supplier.findByPk(id);
      if (!supplier) {
        return res.status(400).json({
          errors: ['Fornecedor não existe'],
        });
      }
      const supplierAtualizado = await supplier.update(req.body);
      return res.json(supplierAtualizado);
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
      const supplier = await Supplier.findByPk(id);
      if (!supplier) {
        return res.status(400).json({
          errors: ['Fornecedor não existe'],
        });
      }
      await supplier.destroy();
      return res.json(supplier);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SupplierController();
