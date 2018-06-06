// JavaScript Document
//function cartao(meuArray){//4083952015263 
var numeroCartao = prompt("digite o numero do cartao");
var meuArray = numeroCartao.split('');//transformou cada digito em array
meuArrayInvertido = meuArray.reverse();// inverte o array

//Transformando array em inteiros
function arrayInteiros(meuArrayInvertido){
  for (var i in meuArrayInvertido){
meuArrayInvertido[i] = parseInt(meuArrayInvertido[i]);
  console.log(meuArrayInvertido);
  }
 return meuArrayInvertido;
}
arrayInteiros(meuArrayInvertido);

// Separando pares, multiplicando e somando o resultado
function separarMultiplicarSomar(meuArrayInvertido){
  var resultForPair = 0;
  var evenPosition = 0;
  		for (i = 1; i < meuArrayInvertido.length; i++){// arrayImpar
        
    	  resultForPair = meuArrayInvertido[i]*2;
        console.log(resultForPair);

    		if(resultForPair > 9){
      			//var moreThanNine = resultForPair - 9;
            resultForPair = resultForPair - 9;
            evenPosition = evenPosition + resultForPair;
           //evenPosition = evenPosition + moreThanNine;
            console.log(evenPosition);
    		}else {
      			evenPosition = evenPosition + resultForPair;
            console.log (evenPosition);
    		}
    		i++;
		}
} for (i = 0; i < meuArrayInvertido.length; i++){// arrayPar
        // var resultForOdd = 0;
    	  // resultForOdd += resultForOdd;
        // console.log(resultForOdd);
}
separarMultiplicarSomar(meuArrayInvertido);
