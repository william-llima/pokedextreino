console.time
const pokecontainer=document.querySelector(".user");
const  teste =document.querySelector('.teste');

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
                    teste.innerHTML=resposta.name;

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
    
    
}


listapoke(1)
.then( resposta => {

   } )
.catch( err => console.log(err) )



var $btnligaPoke=document.querySelector(".botaomeio1");

var $btndesligaPoke=document.querySelector(".botaomeio2");

$btnligaPoke.addEventListener("click", ligapokedex);
$btndesligaPoke.addEventListener("click", desligapokedex);


var $visorLigado= document.querySelector(".visor");
var $imgescondida= document.querySelector(".pokeinvisor");
function ligapokedex(){
    
   $visorLigado.classList.add("ligado");
   $imgescondida.style.zIndex="3" ;
   $imgescondida.style.transition="3s";   
}

function desligapokedex(){
    $visorLigado.classList.remove('ligado');

    $imgescondida.style.zIndex='-3';
    $imgescondida.style.transition="0s";
}
