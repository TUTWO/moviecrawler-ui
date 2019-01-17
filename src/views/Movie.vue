<template>
  <div class="movies">
    <Layout>
      <Header style="background-color: #fff;">
        <!-- <SearchInput></SearchInput> -->
        <Input search enter-button placeholder="关键字搜索" size="large" style="width: 400px; margin: auto; top: 25%;" @on-search="selectMovies" />
      </Header>
      <Content>
        <div id="movies" style="width: 80%; margin: auto">
        <BackTop></BackTop>
          <Table :data="historyMovie" :columns="columns1" :loading="loading" @on-row-click="showMovieDetail" stripe></Table>
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="arrs.length" :current="1" :page-size="pageSize" @on-change="changePage" ></Page>
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
      columns1: [
        {
          title: '电影海报',
          key: 'cover',
          render: (h, params) => {
            // console.log(params.row).cover;
            return h('img', {
              attrs: {
                src: params.row.cover, style: 'width:100px',
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
        },
        {
          title: '上映时间',
          key: 'publishTime',
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
      this.$router.push({
        path: '/movieDetail',
        query: {
         type: e,
        },
      });
    },
    selectMovies(searchMovies) {
      this.loading = true;
      this.$router.push({
                path: '/movie',
                query: {
                    type: searchMovies,
                },
            });
      this.$http.get('https://movie.house-map.cn/v1/movies/' + searchMovies)
      .then((data) => {
      this.arrs = data.data.data;
      this.loading = false;
      this.handleListApproveHistory();
    });
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


