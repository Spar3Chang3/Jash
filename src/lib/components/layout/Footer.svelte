<script lang="js">
	import { onMount } from 'svelte';

	let year = $state();

	onMount(() => {
		year = new Date().getFullYear();
	});


</script>
<style lang="css">
	.footer {
			bottom: 0;
			position: relative;
			display: grid;

			min-height: 25px;
			height: 10dvh;
			max-height: 10vh;

			place-items: center;
			background-color: var(--color-banner);
			font-family: var(--font-special);
			font-size: 1.8rem;
	}

	.copyright {
			text-align: center;
			color: var(--color-secondary);
	}

	.copyright h5 {
			margin: 0;
	}
</style>
<section class="footer">
	<div class="copyright">
		<h5>&copy; {year} Josh Studio Creations</h5>
	</div>
</section>