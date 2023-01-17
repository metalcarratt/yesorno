import { ref } from "vue";

export enum AnswerType {
    Gross = 'gross',
    Normal = 'normal'
}

export interface Question {
    text: string,
    audio: any,
    chara: string
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
            audio: new Audio( require('@/assets/audio/poo-question.mp3') ),
            chara: 'boy'
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
            audio: new Audio( require('@/assets/audio/dirt-question.mp3') ),
            chara: 'boy'
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
            audio: new Audio( require('@/assets/audio/pizza-question.mp3') ),
            chara: 'boy'
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
            audio: new Audio( require('@/assets/audio/rice-question.mp3') ),
            chara: 'boy'
        },
        answer: {
            type: AnswerType.Normal,
            yes: '그치, 나도 밥 엄청 좋아해.',
            yesAudio: new Audio( require('@/assets/audio/rice-yes-answer.mp3') ),
            no: '어, 너 밥을 안 좋아해? 이상하네.',
            noAudio: new Audio( require('@/assets/audio/rice-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like noodles?",
            audio: new Audio( require('@/assets/audio/noodles-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Normal,
            yes: '오, 국수를 좋하한다고, 맛있다!',
            yesAudio: new Audio( require('@/assets/audio/noodles-yes-answer.mp3') ),
            no: '오, 왜 국수 안좋하해?',
            noAudio: new Audio( require('@/assets/audio/noodles-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like speaking English?",
            audio: new Audio( require('@/assets/audio/english-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Normal,
            yes: '어, 너 영어 말하는 좋아한다고, 나도 좋아해.',
            yesAudio: new Audio( require('@/assets/audio/english-yes-answer.mp3') ),
            no: '왜 영어 말하는 안좋다고? 왜그래?',
            noAudio: new Audio( require('@/assets/audio/english-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like living in Korea?",
            audio: new Audio( require('@/assets/audio/korea-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Normal,
            yes: '와, 좋다. 나도 한국에 살아하는 좋다.',
            yesAudio: new Audio( require('@/assets/audio/korea-yes-answer.mp3') ),
            no: '어, 너 한국에 살아하는 안 좋아해, 이상하네.',
            noAudio: new Audio( require('@/assets/audio/korea-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like wee?",
            audio: new Audio( require('@/assets/audio/wee-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Gross,
            yes: '하하하, 오줌 좋아한대요! 하하하!',
            yesAudio: new Audio( require('@/assets/audio/wee-yes-answer.mp3') ),
            no: '어 그래, 냄새하는 오줌은 안좋아다고, 나도 안좋아해.',
            noAudio: new Audio( require('@/assets/audio/wee-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like farts?",
            audio: new Audio( require('@/assets/audio/farts-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Gross,
            yes: '빵귀 좋아한다고, 빵귀 좋아한다고. 냄새 나다요, 빵귀 좋아한다고.',
            yesAudio: new Audio( require('@/assets/audio/farts-yes-answer.mp3') ),
            no: '어 다행이다, 빵귀 안좋아니가.',
            noAudio: new Audio( require('@/assets/audio/farts-no-answer.mp3') )
        }
    },
    {
        question: {
            text: "Do you like bottoms?",
            audio: new Audio( require('@/assets/audio/bottoms-question.mp3') ),
            chara: 'girl'
        },
        answer: {
            type: AnswerType.Gross,
            yes: '와, 너 언똥이 좋아네! 으 진짜 더럽네! ',
            yesAudio: new Audio( require('@/assets/audio/bottoms-yes-answer.mp3') ),
            no: '좋겠다, 언똥이 안좋아니가.',
            noAudio: new Audio( require('@/assets/audio/bottoms-no-answer.mp3') )
        }
    }
]

export const newQuestion = () : QA => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}

const iterator = ref(0);
const score = ref(0);

export default {
    init() {
        iterator.value = 0;
        score.value = 0;
    },
    nextQuestion() {
        iterator.value++;
    },
    getQuestion() {
        return list[iterator.value];
    },
    hasMore() {
        if (iterator.value < list.length - 1) {
            return true;
        }
        return false;
    },
    pointUp() {
        score.value++;
    },
    score() {
        return score.value;
    }
}