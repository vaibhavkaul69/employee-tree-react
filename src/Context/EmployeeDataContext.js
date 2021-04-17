import React, { createContext, Component } from "react";

export const EmployeeDataContext = createContext();

class EmployeeDataContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
			data: [
				{
					title: "Mark Hill",
					subtitle: "Chief Operation Officer",
					team: "Development",
					id: 1234,
					manager: null,
				},
				{
					title: "Joe Linux",
					subtitle: "Chief Technology Officer",
					team: "Development",
					id: 8980,
					manager: 1234,
				},
				{
					title: "Linda May",
					subtitle: "Chief Business Officer",
					team: "Business Team",
					id: 7878,
					manager: 1234,
				},
				{
					title: "John Green",
					subtitle: "Chief Accounting Officer",
					team: "Marketing",
					id: 6789,
					manager: 1234,
				},
				{
					title: "Ron Blomquist",
					subtitle: "Chief Information Officer",
					team: "Human Resource",
					id: 6666,
					manager: 8980,
				},
				{
					title: "Michael Rubin",
					subtitle: "Chief Innovation Officer",
					team: "Marketing",
					id: 6567,
					manager: 8980,
				},
				{
					title: "Alice Lopez",
					subtitle: "Chief Communication Officer",
					team: "Marketing",
					id: 5634,
					manager: 7878,
				},
				{
					title: "Marry Johnson",
					subtitle: "Chief Brand Officer",
					team: "Development",
					id: 7765,
					manager: 7878,
				},
				{
					title: "Kirk Dougles",
					subtitle: "Chief Business Development Officer",
					team: "Human Resource",
					id: 3458,
					manager: 7878,
				},
				{
					title: "Erica Reel",
					subtitle: "Chief Customer Officer",
					team: "Customer Success",
					id: 6888,
					manager: 6789,
				},
				{
					title: "Dwayne Johnson",
					subtitle: "Vice President-Engineering",
					team: "Engineering",
					id: 5671,
					manager: 6789,
				},
			],
			root: [],
		};

		this.employee_mapping = {};
		this.tree = {};
	}
	updateFilteredTeamName = (val) => {
		this.setState({
			filterTeamName: val,
		});
	};
	updateSearchInputText = (val) => {
		this.setState({
			inputText: val,
		});
	};
	setNewData = (newData) => {
		this.setState({
			data: newData,
		});
	};
	setNewTreeRoot = (newRoot) => {
		this.setState({
			root: newRoot,
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
		this.setNewTreeRoot(this.parseData(this.state.data));

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

	filterUserByTeam = (teamtitle) => {
		const midArray = this.state.data.filter((item) => {
			if (item.team.toLowerCase().indexOf(teamtitle.toLowerCase()) !== -1) {
				return item;
			}
		});
		const allIds = midArray.map((item) => item.id);
		this.updateDataArray(midArray);
		this.setNewTreeRoot(allIds);
	};

	searchEmployeeBytitle = () => {
		const inputData = this.state.inputText;
		const midArray = this.state.data.filter((item) => {
			if (item.title.toLowerCase().indexOf(inputData.toLowerCase()) !== -1) {
				return item;
			}
		});
		this.updateDataArray(midArray);
		this.setNewTreeRoot([midArray[0] ? midArray[0].id : 1234]);
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
					searchEmployeeBytitle: this.searchEmployeeBytitle,
					filterUserByTeam: this.filterUserByTeam,
					employee_mapping: this.employee_mapping,
					tree: this.tree,
				}}
			>
				{this.props.children}
			</EmployeeDataContext.Provider>
		);
	}
}

export default EmployeeDataContextProvider;
