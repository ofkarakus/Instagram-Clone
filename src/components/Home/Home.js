import React, { useContext } from "react";
import { Context } from "../../App";

export function Home() {
  const { auth } = useContext(Context);

  return (
    <div>
      <button
        onClick={() => {
          auth
            .signOut()
            .then(() => {
              console.log("Signed Out");
            })
            .catch((err) => alert(err.message));
        }}
      >
        SIGNOUT
      </button>
    </div>
  );
}
