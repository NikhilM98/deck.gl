import React, {Component} from 'react';
import {readableInteger} from '../../utils/format-utils';
import {MAPBOX_STYLES, DATA_URI} from '../../constants/defaults';
import {App, INITIAL_VIEW_STATE} from 'website-examples/screen-grid/app';

export default class ScreenGridDemo extends Component {

  static get data() {
    return {
      url: `${DATA_URI}/screen-grid-data.txt`,
      worker: 'workers/screen-grid-data-decoder.js'
    };
  }

  static get parameters() {
    return {
      cellSize: {displayName: 'Cell Size', type: 'range', value: 30, step: 1, min: 10, max: 100}
    };
  }

  static get viewport() {
    return {
      ...INITIAL_VIEW_STATE,
      dragToRotate: false
    };
  }

  static get mapStyle() {
    return MAPBOX_STYLES.DARK;
  }

  static renderInfo(meta) {
    return (
      <div>
        <h3>Public Transit Accessibility In California</h3>
        <p>Distribution of public transportation stops.</p>
        <p>The layer aggregates data within the boundary of screen grid cells
           and maps the aggregated values to a dynamic color scale</p>
        <p>Data source: <a href="http://openstreetmap.org">OpenStreetMaps</a></p>
        <div className="stat">No. of Samples<b>{ readableInteger(meta.count || 0) }</b></div>
      </div>
    );
  }

  render() {
    const {params, data} = this.props;
    const cellSize = params.cellSize.value;

    return (
      <App {...this.props} data={data} cellSize={cellSize} />
    );
  }
}
