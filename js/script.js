'use strict';
(function(){ 

	var templateSlideList = document.getElementById('silde-list').innerHTML;
	var templateSlideItem = document.getElementById('slide-item').innerHTML;
	Mustache.parse(templateSlideItem);	
	var slideItems = '';
	for(var i = 0; i < productsData.length; i++){
		console.log(productsData);
		slideItems += Mustache.render(templateSlideItem, productsData[i]);
	}
	var fullSlideList = Mustache.render(templateSlideList, {products: slideItems});
	results.insertAdjacentHTML('beforeend', fullSlideList);

})();