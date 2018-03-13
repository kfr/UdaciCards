import React from 'react'
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import {initialData} from '../utils/api'
import {connect} from 'react-redux'
import {getDecks} from '../utils/api'
import { recieveDecks } from '../actions/index';
import { orange, white } from '../utils/colors';

class DeckList extends React.Component {
    
    componentDidMount(){
        getDecks().then(decks => this.props.receiveAllDecks(decks))
    }

    render(){
        const {decks} = this.props;
        
        return(
        
        <ScrollView  style={styles.container}>{
            
            Object.keys(decks).map((deck) => {
                const {title, questions} = decks[deck]
                
                return (
                    <TouchableOpacity key={deck} style={styles.card} onPress={() => this.props.navigation.navigate('DeckView', {entryId: deck})}>
                        <Text style={styles.cardText}>{title}</Text>
                        <Text style={styles.cardText}>{questions.length}</Text>
                    </TouchableOpacity>
                )
            }
        )
        }
        </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignSelf:'stretch',
      padding: 5
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    cardText:{
        fontSize: 30,
        color: white
    },
    cardBtn:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
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

