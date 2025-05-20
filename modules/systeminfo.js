const os = require('os');

function getSystemInfo() { // Função para obter informações do sistema
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMemPercent = (((totalMem - freeMem) / totalMem) * 100).toFixed(2);

    const cpus = os.cpus();

    return { // Retorna um objeto com as informações do sistema
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        processor: cpus[0]?.model || 'Desconhecido',
        cores: cpus.length,
        memory: {
            totalMB: Number((totalMem / 1024 / 1024).toFixed(2)),
            freeMB: Number((freeMem / 1024 / 1024).toFixed(2)),
            usedPercent: `${usedMemPercent}%`
        }
    };
}

module.exports = { getSystemInfo };
