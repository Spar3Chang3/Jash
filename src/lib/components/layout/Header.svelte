<script lang="js">
    import { onMount } from 'svelte';
    import { onNavigate } from '$app/navigation';
    import { SiteLinks, Icons } from '$lib/index.js';

    let isOpen = $state(false);

    function toggleNav(e) {
        e.preventDefault();

        isOpen = !isOpen;
    }

    onNavigate(() => {
        isOpen = false;
    });

    onMount(() => {

    });
</script>
<style lang="css">
    .header {
        overflow: hidden;
    }

    .relative-header {
        top: 0;
        position: relative;
        display: flex;

        height: 10dvh;
        min-width: 100dvw;
        max-width: 100dvw;

        align-items: center;
        justify-content: flex-start;

        background-color: var(--color-banner);
    }

    .fixed-header {
        position: fixed;
        top: 0;
        display: grid;
        grid-template-columns: 50% 50%;

        min-height: 25px;
        height: 10dvh;
        max-height: 10dvh;
        min-width: 100dvw;
        max-width: 100dvw;

        justify-content: center;
        align-items: center;
        z-index: 10;
        background-color: var(--color-banner);
        font-family: var(--font-special);

        transition: color 0.4s ease;
    }

    .heading {
        position: relative;
        display: flex;

        height: 100%;
        width: 100%;

        justify-content: flex-start;
        align-items: center;

        margin-left: 2rem;
        font-size: 1.5rem;
        color: var(--color-secondary);

        transition: opacity 0.4s ease;
    }

    .logo {
        position: absolute;
        height: 80%;
        width: fit-content;

        border-radius: 50%;

        object-fit: contain;
        object-position: center;
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
        top: 10dvh;
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
        width: 100%;

        justify-content: center;
        justify-items: center;
        align-items: center;

        list-style: none;
        padding: 0;
    }

    .nav-links li a {
        text-decoration: none;
        color: var(--color-secondary);
        font-size: 1.8rem;
        text-align: center;
    }

    .open {
        visibility: visible;
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {

        .fixed-header {
            background-color: transparent;
            min-height: 10dvh;
            height: 15dvh;
            max-height: 15dvh;
        }

        .relative-header {
            height: 15dvh;
        }

        .nav-toggle {
            margin-right: 1.5rem;
        }

        .navbar {
            top: 15dvh;
            height: fit-content;
        }

        .nav-links {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
            gap: 1.5rem;
        }

        .heading {
            visibility: hidden;
            opacity: 0;
        }

        .mobile-show-heading {
            visibility: visible;
            opacity: 1;
        }

        .mobile-show-color {
            background-color: var(--color-banner);
        }
    }

</style>
<section class="header">
    <div class="fixed-header" class:mobile-show-color={isOpen}>
        <div class="heading" class:mobile-show-heading={isOpen}>
            <img class="logo" src={Icons.jsc} alt="Josh Studio Creations logo"/>
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
                <li><a href={SiteLinks.policy}>Policy</a></li>
                <li><a href={SiteLinks.products}>Products</a></li>
                <li><a href={SiteLinks.updates}>Updates</a></li>
            </ul>
        </nav>
    </div>
    <div class="relative-header">
        <div class="heading">
            JAAAAASH Mobile
        </div>
    </div>
</section>