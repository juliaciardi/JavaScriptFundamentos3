class pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

class aluno extends pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const aluno = new aluno("Jefferson", "Desenvolvimento de Sistemas");
console.log(aluno);