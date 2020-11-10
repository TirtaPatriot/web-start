<template>
  <div class="survey-baru">
    <form-wizard @on-complete="simpan">
      <tab-content title="Biodata">
        <b-form>
          <b-row>
            <b-col>
              <b-form-group label="Nama" id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.nama"
                  type="text"
                  required
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
                <b-form-input
                  id="input-1"
                  v-model="form.tanggal"
                  type="text"
                  required
                  placeholder="Tanggal"
                ></b-form-input>
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
                  v-model="form.penghuni"
                  type="text"
                  required
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
            Bagaimana dengan kualitas air yang sedang di gunakan saat ini ?
            <b-form-group label="">
              <b-form-radio-group
                v-model="form.kualitas"
                name="radio-sub-component"
              >
                <b-form-radio value="Y">Baik</b-form-radio>
                <b-form-radio value="N">Tidak Baik</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </li>
          <li>
            Apakah di wilayah Bapak/Ibu saat ini sudah di lewati pipa PDAM ?
            <b-form-group label="">
              <b-form-radio-group
                v-model="form.cakupan"
                name="radio-sub-component"
              >
                <b-form-radio value="Y">Sudah</b-form-radio>
                <b-form-radio value="N">Belum</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </li>
          <li>
            Apakah Bapak/Ibu berminat menjadi pelanggan PDAM ?
<b-form-group label="">
              <b-form-radio-group
                v-model="form.minat"
                name="radio-sub-component"
              >
                <b-form-radio value="Y">Ya</b-form-radio>
                <b-form-radio value="N">Tidak</b-form-radio>
              </b-form-radio-group>
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

export default {
  data() {
    return {
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
        tanggal: "",
        gender: null,
        kualitas: 'Y',
        cakupan: 'Y',
        minat: 'Y',
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
      surveyDb.put(dataToSave)
    }
  }
};
</script>