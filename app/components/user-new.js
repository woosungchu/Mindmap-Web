import Ember from 'ember';

export default Ember.Component.extend({
  username : null,
  emal : null,
  password : null,
  password2 : null,
  actions : {
    signUp(){
      let username = this.get('username'),
          email = this.get('email'),
          password = this.get('password'),
          password2 = this.get('password2'),
          postAction = this.get('postAction');

      if(password === password2){

        let paramUser = {
          username : username,
          password : password,
          email : email
        };

        postAction(paramUser);
      }else{
        alert('Passwords are different');
      }

    }
  }
});
