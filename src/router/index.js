import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index';
import WorkPage from '../views/WorkPage';
import Cuidades from '../views/Cuidades';

const routes = [
  {
    path: '/',
    component: Index,
    meta: { title: 'Mudanzas Reto', description: 'Mudanzas y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, servicio limpieza'}
  },{
    path: '/:work/:city',
    component: WorkPage ,
  },{
    path: '/cuidades',
    component: Cuidades,
    meta: { title: 'Mudanzas Reto Cantabria', description: 'Mudanzas Reto Santander, Mudanzas y transportes particulares y empresas, recogida de muebles'}
  }
];

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes});

router.beforeEach((to) => {
  if(to.meta.title) { 
    document.title = to.meta.title;
    document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.description)
  } 
 if (to.params.work && to.params.city){
     let pageTitle = to.params.work.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ') + ' ';
     pageTitle += to.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
     document.title = pageTitle;
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', pageTitle)
 }
});

export default router;
