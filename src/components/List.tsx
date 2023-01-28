import { PropsTask } from "../interfaces/props";
import { Card } from "./Card";


export function List({ task }: PropsTask): JSX.Element {
  return (
    <>
      <Card task={task} />
    </>
  );
}
