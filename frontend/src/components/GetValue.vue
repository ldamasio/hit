<template>
  <div v-html="about_content">
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'QuoteAPI',
  data() {
    return {
      about_content: '',
    }
  },
  created() {
    var responseData = null
    axios.get(`http://localhost:8000/cms2/`)
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