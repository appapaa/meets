function First_page(j){
	var self = this;
	self.j = j;
	
	return{
		init: function(){
			var dfd = $.Deferred();
	        dfd.resolve();
			self.initTarget();
	        return dfd;
		},
		after_show: function(){
			var dfd = $.Deferred();
	        dfd.resolve();
	        return dfd;
		}
	}
}
First_page.prototype.initTarget = function(){
	var self = this;
		$(window).on('hashchange',function(){
			alert(10);
			self.j.attr('target',Navigate[0]);
		});
}
var fun = new First_page($('body'));
fun.init();
var Navigate = function(){
	return window.location.hash.substr(1).split('/');
};