import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { useEffect } from 'react';
import { userData } from '../feature/auth.slice';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const token = sessionStorage.getItem('token');
    const dispatch: AppDispatch = useDispatch(); 
    useEffect(() => {
        const fetchData = async () => {
          if (token) { // Vérification si le token existe avant de faire l'appel
            try {
              await userData(token, dispatch); 
            } catch (error) {
              console.error('Une erreur s\'est produite lors de la récupération du profil :', error);
            }
          }
        };

        fetchData();
      }, [token, dispatch]);


    return (
        <div className='header'>
            <h1>Welcome back {user.firstName + " " + user.lastName}!</h1>
            <NavLink to="/profile" >
            <Button classe="edit-button" content ='Edit Name' />
            </NavLink>
        </div>
    );
};

export default Header;