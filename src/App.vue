<template>
	<div id="app">
		<b-button href="#/form">到form页面</b-button>
		<img src="./assets/logo.png">
		
		<!-- <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card> -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {},
		methods:{
			alert:function(){
				alert("haha")
			}
		}
	}
</script>
