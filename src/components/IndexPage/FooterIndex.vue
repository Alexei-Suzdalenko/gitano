<template>
    <div class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h2>Servicio atención al cliente</h2>
                        <p class="p-large">En Mudanzas Reto estamos a tu plena disposición con cualquier tipo de pregunta duda o sugerencia, no dudes en escribirnos o llamarnos. <br> Trabajamos para ti</p>
                        <a class="btn-solid-lg" href="https://api.whatsapp.com/send?phone=34722337385&text=Hola"><i class="fab fa-whatsapp"> 722 33 73 85</i></a>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-3 -->
    
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
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
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
                <div class="col-lg-3 col-md-12 col-sm-12">
                    <p class="p-small statement">Copyright © <a href="#">Mudanzas Reto</a></p>
                </div> 

                <div class="col-lg-3 col-md-12 col-sm-12">
                    <p class="p-small statement">Creado con <a href="https://suzdalenko.com" target="_blank">Google Pages</a></p>
                </div>
            </div> 
        </div>
        <div style="text-align: center; line-height: 7px;">
            <router-link v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/Mudanzas/' + deleteEmptySpaces(city)" class="list_cities">
                {{ city }}
            </router-link>
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
        deleteEmptySpaces(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        }
    }
}
</script>
