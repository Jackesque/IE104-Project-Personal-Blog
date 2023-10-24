<script>
	import Intro from './home/Intro.svelte'
	import MemberList from './home/MemberList.svelte'
	import WebAnalyze from './home/WebAnalyze.svelte'

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
	
		<MemberList/>
	
		<WebAnalyze/>
	</div>
</div>
	
