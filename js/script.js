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

	var flkty = new Flickity( '.main-carousel', {
	    cellAlign: 'left',
	    draggable: true,
	    prevNextButtons: true,
	    pageDots: false,
	    hash: true
	});

	var progressBar = document.querySelector('.progress-bar')

	flkty.on( 'scroll', function( progress ) {
	 	progress = Math.max( 0, Math.min( 1, progress ) );
		progressBar.style.width = progress * 100 + '%';
	});

	$('.reset').on( 'click', function() {
	    flkty.select(0);
});