//Diferença entre obj e instância

//instância == cookie 
//é um objeto que já existe
//tem vários diferentes no mundo
//passa por um processo de criação == instancia 

//objeto == cookie cutter
//molda/modela uma instância
//são regras de comportamento de um cookie


// objeto/main
// atributos/variaveis genéricas
// metodos/funções genéricas

//encapsulamento 
//proteger os seus dados

class Pessoa{
    //private var name; // name atributo encapsulado
    //name pertence ao cookie cutter 'Pessoa'
    //name1 pertence à instancia1
    //da as primeiras caracteristicas para nossa Pessoa
    constructor(name1, age, lName){
        this.name = name1;
        this.age = age;
        this.lName = lName;
        this.amigos = [];
    }

    seApresentar(){
        return `${this.name} diz: Tenho ${this.age} anos`;
    }

    //getters e setters
    //coletar e definir os dados
    getName(){
        return this.name;
    }
    
    setName(name2){
        this.name = name2;
        return 0;
    }

    addAmigo(amigoNovo){
        return this.amigos.push(amigoNovo);
    }

}