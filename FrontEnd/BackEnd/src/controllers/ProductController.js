import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    try {
      const novoProduct = await Product.create(req.body);
      return res.json(novoProduct);
    } catch (e) {
      if (e.errors) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      console.log(e);
      return res.status(400).json({
        errors: ['An unexpected error occurred'],
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      return res.json(product);
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
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }
      const productAtualizado = await product.update(req.body);
      return res.json(productAtualizado);
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
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }
      await product.destroy();
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ProductController();
