import React from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {saveDeck} from '../utils/api';
import {addDeck} from '../actions'

class NewDeck extends React.Component{
    state = {
        input: ''
    }

    addDeck = () => {
        const {text} = this.state.text
        
        saveDeck(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    What is the new decks name?
                </Text>
                <TextInput onChangeText={(text => this.setState({text: text}))}
                            value = {this.state.text}>
                </TextInput>
                <Button onPress={this.addDeck} title='Add deck'></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default NewDeck