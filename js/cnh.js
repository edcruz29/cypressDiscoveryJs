 
        function verifyAge(){
            const nameOfUser = document.querySelector('input[name=name]');
            var ageOfUser = document.querySelector('input[name=age]');
 
            if(ageOfUser.value.length == 0){
             alert(`Idade é um campo obrigatório`)
             return
            }
            if(ageOfUser.value < 0){
             alert(`Idade informada inválida`)
             return
            }
            var ageOfUserNum = parseInt(ageOfUser.value);
 
 
 
            if(ageOfUserNum >=18){
             alert(`Ok, você é maior de idade, pode tirar a CNH`)
            }else if(ageOfUserNum>4){
             alert(`Você é menor de idade, por enquanto sugiro andar de bike.`)
            }else{
             alert(`Melhor você tomar leite...`)
            }
           
 
         }
         // var nameOfUser = prompt('Qual o seu nome?');
         // var ageOfUser = prompt("Informe sua idade.");
     
 
 
         // document.getElementById('name').innerText = nameOfUser;
         // document.getElementById('age').innerText = ageOfUser;