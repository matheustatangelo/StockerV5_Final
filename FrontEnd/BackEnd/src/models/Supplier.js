import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Supplier extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo endereço deve ter entre 3 e 255 caracteres',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Telefone já existe',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo telefone deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cnpj: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'CNPJ já existe',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo CNPJ deve ter entre 3 e 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (supplier) => {
      if (supplier.password) {
        supplier.password_hash = await bcryptjs.hash(supplier.password, 8);
      }
    });
    return this;
  }
}
