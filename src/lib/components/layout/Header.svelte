<script lang="js">
    import { onMount } from 'svelte';
    import { SiteLinks } from '$lib/index.js';

    let isOpen = $state(false);

    function toggleNav(e) {
        e.preventDefault();

        isOpen = !isOpen;
    }

    onMount(() => {

    });
</script>
<style lang="css">
    .header {
        overflow: hidden;
    }

    .relative-header {
        top: 0;
        height: 10dvh;
        min-width: 100vw;
        max-width: 100vw;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        display: grid;
        grid-template-columns: 50% 50%;

        min-height: 25px;
        height: 10dvh;
        max-height: 10vh;
        min-width: 100vw;
        max-width: 100vw;

        justify-content: center;
        align-items: center;
        z-index: 10;
        background-color: var(--color-banner);
    }

    .heading {
        display: flex;

        height: 100%;
        width: 100%;

        justify-content: flex-start;
        align-items: center;

        margin-left: 2rem;
    }

    .nav-controller {
        display: flex;

        height: 100%;
        width: 100%;

        justify-content: flex-end;
        align-items: center;
    }

    .nav-toggle {
        display: flex;
        flex-direction: column;

        height: 4rem;
        width: 4rem;

        gap: 0.75rem;
        justify-content: center;
        align-items: center;

        border: none;
        border-radius: 8px;
        padding: 0.5rem;

        background-color: var(--color-primary);

        margin-right: 2rem;
    }

    .top-bar, .middle-bar, .bottom-bar {
        height: 0.25rem;
        width: 100%;

        background-color: var(--color-secondary);

        opacity: 1;
        transition: all 0.4s ease;
    }

    .top-bar, .bottom-bar {
        transform-origin: center;
    }

    .showX .top-bar {
        width: 110%;
        transform: translateY(1rem) rotate(45deg);
    }

    .showX .bottom-bar {
        width: 110%;
        transform: translateY(-1rem) rotate(-45deg);
    }

    .showX .middle-bar {
        visibility: hidden;
        opacity: 0;
    }

    .navbar {
        position: fixed;
        top: 10vh;
        display: flex;
        flex-direction: row;

        height: 6dvh;
        width: 100dvw;

        justify-content: center;
        justify-items: center;
        align-items: center;

        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;

        background-color: var(--color-banner);
        border-radius: 0 0 8px 8px;
    }

    .nav-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

        height: 100%;
        width: 80%;

        justify-content: center;
        justify-items: center;
        align-items: center;

        list-style: none;
        font-family: var(--font-standard);
    }

    .nav-links li a {
        text-decoration: none;
        color: var(--color-secondary);
        font-size: 1.5rem;
    }

    .open {
        visibility: visible;
        opacity: 1;
    }

</style>
<section class="header">
    <div class="fixed-header">
        <div class="heading">
            JAAAAASH
        </div>
        <div class="nav-controller">
            <button class="nav-toggle showHam" aria-label="Menu Toggle" class:showX={isOpen} onclick={toggleNav}>
                <span class="top-bar"></span>
                <span class="middle-bar"></span>
                <span class="bottom-bar"></span>
            </button>
        </div>
        <nav class="navbar" aria-label="Menu navigation" class:open={isOpen}>
            <ul class="nav-links">
                <li><a href={SiteLinks.home}>Home</a></li>
                <li><a href={SiteLinks.help}>Help</a></li>
                <li><a href={SiteLinks.policies}>Policy</a></li>
            </ul>
        </nav>
    </div>
    <div class="relative-header">

    </div>
</section>