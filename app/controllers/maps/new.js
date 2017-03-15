import Ember from 'ember';

export default Ember.Controller.extend({
  map : null,
  actions : {
    postMindMap(param){
      let map = param || this.get('map');
      alert(map.get('id'));

      //create
      // if(paramMap == null){
      //   map = this.get('store').createRecord('map',{
      //     title : '0212Title'
      //   });
      //   map.save().then(()=>{
      //     this.set('map',map);
      //   });
      //
      // //update
      // }else{
      //   let pk = paramMap.get('id');
      //
      //   this.get('store').findRecord('id', pk).then(function(map) {
      //     //map.get('node')
      //
      //     map.set('title', "Updated!");
      //     map.save().then(()=>{
      //       this.set('map',map);
      //     });
      //   });
      //
      // }

    }
  }//end actions
});
