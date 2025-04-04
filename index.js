const funcionariosJSON = `
{
  "funcionarios": [
    {
      "id": 1,
      "nome": "Ana Silva",
      "cargo": "Vendedora",
      "salario": 2000,
      "vendas": 220
    },
    {
      "id": 2,
      "nome": "Carlos Oliveira",
      "cargo": "Gerente",
      "salario": 5000,
      "vendas": 300
    }
  ]
}
`

const convertFuncionariosJSON = JSON.parse(funcionariosJSON);


const controleFuncionario = () => {

  const META_VENDAS_EMPRESA = 100;

  return {

      exibirFuncionarios: function() {
        return console.log(convertFuncionariosJSON);
      },
      
      //Função que adiciona um funcionário
      adicionarFuncionario: function(nome, cargo, salario) {

      let ids = []; //Armazena os ids dos funcionários
    
      for (let i = 0; i < convertFuncionariosJSON.funcionarios.length; i++) {
        const {id} = convertFuncionariosJSON.funcionarios[i];
        ids.push(id);
      }
  
    
      //É pego o número máximo da lista ids para ser somado com 1 para ter um id novo e em ordem.
      let ultimoID = Math.max(...ids);
      id = ultimoID + 1;
    
      let vendas = 0;

      //Por questões de eficiência e segurança, o id é definido automáticamente.
      convertFuncionariosJSON.funcionarios.push({id, nome, cargo, salario, vendas});

    },

    //Procura um funcioário pelo ID
    pesquisarFuncionario: function(searchID) {

      let funcionarioEncontrado = false;

      for (let funcionario of convertFuncionariosJSON.funcionarios) {

        if (searchID === funcionario.id) {
          funcionarioEncontrado = true;
          console.warn(funcionario)
        }
      }

      if (!funcionarioEncontrado) {
        console.error("ID não encontrado!");
      }
    },

    //Função que remove o funcionário pelo ID
    removerFuncionario: function(searchID) {

      let funcionarioEncontrado = false;

      for (let i = 0; i < convertFuncionariosJSON.funcionarios.length; i++) {

        if (searchID === convertFuncionariosJSON.funcionarios[i].id) {
          console.warn(`Funcionário ${convertFuncionariosJSON.funcionarios[i].nome} removido com sucesso.`);
          convertFuncionariosJSON.funcionarios.splice(i, 1); //Remove o funcionário
          funcionarioEncontrado = true;
          break;
        }
      }

      if (!funcionarioEncontrado) {
        console.error("ID não encontrado!");
      }
    },

    //Função que modifica a quantidade de vendas. É possível aumentar e diminuir. Se usar true, aumenta, se false, diminui.
    modificarVendasFuncionario: function(searchID, numeroVendas, aumentar=true) {

      let funcionarioEncontrado = false;

      for (let funcionario of convertFuncionariosJSON.funcionarios) {

        if (searchID === funcionario.id) {
          funcionarioEncontrado = true;
          if (aumentar) {
            funcionario.vendas += numeroVendas;
          } else {
            funcionario.vendas -= numeroVendas;
          }
        }
      }

      if (!funcionarioEncontrado) {
        console.error("ID não encontrado!");
      }

    },

    //Função que verifica se o funcionário bateu a meta da empresa, se sim, é calculado a comissão e push para o json.
    verificarPossibilidadeAumentoSalario: function() {

      for (let i = 0; i < convertFuncionariosJSON.funcionarios.length; i++) {

        const {salario} = convertFuncionariosJSON.funcionarios[i];

        if (convertFuncionariosJSON.funcionarios[i].vendas > META_VENDAS_EMPRESA) {
          convertFuncionariosJSON.funcionarios[i].comissao = (salario * 10) / 100;
        }
      }
    },

    //Função que gera o relátorio de cada funcionário da empresa.
    gerarRelatorio: function() {

      console.log(`Relatório de cada membro da Empresa\n`);

      convertFuncionariosJSON.funcionarios.forEach((f) => {

        f.status = f.vendas >= META_VENDAS_EMPRESA ? "Atingiu meta" : "Não atingiu meta";
        
        console.log(`${f.nome} (${f.cargo}) | Salário: R$${f.salario.toFixed(2)} | Vendas: ${f.vendas} | Status: ${f.status}`);

      })
  
    },

    //Função que gera o relatório da empresa
    relatorioEmpresa: function() {

      let vendasEmpresa = 0;
      let valorTotalSalarios = 0;

      for (let f of convertFuncionariosJSON.funcionarios) {

        vendasEmpresa += f.vendas;
        valorTotalSalarios += f.salario;

      }

      let mediaVendas = vendasEmpresa / convertFuncionariosJSON.funcionarios.length;
      let mediaSalarial = valorTotalSalarios / convertFuncionariosJSON.funcionarios.length;
      
      let melhorMembro = ``;

      //Armazena a maior venda por padrão índice 0 para percorrer.
      let maiorVenda = convertFuncionariosJSON.funcionarios[0].vendas;

      for (let i = 0; i < convertFuncionariosJSON.funcionarios.length; i++) {

        const {vendas} = convertFuncionariosJSON.funcionarios[i];

        if (vendas >= maiorVenda) {
          melhorMembro = convertFuncionariosJSON.funcionarios[i].nome;
          maiorVenda = vendas;
        }
      }

      console.log(`RELATÓRIO DA EMPRESA\n`);
      console.log(`Vendas no mês: ${vendasEmpresa}\nSalário Total: ${valorTotalSalarios}\nMédia de Vendas ${mediaVendas}\nMédia Salarial: ${mediaSalarial}\nMaior número de vendas de um MEMBRO: ${maiorVenda}\nMelhor Membro (Funcionário): ${melhorMembro}`);

    }
  }
}

const sistema = controleFuncionario();


//Recomendo você ler o README.md antes de iniciar.
