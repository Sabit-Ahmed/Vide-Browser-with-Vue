<template>
    <div>
        <!--<input v-on:input="onInput" />-->
        <input @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('ChildtermChange', event.target.value);
        }
    }
};
</script>

<style scoped>
    input{
        width: 90%;
    }
    div{
        text-align: center;
        margin: 20px;
    }
</style>