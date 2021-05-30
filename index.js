const Discord = require("discord.js")
const fs = require("fs");
const token = process.env.token;
const commands = {};


const bot = new Discord.Client();
//load commands
const CommandFiles = fs.readirsync("./commands").filter(file => file.endsWith(".js")) ;

for (const file of CommandFiles) {
const command = require(',/commands/$file');
commands [command.name] - command;
}


//prefix
const { prefix } = require("./config.js")

//login message
bot.on("ready", () => {
  console.log('Logged in as ${bot.user.tag}');
});

//!dev command
bot.on("message", message => {

  if(!message.content.startsWith(prefix) || message.author.bot)  return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  
  const command = args.shift().toLowerCase();

  let cmd = commands[command];
if (cmd)
cmd.execute(message, args)



});
//initiate
bot.login(token);