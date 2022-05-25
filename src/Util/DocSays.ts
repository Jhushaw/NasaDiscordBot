import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "./Command";


export class docSayings {


    constructor() {

    }

    public docSays(): string {
        switch (this.getRandomInt(0,5)) {
            case 0:
                return "1 step back, 2 steps forward. Let’s climb the mountain, let’s dominate. Violence, speed, and momentum and guess what? We’re at the tippity top of the mountain...but we’re really only half way up.";
            case 1:
                return "Lets talk about me, lets talk about the 6 foot 8 frame the 37inch vertical leap the black steel that drips down my back a.k.a the bulletproof mullet the google prototype scopes from built-in lcd led 1080p 3D sony technology the ethiopian poisonous caterpillar a.k.a the slick daddy lets talk about the cabinets right behind me that go 40 deep into the wall that houses the other 95% of my trophies. the awards, certificates all claiming first place right? let me give you a little inside glimpse of the hotshot video gaming lifestyle of the two time international video gaming superstar because thats what this channel is about, thats what this domain is about, thats what the society is about, youre looking at the face of twitch and god damn, is twitch lucky";
            case 2:
                return "You gotta fly with the eagles into a whole other world into a whole other video game domain. You gotta have the rhythm of a sleazy 70s muscle man combined with the ruthlessness of a 1990s video game killer in the online gaming community. I'm a 6 foot 8 gaming powerhouse like I've said many many many times. I'm the 1993 1994 two time back to back, yea, multiple years back to back consecutive years, the two time blockbuster video game champion in the online gaming community. I'm an international video game superstar. Trust me when I say this, when I hop out of the 1990 Lamborghini Diablo VT...everyone's wants a picture.";
            case 3:
                return "TWITCH COMMUNITY YOU WANT ME TO TRY HARD IN THIS GAME? THEN YOU'RE GOING TO GET RESULTS.";
            case 4:
                return "WE WENT THROUGH A WATERSLIDE OF SUCCESS. AND ALL THESE PUNK KIDS WERE AT THE BOTTOM, IN THE little KIDDY POOL, NOT KNOWING THAT A 6 foot 8 ..OH MY GOD..FREAK OF NATURE IS COMING DOWN THE WATER SLIDE AT 95 MPH BUTT NAKED FULLY VASOLINED FROM HEAD TO TIPPY TOE. READY TO KNOCK EVERY SINGLE LITTLE KID OUT...";
            case 5:
                return "I'm not sure what you mean.";
            default:  
                return "I'm at the tippity top of the mountain, but I'm only half way up.";
        }
    }


    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
}


export const docSays: Command = {
    name: "docsays",
    description: "docsays",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = new docSayings().docSays();

        await interaction.followUp({
            ephemeral: true,
            content:  content
        })
    }
};