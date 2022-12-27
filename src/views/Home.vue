<template>
    <div v-if="!loading">
        <DataTitle :text="title" :dataDate="dataDate" />
        <DataBoxes :stats="stats" />
    </div>
    <div class="flex flex-col align-center justify-center text-center" v-else>
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            Fetching Data...
        </div>
        <!-- <img :src="loadingImage" alt="loading" /> -->
    </div>
</template>

<script>
import DataTitle from '../components/DataTitle.vue';
import DataBoxes from '../components/DataBoxes.vue';
export default {
    name: 'Home',
    components: {
        DataTitle,
        DataBoxes
    },
    data() {
        return {
            loading: true,
            dataDate: '',
            stats: '',
            countries: [],
            // loadingImage: require('../assets/vue.svg')
        }
    },
    methods: {
        async getCovidData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            console.log(data);
            return data;
        }
    },
    async created() {
        const data = await this.getCovidData();
        this.dataDate = data.Date;
        this.stats = data.Global;
        this.countries = data.Countries;
        this.loading = false;

    }
}
</script>