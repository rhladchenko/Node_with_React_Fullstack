import _ from 'lodash';
import { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type='text'
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
					action=''
				>
					{this.renderFields()}
					<Link to='/surveys' className='red btn-flat left white-text'>
						Cancel
					</Link>
					<button type='submit' className='teal btn-flat right white-text'>
						Next
						<i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmail(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);
