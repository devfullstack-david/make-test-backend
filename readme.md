# API de Avaliações

## Descrição do Projeto
Bem-vindo à API de **Avaliações**! Esta API foi desenvolvida para permitir que **professores, mestres ou gestores de empresas e escolas** possam criar e atribuir avaliações a **usuários** como alunos, funcionários ou colaboradores.

A solução busca facilitar o gerenciamento de avaliações, oferecendo um sistema robusto, escalável e de fácil uso.

## Tecnologias Utilizadas
- **Linguagem:** C#
- **Framework:** ASP.NET Core
- **ORM:** Entity Framework Core
- **Banco de Dados:** MySQL

## Funcionalidades Principais
- **Cadastro de Avaliações:** Professores ou gestores podem criar avaliações.
- **Atribuição de Avaliações:** As avaliações podem ser atribuídas a usuários específicos.
- **Gerenciamento de Usuários:** Possibilidade de listar e organizar os participantes.
- **Integração com Banco de Dados MySQL** via Entity Framework.

## Requisitos para Execução
Para executar este projeto em sua máquina local, você precisa ter:
1. **.NET SDK 6.0 ou superior**
2. **MySQL Server** instalado e configurado
3. **Ferramenta de gerenciamento de pacotes NuGet**

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Configure o banco de dados**:
   - Edite o arquivo `appsettings.json` com as credenciais do seu banco MySQL:
     ```json
     "ConnectionStrings": {
         "DefaultConnection": "Server=seu-servidor;Database=sua-base;User=seu-usuario;Password=sua-senha;"
     }
     ```

3. **Restaure os pacotes e execute as migrações**:
   ```bash
   dotnet restore
   dotnet ef database update
   ```

4. **Execute a API**:
   ```bash
   dotnet run
   ```

5. Acesse a API no navegador ou via **Postman**:
   - URL padrão: `https://localhost:5001`

## Estrutura do Projeto
```
src/
├── Controllers/      # Controladores MVC
├── Models/           # Modelos de dados
├── Services/         # Serviços da camada de negócios
├── Data/             # Contexto do EF Core e migrações
├── appsettings.json # Configurações da aplicação
└── Program.cs       # Inicialização da aplicação
```

## Autor
**David Santos**  
Desenvolvedor Full-Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=flat&logo=linkedin&logoColor=0E76A8)](https://www.linkedin.com/in/seu-linkedin)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=flat&logo=github&logoColor=white)](https://github.com/seu-usuario)

---
**Observação:** Contribuições são bem-vindas! Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests**.

