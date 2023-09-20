export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camisa', 30.9);
const produto2 = new Produto('Relógio', 300.9);
const produto3 = new Produto('Sapato', 400.9);
const carrinho = new CarrinhoCompras();

carrinho.inserirProdutos(produto1);
carrinho.inserirProdutos(produto2);
carrinho.inserirProdutos(produto3);

console.log(carrinho);
