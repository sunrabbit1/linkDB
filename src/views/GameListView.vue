<template>
    <div class="gamePage">
        <div class="gamelist-wrapper">
            <div class="gamelist" v-for="item in showGameList" :key="item.game_nImageUrl">
                <div class="card" v-if="!item.isDevelopment">
                    <div class="imgBx">
                        <el-image :src="item.game_nImageUrl" fit="fill" lazy>
                            <template #placeholder>
                                <div class="gamelist-item-loadimg">
                                    <img src="../assets/w.png" alt="" style="width: 100%;">
                                </div>
                            </template>
                            <template #error>
                                <div class="gamelist-item-loadimg">
                                    <img src="../assets/ew.png" alt="" style="width: 100%;">
                                </div>
                            </template>
                        </el-image>
                    </div>
                    <div class="content">
                        <h2>{{ item.game_cName }}</h2>
                        <div class="content-p">
                            <p>{{ item.game_cStatus == null ? '--' : item.game_cStatus }}</p>
                            <p>{{ item.game_cCollection == null ? '--' : item.game_cCollection }}</p>
                            <p>{{ item.game_cRemark == null ? '--' : item.game_cRemark }}</p>
                        </div>
                    </div>
                </div>
                <div class="card" style="cursor: pointer;" v-if="item.isDevelopment" @click="dialogFormVisible = true">
                    <svg t="1703751767380" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="8869" width="100" height="100">
                        <path d="M847.0528 491.52H532.48V176.9472c0-11.264-9.216-20.48-20.48-20.48s-20.48 9.216-20.48 20.48V491.52H176.9472c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48H491.52v314.5728c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V532.48h314.5728c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48z" p-id="8870"></path>
                    </svg>
                </div>
            </div>
        </div>
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[20, 50, 100, 200]"
            layout="total, sizes, prev, pager, next" :total="gameList.length" @size-change="handleSizeChange" :small="false"
            @current-change="handleCurrentChange">
        </el-pagination>
        <!-- 新增弹窗 -->
        <el-dialog title="新增" v-model="dialogFormVisible" :before-close="closeDialog">
            <el-form :model="newGameData" :rules="newGameRules" ref="newGameRef" label-width="120px">
                <el-form-item label="游戏名称" prop="gameName">
                    <el-input v-model="newGameData.gameName" />
                </el-form-item>
                <el-form-item label="游戏状态" prop="gameStatus">
                    <el-input v-model="newGameData.gameStatus" />
                </el-form-item>
                <el-form-item label="收集状况" prop="gamecollection">
                    <el-input v-model="newGameData.gamecollection" />
                </el-form-item>
                <el-form-item label="游戏备注" prop="gameremark">
                    <el-input v-model="newGameData.gameremark" />
                </el-form-item>
                <el-form-item label="图片" prop="gameImage">
                    <el-upload
                        action="#"
                        ref="upLoadMyFile"
                        :on-change="handleChange"
                        :on-exceed="handleExceed"
                        :on-remove="handleRemove"
                        :auto-upload="false"
                        :limit="1"
                        list-type="picture-card">
                        <svg t="1703751767380" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8869" width="50" height="50">
                            <path d="M847.0528 491.52H532.48V176.9472c0-11.264-9.216-20.48-20.48-20.48s-20.48 9.216-20.48 20.48V491.52H176.9472c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48H491.52v314.5728c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V532.48h314.5728c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48z" p-id="8870"></path>
                        </svg>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button @click="reSetForm">Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { supabase } from '../supabase';
