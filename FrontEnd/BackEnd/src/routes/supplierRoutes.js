import { Router } from 'express';
import supplierController from '../controllers/SupplierController';

const router = new Router();

router.post('/', supplierController.store);
router.get('/', supplierController.index);
router.get('/:id', supplierController.show);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);
export default router;
