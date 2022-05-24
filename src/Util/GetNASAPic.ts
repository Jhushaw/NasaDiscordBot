import phin from 'phin';

export class getNasaPic {

    private phin : Function;
    constructor() {
        this.phin = phin;
    }

    public async getPic(): Promise<any> {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        let response = await this.phin({
            url : url, 
            method : 'GET',
            parse : 'json'
        });
        console.log("response url: " + response.body.hdurl);
        return {
            pic_url : response.body.hdurl,
            date: response.body.date,
            title : response.body.title,
            explanation : response.body.explanation
        }
    }
}