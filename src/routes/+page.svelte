<script>
	import Intro from './home/Intro.svelte'
	import MemberList from './about/MemberList.svelte'
	import WebAnalyze from './about/WebAnalyze.svelte'
	import LatestCards from './blog/LatestCards.svelte'
	//css
	import '../css/base.css'
	import '../css/home.css'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class='container'>
	<div>
		<Intro/>

		<div>
			<LatestCards/>
			
			<a href='/blog'><button class="btn btn-outline mt-10 hover:scale-[1.1]">Xem thêm...</button></a>
		</div>
		
    <span id="content2"></span>
		<MemberList/>
    
    <span id="content3"></span>
		<WebAnalyze/>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia eos provident ea libero? Commodi eum, quis ratione repellat in esse quibusdam eos incidunt, perferendis corrupti ipsam fuga, numquam reiciendis.</div>
	</div>
</div>
	
