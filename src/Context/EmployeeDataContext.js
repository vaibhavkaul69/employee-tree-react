import React, { createContext, Component } from "react";

export const EmployeeDataContext = createContext();

class EmployeeDataContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "Mark Hill",
					designation: "Chief Operation Officer",
					team: "Development",
					id: 1234,
					manager: null,
				},
				{
					name: "Joe Linux",
					designation: "Chief Technology Officer",
					team: "Development",
					id: 8980,
					manager: 1234,
				},
				{
					name: "Linda May",
					designation: "Chief Business Officer",
					team: "Development",
					id: 7878,
					manager: 1234,
				},
				{
					name: "John Green",
					designation: "Chief Accounting Officer",
					team: "Development",
					id: 6789,
					manager: 1234,
				},
				{
					name: "Ron Blomquist",
					designation: "Chief Information Officer",
					team: "Development",
					id: 6666,
					manager: 8980,
				},
				{
					name: "Michael Rubin",
					designation: "Chief Innovation Officer",
					team: "Development",
					id: 6567,
					manager: 8980,
				},
				{
					name: "Alice Lopez",
					designation: "Chief Communication Officer",
					team: "Development",
					id: 5634,
					manager: 7878,
				},
				{
					name: "Marry Johnson",
					designation: "Chief Brand Officer",
					team: "Development",
					id: 7765,
					manager: 7878,
				},
				{
					name: "Kirk Dougles",
					designation: "Chief Business Development Officer",
					team: "Development",
					id: 3458,
					manager: 7878,
				},
				{
					name: "Erica Reel",
					designation: "Chief Customer Officer",
					team: "Development",
					id: 6789,
					manager: 6789,
				},
			],
			employeeTree: {},
		};
	}
	render() {
		return (
			<EmployeeDataContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</EmployeeDataContext.Provider>
		);
	}
}

export default EmployeeDataContextProvider;
