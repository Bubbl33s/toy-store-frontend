import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import {
  addCartItemDB,
  updateCartItemDB,
  deleteCartItemDB,
} from '../../services/cart';

// Crear el contexto
const CounterContext = createContext();

// Crear un Provider que envuelva a los componentes
export const CounterProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userCart, setUserCart] = useState({});
  const [userAdm, setUserAdm] = useState('');
  const [token, setToken] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    () => localStorage.getItem('AdminLogueado') !== null,
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    () => localStorage.getItem('currentUserEmail') !== null,
  );

  const [adminToken, setAdminToken] = useState(
    localStorage.getItem('adminToken') || '',
  );

  // Cargar el carrito desde el localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('Cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(
        parsedCart.map((item) => ({ ...item, id: Number(item.id) })),
      );
    }
  }, []);

  // Funciones de login/logout
  const loginAdmin = (token) => {
    setAdminToken(token);
    setIsAdminLoggedIn(true);
    localStorage.setItem('AdminLogueado', 'true');
    localStorage.setItem('adminToken', token);
  };

  const logoutAdmin = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('AdminLogueado');
    setIsAdminLoggedIn(false);
    setAdminToken('');
  };

  const loginUser = (email, id) => {
    const user = { email, id };
    setUser(user);
    setIsUserLoggedIn(true);
    localStorage.setItem('currentUserEmail', email);
    localStorage.setItem('currentUserId', id); // Asegúrate de guardar el ID también
  };

  const logoutUser = () => {
    localStorage.removeItem('currentUserEmail');
    setIsUserLoggedIn(false);
  };

  const updateCartItem = async (item, quantity) => {
    console.log('ingreso al pud');
    try {
      let response;
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: Math.max(1, quantity) };
        }
        return item;
      });
      response = await updateCartItemDB(item, quantity, token);

      updateLocalCart(updatedCart);
    } catch (error) {
      console.error('Error al actualizar un item:', error);
      Swal.fire(
        'Error',
        error.response?.data?.details[0]?.message ||
          'Ocurrió un error inesperado.',
        'error',
      );
    }
  };

  const deleteCartItem = async (item) => {
    try {
      console.log('item');
      console.log(item);
      let response;
      const updatedCart = cartItems.filter(
        (cartItem) => cartItem.id !== item.id,
      );
      console.log('updatedCart');
      console.log(updatedCart);
      response = await deleteCartItemDB(item, token);
      updateLocalCart(updatedCart);
    } catch (error) {
      console.error('Error al eliminar un item:', error);
      Swal.fire(
        'Error',
        error.response?.data?.details[0]?.message ||
          'Ocurrió un error inesperado.',
        'error',
      );
    }
  };

  const addCartItem = async (item) => {
    console.log('addCartItem');
    console.log(item);
    try {
      let response;
      response = await addCartItemDB(userCart, item[item.length - 1], token);
      item[item.length - 1].idItemCart = response.id;
      updateLocalCart(item);
    } catch (error) {
      console.error('Error al agregar un item:', error);
      Swal.fire(
        'Error',
        error.response?.data?.details[0]?.message ||
          'Ocurrió un error inesperado.',
        'error',
      );
    }
  };

  // falta arreglar
  const updateLocalCart = (updatedCart) => {
    console.log('updateLocalCart');
    console.log(updatedCart);
    setCartItems(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
  };

  const store = useMemo(
    () => ({
      user,
      userAdm,
      cartItems,
      isAdminLoggedIn,
      isUserLoggedIn,
      adminToken,
      setUser,
      setUserAdm,
      setCartItems,
      loginAdmin,
      logoutAdmin,
      loginUser,
      logoutUser,
      setToken,
      updateCartItem,
      deleteCartItem,
      addCartItem,
      updateLocalCart,
      setUserCart,
    }),
    [user, userAdm, cartItems, isAdminLoggedIn, isUserLoggedIn, adminToken],
  );

  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
};

// CustomHook - Consumer
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter debe ser usado dentro de un CounterProvider');
  }
  return context;
};

// Validación de PropTypes
CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporta solo el CounterProvider
export default CounterProvider;
