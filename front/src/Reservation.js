import { gql, useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query getSport {
    id
    sport
    slot
    maxCurrent
    current
    users
  }
`;

function Reservation() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(EXCHANGE_RATES);
  return data.sports.map(({ s }) => (
    <div key={s.id}>
      <p>{s.id}</p>
    </div>
  ));
}

export default Reservation;
