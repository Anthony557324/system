<template>
    <div class="body">
        <left-comp></left-comp>
        <right-comp></right-comp>
    </div>
</template>
<script>

import LeftComp from '@/components/layout/Left.vue'
import RightComp from '@/components/layout/Right.vue'
export default {
    name: 'LoginComp',
    components: {
        LeftComp,
        RightComp
    },
    setup() {
        
    }
}
</script>
<style scoped>
.body {
    height: 100%;
    display: flex;
}
</style>