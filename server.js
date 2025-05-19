const http = require('http');
const { getSystemInfo } = require('./modules/systeminfo');
const { getClientInfo } = require('./modules/clientinfo');

const porta = 3000;

const server = http.createServer((req, res) => {
  const systeminfo = getSystemInfo();
  const clientInfo = getClientInfo(req);

  const responseData = {
    servidor: systeminfo,
    cliente: clientInfo
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(responseData, null, 2));
});

server.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


// npm init -y
// npm i mordern 
// npm start