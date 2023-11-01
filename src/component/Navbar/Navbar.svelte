<script>
  import { page } from "$app/stores";
  import { base } from '$app/paths';
  
  //css
  import '../../css/componentcss/Navbar.css'
  
  let themeSwitch = () => {
      darkMode = !darkMode;
      
      darkMode ? 
      document.documentElement.classList.add('dark') : 
      document.documentElement.classList.remove('dark'); 
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
</script>
  
<header>
  <div>
    <div class='w-full h-2 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400'></div>
    <div class='flex justify-center bg-white dark:bg-dark dark:text-white pb-3 pt-4'>
      <div class='flex justify-between w-4/5'>
        <!-- left-side navbar -->
        <input type='checkbox' id='check' class='hidden'/>
        <label for='check' class=' sm:hidden'>
          <span class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </span>
        </label>
        <div class='navlist hidden sm:flex sm:items-center'>
          <ul class='flex gap-8 text-base font-medium bg-white dark:bg-dark'>
            <li aria-current={$page.url.pathname === `${base}/` ? '1' : undefined}><a href='{base}/'><span>Home</span></a></li>
            <li aria-current={$page.url.pathname === `${base}/blogs/` ? '1' : undefined}><a href='{base}/blogs'><span>Blogs</span></a></li>
            <li aria-current={$page.url.pathname === `${base}/feature/` ? '1' : undefined}><a href='{base}/feature'><span>Feature</span></a></li>
            <li aria-current={$page.url.pathname === `${base}/about/` ? '1' : undefined}><a href='{base}/about'><span>About</span></a></li>   
          </ul>
        </div>
        
        <!-- right-side navbar -->
        <button class='btn bg-white border-[1px] border-gray-300 dark:bg-dark hover:bg-teal-300 dark:hover:bg-slate-400' on:click={themeSwitch}>
          <!-- Sun svg -->
          <svg class='cursor-pointer dark:hidden' stroke="black" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3rem" width="1.3rem" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <!-- Moon svg -->
          <svg class='cursor-pointer hidden dark:block' stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3rem" width="1.3rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        
      </div>
    </div>
  </div>
</header>

    
    