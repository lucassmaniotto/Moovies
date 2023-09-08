require('dotenv').config();

const sslRequired = process.env.DB_SSL_REQUIRED === 'true';

module.exports = {
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: sslRequired ? {
      require: true,
      rejectUnauthorized: false,
    } : undefined,
  },
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: true,
    updatedAt: true,
  },
};
