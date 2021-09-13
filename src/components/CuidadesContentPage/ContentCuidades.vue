<template>
<header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1 class="h1-large">Mudanzas Reto Cantabria</h1>
                </div>
            </div> 
        </div> 
</header>
 <div id="services" class="cards-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Mapa del sitio web Mudanzas Reto</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                    <a class="card list_map_site" v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:href="'/' + deleteEmptySpaces(city.work) + '/' + deleteEmptySpaces(city.city)">
                        <div class="card-body">
                            <h6 class="card-title">{{ city.work }} {{ city.city }}</h6> 
                        </div>
                    </a>
                   
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
import storageCitiesWorks from '@/storage/cities';
import pueblos from '@/storage/listado_pueblos.js';
export default{
    data(){
        return{
            listCitiesAndWorks: []
        }
    },
    created(){ 
       let arrayPrepare = []; 
       for (let city of pueblos.listadoPueblos) {
           for(let workData of storageCitiesWorks.works){
               let currentObj = {};
               currentObj.city = city.toLowerCase().capitalize();
               currentObj.work = workData;
               arrayPrepare.push(currentObj);
           }
       }
      this.listCitiesAndWorks = arrayPrepare; 
    },
    methods: {
        deleteEmptySpaces(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        }
    }
}
</script>