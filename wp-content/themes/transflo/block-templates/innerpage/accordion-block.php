<section class="accordion-block section-padding <?php echo get_field('background_type'); ?>">
    <div class="container">
        <?php if(get_field('subheading') || get_field('title') || get_field('description')):?>
        <div class="accordion-block__upper js-animated-text animated-text">
            <?php if($subheading = get_field('subheading')): ?>
            <h5><?php echo $subheading; ?></h5>
            <?php endif; ?>
            <?php if($title = get_field('title')): ?>
            <h2><?php echo $title; ?></h2>
            <?php endif; ?>
            <?php if($description = get_field('description')): ?>
                <?php echo $description; ?>
            <?php endif; ?>
        </div>
        <?php endif; ?>
        <dl class="accordion-block__list js-animated-text animated-text">
            <?php while(have_rows('accordion_item')): the_row(); ?>
            <div class="accordion-block__item">
                <dt class="accordion-block__headline js-accordion-headline">
                    <h4>
                        <?php echo get_sub_field('headline'); ?>
                        <i class="icon-button-right"></i>
                    </h4>
                </dt>
                <dd class="accordion-block__content js-accordion-content">
                    <?php echo get_sub_field('content'); ?>
                </dd>
            </div>
            <?php endwhile; ?>
        </dl>
    </div>
</section>