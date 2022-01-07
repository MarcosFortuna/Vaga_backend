const User = require('../models/User')
const validate = require('./validate')

module.exports = {

    async index(req, res){
       
        try{
        const users = await User.findAll({
            include: {association: 'Role'}
        })

            return res.json(users)
        }catch(e){
            res.status(500).send
        }
    },async indexById(req, res){
        const id = req.params.id
        try{
            const user = await User.findByPk(id, {include: 'Role'})
            if(!user) return res.json({error: "Not Found"})
            
            return res.json(user) 
        }catch(e){
            res.status(500).send()
        }
    },
    async store(req, res){
        const { name, lastName, email, userName, roleId } = req.body
        try{
            if(validate.notNull(name) && validate.notNull(lastName) && validate.validEmail(email) && validate.notNull(userName) && validate.notNull(roleId)){
            const user = await User.create({name, lastName, email, userName,roleId })

            return res.json(user)
        }else{
            return res.status(400).send()
        }
        }catch(e){
            res.status(500).send()
        }
    },
    async delete(req, res){
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
     async update(req, res){
         const {name, lastName, email, userName, roleId} = req.body
         const user_id = req.params.id
     try{
        if(validate.notNull(name) && validate.notNull(lastName) && validate.validEmail(email) && validate.notNull(userName) && validate.notNull(roleId)){
         await User.update({name, lastName, email, userName, roleId},{where: {id: user_id}})
         .then(user => {
             res.json(user)
         })
        }else{
            return res.status(400).send()
        }
     }catch(e){
         res.status(500).send()
     }
     }    
}