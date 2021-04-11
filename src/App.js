import React from "react";
import "./App.css";
import Chart from "./Components/chart";
import EmployeeListContainer from "./Components/EmployeeListContainer";
import EmployeeDataContextProvider from "./Context/EmployeeDataContext";

export default function App() {
	return (
		<EmployeeDataContextProvider>
			<div className="App">
				<div className="container">
					<EmployeeListContainer />
					<Chart />
				</div>
			</div>
		</EmployeeDataContextProvider>
	);
}
