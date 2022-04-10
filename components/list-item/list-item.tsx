import ListItemProps from "./list-item-types";

export default function ListItem({ name, i, experience }: ListItemProps) {
  return (
    <li>
      <div>{i}</div>
      <div>{name}</div>
      <div>{experience}</div>
    </li>
  );
}
