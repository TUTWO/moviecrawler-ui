<template>
    <div>
        <SearchInput style="margin-top: 20px;"></SearchInput>
        <Layout style="width: 90%; margin: auto;">
            <Header style="background-color:  #fff;"></Header>
            <h1 style="padding-bottom: 10px; font-size: 26px;  background-color:  #fff;">{{movie.name}}</h1>
            <Content style="width: 100%;">
                <div style="background-color: #F5F7F9; margin: 20px; width: 30%; float: left;">
                    <img v-bind:src="movie.cover" style="width: 100%" />
                </div>
                <div style="margin-top: 20px; font-size: 18px; text-align: left; ">
                    <p>片名 : {{movie.name}}</p>
                    <!-- <p>上映时间 : {{movie.publishTime===null?'0000-00-00':movie.publishTime.toString().substring(0,10)}}</p> -->
                    <p>更新时间 : {{movie.updateTime===null?'0000-00-00':movie.updateTime.toString().substring(0,10)}}</p>
                    <p><a @click="selectMovieType">{{movie.type===null?'未知':movie.type}}</a></p>
                </div>
                </Content>
            <Divider orientation="left">电影详情</Divider>
            <p v-html="movie.intro" style="color: grey;">剧情介绍 : {{movie.intro}}</p>
            <Divider orientation="left">电影观看</Divider>
            <div style="text-align: left;">
                <Tag style="margin: 20px;">注意:</Tag><small style="color: grey;">复制下列地址至浏览器地址栏即可观看正版影片，本站不提供在线正版播放</small>
                <div v-for="item in movie.downResources" v-bind:key="item.description" style="margin: 0 20px;">
                    <p>
                    资源描述：<a style="text-decoration: underline;" :href="item.link" target="_blank">{{item.description}}</a> <br />
                    下载/播放链接： {{item.link}}
                    </p>
                </div>
            </div>
            <Footer style="margin: 20px;">
            </Footer>
        </Layout>
        <div style="width:98%; margin: auto;">
            <Recommendation></Recommendation>
        </div>
    </div>
</template>
<script>
export default {
    name: 'movieDetail',
    data() {
        return {
            movie: JSON.parse(localStorage.getItem('localMovie')),
        };
    },
    methods: {
        selectMovieType() {
            this.$router.push({
                path: '/movieType',
                query: {
                    type: this.movie.type === null ? '未知' : this.movie.type,
                },
            });
        },
    },
    created() {
        this.$http.get('https://movie-map.cn/api/movies/' + this.$route.query.name)
        .then((data) => {
            this.movie = data.data.data[0];
        });
    },
};
</script>
<style>
p {
    margin: 10px;
}
</style>

