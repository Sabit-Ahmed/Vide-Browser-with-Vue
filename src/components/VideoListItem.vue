<template>
    <li class="list-group-item media" @click="onVideoSelectMethod">
        <!--<img :src="ChildVideo.snippet.thumbnails.default.url" />-->
        <img class="mr-3" :src="thumbnailUrl" >
        <div class="media-body">
        {{ ChildVideo.snippet.title }}
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    // props: ['ChildVideo']
    props: {
        ChildVideo: Object
    },
    computed: {
        thumbnailUrl(){
            return this.ChildVideo.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelectMethod(){
            this.$emit("ChildVideoSelect", this.ChildVideo);
        }
    }
};
</script>

<style scoped>
    li{
        display: flex;
        cursor: pointer;
    }

    li:hover{
        background-color: #eee;
    }
</style>