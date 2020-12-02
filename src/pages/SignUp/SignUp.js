import { TextButton, Instagram, SignUpForm, ContainedButton } from "../../components/index";
import Facebook from "@material-ui/icons/Facebook";
import "./SignUp.style.scss";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="wrapper">
      <div className="container">
      <div className="container__login">
        <Instagram width={240} margin='15px 0px' />
        <p className="container__login__text">
          Sign up to see photos and videos from your friends.
        </p>
        <ContainedButton
          startIcon={<Facebook />}
          backgroundColor="rgb(0,149,246)"
          text="Log in with Facebook"
        />

        <div className="container__login__or">
          <p className="container__login__or__line"></p>
          <p className="container__login__or__text">OR</p>
          <p className="container__login__or__line"></p>
        </div>
        <SignUpForm />
        <p className="container__login__terms">
          By signing up, you agree to our Terms. Learn how we collect, use and
          share your data in our Data Policy and how we use cookies and similar
          technology in our Cookies Policy.
        </p>
      </div>
      <div className="container__signup">
        <p className="container__signup__text">Have an account?</p>
        <Link style={{ textDecoration: "none" }} to="/">
          <TextButton
            btnText={"Log in"}
            color={"rgb(0,162,248)"}
            fontWeight={"bold"}
          />
        </Link>
      </div>
      <p className="container__getApp">Get the app.</p>
      <div className="container__stores">
        <a
          href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          target="_blank"
        >
          <img
            src={appstore}
            alt="appstore"
            className="container__stores__appstore"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF0A3A1C1-E816-491D-AC3B-3A41F95A7C0C%26utm_content%3Dlo%26utm_medium%3Dbadge"
          target="_blank"
        >
          <img
            src={playstore}
            alt="playstore"
            className="container__stores__playstore"
          />
        </a>
      </div>
      </div>
      <p className="footer">© 2020 Instagram from Facebook</p>
    </div>
  );
}
