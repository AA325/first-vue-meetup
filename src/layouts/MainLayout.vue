<template>
<div>
 <h1>Base App</h1>
 <h2>{{dbStatus}}</h2>
   <q-btn color="black" label="CheckDB" @click="checkDB"/>
</div>
</template>

<script>


export default {
  name: 'MainLayout',
  data () {
    return {
      dbStatus:'DB not running!'
    }
  },
  methods:{
    async checkDB(){
      let data = await this.$M('CheckDB^APP',{
        status:'running'
      })
      this.dbStatus = data.status
    }
  }
}
</script>
