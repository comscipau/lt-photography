import { categoryLinks } from "./constants/gDrive";

function App() {
  return (
    <main>
      <div className="font-alcubierre">
        <p className="text-3xl lg:text-5xl text-center pt-4 pb-4 lg:pb-0">
          LEMON TEAPOT <br /> PHOTOGRAPHY
        </p>
        <ul className="hidden lg:flex justify-around tracking-widest text-lg mt-10 mb-5">
          <li className="hover:cursor-pointer">PORTFOLIO</li>
          <li className="hover:cursor-pointer">ABOUT ME</li>
          <li className="hover:cursor-pointer">CONTACT</li>
        </ul>
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col gap-4 py-10 font-alcubierre bg-[#FDF7FA]">
        {categoryLinks.map((data, index) => (
          <div
            className="h-[500px] w-[300px] bg-slate-400 hover:cursor-pointer"
            key={index}
            // onClick={goToFood}
          >
            <div className="w-full h-[70%] bg-slate-600 overflow-clip">
              <img
                src={data.link}
                alt={data.name}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 duration-200"
              />
            </div>
            <div className="border-[1px] border-black bg-white w-fit mx-auto -mt-6 relative z-10">
              <p className="font-bold text-center py-3 px-5 tracking-wider">
                {data.name}
              </p>
            </div>
            <p className="text-center mt-3 font-spaceGrotesk px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              commodi! Eligendi obcaecati delectus repudiandae.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
