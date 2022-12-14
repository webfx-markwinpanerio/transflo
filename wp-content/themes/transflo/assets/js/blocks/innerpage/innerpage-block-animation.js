var FX = ( function( FX, $ ) {

	$( () => {
		FX.InnerpageBlockAnimation.init()
        FX.ImageButtonAnimation.init()
        FX.ProductSlider.init()
        FX.BenefitsSection.init()
        FX.ImageOverlay.init()
        FX.HalfMediaTextAnimation.init()
        FX.HalfFormTextAnimation.init()
        FX.TeamBlock.init()
        FX.FormBlockAnimation.init()
	})

	FX.InnerpageBlockAnimation = {
		init() {
		},
	}

    FX.ImageButtonAnimation = {
        init() {
            const $imageButton = $('.image-buttons');
            const controller = new ScrollMagic.Controller();

            $imageButton.each(function() {
                const $this = $(this);
                const $imageButtonItem = $this.find('.image-button-item');

                const imageButtonTimeline = new TimelineMax()
                    .staggerTo($imageButtonItem, 1, {
                        scale: 1, 
                        opacity: 1,
                        filter : 'blur(0px)',
                        ease: Power4.easeInOut,
                    }, 0.15)
                        

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.75
                })
                .setTween(imageButtonTimeline)
                .addTo(controller);
            })
        }
    }

    FX.ProductSlider = {
        init() {
            const $productSlider = $('.js-products-slider');
            const controller = new ScrollMagic.Controller();

            $productSlider.each(function() {
                const $this = $(this);
                const $productSliderItem = $this.find('.products-items');

                const productSliderTimeline = new TimelineMax();
                    productSliderTimeline
                        .staggerTo($productSliderItem, 0.6, {
                            opacity: 1,
                            'transform': 'scale(1)',
                            'filter' : 'blur(0px)'
                        }, 0.15)
                        .staggerTo($productSliderItem, 0.6, {
                            left: 0
                        }, 0.15, '-=0.5')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(productSliderTimeline)
                .addTo(controller);
            })
        }
    }

    FX.BenefitsSection = {
        init() {
            const $benefitsSection = $('.js-benefits-section');
            const controller = new ScrollMagic.Controller();

            $benefitsSection.each(function() {
                const $this = $(this);
                const $benefitsSectionItem = $this.find('.js-benefits-section-item');

                const benefitsSectionTimeline = new TimelineMax();
                    benefitsSectionTimeline
                        .staggerTo($benefitsSectionItem, 0.6, {
                            opacity: 1,
                            'transform': 'scale(1)',
                            'filter' : 'blur(0px)'
                        }, 0.15)
                        .staggerTo($benefitsSectionItem, 0.6, {
                            left: 0
                        }, 0.15, '-=0.5')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(benefitsSectionTimeline)
                .addTo(controller);
            })
        }
    }

    FX.ImageOverlay = {
        init() {
            const $imageOverlayWrap = $('.image-overlay-text__wrap');
            const controller = new ScrollMagic.Controller();

            $imageOverlayWrap.each(function() {
                const $this = $(this);
                const $imageOverlayImage = $this.find('.image-overlay-image');
                const $imageOverlayContent = $this.find('.image-overlay-text__content');

                const imageOverlayWrapTimeline = new TimelineMax();
                    imageOverlayWrapTimeline
                        .to($imageOverlayImage, 1.2, {
                            opacity: 1,
                            'transform' : 'translate(0)',
                            ease: Power4.easeInOut
                        })
                        .to($imageOverlayContent, 1.2, {
                            opacity: 1,
                            'transform' : 'translate(0)',
                            ease: Power4.easeInOut
                        }, '-=1')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(imageOverlayWrapTimeline)
                .addTo(controller);
            })
        }
    }

    FX.HalfMediaTextAnimation = {
		init() {
            const $halfMediaTextWrap = $('.js-image-text');
            const controller = new ScrollMagic.Controller();

            $halfMediaTextWrap.each(function() {
                const $this = $(this);
                const $halfMediaTextImage = $this.find('.js-image-text-image');
                const $halfMediaTextContent = $this.find('.js-image-text-content > *');

                const halfMediaTextWrapTimeline = new TimelineMax();
                    halfMediaTextWrapTimeline
                        .to($halfMediaTextImage, 0.8, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut
                        })
                        .staggerTo($halfMediaTextContent, 0.8, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut,
                        }, 0.15, '-=0.8')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(halfMediaTextWrapTimeline)
                .addTo(controller);
            })
		},
	}

    FX.HalfFormTextAnimation = {
		init() {
            const $halfImageFormWrap = $('.js-image-form');
            const controller = new ScrollMagic.Controller();

            $halfImageFormWrap.each(function() {
                const $this = $(this);
                const $halfImageFormImage = $this.find('.js-image-form-image');
                const $halfImageFormContent = $this.find('.js-animated-text');

                const halfImageFormWrapTimeline = new TimelineMax();
                    halfImageFormWrapTimeline
                        .to($halfImageFormImage, 0.8, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut
                        })
                        .to($halfImageFormContent, 0.8, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut
                        }, '-=0.8')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(halfImageFormWrapTimeline)
                .addTo(controller);
            })
		},
	}

    FX.TeamBlock = {
		init() {
            const $teamBlockWrap = $('.team-block__list');
            const controller = new ScrollMagic.Controller();

            $teamBlockWrap.each(function() {
                const $this = $(this);
                const $teamBlockItem = $this.find('.team-block__item');

                const teamBlockWrapTimeline = new TimelineMax();
                    teamBlockWrapTimeline
                        .staggerTo($teamBlockItem, 1.2, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut
                        }, 0.15)

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(teamBlockWrapTimeline)
                .addTo(controller);
            })
		},
	}

    FX.FormBlockAnimation = {
		init() {
            const $formBlockWrap = $('.form-blocks__inner');
            const controller = new ScrollMagic.Controller();

            $formBlockWrap.each(function() {
                const $this = $(this);
                const $formBlockItemChildren = $this.find(' > *');

                const formBlockWrapTimeline = new TimelineMax();
                    formBlockWrapTimeline
                        .to($this, 1.2, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)',
                            ease: Power4.easeInOut
                        })
                        .staggerTo($formBlockItemChildren, 0.45, {
                            opacity: 1,
                            'transform' : 'translate(0, 0)'
                        }, 0.115, '-=1')

                new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    triggerHook: 0.85
                })
                .setTween(formBlockWrapTimeline)
                .addTo(controller);
            })
		},
	}

	return FX

} ( FX || {}, jQuery ) )

