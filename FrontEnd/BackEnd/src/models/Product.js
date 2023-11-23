// FILEPATH: /home/matheus/Dev/Stocker/BackEnd/src/models/Product.js
// BEGIN: ed8c6549bwf9
import Sequelize, { Model } from 'sequelize';
import Supplier from './Supplier';

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        purchase_price: {
          type: Sequelize.DECIMAL(10, 2),
          defaultValue: '',
          validate: {
            isDecimal: {
              msg: 'Preço deve ser um número',
            },
          },
        },
        sale_price: {
          type: Sequelize.DECIMAL(10, 2),
          defaultValue: '',
          validate: {
            isDecimal: {
              msg: 'Preço deve ser um número',
            },
          },
        },
        rf_id: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'RF_ID já existe',
          },
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo RF_ID deve ter entre 3 e 255 caracteres',
            },
          },
        },
        supplier_id: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'ID do fornecedor deve ser um número inteiro',
            },
          },
          references: {
            model: 'suppliers',
            key: 'id',
          },
        },
        stock_quantity: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Quantidade deve ser um número inteiro',
            },
          },
        },
      },
      {
        sequelize,
        hooks: {
          beforeSave: async (product) => {
            if (product.supplier_id) {
              const supplier = await Supplier.findByPk(product.supplier_id);
              if (!supplier) {
                throw new Error('Fornecedor não existe');
              }
            }
          },
          beforeUpdate: async (product) => {
            if (product.supplier_id) {
              const supplier = await Supplier.findByPk(product.supplier_id);
              if (!supplier) {
                throw new Error('Fornecedor não existe');
              }
            }
          },
        },
      },
    );
    return this;
  }
}
