<template>
  <div>
    <SearchInput></SearchInput>
    <Layout>
      <Header style='background-color: #fff;'>
      </Header>
      <Content>
        <div id='movies' style='width: 80%; margin: auto'>
          <BackTop></BackTop>
          <Table
            v-if='this.columns==1'
            :data='historyMovie'
            :columns='columns1'
            :loading='loading'
            stripe
          ></Table>
          <Table
            v-if='this.columns==2'
            :data='historyMovie'
            :columns='columns2'
            :loading='loading'
            stripe
            @on-row-click='showMovieDetail'
          ></Table>
          <div style='margin: 10px; overflow: hidden'>
            <div style='float: right;'>
              <Page :total='200' :current='1' :page-size='pageSize' @on-change='changePage'></Page>
            </div>
          </div>
        </div>
      </Content>
      <Footer style='background-color: #fff;'></Footer>
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
      type: '',
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
            return h('p', params.row.type === null ? '未知' : params.row.type);
          },
        },
        {
          title: '查看详情',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small',
                  },
                  style: {
                    marginRight: '5px',
                  },
                  on: {
                    click: (e, index) => {
                      const link = './#/movieDetail?id=' + params.row.id;
                      window.open(link, '_blank');
                    },
                  },
                },
                '查看',
              ),
            ]);
          },
        },
      ],
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
      this.historyMovie = this.arrs;
    },
    changePage(index) {
      this.$http
        .get(
          'http://localhost:3000/api/v1/movies?type=' +
            this.$route.query.type +
            '&page=' +
            index ,
        )
        .then(response => {
          // console.log(response);
          this.arrs = JSON.parse(response.bodyText).data.result;
          this.loading = false;
          this.handleListApproveHistory();
        });
    },
    showMovieDetail(e, index) {
      const link = './#/movieDetail?id=' + e.id;
      window.open(link, '_blank');
    },
  },
  created() {
    // API支持分页的,可以考虑直接在页面列出1-50页,让用户点击的时候再去加载,这样性能上更好
    this.$http
      .get(
        'http://localhost:3000/api/v1/movies?type=' +
          this.$route.query.type + '&page=1',
      )
      .then(response => {
        this.arrs = JSON.parse(response.bodyText).data.result;
        this.loading = false;
        this.handleListApproveHistory();
      });
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.columns = 2;
    } else {
      this.columns = 1;
    }
  },
};
</script>