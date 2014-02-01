App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Alert = DS.Model.extend({
  name         : DS.attr(),
  value        : DS.attr(),
  isChecked    : DS.attr(),
  isActive    : DS.attr(),
  creationDate : DS.attr(),
  count   :DS.attr(),
  comment :DS.attr(),
  graphData :DS.attr()
});

App.Alert.FIXTURES = [{
  id: 1,
  name: 'name1',
  value: 345,
  isChecked: 1,
  isActive: 1,
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT',
  count: 1,
  comment: ''
}, {
  id: 2,
  name: 'name2',
  value: 3453,
  isChecked: 0,
  isActive: 1,
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT',
  count: 1,
  comment: ''
}, {
  id: 3,
  name: 'name3',
  value: 3453,
  isChecked: 1,
  isActive: 1,
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT',
  count: 1,
  comment: ''
}, {
  id: 4,
  name: 'name4',
  value: 3453,
  isChecked: 0,
  isActive: 1,
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT',
  count: 1,
  comment: ''
}
];




App.Router.map(function() {
  // put your routes here
  this.resource('alerts');
});

        // index route
App.IndexRoute = Em.Route.extend({
    redirect: function(){
        this.transitionTo('alerts');
    }
});

App.AlertsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('alert'); 
  }
});


App.AlertView = Ember.View.extend({
    templateName: 'alert',

});


App.AlertController = Ember.Object.create({

});

App.AlertsView = Ember.View.extend({
    templateName: 'alerts',

    TableRowView: Ember.View.extend({
        templateName: 'alert-row'
    })

});










