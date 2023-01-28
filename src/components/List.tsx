import { PropsTask } from "../interfaces/props";
export function List({ task }: PropsTask): JSX.Element {
  return (
    <div>
      {task.map((task) => {
        return <h1>{task.title}</h1>;
      })}
    </div>
  );
}
