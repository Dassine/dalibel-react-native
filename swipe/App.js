import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Keaton Row #1', uri: 'http://www.dalibel.com/assets/img/krmobile1.jpg' },
  { id: 2, text: 'Keaton Row #2', uri: 'http://www.dalibel.com/assets/img/krmobile2.jpg' },
  { id: 3, text: 'Keaton Row #3', uri: 'http://www.dalibel.com/assets/img/krmobile3.jpg' },
  { id: 4, text: 'QuickEstimates #4', uri: 'http://www.dalibel.com/assets/img/QE-ipad1.jpg' },
  { id: 5, text: 'QuickEstimates #5', uri: 'http://www.dalibel.com/assets/img/QE-ipad2.jpg' },
  { id: 6, text: 'Quoi Manger #6', uri: 'http://www.dalibel.com/assets/img/QuoiManger.jpg' },
  { id: 7, text: 'KiloRun #7', uri: 'http://www.dalibel.com/assets/img/kilRun1.png' },
  { id: 8, text: 'KiloRun #8', uri: 'http://www.dalibel.com/assets/img/KiloRun2.png' },
];

export default class App extends React.Component {

  renderCard(item) {
   return (
    <Card
     key={item.id}
     title={item.text}
     image={{ uri: item.uri}}
    >
    </Card>
   );
  }

  renderNoMoreCards() {
   return (
    <Card title="All Done!"s>
     <Text style={{ marginBottom: 10 }}>
      There is no more contents here !
     </Text>
     <Button>
      icon={{ name: 'Get More' }}
      backgroundColor="#03A9F4"
      title="View Now!"
     </Button>
    </Card>
   );
  }

  render() {
    return (
      <View style={styles.container}>
      <Deck
       data={DATA}
       renderCard={this.renderCard}
       renderNoMoreCards={this.renderNoMoreCards}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
});
