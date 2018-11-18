<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap> 
        <v-dialog v-model="crawling" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>     Please stand by
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
      <v-flex xs12 sm6 md4>
      <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2"  :nudge-right="40" :return-value.sync="start_dt" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <v-text-field slot="activator" v-model="start_dt" label="Crawl start date" prepend-icon="event" readonly></v-text-field>
        <v-date-picker v-model="start_dt" @input="$refs.menu2.save(start_dt)"></v-date-picker>
      </v-menu>
    </v-flex>
<v-flex xs12 sm6 md4>
      <v-menu ref="menu1" :close-on-content-click="false" v-model="menu1"  :nudge-right="40" :return-value.sync="end_dt" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <v-text-field slot="activator" v-model="end_dt" label="Crawl end date" prepend-icon="event" readonly></v-text-field>
        <v-date-picker v-model="end_dt" @input="$refs.menu1.save(end_dt)"></v-date-picker>
      </v-menu>
    </v-flex>



       </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

  export default {
    name:'crawl',
    components:{
     },
    data:function(){
      return {
         start_dt: null,
         end_dt:null,
         menu1:false,
         menu2:false,
         loading:false
      }
    },
    created:function(){
  
    },
    computed: {
    },
    methods:{
      startCrawl(){
        if(this.start_dt != null && this.end_dt != null){
          this.loading = true
          this.axios.get('/getdiff?startdt='+this.start_dt+"&enddt="+this.end_dt).then(resp=>{
            this.loading=false
          })
        }
        
      }
    }
  }
</script>

<style scoped>
 
</style>
