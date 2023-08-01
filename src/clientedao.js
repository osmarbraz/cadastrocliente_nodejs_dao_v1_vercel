/**
 * Classe de acesso a dados de clientes.
 */

// Import das bibliotecas próprias
// Cria a conexão com o banco de dados utilizado pelo objeto 'sql'
const db = require("./dbconfig");

// Cria a classe de conexão com o banco de dados
const { sql } = require ('@vercel/postgres');

// Define a classe ClienteDAO 
class ClienteDAO {

    /**
     * Retorna uma lista com todos os clientes.
     * 
     * @returns uma lista.
     */
    getLista(){
        return sql`SELECT clienteId, nome, cpf FROM cliente order by clienteId;`;
    }

    /**
     * Retorna um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns Os dados do cliente.
     */
    getCliente(clienteId){
        return sql`SELECT clienteid, nome, cpf FROM cliente where clienteid = ${clienteId};`;
    }

    /**
     * Insere um novo cliente.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @returns 
     */
    inserir(clienteId, nome, cpf){
        return sql`INSERT INTO CLIENTE (clienteid, nome, cpf) VALUES (${clienteId}, ${nome}, ${cpf});`;
    }

    /**
     * Altera os dados de um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @returns 
     */
    alterar(clienteId, nome, cpf){
        return sql`UPDATE CLIENTE SET nome = ${nome}, cpf = ${cpf} WHERE clienteid = ${clienteId};`;
    }

    /**
     * Exclui um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns 
     */
    excluir(clienteId){
        return sql`DELETE FROM cliente where clienteid = ${clienteId};`;
    }
}

// Exporta o modelo
module.exports = ClienteDAO;