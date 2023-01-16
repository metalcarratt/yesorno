export enum AnswerType {
    Gross = 'gross',
    Normal = 'normal'
}

export interface Answer {
    type: string,
    yes: string,
    no: string
}

export interface Question {
    question: string,
    answer: Answer
}

const list = [
    {
        question: "Do you like poo?",
        answer: {
            type: AnswerType.Gross,
            yes: 'Eww, you like poo?',
            no: 'Phew, you don\'t like poo.'
        }
    },
    {
        question: "Do you like eating mud?",
        answer: {
            type: AnswerType.Gross,
            yes: 'Eww, you like eating mud?',
            no: 'Phew, you don\'t like eating mud.'
        }
    },
    {
        question: "Do you like pizza?",
        answer: {
            type: AnswerType.Normal,
            yes: 'Nice, I like pizza too.',
            no: 'You don\'t like pizza? Too bad.'
        }
    },
    {
        question: "Do you like eating rice?",
        answer: {
            type: AnswerType.Normal,
            yes: 'Nice, I like eating rice too.',
            no: 'You don\'t like eating rice? Too bad.'
        }
    }
]

export const newQuestion = () : Question => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}