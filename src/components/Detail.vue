<template>
    <div>
        <div class="card mb-3">
            <div class="card-header">{{area.name}} - #({{area.id}})</div>
            <div class="card-body">
                <turbine-tabs></turbine-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
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
        watch: {
            "area.id": {
                handler: (newArea) => {
                    fetch(`localhost:6754/tribune/${newArea.id}`).then(response => this.tribunes = response.json());
                },
                immediate: true // it provides handler run immediately
            }
        }
    }
</script>

<style scoped>

</style>