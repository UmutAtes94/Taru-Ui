<template>
    <b-card class="mb-12">
        <b-card-header>{{title}}</b-card-header>
        <b-card-text>
            <turbine-tabs></turbine-tabs>
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
</template>

<script>
    import TurbineTabs from "./TurbineTabs";

    export default {
        name: 'Detail',
        components: {TurbineTabs},
        props: {
            area: {
                type: Object,
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
                return `${this.area.name} Bölgesi`;
            }
        },
        watch: {
            "area.id": {
                handler: (newArea) => {
                    fetch(`http://localhost:6754/tribune/${newArea.id}`).then(response => this.tribunes = response.json());
                },
                immediate: true // it provides handler run immediately
            }
        }
    }
</script>

<style scoped>

</style>