"use client";

import Card from "@/components/card/Card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { moveCompleted, moveESQA, moveInProgress } from "@/lib/task";

const TaskManager = () => {
  const taskGroup = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const moveTask = (taskType, task) => {
    switch (taskType) {
      case "inprogress":
        dispatch(moveInProgress(task));
        break;
      case "esqa":
        dispatch(moveESQA(task));
        break;
      case "completed":
        dispatch(moveCompleted(task));
        break;
    }
  };
  return (
    <div className="container p-6">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-1">
        <div>
          <div className="mb-4 block p-6 max-w-sm bg-red-600 rounded-lg border border-gray-200">
            <h2>Todo</h2>
          </div>
          {taskGroup.todo.map((eachTask, key) => {
            return (
              <Card
                taskNo={eachTask}
                key={`todo-${key}`}
                onClick={() => {
                  moveTask("inprogress", eachTask);
                }}
                bgColor="bg-red-600"
              />
            );
          })}
        </div>
        <div>
          <div className="mb-4 block p-6 max-w-sm bg-yellow-600 rounded-lg border border-gray-200">
            <h2>In Progress</h2>
          </div>
          {taskGroup.inProgress.map((eachTask, key) => {
            return (
              <Card
                taskNo={eachTask}
                key={`inprogress-${key}`}
                onClick={() => {
                  moveTask("esqa", eachTask);
                }}
                bgColor="bg-yellow-600"
              />
            );
          })}
        </div>
        <div>
          <div className="mb-4 block p-6 max-w-sm bg-yellow-500 rounded-lg border border-gray-200">
            <h2>ESQA</h2>
          </div>
          {taskGroup.esqa.map((eachTask, key) => {
            return (
              <Card
                taskNo={eachTask}
                key={`esqa-${key}`}
                onClick={() => {
                  moveTask("completed", eachTask);
                }}
                bgColor="bg-yellow-500"
              />
            );
          })}
        </div>
        <div>
          <div className="mb-4 block p-6 max-w-sm bg-green-600 rounded-lg border border-gray-200">
            <h2>Completed</h2>
          </div>
          {taskGroup.completed.map((each, key) => {
            return <Card taskNo={each} key={`completed-${key}`} bgColor="bg-green-600"/>;
          })}
        </div>
      </div>
    </div>
  );
};
export default TaskManager;
