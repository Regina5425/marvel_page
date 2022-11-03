import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
	const styleParag = {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold'
	}

	const styleLink = {
		display: 'block',
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 30
	}
	return (
		<div>
			<ErrorMessage/>
			<p style={styleParag}>Page doesn't exist</p>
			<Link style={styleLink} to='/'>Back to main page</Link>
		</div>
	)
}

export default Page404;