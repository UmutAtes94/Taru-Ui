<template>
    <b-card class="mb-12">
        <h4 slot="header">{{title}}</h4>
        <turbine-tabs slot="body"></turbine-tabs>
    </b-card>
</template>

<script>
    import TurbineTabs from "./turbine/TurbineTabs";
    import {getTurbines} from "../services/TurbineService";

    export default {
        name: 'Detail',
        components: {TurbineTabs},
        props: {
            areaName: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                turbines: []
            }
        },
        computed: {
            title() {
                return `${this.areaName} Bölgesi`;
            }
        },
        watch: {
            "area.id": {
                handler: (areaName) => getTurbines(areaName).then(turbines => this.turbines = turbines),
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>