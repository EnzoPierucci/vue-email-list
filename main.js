const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayEmails: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.arrayEmails.push(response.data.response);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    }
}).mount("#app");