import { Props } from "../interfaces/props";
export function Navbar({ title }: Props): JSX.Element {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <h1 className="text-white">{title.toUpperCase()}</h1>
      </div>
    </nav>
  );
}
