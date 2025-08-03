import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { MyComponent, myUtility } from 'my-shared-package';
import { MyComponent as Aaa } from 'my-shared-package-2';
import * as Bbb from 'my-shared-package-2';
import * as App2 from 'tanstack-react-query';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
    <Aaa />
    <Bbb.MyComponent />
    <MyComponent />
	</React.StrictMode>,
);

