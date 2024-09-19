<script lang="ts">
	import Accordion from '$lib/accordion.svelte';

	let value = $state('a single value');
</script>

<Accordion type="single" bind:value />
