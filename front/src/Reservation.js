import "./style/reservation.css";
import { useEffect, useState } from "react";
import { gql, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { Autocomplete, TextField, Box, Button } from "@mui/material";

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

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function Reservation() {
  const [tennis, setTennis] = useState();
  const [judo, setJudo] = useState();
  const [bodyCombat, setBodyCombat] = useState();
  const [zumba, setZumba] = useState();
  const [boxe, setBoxe] = useState();

  const tab = [0];

  useEffect(() => {
    const getReservaton = async (e) => {
      try {
        const res = await client
          .query({
            query: gql`
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
            `,
          })
          .then((result) => {
            setTennis(result.data.getSport[0]);
            setJudo(result.data.getSport[1]);
            setBodyCombat(result.data.getSport[2]);
            setZumba(result.data.getSport[3]);
            setBoxe(result.data.getSport[4]);
            console.log(tennis.current);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getReservaton();
  }, []);

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error : {error.message}</p>;
  /*  {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
      {data.setSport.map(({ id, sport }) => (
        <div key={id}>
          <p>
            {id}: {sport}
          </p>
        </div>
      ))}
      {exchange.map((res, index) => {
        return <p key={index}>{res}</p>;
      })}*/

  return (
    <div>
      <hr></hr>
      <h3>Mes réservations</h3>
      <hr></hr>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#7caade",
          display: "inline-block",
          margin: "35px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Tennis</h3>
        <img id="image" src="tennis.jpg" />
        {tennis.slot.map((horaire) => {
          return (
            <label>
              <input type="radio" id="horaire" name="dispo" />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map(() => {
          if (tennis.current >= tennis.maxCurrent) {
            return (
              <Button variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button variant="contained" id="button">
                Réserver
              </Button>
            );
          }
        })}
        <Button variant="contained" id="button">
          Annuler
        </Button>
      </Box>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#7caade",
          display: "inline-block",
          margin: "35px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Judo</h3>
        <img id="image" src="judo.jpg" />
        {judo.slot.map((horaire) => {
          return (
            <label>
              <input type="radio" id="horaire" name="dispo" />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        <Button variant="contained" id="button">
          Réserver
        </Button>
        <Button variant="contained" id="button">
          Annuler
        </Button>
      </Box>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#7caade",
          display: "inline-block",
          margin: "35px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Body Combat</h3>
        <img id="image" src="body_combat.jpg" />
        {bodyCombat.slot.map((horaire) => {
          return (
            <label>
              <input type="radio" id="horaire" name="dispo" />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        <Button variant="contained" id="button">
          Réserver
        </Button>
        <Button variant="contained" id="button">
          Annuler
        </Button>
      </Box>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#7caade",
          display: "inline-block",
          margin: "35px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Zumba</h3>
        <img id="image" src="zumba.jpg" />
        {zumba.slot.map((horaire) => {
          return (
            <label>
              <input type="radio" id="horaire" name="dispo" />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        <Button variant="contained" id="button">
          Réserver
        </Button>
        <Button variant="contained" id="button">
          Annuler
        </Button>
      </Box>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#7caade",
          display: "inline-block",
          margin: "35px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Savate Boxe Française</h3>
        <img id="image" src="boxe.jpg" />
        {boxe.slot.map((horaire) => {
          return (
            <label>
              <input type="radio" id="horaire" name="dispo" />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        <Button variant="contained" id="button">
          Réserver
        </Button>
        <Button variant="contained" id="button">
          Annuler
        </Button>
      </Box>
    </div>
  );
}

export default Reservation;
