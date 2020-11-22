import { Router } from 'express'
import multer from 'multer'

import EstabelecimentosController from './controllers/EstabelecimentosController'
import multerConfig from './config/multer'
import AdmsController from './controllers/AdmsController'
const routes = Router()
const upload = multer(multerConfig)

routes.post('/estabelecimentos', upload.array('images'), EstabelecimentosController.create)
routes.get('/estabelecimentos', EstabelecimentosController.index)
routes.get('/estabelecimentos/:id', EstabelecimentosController.show)
routes.post('/adms', AdmsController.create)
routes.get('/adms', AdmsController.index)
routes.get('/adms/:id', AdmsController.show)

export default routes