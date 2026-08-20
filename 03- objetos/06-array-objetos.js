const alunos =[
    {nome: "Fernanda", nota:8},
    {nome: "giovamna", nota:5},
    {nome: "giulia", nota:7},
    {nome: "guilherme", nota:2},
];
console.log(alunos);
console.log("=================");

const aprovados = alunos.filter((alunos) => aluno.nota >= 7);

console.log(aprovados);
console.log("==================");

aprovados.forEach((aluno) =>{
console.log(`O aluno ${aluno.nome} é bom tirou a nota ${aluno.nota}`)
});