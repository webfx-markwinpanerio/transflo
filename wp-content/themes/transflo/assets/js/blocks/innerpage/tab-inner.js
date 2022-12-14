var FX = ( function( FX, $ ) {

	$( () => {
		FX.Tab.init()
	})

	FX.Tab = {
		$slider: null,

		init() {
			$('.js-tab-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				fade: true,
				asNavFor: '.js-tab-menu'
			});
			$('.js-tab-menu').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.js-tab-for',
				dots: false,
				arrows: false,
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
					  }
					}
				]
			});
		},
	}

	return FX

} ( FX || {}, jQuery ) )

