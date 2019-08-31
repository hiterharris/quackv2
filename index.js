// {TODO: pass API response to Card component}
const yelp = require('yelp-fusion');
const apiKey = '4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx';
const searchRequest = {
    location: 'charlotte'
};
const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
    const singleResult = response.jsonBody.businesses[0];
    const results = response.jsonBody.businesses;
    console.log(JSON.stringify(results, null, 4));
}).catch(e => {
    console.log(e);
});

// node index.js