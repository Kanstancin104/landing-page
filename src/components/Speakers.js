import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import axios from "axios";

function Speakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://pro.alphadevteam.com/api/tz/speakers").then(
      (result) => {
        setIsLoaded(true);
        setItems(result.data.response);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box
        mt={{
          xs: 8.2,
          sm: 17.2,
          md: 27.2,
          lg: 37.2,
          xl: 47.2,
        }}
        mb={{
          xs: 6.6,
          sm: 11.6,
          md: 21.6,
          lg: 31.6,
          xl: 41.6,
        }}
      >
        <Typography
          id="speakers"
          variant="h2"
          mb={{
            xs: 4,
            sm: 4,
            md: 5,
            lg: 6,
            xl: 7,
          }}
        >
          Спикеры нашего форума
        </Typography>

        <Grid
          columns={{ xs: 1, sm: 2, md: 3 }}
          container
          columnSpacing={3}
          rowSpacing={4}
        >
          {items.map((item, i) => (
            <Grid xs={1} sm={1} md={1} key={i} item>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                }}
              >
                <CardMedia
                  component="img"
                  position="absolute"
                  image={item.photo_url}
                  alt={item.name}
                />
                <CardContent
                  sx={{
                    padding: 0,
                    ":last-child": { padding: 0 },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    color="secondary"
                    sx={{
                      marginTop: 3.5,
                      marginBottom: 1,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Divider
                    variant="inset"
                    sx={{
                      marginLeft: 0,
                      marginRight: 8.7,
                      borderBottomWidth: "3px",
                      borderColor: "#534878",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      marginTop: 1,
                      marginBottom: 1.5,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Link
                    color="secondary"
                    variant="link"
                    sx={{
                      opacity: "50%",
                    }}
                  >
                    Подробнее
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Speakers;
