import { Link } from "react-router-dom";

const MainMenu = () => {
    let menuItems = [
        { title: "Главная", link: "/" },
        { title: "О нас", link: "/about" },
        { title: "Отзывы", link: "/recall" },
        { title: "Про блюдо", link: "/oneitem" }
    ]

    return (
        <div className="flex pb-5 gap-6 text-2xl justify-center">
            {menuItems.map((item) => (
                <Link to={item.link}>{item.title}</Link>
            ))}
        </div>
    );
};

export default MainMenu
