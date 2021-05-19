import styled from "styled-components";
import { RepositoryDTO } from "../RepositoryDTO";
import { PropsWithChildren } from "react";
import { H3, P } from "shared/components/Texts";
import Link from "next/link";
import { Badge } from "shared/components/Badge";
import { TagList } from "modules/tags/components/TagList";
import { spacers, shadows } from "core/design";

const RepoLI = styled.li`
  border: ${spacers[0]}em solid ${(props) => props.theme.colors.primary};
  box-shadow: ${shadows.md};
  margin: ${spacers[2]}em 0;
  border-radius: ${spacers[0]}em;
  padding: ${spacers[3]}em;
  width: 340px;
  transition: background 0.2s;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.cardBackground};
  }
`;

export function RepositoryListItem(props: PropsWithChildren<{ repo: RepositoryDTO }>): JSX.Element {
  return (
    <Link href={`/repo/${props.repo.owner}/${props.repo.name}`}>
      <RepoLI key={props.repo.owner + props.repo.name}>
        <H3>
          {props.repo.owner} / {props.repo.name}
        </H3>
        <P>{props.repo.description}</P>
        <TagList>
          {props.repo.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </TagList>
      </RepoLI>
    </Link>
  );
}
