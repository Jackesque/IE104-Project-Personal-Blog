<script>
	import { page } from "$app/stores";
  import darkMode from '$img/sun.png'
  import { base } from '$app/paths'
</script>

<header>
	<div>
		<div class='w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400'></div>
		<div class='flex justify-center pt-5 bg-black pb-1'>
			<div class='flex justify-between w-4/5'>
				<ul class='flex gap-8 text-base font-medium'>
					<li class='pt-2' aria-current={$page.url.pathname === '/' ? '1' : undefined}><a href='{base}/'><span>Home</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/blog' ? '1' : undefined}><a href='{base}/blog'><span>Blog</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/feature' ? '1' : undefined}><a href='{base}/feature'><span>Feature</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/about' ? '1' : undefined}><a href='{base}/about'><span>About</span></a></li>

				</ul>
				
				<div class='w-12 rounded-xl bg-white'>
					<img class='p-2' src='{base}/images/sun.png' alt='sun.png'/>
				</div>
			</div>
		</div>
	</div> 
</header>

<style>
	li[aria-current='1'] a {
        color:rgb(0, 255, 195);
    }
</style>
