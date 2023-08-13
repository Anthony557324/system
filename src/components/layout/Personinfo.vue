<script>
import { useRoute } from "vue-router";
export default {
    name:'PersonInfoComp',
    setup(){
        const route = useRoute()
        console.log(route);
    }
}
</script>
<template>
    {{ $route.params.id }}
</template>