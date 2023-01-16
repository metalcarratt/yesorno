export enum AnswerType {
    Gross = 'gross',
    Normal = 'normal'
}

export interface Question {
    text: string,
    audio: any
}

export interface Answer {
    type: string,
    yes: string,
    no: string
}

export interface QA {
    question: Question,
    answer: Answer
}

const list : QA[] = [
    {
        question: {
            text: "Do you like poo?",
            audio: new Audio( require('@/assets/audio/poo-question.mp3') )
        },
        answer: {
            type: AnswerType.Gross,
            yes: 'Eww, you like poo?',
            no: 'Phew, you don\'t like poo.'
        }
    },
    {
        question: {
            text: "Do you like eating mud?",
            audio: new Audio( require('@/assets/audio/mud-question.mp3') )
        },
        answer: {
            type: AnswerType.Gross,
            yes: 'Eww, you like eating mud?',
            no: 'Phew, you don\'t like eating mud.'
        }
    },
    {
        question: {
            text: "Do you like pizza?",
            audio: new Audio( require('@/assets/audio/pizza-question.mp3') )
        },
        answer: {
            type: AnswerType.Normal,
            yes: 'Nice, I like pizza too.',
            no: 'You don\'t like pizza? Too bad.'
        }
    },
    {
        question: {
            text: "Do you like eating rice?",
            audio: new Audio( require('@/assets/audio/rice-question.mp3') )
        },
        answer: {
            type: AnswerType.Normal,
            yes: 'Nice, I like eating rice too.',
            no: 'You don\'t like eating rice? Too bad.'
        }
    }
]

export const newQuestion = () : QA => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}