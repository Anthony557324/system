<template>
    <mainheader-comp></mainheader-comp>
    <mainbody-comp></mainbody-comp>
</template>
<script>
import MainheaderComp from '@/components/layout/Mainheader.vue'
import MainbodyComp from '@/components/layout/Mainbody.vue'

export default {
    name: 'MainComp',
    components: {
        MainheaderComp,
        MainbodyComp
    },
    setup() { }
}
</script>