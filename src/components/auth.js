import axios from "axios";

export default {
    user: { roles: "", username: "", authenticated: false },
    login: function(context, username, password, redirect) {
        let token = btoa(username + ":" + password);

        // do not forget to change the port to the right one, where your Spring Boot Application is running
        axios.get("http://localhost:8080/authenticate", { headers: { 'Authorization': `Basic ${token}` } })
            .then(response => {
                this.username = username;
                this.user.roles = response.data;
                this.authenticated = true;
                window.localStorage.setItem('token-' + this.username, token);

                // print the value of some variables to the console
                console.log(`${this.username}, ${this.user.roles}`);
                console.log(token);
                console.log(this.authenticated);
                console.log(localStorage.getItem('token-' + this.username));

                if (redirect)
                    context.$router.push({ path: redirect });
            })
            .catch(error => {
                console.log(error);
            });
    },
    hasAnyOf: function(roles) {
        return this.user.roles.find(role => roles.includes(role));
    },
    logout: function() {
        window.localStorage.removeItem('token-' + this.username);
        this.user = { roles: "", username: "", authenticated: false };
    },
    authenticated: function() {
        return this.user.authenticated;
    },

}