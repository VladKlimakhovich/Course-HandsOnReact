import { Project } from "./Project";
import React from "react";
import "./ProjectCard.css"

function formatDescription(description: string): string{
    return description.substring(0, 60) + "...";
}

interface ProjectCardProps{
    project: Project;
    onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps){
    const{project, onEdit}=props;
    const handleEditClick = (projectBeingEdited: Project) =>{
        onEdit(projectBeingEdited);
    }
    return (
        
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section>
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
            </section>
            
            
            <button 
                className="bordered"
                onClick={() => {
                    handleEditClick(project);
                }}
            >
                <span className="icon-edit"></span>
                Edit
            </button>
        </div>
    
    )
}

export default ProjectCard;