( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	var el = wp.element.createElement;
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	var __ = wp.i18n.__;
	
	var formHtml = '<form name="form"><script>function validateThenDisplayResults(){if (validate()){displayResults();}}function validate(){if(form.Q1.value == \'\'||form.Q2.value == \'\'||form.Q3.value == \'\'||form.Q4.value == \'\'||form.Q5.value == \'\'||form.Q6.value == \'\'||form.Q7.value == \'\'||form.Q8.value == \'\'||form.Q9.value == \'\'||form.Q10.value == \'\'){alert(\'Please select one answer per row\');return false;}return true;} function displayResults(){ var passionScore =  (Number(form.Q1.value)+Number(form.Q3.value)+Number(form.Q5.value)+Number(form.Q7.value)+Number(form.Q9.value))/5; var perseveranceScore = (Number(form.Q2.value)+Number(form.Q4.value)+Number(form.Q6.value)+Number(form.Q8.value)+Number(form.Q10.value))/5; var gritScore = (passionScore+perseveranceScore)/2; var gritPercentage = gritToPercentile(gritScore); var textResponse = "Your <b>grit</b> score is "+gritScore.toFixed(1)+" out of 5.  With a <i>passion</i> value of "+passionScore.toFixed(1)+" out of 5 and a <i>perseverance</i> value of "+perseveranceScore.toFixed(1)+" out of 5.  "; if (gritPercentage > 0){ 		textResponse = textResponse+"<br />Based on a large sample of American adults you are grittier than "+gritPercentage+"%."; 	} document.getElementById("results").innerHTML = textResponse; } function gritToPercentile(gritScore){ if (gritScore >= 4.9){ return 99;} if (gritScore >= 4.7){ return 95;} if (gritScore >= 4.5){ return 90;} if (gritScore >= 4.3){ return 80;} 	if (gritScore >= 4.1){ return 70;} if (gritScore >= 3.9){ return 60;} if (gritScore >= 3.8){ return 50;} if (gritScore >= 3.5){ return 40;} if (gritScore >= 3.3){ return 30;} if (gritScore >= 3.0){ return 20;} if (gritScore >= 2.5){ return 10;} return 0; } </script></p> <table> <tbody> <tr> <td></td> <td>Not at all like me</td> <td>Not much like me</td> <td>Somewhat like me</td> <td>Mostly like me</td> <td>Very much like me</td> </tr> <tr> <td>New ideas a projects sometimes distract me from the previous ones*</td> <td><input name="Q1" type="radio" value="5" /></td> <td><input name="Q1" type="radio" value="4" /></td> <td><input name="Q1" type="radio" value="3" /></td> <td><input name="Q1" type="radio" value="2" /></td> <td><input name="Q1" type="radio" value="1" /></td> </tr> <tr> <td>Setbacks don&#8217;t discourage me. I don&#8217;t give up easily#</td> <td><input name="Q2" type="radio" value="1" /></td> <td><input name="Q2" type="radio" value="2" /></td> <td><input name="Q2" type="radio" value="3" /></td> <td><input name="Q2" type="radio" value="4" /></td> <td><input name="Q2" type="radio" value="5" /></td> </tr> <tr> <td>I often set a goal but later choose to pursue a different one*</td> <td><input name="Q3" type="radio" value="5" /></td> <td><input name="Q3" type="radio" value="4" /></td> <td><input name="Q3" type="radio" value="3" /></td> <td><input name="Q3" type="radio" value="2" /></td> <td><input name="Q3" type="radio" value="1" /></td> </tr><tr> <td>I am a hard worker#</td> <td><input name="Q4" type="radio" value="1" /></td> <td><input name="Q4" type="radio" value="2" /></td> <td><input name="Q4" type="radio" value="3" /></td> <td><input name="Q4" type="radio" value="4" /></td> <td><input name="Q4" type="radio" value="5" /></td> </tr> <tr> <td>I have difficulty maintaining my focus on projects that take more than a few months to complete*</td> <td><input name="Q5" type="radio" value="5" /></td> <td><input name="Q5" type="radio" value="4" /></td> <td><input name="Q5" type="radio" value="3" /></td> <td><input name="Q5" type="radio" value="2" /></td> <td><input name="Q5" type="radio" value="1" /></td> </tr> <tr> <td>I finish whatever I begin#</td> <td><input name="Q6" type="radio" value="1" /></td> <td><input name="Q6" type="radio" value="2" /></td> <td><input name="Q6" type="radio" value="3" /></td> <td><input name="Q6" type="radio" value="4" /></td> <td><input name="Q6" type="radio" value="5" /></td> </tr><tr> <td>My interests change from year to year*</td> <td><input name="Q7" type="radio" value="5" /></td> <td><input name="Q7" type="radio" value="4" /></td> <td><input name="Q7" type="radio" value="3" /></td> <td><input name="Q7" type="radio" value="2" /></td> <td><input name="Q7" type="radio" value="1" /></td> </tr> <tr> <td>I am diligent. I never give up#</td> <td><input name="Q8" type="radio" value="1" /></td> <td><input name="Q8" type="radio" value="2" /></td> <td><input name="Q8" type="radio" value="3" /></td> <td><input name="Q8" type="radio" value="4" /></td> <td><input name="Q8" type="radio" value="5" /></td> </tr> <tr> <td>I have been obsessed with a certain idea or project for a short time but later lost interest*</td> <td><input name="Q9" type="radio" value="5" /></td> <td><input name="Q9" type="radio" value="4" /></td> <td><input name="Q9" type="radio" value="3" /></td> <td><input name="Q9" type="radio" value="2" /></td> <td><input name="Q9" type="radio" value="1" /></td> </tr> <tr> <td>I have overcome setbacks to conquer an important challenge#</td> <td><input name="Q10" type="radio" value="1" /></td> <td><input name="Q10" type="radio" value="2" /></td> <td><input name="Q10" type="radio" value="3" /></td> <td><input name="Q10" type="radio" value="4" /></td> <td><input name="Q10" type="radio" value="5" /></td> </tr> </tbody> </table> <p><input type="button" value="Calculate result" onClick="validateThenDisplayResults()" /></p> <div id="results"></div> </form>';

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'grit-quiz/grit-quiz', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'Grit Quiz', 'grit-quiz' ),

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {
			return el(
				'p',
				{ className: props.className },
				__( 'I\'ll pop the quiz here for people to do.', 'grit-quiz' )
			);
		},

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: function() {
			return el(
				"p", 
				null, 
				el(
					wp.element.RawHTML, 
					null, 
					formHtml
				)
			);
		}
	} );
} )(
	window.wp
);
