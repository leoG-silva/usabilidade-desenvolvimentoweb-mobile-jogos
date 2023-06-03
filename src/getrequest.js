const qs = require('querystring');

function handlePostRequest(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const formData = qs.parse(body);
    const nome = formData.Nome || '';
    const email = formData.Email || '';
    const senha = formData.Senha || '';

    const responseHtml = `
    <!DOCTYPE html>
      <html lang="pt-br">

      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1>Dados do FormulÃ¡rio:</h1>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Senha: ${senha}</p>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(responseHtml);
  });
}

module.exports = {
  handlePostRequest,
};