const { platform } = require("os");

function getClientInfo(req) {
    const rawUserAgent = req.headers['user-agent'] || 'Desconhecido';
    const language = req.headers['accept-language']
        ? req.headers['accept-language'].split(',')[0]
        : 'pt-BR';

    const ip = 
        req.headers['x-forwarded-for']?.split(',')[0].trim() ||
        req.connection?.remoteAddress ||
        req.socket?.remoteAddress ||
        req.connection?.socket?.remoteAddress ||
        'IP não identificado';

    let userAgent = 'Desconhecido';
    if (/windows/i.test(rawUserAgent)) userAgent = 'Windows';
    else if (/linux/i.test(rawUserAgent)) userAgent = 'Linux';
    else if (/mac/i.test(rawUserAgent)) userAgent = 'Mac';
    else if (/android/i.test(rawUserAgent)) userAgent = 'Android';
    else if (/iphone/i.test(rawUserAgent)) userAgent = 'iPhone';

    return {
        userAgent,
        ip,
        language,
        platform: platform()
    };
}
module.exports = { getClientInfo };