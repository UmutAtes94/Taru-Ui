<template>
    <b-card class="mb-12">
        <h4 slot="header">{{title}}</h4>
        <turbine-tabs slot="body"></turbine-tabs>
    </b-card>
</template>

<script>
    import TurbineTabs from "./turbine/TurbineTabs";

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
                tribunes: []
            }
        },
        computed: {
            title() {
                return `${this.areaName} Bölgesi`;
            }
        },
        watch: {
            "area.id": {
                handler: (areaName) => {
                    fetch(`http://localhost:6754/tribune/${areaName}`).then(response => this.tribunes = response.json());
                },
                immediate: true // it provides handler run immediately
            }
        }
    }
</script>

<style scoped>

</style>