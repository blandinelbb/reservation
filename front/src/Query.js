import { gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
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

export default EXCHANGE_RATES;
