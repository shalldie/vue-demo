<template>
    <div class="app">
        <LeftBar />
        <section class="app-main">
            <router-view />
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import * as types from '@/store/mutation-types';

export default {
    components: {
        LeftBar: () => import('@/components/LeftBar')
    },
    created() {
        this.dispatchMsg();
    },
    methods: {
        dispatchMsg() {
            this.$store.dispatch(types.FETCH_SIDEBAR);
        }
    }
};
</script>

<style lang="scss">
.app {
    width: 100%;
    height: 100%;
    @include flex;

    .left-bar {
        // @include flex;
        min-height: 100vh;
    }

    .app-main {
        @include flex-1;
        background: #fff;
        padding: 20px;
    }
}
</style>
