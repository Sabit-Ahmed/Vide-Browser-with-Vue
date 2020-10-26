<template>
    <div  class="container">
        <!---<SearchBar v-on:ChildtermChange="ParentOnTermChange" ></SearchBar>--> <!--Emitting event from child to parent-->
        <SearchBar @ChildtermChange="ParentOnTermChange" ></SearchBar>   <!--Child to parent com (@childEvent="parentEventHandler")-->
        <div class="row">
            <VideoDetail :ChildVideo="SelectedVideo" />
            <!--<VideoList v-bind:ChildVideos="ParentVideos" ></VideoList>--> <!--Passing property from parent to child-->
            <VideoList @ParentVideoSelect="GrandParentVideoSelectMethod" :ChildVideos="ParentVideos" ></VideoList>  <!--Parent to child com (:childProperty="parentProperty")-->
        </div>
    </div>                                                    
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'THE KEY';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return { ParentVideos: [], SelectedVideo: null };
    },
    methods: {
        // ParentOnTermChange: function(searchTerm) {

        // }
        ParentOnTermChange(searchTerm) {

            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            })
            .then(response => {
                this.ParentVideos=response.data.items;
                });

        },
        GrandParentVideoSelectMethod(VideoSelectedByParent) {
            this.SelectedVideo=VideoSelectedByParent;
        }
    }
};
</script>