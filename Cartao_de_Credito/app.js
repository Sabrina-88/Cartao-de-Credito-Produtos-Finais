var numberCard = prompt("Olá! Digite o número do seu Cartão de Crédito sem espaço.");
if (numberCard === '' || isNaN(numberCard) || numberCard === ' ' ){
 alert("Atenção! Digite o SOMENTE os número do seu Cartão de Crédito.");
}else{
    var myArray = numberCard.split('');
    myArrayInverted = myArray.reverse();


    function arrayInteiros(myArrayInverted){
      for (var i in myArrayInverted){
        myArrayInverted[i] = parseInt(myArrayInverted[i]);
        console.log(myArrayInverted);
      }
      return myArrayInverted;
    }
    arrayInteiros(myArrayInverted);

  
  function isValidCard(myArrayInverted){
    var resultForPair = 0;
    var evenPosition = 0;
    var resultForOdd = 0;
    var total = 0;
    for (i = 1; i < myArrayInverted.length; i++){// arrayImpar
      resultForPair = myArrayInverted[i]*2;
      if(resultForPair > 9){
        resultForPair = resultForPair - 9;
        evenPosition = evenPosition + resultForPair;
      }else{
       evenPosition = evenPosition + resultForPair;
          }
          i++;
        }
      for (j = 0; j < myArrayInverted.length; j++){
        resultForOdd += myArrayInverted[j];
        j++;}
        total = evenPosition + resultForOdd;
        console.log(total);
        if (total % 10 === 0){
          
          document.write ("CARTÃO VÁLIDO!");
        }
        else{
          document.write("CARTÃO INVÁLIDO!");
        }        
      }
      isValidCard(myArrayInverted);
    }
