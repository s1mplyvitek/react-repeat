import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="">
            <h1>О нашем заведении</h1>
            <p>Самое лучшее кафе в городе!</p>

            <Link to="contacts">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Контакты
                </button>
            </Link>
        </div>
    );
};
export default AboutPage
