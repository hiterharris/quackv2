import {useEffect, useState} from 'react';
import axios from 'axios';

    const [business, setBusiness] = useState([]);

    useEffect( () => {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`
            },
            params: {
                location: 'charlotte',
            }
        
        })
        .then(response => {
            setBusiness(response.json);
        })
        .catch((error) => {
            console.log ('error', error)
            })
    }, []);

    export default business;