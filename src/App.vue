<template>
  <div id="landing">
    <div class="landing-page">
      
      <div class="alpha"></div>
      <div class="beta"></div>


      <div class="heading">
        <h1>{{ title }}</h1>
        <h2>{{ instance }}</h2>
      </div>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
      <br>
      been the industry's standard dummy
    </p>

     <div class="buttons">
      <b-button size="is-medium" class="is-success"
        icon-left="phone">
        Login dengan telepon
      </b-button>

      <b-button size="is-medium"
        icon-left="google">
        Login dengan Google
      </b-button>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Survey Minat Pelanggan',
      instance: 'PDAM Tirta Patriot Kota Bekasi.'
    }
  }
}
</script>

<style>
.heading h1 {
  font-weight: 800;
  font-size: 20px;
}

.heading h2 {
  font-weight: 800;
  font-size: 15px;
}

.landing-page {
  margin-top: 230px;
  margin-left: 100px;
}

p {
  padding-top: 20px;
  padding-bottom: 20px;
}

.alpha, .beta {
  height: 500px;
  width: 300px;
  border-radius: 10%;
  transform: rotate(50deg)
}

.alpha {
  position: fixed;
  top: -300px;
  right: 30%;
  opacity: 0.7;
  background-color: skyblue;
}

.beta {
  position: fixed;
  top: -300px;
  right: 20%;
  opacity: 0.2;

  background-color: skyblue;
}

</style>