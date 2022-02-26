const path = require('path');
const { readdirSync } = require('fs');
const events = (client, folder, log) => {
  const eventsPath = path.join(__dirname, `../../${folder}`);
  readdirSync(eventsPath).forEach(async (folders) => {
    const eventFiles = readdirSync(path.join(eventsPath, `/${folders}`)).filter((file) => file.endsWith('.js'));

    for (const file of eventFiles) {
      const event = require(`${eventsPath}/${folders}/${file}`);
      /* Executing the events */
      try {
        if (event.type === 'once') {
          client.once(event.name, (...args) => event.run(client, ...args))
        } else if (event.type === 'on') {
          client.on(event.name, (...args) => event.run(client, ...args))
        }
        if (log) {
          console.log("\x1b[34m", `❱ Event [${event.name}] ready for running.\x1b[0m`);
        }
      } catch (err) {
        console.log(err)
      }
    }
  });
};

module.exports = events;