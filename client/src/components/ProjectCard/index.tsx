import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project.name}</h3>
      <p className="">{project.description}</p>
      <p className="">Start Date: {project.startDate}</p>
      <p className="">End Date: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
