<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            activeIndex: "1",
        }
    },
    methods: {
        handleCommand(command) {
            console.log(command);
            if (command == 'a') {
                document.documentElement.setAttribute('theme', '');
            }
            if (command == 'b') {
                document.documentElement.setAttribute('theme', '1');
                // document.documentElement.style.setProperty('--vt-c-theme', 'linear-gradient(#333, #555)')
            }
            if (command == 'c') {
                document.documentElement.setAttribute('theme', '2');
                // document.documentElement.style.setProperty('--vt-c-theme', 'linear-gradient(#333, #555)')
            }
            if (command == 'e') {
                document.documentElement.setAttribute('theme', '4');
                // document.documentElement.style.setProperty('--vt-c-theme', 'linear-gradient(#333, #555)')
            }
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="header-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <RouterLink to="/"><img src="./assets/mylogo.svg" alt="" class="logo"></RouterLink>
                </div>
                <div class="content">
                    <nav class="navbar-menu">
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/gamelist">游戏</RouterLink>
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/about">相册</RouterLink>
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/">日志</RouterLink>
                    </nav>
                    <div class="theme-toggler-content">
                        <el-dropdown trigger="click" @command="handleCommand">
                            <svg width="14" height="14" viewBox="0 0 48 48" fill="none" stroke="#202020" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" stroke-width="4" stroke-linejoin="round" />
                            </svg>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="a">天空之吻</el-dropdown-item>
                                    <el-dropdown-item command="b">梦幻蔷薇</el-dropdown-item>
                                    <el-dropdown-item command="c">蔷薇雾霭</el-dropdown-item>
                                    <el-dropdown-item command="d">test4</el-dropdown-item>
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
                            <component :is="Component"></component>
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