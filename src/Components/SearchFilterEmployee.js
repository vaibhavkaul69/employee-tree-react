import React, { useContext, useState } from "react";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";

export default function SearchFilterEmployee() {
	const {
		data,
		updateSearchInputText,
		searchEmployeeBytitle,
		filterUserByTeam,
		filterTeamName,
	} = useContext(EmployeeDataContext);
	const uniqueTeamArray = new Set(data.map((item) => item.team));
	const [teamName, setTeamName] = useState("default");

	const actionOnFilterInputOnChange = (name) => {
		setTeamName(name);
		filterUserByTeam(name);
	};

	return (
		<div className="search-filter-employee">
			<div className="input-search-btn">
				<input
					onChange={(e) => updateSearchInputText(e.target.value)}
					type="search"
					className="search-input"
					placeholder="Search by name..."
				/>
				<button onClick={searchEmployeeBytitle} className="search-btn">
					Search
				</button>
			</div>
			<select
				value={teamName}
				onChange={(e) => actionOnFilterInputOnChange(e.target.value)}
				className="filter-btn"
			>
				<option defaultValue={null} value="null">
					Filter by team
				</option>
				{[...uniqueTeamArray].map((item, i) => {
					return (
						<option key={i} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
}
