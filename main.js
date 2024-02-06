const {
    createApp
} = Vue
createApp({
    data (){
        return {
            arrayEmails: []
        }
    },
    mounted(){
        for( let i=0; arrayEmails.leght > 10 ; i++){
            const promise =
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response=> {
                return response.data.response
            })
        }
    }
}) .mount("#app")