import { BaseCommandInteraction , Client } from "discord.js";
import { Command } from "../Util/Command";
import { getNasaPic } from "./GetNASAPic";

const picClass: getNasaPic = new getNasaPic();

export const getPic: Command = {
    name: "nasapic",
    description: "Get a picture from NASA",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = await picClass.getPic();

        await interaction.followUp({
            ephemeral: true,
            content: content.pic_url + "\n" + content.title + "\n" + content.explanation
        })
    }
};
