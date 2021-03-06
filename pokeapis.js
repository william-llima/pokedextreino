
const pokecontainer=document.querySelector(".user");
var  poke =document.querySelector('.teste');
var type= document.querySelector(".type");
const bord= document.querySelector(".lusinicial")

var state ="desligado"
var mudapoke=1;
function listapoke(id){
    
    let promise=new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        let url= `https://pokeapi.co/api/v2/pokemon/${mudapoke}`;
        xhr.open("GET", url);
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4){
                if(xhr.status ===200 || xhr.status ===304 ){
                    
                    let resposta = xhr.responseText;
                    resposta=JSON.parse(resposta);
                    resolve(resposta)
                    const  imgteste =document.getElementById('img').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mudapoke}.png`;
                    if (state=="desligado"){
                        poke.innerHTML=" "
                        type.innerHTML=" "
                    }
                    else{
                    poke.innerHTML="name : "+resposta.name;
                    type.innerHTML= "Type : "+resposta.types[0].type.name
                    }

                }
                else{
                reject('deu ruin na resposta')
                console.log(xhr)
            }
        }
    };
    
})
return promise;
}

/*
function mostrapoke(poke){
    addelemento(pokecontainer, 'td' , poke.name)
    addelemento(pokecontainer, 'td' , poke.back_default)
    
}

function addelemento(container,tag,...text){
    [...text].forEach( str => {
        let _tag=document.createElement(tag)
        var _txtnode=document.createElement(str)
        _tag.appendChild(_txtnode);
        container.appendChild(_tag)
        
    })
}
*/
function NewPoke(){
    mudapoke+=1;
    listapoke();
    bord.style.border="4px solid blue"
    

    setTimeout(muda,1000)
    
}
function muda(){

    bord.style.border="4px solid white"
}





var $btnligaPoke=document.querySelector(".botaomeio1");

var $btndesligaPoke=document.querySelector(".botaomeio2");

$btnligaPoke.addEventListener("click", ligapokedex);
$btndesligaPoke.addEventListener("click", desligapokedex);





var $visorLigado= document.querySelector(".visor");
var $imgescondida= document.querySelector(".pokeinvisor");
function ligapokedex(){
    state="ligado"
    listapoke(1)
.then( resposta => {

   } )
.catch( err => console.log(err) )
   $visorLigado.classList.add("ligado");
   $imgescondida.style.zIndex="3" ;
   $imgescondida.style.transition="3s";   
}

function desligapokedex(){
    mudapoke=1
    listapoke(1)
    .then( resposta => {
    
       } )
    .catch( err => console.log(err) )
    state="desligado"
    $visorLigado.classList.remove('ligado');

    $imgescondida.style.zIndex='-3';
    $imgescondida.style.transition="0s";
}
