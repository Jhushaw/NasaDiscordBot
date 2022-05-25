import { BaseCommandInteraction , Client } from "discord.js";
import { Command } from "../Util/Command";
import { KanyeQuote } from "./KanyeQuotes";

const kanyeClass: KanyeQuote = new KanyeQuote();

export const kanyesays: Command = {
    name: "kanyesays",
    description: "Get a random Kanye quote",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = await kanyeClass.getQuote();

        await interaction.followUp({
            ephemeral: true,
            content:  content + "\n" + "- Kanye Rest"
        })
    }
};


