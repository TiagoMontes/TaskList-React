import React from "react";
import { CgClose, CgInfo } from "react-icons/cg"; //Lib de icone
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory();

	const handleTaskDetailsClick = () => { //Navegaremos para a task.title
		history.push(`/${task.title}`);
	};

	return (
		<div
			className="task-container"
			style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}} //Condicional para marcar a task
		>
			<div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>

			<div className="buttons-container">
				<button // Botão de remoção com ícone em lib
					className="remove-task-button"
					onClick={() => handleTaskDeletion(task.id)}
				>
					<CgClose />
				</button>
				<button //Botão de detalhes com ícone em Lib
					className="see-task-details-button"
					onClick={handleTaskDetailsClick}
				>
					<CgInfo /> 
				</button>
			</div>
		</div>
	);
};

export default Task;
