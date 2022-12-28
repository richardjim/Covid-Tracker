<template>
    <div class="m-8" v-if="!loading">
        <DataTitle :text="title" :dataDate="dataDate" />
        <DataBoxes :stats="stats" />
        <CountrySelect @get-country="getCountryData" :countries="countries" />
        <button @click="clearCountryData()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-10 py-3 px-4 rounded-lg">Clear
            Country</button>
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
import CountrySelect from '../components/CountrySelect.vue';
export default {
    name: 'Home',
    components: {
        DataTitle,
        DataBoxes,
        CountrySelect
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
        },
        getCountryData(country) {
            this.stats = country;
            this.title = country.Country;
        },
        async clearCountryData() {
            this.loading = true;
            const data = await this.getCovidData();
            this.stats = data.Global;
            this.title = 'Global';
            this.loading = false;
        }
    },
    async created() {
        const data = await this.getCovidData();
        this.dataDate = data.Date;
        this.stats = data.Global;
        this.title = 'Global';
        this.countries = data.Countries;
        this.loading = false;

    }
}
</script>