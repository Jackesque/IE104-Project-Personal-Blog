<div class="mt-20">
    <span class="text-4xl font-bold">Subscribe cho </span><span class="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 dark:bg-clip-text dark:text-transparent">Nhóm 2</span>
    <div class="rounded border p-5 dark:border-gray-600 mt-8 text-left">
      <p><span class="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 dark:bg-clip-text dark:text-transparent">Tham gia để nhận các bài viết mới nhất</span></p>
      <p class="mt-2">Đừng bỏ lỡ 😉. Đăng ký để nhận thông báo mỗi khi tôi đăng bài mới</p>
      <input type="text" id="email" name="email" required placeholder="Nhập Email của bạn tại đây" class="w-full sm:w-80 mt-2 rounded-md bg-white dark:bg-black sm:max-w-xs px-4 py-2 pl-9 placeholder-gray-600 dark:placeholder-gray-400 text-sm md:text-base border border-gray-600 focus:border-green-500 focus:ring-0">
      <button class="mt-2 sm:ml-6 rounded border border-gray-600 p-2 w-full sm:w-24 font-bold" on:click={xacnhandangky}>Đăng ký</button>
    </div>
</div>
  
<script>
    function xacnhandangky() {
        let email = document.getElementById('email').value;

        // Kiểm tra xem email có đúng định dạng hay không
        let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            alert('Vui lòng nhập một địa chỉ email hợp lệ.');
            return;
        }

        let isConfirmed = window.confirm(`Bạn có chắc chắn muốn đăng ký với email: ${email} không?`);
        
        if (isConfirmed) {
            alert('Đăng ký thành công!');
        } else {
            alert('Đăng ký đã bị hủy bỏ.');
        }
    }
</script>