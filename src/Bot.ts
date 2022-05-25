import { Client } from 'discord.js';
import { DISCORD_TOKEN } from './secrets/Constants';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';


console.log("bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(DISCORD_TOKEN);