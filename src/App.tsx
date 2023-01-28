import { Props } from "./interfaces/props";
import { tasks } from "./interfaces/task";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { useState } from "react";

export default function App({ title }: Props) {
  const [task, setTask] = useState<tasks[]>([
    {
      id: 1,
      title: "Learn react",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis nihil iusto atque ab enim aperiam saepe voluptas nisi perspiciatis. Distinctio, voluptatibus dolor obcaecati eveniet voluptates qui quaerat rerum expedita.",
      completed: true,
    },
  ]);
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar title="React & Typescript 💜" />
      <main>
        <List task={task} />
      </main>
    </div>
  );
}
