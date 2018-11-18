<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap> 
        
      <v-flex xs12 sm6 md4>
      <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2"  :nudge-right="40" :return-value.sync="start_dt" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <v-text-field slot="activator" v-model="start_dt" label="Crawl start date" prepend-icon="event" readonly></v-text-field>
        <v-date-picker v-model="start_dt" @input="$refs.menu2.save(start_dt)"></v-date-picker>
      </v-menu>
    </v-flex>
<v-flex xs12 sm6 md4>
      <v-text-field label="Days" v-model="days" ></v-text-field>
    </v-flex>
<v-flex xs12 sm6 md4>
      <v-text-field label="Occupancy" v-model="occupancy" ></v-text-field>
    </v-flex>

 <v-flex xs12 sm6 md4>
      <v-btn @click="getLowest">Get</v-btn>
    </v-flex>

       </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

  export default {
    name:'compare',
    components:{
     },
    data:function(){
      return {
         start_dt: null,
         end_dt:null,
         menu1:false,
         menu2:false,
         loading:false,
         dailyrates:null,
         days:0,
         occupancy:0
      }
    },
    created:function(){
  
    },

     methods:{
        getLowest(){
            this.axios.get('/getlowests?occupancy='+this.occupancy+'&checkin='+this.start_dt+'&days='+this.days).then(resp=>{
                 this.dailyrates = resp.data
            })
        }
    },
    computed:{
        hotels:function(){
            return Object.keys(this.dailyrates);
        },
        tableData:function(){
            var res = []
            Object.keys(this.dailyrates).forEach(h => {
                var hr={name:h}
                for(var i = 0; i<this.days ; i++){
                    hr[i]= this.dailyrates[h][i]
                }
                res.push(hr)
            });
            return res
        },
        headers:function(){
            var start = new Date(this.start);
            var res =[]

            console.log(start)
            for(var i=0;i<this.days;i++){
                
                 res.push(start.toString())
                 var newDate = start.setDate(start.getDate() + 1);
            }
            
            return res
          
        }
    }
  }
</script>

<style scoped>
 
</style>
