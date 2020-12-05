import { useState } from "react";
import Modal from "react-modal";
import fb from "firebase";
import firebase from "../../../firebase/firebase.utils";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export function Post() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const chooseFile = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const uploadFile = () => {
    const uploadTask = firebase.storage.ref(`files/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ...
        firebase.storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            // post file inside db
            firebase.firestore.collection("posts").add({
              timestamp: fb.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              fileUrl: url,
              userName: firebase.auth.currentUser.displayName,
            });
            setProgress(0);
            setCaption("");
            setFile(null);
          });
      }
    );
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        style={{ marginRight: "24px" }}
        onClick={openModal}
      >
        <path d="M368 272H144c-8.832 0-16-7.168-16-16s7.168-16 16-16h224c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0" />
        <path d="M256 384c-8.832 0-16-7.168-16-16V144c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16zm0 0" />
        <path d="M453.332 512H58.668C26.305 512 0 485.695 0 453.332V58.668C0 26.305 26.305 0 58.668 0h394.664C485.695 0 512 26.305 512 58.668v394.664C512 485.695 485.695 512 453.332 512zM58.668 32C43.968 32 32 43.969 32 58.668v394.664C32 468.032 43.969 480 58.668 480h394.664c14.7 0 26.668-11.969 26.668-26.668V58.668C480 43.968 468.031 32 453.332 32zm0 0" />
      </svg>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <progress value={progress} max="100" />
        <input
          type="text"
          placeholder="Enter a caption.."
          onChange={(event) => {
            setCaption(event.target.value);
          }}
          value={caption}
        />
        <input type="file" name="file" onChange={chooseFile} />
        <button onClick={uploadFile}>UPLOAD</button>
      </Modal>
    </div>
  );
}
