import { PropsTask } from "../interfaces/props";
import { Button } from "./Button";

export function Card({ task }: PropsTask): JSX.Element {
  return (
    <>
      {task.map((task, index) => {
        return (
          <div className="card col-md-5 pb-2" key={index}>
            <div className="card-title">
              <h2>{task.title}</h2>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
            </div>
            <div>
              <Button />
            </div>
          </div>
        );
      })}
    </>
  );
}
