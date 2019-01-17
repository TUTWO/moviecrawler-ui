<template>
  <div class="layout">
    <Layout>
      <Header style="background-color: #fff;">
        <SearchInput></SearchInput>
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
    // selectMovies(searchMovie: any) {
    //  (this as any).$router.push({path: '/movie', query: { type: searchMovie}});
    // },
  },
};
</script>
