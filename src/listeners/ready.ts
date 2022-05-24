import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client):void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            console.log("Bot is not ready");
            return;
        }
        console.log("adding commands" + JSON.stringify(Commands));
        await client.application.commands.set(Commands);
        console.log(`Logged in as ${client.user.username}`);
    });
};