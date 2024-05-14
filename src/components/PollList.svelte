<script>
    import PollDetail from "./PollDetail.svelte";
    import PollStore from "../stores/PollStore.js";

</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <PollDetail {poll} />
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
