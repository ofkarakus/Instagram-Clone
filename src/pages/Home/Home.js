import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { PostCard, StatusBar } from "../../components/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        {/* <StatusBar /> */}
        <Grid container spacing={2} className={classes.gridContainer}>
          <PostCard />
        </Grid>
      </div>
      <div></div>
    </Container>
  );
}
