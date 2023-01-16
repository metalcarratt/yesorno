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
            yes: '으, 똥 좋아해?',
            yesAudio: new Audio( require('@/assets/audio/poo-yes-answer.mp3') ),
            no: '똥 안좋해서 다행이네.',
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
            yes: '으, 너 흙 좋아해?',
            yesAudio: new Audio( require('@/assets/audio/dirt-yes-answer.mp3') ),
            no: '어, 다행이다, 흙 않 좋아해서.',
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
            yes: '그치, 나도 피자 좋아해.',
            yesAudio: new Audio( require('@/assets/audio/pizza-yes-answer.mp3') ),
            no: '피자 안좋아네? 오, 안됐네.',
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
            yes: '그치, 나도 밥 엄청 좋아해.',
            yesAudio: new Audio( require('@/assets/audio/rice-yes-answer.mp3') ),
            no: '어, 너 밥을 안 좋아해? 이상하네.',
            noAudio: new Audio( require('@/assets/audio/rice-no-answer.mp3') )
        }
    }
]

export const newQuestion = () : QA => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}