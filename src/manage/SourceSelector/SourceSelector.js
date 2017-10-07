import React from 'react';

import './SourceSelector.css';

export default () => {
  return (
    <div className="source-selector">
      <div>Select source</div>
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Source 1
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a>Source 1</a></li>
          <li><a>Source 2</a></li>
          <li><a>Source 3</a></li>
        </ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Android
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a>Android</a></li>
          <li><a>iPhone</a></li>
          <li><a>Web</a></li>
        </ul>
      </div>
      <select className="dropdown" value="1">
        <option name="opt1" value="1">1</option>
        <option name="opt1" value="2">2</option>
      </select>
    </div>
  );
}