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
    yesAudio: any,
    no: string,
    noAudio: any
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
            yesAudio: new Audio( require('@/assets/audio/poo-yes-answer.mp3') ),
            no: 'Phew, you don\'t like poo.',
            noAudio: new Audio( require('@/assets/audio/poo-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like eating dirt?",
            audio: new Audio( require('@/assets/audio/dirt-question.mp3') )
        },
        answer: {
            type: AnswerType.Gross,
            yes: 'Eww, you like eating dirt?',
            yesAudio: new Audio( require('@/assets/audio/dirt-yes-answer.mp3') ),
            no: 'Phew, you don\'t like eating dirt.',
            noAudio: new Audio( require('@/assets/audio/dirt-no-answer.mp3') )
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
            yesAudio: new Audio( require('@/assets/audio/pizza-yes-answer.mp3') ),
            no: 'You don\'t like pizza? Too bad.',
            noAudio: new Audio( require('@/assets/audio/pizza-no-answer.mp3') )
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
            yesAudio: new Audio( require('@/assets/audio/rice-yes-answer.mp3') ),
            no: 'You don\'t like eating rice? Too bad.',
            noAudio: new Audio( require('@/assets/audio/rice-no-answer.mp3') )
        }
    }
]

export const newQuestion = () : QA => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}