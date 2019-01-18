<template>
    <div style="width: 40%; margin: auto;">
        <Menu mode="horizontal" active-name="1" style="width: 100%; margin: auto;">
            <MenuItem name="1" to="/">首页</MenuItem>
            <MenuItem name="2">动作</MenuItem>
            <MenuItem name="3">剧情</MenuItem>
            <MenuItem name="4">爱情</MenuItem>
            <MenuItem name="5">喜剧</MenuItem>
            <MenuItem name="6">科幻</MenuItem>
            <MenuItem name="7">恐怖</MenuItem>
        </Menu>
    </div>
</template>
<script>
export default {
    name: 'MenuType',
    data() {
        return {

        };
    },
    methods: {
    },
};
</script>

