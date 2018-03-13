import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {initialData} from '../utils/api'
import {connect} from 'react-redux'
import ActionButton from './ActionButton'
import { white, purple, red } from '../utils/colors';

class DeckView extends React.Component {
    render(){
        const deck = this.props.navigation.state.params.entryId
        const {decks} = this.props

        return(
        <View style={styles.container}>
          <Text>{decks[deck].title}</Text>
          <Text>{decks[deck].questions.length}</Text>

          <ActionButton styles={styles} color={purple}
                        onPress={() => this.props.navigation.navigate('AddCard', {entryId:deck})} text='Add card'/>
          <ActionButton styles={styles} color={red}
                        onPress={() => this.props.navigation.navigate('StartQuiz', {entryId:deck})} text='Start quiz'/>
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
    submitBtnText:{
      color: white,
      fontSize: 22,
      textAlign: 'center'
    }
  });

function mapStateToProps(decks){
    return {
        decks
  }
}
export default connect(mapStateToProps)(DeckView)

