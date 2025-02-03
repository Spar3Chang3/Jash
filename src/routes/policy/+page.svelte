<script lang="js">
	import { onMount } from 'svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
	import { Titles } from '$lib/index.js';

	onMount(() => {
		document.title = Titles.policy;
	});
</script>
<style lang="css">

</style>
<section class="policy">
	<PageBanner heroText="Policy"/>

</section>