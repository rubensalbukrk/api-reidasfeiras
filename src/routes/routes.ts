import express from 'express'
import MessageResponse from '../types/MessageResponse'
import users from './users/users'
import alimentos from './alimentos/alimentos'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
        message: `SERVIDOR REI DAS FEIRAS NO AR 👋🌎`
    })
})

// ROTAS
router.use('/users', users)
router.use('/alimentos', alimentos)


export default router;