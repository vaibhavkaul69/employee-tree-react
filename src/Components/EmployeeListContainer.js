import React, { useContext } from "react";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";
import EmployeeList from "./EmployeeList";
import SearchFilterEmployee from "./SearchFilterEmployee";

export default function EmployeeListContainer() {
	const { data } = useContext(EmployeeDataContext);
	return (
		<section className="employee-list-container">
			<SearchFilterEmployee />
			<ul className="employee-list">
				{data.map((item, i) => {
					return (
						<EmployeeList
							title={item.title}
							key={i}
							subtitle={item.subtitle}
							team={item.team}
						></EmployeeList>
					);
				})}
			</ul>
		</section>
	);
}
