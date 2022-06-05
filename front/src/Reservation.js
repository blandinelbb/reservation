import "./style/reservation.css";
import { useEffect, useState } from "react";
import { gql, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { Box, Button } from "@mui/material";
import { assertValidExecutionArguments } from "graphql/execution/execute";
import axios from "axios";

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
  const [mesReservations, setMesReservation] = useState();
  const [typeSport, setTypeSport] = useState();
  const [heure, setHeure] = useState();

  const tab = [0];
  const tab1 = [0];

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
            console.log(result.data.getSport[1].current);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getReservaton();
  }, []);

  const reserver = async (e) => {
    try {
      const res = await client
        .mutate({
          mutation: gql`
            mutation Mutation {
              reserver {
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
          console.log(result);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const envoieData = async (e) => {
    try {
      const res1 = await axios
        .post("http://localhost:3000/reservation", { heure, typeSport })
        .then((response) => {
          console.log("ojjS");
          if (typeSport === 0) {
            setTennis(response);
          } else if (typeSport === 1) {
            setJudo(response);
          } else if (typeSport === 2) {
            setBodyCombat(response);
          } else if (typeSport === 3) {
            setZumba(response);
          } else if (typeSport === 4) {
            setBoxe(response);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
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
            <label key={horaire}>
              <input
                type="radio"
                id="horaire"
                name="dispo"
                value={horaire}
                onClick={(e) => {
                  setHeure(e.target.value);
                }}
              />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map((index) => {
          if (tennis.current >= tennis.maxCurrent) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  reserver();
                  envoieData();
                  setTypeSport(0);
                }}
              >
                Réserver
              </Button>
            );
          }
        })}
        {tab.map((index) => {
          var estId = false;
          tennis.users.forEach((e) => {
            if ("b558ff34-b933-465b-a2a2-575eda3cf868" === e) estId = true;
          });
          if (!estId) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Annuler
              </Button>
            );
          } else {
            return (
              <Button key={index} variant="contained" id="button">
                Annuler
              </Button>
            );
          }
        })}
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
            <label key={horaire}>
              <input
                type="radio"
                id="horaire"
                name="dispo"
                value={horaire}
                onClick={(e) => {
                  setHeure(e.target.value);
                }}
              />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map((index) => {
          if (judo.current >= judo.maxCurrent) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  reserver();
                  envoieData();
                  setTypeSport(1);
                }}
              >
                Réserver
              </Button>
            );
          }
        })}
        {tab.map((index) => {
          var estId = false;
          judo.users.forEach((e) => {
            if ("b558ff34-b933-465b-a2a2-575eda3cf868" === e) estId = true;
          });
          if (!estId) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Annuler
              </Button>
            );
          } else {
            return (
              <Button key={index} variant="contained" id="button">
                Annuler
              </Button>
            );
          }
        })}
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
            <label key={horaire}>
              <input
                type="radio"
                id="horaire"
                name="dispo"
                value={horaire}
                onClick={(e) => {
                  setHeure(e.target.value);
                }}
              />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map((index) => {
          if (bodyCombat.current >= bodyCombat.maxCurrent) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  reserver();
                  envoieData();
                  setTypeSport(2);
                }}
              >
                Réserver
              </Button>
            );
          }
        })}
        {tab.map((index) => {
          var estId = false;
          bodyCombat.users.forEach((e) => {
            if ("b558ff34-b933-465b-a2a2-575eda3cf868" === e) estId = true;
          });
          if (!estId) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Annuler
              </Button>
            );
          } else {
            return (
              <Button key={index} variant="contained" id="button">
                Annuler
              </Button>
            );
          }
        })}
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
            <label key={horaire}>
              <input
                type="radio"
                id="horaire"
                name="dispo"
                value={horaire}
                onClick={(e) => {
                  setHeure(e.target.value);
                }}
              />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map((index) => {
          if (zumba.current >= zumba.maxCurrent) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  reserver();
                  envoieData();
                  setTypeSport(3);
                }}
              >
                Réserver
              </Button>
            );
          }
        })}
        {tab.map((index) => {
          var estId = false;
          zumba.users.forEach((e) => {
            if ("b558ff34-b933-465b-a2a2-575eda3cf868" === e) estId = true;
          });
          if (!estId) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Annuler
              </Button>
            );
          } else {
            return (
              <Button key={index} variant="contained" id="button">
                Annuler
              </Button>
            );
          }
        })}
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
            <label key={horaire}>
              <input
                type="radio"
                id="horaire"
                name="dispo"
                value={horaire}
                onClick={(e) => {
                  setHeure(e.target.value);
                }}
              />
              {horaire}
            </label>
          );
        })}
        <br />
        <br />
        {tab.map((index) => {
          if (boxe.current >= boxe.maxCurrent) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Réserver
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  reserver();
                  envoieData();
                  setTypeSport(4);
                }}
              >
                Réserver
              </Button>
            );
          }
        })}
        {tab.map((index) => {
          var estId = false;
          boxe.users.forEach((e) => {
            if ("b558ff34-b933-465b-a2a2-575eda3cf868" === e) estId = true;
          });
          if (!estId) {
            return (
              <Button key={index} variant="contained" id="button" disabled>
                Annuler
              </Button>
            );
          } else {
            return (
              <Button key={index} variant="contained" id="button">
                Annuler
              </Button>
            );
          }
        })}
      </Box>
    </div>
  );
}

export default Reservation;
