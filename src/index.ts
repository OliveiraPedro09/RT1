import { Descritor } from "./descritorEmpresa";
import { Empresa } from "./empresa";
import Endereco from "./endereco";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone";

let enderecoEmpresa = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let telefoneEmpresa = new Telefone('11', '9-9999-9999')
let endereco1 = new Endereco(456, 'Rua XV de Novembro', 'Centro', 'Rio de Janeiro');
let telefone1 = new Telefone('21', '9-8765-4321');
let funcionario1 = new Funcionario('Maria Silva', '987654321', '111.222.333-44', endereco1, telefone1);
let endereco2 = new Endereco(789, 'Rua dos Três Rios', 'Copacabana', 'Rio de Janeiro');
let telefone2 = new Telefone('21', '9-1234-5678');
let funcionario2 = new Funcionario('Pedro Costa', '987654322', '555.666.777-88', endereco2, telefone2);
let funcionarios = [funcionario1, funcionario2]
let empresa = new Empresa('ABC LTDA', 'Mercado online', '999-999-999-999-99', enderecoEmpresa, telefoneEmpresa, funcionarios)

let descritor = new Descritor(empresa)
console.log(descritor.descrever())