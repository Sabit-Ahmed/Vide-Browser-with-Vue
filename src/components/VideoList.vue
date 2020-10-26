<template>
    <ul class="list-group col-md-4">
        <VideoListItem 
        v-for="SingleVideo in ChildVideos" 
        :ChildVideo="SingleVideo"
        :key="SingleVideo.etag"
        @ChildVideoSelect="ParentVideoSelectMethod"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        ChildVideos: Array
    },
    methods: {
        ParentVideoSelectMethod(VideoSelectedByChild) {
            this.$emit("ParentVideoSelect", VideoSelectedByChild);
        }
    }
};
</script>