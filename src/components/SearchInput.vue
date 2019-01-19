<template>
      <Input search placeholder="关键字搜索" size="large" style="width: 80%; top: 25%;" @on-search="selectMovies" />
</template>
<script>
export default {
    name: 'SearchInput',
    data() {
        return {
            searchMovies: '',
        };
    },
    methods: {
        selectMovies(searchMovies) {
            this.$router.push({
                path: '/movie',
            });
            localStorage.setItem('type', searchMovies);
            // location.reload();
        },
    },
};
</script>

