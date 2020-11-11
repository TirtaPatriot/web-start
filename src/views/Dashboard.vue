<template>
  <div id="dashboard">
    <atas></atas>
    <doremi>
      <b-row>
        <b-col v-for="(c, i) of cards" :key="i">
          <b-card :title="c.title">
            <b-card-text class="card-content">
              {{ c.total }}
            </b-card-text>

          </b-card>
        </b-col>
      </b-row>
    </doremi>
    <!-- <h1>Dashboard</h1> -->
  </div>
</template>

<script>
import Atas from '../components/Atas.vue'
import Doremi from '../components/Doremi.vue'
import {surveyDb} from '../plugins/db'

export default {
  components: {
    atas: Atas,
    doremi: Doremi
  },
  data () {
    return {
      cards: [
        {title: 'Total Responden', total: 52},
        {title: 'Minat', total: 22},
        {title: 'Tidak Minat', total: 30}
      ]
    }
  },
  mounted() {
    surveyDb.allDocs().then(result => {
      this.cards[0].total = result.total_rows
    })

    surveyDb.find({
      selector: {minat: 'Y'}
    }).then(result => {
      this.cards[1].total = result.docs.length
    })

    surveyDb.find({
      selector: {minat: 'N'}
    }).then(result => {
      this.cards[2].total = result.docs.length
    })
  }
}
</script>

<style>
.navbar {
  height: 80px;
}
header {
  background-color: rgb(80, 165, 199);
  color: white;
  height: 60px;
}

.card-content {
  font-size: 44px;
  text-align: right;
}
</style>