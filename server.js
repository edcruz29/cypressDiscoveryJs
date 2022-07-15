const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress Discovery'})
})

app.get('/avengers', (req,res)=>{
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']
    return res.json({data: avengers})  
})

app.get('/cnh', (req,res)=>{
    const ageOfUser = req.query.idade
    if(ageOfUser.length == 0){
      return res.json({message:'Idade é um campo obrigatório'})
       
       }
       if(ageOfUser < 0){
        return res.json({message:'Idade informada inválida'})
        
       }
       var ageOfUserNum = parseInt(ageOfUser);

       if(ageOfUserNum >=18){
        return res.json({message:'Ok, você é maior de idade, pode tirar a CNH'})
       }else if(ageOfUserNum>4){
        return res.json({message:'Você é menor de idade, por enquanto sugiro andar de bike.'})
       }else{
        return res.json({message:'Melhor você tomar leite...'})
       }
    return res.json({test: ageOfUser})  
})

app.listen(3000)