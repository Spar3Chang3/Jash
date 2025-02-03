<script lang="js">
    import { onMount } from 'svelte';
    import { Backgrounds } from '$lib/index.js';


</script>
<style lang="css">

    hr {
        width: 95%;
        height: 0.15rem;
        background-color: var(--color-primary);
    }

    .help {
        position: relative;
        display: flex;
        flex-direction: column;

        min-height: 80dvh;
        max-width: 100dvw;

        align-items: center;
    }

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

</style>
<section class="help">
    <div class="page-desc">
        <div class="desc-background">
            <img class="desc-img" src={Backgrounds.wallBackground} alt="Background banner for the text 'Help'"/>
        </div>
        <div class="desc-text">
            <h1>Help</h1>
        </div>
    </div>

    <div class="contact">
        <h2>Contact</h2>
        <hr/>
        <h4>Have any issues or questions?</h4>
        <p>Email <a href="mailto:josh3dprintowner@gmail.com">josh3dprintowner@gmail.com</a> </p>
        <h4>Expect responses within 1-2 business days</h4>
    </div>
</section>