import axios from 'axios';
import { ElMessage } from 'element-plus';
export default {
    name: 'GameList',
    data() {
        const validateFiles = (rule, value, callback) => {
            let files = this.gameImageList;
            if (files.length === 0) {
                callback(new Error("你咋不传图片？"));
            }
            callback();
        }
        return {
            gameList: [],
            showGameList: [],
            currentPage: 1,
            pageSize: 20,
            dialogFormVisible: false,
            newGameData: {
                gameName: "",
                gameStatus: null,
                gamecollection: null,
                gameremark: null,
                gameImage: null
            },
            newGameRules: {
                gameName: [{ required: true, message: '你咋不输入名称？', tigger: 'change' }],
                gameStatus: [{ required: true, message: '你咋不输入状态？', tigger: 'change' }],
                gameImage: [{ required: true, validator: validateFiles, tigger: 'change' }],
            },
            gameImageList: []
        }
    },
    methods: {
        // 滚动条回到顶部
        backTop() {
            this.$nextTick(() => {
                window.scrollTo({
                    top: 0, // 滚动到页面顶部
                    // behavior: 'smooth' // 平滑滚动
                })
            });
        },
        async getProfile() {
            // let { data, error } = await supabase.from('t_game').select('*').range((this.currentPage - 1) * this.pageSize, (this.currentPage * this.pageSize) - 1).order('game_cName')
            let { data, error } = await supabase.from('t_game').select('*').order('game_cName')
            this.gameList = [];
            this.gameList = data;
            for (let i = 0; i < this.gameList.length; i++) {
                this.gameList[i].isDevelopment = false;
            }
            if (import.meta.env.MODE === 'development') {
                this.gameList.push({
                    isDevelopment: true
                })
            }
            this.getShowPage();
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.handleCurrentChange(1);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.backTop();
            this.getShowPage(); // 查询一次，手动截取数据完成分页
            // this.getProfile() // 直接在数据库查询
        },
        getShowPage() {
            let totalPage = [];
            let pageNum = Math.ceil(this.gameList.length / this.pageSize) || 1; // 计算有多少页数据，默认为1
            // 循环页面
            for (let i = 0; i < pageNum; i++) {
                // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
                // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
                totalPage[i] = this.gameList.slice(this.pageSize * i, this.pageSize * (i + 1))
            }
            // 获取到数据后默认显示第一页内容
            this.showGameList = totalPage[this.currentPage - 1];
        },
        // 新增数据
        async insertData(tmp) {
            let imgSort = tmp.data.filename.replace(/[^\d]/g, "");
            let { data, error } = await supabase.from('t_game')
                                .insert({
                                    game_nSort: imgSort,
                                    game_nImageUrl: tmp.data.url,
                                    game_cName: this.newGameData.gameName,
                                    game_cImageName: tmp.data.filename,
                                    game_cStatus: this.newGameData.gameStatus,
                                    game_cCollection: this.newGameData.gamecollection,
                                    game_cRemark: this.newGameData.gameremark
                                })
                                .select()
            if (data.status === 201) {
                ElMessage({
                    message: '成功',
                    type: 'success',
                })
            } else {
                ElMessage({
                    message: '失败',
                    type: 'error'
                })
            }
        },
        handleChange(file, fileList) {
            let fileType = [];
            fileType.push('image/jpg', 'image/jpeg', 'image/png');
            if (fileType.indexOf(file.raw.type) < 0) {
                ElMessage({
                    message: '类型不对',
                    type: 'warning',
                })
                this.deleteFile(file, fileList);
                return;
            }
            let fileSize = 0;
            let fileMaxSize = 1024;
            fileSize = file.raw.size;
            let size = fileSize / 1024;
            if (size > fileMaxSize * 10) {
                ElMessage({
                    message: '图片不能大于10M',
                    type: 'warning',
                })
                this.deleteFile(file, fileList);
                return;
            }
            if (size <= 0) {
                ElMessage({
                    message: '图片不能为空',
                    type: 'warning',
                })
                this.deleteFile(file, fileList);
                return;
            }
            let formData = new FormData();
            formData.append("smfile", file.raw);
            this.newGameData.gameImage = formData;
            this.gameImageList.push(fileList);
        },
        deleteFile(file, fileList) {
            for (let i = 0; i < fileList.length; i++) {
                if (file.uid === fileList[i].uid) {
                    fileList.splice(i, 1);
                    this.gameImageList = fileListl;
                    break;
                }
            }
        },
        //文件个数限制
        handleExceed(files, fileList) {
            ElMessage({
                message: '最大上传图片数量为1张。',
                type: 'warning',
            })
        },
        handleRemove(files, fileList) {
            this.newGameData.gameImage = null;
            this.gameImageList = [];
        },
        onSubmit() {
            this.$refs.newGameRef.validate(valid => {
                if (valid) {
                    axios({
                        method: "POST",
                        url: "/smmsApi/upload",
                        data: this.newGameData.gameImage,
                        headers: { "Content-Type": "multipart/form-data", "Authorization": import.meta.env.VITE_SMMS_KEY },
                    }).then(res => {
                        let tmp = res.data;
                        if (tmp.code === "success") {
                            this.insertData(tmp);
                        }
                    })
                }
            });
        },
        reSetForm() {
            this.newGameData.gameName = "";
            this.newGameData.gameImage = null;
            this.$refs.newGameRef.clearValidate();
            this.$refs.newGameRef.resetFields();
            this.$refs.upLoadMyFile.clearFiles();
        },
        closeDialog() {
            this.reSetForm();
            this.dialogFormVisible = false;
        },
        // 查询
        async gameSearch(val) {
            if (!val) {
                val = "";
            }
            let { data, error } = await supabase.from('t_game').select().ilike('game_cName', '%' + val + '%').order('game_cName');
            this.gameList = [];
            this.gameList = data;
            for (let i = 0; i < this.gameList.length; i++) {
                this.gameList[i].isDevelopment = false;
            }
            if (import.meta.env.MODE === 'development') {
                this.gameList.push({
                    isDevelopment: true
                })
            }
            this.getShowPage();
        }
    },
    mounted() {
        this.gameSearch();
    }
}
</script>

<style scoped>
.gamelist-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px 25px;
}

.gamelist {
    display: flex;
    align-items: center;
    height: 445px;
}

.card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 410px;
    background: var(--vt-c-card-background);
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.card:hover {
    height: 460px;
    /* background-color: #e0c8d1; */
}

.imgBx {
    position: absolute;
    top: 20px;
    width: 245px;
    height: 340px;
    /* background-color: #000; */
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.card:hover .imgBx {
    top: -50px;
    scale: 0.85;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.content {
    position: absolute;
    top: 370px;
    width: 100%;
    padding: 0 20px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    /* background-color: aqua; */
}

.card:hover .content {
    top: 280px;
    height: 200px;
}

.content h2 {
    font-size: 1.3em;
    font-weight: 700;
    color: var(--vt-c-card-text);
    margin-bottom: 10px;
}

.content-p p{
    color: var(--vt-c-card-text);
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
}

.content-p p:first-child{
    margin-top: 20px;

}

.el-image {
    width: 100%;
    height: 100%;
}

.gamelist-item-loadimg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--vt-c-card-loadimg);
}

.el-pagination {
    padding-top: 20px;
    justify-content: center;
}
</style>
