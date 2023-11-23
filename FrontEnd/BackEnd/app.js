import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import supplierRoutes from './src/routes/supplierRoutes';
import clientRoutes from './src/routes/clientRoutes';
import productRoutes from './src/routes/productRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/suppliers/', supplierRoutes);
    this.app.use('/clients/', clientRoutes);
    this.app.use('/products/', productRoutes);
  }
}

export default new App().app;
