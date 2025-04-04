# Sistema de Gerenciamento de Funcionários

Este é um sistema simples e eficiente de gerenciamento de funcionários, desenvolvido em **JavaScript puro**, com foco em lógica, organização e controle de equipe. Ideal para treinar habilidades de lógica de programação, manipulação de JSON e construção de sistemas organizacionais.

## 🚀 Funcionalidades

- ✅ Cadastro automático de funcionários com ID único
- 🔍 Pesquisa de funcionário por ID
- ❌ Remoção de funcionários
- 📈 Alteração da quantidade de vendas (aumentar/diminuir)
- 💰 Cálculo automático de comissões com base em metas
- 📊 Relatório individual de funcionários
- 🏢 Relatório empresarial com dados consolidados

## Como usar

```
- git clone https://github.com/seu-usuario/sistema-funcionarios.git
- cd sistema-funcionarios
- Execute o arquivo index.js em um ambiente Node.js ou navegador (via console).
```

## 📌 Exemplo de Uso

```javascript
const sistema = controleFuncionario();

sistema.adicionarFuncionario("Pedro", "Gerente", 5000); //Adiciona um funcionário
sistema.modificarVendasFuncionario(3, 150); //Adiciona ou remove uma quantidade de vendas pelo ID
sistema.removerFuncionario(2); //Remove o funcionário pelo ID
sistema.verificarPossibilidadeAumentoSalario(); //Verifica as vendas dos funcionários para aplicação da comissão
sistema.gerarRelatorio(); // Gera o relátorio de cada funcionário
sistema.relatorioEmpresa(); //Gera o relátorio da empresa;
sistema.exibirFuncionarios(); //Exibe os funcionários com todas as informações.
