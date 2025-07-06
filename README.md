# 🔪 Make Test - Backend

Este é o backend da aplicação **Make Test**, uma plataforma moderna para **criação e realização de avaliações online**.
A proposta é tirar as avaliações do papel e levá-las para o mundo digital com organização, segurança e escalabilidade.

---

## ✨ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Express**
* **Prisma ORM**
* **MySQL**
* **JWT (Autenticação)**
* **bcrypt (hash de senha)**
* **dotenv**
* **Clean Architecture**

---

## 🧱 Estrutura de Pastas (Clean Architecture)

```
src/
├── domain/                 # Regra de negócio pura
│   ├── entities/           # Entidades (ex: User, Test)
│   ├── interfaces/         # Contratos (ex: UserRepository)
│   └── use-cases/          # Casos de uso (ex: RegisterUser)
├── application/            # Orquestra casos de uso / serviços auxiliares
│   └── services/           # Serviços como AuthService
├── infrastructure/         # Banco de dados, clientes externos
│   └── database/           # Prisma Client e repositórios
├── presentation/           # Interface com o mundo externo (HTTP)
│   ├── controllers/        # Lógica de entrada da aplicação
│   └── routes/             # Rotas do Express
└── index.ts                # Entry point
```

---

## ⚙️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/make-test-backend.git
   cd make-test-backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o `.env`:

   ```env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
   JWT_SECRET="uma_chave_secreta_segura"
   PORT=3000
   ```

4. Configure o Prisma e o banco:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

---

## 🛠️ Scripts Disponíveis

| Comando             | Descrição                              |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Inicia a API em modo desenvolvimento   |
| `npx prisma studio` | Interface visual para o banco de dados |

---

## 🔐 Autenticação

A aplicação usa **JWT** para autenticação.
Endpoints protegidos exigem o token no cabeçalho:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📬 Rotas Básicas (exemplo)

### Registrar usuário

```http
POST /api/register
```

```json
{
    "email": "davidsantos@gmail.com",
    "name": "David",
    "lastName": "Santos",
    "company": "Lego BR",
    "birthday": "2002-07-25T00:00:00Z",
    "password": "1234david",
    "confirmPassword": "1234david"
}
```

### Login

```http
POST /api/login
```

```json
{
    "email": "davidsantos@gmail.com",
    "password": "1234david"
}
```

> Retorna um token JWT para acessar rotas protegidas.

---

## 📈 Objetivo do Projeto

O **Make Test** nasceu com o objetivo de permitir que escolas, professores e avaliadores criem **avaliações interativas**, digitais, com acompanhamento e feedback em tempo real — modernizando o processo de avaliação educacional.

---

## 🧑‍💻 Futuras Funcionalidades

* Painel administrativo para gerenciar provas e resultados
* Agendamento de avaliações
* Feedback automático por IA (usando GPT 🧠)
* Suporte a múltiplos formatos de questão
* Exportação de relatórios

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se livre para abrir *Issues* ou *Pull Requests*.

---

## 👨‍💼 Desenvolvido por

**David Santos**
Com carinho, código limpo e boas práticas 🧼💙

---

## 📄 Licença

Este projeto está licenciado sob a MIT. Veja o arquivo `LICENSE` para mais detalhes.
