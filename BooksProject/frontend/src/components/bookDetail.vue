<template>
    <div class="app" style="text-align:center">

        <h1>{{detail.title}}</h1> <h1>{{detail.subtitle}}</h1>
        <v-img v-bind:src="detail.cover" height=400 contain style="margin-bottom:10px"></v-img>
        <p class="font-weight-black" style="font-size:25px">작가: {{ detail.author }} ,번역 : {{detail.translator+','+detail.publisher}}</p>
        <p class="font-weight-bold">페이지 : {{detail.page}}, 가격 : ₩{{detail.price}}, ISBN:{{detail.ISBN}}</p>
        <p>{{detail.info}}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"app",
    data(){
        return{
          detail:['']
        }
    },
    mounted(){
        axios.get('/api/books/'+this.$route.params.bookId)
        .then(response=>{
            this.detail=response.data
            
            console.log(this.detail)
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>