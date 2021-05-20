import { NavigationBar } from "modules/navbar/components/NavigationBar";
import { RepositoriesList } from "modules/repository/components/RepositoriesList";
import { Button } from "shared/components/Button";
import { Loading } from "shared/components/Loading";
import Link from "next/link";
import styled from "styled-components";
import { spacers, breakpoints } from "core/design";
import { RepositoryDTO } from "modules/repository/RepositoryDTO";
import { H1 } from "shared/components/Texts";

const CenteredButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding-bottom: ${spacers[4]}em;
  @media (min-width: ${breakpoints.md}) {
    width: 50%;
  }
  ${Button} {
    margin: 0 ${spacers[4]}em;
    width: 340px;
  }
`;

export default function TagPage(props: {
  page: number;
  tagName: string;
  tags: string[];
  repos?: RepositoryDTO[];
  reposCount?: number;
}): JSX.Element {
  return (
    <>
      <NavigationBar tags={props.tags} />
      <H1>Searching for repositories with tag: {props.tagName}</H1>
      {(props.repos && (
        <>
          <RepositoriesList stars={props.repos} />
          <CenteredButtons>
            {props.page > 1 && (
              <Link
                href={{
                  pathname: "/tag/[tag]",
                  query: { page: props.page - 1, tag: props.tagName }
                }}
              >
                <Button>Previous page</Button>
              </Link>
            )}
            {props.page < (props.reposCount || 1) && (
              <Link
                href={{
                  pathname: "/tag/[tag]",
                  query: { page: props.page + 1, tag: props.tagName }
                }}
              >
                <Button>Next page</Button>
              </Link>
            )}
          </CenteredButtons>
        </>
      )) || <Loading />}
    </>
  );
}
