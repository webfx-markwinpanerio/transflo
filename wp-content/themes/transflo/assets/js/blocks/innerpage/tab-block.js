var FX = ( function( FX, $ ) {

	$( () => {
		FX.TabBlockScript.init()
	})

	FX.TabBlockScript = {
		$slider: null,

		init() {
			$('.js-tab-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				fade: true,
				asNavFor: '.js-tab-menu',
				infinite: false,
				responsive: [
					{
					  breakpoint: 768,
					  settings: {
						adaptiveHeight: true
					  }
					}
				]
			});

			$('.js-tab-menu').slick({
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.js-tab-for',
				dots: false,
				arrows: false,
				focusOnSelect: true,
				responsive: [
					{
					  breakpoint: 768,
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

