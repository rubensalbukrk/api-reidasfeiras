import cors from 'cors';
import express, { Request, Response } from 'express';
import Routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/reidasfeiras', Routes)

app.get('/', (req, res) => {
  res.json({
      message: "👋🌎 Bem vindo, Innacle Solutions no ar! 👋🌎"
  })
})

export default app;
