<template>
<!-- 搜索框 -->
    <div>
        <Input search placeholder="关键字搜索" size="large" style="width: 80%; top: 25%; margin-top: 20px;" @on-search="selectMovies" />
        <div style="width: 80%; margin: auto;">
            <!-- <Divider orientation="left" style="font-size: 10px;">历史记录</Divider> -->
            <!-- <Tap v-for="item in history" v-bind:key="item" closable @on-close="deleteTag">
                {{item}}
            </Tap> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchInput',
    data() {
        return {
            searchMovies: '',
            // history: [1,2,3],
        };
    },
    methods: {
        selectMovies(searchMovies) {
            this.$router.push({
                path: '/movie',
                query: {
                    keyword: searchMovies,
                },
            });
        },
        // deleteTag() {
        //     alert(Yes);
        // },
    },
};
</script>

