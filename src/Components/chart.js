import React, { Fragment } from "react";
import data from "../data.json";
import { getRandomColor } from "./getRandomColor";
import image from "../image.png";

const Card = (props) => {
	const levelColor = getRandomColor();
	console.log(levelColor);

	return (
		<ul>
			{props.data.map((item) => (
				<Fragment key={item.name}>
					<li>
						<div draggable className="card">
							<div className="image">
								<img
									src={image}
									alt="Profile"
									style={{ borderColor: levelColor }}
								/>
							</div>
							<div className="card-body">
								<h4>{item.name}</h4>
								<p>Dummy paragraph...</p>
							</div>
						</div>
						{item.children?.length && <Card data={item.children} />}
					</li>
				</Fragment>
			))}
		</ul>
	);
};

const Chart = () => {
	return (
		<div className="org-tree">
			<Card data={data} />
		</div>
	);
};

export default Chart;
