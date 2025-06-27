//Parte 1
// function ehDataValida(dia, mes, ano) {
//   if (
//     !Number.isInteger(dia) ||
//     !Number.isInteger(mes) ||
//     !Number.isInteger(ano)
//   ) {
//     return false;
//   }

//   if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
//     return false;
//   }

//   const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (mes === 2 && ehBissexto(ano)) {
//     if (dia <= 29) return true;
//     else return false;
//   }

//   return dia <= diasPorMes[mes - 1];
// }

// function ehBissexto(ano) {
//   return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
// }

// Você pode testar usando o comando
//console.log(ehDataValida(29, 2, 2020)); // true

//Parte 2
// const readline = require("readline");

// // Cria a interface para leitura
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativas = 0;

// console.log("Adivinhe o número entre 1 e 100!");

// function perguntar() {
//   rl.question("Digite seu palpite: ", (resposta) => {
//     const palpite = Number(resposta);
//     tentativas++;

//     if (isNaN(palpite) || palpite < 1 || palpite > 100) {
//       console.log("Por favor, digite um número válido entre 1 e 100.");
//       return perguntar();
//     }

//     if (palpite === numeroSecreto) {
//       console.log(
//         `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`
//       );
//       rl.close();
//     } else if (palpite < numeroSecreto) {
//       console.log("Mais alto!");
//       perguntar();
//     } else {
//       console.log("Mais baixo!");
//       perguntar();
//     }
//   });
// }

// Parte 3

// const frase = "olá olá mundo mundo";
// const palavras = frase.split(" ");
// const unicas = [];

// for (let i = 0; i < palavras.length; i++) {
//   let palavra = palavras[i];
//   let jaExiste = false;

//   for (let j = 0; j < unicas.length; j++) {
//     if (palavra === unicas[j]) {
//       jaExiste = true;
//       break;
//     }
//   }

//   if (!jaExiste) {
//     unicas.push(palavra);
//   }
// }

//Parte 4
// function fatorial(n) {
//   if (n < 0) {
//     throw new Error("Fatorial não definido para números negativos.");
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }

//Parte 5

// function debounce(fn, delay) {
//   let timerId;

//   return function (...args) {
//     clearTimeout(timerId); // limpa o timer anterior
//     timerId = setTimeout(() => {
//       fn.apply(this, args); // chama fn com os mesmos argumentos e contexto
//     }, delay);
//   };
// }
// Voçe consegue usar chamando o console.log("") e a função Function, exemplo: functio digitar (){console.log("digitei")}

//parte 6

// function memoize(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args); // serializa os argumentos como chave

//     if (cache.has(key)) {
//       return cache.get(key); // retorna resultado em cache
//     }

//     const resultado = fn.apply(this, args); // executa função original
//     cache.set(key, resultado); // armazena no cache
//     return resultado;
//   };
// }

//vc pode usar chamando as funções console.log(memoFatorial(5)); // Calcula e armazena
//console.log(memoFatorial(5)); // Retorna instantaneamente do cache

//Parte 7

// function obterNomesOrdenadosPorPreco(produtos) {
//   return produtos
//     .slice() // copia para não alterar o array original
//     .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
//     .map(produto => produto.nome); // extrai apenas os nomes
// }

//Parte 8

// function somarVendasPorCliente(vendas) {
//   return vendas.reduce((acumulador, venda) => {
//     const { cliente, total } = venda;

//     if (acumulador[cliente]) {
//       acumulador[cliente] += total;
//     } else {
//       acumulador[cliente] = total;
//     }

//     return acumulador;
//   }, {});
// }

// Parte 9

//Função 1
// function paresParaObjeto(pares) {
//   const obj = {};
//   for (let i = 0; i < pares.length; i++) {
//     const [chave, valor] = pares[i];
//     obj[chave] = valor;
//   }
//   return obj;
// }

// //Função 2

// function objetoParaPares(obj) {
//   const pares = [];
//   for (let chave in obj) {
//     if (obj.hasOwnProperty(chave)) {
//       pares.push([chave, obj[chave]]);
//     }
//   }
//   return pares;
// }
