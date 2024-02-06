const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Ciclo de vida de Vue'
    },

    beforeCreate(){
        //con la instancia
        console.log('beforeCreate')
    },

    created(){
        //se crean los métodos pero aún no se accede al Dom, no se puede acceder a 'el'
        console.log('created')
    },

    beforeMount(){
        //antes de insertar el Dom
        console.log('beforeMount')
    },

    mounted(){
        //al insertar el Dom
        console.log('mounted')
    },

    beforeUpdate(){
        //cuando detecta un cambio
        console.log('beforeUpdate')
    },

    updated(){
        //realiza los cambios
        console.log('updated')
    },

    beforeDestroy(){
        //antes de destruir la instancia
        console.log('beforeDestroy')
    },

    destroyed(){
        //se destruye toda la instancia
        console.log('destroyed')
    },

    methods: {
        destruir(){
            this.$destroy();
            this.destroyed = true;
        },

        cambiarSaludo(){
            this.saludo = (this.saludo === 'Holi') ? 'Ciclo de vida de Vue' : 'Holi';
        }
    }
})