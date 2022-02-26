# handle-bot
Complejo manejador de comandos y eventos para tu bot de discord.js con subcarpetas.
>instalación:
```
$ npm i handle-bot
```
## Command handling with subfolders | Manejo de comandos con subcarpetas
Pon todos tus comandos en una coleccion en tu cliente.
_Ejemplo:_


```js
  const { Client, Intents, Collection } = require('discord.js');
  const client = new Client({ intents: ['Your-intents'] });
  const handle = require('handle-bot');
  // Collection ↓

  client.commands = new Collection();

  // Handle
/*
* Primer parametro: ruta de la carpeta de comandos.
* Segundo parámetro: colección de comandos.
* Tercer parámetro: log? [true o false].
*
* ›*‹ = Obligatorio
**/
handle.commands('src/commands'*, client.commands*, true);

// Client login
client.login('token');
```
Mis archivos:
```
AwesomeBot/
├── node_modules/
├── index.js
├── src/
│    └── commands/
│          └── ping.js
├── package.json
└── package-lock.json
```

Y luego de eso puedes hacer tu evento `messageCreate` y pedirle tus comandos a la colección `client.commands`(en este caso usamos ese nombre, puedes usar el que tu quieras)