const clova = require('@line/clova-cek-sdk-nodejs');
const { CHANNEL_ACCESS_TOKEN } = require('../config.js');

// LINEメッセンジャーAPI
const line = require('@line/bot-sdk');
const client = new line.Client({
  channelAccessToken: CHANNEL_ACCESS_TOKEN
})

const clovaSkillHandler = clova.Client
  .configureSkill()
  .onLaunchRequest(responseHelper => {
    const json = JSON.parse(fs.readFileSync('./daily_positive_detail.json', 'utf8'));
    const latest_data = json.data.slice(-1)[0];
    const date = new Date(latest_data.diagnosed_date);

    responseHelper.setSimpleSpeech(
        SpeechBuilder.createSpeechText(`東京都の${date.getMonth()+1}月${date.getDate()}日の感染者数は${latest_data.count}人です。`)
    );
    responseHelper.endSession();
  })

// スキルが終了するときに呼び出されます

module.exports = clovaSkillHandler;