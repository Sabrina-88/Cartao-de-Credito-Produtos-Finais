// JavaScript Document
//function cartao(meuArray){//4083952015263 

var numeroCartao = prompt("digite o numero do cartao");
//[4, 0, 8, 3, 9, 5, 2, 0, 1, 5, 2, 6, 3 ]
var meuArray = numeroCartao.split('');//transformou cada digito em array
meuArrayInvertido = meuArray.reverse();// inverte o array


//Transformando array em inteiros
function arrayInteiros(meuArrayInvertido){
  for (var i in meuArrayInvertido ){
meuArrayInvertido[i] = parseInt(meuArrayInvertido[i]);
  console.log(meuArrayInvertido);
  }
 return meuArrayInvertido;
}

arrayInteiros(meuArrayInvertido);



function parEimpar(arrayInteiros){
for (var i = 0; i < meuArrayInvertido.length; i++){
  if (i % 2 !== 0){
    console.log("Indice é "+ [i] + ". E o valor é " + meuArrayInvertido[i]);
 }
  var multiplicaDois = meuArrayInvertido[i] * 2;
    console.log(meuArrayInvertido[i] + " x 2 = " + multiplicaDois);
  if(multiplicaDois >9){
   var numMaiorqueNove = multiplicaDois - 9;
   console.log("- 9 = " + numMaiorqueNove);
}
}

//somar todos os multiplicaDois e depois somar os impares e depois somar todos para dar o valor total???
// else (i % 2 === 0){ somar numeros entre si numa variavel soma impares}
for (var i = 0; i < meuArrayInvertido.length; i++){
    if(i % 2 === 0){
 console.log("Indice "+ i + ". E o valor é " + meuArrayInvertido[i]);
 }
 }
}
parEimpar();