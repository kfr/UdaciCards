import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {initialData} from '../utils/api'

class DeckView extends React.Component {
    render(){
        const deck = this.props.navigation.state.params.deckid
        const decks = initialData()

        return(
        <View style={styles.container}>
          <Text>{decks[deck].title}</Text>
          <Text>{decks[deck].questions.length}</Text>
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

export default DeckView

