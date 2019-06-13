import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Card from './src/components/Card';
import Header from './src/components/Header';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.headerWrapper}>
            <Header />
          </View>
          <View style={styles.profileWrapper}>
            <Card data={data[1]} />
            <Card data={data[0]} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const data = [
  {
    name: 'Sitti',
    id: '',
    category: 'Middle Eastern',
    distance: '0.0',
    rating: '4.2',
    image: 'https://ot-foodspotting-production.s3.amazonaws.com/reviews/1733721/thumb_600.jpg',
  },
  {
    name: 'Ajisai',
    id: '',
    category: 'Japanese, Sushi Bar',
    distance: '0.0',
    rating: '4.5',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/an8uXj1TXqaEJDbf8VObyw/o.jpg',
  },
]

const yelpBusinesses = [
  {
    "id": "RVQE2Z2uky4c0-njFQO66g",
    "alias": "midwood-smokehouse-charlotte",
    "name": "Midwood Smokehouse",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CGN1sNIWEzMpud87iEoiMA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/midwood-smokehouse-charlotte?adjust_creative=PdbtA-uZkuhueNaj3O4ZHg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PdbtA-uZkuhueNaj3O4ZHg",
    "review_count": 1615,
    "categories": [
      {
        "alias": "bbq",
        "title": "Barbeque"
      },
      {
        "alias": "smokehouse",
        "title": "Smokehouse"
      },
      {
        "alias": "tradamerican",
        "title": "American (Traditional)"
      }
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 35.22092,
      "longitude": -80.81485
    },
    "transactions": [
      "pickup"
    ],
    "price": "$$",
    "location": {
      "address1": "1401 Central Ave",
      "address2": "",
      "address3": "",
      "city": "Charlotte",
      "zip_code": "28205",
      "country": "US",
      "state": "NC",
      "display_address": [
        "1401 Central Ave",
        "Charlotte, NC 28205"
      ]
    },
    "phone": "+17042954227",
    "display_phone": "(704) 295-4227",
    "distance": 3118.064615113949
  }
]

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  profileWrapper: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
  },
});
