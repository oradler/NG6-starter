var printingService = function ($q, DataService) {
	"ngInject";

	var items,printingOrder;

	return {
		getItems: function(){
			debugger;
			if (!items) {
				return DataService.getItems()
					.then(function(items_){
						items = items_;
						return items;
					})
			} else {
				return $q.resolve(items);				
			}
		},
		getPrintingOrder: function(){
			if (!printingOrder) {
				return DataService.getPrintingOrder()
					.then(function(printingOrder_){
						printingOrder = printingOrder_;
						return printingOrder;
					})
			} else {
				return $q.resolve(printingOrder);				
			}
		}
	}
}

export default printingService;