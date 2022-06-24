new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
        // Depois de 5 segundo valor zera
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
})