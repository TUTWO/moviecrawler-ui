<template>
  <div class="movies">
    <h1>This is an movie page</h1>
    <div id="movies">
      <!-- <ul>
        <li v-for="item in arrs" v-bind:key="item.name">
          <img v-bind:src="item.cover" class="cover" style="width: 100px" />
          <span class="id">{{item.name}}</span>
          <span class="name">{{item.name}}</span>
          <span class="link">{{item.link}}</span>
        </li>
      </ul> -->
      <Table :data="historyMovie" :columns="columns1" stripe></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="arrs.length" :current="1" :page-size="pageSize" @on-change="changePage" ></Page>
        </div>
    </div>
    </div>
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
      columns1: [
        {
          title: '电影海报',
          key: 'cover',
          render: (h, params) => {
            // console.log(params.row).cover;
            return h('img', {
              attrs: {
                src: params.cover,
              },
              style: {
                width: '100px',
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
      this.dataCount = arrs.length;
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
      // console.log(this.historyMovie);
    },
  },
  created() {
    this.$http.get('https://movie.house-map.cn/v1/movies/' + this.$route.query.type)
    .then((data) => {
      this.arrs = data.data.data;
    });
  },
};
</script>


