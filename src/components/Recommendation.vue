<template>
  <div style="margin: auto;">
    <Divider orientation="center" style="font-size: 30px;">今日推荐</Divider>
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
            const link = './#/movieDetail?id=' + item.id;
            window.open(link, '_blank');
        },
    },
    created() {
        this.$http.get('http://localhost:3000/api/v1/movies?keyword=心&size=24')
        .then((response) => {
            this.movies = JSON.parse(response.bodyText).data.result;
        });
    },
};
</script>

