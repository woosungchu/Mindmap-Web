import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    postUser(param){
      let user = null;

      user = this.get('store').createRecord('user',{
          username : param.username,
          email : param.email,
          password : param.password
      });

      user.save().then(()=> {
        // Success callback
        alert('User account is successfully created!');
        this.transitionToRoute('users.login'); // this works

      }).catch(()=>{
        // Error callback
        alert('Request failed!');
      });
    }
  }
});
