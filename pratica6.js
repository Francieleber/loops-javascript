var  n
var soma = 0
var i=0
var media
do{
   var n= Number(prompt("Digite um numero"))  
   if(n % 3 ==0){
   i++
   soma += n}
} while(n!=0)
i--;
media =soma / i

alert(`A soma dos multiplos de 3 é${media}`)