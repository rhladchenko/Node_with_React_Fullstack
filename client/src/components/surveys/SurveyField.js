export default (props) => {
	const {
		input,
		label,
		meta: { error, touched },
	} = props;

	return (
		<div>
			<label htmlFor=''>{label}</label>
			<input {...input} />
			{touched && error}
		</div>
	);
};
