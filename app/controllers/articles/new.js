import Ember from 'ember';

export default Ember.Controller.extend({
	hasDescription: Ember.computed.notEmpty('model.description'),
	isValid: Ember.computed.and(
		'hasDescription'
	)
});