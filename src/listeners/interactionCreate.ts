import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(command => command.name === interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({ content: "Command not found" });
        return;
    }
    console.log("Running command: " + slashCommand.name);
    await interaction.deferReply();

    slashCommand.run(client, interaction);
};