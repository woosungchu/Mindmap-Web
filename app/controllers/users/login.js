import Ember from 'ember';

export default Ember.Controller.extend({
  session : Ember.inject.service('session'),
  actions : {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password'),
          authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
                          .then((/*response*/) => {
                            this.transitionToRoute('index');
                          })
                          .catch((/*reason*/) => {
                              let message = 'The username or password is incorret';
                              this.set('errorMessage', message);
                          });
    }
  }
});
