import React from "react";
import "./App.css";
import EmployeeChart from "./Components/EmployeeChart";
import EmployeeListContainer from "./Components/EmployeeListContainer";
import EmployeeDataContextProvider from "./Context/EmployeeDataContext";

export default function App() {
	return (
		<EmployeeDataContextProvider>
			<div className="App">
				<div className="container">
					<EmployeeListContainer />
					<EmployeeChart />
				</div>
			</div>
		</EmployeeDataContextProvider>
	);
}
