<template>
    <div>
        <div class="photo-wall">
            <img v-for="(photo, index) in showGameList" :key="index" :src="photo.game_nImageUrl" alt="个人照片">
        </div>
    </div>

</template>

<script>
import { supabase } from '../supabase';
export default {
    name: 'GameWall',
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            gameList: [],
            showGameList: [],
            currentPage: 1,
            pageSize: 100,
            hoverIndex: -1 // 当前鼠标悬停的卡片索引
        };
    },
    methods: {
        onMouseOver(index) {
            this.hoverIndex = index;
        },
        onMouseLeave() {
            this.hoverIndex = -1;
        },
        async getProfile() {
            // let { data, error } = await supabase.from('t_game').select('*').range((this.currentPage - 1) * this.pageSize, (this.currentPage * this.pageSize) - 1)
            let { data, error } = await supabase.from('t_game').select('*').order('game_nSort')
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
    },
    mounted() {
        this.getProfile();
    }
}
</script>

<style scoped>

/* .photo-wall {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
} */

.photo-wall {
    /* display: flex; */
    column-width: 270px;
    column-gap: 10px;
}

.photo-wall img {
    width: 100%;
    /* height: 100%; */
    margin-bottom: 10px;
}
</style>