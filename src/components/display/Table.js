/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from "react-tabulator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink } from "react-csv";
import '../../styles/Table.css';


class Table extends Component {

	ref = null;

	render() {

		const { data=[], config={}} = this.props;

		return (
			<div>
				<div className="above-table-container">
					<div>
						<label className="data-count">
							<FontAwesomeIcon icon="hashtag" /> {data.length}
						</label>
					</div>
					<div>
						<CSVLink data={data} className="download" title="Download the table data in CSV format.">
							Download CSV
						</CSVLink>
					</div>
				</div>
				<ReactTabulator
				  /* eslint-disable-next-line no-return-assign */
		          ref={ref => (this.ref = ref)}
		          columns={config.columns}
		          data={data}
		          options={config.options}
		          data-custom-attr="test-custom-attribute"
		          className="custom-css-class"
		        />
			</div>
			
		);
	}
}

Table.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
	config: PropTypes.shape({ subProp: PropTypes.object }).isRequired
}

export default Table;