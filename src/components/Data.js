import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
} from 'react-native';
import axios from 'axios';

export default function Data() {
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
            setBusiness(response.data.businesses[0]);
        })
        .catch((error) => {
            console.log ('error', error)
            })
    }, []);

    return (
        <View>
            <Text>{business.name}</Text>
        </View>
    );
}

