import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/MenuHeader.css';


const MenuHeader = ( { name , icon } ) =>  {
	
	return (
			<div className="menu-header">
				<FontAwesomeIcon icon={icon} />
    			<span className="menu-name">{name}</span>
			</div>
	)  ;
}
  
MenuHeader.propTypes = {
	name:  PropTypes.string.isRequired,
	icon:  PropTypes.string.isRequired
}

export default MenuHeader;