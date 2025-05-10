// PARA USAR O CÓDIGO, É NECESSÁRIO BAIXAR A BIBLIOTECA PROMPT-SYNC

//INICIO 1

// const prompt = require("prompt-sync")();
// let numero1 = Number(prompt("Escola um número:"));

// if (numero1 % 2 === 0) {
//   console.log("número é par");
// } else console.log("numero é impar");

// FIM
//INICIO 2

// const prompt = require("prompt-sync")();
// let numero1 = Number(prompt("Diga-me sua idade:"));

// idade1 = 14;
// idade2 = 18;
// idade3 = 60;
// idade4 = 61;

// if (numero1 <= idade1) {
//   console.log("Criança!");
// } else if (numero1 > idade1 && numero1 <= idade2) {
//   console.log("Adolecente!");
// } else if (numero1 > idade2 && numero1 <= idade3) {
//   console.log("Adulto!");
// } else console.log("idoso");

// FIM
//INICIO 3

// const prompt = require("prompt-sync")();
// let numero1 = Number(prompt("Diga-me sua nota:"));

// nota1 = 5;
// nota2 = 5.9;
// nota3 = 6;
// notaMaxima = 10;

// if (numero1 < nota1) {
//   console.log("Reprovado!");
// } else if (numero1 > nota1 && numero1 <= nota2) {
//   console.log("Recuperação!");
// } else if (numero1 >= nota3 && numero1 <= notaMaxima) {
//   console.log("Aprovado!");
// } else console.log("Vc não escolheu uma nota valida!");

// FIM
//INICIO 4

// const prompt = require("prompt-sync")();
// let numero1 = Number(prompt("Diga-me qual sua opção:"));

// opcao1 = 1;
// opcao2 = 2;
// opcao3 = 3;

// switch (numero1) {
//   case opcao1:
//     console.log("Parabéns, vc ganhou");
//     break;
//   case opcao2:
//     console.log("Poxa, não foi dessa vez, tente novamente!");
//     break;
//   case opcao3:
//     2;
//     console.log("Poxa, não foi dessa vez, tente novamente!");
// }
// while (numero1 != opcao1) {
//   console.log("tente novamente!");
//   break;
// }

// FIM
//INICIO 5

// const prompt = require("prompt-sync")();

// do {
//   peso = Number(prompt("Qual seu peso?"));
//   let altura = Number(prompt("Qual sua altura?"));

//   peso1 = 16;
//   peso2 = 17;
//   peso3 = 18.5;
//   peso4 = 25;
//   peso5 = 30;
//   peso6 = 35;
//   peso7 = 40;

//   imc = peso / (altura * altura);
//   if (imc <= peso1) {
//     console.log("Magreza Grave!");
//   } else if (imc > peso1 && imc < peso2) {
//     console.log("Magreza moderada!");
//   } else if (imc >= peso2 && imc < peso3) {
//     console.log("Magreza Leve!");
//   } else if (imc >= peso3 && imc < peso4) {
//     console.log("Saudável");
//   } else if (imc >= peso4 && imc < peso5) {
//     console.log("pré-Obesidade");
//   } else if (imc >= peso5 && imc < peso6) {
//     console.log("Obesidade moderada (Grau I)");
//   } else if (imc >= peso6 && imc < peso7) {
//     console.log("Obesidade severa (Grau II");
//   } else if (imc > peso7) {
//     console.log("Obesidade muito severa (Grau III)");
//   }
// } while (peso != 0);

// FIM
//INICIO 6

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Primeiro valor:"));
// let valor2 = Number(prompt("Segundo valor>:"));
// let valor3 = Number(prompt("Terceiro valor:"));

// if (valor1 == valor2 && valor2 == valor3) {
//   console.log("Triângulo eqüilátero!!!");
// } else if (
//   valor1 < valor2 + valor3 &&
//   valor2 < valor1 + valor3 &&
//   valor3 < valor1 + valor2
// ) {
//   console.log("É um Triângulo!!!");
// } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
//   console.log("esse é um triângulo isósceles!!!");
// } else if (valor1 != valor2 && valor2 != valor3) {
//   console.log("Esse é um triângulo escaleno!!!");
// }

// FIM
//INICIO 7

// const prompt = require("prompt-sync")();
// let quantidadeM = Number(prompt("Quantidade de maçãs:"));

// maca = 0.3;
// maca1 = 0.25;

// if (quantidadeM < 12) {
//   console.log(quantidadeM + " Maçãs:");
//   console.log(quantidadeM * 0.3 + " Reais:");
// } else if (quantidadeM >= 12) {
//   console.log(quantidadeM + " Maçãs:");
//   console.log(quantidadeM * 0.25 + " Reais");
// }

// FIM
//INICIO 8

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Primeiro valor:"));
// let valor2 = Number(prompt("Segundo valor:"));

// if (valor1 === valor2) {
//   console.log("Vc escolheu valores iguais, escolha outro valor");
// } else if (valor1 < valor2) {
//   console.log(valor1, valor2);
// } else console.log(valor2, valor1);

// FIM
//INICIO 9

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// FIM
//INICIO 10

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Primeiro valor:"));

// for (let controlador = 10; controlador != 0; controlador--)
//  {
//   console.log(valor1);
// } //O for é a (Valor inicial , condição para repetir, e se vai somar ou diminuir na quantidade de repetição)

// FIM
//INICIO 11

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Primeiro valor:"));
// let valor2 = Number(prompt("Segundo valor:"));
// let valor3 = Number(prompt("Terceiro valor:"));
// let valor4 = Number(prompt("Quarto valor:"));
// let valor5 = Number(prompt("Quinto valor:"));

// valorTotal = valor1 + valor2 + valor3 + valor4 + valor5;

// for (let i = 1; i != 0; i--) {
//   console.log(valorTotal);
// }

// FIM
//INICIO 12

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Escolha o valor:"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = valor1 * i;
//   console.log(`${valor1} x ${i} = ${resultado}`);
// }

// FIM
// INICIO 13

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Escolha o valor:"));
// let valor2 = Number(prompt("Escolha o valor:"));
// let valor3 = Number(prompt("Escolha o valor:"));
// let valor4 = Number(prompt("Escolha o valor:"));
// let valor5 = Number(prompt("Escolha o valor:"));

// valorTotal = valor1 + valor2 + valor3 + valor4 + valor5;

// while (valorTotal != 0) {
//   console.log(
//     valorTotal / 5 + " é a média aritimética dos valores fornecidos."
//   );
//   break;
// }

// FIM
// INICIO 14

// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt("Escolha o valor:"));
// let valorTotal = valor1;
// for (let i = valor1 - 1; i > 1; i--) {
//   valorTotal = valorTotal * i;
//   console.log(valorTotal);
// }

// FIM
// INICIO 15

// const fibSec = [0, 1];

// for (let i = 2; i <= 10; i++) {
//   fibSec.push(fibSec[i - 1] + fibSec[i - 2]);
//   console.log(fibSec.join(", "));
// }
