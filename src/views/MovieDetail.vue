<template>
    <div>
        <div>
        <!-- <Breadcrumb separator=">" style="padding: 10px;">
            <BreadcrumbItem to="/"><Tag>搜索</Tag></BreadcrumbItem>
            <BreadcrumbItem to="/movie"><Tag>{{this.type}}</Tag></BreadcrumbItem>
            <BreadcrumbItem>{{movie.name}}</BreadcrumbItem>
        </Breadcrumb> -->
        </div>
        <SearchInput style="margin-top: 20px;"></SearchInput>
        <Layout style="width: 80%; margin: auto;">
            <Header style="background-color:  #fff;"></Header>
            <h1 style="padding-bottom: 10px; font-size: 26px;  background-color:  #fff;">{{movie.name}}</h1>
            <Layout>
                <Sider hide-trigger style="background-color:  #F5F7F9; margin: 20px;" width="25%">
                    <img v-bind:src="movie.cover" style="width: 100%" />
                </Sider>
                <Content style="width: 100%;">
                    <div style="margin: 20px 50px; font-size: 18px; text-align: left; ">
                        <p>片名 : {{movie.name}}</p>
                        <p>上映时间 : {{movie.publishTime.toString().substring(0,10)}}</p>
                        <p>更新时间 : {{movie.updateTime.toString().substring(0,10)}}</p>
                        <p><Tag color="primary"><a @click="selectMovieType">{{movie.type===null?'未知':movie.type}}</a></Tag></p>
                    </div>
                </Content>
            </Layout>
            <Divider orientation="left">电影详情</Divider>
            <p v-html="movie.intro">剧情介绍 : {{movie.intro}}</p>
            <Divider orientation="left">电影观看</Divider>
            <div style="text-align: left;">
                <Tag style="margin: 20px">注意:</Tag>复制下列地址至浏览器地址栏即可观看正版影片，本站不提供在线正版播放
                <div v-for="item in movie.downResources" v-bind:key="item.description" style="margin: 0 20px;">
                    <p>
                    类型 : {{item.description}} <br />
                    链接 : {{item.link}}
                    </p>
                </div>
            </div>
            <Footer style="margin: 20px;">
            </Footer>
        </Layout>
        <Recommendation></Recommendation>
    </div>
</template>
<script>
export default {
    name: 'movieDetail',
    data() {
        return {
            movie: localStorage.getItem('localMovie'),
            keyword: localStorage.getItem('keyword'),
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
        this.movie = JSON.parse(localStorage.getItem('localMovie'));
        this.keyword = localStorage.getItem('keyword');
    },
};
</script>
<style>
p {
    margin: 10px;
}
</style>

