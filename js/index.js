Vue.createApp({
    data() {
        return {
            word: null,
            wordlist: "null"
        }
    },
    methods: {
        Add() {
            this.wordlist = this.word
        }
    },
    computed: {
        Upper() {
            return this.wordlist.toUpperCase() 
        },
        Lower() {
            return this.wordlist.toLowerCase() 
        }
    },
}).mount("#app")