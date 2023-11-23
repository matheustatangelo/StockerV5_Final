import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../types/User';
import Supplier from '../models/Supplier';
import Client from '../models/Client';
import Product from '../models/Product';

const models = [User, Supplier, Client, Product];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
