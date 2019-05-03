<template>
    <div>
        <b-navbar toggleable="lg" type="light"  variant="primary">
            <b-navbar-brand style="font-size: 32px; color: white;">双马尾放映室</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse" />
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav style="font-size: 16px;">
                    <b-nav-item to="/">首页</b-nav-item>
                    <b-nav-item @click="movieType('动作')">动作</b-nav-item>
                    <b-nav-item @click="movieType('剧情')">剧情</b-nav-item>
                    <b-nav-item @click="movieType('爱情')">爱情</b-nav-item>
                    <b-nav-item @click="movieType('喜剧')">喜剧</b-nav-item>
                    <b-nav-item @click="movieType('科幻')">科幻</b-nav-item>
                    <b-nav-item @click="movieType('恐怖')">恐怖</b-nav-item>
                    <b-nav-item @click="movieType('战争')">战争</b-nav-item>
                    <b-nav-item @click="movieType('犯罪')">犯罪</b-nav-item>
                    <b-nav-item @click="movieType('美剧')">美剧</b-nav-item>
                    <b-nav-item @click="movieType('连续剧')">连续剧</b-nav-item>
                    <b-nav-item @click="movieType('动漫')">动漫</b-nav-item>
                    <b-nav-item @click="movieType('综艺')">综艺</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
        };
    },
    methods: {
        movieType(name) {
            this.$router.push({
                path: '/movieType',
                query: {
                    type: name,
                },
            });
            location.reload();
        },
    },
};
</script>
