import Endereco from "./endereco"
import { Funcionario } from "./funcionario"
import { Telefone } from "./telefone"
 
export class Empresa {
    public razaoSocial: string
    public nomeFanatasia: string
    public cnpj: string
    public endereco: Endereco
    public telefone: Telefone
    public funcionario: Funcionario[]
 
    constructor(razaoSocial: string, nomeFanatasia: string, cnpj: string, endereco: Endereco, telefone: Telefone, funcionario: Funcionario[]){
        this.razaoSocial = razaoSocial
        this.nomeFanatasia = nomeFanatasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.telefone = telefone
        this.funcionario = funcionario
    }
}