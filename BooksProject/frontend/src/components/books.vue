<template>
<div id="app">
    <div style="display:flex; width:1000px; margin:auto; flex-wrap:wrap">
        <div class="obj" style="margin:8px;" v-for="book in books" :key="book.bookId">
            <v-card class="mx-auto" max-width="310" style="padding:10px">
                <v-img style="margin-bottom:10px" v-bind:src="book.cover" height="200" contain ></v-img>
                <a v-bind:href="'books/'+book.bookId">{{book.title}}</a>
                <p style="font-size:3px; margin:0px;">{{book.author}}</p>
            </v-card>
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:'#app',
        components:{
    
        },
        data(){
            return{
                books:['']
            }
        }
        ,mounted(){
                 axios.get('/api/books')
                .then(response=>{
                    console.log(response.data)
                    this.books=response.data
                }).catch(err=>{
                    console.log(err)
                })
        }
    }
</script>
