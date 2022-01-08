import { Request, Response } from 'express';
import User from '../models/User';
import {validEmail, notNull} from './validate'


export const UserControllers = {

    async index(req:Request, res:Response){
       
        try{
        const users = await User.findAll({
            include: {association: 'Role'}
        })

            return res.json(users)
        }catch(e){
            res.status(500).send
        }
    },async indexById(req:Request, res:Response){
        const id = req.params.id
        try{
            const user = await User.findByPk(id, {include: 'Role'})
            if(!user) return res.json({error: "Not Found"})
            
            return res.json(user) 
        }catch(e){
            res.status(500).send()
        }
    },
    async store(req:Request, res:Response){
        const { name, lastName, email, userName, roleId } = req.body
        try{
            if(notNull(name) && notNull(lastName) && validEmail(email) && notNull(userName) && notNull(roleId)){
            const user = await User.create({name, lastName, email, userName,roleId })

            return res.json(user)
        }else{
            res.json({"error": "Entrada inválida!"})
        }
        }catch(e){
            res.status(500).send()
        }
    },
    async delete(req:Request, res:Response){
        const id = req.params.id
 
          try{
             await User.destroy({
                 where: {
                     id: id
                 }
             })
             return res.status(204).send()
          }catch(e){
              res.status(500).send()
          }
      },
     async update(req:Request, res:Response){
         const {name, lastName, email, userName, roleId} = req.body
         const user_id = req.params.id
     try{
        if(notNull(name) && notNull(lastName) && validEmail(email) && notNull(userName) && notNull(roleId)){
         await User.update({name, lastName, email, userName, roleId},{where: {id: user_id}})
         .then((user: any) => {
             res.json(user)
         })
        }else{
            res.json({"error": "Entrada inválida!"})
        }
     }catch(e){
         res.status(500).send()
     }
     }    
}