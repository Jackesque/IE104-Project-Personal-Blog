<script>
	import Navbar from '../component/Navbar/Navbar.svelte'
	import Footer from '../component/Footer/Footer.svelte'
	import '../css/base.css'
</script>



<div class="flex flex-col bg-black min-h-screen text-white w-full">
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
