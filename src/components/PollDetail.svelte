<script>
    import PollList from "./PollList.svelte";
    import Card from "../shared/Card.svelte";
    import Button from "../shared/Button.svelte";
    import PollStore from "../stores/PollStore.js";

    export let poll;

    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
    $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

    function handleVote(option, id) {
        let upvotedPoll = $PollStore.find((poll) => poll.id === id);

        if (option === "a") {
            upvotedPoll.votesA++;
        }
        if (option === "b") {
            upvotedPoll.votesB++;
        }

        PollStore.update(() => {
            return $PollStore;
        });
    }

    function deletePoll(id) {
        PollStore.update((currentPolls) => {
            return currentPolls.filter(poll => poll.id != id);
        });
    }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <div on:click={() => handleVote("a", poll.id)} class="answer">
            <div class="percent percent-a" style="width: {percentA}%;"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div on:click={() => handleVote("b", poll.id)} class="answer">
            <div class="percent percent-b" style="width: {percentB}%;"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
    <div class="delete">
        <Button on:click={() => deletePoll(poll.id)}>
            Remove
        </Button>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: rgb(241, 241, 241);
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a {
        border-left: 4px solid darkred;
        background: rgba(217, 27, 66, 0.2);
    }
    .percent-b {
        border-left: 4px solid darkgreen;
        background: rgba(69, 196, 150, 0.2);
    }
    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>
