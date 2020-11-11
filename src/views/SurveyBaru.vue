<template>
  <div class="survey-baru">
        <atas></atas>
    <doremi>
      <h1 class="survey">Formulir</h1>
    </doremi>

    <form-wizard @on-complete="simpan" title="" subtitle="">
      <tab-content title="Biodata">
        <b-form>
          <b-row>
            <b-col>
              <b-form-group label="Nama" id="input-group-1" label-for="input-1">
                <b-form-input
                autofocus
                  id="input-1"
                  v-model="form.nama"
                  type="text"
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
              <b-form-datepicker placeholder="Tanggal input" locale="id" id="example-datepicker" v-model="form.tanggal"></b-form-datepicker>

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
                  v-model="form.gender"
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
                  v-model="form.klasifikasi"
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
                  v-model="form.kepemilikan"
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
                  v-model="form.penghuni"
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
                  v-model="form.listrik"
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
                  v-model="form.alamat"
                  type="text"
                  required
                  placeholder="Alamat"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </tab-content>
      <tab-content title="Kuisioner">
        <ol>
          <li>
            <b-form-group label="Bagaimana dengan kualitas air yang sedang di gunakan saat ini ?">
              <b-form-radio-group
                v-model="form.kualitas"
                :options="baikOptions"
                name="kualitas"
              ></b-form-radio-group>
            </b-form-group>
          </li>
          <li>            
            <b-form-group label="Apakah di wilayah Bapak/Ibu saat ini sudah di lewati pipa PDAM ?">
              <b-form-radio-group
                v-model="form.cakupan"
                :options="sudahOptions"
                name="cakupan"
              ></b-form-radio-group>
            </b-form-group>
          </li>
          <li>
            
            <b-form-group label="Apakah Bapak/Ibu berminat menjadi pelanggan PDAM ?">
              <b-form-radio-group
                v-model="form.minat"
                :options="yaOptions"
                name="minat"
              ></b-form-radio-group>
            </b-form-group>
          </li>
        </ol>
      </tab-content>
      <tab-content title="Selesai">
        {{form}}
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import {surveyDb} from '../plugins/db'
import Atas from "../components/Atas.vue";
import Doremi from "../components/Doremi.vue";

export default {
  components: {
    Atas, Doremi
  },
  data() {
    return {
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
      form: {
        nama: "",
        tanggal: new Date(),
        gender: null,
        kualitas: 'B',
        cakupan: 1,
        minat: 1,
        klasifikasi: null,
      },
    };
  },
  methods: {
    simpan() {
      const dataToSave = {
        _id: 'survey.test.'+Math.random(),
        ...this.form
      }

      surveyDb.put(dataToSave).then(() => {
        this.$router.push('/survey')
      })
    }
  }
};
</script>