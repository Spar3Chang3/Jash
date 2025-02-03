<script lang="js">
	import { onMount } from 'svelte';
	import { Titles } from '$lib/index.js';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';

	onMount(() => {
		document.title = Titles.products;
	});
</script>
<style lang="css">

</style>
<section class="products">
	<PageBanner heroText="Products"/>
</section>