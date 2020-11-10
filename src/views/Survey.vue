<template>
  <div>
    <atas></atas>
    <doremi>
      <h1 class="survey">{{ title }}</h1>
    </doremi>

     <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        
    <b-table
      :filter="filter"
      sticky-header
      hover
      :busy="loading"
      v-bind:items="users"
      :fields="fields"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import Atas from "../components/Atas.vue";
import Doremi from "../components/Doremi.vue";

export default {
  components: {
    Atas,
    Doremi,
  },
  data() {
    return {
      loading: false,
      filter: null,
      // fields: ['id', 'name', 'email'],
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "email", sortable: true },
      ],
      title: "Data Survey Minat Pemasangan Air PDAM",
      users: [],
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
        this.loading = false;
      });
  },
};
</script>

<style>
h1.survey {
  text-align: center !important;
  padding-top: 5px;
}
</style>