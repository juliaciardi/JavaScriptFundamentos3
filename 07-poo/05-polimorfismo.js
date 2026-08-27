class Pessoa{
    apresentar(){
        console.log("Sou uma pessoa");
    }
}

class Professor extends Pessoa{
    apresentar(){
        console.log("Sou um Professor");
    }
}

class Aluno extends Pessoa{
    apresentar(){
        console.log("Sou um Aluno");
    }
}