<style scoped>
    .logo {
        margin-left: 5%;
    }

    .left-nav {
        margin-left: 7%;
    }

    .right-nav {
        margin-left: 80%;
    }
</style>

<template>
    <div>
        <Menu mode="horizontal" :theme="theme" :active-name="activeName" @on-select="changeActive">
            <div class="logo">
                <MenuItem name="logo">
                    <h2>DSkin</h2>
                </MenuItem>
            </div>
            <div class="left-nav">
                <MenuItem name="index">
                    首页
                </MenuItem>
                <MenuItem name="market">
                    市场
                </MenuItem>
            </div>
            <div class="right-nav" v-if="logged">
                <MenuItem name="inventory">
                    库存
                </MenuItem>
                <MenuItem name="mysell">
                    我的出售
                </MenuItem>
                <MenuItem name="avatar">
                    <Avatar :src="avatarUrl" />
                </MenuItem>
                <MenuItem name="nickname">
                    {{nickname}}
                </MenuItem>
            </div>
            <div class="right-nav" v-else>
                <MenuItem name="register">
                    注册
                </MenuItem>
                <MenuItem name="login">
                    登陆
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        props: ["initTheme", "initActiveName"],
        data() {
            return {
                theme: this.initTheme || "light",
                activeName: this.initActiveName || "index",
                avatarUrl: "",
                nickname: ""
            };
        },
        asyncComputed: {
            async logged() {
                const token = window.localStorage.getItem("token");

                if (token == null) {
                    return false;
                } else {
                    const response = await axios.get("http://localhost:3000/api/user/info/basic", {
                        headers: {
                            Authorization: token
                        }
                    });

                    if (response.status != 200) {
                        return false;
                    }

                    this.avatarUrl = response.data.avatar || "https://i.loli.net/2017/08/21/599a521472424.jpg";
                    this.nickname = response.data.nickname;

                    return true;
                }
            }
        },
        methods: {
            changeActive(name) {
                if (name == "login") {
                    this.$router.push("login");
                }
            }
        }
    }
</script>

