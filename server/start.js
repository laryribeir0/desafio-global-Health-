require('dotenv').config();

const App = require('./App');

function start() {
  const app = new App().express;
  const port = process.env.PORT;

  app.listen(port, () => console.log(`⚡ servidor rodando http://localhost:${port}`));
}

start();