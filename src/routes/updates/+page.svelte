<script lang="js">
    import { onMount } from 'svelte';
    import { GetFormattedDate, Titles } from '$lib/index.js';
    import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import Dropdown from '$lib/components/layout/Dropdown.svelte';
    import '$lib/common.css';

    let exampleTimestamp = $state();

    onMount(() => {
        document.title = Titles.updates;

        exampleTimestamp = GetFormattedDate();
    });
</script>
<style lang="css">
    h4 {
        font-size: 2.5rem;
        margin: 1rem;
    }

    .updates {
        position: relative;
        display: flex;
        flex-direction: column;

        min-height: 80dvh;
        max-width: 100dvw;

        align-items: center;
        font-family: var(--font-special);
    }

    .current-container, .archived-container {
        display: flex;
        flex-direction: column;

        height: fit-content;
        width: 100%;

        align-items: center;
    }

    .current, .archived {
        position: relative;
        display: flex;
        flex-direction: column;

        height: fit-content;
        width: 95%;
    }


</style>
<section class="updates">
    <PageBanner heroText="Updates"/>

    <div class="current-container">
        <h4>Current</h4>
        <hr/>
        <div class="current">
            <Dropdown timestamp={exampleTimestamp} summary="OUT OF RED FILAMENT" fullText="This is sample text. We are not actually out of red filament"/>
        </div>
    </div>
    <div class="archived-container">
        <h4>Archived</h4>
        <hr/>
        <div class="archived">
            <Dropdown summary="IF YOU READ THIS YOU ARE GAY" fullText="This is sample text for being gay"/>
        </div>
    </div>
</section>