import Vue from 'vue';
import App from './App';

new Vue({
    el: '#app',
    render: function(h){ //h => h(App)
        return h(App);
    }//.$mount('#app');
});