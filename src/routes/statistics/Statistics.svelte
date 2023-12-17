<script>
  import {base} from '$app/paths' 
  import '../../css/blog.css'
  import '../../css/bloglist.css'
  let blog = [
  { name: "Hành Trình Khám Phá Hương Vị Đặc Trưng Của Ẩm Thực Địa Phương Ở Miền Nam Ý", totalview: "100", webview: "100", like: "20", id: "1" },
  { name: "Vẻ Đẹp Tự Nhiên Thác Victoria, Zimbabwe", totalview: "50", webview: "50", like: "10", id: "2" },
  { name: "Lối Sống Khỏe Mạnh", totalview: "50", webview: "50", like: "10", id: "3" },
  { name: "Sức Mạnh của Nghệ Thuật Trong Việc Nuôi Dạy Trẻ Em: Khám Phá Cách Nghệ Thuật Góp Phần Trong Sự Phát Triển Tư Duy và Sáng Tạo Của Trẻ", totalview: "50", webview: "50", like: "10", id: "4" },
  { name: "Chiến lược Hiệu Quả để Quản Lý Thời Gian và Tăng Năng Suất Hằng Ngày", totalview: "400", webview: "400", like: "80", id: "5" },
  { name: "Sức Mạnh Sáng Tạo của Trí Tuệ Nhân Tạo: Khám Phá Thế Giới Của Tranh Nghệ Thuật Tạo Bởi AI", totalview: "60", webview: "60", like: "6", id: "6" },
  ];
  
  let searchValue = "";
  let searchResults = blog;
  let filteredBlog = blog;
  function searchblog() {
    filteredBlog = blog.filter((blogItem) =>
    Object.values(blogItem).some(value =>
    value.toLowerCase().includes(searchValue.toLowerCase())
    )
    );
    searchResults = searchValue.trim() === "" ? blog : filteredBlog;
  }
</script>

<svelte:head>    
<title>Statistics</title>
</svelte:head>

<div class="flex flex-col items-center w-full md:w-[80%]">
    <span class="text-4xl font-bold">Thống kê Blogs</span>
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
      <div class="blog-list overflow-x-auto w-full">
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

