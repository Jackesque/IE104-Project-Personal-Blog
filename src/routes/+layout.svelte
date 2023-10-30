<script>
	import { base } from '$app/paths';
	import Navbar from '../component/Navbar/Navbar.svelte'
	import Footer from '../component/Footer/Footer.svelte'
	import '../css/base.css'
</script>

<!-- <svelte:head>
	<script src='{base}/src/component/Navbar/darkModeToggle.js'></script>
</svelte:head> -->
<div class="flex flex-col bg-white text-dark dark:bg-dark dark:text-white min-h-screen w-full">
	<div class='sticky top-0 mb-10 z-10'>
		<Navbar/>
	</div>

	<main class='flex flex-1 flex-col items-center'>
		<slot />
	</main>

	<div class='mt-20 flex flex-col items-center'>
		<Footer/>
	</div>
	
	
</div>

<style>

</style>
