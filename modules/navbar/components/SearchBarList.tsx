import styled from "styled-components";
import { breakpoints, colors, spacers } from "core/design";
import Link from "next/link";

const SearchBarItemComponent = styled.div`
  padding: ${spacers[1]}em;
  text-transform: uppercase;
  :hover {
    background: ${colors.grey.lighter};
    cursor: pointer;
  }
`;
const SearchBarItem: React.FC<{ tag?: string }> = ({ tag }) => {
  const link = "/tag/" + tag;
  return (
    <Link href={link}>
      <a>
        <SearchBarItemComponent>{tag}</SearchBarItemComponent>
      </a>
    </Link>
  );
};

const SearchBarListComponent = styled.div`
  position: absolute;
  margin-top: 38px;
  padding: ${spacers[1]}em;
  background: ${colors.grey.darker}dd;
  & a {
    text-decoration: none;
  }
  border-radius: 0 0 0.5em 0.5em;
  width: calc(100% - (${spacers[3]}em * 4) - 48px - 40px);
  @media (min-width: ${breakpoints.xl}) {
    width: calc(50% - 1em);
  }
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  opacity: 1;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  &.fade-in {
    animation-duration: 0.05s;
    animation-name: fade-in;
  }
  &.fade-out {
    animation-duration: 0.15s;
    animation-name: fade-out;
  }
`;
export const SearchBarList: React.FC<{ fade?: "fade-in" | "fade-out"; tags?: string[] }> = ({
  tags,
  fade
}): JSX.Element =>
  (tags && tags.length > 0 && (
    <SearchBarListComponent className={fade}>
      {tags?.slice(0, 5).map((tag) => (
        <SearchBarItem tag={tag} key={tag} />
      ))}
    </SearchBarListComponent>
  )) || <></>;
