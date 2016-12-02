console.log("loaded");
var myLocalStorage = {
	set: function(item, value) {
		localStorage.setItem(item, JSON.stringify(value));
	},
	get: function(item) {
		return JSON.parse(localStorage.getItem(item));
	},
	remove: function(item) {
		localStorage.removeItem(item);
	}
};

