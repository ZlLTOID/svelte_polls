import { writable } from 'svelte/store'

const pollStore = writable([
    {
        id: 1,
        question: "Java or Javascript?",
        answerA: "Java",
        answerB: "Javascript",
        votesA: 4,
        votesB: 4,
    },
]);

export default pollStore;