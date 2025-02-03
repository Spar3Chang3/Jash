<script>

    let { summary = "Default summary text", fullText = "Default full text" } = $props();

    let isOpen = $state(false);

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<style>
    .dropdown {
        background-color: var(--color-primary);
        border-radius: 8px;
        margin: 1rem 0;
        transition: all 0.3s ease;

        color: var(--color-secondary);
        font-family: var(--font-standard);
    }

    button {
        width: 100%;
        padding: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-secondary);
        gap: 1rem;
        font-size: 1rem;
        text-align: left;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .content {
        padding: 0 1rem 0;
        color: var(--color-secondary);
        overflow: hidden;
        transition: height, max-height 0.3s ease;
    }

    .no-content {
        padding: 0 1rem 0;
        max-height: 0;
    }

    .open .content {
        max-height: 1000px; /* Adjust based on your content needs */
    }

    .arrow {
        width: 24px;
        height: 24px;
        transition: transform 0.3s ease;
        flex-shrink: 0;
        fill: var(--color-secondary);
    }

    .open .arrow {
        transform: rotate(180deg);
    }

    svg {
        fill: var(--color-primary);
    }
</style>

<div class="dropdown {isOpen ? 'open' : ''}">
    <button onclick={toggle} aria-expanded={isOpen}>
        <span>{summary}</span>
        <svg class="arrow" viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 10l5 5 5-5z" />
        </svg>
    </button>

    <div class="content" class:no-content={!isOpen} role="region">
        <p>{fullText}</p>
    </div>
</div>