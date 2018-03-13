import React from 'react'
import {NavigationActions} from 'react-navigation'
import {orange, white, purple, red, green, gray} from '../utils/colors'
import {connect} from 'react-redux'
import {StyleSheet, View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import ToggleButton from './ToggleButton'
import ActionButton from './ActionButton'

class Quiz extends React.Component{
    state = {
        questionNumber: 0,
        showQuestion: false
    }

    render(){
        const {questionNumber} = this.state
        const decks = this.props.decks
        const deck = this.props.navigation.state.params.entryId
        const number = this.state.questionNumber + 1

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.questions}>{number} / {decks[deck].questions.length}</Text>
                    {
                        !this.state.showQuestion ? 
                        <Text style={styles.maintext}>{decks[deck].questions[questionNumber].question}</Text>
                        :
                        <Text style={styles.maintext}>{decks[deck].questions[questionNumber].answer}</Text>
                    }
                    {
                        !this.state.showQuestion ? 
                        <ToggleButton styles={styles.answer} color={gray}
                            onPress={() => this.setState({showQuestion: true})} text='Show answer'/>
                        :
                        <ToggleButton styles={styles.answer} color={gray}
                              onPress={() => this.setState({showQuestion: false})} text='Show question'/>
                    }
                    
                
                    <ActionButton styles={styles} color={green}
                              onPress={() => this.props.navigation.navigate('AddCard', {entryId:deck})} text='Correct'/>
                
                    <ActionButton styles={styles} color={red}
                                  onPress={() => this.props.navigation.navigate('Quiz', {entryId:deck})} text='Incorrect'/>
                </View>
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
    iosBtn: {
        padding: 10,
        borderRadius: 7,
        height: 45, 
        margin: 5,
        width: 170
      },
      card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: orange,
        margin: 8,
        height: 200,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,34)',
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1
        },
      questions:{
            top: 0,
            left: 0,
            alignSelf: 'flex-start',
            fontSize: 20,
            color: white,
            margin: 5,
            position: 'absolute'
      },
      answer:{
        fontSize: 20,
        color: white,
        margin: 20
      },
        maintext:{
            fontSize: 40,
            color: white,
            marginTop: 40,
            textAlign: 'center'
      },
      subtext:{
            fontSize: 20,
            color: white,
            marginBottom: 160
      }  
  });

  function mapStateToProps(decks){
    return {
        decks
    }
  }
export default connect(mapStateToProps)(Quiz)