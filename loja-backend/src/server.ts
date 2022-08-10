import express from 'express';
import { AppDataSource } from './data-source';
import cors from 'cors';

//Instancio uma aplicação express
const app = express();

//determina a porta de execução
const PORT = 3300;

//Middleware
app.use(cors());
app.use(express.json());

//Se conectar no banco de dados, levanto a aplicação
AppDataSource.initialize().then(() => {

    //Levanto a aplicação
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`);
    })

}).catch(error => {
    console.log('Ops, não conectei no banco de dados', error);
});
