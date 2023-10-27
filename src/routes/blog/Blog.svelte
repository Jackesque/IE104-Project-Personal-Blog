<script>
    import LatestCards from './LatestCards.svelte'
    import AllCards from './AllCards.svelte'
    //css
    import '../../css/blog.css'
</script>
<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class='container'>
    <div>


<div>
    <h1 class='text-5xl font-bold text-transparent bg-gradient-to-r 
    from-lime-400 via-emerald-400 to-teal-400 bg-clip-text h-[4rem]'>Blog Tổng Hợp</h1>
    <p>1 số đề tài, tin tức, cập nhật random</p>

    
    <LatestCards/>

    
    <AllCards/>
</div>

    </div>
    
</div>

