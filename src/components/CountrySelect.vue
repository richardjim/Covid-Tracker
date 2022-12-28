<template>
    <select @change="onChange()" v-model="selectedCountry" class="form-select mt-1  block w-full p-3 rounded-lg">
        <option value="0">Selected Country</option>
        <option v-for="country in countries" :key="country.ID" :value="country.ID">
            {{ country.Country }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: {
        countries: {
            type: Array,
            default: () => { }
        }
    },
    data() {
        return {
            selectedCountry: 0
        }
    },
    methods: {
        onChange() {
            const country = this.countries.find((fn) => fn.ID === this.selectedCountry);
            this.$emit('get-country', country)
        }
    }
}
</script>