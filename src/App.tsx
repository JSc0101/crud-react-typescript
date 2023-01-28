import { Props } from "./interfaces/props";
export default function App({ title }: Props) {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
}
