// import React, { useState, createContext, useContext, useEffect } from 'react';
// import classNames from "classnames";
// import { Outlet } from 'react-router-dom';
// const ThemeContext = createContext();
// const ThemeUpdateContext = createContext();

// export function useTheme(){
//     return useContext(ThemeContext);
// }

// export function useThemeUpdate(){
//   return useContext(ThemeUpdateContext);
// }


// const ThemeProvider = ({...props}) => {
  
//   const defaultTheme = {
//     main: "default", //other value can be passed "bordered"
//     sidebar: "dark", //other value can be passed "light,dark,theme"
//     sidebarCompact: false,
//     sidebarVisibility: false,
//     sidebarMobile: false,
//     header: "dark", //other value can be passed "light,dark,theme"
//     skin: "dark", //other value can be passed "dark"
//   }
//     const [theme, setTheme] = useState(defaultTheme);

//     const themeUpdate = {
//       uistyle : function(value){
//         setTheme({...theme, main : value})
//       },
//       sidebar : function(value){
//         setTheme({...theme, sidebar : value})
//       },
//       sidebarCompact : function(e){
//         setTheme({...theme, sidebarCompact : !theme.sidebarCompact})
//       },
//       sidebarVisibility : function(e){
//         setTheme({...theme, sidebarVisibility : !theme.sidebarVisibility})
//       },
//       sidebarHide : function(e){
//         setTheme({...theme, sidebarVisibility : false})
//       },
//       header : function(value){
//         setTheme({...theme, header : value})
//       },
//       skin : function(value){
//         setTheme({...theme, skin : value})
//       },
//       reset : function(e){
//         setTheme({...theme, main : defaultTheme.main, sidebar: defaultTheme.sidebar, header: defaultTheme.header, skin: defaultTheme.skin })
//       },
//     }

//     const bodyClass = classNames({
//       "nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme": true,
//     });


//   useEffect(() => {
//     const body = document.querySelector('body');
//     body.className = bodyClass;
//   }, []);

//   useEffect(() => {
//     const body = document.querySelector('body');
//     if(theme.main === "default"){
//       body.classList.add("ui-default")
//       body.classList.remove("ui-bordered")
//     }
//     if(theme.main === "bordered"){
//       body.classList.add(`ui-bordered`)
//       body.classList.remove("ui-default")
//     }
//     if(theme.skin === "dark"){
//       body.classList.add(`dark-mode`)
//     }else{
//       body.classList.remove("dark-mode")
//     }
//     if(theme.sidebarVisibility === true){
//       body.classList.add("nav-shown")
//     }else{
//       body.classList.remove("nav-shown")
//     }
//   }, [theme]);

//   useEffect(() => {
//     const handleMobileSidebar = () => {
//         if (window.innerWidth < 1200) {
//           setTheme({...theme, sidebarMobile : true})
//         } else {
//           setTheme({...theme, sidebarMobile : false, sidebarVisibility : false})
//         }
//     }

//     handleMobileSidebar();
//     window.addEventListener('resize', handleMobileSidebar);
//     return () => {
//      window.removeEventListener('resize', handleMobileSidebar);
//     };
//   }, []);

//   return (
//     <ThemeContext.Provider value={theme} >
//       <ThemeUpdateContext.Provider value={themeUpdate}>
//         <Outlet />
//       </ThemeUpdateContext.Provider>
//     </ThemeContext.Provider>
//   )
// }
// export default ThemeProvider;


import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Outlet } from "react-router-dom";

/* Contexts */
const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

/* Hooks */
export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

/* Default theme */
const defaultTheme = {
  main: "default", // default | bordered
  sidebar: "dark", // light | dark | theme
  sidebarCompact: false,
  sidebarVisibility: false,
  sidebarMobile: false,
  header: "dark", // light | dark | theme
  skin: "dark", // dark
};

const ThemeProvider = () => {
  const [theme, setTheme] = useState(defaultTheme);

  /* Theme update helpers */
  const themeUpdate = {
    uistyle: (value) =>
      setTheme((prev) => ({ ...prev, main: value })),

    sidebar: (value) =>
      setTheme((prev) => ({ ...prev, sidebar: value })),

    sidebarCompact: () =>
      setTheme((prev) => ({ ...prev, sidebarCompact: !prev.sidebarCompact })),

    sidebarVisibility: () =>
      setTheme((prev) => ({ ...prev, sidebarVisibility: !prev.sidebarVisibility })),

    sidebarHide: () =>
      setTheme((prev) => ({ ...prev, sidebarVisibility: false })),

    header: (value) =>
      setTheme((prev) => ({ ...prev, header: value })),

    skin: (value) =>
      setTheme((prev) => ({ ...prev, skin: value })),

    reset: () => setTheme(defaultTheme),
  };

  /* Base body classes */
  const bodyClass = classNames(
    "nk-body",
    "bg-lighter",
    "npc-default",
    "has-sidebar",
    "no-touch",
    "nk-nio-theme"
  );

  /* Set base body classes once */
  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  /* Update body classes on theme change */
  useEffect(() => {
    const body = document.body;

    body.classList.toggle("ui-default", theme.main === "default");
    body.classList.toggle("ui-bordered", theme.main === "bordered");

    body.classList.toggle("dark-mode", theme.skin === "dark");
    body.classList.toggle("nav-shown", theme.sidebarVisibility);
  }, [theme]);

  /* Handle mobile sidebar */
  useEffect(() => {
    const handleMobileSidebar = () => {
      setTheme((prev) => ({
        ...prev,
        sidebarMobile: window.innerWidth < 1200,
        sidebarVisibility:
          window.innerWidth < 1200 ? prev.sidebarVisibility : false,
      }));
    };

    handleMobileSidebar();
    window.addEventListener("resize", handleMobileSidebar);

    return () => window.removeEventListener("resize", handleMobileSidebar);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={themeUpdate}>
        <Outlet />
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

/* ✅ PropTypes */
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
