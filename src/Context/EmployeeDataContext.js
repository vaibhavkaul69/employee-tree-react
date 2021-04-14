import React, { createContext, Component } from "react";

export const EmployeeDataContext = createContext();

class EmployeeDataContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
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
					team: "Business Team",
					id: 7878,
					manager: 1234,
				},
				{
					name: "John Green",
					designation: "Chief Accounting Officer",
					team: "Marketing",
					id: 6789,
					manager: 1234,
				},
				{
					name: "Ron Blomquist",
					designation: "Chief Information Officer",
					team: "Human Resource",
					id: 6666,
					manager: 8980,
				},
				{
					name: "Michael Rubin",
					designation: "Chief Innovation Officer",
					team: "Marketing",
					id: 6567,
					manager: 8980,
				},
				{
					name: "Alice Lopez",
					designation: "Chief Communication Officer",
					team: "Marketing",
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
					team: "Human Resource",
					id: 3458,
					manager: 7878,
				},
				{
					name: "Erica Reel",
					designation: "Chief Customer Officer",
					team: "Customer Success",
					id: 6888,
					manager: 6789,
				},
			],
		};

		this.employee_mapping = {};
		this.tree = {};
		this.root = [];
	}
	updateSearchInputText = (val) => {
		this.setState({
			inputText: val,
		});
	};

	parseData = (arr) => {
		let root = [];
		arr.forEach((employee) => {
			this.employee_mapping[employee.id] = employee;
			if (!(employee.id in this.tree)) {
				this.tree[employee.id] = {
					children: [],
				};
			}
			if (employee.manager && !(employee.manager in this.tree)) {
				this.tree[employee.manager] = {
					children: [],
				};
			}
			if (employee.manager) {
				this.tree[employee.manager].children.push(employee.id);
			} else {
				root.push(employee.id);
			}
		});
		return root;
	};
	componentDidMount() {
		this.root = this.parseData(this.state.data);
		//console.log(this.tree);
		const newData = this.state.data;
		for (let i = 0; i < this.state.data.length; i++) {
			if (this.tree.hasOwnProperty(newData[i].id)) {
				newData[i]["children"] = this.tree[newData[i].id]["children"].map(
					(item) => {
						return this.employee_mapping[item];
					}
				);
			}
		}
		this.setState({
			data: newData,
		});
	}
	filterUserByTeam = (teamName) => {
		const midArray = this.state.data.filter((item) => {
			if (item.team.toLowerCase().indexOf(teamName.toLowerCase()) !== -1) {
				return item;
			}
		});
		this.updateDataArray(midArray);
	};
	searchEmployeeByName = () => {
		const inputData = this.state.inputText;
		const midArray = this.state.data.filter((item) => {
			if (item.name.toLowerCase().indexOf(inputData.toLowerCase()) !== -1) {
				return item;
			}
		});
		this.updateDataArray(midArray);
	};

	updateDataArray = (midArray) => {
		if (midArray.length > 0) {
			this.setState({
				data: midArray,
			});
		} else {
			alert("Not Found...");
		}
	};
	render() {
		return (
			<EmployeeDataContext.Provider
				value={{
					...this.state,
					updateSearchInputText: this.updateSearchInputText,
					searchEmployeeByName: this.searchEmployeeByName,
					filterUserByTeam: this.filterUserByTeam,
					employee_mapping: this.employee_mapping,
					tree: this.tree,
					root: this.root,
				}}
			>
				{this.props.children}
			</EmployeeDataContext.Provider>
		);
	}
}

export default EmployeeDataContextProvider;
