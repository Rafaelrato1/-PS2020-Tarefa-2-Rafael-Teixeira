class Pedido {

  constructor () {
    this.produtos = [];
    this.cardapio = [];
  }

  pedir ( produto, qtde ) {
    for( let i = qtde ; i > 0 ; i --){
      this.produtos.push ( produto ) ;
    }
    console.log ('Seu pedido chegou na mesa!');  
  }

  calcularTotal () {
    let total=0;
    for ( let i = 0 ; i < this.produtos.length ; i++ ) {
      total += this.produtos[i].valor;
    }
    return `A conta deu R$${total} galerinha`;
  }

  calcularIndividual () {
    let totalCerv = 0;
    let totalRefri = 0;
    for ( let i = 0 ; i < this.produtos.length ; i++ ) {
      if(this.produtos[i].nome == 'Cerveja'){
        totalCerv += this.produtos[i].valor;
      }else{
        totalRefri += this.produtos[i].valor;
      }
    }
    return `Deu ${totalCerv/2} para quem bebeu cerveja e ${totalRefri/2} para quem bebeu refrigerante.`;
  }
}