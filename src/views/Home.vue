<template>
  <div class="layout">
    <Layout>
      <Header style="background-color: #fff;">
        <Input v-model="searchMovie" search enter-button placeholder="电影类型" size="large" style="width: 400px; margin: auto; top: 25%;" @on-search="selectMovies(searchMovie)" />
      </Header>
      <Content></Content>
      <Footer style="background-color: #fff;"></Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default {
  name: 'Home',
  data() {
    return {

    };
  },
  methods: {
    selectMovies(searchMovie: any) {
     (this as any).$router.push({path: '/movie', query: { type: searchMovie}});
    },
  },
};
</script>
