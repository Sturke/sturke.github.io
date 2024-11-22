


<nav>
    <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/landing">Landing</a></li>
        

    </ul>
    <!-- Theme -->
    <button>Toggle</button>
</nav>


<style>
	nav {
		padding-block: var(--size-7);
	}

	.nav-links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.nav-links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>