<script>
  import Language from '../../component/Language/Language.svelte'
  import {base} from '$app/paths'  
</script>

<div class='mt-24'>
  <span class='text-4xl font-bold pt-3 text-transparent bg-gradient-to-r 
  from-blue-500 via-purple-500 to-violet-400 bg-clip-text h-[4rem]'>⚡️Về Website</span>
  
  <div class='relative flex w-full h-[25em] justify-between mt-10 sm:flex-row'>
    <div class='w-full xl:w-2/3 flex items-center'>
      <Language/>
    </div>
    
    <div class='relative max-h-[22em] xl:w-4/12 text-center p-2 hidden xl:block '>
      <div class='card absolute bg-white dark:bg-black rotate-[30deg] left-20 top-10 overflow-hidden'>
        <a href='{base}/cardDetails/1'>
            <img class='w-full' src='{base}/blogimg/1.jpg' alt='card'/>
            <div class='context'>
                <h2>Vẻ Đẹp Tự Nhiên Thác Victoria, Zimbabwe</h2>
                <p>Trên thế giới này, có những điểm đến khiến con người mê đắm bởi vẻ đẹp huyền bí và sức mạnh tự nhiên đầy quyến rũ. Trong hành trình khám phá vùng nước rộng lớn châu Phi, Thác Victoria ở Zimbabwe là một điểm đến không thể bỏ qua. Với dòng nước sôi trào và cảm giác mãnh liệt, thác nước Victoria là biểu tượng về sự hoang sơ và mê hoặc mọi du khách đặt chân đến đây.</p>
            </div>
          </a>
      </div>
      <div class='card absolute bg-white dark:bg-black rotate-[12deg] left-20 overflow-hidden'>
        <a href='{base}/cardDetails/2'>
            <img class='w-full' src='{base}/blogimg/2.jpg' alt='card'/>
            <div class='context'>
                <h2>Vẻ Đẹp Tự Nhiên Thác Victoria, Zimbabwe</h2>
                <p>Trên thế giới này, có những điểm đến khiến con người mê đắm bởi vẻ đẹp huyền bí và sức mạnh tự nhiên đầy quyến rũ. Trong hành trình khám phá vùng nước rộng lớn châu Phi, Thác Victoria ở Zimbabwe là một điểm đến không thể bỏ qua. Với dòng nước sôi trào và cảm giác mãnh liệt, thác nước Victoria là biểu tượng về sự hoang sơ và mê hoặc mọi du khách đặt chân đến đây.</p>
            </div>
          </a>
      </div>
      <div class='card absolute bg-white dark:bg-black right-20  overflow-hidden'>
        <a href='{base}/cardDetails/3'>
            <img src='{base}/blogimg/3.jpg' alt='card'/>
            <div class='context'>
                <h2>Lối Sống Khỏe và Cân Bằng Tinh Thần</h2>
                <p>Trên thế giới này, có những điểm đến khiến con người mê đắm bởi vẻ đẹp huyền bí và sức mạnh tự nhiên đầy quyến rũ. Trong hành trình khám phá vùng nước rộng lớn châu Phi, Thác Victoria ở Zimbabwe là một điểm đến không thể bỏ qua. Với dòng nước sôi trào và cảm giác mãnh liệt, thác nước Victoria là biểu tượng về sự hoang sơ và mê hoặc mọi du khách đặt chân đến đây.</p>
            </div>
          </a>
      </div>
      
    </div>
  </div>
  
  <div>
    <h1 class='text-3xl mt-10 mb-5'>Cách để host local web</h1>
    <div class="mockup-code">
      <pre data-prefix="$" class='text-white'><code>cd IE104-Project-Personal-Blog</code></pre>
      <pre data-prefix=""><code></code></pre>
      <pre data-prefix=""><code>// Tải folder node_modules</code></pre>
      <pre data-prefix="$" class='text-white'><code>npm i</code></pre>   
      <pre data-prefix="" class="text-warning"><code>installing...</code></pre> 
      <pre data-prefix="" class="text-success"><code>Done!</code></pre>
      <pre data-prefix="$" class='text-white'><code>npm run dev</code></pre>
      <pre data-prefix=">" class="text-warning"><code>ie104-project-personal-blog@0.0.1 dev</code></pre>
      <pre data-prefix=">" class="text-warning"><code>vite dev --open</code></pre>
      <pre data-prefix="$"><code class="text-success">VITE v4.5.0</code><code> ready in</code><code class='text-white'> xxx ms</code></pre>
      <pre data-prefix=""><code>//Link localhost của web</code></pre>
      <pre data-prefix=""><code class="text-success">-> </code><code class='text-white'>Local: </code><code class='underline'>http://localhost:5173/IE104-Project-Personal-Blog/ </code></pre>
      
    </div>
  </div>
  
</div>