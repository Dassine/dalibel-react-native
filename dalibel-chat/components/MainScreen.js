import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class MainScreen extends Component {
  state = { name: '' }
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome to Dalibel Chat!',
  });

  onChangeText = name => this.setState({ name }); 

  onPress = () => {
    this.props.navigation.navigate('ChatScreen', { name: this.state.name });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text> 
        
        <TextInput 
          style={styles.nameInput}
          onChangeText={this.onChangeText}
          placeholder="Lilia D. Belaid"
          value={this.state.name}
        />
        
        <TouchableOpacity 
          style={styles.SubmitButtonStyle}
          onPress={this.onPress}
          >
          <Text style={styles.buttonText}>Let's chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 25;

const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    fontSize: offset, 
    textAlign: 'center',
  },
  SubmitButtonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});

export default MainScreen;
