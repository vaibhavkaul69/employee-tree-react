import React, { useContext } from "react";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";

export default function SearchFilterEmployee() {
	const {
		data,
		updateSearchInputText,
		searchEmployeeByName,
		filterUserByTeam,
	} = useContext(EmployeeDataContext);
	const uniqueTeamArray = new Set(data.map((item) => item.team));
	return (
		<div className="search-filter-employee">
			<div className="input-search-btn">
				<input
					onChange={(e) => updateSearchInputText(e.target.value)}
					type="search"
					className="search-input"
					placeholder="Search by name..."
				/>
				<button onClick={searchEmployeeByName} className="search-btn">
					Search
				</button>
			</div>
			<select
				onChange={(e) => filterUserByTeam(e.target.value)}
				className="filter-btn"
			>
				<option value="null">Filter Team...</option>
				{[...uniqueTeamArray].map((item, i) => {
					return (
						<option key={Math.random()} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
}
