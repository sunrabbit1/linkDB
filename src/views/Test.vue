<template>
    <div class="gamelist-wrapper">
        <div class="gamelist-item" v-for="item in gameList" :key=item.game_nImageUrl>
            <el-image @click="tt(item)" :src=item.game_nImageUrl fit="fill" lazy>
                <template #placeholder>
                    <div class="gamelist-item-loading">
                        Loading...
                    </div>
                </template>
            </el-image>
        </div>
    </div>
    <el-pagination v-model:current-page="currentPage2" v-model:page-size="pageSize2" :page-sizes="[20, 50, 100, 200]"
        layout="total, sizes, prev, pager, next" :total="gameList.length">
    </el-pagination>
</template>

<script>
import { supabase } from '../supabase'
export default {
    name: 'Test',
    data() {
        return {
            gameList: [
                {
                    "game_nId": 1,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/SZaNr84RE7VGMoy.jpg",
                    "game_cName": "最终幻想7重制版"
                },
                {
                    "game_nId": 2,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/b3kVfgxYuwBNSCJ.jpg",
                    "game_cName": "最终幻想15"
                },
                {
                    "game_nId": 3,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/ePpo8tTFHbXOld6.jpg",
                    "game_cName": "战神4"
                },
                {
                    "game_nId": 4,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/PW8mxUfq6SNbkDn.jpg",
                    "game_cName": "光明旅者"
                },
                {
                    "game_nId": 5,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/Hvzo9BmYxjpwVrn.jpg",
                    "game_cName": "古墓丽影:崛起"
                },
                {
                    "game_nId": 6,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/gS71yEH2J4WNf9v.jpg",
                    "game_cName": "远星物语"
                },
                {
                    "game_nId": 7,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/bPmcous14tajK7g.jpg",
                    "game_cName": "阿斯达伦:地球之泪"
                },
                {
                    "game_nId": 8,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/U72qT4n1fpKth9Z.jpg",
                    "game_cName": "血污:夜之仪式"
                },
                {
                    "game_nId": 9,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/Gr7mbYl52gvTdAp.jpg",
                    "game_cName": "空洞骑士"
                },
                {
                    "game_nId": 10,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/K5ajgOcMrn6eSil.jpg",
                    "game_cName": "空洞骑士：丝之歌(未发售)"
                },
                {
                    "game_nId": 11,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/m9lIge4N2ZzBdYK.jpg",
                    "game_cName": "死亡细胞"
                },
                {
                    "game_nId": 12,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/oShVnjw1gqlrWkQ.jpg",
                    "game_cName": "挺进地牢"
                },
                {
                    "game_nId": 13,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/y6w9C8bG3tE2gHJ.jpg",
                    "game_cName": "哈迪斯"
                },
                {
                    "game_nId": 14,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/rLljh3ctdMUmkeP.jpg",
                    "game_cName": "蔚蓝"
                },
                {
                    "game_nId": 15,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/8b6nyHFrTljNe59.jpg",
                    "game_cName": "Jotun: Valhalla Edition"
                },
                {
                    "game_nId": 16,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/GDv6A8aksOIST9h.jpg",
                    "game_cName": "艾希"
                },
                {
                    "game_nId": 17,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/cHeBa3ROZlgLuTV.jpg",
                    "game_cName": "奥日与黑暗森林"
                },
                {
                    "game_nId": 18,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/yKIJUodDiYgT8As.jpg",
                    "game_cName": "奥日与精灵意志"
                },
                {
                    "game_nId": 19,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/oTNw1OIzPCiQx5g.jpg",
                    "game_cName": "新超级马里奥兄弟wii"
                },
                {
                    "game_nId": 20,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/QFy7WsEx6iRJYmU.jpg",
                    "game_cName": "新超级马里奥兄弟2"
                },
                {
                    "game_nId": 21,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/ySdz6lxvp87uMVi.png",
                    "game_cName": "超级马里奥:奥德赛"
                },
                {
                    "game_nId": 22,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/xMc28On9E5ujCsk.jpg",
                    "game_cName": "星之卡比wii豪华版"
                },
                {
                    "game_nId": 23,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/tScNZ9I8Yy6JPQx.jpg",
                    "game_cName": "瓦里奥大陆:摇摆"
                },
                {
                    "game_nId": 24,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/8IfcMwamsh4nJ6W.jpg",
                    "game_cName": "瓦里奥大陆4"
                },
                {
                    "game_nId": 25,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/RsCNj8owuTS5ZWq.jpg",
                    "game_cName": "星之卡比:探索发现"
                },
                {
                    "game_nId": 26,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/gL4VAM9Y2apEsyJ.jpg",
                    "game_cName": "星之卡比:梦之泉物语"
                },
                {
                    "game_nId": 27,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/E5VklXMJsWqh7uD.jpg",
                    "game_cName": "马里奥与路易基RPG1"
                },
                {
                    "game_nId": 28,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/BWfYIo435zXHKcb.jpg",
                    "game_cName": "星之卡比:毛线传说"
                },
                {
                    "game_nId": 29,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/zDY2rTvm8KNdikJ.jpg",
                    "game_cName": "星之卡比:镜之迷宫"
                },
                {
                    "game_nId": 30,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/Kpu7z3EZqYNWTHm.jpg",
                    "game_cName": "星之卡比:呐喊团"
                },
                {
                    "game_nId": 31,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/a3i4QbOZl9GR8BS.jpg",
                    "game_cName": "塞尔达传说:织梦岛重制版"
                },
                {
                    "game_nId": 32,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/dbi5r49mhzc8LaK.png",
                    "game_cName": "塞尔达传说:旷野之息"
                },
                {
                    "game_nId": 33,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/FBHaGdI1pWy7NAv.png",
                    "game_cName": "塞尔达传说:王国之泪"
                },
                {
                    "game_nId": 34,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/RuNa9KwpAlDhGJX.jpg",
                    "game_cName": "塞尔达传说:灾厄启示录"
                },
                {
                    "game_nId": 35,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/lxoOSQ4rgD6NdTw.png",
                    "game_cName": "铲子骑士"
                },
                {
                    "game_nId": 36,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/ZJBPbyslo1uDcCn.jpg",
                    "game_cName": "小骨:英雄杀手"
                },
                {
                    "game_nId": 37,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/mMlUgsG7uoDrHE4.jpg",
                    "game_cName": "浮岛物语"
                },
                {
                    "game_nId": 38,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/tejfLmawV9uZHp1.jpg",
                    "game_cName": "雷曼:传奇"
                },
                {
                    "game_nId": 39,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/UpvctNI9CJWhB1Z.jpg",
                    "game_cName": "雷曼:起源"
                },
                {
                    "game_nId": 40,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/32qK1wRk4BDCzT7.jpg",
                    "game_cName": "粘粘世界"
                },
                {
                    "game_nId": 41,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/wneSZWY1p9rOJ7a.jpg",
                    "game_cName": "小小地狱之火"
                },
                {
                    "game_nId": 42,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/jcHaeqSxZWXouz3.jpg",
                    "game_cName": "程序员升职记"
                },
                {
                    "game_nId": 43,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/O4LbcBXm7whG9YN.jpg",
                    "game_cName": "勇敢的心:世界大战"
                },
                {
                    "game_nId": 44,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/IGNHoDauO1gEWkB.jpg",
                    "game_cName": "超级食肉男孩"
                },
                {
                    "game_nId": 45,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/WghYivjXulr1CGP.jpg",
                    "game_cName": "机械迷城"
                },
                {
                    "game_nId": 46,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/m2fWz5pbGr7ulN9.jpg",
                    "game_cName": "终结将至"
                },
                {
                    "game_nId": 47,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/kbqzE6rUiY9G7DM.jpg",
                    "game_cName": "银河历险记3"
                },
                {
                    "game_nId": 48,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/NHKXPpf6rCxGlzh.jpg",
                    "game_cName": "银河历险记2"
                },
                {
                    "game_nId": 49,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/AbsEyLW9G3xSphc.jpg",
                    "game_cName": "银河历险记1"
                },
                {
                    "game_nId": 50,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/oWeukLm1jaYPBCb.jpg",
                    "game_cName": "植物精灵"
                },
                {
                    "game_nId": 51,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/VKNmMyd2fQoszcv.jpg",
                    "game_cName": "失落的遗迹"
                },
                {
                    "game_nId": 52,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/EgqduzK6eFJsATD.jpg",
                    "game_cName": "UNSIGHTED(盲目射击)"
                },
                {
                    "game_nId": 53,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/avBIhOJx8m5lt1Y.jpg",
                    "game_cName": "求生之路1"
                },
                {
                    "game_nId": 54,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/fe93u4tPaELGJXS.jpg",
                    "game_cName": "求生之路2"
                },
                {
                    "game_nId": 55,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/jFue82SJ1TlPaQw.jpg",
                    "game_cName": "侠盗猎车手:圣安地列斯"
                },
                {
                    "game_nId": 56,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/6pCnLeQOWKA9uvz.jpg",
                    "game_cName": "侠盗猎车手:罪恶都市"
                },
                {
                    "game_nId": 57,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/QcVCgWAIkm82FPr.jpg",
                    "game_cName": "侠盗猎车手Ⅴ"
                },
                {
                    "game_nId": 58,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/2NglfiHckqOP4Fb.jpg",
                    "game_cName": "植物大战僵尸"
                },
                {
                    "game_nId": 59,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/PaEFwfg8Udn91Nk.png",
                    "game_cName": "怪怪水族馆"
                },
                {
                    "game_nId": 60,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/m6uSkOHvtZYzjqC.jpg",
                    "game_cName": "木乃伊迷宫"
                },
                {
                    "game_nId": 61,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/r7jgTpwF5aEYyoc.jpg",
                    "game_cName": "宝石迷阵2"
                },
                {
                    "game_nId": 62,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/w2zrmQIdFWhNoTe.jpg",
                    "game_cName": "吞食鱼1"
                },
                {
                    "game_nId": 63,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/NO9m7TeAPdkuI4z.jpg",
                    "game_cName": "吞食鱼2"
                },
                {
                    "game_nId": 64,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/Z19ULJDdv6xpY4s.jpg",
                    "game_cName": "原子球"
                },
                {
                    "game_nId": 65,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/Jrfnu4s2Ax5Xhwz.jpg",
                    "game_cName": "超级赚钱大亨"
                },
                {
                    "game_nId": 66,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/6l2GvebRMYhyIN7.jpg",
                    "game_cName": "四川麻将"
                },
                {
                    "game_nId": 67,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/bqgPe7oQcxvaHAt.jpg",
                    "game_cName": "诺亚方舟"
                },
                {
                    "game_nId": 68,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/O23UtqcINVvGgh5.jpg",
                    "game_cName": "疯狂火箭"
                },
                {
                    "game_nId": 69,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/cwCOL3aMTiVH98g.jpg",
                    "game_cName": "重装兵器"
                },
                {
                    "game_nId": 70,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/DRTx7K4YsJqMkGi.jpg",
                    "game_cName": "恐龙蛋"
                },
                {
                    "game_nId": 71,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/ub8A9LRl3QO7zkv.jpg",
                    "game_cName": "毛毛球"
                },
                {
                    "game_nId": 72,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/CtJkYIRoBOeXAK4.jpg",
                    "game_cName": "书虫1"
                },
                {
                    "game_nId": 73,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/GFuLSncYX3yVlCQ.jpg",
                    "game_cName": "伊特"
                },
                {
                    "game_nId": 74,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/CKN54tWrnOiqoHM.jpg",
                    "game_cName": "幻幻球"
                },
                {
                    "game_nId": 75,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/7cbCXuOFl4MEnkV.jpg",
                    "game_cName": "祖玛"
                },
                {
                    "game_nId": 76,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/4W7Ert2veJqLFnl.jpg",
                    "game_cName": "祖玛的复仇"
                },
                {
                    "game_nId": 77,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/OJASo8yGfatDWmU.jpg",
                    "game_cName": "锤锤小矮人"
                },
                {
                    "game_nId": 78,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/13/wNd6DJbQ7SgxuG4.png",
                    "game_cName": "打砖块2"
                },
                {
                    "game_nId": 79,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/iZzuoWxp957L6qh.jpg",
                    "game_cName": "8道门:雅兰的来世冒险"
                },
                {
                    "game_nId": 80,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/QSk3GbThDlAosgL.jpg",
                    "game_cName": "不死鸟传说:觉醒"
                },
                {
                    "game_nId": 81,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/RcOeNSpFm1Txdun.jpg",
                    "game_cName": "循环英雄"
                },
                {
                    "game_nId": 82,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/i7jau2ZqWUCeEJv.jpg",
                    "game_cName": "风来之国"
                },
                {
                    "game_nId": 83,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/f2HmtczSebpjGEq.jpg",
                    "game_cName": "蛇形武装"
                },
                {
                    "game_nId": 84,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/qfIK5BWp3OrM7ye.jpg",
                    "game_cName": "伊甸之路"
                },
                {
                    "game_nId": 85,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/3fHuNivJy7Fn8gU.jpg",
                    "game_cName": "城堡破坏者"
                },
                {
                    "game_nId": 86,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/nz8OjNCQqxMmLZF.jpg",
                    "game_cName": "战斗方块剧场"
                },
                {
                    "game_nId": 87,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/UPc8uCFlWkQ9eaK.jpg",
                    "game_cName": "这里没有游戏2"
                },
                {
                    "game_nId": 88,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/eUPEBctNO1hZYK9.jpg",
                    "game_cName": "这里没有游戏1"
                },
                {
                    "game_nId": 89,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/lMr32qoREfbsChW.png",
                    "game_cName": "茶杯头"
                },
                {
                    "game_nId": 90,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/lRkXcgponUKt3CJ.png",
                    "game_cName": "终结的百合花:骑士们的救赎"
                },
                {
                    "game_nId": 91,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/6U3aFnTwjdVCkYJ.jpg",
                    "game_cName": "午夜幻想曲"
                },
                {
                    "game_nId": 92,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/WYADndcmrOLu4sz.jpg",
                    "game_cName": "渎神1"
                },
                {
                    "game_nId": 93,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/2yEFDoPxV8k4I3Z.jpg",
                    "game_cName": "渎神2"
                },
                {
                    "game_nId": 94,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/M31atEmRzlJ2IQc.jpg",
                    "game_cName": "控制"
                },
                {
                    "game_nId": 95,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/gT4MIat8z3yUDFe.jpg",
                    "game_cName": "兽人必须死1"
                },
                {
                    "game_nId": 96,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/HIgMynSRjwuczrE.jpg",
                    "game_cName": "兽人必须死2"
                },
                {
                    "game_nId": 97,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/B91tYVH7v3UZkhD.jpg",
                    "game_cName": "双星物语1"
                },
                {
                    "game_nId": 98,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/JDl1VcARrE89CY7.jpg",
                    "game_cName": "双星物语2"
                },
                {
                    "game_nId": 99,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/uewxRT41BOvZL2F.jpg",
                    "game_cName": "王国保卫战"
                },
                {
                    "game_nId": 100,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/tFzNbBJYT8SwkOQ.jpg",
                    "game_cName": "王国保卫战:前线"
                },
                {
                    "game_nId": 101,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/jhk39wou72BFzED.jpg",
                    "game_cName": "王国保卫战:起源"
                },
                {
                    "game_nId": 102,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/mh7bjE6RoTGSDLW.jpg",
                    "game_cName": "王国保卫战:复仇"
                },
                {
                    "game_nId": 103,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/d8ocCaRkv5xVmZX.jpg",
                    "game_cName": "叛逆机械师"
                },
                {
                    "game_nId": 104,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/mGwoXUpZNAJSVlf.jpg",
                    "game_cName": "蒙特祖马的宝藏1"
                },
                {
                    "game_nId": 105,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/O3tYqWi2U684Tbu.jpg",
                    "game_cName": "蒙特祖玛的宝藏2"
                },
                {
                    "game_nId": 106,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/I4A7aF9ReWlBPXm.jpg",
                    "game_cName": "蒙特祖玛的宝藏3"
                },
                {
                    "game_nId": 107,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/T5EmYXUCbQgnV1P.jpg",
                    "game_cName": "乐高建筑虫"
                },
                {
                    "game_nId": 108,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/gN2qpwz478tKAOu.jpg",
                    "game_cName": "美女餐厅1"
                },
                {
                    "game_nId": 109,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/wVBTtyFuoqAnEgI.jpg",
                    "game_cName": "雨中冒险1"
                },
                {
                    "game_nId": 110,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/9bAl6edu7CWQSvI.jpg",
                    "game_cName": "灵魂摆渡者"
                },
                {
                    "game_nId": 111,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/rjodeHDzWqJ7OMU.jpg",
                    "game_cName": "阿波波大冒险"
                },
                {
                    "game_nId": 112,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/qFaD3t41wbNcYUC.jpg",
                    "game_cName": "武士零"
                },
                {
                    "game_nId": 113,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/TpJtsuhyWVq6NdZ.png",
                    "game_cName": "东方永夜抄"
                },
                {
                    "game_nId": 114,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/cBs5zISunjXyJKq.jpg",
                    "game_cName": "三位一体1"
                },
                {
                    "game_nId": 115,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/rv9kbK57IZQlsEu.png",
                    "game_cName": "三位一体2"
                },
                {
                    "game_nId": 116,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/13/915KeoTysiz6hVJ.jpg",
                    "game_cName": "三位一体3"
                },
                {
                    "game_nId": 117,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/1KySVNrPhDYQ3vj.jpg",
                    "game_cName": "三位一体4"
                },
                {
                    "game_nId": 118,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/11/WKFwf4Zg76rOiDa.jpg",
                    "game_cName": "三位一体5"
                },
                {
                    "game_nId": 119,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/uqYhw8Q4BIRaHlE.jpg",
                    "game_cName": "三国无双3"
                },
                {
                    "game_nId": 120,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/wmsqrhnNTbaoJld.png",
                    "game_cName": "三国无双4"
                },
                {
                    "game_nId": 121,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/SlLxPwogKX1tnZf.png",
                    "game_cName": "三国无双5"
                },
                {
                    "game_nId": 122,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/a9kmFfTzdSBVWNH.png",
                    "game_cName": "三国无双6"
                },
                {
                    "game_nId": 123,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/9kqID213BmfabL8.png",
                    "game_cName": "三国无双7"
                },
                {
                    "game_nId": 124,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/pbueEVcWn7Y4LfG.png",
                    "game_cName": "请出示证件"
                },
                {
                    "game_nId": 125,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/liRxEY6kKXaADU8.jpg",
                    "game_cName": "不再犹豫"
                },
                {
                    "game_nId": 126,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/nt2OJQHAT1kFCqZ.png",
                    "game_cName": "Q立方"
                },
                {
                    "game_nId": 127,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/I4hQvXcmuYw95rz.jpg",
                    "game_cName": "拉比哩比"
                },
                {
                    "game_nId": 128,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/qMag2O4Ct86fPYQ.png",
                    "game_cName": "大富翁4"
                },
                {
                    "game_nId": 129,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/7ekI6TZPMJCQiL3.jpg",
                    "game_cName": "八方旅人1"
                },
                {
                    "game_nId": 130,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/9j64Gg5ZEWxncrR.jpg",
                    "game_cName": "八方旅人2"
                },
                {
                    "game_nId": 131,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/DQEKHva7jzyZN81.png",
                    "game_cName": "死神来了"
                },
                {
                    "game_nId": 132,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/NOC46gMXUW7GLQP.png",
                    "game_cName": "尤卡莱莉大冒险"
                },
                {
                    "game_nId": 133,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/10/iHJZXGuAY5lD8dr.jpg",
                    "game_cName": "尤卡莱莉与无妄巢穴"
                },
                {
                    "game_nId": 134,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/Ex9MbuGhVQkyfA2.jpg",
                    "game_cName": "黑暗之魂1重置版"
                },
                {
                    "game_nId": 135,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/E9oMgI1l3Dmrtfx.jpg",
                    "game_cName": "黑暗之魂3"
                },
                {
                    "game_nId": 136,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/NjB4rCGRge12kO3.jpg",
                    "game_cName": "只狼"
                },
                {
                    "game_nId": 137,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/qmchtHZQnKrp8kI.jpg",
                    "game_cName": "艾尔登法环"
                },
                {
                    "game_nId": 138,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/4x8qmOBSdgJtrb7.png",
                    "game_cName": "尼尔:机械纪元"
                },
                {
                    "game_nId": 139,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/WChe4X36E9gyTIi.jpg",
                    "game_cName": "TUNIC"
                },
                {
                    "game_nId": 140,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/XALESod6fwaqGJk.jpg",
                    "game_cName": "鬼泣5"
                },
                {
                    "game_nId": 141,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/57FbQrC6Wqsl2NS.jpg",
                    "game_cName": "幽灵诡计"
                },
                {
                    "game_nId": 142,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/4NhjxiHW8PYCo5D.jpg",
                    "game_cName": "忍者神龟:施莱德的复仇"
                },
                {
                    "game_nId": 143,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/PRyJAIbQ8X2MLu9.jpg",
                    "game_cName": "神之天平"
                },
                {
                    "game_nId": 144,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/t7qcwlSaY9JPTnA.jpg",
                    "game_cName": "狂战传说"
                },
                {
                    "game_nId": 145,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/lPUL2kWIYXhGejD.jpg",
                    "game_cName": "生化奇兵1"
                },
                {
                    "game_nId": 146,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/Mos6vSXWKdLzHBp.jpg",
                    "game_cName": "生化奇兵2"
                },
                {
                    "game_nId": 147,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/4vDaMK6fr2poE7T.jpg",
                    "game_cName": "生化奇兵:无限"
                },
                {
                    "game_nId": 148,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/MU3XsDrWRSfukJH.jpg",
                    "game_cName": "死亡搁浅：导演剪辑版"
                },
                {
                    "game_nId": 149,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/14SsHMyvJN2RmkG.jpg",
                    "game_cName": "猎天使魔女1"
                },
                {
                    "game_nId": 150,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/Tvy5uGbsNSEhKR1.jpg",
                    "game_cName": "巫师3:狂猎"
                },
                {
                    "game_nId": 151,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/8cxdHiUqVwnQb4B.jpg",
                    "game_cName": "原子之心"
                },
                {
                    "game_nId": 152,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/rGahlX1nqH2xZYo.jpg",
                    "game_cName": "暴走大鹅"
                },
                {
                    "game_nId": 153,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/eG1nCdIkTlRP3wj.jpg",
                    "game_cName": "暗影火炬城"
                },
                {
                    "game_nId": 154,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/uP94jg2JxSDABUW.jpg",
                    "game_cName": "勇敢的哈克"
                },
                {
                    "game_nId": 155,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/6I3A4gNoUaxeX2j.png",
                    "game_cName": "怪物猎人:世界"
                },
                {
                    "game_nId": 156,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/aSvmzwVoYyUhT7s.webp",
                    "game_cName": "胧村正:妖刀传"
                },
                {
                    "game_nId": 157,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/XxlqYKodGwWnuyV.jpg",
                    "game_cName": "土豆兄弟"
                },
                {
                    "game_nId": 158,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/WkgSQn5824bfrUw.jpg",
                    "game_cName": "潜水员戴夫"
                },
                {
                    "game_nId": 159,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/9z2RcslfDIAiFQE.jpg",
                    "game_cName": "城市四子棋"
                },
                {
                    "game_nId": 160,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/QkrjIb8VEedzc35.webp",
                    "game_cName": "小鸡复仇记"
                },
                {
                    "game_nId": 161,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/hWp524rztiPYSJx.jpg",
                    "game_cName": "仓鼠球"
                },
                {
                    "game_nId": 162,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/8tB5QFpmGWlTuo6.png",
                    "game_cName": "平衡球"
                },
                {
                    "game_nId": 163,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/ibsGRvALUgEkcnO.jpg",
                    "game_cName": "速斗传说"
                },
                {
                    "game_nId": 164,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/5k6y2ElXSRqOrUt.jpg",
                    "game_cName": "碳酸危机"
                },
                {
                    "game_nId": 165,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/zgfdcY5wJHBEvaq.jpg",
                    "game_cName": "尘埃异变"
                },
                {
                    "game_nId": 166,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/NVqBRxtHpWSMeAv.jpg",
                    "game_cName": "荒野大镖客2"
                },
                {
                    "game_nId": 167,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/23tqV48KYMD7lxz.jpg",
                    "game_cName": "盐与避难所"
                },
                {
                    "game_nId": 168,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/mfyX8Ho6sczTiqB.jpg",
                    "game_cName": "捣蛋猪"
                },
                {
                    "game_nId": 169,
                    "game_nImageUrl": "https://s2.loli.net/2023/09/20/Mn32wXjGqUWPQrt.jpg",
                    "game_cName": "永夜"
                }
            ],
            currentPage2: 1,
            pageSize2: 20,
        }
    },
    methods: {
        async getProfile() {
            let { data, error } = await supabase.from('t_game').select('*')
            this.gameList = [];
            this.gameList = data;
        },
        tt(value) {
            console.log(value.game_cName);
        }
    },
    mounted() {
        // this.getProfile();
    }
}
</script>

<style scoped>
.gamelist-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.gamelist-item {
    width: 245px;
    height: 340px;
    /* background-color: #eee; */
    margin: 20px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gamelist-item-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #000;
}

.el-image {
    width: 100%;
    height: 100%;
}

::v-deep .el-image__inner {
    border: 6px solid #8fb2c9;
    border-radius: 20px;
}

.el-pagination {
    padding-top: 20px;
    justify-content: center;
}
</style>