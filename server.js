const http = require('http');
const { getSystemInfo } = require('./modules/systeminfo');
const { getClientInfo } = require('./modules/clientinfo');
const { logAccess } = require('./modules/logger');

const porta = 3000;

const server = http.createServer((req, res) => { // Cria o servidor HTTP
  const systeminfo = getSystemInfo(); 
  const clientInfo = getClientInfo(req); //

  const responseData = { // Dados do servidor e do cliente
    servidor: systeminfo,
    cliente: clientInfo
  };

  logAccess(responseData); // Registra o acesso

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(responseData, null, 2));
});

server.listen(porta, () => { // Inicia o servidor
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


// npm init -y
// npm i mordern 
// npm start

// del logs\acessos.json // deletar o arquivo de log
