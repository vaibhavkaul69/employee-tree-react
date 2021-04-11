import React from "react";
import image from "../image.png";
import { getRandomColor } from "./getRandomColor";

export default function EmployeeList(props) {
	const { name, designation, team } = props;
	return (
		<li className="employee-list-item">
			<img src={image} alt="Employee Image" className="employee-image" />
			<div className="employee-data">
				<h3 className="employee-name">{name}</h3>
				<h5 className="employee-designation">
					{designation}
					<span
						style={{ background: getRandomColor() }}
						className="employee-team"
					>
						{team}
					</span>
				</h5>
			</div>
		</li>
	);
}
