var printingService = function ($q, DataService) {
	"ngInject";

	return {
		getItems: function(){
			return DataService.getItems();
		},
		getPrintingOrder: function(){
			return DataService.getPrintingOrder();
		}
	}
}

export default printingService;