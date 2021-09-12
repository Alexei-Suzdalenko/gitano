<template> 
    <HeaderIndex /> 
    <HeaderBottom v-bind:workPage="workPage()" v-bind:cityPage="cityPage()" />            
    <div class="ex-basic-1 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-fluid mt-5 mb-3" v-bind:src="'https://perersburgfree.000webhostapp.com/one.php?ref='+photo_referenceArray[0]" v-bind:alt="workPage() + ' ' + cityPage()">
                </div>
            </div> 
        </div> 
    </div>
    <div class="ex-basic-1 pt-3 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                   <div class="text-box mb-5">
                        <h3>Algunas fotos de los lugares en los que hemos trabajado.</h3>
                    </div> 
                    <span v-for="(refer, index) in photo_referenceArray"  v-bind:key="index">
                        <img v-if="photo_referenceArray[index+1]" class="img-fluid mb-5" v-bind:src="'https://perersburgfree.000webhostapp.com/one.php?ref='+photo_referenceArray[index+1]" v-bind:alt="workPage() + ' ' + cityPage()">
                    </span>
                    
            
                    <ContentWorkPage v-bind:cityPage="cityPage()" />
                </div> 
            </div> 
        </div> 
    </div>
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import HeaderBottom from '@/components/WorkPage/HeaderBottom';
import ContentWorkPage from '@/components/WorkPage/ContentWorkPage';
import FooterIndex from '@/components/IndexPage/FooterIndex';



export default{
    components: { HeaderIndex, HeaderBottom, ContentWorkPage, FooterIndex },
    data (){
        return {
            photo_referenceArray: [], 
           
        }
    },
    created (){ 
    },
    methods: { 
       current_reference(){ 
           return 'window.mudanzas_reto';
       },
       workPage(){
           return this.$route.params.work.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');},
       cityPage(){ return this.$route.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');},

      getListReferencesFotosFromPlaceId(place_id){
          let emptyPhotoArray = []; 
          fetch('https://perersburgfree.000webhostapp.com/get_ref.php?place_id=' + place_id).then(res => res.json()).then(response => {
              console.log(response);
              let referencesFotosArray = response.result.photos;
              referencesFotosArray.forEach(function(item, index){
                 emptyPhotoArray.push(item.photo_reference)
              });
              this.photo_referenceArray = emptyPhotoArray;
          })
      }
    }, 
    mounted: function () {
        window.test = this;
    },
}
</script>

