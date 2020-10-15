import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanage', upload.array('images'), OrphanagesController.create);
routes.get('/orphanage', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);

export default routes;