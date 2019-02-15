<template>
  <div style="margin: auto;">
    <Divider orientation="center" style="font-size: 30px;">今日推荐</Divider>
    <!-- <Row :gutter="16" type="flex" justify="center" class="code-row-bg">
      <Col v-for="item in movies" v-bind:key="item.name" span="3">
        <img v-bind:src="item.cover" style="width: 100px; height: 150px;" @click="showMovieDetail(item)">
        <p>{{item.name}}</p>
        <Card>
        <img v-bind:src="item.cover" style="width: 100px; height: 150px;" @click="showMovieDetail(item)">
        <p>{{item.name}}</p>
    </Card>
      </Col>
    </Row> -->
    <div style="margin: auto;">
        <div v-for="item in movies" v-bind:key="item.name" style="float: left; margin: 5px; height: 200px;">  
            <img v-bind:src="item.cover" style="width: 100px; height: 150px;" @click="showMovieDetail(item)">
            <p style="width: 90px;">{{item.name}}</p>
        </div>
    </div>
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
            localStorage.setItem('localMovie', JSON.stringify(item));
            localStorage.setItem('type', '推荐');
            this.$router.go(0);
            this.$router.push({
                path: '/movieDetail',
                query: {
                    name: item.name,
                },
            });
        },
    },
    created() {
        this.$http.get('https://movie-map.cn/api/recommendation?size=30')
        .then((data) => {
            this.movies = data.data.data;
        });
    },
};
</script>

