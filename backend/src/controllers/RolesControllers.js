const Roles = require('../models/Roles')
const validate = require('./validate')

module.exports = {
    async index(req, res){
        try{
        const roles = await Roles.findAll()
        return res.json(roles)
    }catch(e){
            return res.status(500).send()
        }
        
    },
    async indexById(req, res){
        const id = req.params.id
        try{
            const role = await Roles.findByPk(id)
            if(!role) return res.json({error: "Not Found"})
            
            return res.json(role) 
        }catch(e){
            res.status(500).send()
        }
    },
    
    async store(req, res){
            const {name, description, status} = req.body
        try{
            if(validate.notNull(name) && validate.notNull(description) && validate.notNull(status)){
                const role = await Roles.create({
                    name, 
                    description,
                    status
                })

                return res.json(role)
            }else{
                return res.status(400).send
            }

        }catch(e){
            return res.status(500).send()
        }
    },
    async delete(req, res){
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
    
    async update(req, res){
        const {name, description, status} = req.body
        const role_id = req.params.id
    try{
        if(validate.notNull(name) && validate.notNull(description) && validate.notNull(status)){
            await Roles.update({name, description, status},{where: {id: role_id}})
            .then(role => {
                res.json(role)
            })
        }else{
            return res.status(400).send()
        }
    }catch(e){
        res.status(500).send()
    }
    }
     
}