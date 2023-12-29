<template>
    <div>
        <div style="height: 50px;background-image: linear-gradient(to right, #e0c8d1, #50616d);">淡青紫,墨色 z+m</div>
        <br>
        <!-- <div style="height: calc(100vh - 165px);
        background-image: linear-gradient(45deg, #f8e0b0, #f9e8d0, #f0b69d, #f0d6ac, #bed2b6, #92b3a5, #918072, #b89485, #e0c8d1, #eadcd6, #e0f0e9, #8fb2c9);">淡青紫,墨色 z+m</div> -->

        <div style="height: 50px;background-color: #e5b8c3;">浅粉 sh</div>
        <div style="height: 50px;background-color: #d0deaa;">姚黄 sh</div>
        <br>
        <div style="height: 50px;background-color: #f8e0b0;">淡肉色 q</div>
        <div style="height: 50px;background-color: #f9e8d0;">落英淡粉 q</div>
        <div style="height: 50px;background-color: #f0b69d;">肉黄 q</div>
        <div style="height: 50px;background-color: #f0d6ac;">富春纺色 q</div>
        <div style="height: 50px;background-color: #bed2b6;">水黄 q</div>
        <div style="height: 50px;background-color: #92b3a5;">浪花绿 q</div>
        <div style="height: 50px;background-color: #918072;">银灰 q</div>
        <div style="height: 50px;background-color: #b89485;">淡玫瑰灰 q</div>
        <div style="height: 50px;background-color: #e0c8d1;">淡青紫 q</div>
        <div style="height: 50px;background-color: #eadcd6;">甘石粉 q</div>
        <div style="height: 50px;background-color: #e0f0e9;">素 q</div>
        <div style="height: 50px;background-color: #8fb2c9;">晴山蓝 q</div>
        <br>
        <div style="height: 50px;background-color: #806d9e;">槿紫 fh</div>


        <!-- <el-upload action="#" :http-request="tt" :show-file-list="false">
            <div style="width: 100px;height: 100px;background: #806d9e;"></div>
        </el-upload> -->
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {

        }
    },
    methods: {
        tt(file) {
            console.log(file);
            let formData = new FormData();
            formData.append("smfile", file.file);
            console.log(formData);
            // axios({
            //     method: "POST",
            //     url: "/smmsApi/upload",
            //     data: formData,
            //     headers: { "Content-Type": "multipart/form-data", "Authorization": import.meta.env.VITE_SMMS_KEY },
            // }).then(res => {
            //     console.log(res.data.data.url);
            //     let tmp = res.data;
            //     if (tmp.code === "success") {
            //         let imgName = tmp.data.filename.replace(/[^\d]/g, "");
            //         // let { data, error } = await supabase.from('t_game').insert({game_nSort: this.gameList.length + 1, game_nImageUrl: tmp.data.url, game_cName: 'test'})
            //     }
            // })
        }
    },
    mounted() {
        // axios({
        //     method: "GET",
        //     url: "/smmsApi/upload_history",
        //     params: { page: 2 },
        //     headers: { "Content-Type": "multipart/form-data", "Authorization": import.meta.env.VITE_SMMS_KEY },
        // }).then(res => {
        //     console.log(res.data);
        // })

        // {
        //     "success": true,
        //     "code": "success",
        //     "message": "Upload success.",
        //     "data": {
        //         "file_id": 0,
        //         "width": 300,
        //         "height": 450,
        //         "filename": "image170.jpg",
        //         "storename": "XupmWewv2qin1QJ.jpg",
        //         "size": 41288,
        //         "path": "\/2023\/12\/27\/XupmWewv2qin1QJ.jpg",
        //         "hash": "r82YnJolsNZ1dzeVt3Ljv4camR",
        //         "url": "https:\/\/s2.loli.net\/2023\/12\/27\/XupmWewv2qin1QJ.jpg",
        //         "delete": "https:\/\/sm.ms\/delete\/r82YnJolsNZ1dzeVt3Ljv4camR",
        //         "page": "https:\/\/sm.ms\/image\/XupmWewv2qin1QJ"
        //     },
        //     "RequestId": "FBFEFFC8-5E24-4FEB-8446-00311E86F921"
        // }
    }
}
</script>

<style scoped></style>
