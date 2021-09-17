<template>
    <div class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h2>Servicio atención al cliente</h2>
                        <p class="p-large">En Mudanzas Reto estamos a tu plena disposición con cualquier tipo de pregunta duda o sugerencia, no dudes en escribirnos o llamarnos. <br> Trabajamos para ti</p>
                        <a class="btn-solid-lg" href="https://api.whatsapp.com/send?phone=34722337385&text=Hola"><i class="fab fa-whatsapp"> 722 33 73 85</i></a>
                    </div> 
                </div>
            </div> 
        </div>
    </div> 
    
    <div class="footer bg-gray">
        <img class="decoration-circles" src="/images/decoration-circles.png" alt="Mudanzas Centro Reto">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Síguenos en redes sociales</h4>
                    <p>Disponible próximamente</p>
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="https://suzdalenko.com" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://suzdalenko.com" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://suzdalenko.com" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-google fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://suzdalenko.com" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://suzdalenko.com" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    <div class="copyright bg-gray" style="color: grey;">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <ul class="list-unstyled li-space-lg p-small">
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                    </ul>
                </div> 
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <p class="p-small statement"><a href="/sitemap.xml" target="_blank">Copyright © Mudanzas Reto {{currentId()}}</a></p>
                </div> 
            </div>
        </div>       
        <div class="container">
            <div class="row">
                <div>
                     <router-link v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/Mudanzas/' + deleteEmptySpaces(city)" class="list_cities">
                        {{ city }}
                     </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import storageCitiesWorks from '@/storage/cities';
export default{
    data(){
        return{
            listCitiesAndWorks: []
        }
    },
    created(){
       let arrayPrepare = []; 
       for (let city of storageCitiesWorks.cities) {
          arrayPrepare.push(city)
       }
       this.listCitiesAndWorks = arrayPrepare; 
    },
    methods: {
        currentId(){ 
          this.insertScriptGooglePages();
          return this.$route.params.workDetail;
        },
        deleteEmptySpaces(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        },
        insertScriptGooglePages(){
            var scriptMap = document.createElement('script');
            scriptMap.onload = function() {
                document.querySelector("[src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBJcJoJrGaUb_Gx1GJ2Swnh2N3gdF926Gw&callback=initMap']").remove()
                var el = document.getElementsByTagName('head')[0]
                let scripts = el.getElementsByTagName( 'script' ); 
                console.log('el', el)
                console.log('scripts', scripts)
                for(var i = 0; i < scripts.length; i++) {
                 let sc = scripts[i];
                 sc.remove();
                }

            };
            scriptMap.type = 'text/javascript';
            scriptMap.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJcJoJrGaUb_Gx1GJ2Swnh2N3gdF926Gw&callback=initMap";
            
            let cityCurrent = window.location.href;
            let cityCurr = cityCurrent.split('/');
            let tiposDeTrabajos = [ 'Mudanzas', 'Vaciados de pisos', 'Reformas', 'Pintura', 'Recogida muebles', 'Limpiezas' ].toString();
            let currentWork = cityCurr[cityCurr.length-2].replace('-', ' ').replace('-', ' ');
            
            if(tiposDeTrabajos.includes(currentWork) ){
                document.getElementsByTagName('head')[0].appendChild(scriptMap);
            } else {
           
            }
            window.scrollTo(0, 0);
        }
    }
}
</script>
