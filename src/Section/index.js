import React from "react";
import "./style.css";
import { SectionBody, Header, Title, List } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <SectionBody>
        <Header>
          <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <List>
            {body}
        </List>
      </SectionBody>
);

export default Section;