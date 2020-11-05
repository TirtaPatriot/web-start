<template>
  <div id="dashboard">
    <atas></atas>
    <doremi>
      <div class="columns">
        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="judul">Total Responden </div>
            <div class="angka">52</div>
          </div>
        </div>
        </div>

        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="judul">Minat </div>
            <div class="angka">52</div>
          </div>
        </div>
        </div>

        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="judul">Tidak Minat </div>
            <div class="angka">52</div>
          </div>
        </div>
        </div>
      </div>
    </doremi>
    <!-- <h1>Dashboard</h1> -->
  </div>
</template>

<script>
import Atas from '../components/Atas.vue'
import Doremi from '../components/Doremi.vue'

export default {
  components: {
    atas: Atas,
    doremi: Doremi
  }
}
</script>

<style>
header {
  background-color: rgb(80, 165, 199);
  color: white;
  height: 60px;
}

.card .card-content .judul {
  
}

.card .card-content .angka {
  font-size: 44px;
}
</style>