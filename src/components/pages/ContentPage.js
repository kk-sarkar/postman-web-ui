import React from 'react';
import PropTypes from 'prop-types';
import OverallPage from './OverallPage';
import ServicePage from './ServicePage';


const ContentPage = (props) => {

	return (
		<div className="container">
			<OverallPage data={props.data}/>	
			<ServicePage data={props.data}/>
		</div>
		);
}

ContentPage.propTypes = {
	data: PropTypes.shape({ subProp: PropTypes.array }).isRequired
}

export default ContentPage;