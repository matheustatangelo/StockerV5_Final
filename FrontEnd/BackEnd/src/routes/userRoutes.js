import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
export default router;

/*
Create (criar), Read (ler), Update (atualizar) e Delete (apagar)

index -> Read(ler) todos os usuários -> GET
store/create -> Create(criar) um novo usuário -> POST
delete -> Delete(apagar) um usuário -> DELETE
show -> Read(ler) um usuário -> GET
update -> Update(atualizar) um usuário -> PATCH ou PUT
 */
