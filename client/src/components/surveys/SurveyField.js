export default (props) => {
	const { input, label } = props;

	return (
		<div>
			<label htmlFor=''>{label}</label>
			<input {...input} />
		</div>
	);
};
