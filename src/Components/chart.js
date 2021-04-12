import React, { Fragment, useContext, useEffect } from "react";
//import data from "../data.json";
import { getRandomColor } from "./getRandomColor";
import image from "../image.png";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";

const Chart = () => {
	const { data } = useContext(EmployeeDataContext);

	return (
		<div className="org-tree">
			<Card data={data} />
		</div>
	);
};
const Card = ({ data }) => {
	console.log(data);
	return (
		<ul className="employee-tree-nodes">
			{data.map((item) => (
				<Fragment key={Math.random()}>
					<li>
						<div draggable className="card">
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
							</div>
						</div>
					</li>
					{item.children?.length && <Card data={item.children} />}
				</Fragment>
			))}
		</ul>
	);
};

export default Chart;
