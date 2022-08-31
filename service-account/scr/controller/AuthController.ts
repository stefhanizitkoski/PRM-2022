import { FirebaseError } from 'firebase/app';

import {ICredential}  from '@typesCustom'

import {singInAdmin, FirebaseError} from '.../services/firebase'

import { Request, Response } from 'express'

class AuthController {

    public async signInAdmin( request: Request, response: Response) {
        const credential = request.body;

        try {

            const result = await this.signInAdmin(credential.email, credential.password)

            response.json(result)

        }catch (e) {
            response.status(500).json(e)

        }
    }

}

export default new AuthController();
