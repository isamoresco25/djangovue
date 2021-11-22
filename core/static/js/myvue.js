axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

const endpoint = 'http://localhost:8000/'

var app = new Vue({
  el: '#app',
  delimiters: ['\${', '}'],
  data: {
    users: [
        // {'username': 'Nina'},
        // {'username': 'Meg'},
        // {'username': 'Fiona'}
    ]
  },
  created() { /*ao criar a pagina faz um get para endpoint*/ 
    axios.get(endpoint + 'api/users/')
      .then(response => {
        this.users = response.data.data;
      })
  }
})