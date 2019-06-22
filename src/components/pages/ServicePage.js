import React from 'react';
import MenuHeader from '../layouts/MenuHeader';
import '../../styles/ServicePage.css';
import IndividualServicePage from './IndividualServicePage';

const ServicePage = () => {

    return (
        <div className="container">
            <MenuHeader name="Services" icon="cogs" />
            <div className="content">
                <IndividualServicePage />
            </div>
        </div>
    );
}

export default ServicePage;