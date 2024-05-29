import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import chatIcon from "../designs/img/icon-chat.webp";
import dollarIcon from "../designs/img/icon-money.webp";
import securityIcon from "../designs/img/icon-security.webp";
import userLogo from "../designs/img/circle-user-solid.svg";

const Home = () => {
  return (
    <div>
      <Navigation textNav="Sign In" logoUser={userLogo} />
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          imgSrc={chatIcon}
          icon={"Chat icon"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
          title={"You are our #1 priority"}
        />
        <Feature
          imgSrc={dollarIcon}
          icon={"Dollar icon"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
          title={"More savings means higher rates"}
        />
        <Feature
          imgSrc={securityIcon}
          icon={"Security icon"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
          title={"Security you can trust"}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
