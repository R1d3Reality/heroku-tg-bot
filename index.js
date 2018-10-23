const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '763838619:AAE0h1CsibGj51v53YtCqx6dLSiCg4DXvlM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
 bot.SendMessage(chat_id, "1")
  .then(() => {
    return bot.SendMessage(chat_id, "2")
  })
  .then(() => {
    return bot.SendMessage(chat_id, "3")
  });
});


