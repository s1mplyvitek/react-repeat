import { Link } from "react-router-dom";

const MainMenu = () => {
    let menuItems = [
        { title: "Главная", link: "/" },
        { title: "О нас", link: "/about" },
        { title: "Отзывы", link: "/recall" },
        { title: "Про блюдо", link: "/oneitem" }
    ]

    return (
        <div className="flex p-5 gap-6 text-3xl justify-center">
            {menuItems.map((item) => (
                <Link to={item.link}>{item.title}</Link>
            ))}
        </div>
    );
};

export default MainMenu
