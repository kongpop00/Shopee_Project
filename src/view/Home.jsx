import Header from "../component/Header";
import Category from "../component/Category";
import Containershop from "../component/containershop";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center   ">
      <Header />
      <div className=" w-[100%] xl:max-w-7xl overflow-x-scroll ">
        <Category />
      </div>

      <Containershop />
    </div>
  );
};

export default Home;
