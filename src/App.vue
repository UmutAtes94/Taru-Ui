<template>
    <div id="app" class="container">
        <turkish-map @updateAreaName="updateAreaName"></turkish-map>
        <detail :area-name="areaName"></detail>
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
                areaName: ""
            }
        },
        methods: {
            updateAreaName(areaName) {
                this.areaName = areaName;
            }
        }
    }
</script>