import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Nome não pode ser vazio',
            },
            len: {
              args: [3, 100],
              msg: 'Nome deve ter entre 3 e 100 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          unique: {
            msg: 'Email já existe',
          },
          validate: {
            notEmpty: {
              msg: 'Nome não pode ser vazio',
            },
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING(100),
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Nome não pode ser vazio',
            },
            len: {
              args: [6, 50],
              msg: 'Senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });

    return this;
  }

  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Movie, { foreignKey: 'director_id' });
  }
}
