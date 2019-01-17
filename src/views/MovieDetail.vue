<template>
    <Layout style="width: 70%; margin: auto;">
        <Header style="background-color:  #fff;"><SearchInput></SearchInput></Header>
        <h1 style=" padding: 20px; font-size: 26px;  background-color:  #fff;">{{movie.name}}</h1>
        <Layout>
            <Sider hide-trigger style="background-color:  #fff; margin: 20px;" width="300px">
                <img v-bind:src="movie.cover" style="width: 300px" />
            </Sider>
            <Content style="width: 50%;">
                <div style="margin: 20px 50px; font-size: 18px; text-align: left; ">
                    <p>片名 : {{movie.name}}</p>
                    <p>剧情介绍 : {{movie.intro}}</p>
                    <p>上映时间 : {{movie.publishTime}}</p>
                    <p>更新时间 : {{movie.updateTime}}</p>
                    <p><Tag color="primary">{{movie.type}}</Tag></p>
                </div>
            </Content>
        </Layout>
        <Divider orientation="left">电影观看</Divider>
        <div style="text-align: left;">
            <Tag style="margin: 20px">注意:</Tag>复制下列地址至浏览器地址栏即可观看正版影片，本站不提供在线正版播放
            <div v-for="item in movie.downResources" v-bind:key="item" style="margin: 0 20px;">
                <p>{{item.description}}</p>
            </div>
        </div>
        <Footer style="margin: 20px;"></Footer>
    </Layout>
</template>
<script>
export default {
    name: 'movieDetail',
    data() {
        return {
            movie: [],
        };
    },
    methods: {
    },
    created() {
        this.movie = this.$route.query.type;
        // console.log(this.movie);
    },
};
</script>
<style>
p {
    margin: 10px;
}
</style>

