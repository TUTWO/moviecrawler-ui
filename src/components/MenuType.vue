<template>
  <div>
    <Menu mode="horizontal" active-name="1" :theme="theme1" @on-select="movieType">
      <MenuItem name="首页" to="/">首页</MenuItem>
      <MenuItem name="动作">动作</MenuItem>
      <MenuItem name="剧情">剧情</MenuItem>
      <MenuItem name="爱情">爱情</MenuItem>
      <MenuItem name="喜剧">喜剧</MenuItem>
      <MenuItem name="科幻">科幻</MenuItem>
      <MenuItem name="恐怖">恐怖</MenuItem>
      <MenuItem name="战争">战争</MenuItem>
      <MenuItem name="犯罪">犯罪</MenuItem>
      <MenuItem name="美剧">美剧</MenuItem>
      <MenuItem name="连续剧">连续剧</MenuItem>
      <MenuItem name="动漫">动漫</MenuItem>
      <MenuItem name="综艺">综艺</MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'MenuType',
  data() {
    return {
      theme1: 'primary',
    };
  },
  methods: {
    movieType(name) {
        location.reload();
        localStorage.setItem('type', name);
        this.$router.push({
            path: '/movieType',
            query: {
                type: name,
            },
        });
    },
  },
};
</script>

