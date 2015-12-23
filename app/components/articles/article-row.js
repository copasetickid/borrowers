import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null,
	articleStates: null,
	actions: {
		saveArticle(article) {
			let article = this.get('article');

			if (article.get('hasDirtyAttributes')) {
				this.sendAction('save', article)
			}
		}
	}
});
