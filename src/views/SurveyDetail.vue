<template>
  <div class="survey-detail">
    <atas></atas>
    <doremi v-if="item">
      <b-row align-h="between">
        <h1>{{item.nama}}</h1>
        <b-button @click="edit = true" v-if="!edit">Edit</b-button>
      </b-row>
    </doremi>
    <b-container v-if="item">
            <b-form @submit.prevent="update">
          <b-row>
            <b-col>
              <b-form-group label="Nama" id="input-group-1" label-for="input-1">
                <b-form-input
                autofocus
                  id="input-1"
                  v-model="item.nama"
                  type="text"
                  :readonly="!edit"
                  required
                  autocomplete="off"
                  placeholder="Isi nama"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Tanggal"
                id="input-group-1"
                label-for="input-1"
              >
              <b-form-datepicker 
                  :readonly="!edit"
              
              placeholder="Tanggal input" locale="id" id="example-datepicker" v-model="item.tanggal"></b-form-datepicker>

              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="Gender"
              >
                <b-form-select
                  placeholder="Gender"
                  v-model="item.gender"
                  :disabled="!edit"

                  :options="genderOptions"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group
                id="input-group-4"
                label-for="input-4"
                label="Klasifikasi"
              >
                <b-form-select
                  placeholder="Klasifikasi"
                  id="input-4"
                  :disabled="!edit"
                  v-model="item.klasifikasi"
                  :options="rtOptions"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group
                label="Kepemilikan"
              >
                <b-form-select
                  placeholder="Kepemilikan"
                  v-model="item.kepemilikan"
                  :disabled="!edit"
                  :options="kepemilikanOptions"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                label="Jumlah Penghuni"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  :readonly="!edit"
                  v-model="item.penghuni"
                  required
                  autocomplete="off"
                  min="1"
                  placeholder="Jml. Penghuni"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-4"
                label="Daya Listrik"
                label-for="input-4"
              >
                <b-form-select
                  placeholder="Listrik"
                  id="input-4"
                  :disabled="!edit"
                  v-model="item.listrik"
                  :options="listrikOptions"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="Alamat"
                id="input-group-1"
                label-for="input-1"
              >
                <b-form-textarea
                  id="input-1"
                  v-model="item.alamat"
                  :readonly="!edit"
                  type="text"
                  required
                  placeholder="Alamat"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row align-h="end" v-if="edit">
              <b-button class="mr-3" @click="edit = false">Batal</b-button>
              <b-button type="submit" variant="primary">Simpan</b-button>
          </b-row>
        </b-form>
        </b-container>
  </div>
</template>


<script>
import { surveyDb } from '../plugins/db'
import Atas from '../components/Atas'
import Doremi from '../components/Doremi'

export default {
  components: {
    Atas,
    Doremi
  },
  data() {
    return {
      item: null,
      edit: false,
       baikOptions: [
        { text: 'Baik', value: 'B' },
        { text: 'Tidak', value: 'T' },
        { text: 'Kurang', value: 'K' },
      ],
      sudahOptions: [
        { text: 'Sudah', value: 1 },
        { text: 'Belum', value: 0 }
      ],
      yaOptions: [
        { text: 'Ya', value: 1 },
        { text: 'Tidak', value: 0 }
      ],
      genderOptions: [
        { text: "Pria", value: "L" },
        { text: "Wanita", value: "P" },
      ],
      listrikOptions: [
        { text: "400W", value: "400" },
        { text: "900W", value: "900" },
      ],
      rtOptions: [
        { text: "Rumah Tangga", value: "RT" },
        { text: "Non Rumah Tangga", value: "NRT" },
      ],
      kepemilikanOptions: [
        { text: "Sendiri", value: "sendiri" },
        { text: "Sewa", value: "sewa" },
      ],
    }
  },
  mounted() {
    this.getItBaby()
  },
  methods: {
    getItBaby() {
      surveyDb.get(this.$route.params.id)
        .then(item => {
          this.item = item
        })
    },
    update() {
      surveyDb.put(this.item).then(() => {
        console.log('udah di update')
        
        this.getItBaby()
        this.edit = false
      })
    }
  }
}
</script>