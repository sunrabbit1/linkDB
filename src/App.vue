<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            svgColor: "#202020",
        }
    },
}
</script>

<template>
    <header class="header">
        <div class="header-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <a href="#"><img src="./assets/logo.svg" alt="" class="logo"></a>
                </div>
                <div class="content">
                    <nav class="navbar-menu">
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/">游戏</RouterLink>
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/about">相册</RouterLink>
                        <RouterLink class="item-link link is-menu-link" active-class="active" to="/test">日志</RouterLink>
                    </nav>
                    <div class="theme-toggler-content">
                        <el-popover placement="bottom" :width="200" trigger="click">
                            <p>test</p>
                            <template #reference>
                                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" :stroke="svgColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" stroke-width="4" stroke-linejoin="round" />
                                </svg>
                            </template>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <RouterView v-slot="{ Component }">
            <template v-if="Component">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </template>
        </RouterView>
    </div>
</template>

<style scoped></style>
