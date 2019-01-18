<template>
  <div class="layout">
    <Layout style="background-color: #fff;">
      <Breadcrumb style="padding: 10px;">
        <BreadcrumbItem><Tag>搜索</Tag></BreadcrumbItem>
      </Breadcrumb>
      <Header style="background-color: #fff;">
        <SearchInput></SearchInput>
      </Header>
      <Content style="margin-top: 50px;">
        <Divider orientation="left">今日推荐</Divider>
        <Row :gutter="16" type="flex" justify="center" class="code-row-bg">
          <Col v-for="item in movies" v-bind:key="item.name" span="2">
            <img v-bind:src="item.cover" style="width: 100px; height: 150px;" @click="showMovieDetail(item)">
            <p>{{item.name}}</p>
          </Col>
        </Row>
      </Content>
      <!-- <div style="background-color: #fff; width: 40%; margin: auto;">
        <Carousel loop autoplay style="background-color: #fff; margin-top: 100px;">
          <CarouselItem v-for="item in movies" v-bind:key="item.name"> 
            <div>
              <img v-bind:src="item.cover" style="width: 80%; height: 70%;" @click="showMovieDetail(item)" />
            </div>
          </CarouselItem>
        </Carousel>
      </div> -->
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
    showMovieDetail(item: any) {
      (this as any).$router.push({
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
    (this as any).$http.get('https://twin-tail.cn/api/movies/recommendation')
    .then((data: any) => {
      (this as any).movies = data.data.data;
    });
  },
};
</script>
