<script>
	import './base.css'
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class='flex flex-col items-center mt-10 '>
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
				<img class='w-3/4 m-3 rounded-md' src='ava1.png' alt='Thai1'/>
				<h1 class='text-2xl font-medium m-1'>Trần Duy Thái</h1>
				<h2 class='text-xl'>MSSV:21522582</h2>
			</div>
			<div class='flex flex-col items-center'>
				<img class='w-3/4 m-3 rounded-md' src='ava2.jpg' alt='Tien'/>
				<h1 class='text-2xl font-medium m-1'>Trần Quang Tiến</h1>
				<h2 class='text-xl'>MSSV:</h2>
			</div>
			<div class='flex flex-col items-center'>
				<img class='w-2/3 m-3 rounded-md' src='' alt='Thai2'/>
				<h1 class='text-2xl font-medium m-1'>Đào Duy Thái</h1>
				<h2 class='text-xl'>MSSV:</h2>
			</div>
		</div>
	</div>

	<div id='content3' class='content pt-24'>
		<span class='text-4xl font-bold pt-3 text-transparent bg-gradient-to-r 
		from-blue-500 via-purple-500 bg-clip-text mb-5 text-center'>⚡️Phân chia công việc⚡️</span>
	</div>
	
</div>