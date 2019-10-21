<template>
    <div class="container">
                <div class="card card-header">
                    Create new Product
                </div>
                <div class="card card-body">
                    <form v-on:submit="submitPost()">
                        <div class="form-group">
                            <input type="text" v-model="posts.nama"  placeholder="Product Name" class="form-control">
                        </div>
                        <div class="form-group">
                            <textarea v-model="posts.deskripsi"  cols="30" rows="5" placeholder="Description" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success">Create</button>
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
methods:{
  submitPost(){
    axios.post('/api/product/create',this.posts)
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