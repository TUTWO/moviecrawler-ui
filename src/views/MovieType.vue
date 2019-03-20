<template>
    <div>
        <SearchInput></SearchInput>
        <Layout>
        <Header style="background-color: #fff;">
        <!-- <Input search enter-button placeholder="关键字搜索" size="large" style="width: 85%; margin: auto; top: 25%;" @on-search="selectMovies" /> -->
        </Header>
        <Content>
            <div id="movies" style="width: 80%; margin: auto">
                <BackTop></BackTop>
                <Table v-if="this.columns==1" :data="historyMovie" :columns="columns1" :loading="loading" stripe></Table>
                <Table v-if="this.columns==2" :data="historyMovie" :columns="columns2" :loading="loading" stripe @on-row-click="showMovieDetail"></Table>
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
        columns: 1,
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
            title: '查看详情',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                        },
                        style: {
                            marginRight: '5px',
                        },
                        on: {
                            click: (e, index) => {
                                const link = './#/movieDetail?name=' + params.row.name;
                                window.open(link, '_blank');
                            },
                        },
                    }, '查看'),
                ]);
            },
        } ],
        columns2: [
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
            render: (h, params) => {
                return h('p', params.row.name.toString().substring(0, 8) + '...');
            },
        },
        ],
        };
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
            const link = './#/movieDetail?name=' + e.name;
            window.open(link, '_blank');
        },
    },
    created() {
        // API支持分页的,可以考虑直接在页面列出1-50页,让用户点击的时候再去加载,这样性能上更好
        this.$http.get('https://movie-map.cn/api/movies/?type=' + this.$route.query.type + '&size=100')
        .then((response) => {
            this.arrs = response.data.data;
            this.loading = false;
            this.handleListApproveHistory();
        });
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.columns = 2;
        } else {
            this.columns = 1;
        }
    },
};
</script>