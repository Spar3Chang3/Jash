<script lang="js">
    import Header from '$lib/components/layout/Header.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';

    let { children } = $props();

</script>
<style lang="css">

    :root {
        --font-standard: Cambria, sans-serif; /* I'll let sans be the fallback now because it's unoffensive */
        --font-special: Roboto, sans-serif; /* This will need to change */

        --color-primary: #181d28;
        --color-secondary: #c2eaff;
        --color-banner: #294ab5;

        position: relative;
        margin: 0;
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;

        background-color: whitesmoke;
    }

    :global(html, body) {
        margin: 0;
    }

    main {
        min-height: 80vh;
        min-width: 100vw;
        max-width: 100vw;
    }

</style>
<header>
    <Header/>
</header>
<main>
    {@render children()}
</main>
<footer>
    <Footer/>
</footer>