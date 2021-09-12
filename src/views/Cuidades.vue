<template> 
    <HeaderIndex />
    <ContentCuidades />
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import ContentCuidades from '@/components/ContentPage/ContentCuidades';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { HeaderIndex, ContentCuidades, FooterIndex },
    data (){
        return {}
    },
    created (){
     
    }
}

</script>