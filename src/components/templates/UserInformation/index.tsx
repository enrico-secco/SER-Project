import React from "react";
import {
  Bio,
  CardInfos,
  Container,
  Detail,
  Divider,
  Header,
  Name,
  Profile,
  Row,
} from "./styles";

interface IUserInformationProps {
  data: {
    name: string;
    email: string;
    phone: string;
    picture: string;
    bio: string;
    color: string;
  };
}

export const UserInformation = ({ data }: IUserInformationProps) => {
  return (
    <Container>
      <Header color={data.color}>
        <Profile src={data.picture} alt={data.name} />
      </Header>

      <CardInfos>
        <Row>
          <Name>{data.name}</Name>
          <Detail>{data.email}</Detail>
        </Row>
        <Detail>{data.phone}</Detail>
        <Divider />
        <Bio>Bio: </Bio>
        <Detail>{data.bio}</Detail>
      </CardInfos>
    </Container>
  );
};
