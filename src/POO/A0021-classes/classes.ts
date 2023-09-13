export class Empresa {
  readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Amazon', '111-11-11');
const colaborador = new Colaborador('Zé', 'Mendes');
const colaborador2 = new Colaborador('Maria', 'Mendes');

empresa.addColaborador(colaborador);
empresa.addColaborador(colaborador2);
empresa.addColaborador({
  nome: 'Luiza',
  sobrenome: 'Lopes',
});

console.log(empresa);
empresa.mostrarColaboradores();
