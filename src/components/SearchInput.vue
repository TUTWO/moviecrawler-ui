<template>
      <Input search enter-button placeholder="关键字搜索" size="large" style="width: 400px; margin: auto; top: 25%;" @on-search="selectMovies" />
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
                name: 'movie',
                params: {
                    type: searchMovies,
                },
            });
            localStorage.setItem('type', searchMovies);
        },
    },
};
</script>

