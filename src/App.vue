<template>
    <div id="app" class="container">
        <turkish-map></turkish-map>
        <detail :area="area"></detail>
    </div>
</template>

<script>
    import TurkishMap from './components/TurkishMap.vue'
    import Detail from './components/Detail.vue'

    export default {
        components: {
            Detail,
            TurkishMap
        },
        name: "app",
        data() {
            return {
                area: {name: 'default', id: 0}
            }
        }
    }
</script>