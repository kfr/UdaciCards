import React from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {saveDeck} from '../utils/api';
import {addDeck} from '../actions'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class NewDeck extends React.Component{
    state = {
        text: 'Useless Placeholder'
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
                <TextInput style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
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