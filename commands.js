const path = require('path');
const { readdirSync } = require('fs');
const commands = (folder, collection, log) => {
  let commandsPath = path.join(__dirname, `../../${folder}`);
  readdirSync(commandsPath).forEach(async (folders) => {
    const commandFiles = readdirSync(path.join(commandsPath, `/${folders}`)).filter((file) => file.endsWith(".js"));

    /* Set commands */
    for (const file of commandFiles) {
      const command = require(`${commandsPath}/${folders}/${file}`);
      collection.set(command.name, command);
      if (log) {
        console.log("\x1b[35m", `❱ Command [${command.name}] loaded.\x1b[0m`);
      }
    }
  });
}

module.exports = commands;