const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '537126953:AAGAM4J0G9e2kXVbUQ09uTfSWA-SGn_1qFU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var answers = ["Здаров! Я Тарасевич!", "Гришка позвал бухать! Пошли с нами!", "Моя сестра Ленка - девка, что надо! Приходите ней в Гришкин подъезд, Вы и Ваш друг останитесь довольны!", "Где мой друган Гришка? Где этот алкаш?", "Кто меня спрашивал? Я уже на кафедре. А вот Федорыч еще не приходил.", "Я уже запамятовал свое имя. Все зовут меня Тарасевич.", "А Гришка, друган мой, пьет бухает по черному. Скоро от давления водяры выпитой его геморрой лопнет. Согнется старый то", "А Гришка то. Последнее время буянит. Чуть ли хату не расхерачил. Ниндзя хренов."];
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, answers[Math.floor(Math.random() * (answers.length))]);
});
