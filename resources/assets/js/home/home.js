require('./../bootstrap');

window.Vue = require('vue');

const app = new Vue({
    el: '#root',
    created(){
    	var login = localStorage.getItem('login')
    	if (login) {
			let objLogin = JSON.parse(login)
			let that = this
			axios.post('/oauth/token', {
				"client_id": 2,
				"client_secret": "ZXfoXzjJ7uto7YNf70jgL300X8OwPbXwCgoHJXJ3",
				"grant_type": "password",
				"username": objLogin.email,
				"password": objLogin.password
			})
				.then(res => {
					localStorage.removeItem('login');
					localStorage.setItem('oauth', JSON.stringify(res.data))
				})
				.catch(err => {
					that.logout($event)
				})
    	}
    },
    methods: {
    	logout(event){
    		event.preventDefault()
    		localStorage.removeItem('oauth');
    		document.getElementById('logout-form').submit();
    		// axios.post('/logout')
    	}
    }
});
