<template>
    <Menu mode='horizontal' active-name='1' :theme='theme1' @on-select='movieType'>
      <MenuItem name='首页' to='/' style='background-color:#2D8CF0;' >首页</MenuItem>
      <MenuItem name='动作' style='background-color:#2D8CF0;'>动作</MenuItem>
      <MenuItem name='剧情' style='background-color:#2D8CF0;'>剧情</MenuItem>
      <MenuItem name='爱情' style='background-color:#2D8CF0;'>爱情</MenuItem>
      <MenuItem name='喜剧' style='background-color:#2D8CF0;'>喜剧</MenuItem>
      <MenuItem name='科幻' style='background-color:#2D8CF0;'>科幻</MenuItem>
      <MenuItem name='恐怖' style='background-color:#2D8CF0;'>恐怖</MenuItem>
      <MenuItem name='战争' style='background-color:#2D8CF0;'>战争</MenuItem>
      <MenuItem name='犯罪' style='background-color:#2D8CF0;'>犯罪</MenuItem>
      <MenuItem name='美剧' style='background-color:#2D8CF0;'>美剧</MenuItem>
      <MenuItem name='连续剧' style='background-color:#2D8CF0;'>连续剧</MenuItem>
      <MenuItem name='动漫' style='background-color:#2D8CF0;'>动漫</MenuItem>
      <MenuItem name='综艺' style='background-color:#2D8CF0;'>综艺</MenuItem>
    </Menu>
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

