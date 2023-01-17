import { ref } from 'vue';

export enum Page {
    Title = 'title',
    Question = 'question',
    Answer = 'answer'
}

const nav = ref(Page.Title);

export default {
    goto(page : Page) {
        nav.value = page;
    },
    at(page : Page) {
        return nav.value === page;
    }
}