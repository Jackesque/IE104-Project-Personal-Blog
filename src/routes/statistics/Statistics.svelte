<script>
  import {base} from '$app/paths' 
  import '../../css/blog.css'
  import '../../css/bloglist.css'
  let blog = [
  { name: "Blog 1", totalview: "100", webview: "100", like: "20", id: "1" },
  { name: "Blog 2", totalview: "50", webview: "50", like: "10", id: "2" },
  { name: "Blog 3", totalview: "200", webview: "200", like: "20", id: "3" },
  { name: "Blog 4", totalview: "30", webview: "50", like: "10", id: "4" },
  { name: "Blog 5", totalview: "400", webview: "400", like: "80", id: "5" },
  { name: "Blog 6", totalview: "60", webview: "60", like: "6", id: "6" },
  { name: "Blog 7", totalview: "10", webview: "10", like: "0", id: "1" },
  { name: "Blog 8", totalview: "50", webview: "50", like: "0", id: "2" },
  { name: "Blog 9", totalview: "100", webview: "100", like: "20", id: "3" },
  { name: "Blog 10", totalview: "50", webview: "50", like: "10", id: "4" },
  { name: "Blog 11", totalview: "170", webview: "170", like: "43", id: "5" },
  { name: "Blog 12", totalview: "50", webview: "50", like: "10", id: "6" },
  { name: "Blog 13", totalview: "100", webview: "100", like: "20", id: "1" },
  { name: "Blog 14", totalview: "280", webview: "280", like: "57", id: "2" },
  { name: "Blog 15", totalview: "100", webview: "100", like: "20", id: "3" },
  { name: "Blog 16", totalview: "50", webview: "50", like: "10", id: "4" },
  { name: "Blog 17", totalview: "1000", webview: "1000", like: "123", id: "5" },
  { name: "Blog 18", totalview: "50", webview: "50", like: "10", id: "6" },
  { name: "Blog 19", totalview: "300", webview: "300", like: "60", id: "1" },
  { name: "Blog 20", totalview: "50", webview: "50", like: "10", id: "2" },
  ];
  
  let searchValue = "";
  let searchResults = blog;
  
  function searchblog() {
    searchResults = searchValue === ""
    ? blog
    : blog.filter((blogItem) =>
    Object.values(blogItem).some(value =>
    value.toLowerCase().includes(searchValue.toLowerCase())
    )
    );
  }
</script>

<svelte:head>    
<title>Statistics</title>
</svelte:head>

<div class='flex flex-col items-center w-[80%]'>
  <div>
    <span class='text-4xl font-bold'>Thống kê Blogs</span>
    <div class="flex flex-col mt-4 gap-4">
      <div class="relative mt-1 self-start">
        <input
        type="text"
        class="w-full rounded-md bg-white dark:bg-black sm:max-w-xs px-4 py-2 pl-9 placeholder-gray-600 dark:placeholder-gray-400 text-sm md:text-base border border-gray-600 focus:border-green-500 focus:ring-0"
        placeholder="Search..."
        bind:value={searchValue}
        on:input={searchblog}
        />
      </div>
      <div class="blog-list">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Total Views</th>
              <th class="text-left">Web Views</th>
              <th class="text-left">Likes</th>
            </tr>
          </thead>
          <tbody>
            {#each searchResults as blogItem (blogItem.name)}
            <tr class="blog-item">
              <td class="p-5">
                <a href="{base}/cardDetails/{blogItem.id}"><b>{blogItem.name}</b></a>
              </td>
              <td class="p-2">{blogItem.totalview}</td>
              <td class="p-2">{blogItem.webview}</td>
              <td class="p-2">{blogItem.like}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>        
    </div>
  </div>
</div>