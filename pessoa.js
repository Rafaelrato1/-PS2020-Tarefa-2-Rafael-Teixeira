class Pessoa {

  constructor ( nome, idade ) {
    this.nome = nome;
    this.idade = idade;
    this.uni = [];
    this.rep = [];
    this.irmao = [];
  }

  getNome() {
    return this.nome;
  }
  
  pedirConta () {
    if (!this.bar){
      return true;
    }else{
      return false;
    }
  }
}

class Garcom extends Pessoa {

  constructor ( nome, idade ) {
    super ( nome , idade );
    this.bar = 'Clube da Cerveja';
  }

  checarIDs (cliente) {
    if( cliente.idade >= 18 ){
      console.log(cliente.nome + ' pode tomar Cerveja.');
    }else{
      console.log (cliente.nome + ' vai tomar Coca-Cola.');
    }
  }
}