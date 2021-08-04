<template>
  <div class="home">
    
      <Books v-if="!$route.params.bookId"></Books>
      <BookDetail v-if="$route.params.bookId"></BookDetail>
  </div>
</template>


<script>

import Books from '../components/books.vue'
import BookDetail from '../components/bookDetail.vue'

export default {    
    name:'main',
    components:{   
        Books,
        BookDetail
    }
}
</script>
