import Topbar from "../topbar/topbar";
import type ChildrenProps from "../../types/children-props";

export default function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
