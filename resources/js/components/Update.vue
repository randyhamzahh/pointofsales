<template>
    <div class="container">
                <div class="card card-header">
                    Edit Product
                </div>
                <div class="card card-body">
                    <form v-on:submit="submitPostEdit()">
                        <div class="form-group">
                            <input type="text" v-model="posts.nama"  placeholder="Product Name" class="form-control">
                        </div>
                        <div class="form-group">
                            <textarea v-model="posts.deskripsi"  cols="30" rows="5" placeholder="Description" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success">Edit</button>
                            <router-link to="/" class="btn btn-warning">Cancel</router-link>
                        </div>
                    </form>
                </div> 
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data:function() {
    return {
      posts: {
          nama:'',
          deskripsi:''
      },
      errors: []
    }
  },

    created() {
    let id = this.$route.params.id;
    // axios.get('/api/product/' + id + '/edit')
    axios.get('/api/product/edit/' + id)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  },

methods:{
  submitPostEdit(){
    let id = this.$route.params.id;
    axios.put('/api/product/update/' + id ,this.posts)
    .then(response => {
      console.log(response)
      this.$router.push({path:'/'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

}
</script>