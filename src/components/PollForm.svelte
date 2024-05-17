<script>
    import {fade, slide, scale} from 'svelte/transition'
    import Button from "../shared/Button.svelte";
    import { createEventDispatcher } from "svelte";
    import PollStore from "../stores/PollStore.js";

    const dispatch = createEventDispatcher();

    let buttonType = ["primary", "secondary"];

    let fields = {
        question: "",
        answerA: "",
        answerB: "",
    };
    let errors = {
        question: "",
        answerA: "",
        answerB: "",
    };
    let valid = false;

    function handleFormSubmit() {
        valid = true;

        // validate question
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Question must be at least 5 characters long";
        } else {
            errors.question = "";
        }

        // validate answer A
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "Answer cannot be empty";
        } else {
            errors.answerA = "";
        }

        // validate answer A
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "Answer cannot be empty";
        } else {
            errors.answerB = "";
        }

        // add new poll
        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}

            PollStore.update(currentPolls => {
                return [poll, ...currentPolls];
            })
            dispatch('pollCreated', poll)
        }
    }
</script>

<form in:fade on:submit|preventDefault={handleFormSubmit}>
    <div class="form-field">
        <label for="question">Poll question:</label>
        <input type="text" id="question" bind:value={fields.question} />
        <div class="error">{ errors.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} />
        <div class="error">{ errors.answerA }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} />
        <div class="error">{ errors.answerB }</div>
    </div>
    <Button type={buttonType[1]} flat={true}>Add poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px;
        text-align: left;
    }
    .error {
        font-weight: bold;
        color: red;
        font-size: 12px;
    }
</style>
