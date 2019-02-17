<template>
  <div class="layout">
    <SearchInput></SearchInput>
    <Layout style="background-color: #fff;">
      <Header style="background-color: #fff;">
      </Header>
      <Content style="margin-top: 50px; width:98%; margin: auto;">
        <Recommendation></Recommendation>
      </Content>
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
      movies: [],
    };
  },
  methods: {
  },
  created() {
    (this as any).$http.get('https://movie-map.cn/api/recommendation?size=30')
    .then((data: any) => {
      (this as any).movies = data.data.data;
    });
  },
};
</script>
