// passo 1: Declarando variaveis
let nome = "Dave"; // Nome do Herói
let xp = 10000 // quantidade de xp do herói

// Passo 2: usando if/else para classificar o nivel
 let nivel;

 if (xp < 1000){ // se xp for menor que 1000
 nivel = "ferro";
} else if (xp <= 2000) { //Se XP for entre 1001 e 2000
 nivel = "bronze";
} else if (xp <= 5000) { // Se XP for entre 2001 e 5000
 nivel = "prata";   
} else if (xp <= 7000) { // Se XP for entre 5001 e 7000
nivel = "Ouro";   
} else if (xp <= 8000) { // Se XP for entre 8001 e 9000
nivel = "Platina";
} else if (xp <= 9000) {  // Se XP for entre 9001 e 10000
nivel = "Ascendente"; 
} else if (xp <= 10000){ // Se XP for entre 9001 e 10000
  nivel = "Imortal";
} else {  // Se XP for maior que 10000
    nivel = "Radiante";
}

// Passo 3: Exibir a mensagem
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

