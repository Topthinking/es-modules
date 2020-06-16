(function (React, ReactDOM) {
	'use strict';

	var Main = () => React.createElement("h1", null, "hello world");

	ReactDOM.render(React.createElement(Main, null), document.getElementById('root1'));

}(React, ReactDOM));
