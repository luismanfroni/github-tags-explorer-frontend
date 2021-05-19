import { NavigationBar } from "modules/navbar/components/NavigationBar";
import { RepositoryDTO } from "../RepositoryDTO";
import { RepositoryDisplay } from "./RepositoryDisplay";
export function RepositoryPage(props: {
  repository: RepositoryDTO;
  mutateTag: (action: "add" | "remove", tag: string) => void;
  onDeleteAll: () => void;
  tags: string[];
}): JSX.Element {
  return (
    <>
      <NavigationBar tags={props.tags} />
      <RepositoryDisplay {...props} />
    </>
  );
}
