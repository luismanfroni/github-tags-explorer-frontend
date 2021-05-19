import styled from "styled-components";
import { spacers, breakpoints } from "core/design";
import { SearchBarList } from "./SearchBarList";
import { ChangeEventHandler, useState } from "react";
import { Input } from "shared/components/Input";

const SearchBarComponent = styled.div`
  margin: auto ${spacers[3]}em;
  width: 100%;
  display: flex;
  ${Input} {
    width: 100%;
    text-transform: uppercase;
  }
  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
    margin: auto;
  }
`;

export function SearchBar(props: { tags?: string[] }): JSX.Element {
  const [tagFilter, setFilter] = useState<string | null>(null);
  const [showBar, setShowBar] = useState(false);
  const [fade, setFade] = useState(false);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const filterTags: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.toUpperCase();
    setFilter(value);
    if (value && props.tags) {
      setFilteredTags(props.tags.filter((tag) => tag.startsWith(value)));
    }
  };
  const onBlur = (): void => {
    setFade(false);
    setTimeout(() => setShowBar(false), 150);
  };
  const onFocus = (): void => {
    setFade(true);
    setTimeout(() => setShowBar(true), 50);
  };

  return (
    <SearchBarComponent onFocus={onFocus} onBlur={onBlur}>
      <Input placeholder="Search by Tag" onChange={filterTags} />
      {showBar && tagFilter && (
        <SearchBarList fade={fade ? "fade-in" : "fade-out"} tags={filteredTags} />
      )}
    </SearchBarComponent>
  );
}
