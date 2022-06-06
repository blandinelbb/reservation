import "./style/reservation.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { gql, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { Box, Button } from "@mui/material";

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
  const [mesReservations, setMesReservation] = useState([]);
  const [heure, setHeure] = useState();
  const [estSelectionner, setEstSelectionner] = useState(false);
  const [cookies, setCookie] = useCookies(["sport"]);

  const tab = [0];

  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    const getReservation = async (e) => {
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
          });
      } catch (e) {
        console.log(e);
      }
    };
    getReservation();
  }, []);

  const reserver = async (e) => {
    try {
      var type;
      if (e == 0) type = `reserverTennis`;
      else if (e == 1) type = `reserverJudo`;
      else if (e == 2) type = `reserverCombat`;
      else if (e == 3) type = `reserverZumba`;
      else if (e == 4) type = `reserverBoxe`;

      const res = await client
        .mutate({
          mutation: gql`
            mutation Mutation {
              ${type} {
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
  const annuler = async (e) => {
    try {
      var type;
      if (e == 0) type = `annulerTennis`;
      else if (e == 1) type = `annulerJudo`;
      else if (e == 2) type = `annulerCombat`;
      else if (e == 3) type = `annulererZumba`;
      else if (e == 4) type = `annulerBoxe`;
      const res = await client
        .mutate({
          mutation: gql`
            mutation Mutation {
              ${type} {
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

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  return !loading ? (
    <div>
      <hr></hr>
      <h3>Mes réservations</h3>
      <h4>{heure}</h4>
      <hr></hr>
      <Box
        sx={{
          width: 350,
          height: 350,
          backgroundColor: "#fcfbfa",
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
                  setEstSelectionner(true);
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
                  if (estSelectionner) {
                    reserver(0);
                    refreshPage();
                  } else alert("Sélectionné un horaire");
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
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  annuler(0);
                  refreshPage();
                }}
              >
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
          backgroundColor: "#fcfbfa",
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
                  setHeure([e.target.value]);
                  setEstSelectionner(true);
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
                  if (estSelectionner) {
                    reserver(1);
                    refreshPage();
                  } else alert("Sélectionné un horaire");
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
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  annuler(1);
                  refreshPage();
                }}
              >
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
          backgroundColor: "#fcfbfa",
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
                  setEstSelectionner(true);
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
                  if (estSelectionner) {
                    reserver(2);
                    refreshPage();
                  } else alert("Sélectionné un horaire");
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
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  annuler(2);
                  refreshPage();
                }}
              >
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
          backgroundColor: "#fcfbfa",
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
                  setEstSelectionner(true);
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
                  if (estSelectionner) {
                    reserver(3);
                    refreshPage();
                  } else alert("Sélectionné un horaire");
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
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  annuler(3);
                  refreshPage();
                }}
              >
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
          backgroundColor: "#fcfbfa",
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
                  setEstSelectionner(true);
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
                  if (estSelectionner) {
                    reserver(4);
                    refreshPage();
                  } else alert("Sélectionné un horaire");
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
              <Button
                key={index}
                variant="contained"
                id="button"
                onClick={(e) => {
                  annuler(4);
                  refreshPage();
                }}
              >
                Annuler
              </Button>
            );
          }
        })}
      </Box>
    </div>
  ) : (
    refreshPage()(<></>)
  );
}

export default Reservation;
