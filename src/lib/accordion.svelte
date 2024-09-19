<script lang="ts">
	import type { AccordionProps } from './types';

	let { value = $bindable(), type }: AccordionProps = $props();
</script>

{type}
