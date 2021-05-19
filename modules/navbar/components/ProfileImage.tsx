import { iconsSize, spacers } from "core/design";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const ProfileImageWrapper = styled.div`
  margin: auto 0;
  width: calc(${iconsSize.xl}px + (${spacers[0]}em * 2));
  height: calc(${iconsSize.xl}px + (${spacers[0]}em * 2));
  border: ${spacers[0]}em solid ${(props) => props.theme.colors.warning} !important;
  border-radius: 50%;
  overflow: clip;
  :hover {
    cursor: pointer;
  }
`;
export const ProfileImage: React.FC<{ image: string }> = (props) => {
  const router = useRouter();
  const askLogout = (): void => {
    const sure = confirm("Are you sure you want to logout?");
    if (sure) router.push("/logout");
  };
  return (
    <ProfileImageWrapper onClick={askLogout}>
      <Image
        alt="Profile picture"
        title="Click to logout"
        src={props.image}
        layout="fixed"
        width={iconsSize.xl}
        height={iconsSize.xl}
      />
    </ProfileImageWrapper>
  );
};
