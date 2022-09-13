var idade =0
var menos21=0
var mais50=0
while ( idade != 99){
 
var idade =  Number(prompt("digite sua idade"))
if (idade<21){
    menos21++
}

else if (idade>50){
    mais50++
}

}
alert (`O numero de pessoas que tem menos de 21  anosé ${menos21}`)
alert(`o numero de pessoas que tem mais de 50 anos é ${mais50}`)


