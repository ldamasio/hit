<template>
  <div class="container_general">
    <div class="container_title">
      Introduction
      <br>
      <img alt="" class="title_decoration" src="../assets/title-decoration.png">
    </div>
    <div class="container_content" v-html="about_content">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'IntroductionScreen',
  data() {
    return {
      about_content: '',
    }
  },
  created() {
    var responseData = null
    axios.get(`http://robson.srv.br:8000/cms2/sobre/`)
      .then(response => {
        let content_html = response.data;
        var body = "<body>";
        var bodyEnd = "</body>";
        responseData = content_html.substring(content_html.indexOf(body) + body.length, content_html.indexOf(bodyEnd));
        console.log(responseData);
        this.about_content = responseData;

      })
      .catch(e => {
        this.errors.push(e)
        responseData = 'Erro na requisição para o backend.'
        console.log(responseData);
        console.log(e);
      });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.container_content {
  margin: auto auto;
  padding: 33px;
  width: 63%;
  border-radius: 8px;
  background-color:#ea916b;
  color: white;
  font-family:'Open Sans';
  text-align: left;
}
.container_general {
  padding: 32px;
}
.container_title {
  margin-bottom: 14px;
  color:white;
  font-size:20px;
}
.title_decoration {
  width: 100px;
}
</style>