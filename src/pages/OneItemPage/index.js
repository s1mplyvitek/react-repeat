import { useParams } from "react-router-dom";
import dish from "../../fakeData/menu";

const OneItemPage = () => {
    const { id } = useParams();
    let oneItem = dish.find((item) => item.id == 1);
    return (

        <div>Про Позы.
            <h1>{oneItem.name}</h1>
            <img src={oneItem.image}></img>
            <p className="text-xl text-left pr-10 mr-20">Буузы или позы — национальное бурятское и монгольское блюдо. Буквально — «мясо, завернутое в тесто». Лепят буузы круглыми, с отверстием наверху, в идеале делая 33 защипа. Начинка обычно — мясо и репчатый лук. Есть их нужно руками. Обязательно сначала надкусить, чтобы выпить горячий сок, запрокинув голову.</p>
        </div>
    );
};

export default OneItemPage
