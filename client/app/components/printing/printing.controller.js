var PrintingController = function($timeout, printingService) {
	"ngInject";

	var ctrl = this;

	this.$onChanges = function(changes) {
	}

	this.$onInit = function() {
		this.filters = {
			name: ''
		}
	}		

	this.onDropItem = function(event, data) {
		event.stopPropagation();
		$timeout(function(){
			ctrl.printingOrder.some(function(item_, idx){
				if (item_.id===data.id) {
					item_.__hasPrintingOrder = false;
					ctrl.printingOrder.splice(idx, 1);
					return true;
				}
			})			
		});
	}

	this.onDropOrder = function(event, data, target) {
		event.stopPropagation();
		$timeout(function(){
			var item;//, inlist=false;
			
			//if item is allready in the printingOrder list, it's an in-list re-ordering, remove the current instance from the array:
			ctrl.printingOrder.some(function(item_, idx){
				if (item_.id===data.id) {
					ctrl.printingOrder.splice(idx, 1);
					return true;
				}
			})

			ctrl.items.some(function(item_){
				if (item_.id===data.id) {
					item = item_;
					return true;
				}
			})				
			item.__hasPrintingOrder = true;
			
			if (target==='container') {
				ctrl.printingOrder.push(item);				
			} else if (target==='first') {
				ctrl.printingOrder.unshift(item);
			} else {
				ctrl.printingOrder.some(function(possibleTarget, idx){
					if (possibleTarget===target) {
						ctrl.printingOrder.splice(idx+1, 0, item);
						return true;
					}
				});		
			}

		});
	}
}

export default PrintingController;
