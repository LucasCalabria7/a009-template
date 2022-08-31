// let nome = prompt("Qual seu nome ?");
// let cor = prompt("Qual é sua cor favorita ?");
// let citacao = prompt("Faça uma citação");
// let letrasNome = nome.length
// let possuiA = nome.includes("a");

// nome = nome.toUpperCase();

// console.log("A cor favorita de " + nome + " é " + cor + " e sua citação é \""+ citacao + "\"");
// console.log(`Nome:${nome} \nCor favorita: ${cor}`);
// console.log("Seu nome tem " + letrasNome + " letras.");
// console.log("Seu nome possui a letra A ? " + possuiA);


let nomeDoUsuario = prompt("Insira seu Usuario");
let emailDoUsuario = prompt("Insira seu Email");
let caracteres = nomeDoUsuario.length

console.log(`O E-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! \nSeu usuario tem ${caracteres} caracteres`);

let fraseReplace = `O E-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! \nSeu usuario tem ${caracteres} caracteres`;
fraseReplace = fraseReplace.replaceAll("r", "l");
console.log(fraseReplace);

let incluiArroba = fraseReplace.includes("@");
console.log(incluiArroba);