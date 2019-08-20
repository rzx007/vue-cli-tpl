import over from '@/v-components/footer.vue';

const components ={over}

function plugin(Vue){
    if (plugin.installed) {
        return
    }
    Object.keys(components).forEach((key)=>{
        Vue.component(key,components[key]);
    })
    
}
export default plugin;