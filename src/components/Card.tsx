import { PropsTask } from "../interfaces/props";

export function Card({ task }: PropsTask): JSX.Element {
  return (
    <div className="card">
      {task.map((task) => {
        return (
          <>
            <div className="card-header">
              <h2>{task.title}</h2>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <span>{task.title}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}
