<script lang="ts">
	import Accordion from '$lib/accordion.svelte';

	let value = $state('a single value');
	let multiValue = $state(['a', 'b', 'c']);
</script>

<!-- This is unhappy with the type and it shouldnt be -->
<Accordion type="single" bind:value />

<!-- This is expected to be unhappy with the type and it is -->
<Accordion type="single" value={multiValue} />

<!-- This is working as expected -->
<Accordion type="multiple" value={multiValue} />

<!-- This is also working as expected -->
<Accordion type="single" {value} />
