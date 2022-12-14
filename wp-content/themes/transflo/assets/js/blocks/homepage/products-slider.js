var FX = ( function( FX, $ ) {

	$( () => {
		FX.ProductsSlider.init()
	})

	FX.ProductsSlider = {
		$slider: null,

		init() {
			this.$slider = $('.js-products-slider')

			if( this.$slider.length ) {
				this.applySlick()
			}

			this.$slider.on('beforeChange', function() {
				$('.js-products-slider').addClass('is-animating');
			})

			this.$slider.on('afterChange', function() {
				$('.js-products-slider').removeClass('is-animating');
			})
		},

		applySlick() {
            this.$slider.slick( {
				infinite: false,
				speed: 600,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
            });

			var $slider = $('.js-products-slider');
			var $progressBar = $('.progress-products-item');
			var $progressBarLabel = $( '.slider__label' );
			
			$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
				var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
				
				$progressBar
				.css('background-size', calc + '% 100%')
				.attr('aria-valuenow', calc );
				
				$progressBarLabel.text( calc + '% completed' );
  			});
 
		}
	}

	return FX

} ( FX || {}, jQuery ) )

