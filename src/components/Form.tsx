import { FormEvent, useState } from "react";
import { tasks } from "../interfaces/task";
import { ChangeType } from "../types/element";

interface Porps {
  addTask: (task: tasks) => void;
}
const initialState = {
  title: "",
  description: "",
};
export function Form({ addTask }: Porps): JSX.Element {
  const [ts, setTask] = useState(initialState);
  const handleInputChange = ({ target: { name, value } }: ChangeType) => {
    setTask({ ...ts, [name]: value });
  };
  const hanldeAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(ts);
    setTask(initialState);
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <form onSubmit={hanldeAddTask}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={ts.title}
        />

        <label htmlFor="Description">Description</label>
        <textarea
          placeholder="Write Description"
          name="description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          rows={3}
          onChange={handleInputChange}
          value={ts.description}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
