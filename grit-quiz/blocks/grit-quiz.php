<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package grit-quiz
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function grit_quiz_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'grit-quiz/index.js';
	wp_register_script(
		'grit-quiz-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'grit-quiz/editor.css';
	wp_register_style(
		'grit-quiz-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'grit-quiz/style.css';
	wp_register_style(
		'grit-quiz-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'grit-quiz/grit-quiz', array(
		'editor_script' => 'grit-quiz-block-editor',
		'editor_style'  => 'grit-quiz-block-editor',
		'style'         => 'grit-quiz-block',
	) );
}
add_action( 'init', 'grit_quiz_block_init' );
