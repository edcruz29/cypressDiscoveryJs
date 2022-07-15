var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']
       

function avengersList (){
    var ul = document.getElementById('avengers');
    ul.innerHTML= '';
    avengers.forEach((a)=>{
       var li = document.createElement('li')
       var text = document.createTextNode(a)
       li.appendChild(text)
       ul.appendChild(li)
    })
}