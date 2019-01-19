<template>
    <div>
        <Layout>
        <Header style="background-color: #fff;">
        <!-- <Input search enter-button placeholder="关键字搜索" size="large" style="width: 85%; margin: auto; top: 25%;" @on-search="selectMovies" /> -->
            <SearchInput></SearchInput>
        </Header>
        <Content>
            <div id="movies" style="width: 80%; margin: auto">
                <BackTop></BackTop>
                <Table
                :data="historyMovie"
                :columns="columns1"
                :loading="loading"
                @on-row-click="showMovieDetail"
                stripe
                ></Table>
                <div style="margin: 10px; overflow: hidden">
                    <div style="float: right;">
                    <Page :total="arrs.length" :current="1" :page-size="pageSize" @on-change="changePage"></Page>
                    </div>
                </div>
            </div>
        </Content>
        <Footer style="background-color: #fff;"></Footer>
        </Layout>
    </div>
</template>

<script>
export default {
    name: 'movies',
    data() {
        return {
        arrs: [],
        movieCount: 0,
        pageSize: 10,
        historyMovie: [],
        loading: true,
        movieType: localStorage.getItem('type'),
        columns1: [
        {
            title: '电影海报',
            key: 'cover',
            render: (h, params) => {
                return h('img', {
                    attrs: {
                        src: params.row.cover,
                        style: 'width:100px',
                    },
                });
            },
        },
        {
            title: '电影名',
            key: 'name',
        },
        {
            title: '电影类型',
            key: 'type',
            render: (h, params) => {
                return  h('p', params.row.type === null ? '未知' : params.row.type);
            },
        },
        {
            title: '上映时间',
            key: 'publishTime',
            render: (h, params) => {
                return h('p', (params.row.publishTime.toString().substring(0, 10)));
            },
        }]};
    },
    methods: {
        handleListApproveHistory() {
            this.dataCount = this.arrs.length;
            if (this.dataCount < this.pageSize) {
                this.historyMovie = this.arrs;
            } else {
                this.historyMovie = this.arrs.slice(0, this.pageSize);
            }
        },
        changePage(index) {
            const start = (index - 1) * this.pageSize;
            const end = index * this.pageSize;
            this.historyMovie = this.arrs.slice(start, end);
        },
        showMovieDetail(e, index) {
            this.$router.push({
                name: 'movieDetail',
            });
            localStorage.setItem('localMovie', JSON.stringify(e));
        },
    },
    created() {
        this.$http.get('https://movie.house-map.cn/v1/movies/' + this.$route.query.type)
        .then((data) => {
            this.arrs = data.data.data;
            this.loading = false;
            this.handleListApproveHistory();
        });
    },
};
</script>