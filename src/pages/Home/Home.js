import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { PostCard, StatusBar } from "../../components/";
import firebase from "../../firebase/firebase.utils";

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
  const [posts, setPosts] = useState();

  const fetchPosts = () => {
    const doc = firebase.firestore.collection("posts");
    doc.onSnapshot(
      (snapShot) => {
        setPosts(snapShot.docs.map((doc) => doc.data()));
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  };

  useEffect(fetchPosts, []);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        {/* <StatusBar /> */}
        <Grid container spacing={8} className={classes.gridContainer}>
          {posts?.map((post, index) => (
            <Grid key={index} item xs={12}>
              <PostCard
                userName={post.userName}
                caption={post.caption}
                fileUrl={post.fileUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div></div>
    </Container>
  );
}
