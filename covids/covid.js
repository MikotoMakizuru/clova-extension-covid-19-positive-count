const clova = require('@line/clova-cek-sdk-nodejs');
const { CHANNEL_ACCESS_TOKEN } = require('../config.js');

// LINEメッセンジャーAPI
const line = require('@line/bot-sdk');
const client = new line.Client({
  channelAccessToken: CHANNEL_ACCESS_TOKEN
})

const clovaSkillHandler = clova.Client
  .configureSkill()
  // スキルが起動したときに呼び出されます
  .onLaunchRequest(responseHelper => {
    responseHelper.setSimpleSpeech(
      clova.SpeechBuilder.createSpeechText('ご注文は何にしましょうか？')
    );
  })
  
// スキルが終了するときに呼び出されます
  .onSessionEndedRequest()
  .handle();

module.exports = clovaSkillHandler;