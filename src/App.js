import { useState } from "react";
import Menu from "./pages/MenuPage";
import CartWidget from "./components/CartWidget";
import DarkThemeSwitcher from "./components/DarkThemeSwithcer";
import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import CartProvider from "./providers/CartProvider";



function App() {

  const [themeDark, setThemeDark] = useState(false);
  const setDarkTheme = (value) => {
    setThemeDark(value);
  }

  return (
    <div className={"" +
      (themeDark ? "dark bg-slate-950 min-h-screen text-white " : "")
    }>
      <div className="container mx-auto px-10 py-2">
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme}></DarkThemeSwitcher>
        <CartProvider>
          <CartWidget></CartWidget>
        </CartProvider>
        <MainMenu />
        <Outlet></Outlet>
      </div>
    </div>

  );
}

export default App;
