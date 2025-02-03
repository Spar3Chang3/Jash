<script lang="js">
	import { Backgrounds } from '$lib/index.js';
	import '$lib/common.css';

	let { heroText = 'NO ARG' } = $props();

</script>
<style lang="css">

    .page-desc {
        position: relative;
        display: flex;

        height: 40vh;
        width: 100dvw;

        justify-content: center;
        align-items: center;

        color: whitesmoke;
        font-family: var(--font-special);
        font-size: 2.5rem;
        text-shadow: 2px 2px 4px var(--color-secondary);
    }

    .desc-background {
        position: absolute;

        height: 100%;
        width: 100%;
        filter: blur(4px);	
    }

    .desc-img {

        height: 100%;
        width: 100%;

        object-fit: cover;

        object-position: center;
    }

    .desc-text {
        position: absolute;
        display: flex;

        height: 100%;
        width: 100%;

        justify-content: center;
        align-items: center;
    }

</style>
<div class="page-desc">
	<div class="desc-background">
		<img class="desc-img" src={Backgrounds.wallBackground} alt="Background banner for the following hero text"/>
	</div>
	<div class="desc-text">
		<h1>{heroText}</h1>
	</div>
</div>