# Comandos

- npm init // Cria o package.json para iniciar o projeto node
- npm i cd api-exprenome_pacote // Instala um pacote especifico
- npm install // Instala todos os pacotes do package.json
ou
- npm i // Instala todos os pacotes do package.json

# Comandos Git

// configura o usuário e o email na maquina
- git config --global user.name "Jhonautas"
- git config --global user.email "cassio.cruz@ifsp.aluno.edu.br"

- git init // Inicia o git em uma pasta 
- git remote add origin _url_do_github // vincula meu projeto local ao repositório do github

# Tópicos Importantes

- O que é Framework (Um framework é uma estrutura de código pronta que fornece ferramentas, bibliotecas e regras para facilitar o desenvolvimento de aplicações.
)
- O que é JavaScript (É uma linguagem de progamação)

- O que é npm (Node Package Manager/ Gerenciador de pacotes do node)

- O que é Node.js (É um ambiente run time que roda no js, e ele tbm é crossplataforma(roda em vários navegadores))

- O que é Express (É um framework para desenvolver o backend do site)

- Protocolo http (é o protocolo que estabele as regras das requisições e repostas da web)

- Métodos http (GET, POST, PUT,  PATCH, DELETE)

- GET: Usado para buscar informações (sem alterar nada no servidor).

- POST: Usado para enviar dados e criar um novo recurso no servidor.

- PUT: Usado para atualizar um recurso por completo.

- PATCH: Usado para atualizar parcialmente um recurso.

- DELETE: Usado para remover um recurso.

- Como mudar o formato de importação/exportação de require para import(Adicionar no package.json a propriedade type: "module")
- --watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucessos!'})
})

- metodo criar/inserir: post
- Rota ou endereço: /produto
- tipo de resposta: json