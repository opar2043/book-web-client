import img1 from "../../Assets/Screenshot_2.jpg"

const Banner = () => {

    return (
        <div className="w-full bg-[#fff] rounded-md relative">

            {/* header */}
            <header
                className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">

                <div className="w-full lg:w-[45%]">
                    <p>Hi there!</p>
                    <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
                        <span className="text-[#DC0155]">Coloring</span> Books for Kids and Adults</h1>
                    <p className="mt-2 text-[1rem]">This page offers the latest releases of books for adults, kids and teens, all types of books, starting with coloring books</p>
                </div>

                <div className="w-full lg:w-[55%]">
                    <img src='https://i.ibb.co/syHFhNy/image.png' alt="image" className=""/>
                </div>
            </header>



            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
        </div>
    );
};

export default Banner;
                    