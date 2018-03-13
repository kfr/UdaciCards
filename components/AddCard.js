import React from 'react'
import {NavigationActions} from 'react-navigation'
import {orange, white, purple} from '../utils/colors'
import {addCardToDeck} from '../utils/api'
import {connect} from 'react-redux'
import {addCard} from '../actions/index'
import {StyleSheet, View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

class AddCard extends React.Component{
    
    state = {
        question: '5+2',
        answer: '7',
        correctAnswer:'7'
    }
    
    handleChangeQuestion = (event) => {
        console.log(event)
        this.setState({question: event});
    }

    handleChangeAnswer = (event) => {
        console.log(event)
        this.setState({answer: event});
    }

    handleChangeCorrectAnswer = (event) => {
        console.log(event)
        this.setState({correctAnswer: event});
    }

    submitCard = (deck) => {
        const {question, answer, correctAnswer} = this.state;
        console.log('SubmitCard::' + question +  answer + correctAnswer + deck)
        this.props.dispatch(addCard(question, answer, correctAnswer, deck))
        addCardToDeck({deck, question, answer, correctAnswer})
        this.setState({
            question: '',
            answer: '',
            correctAnswer: ''
        })
        
        this.props.navigation.navigate(NavigationActions.back({key : null }))
    }

    render(){
        const deck = this.props.navigation.state.params.entryId

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Question</Text>
                    <TextInput style={styles.input}
                               onChangeText={this.handleChangeQuestion}
                               value={this.state.question}>
                    </TextInput>
                    
                    <Text style={styles.title}>Answer</Text>
                    <TextInput style={styles.input}
                               onChangeText={this.handleChangeAnswer}
                               value={this.state.answer}>
                     </TextInput>

                    <Text style={styles.title}>Is this true or false</Text>
                    <TextInput style={styles.input}  
                          onChangeText={this.handleChangeCorrectAnswer}
                          value={this.state.correctAnswer}>
                    </TextInput>

                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submitCard(deck)}>
                        <Text style={styles.submitBtnText}>Add card</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
        width: 350,
        height: 40,
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
    submitBtnText:{
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    submitBtn : {
        borderWidth : 0.5,
        borderColor: '#757575',
        padding: 10,
        borderRadius : 7,
        overflow : 'hidden',
        backgroundColor: orange
        
    }
  });

export default connect()(AddCard)