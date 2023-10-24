<script>
	import { page } from "$app/stores";
</script>

<header>
	<div>
		<div class='w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400'></div>
		<div class='flex justify-center pt-5 bg-black pb-1'>
			<div class='flex justify-between w-4/5'>
				<ul class='flex gap-8 text-base font-medium'>
					<li class='pt-2' aria-current={$page.url.pathname === '/' ? '1' : undefined}><a href='/'><span>Home</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/blog' ? '1' : undefined}><a href='/blog'><span>Blog</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/feature' ? '1' : undefined}><a href='/feature'><span>Feature</span></a></li>
					<li class='pt-2' aria-current={$page.url.pathname === '/contact' ? '1' : undefined}><a href='/contact'><span>Contact</span></a></li>

				</ul>
				
				<div class='w-12 rounded-xl bg-white'>
					<img class='p-2' src='sun.png' alt='sun.png'/>
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
