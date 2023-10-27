<script>
  import { base } from '$app/paths';
</script>

<div class='footer flex flex-wrap justify-center gap-x-8 gap-y-4 border-t-[1px] w-[80%] border-gray-300 p-5'>
    <div class='tooltip'>Mã nguồn</div>
    <a href='{base}/design'><span>Thiết kế</span></a>
    <div class='tooltip'>Bố cục</div>
    <div class='tooltip'>Theo dõi</div>
    <div class='tooltip'>Số liệu</div>
</div>

<style>
    .footer .tooltip:hover {
        font-weight: bold;
    }
</style>