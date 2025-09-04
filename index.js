const express = require('express'); // importa o Express
const app = express(); // cria a aplicação
const PORT = 3000; // define a porta

// rota principal
app.get('/', (req, res) => {
  res.send('Hello World!'); // envia a resposta
});

// iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
