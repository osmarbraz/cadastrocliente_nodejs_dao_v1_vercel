# Programa servidor API-REST do CRUD de Cliente utilizando Node.js e Vercel Postgres com DAO.

- O projeto foi desenvolvido no VSCodde deve ser chamado cliente_nodejs_dao_v1_vercel.
- Programa cliente está no projeto "cadastrocliente_reactjs_v1_vercel".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela cliente possui os campos clienteId, nome e cpf.

- Dependências:    
    - express,
    - cors,
    - dotenv
    - @vercel/postgres.

- Execução:    
   <pre><code>npm start</code></pre>

- Atualização:

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>     

- Arquivos em src:
    - index.js - Programa principal com o servidor Express.
    - clientedao.js - Classe de acesso aos dados do banco de dados.
    - clienterecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
    - dbconfig.js - Contêm as configurações e conexão com o banco de dados.
    - servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

- Vercel   
    https://cadastrocliente-nodejs-dao-v1-vercel.vercel.app/    