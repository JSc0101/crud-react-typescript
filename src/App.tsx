import { Props } from "./interfaces/props";
import { tasks } from "./interfaces/task";
import {Navbar} from './components/Navbar'
import { useState } from "react";

export default function App({ title }: Props) {
  const [task, setTask] = useState<tasks[]>([
    {
      id: 1,
      title: "Learn react",
      description: "lear reacr",
      completed: true,
    },
  ]);
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
    <Navbar title="React & Typescript 💜"/>
      <div>
        {task.map((task) => {
          return <h1>{task.title}</h1>;
        })}
      </div>
    </div>
  );
}
