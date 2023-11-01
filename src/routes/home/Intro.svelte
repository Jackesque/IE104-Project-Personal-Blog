<script>
    import {base} from '$app/paths'
</script>


<div class='relative flex flex-col justify-between min-h-[80vh] sm:min-h-[70vh]'>
    <div class='z-[1]'>
        <h1 class='text-3xl font-bold delay-[0.1s]'>Chào !</h1>
        <div class='text-4xl font-bold'>
            <h1 class='leading-relaxed overflow-hidden max-h-[6em] delay-[0.2s]'>Đây là đồ án blog cá nhân của 
            <mark class='bg-gradient-to-tr from-primary-300 to-primary-400 dark:bg-clip-text dark:text-transparent text-5xl transition-colors duration-[1s]'>Nhóm 2</mark>
            </h1>
        </div>
        <p class='pt-3 overflow-hidden max-h-[8.5em] delay-[0.2s]'>Như tiêu đề và tính chất đồ án nhóm mình đăng ký, đây là blog cá nhân của nhóm<br>
        Trang web phần lớn được viết bằng Sveltekit, Tailwind và Javascript <br>
        Mọi người có thể xem mã nguồn ở <a class='text-teal-400 underline' href='https://github.com/Jackesque/IE104-Project-Personal-Blog' target="_blank">Github</a>!</p>

        <div class='flex gap-8 pt-5 font-bold'>
            <div class='border-2 border-gray-400 rounded-md p-3 hover:scale-[1.03] 
            hover:border-teal-300 hover:text-teal-300'><a href='#content2'><p>Thành viên nhóm</p></a></div>
            <div class='border-2 border-gray-400 rounded-md p-3 hover:scale-[1.03] 
            hover:border-teal-300 hover:text-teal-300'><a href='#content3'><p>Quá trình công việc</p></a></div>
        </div>
    </div>
    <div class='flex justify-center z-[1]'>
        <a href='#homeAnchor'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class=" h-8 w-8 animate-bounce md:h-10 md:w-10 hover:text-primary-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"></path></svg>
        </a>
    </div>
    <div class='absolute bottom-0 right-10 translate-y-[30%] translate-x-[15%] sm:w-[45em] lg:w-[60em] z-0'>
        <img class='hidden dark:hidden sm:block opacity-70 w-full' src='{base}/images/splash.jpg' alt='splash'/>
        <img class='hidden dark:sm:block opacity-70 w-full' src='{base}/images/splash-2.png' alt='splash'/>
    </div>
</div>