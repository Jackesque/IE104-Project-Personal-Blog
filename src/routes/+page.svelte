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
	<div>
		<Intro/>

		<div id='homeAnchor'>
			<WebAnalyze/>
			
		</div>
		
    <span id="content2"></span>
		<MemberList/>
    
    <span id="content3"></span>
		<LatestCards/>
				
		<a href='{base}/blogs'><button class="btn btn-outline mt-10 hover:scale-[1.1] bg-gradient-to-tr hover:from-primary-300 hover:to-primary-400">Xem thêm...</button></a>
	</div>
</div>
	
