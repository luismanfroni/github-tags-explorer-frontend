import { NavigationBar } from "modules/navbar/components/NavigationBar";
import { RepositoriesList } from "modules/repository/components/RepositoriesList";
import { Button } from "shared/components/Button";
import { Loading } from "shared/components/Loading";
import Link from "next/link";
import styled from "styled-components";
import { spacers, breakpoints } from "core/design";
import { RepositoryDTO } from "modules/repository/RepositoryDTO";

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

export default function HomePage(props: {
  page: number;
  tags: string[];
  stars?: RepositoryDTO[];
  starsCount?: number;
}): JSX.Element {
  return (
    <>
      <NavigationBar tags={props.tags} />

      {(props.stars && (
        <>
          <RepositoriesList stars={props.stars} />
          <CenteredButtons>
            {props.page > 1 && (
              <Link href={`?page=${props.page - 1}`}>
                <Button>Previous page</Button>
              </Link>
            )}
            {props.starsCount && props.page < props.starsCount && (
              <Link href={`?page=${props.page + 1}`}>
                <Button>Next page</Button>
              </Link>
            )}
          </CenteredButtons>
        </>
      )) || <Loading />}
    </>
  );
}
