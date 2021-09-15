<template> 
    <HeaderIndex />  
    <HeaderTitleIndex />
    <ContentIndex />
    <FooterIndex /> 
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import HeaderTitleIndex from '@/components/IndexPage/HeaderTitleIndex';
import ContentIndex from '@/components/IndexPage/ContentIndex';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { 
        HeaderIndex,
        HeaderTitleIndex, 
        ContentIndex,
        FooterIndex
           },
}

</script>


