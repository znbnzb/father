<template>
    <div>
         <headTop title="住院情况"></headTop>
        <p>住院情况：hospital</p>
        <slot name="11"></slot>
    </div>
</template>

<script>
import headTop from './headerTop'
export default {
  name: "hospital",
    components:{
        headTop
    }
};
</script>

<style scoped>
</style>