import React from "react";
import "./App.css";
import Chart from "./Components/chart";
import EmployeeDataContextProvider from "./Context/EmployeeDataContext";

export default function App() {
	return (
		<EmployeeDataContextProvider>
			<div className="App">
				<div className="container">
					<Chart />
				</div>
			</div>
		</EmployeeDataContextProvider>
	);
}
