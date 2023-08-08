/*1- Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3

Classificalçao:
-Média menor que 5, recuperação;
-Média entre 5 e 7, passou de semestre;
*/

/*recebendo as notas*/
const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovação');
}else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
}
else {
    console.log('Passou de semestre')
}
