import firebase from "../../firebase/firebase.utils";

export function Home() {
  return (
    <div>
      <button onClick={() => firebase.logOut()}>SIGNOUT</button>
    </div>
  );
}
