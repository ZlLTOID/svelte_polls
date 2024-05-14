<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;

    function handleMouseOver() {
        flat = !flat;
        inverse = !inverse;
    }
</script>

<button on:click on:mouseenter={handleMouseOver} on:mouseleave={handleMouseOver} class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary {
        background: #d91b42;
        color: #ffff;
    }
    .secondary {
        background: #45c496;
        color: white;
    }
    .delete {
        background: #d91b42;
        color: #ffff;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        background: #ffff;
        color: #d91b42;
        border: 2px solid #d91b42;
    }
    .secondary.inverse {
        background: #ffff;
        color: #45c496;
        border: 2px solid #45c496;
    }
</style>