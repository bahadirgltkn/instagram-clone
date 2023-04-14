import { useRef, useEffect } from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    //for reload page
    const imageEffect = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };

    imageEffect();
    let interval = setInterval(imageEffect, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[244px] h-[525px] rounded-lg  absolute top-[37px] right-[22px]"
          ref={ref}
        >
          <img
            className="w-[244px] h-[525px] absolute top-0 left-0 opacity-0 transition-opacity rounded-lg duration-1000 ease-linear  "
            src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
            alt=""
          />
          <img
            className="w-[244px] h-[525px] absolute top-0 left-0 opacity-0 transition-opacity rounded-lg duration-1000 ease-linear  "
            src="https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o"
            alt=""
          />
          <img
            className="w-[244px] h-[525px] absolute top-0 left-0 opacity-0 transition-opacity rounded-lg duration-1000 ease-linear  "
            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
            alt=""
          />
          <img
            className="w-[244px] h-[525px] absolute top-0 left-0 opacity-0 transition-opacity rounded-lg duration-1000 ease-linear  "
            src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
