import { Empresa } from "./empresa";
import { Funcionario } from "./funcionario";
 
export class Descritor {
    public empresa: Empresa
    public funcionarios: Funcionario[]

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.funcionarios = empresa.funcionario
    }
 
    public descrever(){
        let descricao = `Razão social: ${this.empresa.razaoSocial} \nNome fantasia: ${this.empresa.nomeFanatasia} \ncnpj: ${this.empresa.cnpj} \nTelefone: ${this.empresa.telefone.ddd} ${this.empresa.telefone.numero} \nEndereco: \nRua: ${this.empresa.endereco.rua} Bairro: ${this.empresa.endereco.bairro} Cidade: ${this.empresa.endereco.cidade} Numero: ${this.empresa.endereco.numero}\n \nFuncionarios: `

        this.empresa.funcionario.forEach(funcionarios => {
        descricao += `\nNome: ${funcionarios.nome} \nMatricula: ${funcionarios.matricula} \ncpf: ${funcionarios.cpf} \nTelefone: ${funcionarios.telefone.ddd} ${funcionarios.telefone.numero} \nEndereço: \nRua: ${funcionarios.endereco.rua} Bairro: ${funcionarios.endereco.bairro} Cidade: ${funcionarios.endereco.cidade} Numero: ${funcionarios.endereco.numero}\n`
        })
        
        return descricao
    }
}