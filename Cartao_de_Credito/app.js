///function cartao(meuArray){//4083952015263 
  var numeroCartao = prompt("Olá! Digite o número do seu Cartão de Crédito");
  if (numeroCartao == ''){
   alert("Atenção! Digite o número do seu Cartão de Crédito");	
  }else{
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
  function isValidCard(meuArrayInvertido){
    var resultForPair = 0;
    var evenPosition = 0;
    var resultForOdd = 0;
    var total = 0;
    for (i = 1; i < meuArrayInvertido.length; i++){// arrayImpar
      resultForPair = meuArrayInvertido[i]*2;
      //console.log(resultForPair);
      if(resultForPair > 9){
        resultForPair = resultForPair - 9;
        evenPosition = evenPosition + resultForPair;
        //console.log(evenPosition);
      }else{
       evenPosition = evenPosition + resultForPair;
            //console.log ("total é " + evenPosition);
          }
          i++;
      }
      for (j = 0; j < meuArrayInvertido.length; j++){// arrayPar
        resultForOdd += meuArrayInvertido[j];
        //console.log(resultForOdd);
        j++;}
        total = evenPosition + resultForOdd;
        console.log(total);
        // ultima operação 
      if (total % 10 === 0){
		
        document.write ("CARTÃO VÁLIDO!");
      }
      else{
        document.write("CARTÃO INVÁLIDO!");
          }        
  }
isValidCard(meuArrayInvertido);
}