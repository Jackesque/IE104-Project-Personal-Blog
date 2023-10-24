<script>
	import Navbar from '../component/Navbar/Navbar.svelte'
	import '../css/base.css'
</script>



<div class="flex flex-col bg-black min-h-screen text-white w-full">
	<div class='sticky top-0 mb-10'>
		<Navbar/>
	</div>

	<main class='flex flex-1 flex-col items-center'>
		<slot />
	</main>

	<footer class='flex flex-col pt-10'>
		<p class='text-center'>visit <a class='font-bold' href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>

</style>
