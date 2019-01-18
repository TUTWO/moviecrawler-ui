<template>
  <div>
    <Divider orientation="left">今日推荐</Divider>
    <Row :gutter="16" type="flex" justify="center" class="code-row-bg">
      <Col v-for="item in movies" v-bind:key="item.name" span="2">
        <img v-bind:src="item.cover" style="width: 100px; height: 150px;" @click="showMovieDetail(item)">
        <p>{{item.name}}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
    name: 'Recommendation',
    data() {
        return {
            movies: [],
        };
    },
    methods: {
        showMovieDetail(item) {
            this.$router.push({
            name: 'movieDetail',
            params: {
                type: '推荐',
                detail: item,
            },
        });
            localStorage.setItem('localMovie', JSON.stringify(item));
            localStorage.setItem('type', '推荐');
        },
    },
    created() {
        this.$http.get('https://twin-tail.cn/api/movies/recommendation')
        .then((data) => {
            this.movies = data.data.data;
        });
    },
};
</script>

