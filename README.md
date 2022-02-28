# handle-bot
Complejo manejador de comandos y eventos para tu bot de discord.js con subcarpetas.
>instalación:
```
$ npm i handle-bot
```
## Command handling with subfolders | Manejo de comandos con subcarpetas
Pon todos tus comandos en una coleccion en tu cliente.
_Ejemplo:_

<img src="https://raw.githubusercontent.com/k1-1960/handle-bot/main/zenified-code.jpg.png">

##### Parametros:
- `PATH` · Ruta de la carpeta
- `COLLECTION` · colección creada con `new Collection();`
- `LOG` · `true` si quieres que haga un console.log de los comandos cargados, `false` si no quieres eso.
##### Mis archivos:
```
Bot/
├── node_modules/
├── index.js
├── src/
│    └── commands/
│          └── ping.js
├── package.json
└── package-lock.json
```

Y luego de eso puedes hacer tu evento `messageCreate` y pedirle tus comandos a la colección `client.commands`(en este caso usamos ese nombre, puedes usar el que tu quieras)