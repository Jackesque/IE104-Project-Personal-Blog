<script>
    import Language from '../../component/Language/Language.svelte'
</script>

<div class='mt-24'>
    <span class='text-4xl font-bold pt-3 text-transparent bg-gradient-to-r 
    from-blue-500 via-purple-500 to-violet-400 bg-clip-text h-[4rem]'>⚡️Về Website</span>
    
    <div class='flex gap-2 w-full flex-col justify-between mt-10 sm:flex-row'>
        <div class='w-full sm:w-2/3 flex items-center'>
            <Language/>
        </div>
        
        <span class='overflow-hidden  max-h-80 sm:w-4/12 text-center p-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa nesciunt, odit voluptates dolorem expedita dolores eum? Ratione pariatur assumenda eaque inventore. Quas eius ex incidunt, magni laboriosam architecto. Quis?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa nesciunt, odit voluptates dolorem expedita dolores eum? Ratione pariatur assumenda eaque inventore. Quas eius ex incidunt, magni laboriosam architecto. Quis?</p>
        </span>
    </div>
    
    <div>
        <h1 class='text-3xl mt-10 mb-5'><b>Cách để host local web</b></h1>
        <div class="mockup-code">
            <pre data-prefix=""><code>//Tải folder node_modules</code></pre>
            <pre data-prefix="$" class='text-white'><code>npm i</code></pre>   
            <pre data-prefix="" class="text-warning"><code>installing...</code></pre> 
            <pre data-prefix="" class="text-success"><code>Done!</code></pre>
            <pre data-prefix=""><code></code></pre>
            <pre data-prefix="$" class='text-white'><code>cd IE104-Project-Personal-Blog</code></pre>
            <pre data-prefix="$" class='text-white'><code>npm run dev</code></pre>
            <pre data-prefix=">" class="text-warning"><code>ie104-project-personal-blog@0.0.1 dev</code></pre>
            <pre data-prefix=">" class="text-warning"><code>vite dev --open</code></pre>
            <pre data-prefix="$"><code class="text-success">VITE v4.5.0</code><code> ready in</code><code class='text-white'> xxx ms</code></pre>
            <pre data-prefix=""><code>//Link localhost của web</code></pre>
            <pre data-prefix=""><code class="text-success">-> </code><code class='text-white'>Local: </code><code class='underline'>http://localhost:xxxx/IE104-Project-Personal-Blog </code></pre>
            
          </div>
    </div>
    
</div>