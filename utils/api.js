import { AsyncStorage } from "react-native"
const KEY = 'decklist';

export const initialData = () => {
    return initialDecklistData
} 

export function getDecks() {
    return AsyncStorage.getItem(KEY)
    .then(results => {
        if(results === null){
            AsyncStorage.setItem(KEY, JSON.stringify(initialDecklistData))
            return initialDecklistData;
        }else{
            return JSON.parse(results);
        }
    })
}

export function saveDeck(title){
    console.log(title)
    return AsyncStorage.mergeItem(KEY, JSON.stringify({
        [title]:{
            title: title,
            questions: []
        }
    }))
}

const initialDecklistData = {
    Matematikk : {
        title: 'Matematikk',
        questions: [{
            question: '4+2',
            answer: '6',
            correctAnswer: true
        },
        {
            question: '5+6',
            answer: '11',
            correctAnswer: true
        }
    ] 
    },
    Engelsk: {
        title: 'Engelsk',
        questions: [{
            question: 'What is usually in the living room',
            answer: 'tv, sofa, chairs, shelf',
            correctAnswer: true
        },
        {
            question: 'What is usually in the kitchen?',
            answer: 'chair, micro-owen, owen, table',
            correctAnswer: true
        }
    ]
    },
    Samfunnsfag : {
        title: 'Samfunnsfag',
        questions: [{
            question: 'Hva skjer når stortingspresidenten bruker for mye penger på en garasje?',
            answer: 'Han får sparken',
            correctAnswer: true
        },
        {
            question: 'Hvor mange medlemmer sitter i regjeringen?',
            answer: '125',
            correctAnswer: true
        }
    ]
    },
    Naturfag : {
        title: 'Naturfag',
        questions: [{
            question: 'Hva skjer når stortingspresidenten bruker for mye penger på en garasje?',
            answer: 'Han får sparken',
            correctAnswer: true
        },
        
    ]
    }
}

