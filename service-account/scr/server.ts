import { DataSource } from 'typeorm';
import express from 'express';
import { AppDataSource } from './data-DataSource';
import cors from 'cors';
import doteenv from "dotenv";

//Carrego as variaveis de ambiente da aplicação

doteenv.config();

//Instancio uma aplicação express
const app = express();

//determina a porta de execução
const PORT = process.env.PORT || 3302;

//Middleware
app.use(cors());
app.use(express.json());

//Importa rotas
app.use('/avvont, routes')

//Se conectar no banco de dados, levanto a aplicação
//AppDataSource.initialize().then(() => {

    //inicio a aplicação
    app.listen(PORT, () => {
       console.log(`Server running in port ${PORT}`);
    });

      //inicio a aplicação
      app.listen(PORT, () => {
        console.log(`Service Account in port ${PORT}`);
     });

//}).catch(error => {
   // console.log('Ops, não conectei no banco de dados', error);
//});
