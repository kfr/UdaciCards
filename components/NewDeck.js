import React from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {saveDeck} from '../utils/api';
import {addDeck} from '../actions'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class NewDeck extends React.Component{
    state = {
        text: ''
    }

    handleTitleChange = (event) =>{
        this.setState({text: event});
    }

    addDeck = () => {
        if(this.state.text)
        {
            saveDeck(this.state.text)
            this.props.dispatch(addDeck(this.state.text))
            this.props.navigation.navigate('DeckView', {entryId: this.state.text})
            this.setState({text: ''})
        }
        else
        {
            alert('Title cannot be empty, please add a value')
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    What is the new decks name?
                </Text>
                <TextInput style={style=styles.input}
                    onChangeText={this.handleTitleChange}
                    value={this.state.text}
                />
                <Button style={styles.submitBtn} onPress={this.addDeck} title='Add deck'></Button>
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
    input:{
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
        borderRadius: 8
    },
    title : {
        fontSize: 30,
        color: '#333'
    },
    submitBtn : {
        borderWidth : 0.5,
        borderColor: '#757575',
        padding: 10,
        borderRadius : 7,
        overflow : 'hidden'
    }
  });

export default connect()(NewDeck)