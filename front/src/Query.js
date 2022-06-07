import { gql } from "@apollo/client";

const Query = gql`
  query {
    getSport {
      id
      sport
      slot
      maxCurrent
      current
      users
    }
  }
`;

export default Query;
