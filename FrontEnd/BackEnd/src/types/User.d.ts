// User.d.ts
import { Model } from 'sequelize';

export interface User extends Model {
  name: string;
  email: string;
  password_hash: string;
  password: string;
}
