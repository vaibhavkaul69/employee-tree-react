import React, { useContext, useEffect, useState } from "react";
//import data from "../data.json";
import { getRandomColor } from "./getRandomColor";
import image from "../image.png";
import { EmployeeDataContext } from "../Context/EmployeeDataContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const EmployeeChart = () => {
	const { data, setNewData } = useContext(EmployeeDataContext);

	function handleOnDragEnd(result) {
		if (!result.destination) return;

		const items = Array.from(data);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setNewData(items);
	}
	return (
		<div className="org-tree">
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="data">
					{(provided) => (
						<ul
							className="characters"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{data.map((item, index) => {
								return (
									<Draggable
										key={item.id}
										draggableId={item.id.toString()}
										index={index}
									>
										{(provided) => (
											<li
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<div className="characters-thumb">
													<img src={image} alt={`${item.title} Thumb`} />
												</div>
												<p className="employee-name">{item.title}</p>
												<p className="employee-designation">{item.subtitle}</p>
												<span
													style={{ background: getRandomColor() }}
													className="employee-team"
												>
													{item.team}
												</span>
											</li>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default EmployeeChart;
