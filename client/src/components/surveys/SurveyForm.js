import { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
	renderFields() {
		return (
			<div>
				<Field
					label='Survey title'
					type='text'
					name='title'
					component={SurveyField}
				/>
				<Field
					label='Subject line'
					type='text'
					name='subject'
					component={SurveyField}
				/>
				<Field
					label='Email body'
					type='text'
					name='body'
					component={SurveyField}
				/>
				<Field
					label='Recipient List'
					type='text'
					name='emails'
					component={SurveyField}
				/>
			</div>
		);
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit((values) => console.log(values))}
					action=''
				>
					{this.renderFields()}
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'surveyForm',
})(SurveyForm);
