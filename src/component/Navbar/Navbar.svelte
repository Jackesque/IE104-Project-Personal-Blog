<script>
  import { page } from "$app/stores";
  import { base } from '$app/paths';
</script>

<header>
  <div>
    <div class='w-full h-2 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400'></div>
    <div class='flex justify-center bg-white dark:bg-dark dark:text-white pb-2 pt-2'>
      <div class='flex justify-between w-4/5'>
        <ul class='flex gap-8 text-base font-medium'>
          <li class='pt-2' aria-current={$page.url.pathname === `${base}/` ? '1' : undefined}><a href='{base}/'><span>Home</span></a></li>
          <li class='pt-2' aria-current={$page.url.pathname === `${base}/blogs/` ? '1' : undefined}><a href='{base}/blogs'><span>Blogs</span></a></li>
          <li class='pt-2' aria-current={$page.url.pathname === `${base}/feature/` ? '1' : undefined}><a href='{base}/feature'><span>Feature</span></a></li>
          <li class='pt-2' aria-current={$page.url.pathname === `${base}/about/` ? '1' : undefined}><a href='{base}/about'><span>About</span></a></li>
          
        </ul>
        
        <div class='p-2 rounded-xl bg-white border-[1px] border-gray-300 dark:bg-dark'>
          <!-- Sun svg -->
          <img class='sun cursor-pointer dark:hidden' onclick="themeSwitch()" src='{base}/images/sun.svg' alt='sun'/>
          <!-- Moon svg -->
          <img class='moon cursor-pointer hidden dark:block' onclick="themeSwitch()" src='{base}/images/moon.svg' alt='moon'/>
        </div>
    </div>
  </div> 
</header>

<style>
  li[aria-current='1'] a, li a:hover {
    color:rgb(0, 255, 195);
  }
</style>
