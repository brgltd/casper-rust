import IndexData from "../../types/index-data";

export default function ListItem({ title, id, experience }: IndexData) {
  return (
    <li>
      <div>{id}</div>
      <div>{title}</div>
      <div>{experience}</div>
    </li>
  );
}
