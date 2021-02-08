// Stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.


var app = new Vue({
 el: '#root',
 data:{
   cdElements:[],
   selected:''
 },

 methods:{

 },

 mounted(){
   const self = this;
   axios.get('https://flynn.boolean.careers/exercises/api/array/music')
   .then(function(element){
     console.log(element);
     const disks = element.data.response
     self.cdElements = disks;
   })

 }

});
Vue.config.devtools = true
