<template>
    <div class="m-auto">{{ title }}</div>
</template>

<script lang="ts">

    import Vue from 'vue';
    //import Component from 'vue-class-component';
    import { Component,Prop,Watch } from 'vue-property-decorator';
    @Component({
        components: {
        }
    })
    export default class LandingPage extends Vue {
        title:string = '欢迎来到Vue iview'
        mounted() {
            console.log("mounted!");
            console.log(this.title);
            this.$Message.info('This is a info tip from view');
        }
    }

</script>

<style lang="less" scoped>

    /* General styles. */
    .ml-auto { margin-left: auto; }
    .mr-auto { margin-right: auto; }
    .m-auto {
        .ml-auto();
        .mr-auto();
    }

</style>
