<script>
import { supabase } from '../supabase';
export default {
    name: 'LogList',
    data() {
        return {
            logList: []
        }
    },
    methods: {
        async getLogList() {
            let { data, error } = await supabase.from('t_log').select('*').order('log_date', { ascending: false })
            this.logList = [];
            this.logList = data;
        }
    },
    mounted() {
    //     document.documentElement.setAttribute('theme', '1')
        this.getLogList();
    }
}
</script>

<template>
    <div class="blogPage">
        <div class="timeline">
            <div class="timeline-container" v-for="(item, index) in logList" :key="item.id" :class="index % 2 == 0 ? 'left' : 'right'">
                <div class="timeline-content">
                    <h2>{{item.log_date}}</h2>
                    <p>{{item.log_content}}</p>
                </div>
            </div>
            <!-- <div class="timeline-container right">
                <div class="timeline-content">
                    <h2>2016</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                        mazim
                        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis
                        ea
                        eam.</p>
                </div>
            </div>
            <div class="timeline-container left">
                <div class="timeline-content">
                    <h2>2015</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                        mazim
                        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis
                        ea
                        eam.</p>
                </div>
            </div>
            <div class="timeline-container right">
                <div class="timeline-content">
                    <h2>2012</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                        mazim
                        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis
                        ea
                        eam.</p>
                </div>
            </div>
            <div class="timeline-container left">
                <div class="timeline-content">
                    <h2>2011</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                        mazim
                        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis
                        ea
                        eam.</p>
                </div>
            </div>
            <div class="timeline-container right">
                <div class="timeline-content">
                    <h2>2007</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                        mazim
                        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis
                        ea
                        eam.</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style>
/* 实际时间轴（垂直标尺） */
.timeline {
    position: relative;
    margin: 0 auto;
}

/* 实际时间轴（垂直标尺） */
.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background: var(--vt-c-timeLine);
    top: 0;
    bottom: 0;
    left: 50%;
}

/* 围绕内容的容器 */
.timeline-container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

/* 时间轴上的圆圈 */
.timeline-container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -15px;
    background-color: white;
    border: 4px solid var(--vt-c-timeLine-container);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

/* 将容器放在左边 */
.left {
    left: 0;
}

/* 将容器放在右边 */
.right {
    left: 50%;
}

/* 向左容器添加箭头（指向右）*/
.left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid var(--vt-c-timeCard);
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--vt-c-timeCard);
}

/* 向右容器添加箭头（指向左）*/
.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid var(--vt-c-timeCard);
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--vt-c-timeCard) transparent transparent;
}

/* 修复右侧容器的圆圈 */
.right::after {
    left: -10px;
}

/* 实际内容 */
.timeline-content {
    padding: 20px 30px;
    background: var(--vt-c-timeCard);
    position: relative;
    border-radius: 6px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
}

.timeline-content h2, .timeline-content p {
    color: var(--vt-c-timeCard-text);
}

/* 媒体查询 - 在小于 600 像素宽的屏幕上响应时间轴 */
@media screen and (max-width: 600px) {

    /* 将时间轴放在左边 */
    .timeline::after {
        left: 31px;
    }

    /*全宽容器*/
    .timeline-container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    /* 确保所有的箭头都指向左边 */
    .timeline-container::before {
        left: 60px;
        border: medium solid var(--vt-c-timeCard);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--vt-c-timeCard) transparent transparent;
    }

    /* 确保所有圆都在同一个点 */
    .left::after,
    .right::after {
        left: 21px;
    }

    /* 使所有右侧容器的行为与左侧容器相同 */
    .right {
        left: 0%;
    }
}
</style>