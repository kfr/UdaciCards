import React from 'react'
import {NavigationActions} from 'react-navigation'
import {white, purple, red, green, gray} from '../utils/colors'
import {connect} from 'react-redux'
import {StyleSheet, View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native'
import ToggleButton from './ToggleButton'
import ActionButton from './ActionButton'

class Quiz extends React.Component{
    state = {
        questionNumber: 0,
        showQuestion: false,
        correct: 0,
        incorrect: 0,
        animation: new Animated.Value(0.5)
    }

    submitAnswer = (answer) => {
        
        this.handleAnimation()

        const {questionNumber} = this.state
        const deck = this.props.navigation.state.params.entryId
        const decks = this.props.decks
        const correct = decks[deck].questions[questionNumber].correctAnswer
        console.log('correct:' + typeof correct + ' answer: ' + typeof answer + " number of correct: " + this.state.correct)
        
        if(answer === correct){
            console.log("answer is correct")
            this.setState({
                correct: this.state.correct + 1
            })
        }else{
            this.setState({incorrect: this.state.incorrect + 1})
        }

        this.setState({
            questionNumber: this.state.questionNumber + 1,
            showQuestion: false
        })

        console.log(this.state.correct + ' ' + this.state.incorrect)
    }
    handleAnimation = () =>{
       Animated.spring(this.state.animation, {
           toValue: 1.1,
           friction: 2,
           tension: 360,
           duration: 1000
       }).start(() => {
           Animated.spring(this.state.animation, {
               toValue: 2,
               duration:100
           }).start()
       }) 
    }

    render(){
        const {questionNumber} = this.state
        const decks = this.props.decks
        const deck = this.props.navigation.state.params.entryId
        const number = this.state.questionNumber + 1

        const animatedStyle = {
            transform: [
                {scale: this.state.animation}
            ]
        }

        if(questionNumber === decks[deck].questions.length)
        {
            return (
                <Animated.View style={animatedStyle}>
                <View style={styles.container}>
                    <View style={styles.card}>
                    <Text style={styles.maintext}>Your result is: {this.state.correct} / {decks[deck].questions.length}</Text>
                    </View>
                </View>
                </Animated.View>
            )

        }
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
                              onPress={() => this.submitAnswer('true')} text='Correct'/>
                
                    <ActionButton styles={styles} color={red}
                                  onPress={() => this.submitAnswer('false')} text='Incorrect'/>
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
        backgroundColor: gray,
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