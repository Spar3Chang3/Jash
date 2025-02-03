<script lang="js'">
    import { onMount } from 'svelte';
    import { Backgrounds, Products } from '$lib/index.js';
    import Dropdown from "$lib/components/layout/Dropdown.svelte";

    const products = [
        {
            name: 'Bookmark',
            prompt: 'Need a cheap bookmark?',
            price: 10,
            storeLink: 'https://bookmark.org',
            imageLink: Products.bookmarkBackground
        }
    ]

    onMount(() => {

    });

</script>
<style lang="css">
    .home {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        min-height: 80vh;
        max-width: 100dvw;

        font-family: var(--font-standard);
        font-size: 2rem;
        color: var(--color-primary);
    }

    .intro-container {
        position: relative;
        display: flex;

        height: 45vh;
        width: 100dvw;

        justify-content: center;
        align-content: center;

        color: whitesmoke;
        font-family: var(--font-special);
        font-size: 2.5rem;
        text-shadow: 2px 2px 4px var(--color-secondary);
    }

    .background-container {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .background-container img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        image-rendering: optimizeQuality;
    }

    .hero-text {
        position: absolute;
        display: flex;

        height: 100%;
        width: 100%;

        justify-content: center;
        align-items: center;
    }

    .products, .about-us {
        position: relative;
        display: flex;
        flex-direction: column;

        height: fit-content;
        width: 100dvw;

        justify-content: center;
        align-items: center;
    }

    hr {
        width: 95%;
        height: 0.15rem;
        background-color: var(--color-primary);
    }

    .product-container {
        display: flex;
        flex-direction: row;

        height: 95%;
        width: 95%;

        padding: 1rem;
    }

    .product {
        display: flex;
        flex-direction: column;

        height: 25rem;
        width: 20rem;

        justify-content: center;
        align-items: center;
        text-align: center;

        border: 0.15rem dashed var(--color-secondary);
        border-radius: 8px;
        background-color: var(--color-primary);

        color: white;
        font-size: 1.5rem;
        line-height: 1rem;
    }

    .product h4 {
        margin: 1rem;
    }

    .product-image {
        height: 15rem;
        width: 15rem;

        object-fit: cover;
    }

    .product-name a {
        color: var(--color-secondary);
    }

    .about-us-questions {
        position: relative;
        display: flex;
        flex-direction: column;

        height: 95%;
        width: 95%;

    }
</style>
<section class="home">
    <div class="intro-container">
        <div class="background-container">
            <img src={Backgrounds.openWallBackground} alt="Studio Creations logo banner"/>
        </div>
        <div class="hero-text">
            <h1>Josh's Creations Studio</h1>
        </div>
    </div>

    <div class="products">
        <h2>Products</h2>
        <hr/>
        <div class="product-container">
            {#each products as product}
                <div class="product">
                    <img class="product-image" src={product.imageLink} alt="Image of our {product.name}"/>
                    <h4 class="product-name"><a href={product.storeLink} target="_blank">{product.name}</a></h4>
                    <h4>{product.prompt}</h4>
                    <h4>${product.price}</h4>
                </div>
            {/each}
        </div>
    </div>

    <div class="about-us">
        <h2>About Us</h2>
        <hr/>
        <div class="about-us-questions">
            <Dropdown/>
        </div>
    </div>
</section>