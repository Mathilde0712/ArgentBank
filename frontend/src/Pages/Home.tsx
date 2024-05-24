import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import chatIcon from "../designs/img/icon-chat.webp"
import dollarIcon from "../designs/img/icon-money.webp"
import securityIcon from "../designs/img/icon-security.webp"
import userLogo from "../designs/img/circle-user-solid.svg"
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { userData } from "../feature/auth.slice";
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch: AppDispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);
  
    useEffect(() => {
      const fetchData = async () => {
        if (token) { // Vérification si le token existe avant de faire l'appel
          try {
            await userData(token, dispatch); // Utiliser directement storedToken
          } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du profil :', error);
          }
        }
      };
  
      fetchData();
    }, [token, dispatch]);
    return (
        <div>
            <Navigation textNav='Sign In' logoUser={userLogo} name={user.userName}/>
            <Banner />
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
            <Feature imgSrc={chatIcon} icon={"Chat icon"} text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} title={"You are our #1 priority"} />
            <Feature imgSrc={dollarIcon} icon={"Dollar icon"} text={"The more you save with us, the higher your interest rate will be!"} title={"More savings means higher rates"} />
            <Feature imgSrc={securityIcon} icon={"Security icon"} text={"We use top of the line encryption to make sure your data and money is always safe."} title={"Security you can trust"} />
            </section>
            <Footer />
        </div>
    );
};

export default Home;