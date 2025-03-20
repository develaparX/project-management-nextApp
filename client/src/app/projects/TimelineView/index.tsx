import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import { DisplayOption, ViewMode } from "gantt-task-react";
import React, { useMemo, useState } from "react";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskTypeItems = "task" | "milestone" | "project";

const TimelineView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US",
  });

  const ganttTask = useMemo(() => {
    tasks?.map((task) => ({
      start: new Date(task.startDate as string),
      end: new Date(task.dueDate as string),
      name: task.title,
      id: `Task-${task.id}`,
      type: "task" as "TaskType",
      progress: task.points ? (task.points / 10) * 100 : 0,
    }));
  });

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>An error occured while fetching tasks</div>;

  return <div>TimelineView</div>;
};

export default TimelineView;
