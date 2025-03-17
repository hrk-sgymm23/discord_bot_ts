import { Client, Events, GatewayIntentBits, BaseGuildTextChannel } from 'discord.js';
import * as config from '../config.json';

const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

    // クライアントが完全に準備できた後にチャンネルを取得
    const channel = await client.channels.fetch(config.channelId);

    // チャンネルがテキストチャンネルならメッセージを送信
    if (channel && channel.isTextBased()) {
        (channel as BaseGuildTextChannel).send('test');
    } else {
        console.error('チャンネルが見つからないか、テキストチャンネルではありません。');
    }
    // process.exit(0);  // スクリプト終了
});

client.login(config.token);
