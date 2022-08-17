import { Request, response, Response } from "express";
import { TypeORMError } from "typeorm";
import { Brand } from "../entity/Brand";


class BrandController {


    public async index(request: Request, responde: Response) {
        try {
            //Buscar todos os registros do Banco.
            const brands = await Brand.find();

            //Retorno da lista
            return response.json(brands);

        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({ message: error.message })
        }
    }

    public async create(request: Request, responde: Response) {
        try {
            //Salvo no banco a intidade que veio na requisição
            const brand = await Brand.save(request.body);

            //Retorno a intidade inserida
            return response.status(201).json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({ message: error.message })
        }
    }
    public async show(request: Request, responde: Response) {
        try {
            //pego o ID que foi enviado por request param
            const { id } = request.params;

            // Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({ massage: 'Parâmetro ID não informado' })
            }

            //Busco a entity no banco pelo ID
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //Verifico se encontrou a brand
            if (!found) {
                return response.status(404).json({ massage: 'Recursonão encontrado' })
            }
            //Retorno a entidade encontrada
            return response.json(found);

        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({ message: error.message })
        }
    }

    public async update(request: Request, responde: Response) {
        try {
            //pego o ID que foi enviado por request param
            const { id } = request.params;

            // Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({ massage: 'Parâmetro ID não informado' })
            }

            //Busco a entity no banco pelo ID
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //Verifico se encontrou a brand
            if (!found) {
                return response.status(404).json({ massage: 'Recurso não encontrado' })
            }

            //Removo o registro baseado no ID
            const brand = await Brand.update(found.id, request.body);

            //Retorno o registro atualizado
            return response.json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({ message: error.message })
        }
    }

    public async remove(request: Request, responde: Response) {
        try {
            //pego o ID que foi enviado por request param
            const { id } = request.params;

            // Verifico se veio o parametro ID
            if (!id) {
                return response.status(400).json({ massage: 'Parâmetro ID não informado' })
            }

            //Busco a entity no banco pelo ID
            const found = await Brand.findOneBy({
                id: Number(id)
            });

            //Verifico se encontrou a brand
            if (!found) {
                return response.status(404).json({ massage: 'Recurso não encontrado' })
            }

            //Removo o registro baseado no ID
            await found.remove();

            //Retorno o status 204 que é sem retorno
            return response.status(204).json();
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({ message: error.message })
        }
    }

}

export default new BrandController();