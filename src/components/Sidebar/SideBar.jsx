import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "TECHLOGO",
    icon: "/assets/img/techlogo.svg",
    classname: "img-route",
  },
  {
    path: "/dashbord",
    name: "Dashboard",
    // <FontAwesomeIcon icon="fa-brands fa-react" />
    icon: <FaHome />,
  },
  {
    path: "/invoices",
    name: "Invoices",
    icon: <FaUser />,
  },

  {
    path: "/management",
    name: "Management",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "/management/devices",
        name: "Devices",
        // icon: <MdMessage />,
      },
      {
        path: "/management/user-role",
        name: "Users & Roles",
        // icon: <FaLock />,
      },
    ],
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <BsCartCheck />,
  },

  {
    path: "/tools",
    name: "Tools",
    icon: <AiFillHeart />,
  },
  {
    path: "/help-center",
    name: "Help Center",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  let renderWhiteLine = false;

  if (
    routes.name === "TECHLOGO" ||
    routes.name === "Dashboard" ||
    routes.name === "Invoices" ||
    routes.name === "Management" ||
    routes.name === "Billing" ||
    routes.name === "Help Center"
  ) {
    renderWhiteLine = true;
  }

  const isActive = routes.subRoutes
    ? routes.subRoutes.some((subRoute) => subRoutes.path === location.pathname)
    : routes.path === location.pathname && routes.name !== "TECHLOGO";

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            borderBottomRightRadius: isOpen ? "12px" : "12px",
            borderTopRightRadius: isOpen ? "12px" : "12px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
              {isOpen && (
                <motion.img
                  src="/assets/img/logoSideBar.svg"
                  alt=""
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                />
              )}
            </AnimatePresence>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }
              let renderWhiteLine = false;

              if (
                route.name === "TECHLOGO" ||
                route.name === "Invoices" ||
                route.name === "Management" ||
                route.name === "Tools" ||
                route.name === "Help Center"
              ) {
                renderWhiteLine = true;
              }

              return (
                <>
                  <NavLink
                    to={route.path}
                    key={index}
                    className={`link ${
                      route.name === "TECHLOGO" ? "white-background" : ""
                    } ${
                      isActive && route.name !== "TECHLOGO"
                        ? "active-route-parent"
                        : ""
                    }`}
                    activeClassName="active-route"
                  >
                    <div className="icon">
                      {route.icon && typeof route.icon === "string" ? (
                        <img
                          src={route.icon}
                          alt={route.name}
                          className={route.classname}
                        />
                      ) : (
                        route.icon
                      )}
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name === "TECHLOGO" ? (
                            <>
                              <span style={{ fontWeight: "bold" }} className="active-tech">TECH</span>
                              <span className="active-tech">LOGO</span>
                            </>
                          ) : (
                            route.name
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                  {renderWhiteLine && <div className="white-line"></div>}
                </>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
