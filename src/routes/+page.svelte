<script>
	import Intro from './home/Intro.svelte'
	import MemberList from './home/MemberList.svelte'
	import WebAnalyze from './home/WebAnalyze.svelte'

	//css
	import '../css/base.css'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class='flex flex-col items-center mt-10'>
	<Intro/>
	
	<MemberList/>

	<WebAnalyze/>
			
</div>
	
