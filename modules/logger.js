const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '../logs/acessos.json'); // Define o caminho do arquivo de log

function logAccess(data){ // Função para registrar o acesso
    const dir = path.dirname(LOG_FILE);
    console.log('Registrando acesso com os dados:', data);

    if (!fs.existsSync(dir)) { // Verifica se o diretório existe
        fs.mkdirSync(dir, { recursive: true }); // Cria o diretório se não existir
    }

    let logs = [];

    if (fs.existsSync(LOG_FILE)) { // Verifica se o arquivo de log existe
        const fileContent = fs.readFileSync(LOG_FILE, 'utf-8'); // Lê o conteúdo do arquivo

 try {
    const fileContent = fs.readFileSync(LOG_FILE, 'utf-8');
    logs = JSON.parse(fileContent || '[]'); // fallback para array vazio
} catch (error) {
    console.error('Erro ao ler o arquivo de log:', error);
    logs = []; // força a continuar com lista vazia
}

    }
logs.push({
    dataHora: new Date().toISOString(), // Adiciona a data e hora atual
    ...data // Adiciona os dados do acesso
});

fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2)); // Escreve os logs no arquivo
}
module.exports = { logAccess }; // Exporta a função de log