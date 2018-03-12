import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {initialData} from '../utils/api'
import {connect} from 'react-redux'
import {getDecks} from '../utils/api'
import { recieveDecks } from '../actions/index';

class DeckList extends React.Component {
    
    componentDidMount(){
        getDecks().then(decks => this.props.receiveAllDecks(decks))
    }

    render(){
        const {decks} = this.props;
        
        return(
        
        <View style={styles.container}>{
            
            Object.keys(decks).map((deck) => {
                const {title, questions} = decks[deck]
                return (
                    <View key={deck}>
                        <Text>{title}</Text>
                        <Text>{questions.length}</Text>
                        <Button onPress={() => this.props.navigation.navigate('DeckView', {deckid: deck})} title='view deck'></Button>
                    </View>
                )
            }
        )
        }
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

function mapDispatchToProps(dispatch){
    return {
        receiveAllDecks: (decks) => dispatch(recieveDecks(decks))
    }
}

function mapStateToProps(decks){
      return {
          decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

