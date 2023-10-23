<script>
	import './base.css'
	import Progress from './component/Progress/Progress.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id='content1' class='flex flex-col items-center mt-10'>
	<div class='content border-b-2 pb-60 border-grey-400'>
		<h1 class='text-3xl font-bold'>Chào!</h1>
		<h1 class='text-4xl font-bold pt-3'>Đây là đồ án blog cá nhân của 
		<span class=' text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-teal-500 bg-clip-text'>Nhóm 2</span>
		</h1>
		<p class='pt-3'>Như tiêu đề và tính chất đồ án nhóm mình đăng ký, đây là blog cá nhân của nhóm<br>
		Trang web phần lớn được viết bằng framework Sveltekit, CSS Tailwind và Javascript </p>
		<p class='pt-3'>Mọi người có thể xem mã nguồn ở <a class='text-teal-400 underline' href='https://github.com/Jackesque/IE104-Project-Personal-Blog'>Github</a>!</p>
	
		<div class='flex gap-8 pt-5 font-bold'>
			<div class='border-2 border-gray-400 rounded-md p-3 hover:scale-[1.03] 
			hover:border-teal-300 hover:text-teal-300'><a href='#content2'><p>Thành viên nhóm</p></a></div>
			<div class='border-2 border-gray-400 rounded-md p-3 hover:scale-[1.03] 
			hover:border-teal-300 hover:text-teal-300'><a href='#content3'><p>Quá trình công việc</p></a></div>
		</div>
	</div>
	
	<div id='content2' class='content mb-40 pt-24'>
		<span class='text-4xl font-bold pt-3 text-transparent bg-gradient-to-r 
		from-yellow-400 via-red-500 to-pink-500 bg-clip-text mb-20 text-center'>🔥Thành viên trong nhóm🔥 </span>
		<div class='grid grid-cols-3 gap-3'>
			<div class='flex flex-col items-center'>
				<img class='w-80 m-3 rounded-md' src='ava1.png' alt='Thai1'/>
				<h1 class='text-2xl font-medium m-1'>Trần Duy Thái</h1>
				<h2 class='text-xl'>MSSV:21522582</h2>
			</div>
			<div class='flex flex-col items-center'>
				<img class='w-80 m-3 rounded-md' src='ava2.jpg' alt='Tien'/>
				<h1 class='text-2xl font-medium m-1'>Trần Quang Tiến</h1>
				<h2 class='text-xl'>MSSV:</h2>
			</div>
			<div class='flex flex-col items-center'>
				<img class='w-80 m-3 rounded-md' src='' alt='Thai2'/>
				<h1 class='text-2xl font-medium m-1'>Đào Duy Thái</h1>
				<h2 class='text-xl'>MSSV:</h2>
			</div>
		</div>
		<a href='#content1 font-white'><p>A</p></a>
	</div>

	<div id='content3' class='content pt-24'>
		<span class='text-4xl font-bold pt-3 text-transparent bg-gradient-to-r 
		from-blue-500 via-purple-500 bg-clip-text mb-5 text-center'>⚡️Phân chia công việc⚡️</span>
		
		<div class='flex gap-2 pt-10 w-full justify-center'>
			<Progress/>

			<span class='overflow-hidden whitespace-prewrap max-h-80 w-3/12'>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa nesciunt, odit voluptates dolorem expedita dolores eum? Ratione pariatur assumenda eaque inventore. Quas eius ex incidunt, magni laboriosam architecto. Quis?</p>
			</span>
		</div>
		
		<svg width="1890" height="1344" viewBox="0 0 1890 1344" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 right-6 translate-y-[37%] transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] z-[-1] opacity-70 dark:opacity-30">
			<path d="M473 468V757.944L709 639.944V351.5M473 468L237 351.5M473 468L709 351.5M473 468V756.444L237 874.444M473 468L237 352L1 468M473 468L237 584.5M709 351.5L473 235.5L237 351.5M709 351.5V641.444M709 351.5L473 235L709 119L945 235L709 351.5ZM237 351.5V118M237 584.5V874.444M237 584.5L1 468M237 874.444L1 756.444V468M237 118L473 2L709 118L473 234.5L237 118ZM1181 587V352M1181 352L945 236L709 352M1181 352L945 468.5M709 352V640.444L892.5 729.5M709 352L945 468.5M945 468.5V701.5M1417 990.944V702.5M1417 702.5L1181 586.5L945 702.5L1181 819M1417 702.5L1181 819M1417 702.5V992.444M1417 702.5L1181 586L1417 470L1653 586L1417 702.5ZM1181 819L945 703L709 819M1181 819L945 935.5M945 935.5V1225.44L709 1107.44V819M945 935.5L709 819M1181 1052.5V1342.44M1181 1052.5L945 936M1181 1052.5L1417 936M1181 1342.44L1417 1224.44V936M1181 1342.44L945 1224.44V936M1417 936L1181 820L945 936M1653 819.5V1109.44M1653 819.5L1417 703M1653 819.5L1889 703M1653 1109.44L1889 991.444V703M1653 1109.44L1417 991.444V703M1889 703L1653 587L1417 703" stroke="url(#paint0_linear_606_425)" stroke-width="2"></path>
			
			<defs><linearGradient id="paint0_linear_606_425" x1="1888.85" y1="711.272" x2="752.465" y2="-321.779" gradientUnits="userSpaceOnUse"><stop class="text-primary-400 dark:text-primary-400" stop-color="currentColor"></stop><stop class="text-primary-300 dark:text-primary-300" offset="0.5" stop-color="currentColor"></stop><stop class="text-primary-300 dark:text-primary-200" offset="1" stop-color="currentColor"></stop></linearGradient></defs>
		</svg>
	</div>
	
</div>