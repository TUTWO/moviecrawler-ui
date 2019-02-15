<template>
  <div class="movies">
    <!-- <Breadcrumb separator=">" style="padding: 10px;">
      <BreadcrumbItem to="/"><Tag>搜索</Tag></BreadcrumbItem>
      <BreadcrumbItem><Tag>{{this.movieType}}</Tag></BreadcrumbItem>
    </Breadcrumb> -->
    <Input search enter-button placeholder="关键字搜索" size="large" style="width: 80%; margin: auto; top: 25%;" @on-search="selectMovies" />
    <Layout>
      <Header style="background-color: #fff;">
      </Header>
      <Content>
        <div id="movies" style="width: 80%; margin: auto">
        <BackTop></BackTop>
          <Table :data="historyMovie" :columns="columns1" :loading="loading" stripe></Table>
          <div style="margin: 10px; overflow: hidden">
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
      movieType: localStorage.getItem('keyword'),
      columns1: [
        {
          title: '电影海报',
          key: 'cover',
          render: (h, params) => {
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
    selectMovies(searchMovies) {
      this.loading = true;
      this.$router.push({
                path: '/movie',
                query: {
                  keyword: searchMovies,
                },
            });
      this.$http.get('https://movie-map.cn/api/movies/' + searchMovies)
      .then((data) => {
      this.arrs = data.data.data;
      this.loading = false;
      this.handleListApproveHistory();
    });
    },
  },
  created() {
    localStorage.setItem('keyword', this.$route.query.keyword);
    this.$http.get('https://movie-map.cn/api/movies/' + this.$route.query.keyword)
    .then((data) => {
      this.arrs = data.data.data;
      this.loading = false;
      this.handleListApproveHistory();
    });
  },
};
</script>


