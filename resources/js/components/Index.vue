
<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
              <div class="input-group">
                <input type="text" v-model="search" class="form-control">
                <div class="input-group-prepend">
                  <button @click.prevent="searchProduct()" class="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10"></div>
              <div class="col-md-2">
                <button v-on:click=" reloadPage()" class="btn btn-warning  float-right" >Back</button>
              </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th width="100"></th>
                    <th width="100"></th>
                    <th width="100"></th>
                </tr>
                </thead>
                <tbody v-if="showsearch==true">
                  <tr v-for="cari in caris" v-bind:key="cari.id">
                    <td>{{cari.id}}</td>
                    <td>{{cari.nama}}</td>
                    <td>{{cari.deskripsi}}</td> 
                    <td>
                        <router-link :to="{name:'readPost',params:{id:cari.id}}" class="btn btn-info" > Show</router-link>
                    </td>
                    <td>
                      <router-link :to="{name:'editPost',params:{id:cari.id}}" class="btn btn-success" > Edit</router-link>
                    </td>
                    <td>
                      <button class="btn btn-danger" v-on:click="submitPostDelete(cari.id, index)">Delete</button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="showsearch==false">
                <tr v-for="post in posts" v-bind:key="post.id">
                <!-- <tr v-for="post in posts"> -->
                    <td>{{post.id}}</td>
                    <td>{{post.nama}}</td>
                    <td>{{post.deskripsi}}</td> 
                    <td>
                        <router-link :to="{name:'readPost',params:{id:post.id}}" class="btn btn-info" > Show</router-link>
                    </td>
                    <td>
                      <router-link :to="{name:'editPost',params:{id:post.id}}" class="btn btn-success" > Edit</router-link>
                    </td>
                    <td>
                      <button class="btn btn-danger" v-on:click="submitPostDelete(post.id, index)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
          <router-link to="/create" class="btn btn-success float-right">Create New Product</router-link>
        </div>
    </div>
</template>


<script>

export default {
  data() {
    return {
      posts: [],
      errors: [],
      search:'',
      showsearch:false,
      caris:[]
    }
  },

  created() {
    axios.get('/api/product')
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  },
  
methods:{
  submitPostDelete(id, index){
    if(confirm("Delete selected data ?")){
      axios.delete('/api/product/delete/' + id )
      .then(response => {
        console.log(response)
        this.posts.splice(index,1);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  searchProduct(){
    fetch('/api/product/search?q='+this.search)
    .then(response => response.json())
    .then(response => {
      this.caris = response;
      this.search='';
      this.showsearch=true;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  reloadPage(){
    window.location.reload()
  }
}

}
</script>