import _ from 'lodash';

import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router';

import * as actions from '../../actions';

function SurveyFormReview(props) {
	const { onCancel, formValues, submitSurvey, history } = props;

	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label htmlFor=''>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm</h5>
			{reviewFields}
			<button
				className='yellow darken-3 white-text btn-flat'
				onClick={onCancel}
			>
				Back
			</button>
			<button
				className='teal  btn-flat white-text right'
				onClick={() => submitSurvey(formValues, history)}
			>
				Send Survey
				<i className='material-icons right'>email</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values,
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
