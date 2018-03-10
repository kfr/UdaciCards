export const ADD_DECK = 'ADD_DECK';
export const RECIEVE_DECKS = 'RECIEVE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';


export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function recieveDecks(decks){
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export function addCard(card){
    return {
        type: ADD_CARD_TO_DECK,
        card
    }
}