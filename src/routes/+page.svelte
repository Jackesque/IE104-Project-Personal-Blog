<script>
	import Intro from './home/Intro.svelte'
	import MemberList from './contact/MemberList.svelte'
	import WebAnalyze from './contact/WebAnalyze.svelte'
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
			
			<button class="btn btn-outline mt-10 hover:scale-[1.1]"><a href='./blog'>Xem thêm...</a></button>
		</div>
		
    <span id="content2"></span>
		<MemberList/>
    
    <span id="content3"></span>
		<WebAnalyze/>
	</div>
</div>
	
