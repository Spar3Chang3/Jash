<script lang="js">
    import { onMount } from 'svelte';
    import { Titles } from '$lib/index.js';
    import '$lib/common.css';
    import PageBanner from '$lib/components/layout/PageBanner.svelte'

    onMount(() => {
        document.title = Titles.help;
    });
</script>
<style lang="css">

    .help {
        position: relative;
        display: flex;
        flex-direction: column;

        min-height: 80dvh;
        max-width: 100dvw;

        align-items: center;
    }

    .contact {
        position: relative;
        display: flex;
        flex-direction: column;

        height: fit-content;
        width: 100dvw;

        justify-content: center;
        align-items: center;

        font-family: var(--font-standard);
        font-size: 2.5rem;
    }

    .contact h4, .contact p {
        margin: 0.5rem;
    }

    .contact h2 {
        margin: 0.5rem;
    }

    @media only screen and (max-width: 768px) {

        .contact {
            font-size: 1.5rem;
        }
    }

</style>
<section class="help">

    <PageBanner heroText="Help" />

    <div class="contact">
        <h2>Contact</h2>
        <hr/>
        <h4>Have any issues or questions?</h4>
        <p>Email <a href="mailto:josh3dprintowner@gmail.com">josh3dprintowner@gmail.com</a> </p>
        <h4>Expect responses within 1-2 business days</h4>
    </div>
</section>