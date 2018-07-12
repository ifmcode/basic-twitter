const TelegramBot = require('node-telegram-bot-api');
const users = require('../users/users.model');

const TelegramToken = '608915233:AAESwEDPZYlYGjXMk_4PaTJzBz2RxVG5X9I';

const token = TelegramToken;
const bot = new TelegramBot(token, {polling: true});

// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
//probando bot
bot.on('message', (msg) => {
    var Hola = "hola";
    if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
        bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name + ", yo soy el bot de sakro");
    }
});

bot.onText(/\/users/, (msg) => {
    const chatId = msg.chat.id;
    const myId = msg.from.id;
    bot.sendMessage(chatId, "Los usuarios registrados son: " + getNameOfUSers());  
});

function getNameOfUSers(){
    const names = "";
    usuarios = users.find({});
    usuarios.forEach(user => {
        name += user.username;
    });
    console.log(names);
    return names;
}

module.exports = bot;