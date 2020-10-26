<template>
    <div v-if="ChildVideo" class="col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="videoUrl"/>
        </div>
        <div class="details">
            <h4>{{ ChildVideo.snippet.title }}</h4>
            <p>{{ ChildVideo.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        ChildVideo: Object
    },
    computed: {
        videoUrl(){
            // const videoId = this.ChildVideo.id.videoId;
            // return 'https://www.youtube.com/embed/' + videoId;
            const { videoId } = this.ChildVideo.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
};
</script>

<style scoped>
    .details{
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>