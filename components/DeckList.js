import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {initialData} from '../utils/api'

class DeckList extends React.Component {
    render(){
        const decklist = initialData();

        return(
        <View >{
            Object.keys(decklist).map((deck) => {
                const {title, questions} = decklist[deck]
                return (
                    <View key={deck}>
                        <Text>{title}</Text>
                        <Text>{questions.length}</Text>
                    </View>
                )

            })
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

export default DeckList

