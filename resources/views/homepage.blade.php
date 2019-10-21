@extends('layouts.app')

@section('content')
<div class="container">
<div class="jumbotron jumbotron-fluid" id="jumbotron_index">
    <div class="container">
    <div class="text-center">
        <h1>Point Of Sales Product</h1>
        <p>CRUD Laravel</p>
    </div>
        <router-view></router-view>
    </div>
    </div>
</div>
@endsection
