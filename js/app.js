$(document).ready(function () {	
	App = Ember.Application.create();

	App.ApplicationAdapter = DS.FixtureAdapter.extend();

	App.Router.map(function () {
	  this.resource('app', { path: '/' });
	});

	App.IndexRoute = Ember.Route.extend({
	  model: function() {
	    return this.store.find('member');
	  }
	});

	App.member = DS.Model.extend({
		name: DS.attr('string'),
		quote: DS.attr('string')
	});

	App.member.FIXTURES = [
	{
		name: 'Michael',
		quote: 'penis'
	}];

});
