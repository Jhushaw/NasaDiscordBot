import phin from 'phin';

export class KanyeQuote {

    private phin : Function;
    constructor() {
        this.phin = phin;
    }

    public async getQuote(): Promise<string> {
        let url = 'https://api.kanye.rest/';
        let response = await this.phin({
            url : url, 
            method : 'GET',
            parse : 'json'
        });
        console.log("response quote: " + response.body.quote);
        return response.body.quote;
    }
}