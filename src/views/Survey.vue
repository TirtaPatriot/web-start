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
              <b-button to="/survey/baru">Add</b-button>
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
import { surveyDb } from '../plugins/db'

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
        { key: "nama", sortable: true },
        { key: "tanggal", sortable: true },
        { key: "minat", sortable: true },
      ],
      title: "Data Survey Minat Pemasangan Air PDAM",
      users: [],
    };
  },
  mounted() {
    this.loading = true;
    surveyDb.allDocs({
      include_docs: true
    }).then(result => {
      const data = result.rows.map((isi) => {
        return isi.doc
      })

      this.users = data
      this.loading = false
    })
  },
  methods: {
    add() {}
  }
};
</script>

<style>
h1.survey {
  text-align: center !important;
  padding-top: 5px;
}
</style>