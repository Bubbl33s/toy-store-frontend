import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useEffect, useState, useRef } from 'react';
import { Cart3, Person } from 'react-bootstrap-icons';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.includes('/admin');
  const isLoggedIn = localStorage.getItem('currentUserEmail') !== null;

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('AdminLogueado');
    navigate('/');
  };

  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú de hamburguesa
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar estado del menú
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alternar estado del dropdown
  };

  useEffect(() => {
    // Cerrar menú al cambiar de página
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Cerrar dropdown al cambiar de página
  }, [location]);

  // Ocultar la nav si se hace click fuera de ella o en el botón de menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        event.target.name !== 'menu-button'
      ) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false); // Cerrar dropdown
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-3 md:p-3 lg:p-4">
        <div className="-mb-1 lg:w-72">
          <Link
            to={
              localStorage.getItem('AdminLogueado') ? '/admin/dashboard' : '/'
            }
          >
            <img src="/Logo.png" alt="Juguetitos" className="w-36" />
          </Link>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            name="menu-button"
          >
            ☰
          </button>
        </div>
        <div
          className={`items-center ${!isMenuOpen && `hidden`} justify-between w-full md:w-auto md:flex-grow md:flex md:order-1`}
          id="navbar-sticky"
          ref={navRef}
        >
          {!isAdminPage ? (
            <ul className="flex flex-col p-2 md:p-0 mt-2 mb-3 font-medium text-sm border border-gray-100 rounded-lg bg-gray-50 md:space-x-0 mx-auto rtl:space-x-reverse md:flex-row md:my-0 md:border-0 md:bg-white lg:text-base">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/promotions"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                >
                  Promociones
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                >
                  Categorías
                </Link>
              </li>
            </ul>
          ) : (
            <div className="ml-20">
              {' '}
              {/* Ajusta el margen izquierdo según sea necesario */}
              <ul className="flex flex-col md:flex-row gap-2 lg:gap-32 p-2 md:p-0 mt-2 mb-3 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                    >
                      Modificar
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <ul className="flex flex-col">
                          <li>
                            <Link
                              to="/admin/dashboard/categories"
                              className="block py-2 px-3 text-gray-900 hover:bg-blue-100 transition-colors"
                            >
                              Categoría
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/dashboard/descuento"
                              className="block py-2 px-3 text-gray-900 hover:bg-blue-100 transition-colors"
                            >
                              Descuentos
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/dashboard/marca"
                              className="block py-2 px-3 text-gray-900 hover:bg-blue-100 transition-colors"
                            >
                              Marca
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/dashboard/material"
                              className="block py-2 px-3 text-gray-900 hover:bg-blue-100 transition-colors"
                            >
                              Material
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/dashboard/products"
                              className="block py-2 px-3 text-gray-900 hover:bg-blue-100 transition-colors"
                            >
                              Productos
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    to="/admin/dashboard/reportes"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                  >
                    Reporte Ventas
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          )}
          {!isAdminPage && (
            <div className="flex justify-between items-center md:w-60 lg:w-72 gap-2 w-full">
              <div className="flex-grow">
                <Searchbar />
              </div>
              <Link to={isLoggedIn ? '/perfil' : '/login'}>
                <Person
                  color="black"
                  className="cursor-pointer text-2xl lg:text-[30px]"
                />
              </Link>
              <Link to="/cart">
                <Cart3
                  color="black"
                  className="cursor-pointer text-xl lg:text-[26px]"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
