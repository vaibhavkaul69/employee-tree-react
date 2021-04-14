import React, { useContext } from "react";
//import data from "../data.json";
import { getRandomColor } from "./getRandomColor";
import image from "../image.png";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";

const EmployeeChart = () => {
	const { data } = useContext(EmployeeDataContext);

	return (
		<div className="org-tree">
			<Card data={data} />
		</div>
	);
};

const Card = (props) => {
	return (
		<div className={props.name ? props.name : ""}>
			{props.data.map((item) => {
				//console.log(item);
				return (
					<React.Fragment>
						<span>
							<div
								draggable
								key={Math.random() * 1000}
								className="card"
								style={{ border: `5px solid ${getRandomColor()}` }}
							>
								<div className="image">
									<img
										src={image}
										alt="Profile"
										style={{ borderColor: getRandomColor() }}
									/>
								</div>
								<div className="card-body">
									<h4>{item.name}</h4>
									<p>{item.designation}</p>
									<button
										className="team-btn"
										style={{ background: getRandomColor() }}
									>
										{item.team}
									</button>
								</div>
							</div>
						</span>
						{item.children ? <Card data={item.children} name="child" /> : null}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default EmployeeChart;
