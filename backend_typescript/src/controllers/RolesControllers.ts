import Roles from '../models/Roles'
import {Request, Response} from 'express'
import { notNull, validEmail } from './validate'

export const RolesControllers = {
    async index(req:Request, res:Response){
        try{
            const roles = await Roles.findAll()

            if(!roles) return res.json({error: "Not Found"})
            
            return res.json(roles)
            
        }catch(e){
                return res.status(500).send()
            }
    },
    async indexById(req:Request, res:Response){
        const id = req.params.id
        try{
            const role = await Roles.findByPk(id)
            if(!role) return res.json({error: "Not Found"})
            
            return res.json(role) 
        }catch(e){
            res.status(500).send()
        }
    },
    async store(req:Request, res: Response){
        const {name, description, status} = req.body
        try{
            if(notNull(name) && notNull(description) && notNull(status)){
                const role = await Roles.create({
                    name, 
                    description,
                    status
                })

                return res.json(role)
            }else{
                res.json({"error": "Entrada inválida!"})
            }
        }catch(e){
            res.json(e)
        }
    },
    async delete(req:Request, res:Response){
        const id = req.params.id

         try{
            await Roles.destroy({
                where: {
                    id: id
                }
            })
            return res.status(204).send()
         }catch(e){
             res.status(500).send()
         }
    },

    async update(req:Request, res: Response){
        const {name, description, status} = req.body
        const role_id = req.params.id
    try{
        if(notNull(name) && notNull(description) && notNull(status)){
            await Roles.update({name, description, status},{where: {id: role_id}})
            .then((role:any) => {
                res.json(role)
            })
        }else{
            res.json({"error":"Entrada inválida!"})
        }   
    }catch(e){
        res.status(500).send()
    }
    }
}