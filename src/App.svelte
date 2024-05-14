<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import PollForm from "./components/PollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import PollStore from "./stores/PollStore.js";

	let polls = [];
	PollStore.subscribe((data) => {
		polls = data;
	});

	// tabs
	let items = ["Current Polls", "Add new Poll"];
	let activeItem = items[1];

	function setActiveItem(e) {
		activeItem = e.detail;
	}

	function switchTab(e) {
		activeItem = items[0];
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:setActiveItem={setActiveItem} />
	{#if activeItem === items[0]}
		<PollList />
	{:else}
		<PollForm on:pollCreated={switchTab} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
