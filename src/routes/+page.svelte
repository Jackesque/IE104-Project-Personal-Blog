<script>
	import Intro from './home/Intro.svelte'
	import MemberList from './about/MemberList.svelte'
	import WebAnalyze from './about/WebAnalyze.svelte'
	import LatestCards from './blogs/LatestCards.svelte'
  import { base } from '$app/paths'
	//css
	import '../css/base.css'
	import '../css/home.css'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class='container'>
	<div class='mb-20'>
		<Intro/>
	</div>

	<div id='homeAnchor'></div>
	<WebAnalyze/>

    <div id="content2">
		<MemberList/>
	</div>
		
    
    <div id="content3">
		<LatestCards/>
	</div>
			
	<a href='{base}/blogs'><button class="btn btn-outline mt-10 hover:scale-[1.1] bg-gradient-to-tr hover:from-primary-300 hover:to-primary-400">Xem thêm...</button></a>
	
</div>
	
