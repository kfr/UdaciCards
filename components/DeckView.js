import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {initialData} from '../utils/api'
import {connect} from 'react-redux'
import ActionButton from './ActionButton'
import { white, purple, red, orange } from '../utils/colors';

class DeckView extends React.Component {
    render(){
        const deck = this.props.navigation.state.params.entryId
        const {decks} = this.props

        return(
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.maintext}>{decks[deck].title}</Text>
            <Text style={styles.subtext}>{decks[deck].questions.length}</Text>

            <ActionButton styles={styles} color={purple}
                        onPress={() => this.props.navigation.navigate('AddCard', {entryId:deck})} text='Add card'/>
            <ActionButton styles={styles} color={red}
                        onPress={() => this.props.navigation.navigate('Quiz', {entryId:deck})} text='Start quiz'/>
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
      backgroundColor: white,
      padding:10
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
    maintext:{
      fontSize: 40,
      color: white
    },
    subtext:{
      fontSize: 20,
      color: white,
      marginBottom: 160
    }  
  }
);

function mapStateToProps(decks){
    return {
        decks
  }
}
export default connect(mapStateToProps)(DeckView)

