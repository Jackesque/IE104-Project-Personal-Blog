<script>
	import Header from './Header.svelte'
	import './base.css'
</script>
<div class="flex flex-col bg-black min-h-screen text-white">
	<div class='sticky top-0 mb-10'>
		<Header/>
	</div>
	

	<main class='flex flex-col flex-1'>
		<slot />
	</main>

	<footer class='flex flex-col'>
		<p class='text-center'>visit <a class='font-bold' href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>

</style>
