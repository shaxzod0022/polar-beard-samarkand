import appetizersData from "../locales/appetizers.json";
import { style } from "../utils/styles";
import { goryachie1, goryachie2 } from "../assets";
import { useSelector } from "react-redux";

const Appetizers = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className={`${style.flexCol} items-center sm:py-20 py-16 px-4 w-full`}>
      <h2 className="sm:text-[50px] text-[35px] text-blue-950 uppercase font-bold mb-4 text-center">
        {appetizersData.title[language]}
      </h2>
      <div className={`${style.flexCol} gap-8 md:w-[80%] w-full`}>
        {appetizersData.appetizers.map((salad, index) => (
          <div key={index} className={`${style.flexBetween} font-titleFont`}>
            <div>
              <p className="font-semibold md:leading-10 sm:leading-7 leading-5 visible md:text-[40px] sm:text-[30px] text-[22px]">
                {salad.name[language]}
              </p>
              <span className="md:text-[30px] md:leading-10 sm:leading-7 leading-5 sm:text-[23px] text-[17px] text-gray-600">
                {salad.description?.[language]}
              </span>
            </div>
            <div className="text-right ">
              <span className="block font-bold md:text-[40px] md:leading-10 sm:leading-7 leading-5 sm:text-[30px] text-[22px]">
                {salad.price}
              </span>
              <span className="md:text-[30px] sm:text-[23px] md:leading-10 sm:leading-7 leading-5 text-[17px] text-gray-500">
                {salad.valuta[language]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.flexArround} w-full my-6`}>
        <img className="sm:w-[45%] w-full" src={goryachie1} alt="salad" />
        <img className="sm:w-[45%] w-full" src={goryachie2} alt="salad" />
      </div>
    </div>
  );
};

export default Appetizers;
