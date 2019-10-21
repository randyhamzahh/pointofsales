<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/" class="btn btn-primary">back</router-link>
        </div>
        
        <div class="card-body">
            <p>{{posts.nama}}</p>
            <hr>
            <p>{{posts.deskripsi}}</p>
        </div>
    </div>
</template>



<script>

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    let id = this.$route.params.id;
    axios.get('/api/product/show/' + id)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>