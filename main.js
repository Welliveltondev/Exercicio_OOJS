function Pessoa(nome, cpf, rg, idade, nacionalidade, naturaliade, ) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
    this.naturaliade = naturaliade;
    
}

function Funcionario(cargo, salario, turno) {
    this.cargo = cargo;
    this.salario = salario;
    this.turno = turno;
    
    Funcionario.call(this);
}

const Toni = new Pessoa("Toni", 1234567891, 12345678901, 28, "Brasil", "Feira de Santa/BA" );
const Jose = new Pessoa("Jose", 23412333323, 232343534, 56, "brasil", "salvador/BA", "pedreiro")
const pessoa = new Pessoa("Marta", 999999999999, 8888888888888, 32, "Brasil", "São Paulo/SP");
const pessoa2 = new Pessoa("Peter", 20000000440, 1111111111, 34, "EUA", "Texas",);
const funcionario = new Funcionario("Rodoviario", 2200, "Matutino");
const funcionario2 = new Funcionario("Pedreiro", 3333, "manhã")

console.log(Toni);
console.log(Jose);
console.log(pessoa);
console.log(pessoa2);
console.log(funcionario);
console.log(funcionario2);