
var Seq = function () {
	this._pendingItems = [];
	this._working = false;
};
Seq.prototype.process = function (fn) {
	var self = this;
	return new Promise(function (res, rej) {
		//store the continuation
		self._pendingItems.push({ fn: fn, res: res, rej: rej });
		self._work();
	});
};
Seq.prototype._work = function () {
	var self = this;
	if (self._working || self._pendingItems.length == 0)
		return; //no op

	self._working = true;
	var item = self._pendingItems.shift();
	item.fn()
	.then(item.res)
	.catch(item.rej)
	.then(function () {
		self._working = false;
		self._work(); //next
	});
};

module.exports = Seq;
