<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            searchValue: "",
            waitTime: 600, // 该时间间隔内点击才有效
            lastTime: new Date().getTime(), // 上次点击时间
            count: 0, // 点击次数
            timer: null, // 延时器
            showPhoto: false
        }
    },
    methods: {
        // 主题切换
        handleCommand(command) {
            if (command == 'a') {
                document.documentElement.setAttribute('theme', '');
            }
            if (command == 'b') {
                document.documentElement.setAttribute('theme', '1');
            }
            if (command == 'c') {
                document.documentElement.setAttribute('theme', '2');
            }
            if (command == 'd') {
                document.documentElement.setAttribute('theme', '3');
            }
            if (command == 'e') {
                document.documentElement.setAttribute('theme', '4');
            }
            localStorage.setItem("command", command);
        },
        // 查询
        search() {
            this.$refs.child.gameSearch(this.searchValue); // 调用页面方法
        },
        tt() {
            let currentTime = new Date().getTime();
            this.count = (currentTime - this.lastTime) < this.waitTime ? this.count + 1 : 1;
            this.lastTime = new Date().getTime();
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                if (this.count > 4) {
                    this.showPhoto = true;
                }
            }, this.waitTime + 10);
        }
    },
    created() {
        let command = localStorage.getItem("command");
        this.handleCommand(command);
    }
}
</script>

<template>
    <header class="header">
        <div style="position: absolute;top: 0;left: 0;width: 10px;height: 100%;z-index: 10;" @click="tt"></div>
        <div class="header-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <RouterLink to="/"><img src="./assets/mylogo.svg" alt="" class="logo"></RouterLink>
                </div>
                <div class="content">
                    <div v-if="$route.path.includes('/gamelist')">
                        <el-input v-model="searchValue" placeholder="你想查什么？" clearable style="width: 220px;margin-right: 10px;">
                            <template #append>
                                <el-button @click="search">
                                    <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.2216 33.2217L41.7069 41.707" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </el-button>
                            </template>
                        </el-input>
                    </div>
                    <nav class="navbar-menu">
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/gamelist">游戏墙</RouterLink>
                        <RouterLink v-if="showPhoto" class="item-link link is-menu-link" active-class="active" to="/about">相册墙</RouterLink>
                        <!-- <RouterLink class="item-link link is-menu-link" active-class="active" to="/home">游戏日志</RouterLink> -->
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/home">系统日志</RouterLink>
                    </nav>
                    <div class="theme-toggler-content">
                        <el-dropdown trigger="hover" @command="handleCommand">
                            <svg width="14" height="14" viewBox="0 0 48 48" fill="none" stroke="#202020" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" stroke-width="4" stroke-linejoin="round" />
                            </svg>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="a">天空之吻</el-dropdown-item>
                                    <el-dropdown-item command="b">梦幻蔷薇</el-dropdown-item>
                                    <el-dropdown-item command="c">蔷薇雾霭</el-dropdown-item>
                                    <el-dropdown-item command="d">素梦幽情</el-dropdown-item>
                                    <el-dropdown-item command="e">薄暮紫调</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="page-content">
            <RouterView v-slot="{ Component }">
                <template v-if="Component">
                    <Transition name="fade" mode="out-in" appear>
                        <keep-alive>
                            <component ref="child" :is="Component"></component>
                        </keep-alive>
                    </Transition>
                </template>
            </RouterView>
        </div>
    </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.el-input__inner::placeholder {
	color: #333333c4;
}

</style>


<!-- <div style="width: 100%;height: 220px;"> -->
    <!-- <div class="mart10" style="background-image: linear-gradient(to right, #e0c8d1, #50616d);">淡青紫,墨色 z+m</div>

    <div class="mart10" style="background-color: #e5b8c3;">浅粉 sh</div>
    <div class="mart10" style="background-color: #d0deaa;">姚黄 sh</div>

    <div class="mart10" style="background-color: #f8e0b0;">淡肉色 q</div>
    <div class="mart10" style="background-color: #f9e8d0;">落英淡粉 q</div>
    <div class="mart10" style="background-color: #f0b69d;">肉黄 q</div>
    <div class="mart10" style="background-color: #f0d6ac;">富春纺色 q</div>
    <div class="mart10" style="background-color: #bed2b6;">水黄 q</div>
    <div class="mart10" style="background-color: #92b3a5;">浪花绿 q</div>
    <div class="mart10" style="background-color: #918072;">银灰 q</div>
    <div class="mart10" style="background-color: #b89485;">淡玫瑰灰 q</div>
    <div class="mart10" style="background-color: #e0c8d1;">淡青紫 q</div>
    <div class="mart10" style="background-color: #eadcd6;">甘石粉 q</div>
    <div class="mart10" style="background-color: #e0f0e9;">素 q</div>
    <div class="mart10" style="background-color: #8fb2c9;">晴山蓝 q</div>

    <div class="mart10" style="background-color: #806d9e;">槿紫 fh</div> -->
<!-- </div> -->