import { SearchBar } from "./SearchBar";
import { ProfileImage } from "./ProfileImage";
import { HomeButton } from "./HomeButton";
import { getUser } from "core/authorization";
import styled from "styled-components";
import { colors, spacers } from "core/design";

const NavBar = styled.div`
  display: flex;
  padding: ${spacers[3]}em;
  border-bottom: 1px solid ${colors.black.lighter};
`;

export function NavigationBar(props: { tags?: string[] }): JSX.Element {
  const user = getUser();
  return (
    <NavBar>
      <HomeButton />
      <SearchBar tags={props.tags} />
      {user && <ProfileImage image={user.pictureUrl} />}
    </NavBar>
  );
}
