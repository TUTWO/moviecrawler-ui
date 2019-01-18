<template>
    <div>
        <Breadcrumb separator=">" style="padding: 10px;">
            <BreadcrumbItem to="/"><Tag>搜索</Tag></BreadcrumbItem>
            <BreadcrumbItem to="/movie"><Tag>{{this.type}}</Tag></BreadcrumbItem>
            <BreadcrumbItem>{{movie.name}}</BreadcrumbItem>
        </Breadcrumb>
        <Layout style="width: 70%; margin: auto;">
            
            <Header style="background-color:  #fff;"><SearchInput></SearchInput></Header>
            <h1 style=" padding: 20px; font-size: 26px;  background-color:  #fff;">{{movie.name}}</h1>
            <Layout>
                <Sider hide-trigger style="background-color:  #F5F7F9; margin: 20px;" width="25%">
                    <img v-bind:src="movie.cover" style="width: 100%" />
                </Sider>
                <Content style="width: 100%;">
                    <div style="margin: 20px 50px; font-size: 18px; text-align: left; ">
                        <p>片名 : {{movie.name}}</p>
                        <p>上映时间 : {{movie.publishTime}}</p>
                        <p>更新时间 : {{movie.updateTime}}</p>
                        <p><Tag color="primary">{{movie.type===null?'未知':movie.type}}</Tag></p>
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
            <Footer style="margin: 20px;"></Footer>
        </Layout>
    </div>
</template>
<script>
export default {
    name: 'movieDetail',
    data() {
        return {
            movie: localStorage.getItem('localMovie'),
            type: localStorage.getItem('type'),
        };
    },
    methods: {
    },
    created() {
        this.movie = JSON.parse(localStorage.getItem('localMovie'));
        this.type = localStorage.getItem('type');
    },
};
</script>
<style>
p {
    margin: 10px;
}
</style>

