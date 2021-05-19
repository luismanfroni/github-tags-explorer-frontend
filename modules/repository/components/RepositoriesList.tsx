import styled from "styled-components";
import { spacers, breakpoints } from "core/design";
import { RepositoryListItem } from "./RepositoryListItem";
import { RepositoryDTO } from "../RepositoryDTO";
import Masonry from "react-masonry-css";

const ContainerStarredRepos = styled.div`
  overflow: auto;
  padding: ${spacers[3]}em;
  list-style-type: none;
  & .stars-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
    & .stars-masonry-grid-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export function RepositoriesList(props: { stars: RepositoryDTO[] }): JSX.Element {
  return (
    <ContainerStarredRepos>
      <Masonry
        className="stars-masonry-grid"
        columnClassName="stars-masonry-grid-column"
        breakpointCols={{
          default: 4,
          [breakpoints.xxl]: 3,
          [breakpoints.xl]: 2,
          [breakpoints.md]: 1
        }}
      >
        {props.stars &&
          props.stars.map((d) => <RepositoryListItem key={d.owner + "/" + d.name} repo={d} />)}
      </Masonry>
    </ContainerStarredRepos>
  );
}
