import shirt from "../assets/shirt/shirt_b-b-b1.jpg";

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 lg:px-8 h-[600px] flex justify-start">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-16 sm:py-20 lg:py-24 flex flex-col gap-10">
          <div className="relative rounded-full px-3 py-1 text-2xl leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Welcome !
          </div>
          <div className="flex gap-4">
            <div className="hidden sm:mb-8 sm:flex "></div>
            <div className="text-center w-[80%]">
              <h1 className="text-4xl font-semibold  text-white sm:text-6xl">
                T&nbsp;O&nbsp;I
                <br />
                Nurse Uniform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur iusto ratione, nemo eos ipsa voluptatem iure? Omnis
                magni quasi modi ipsum expedita. Quaerat autem vero nisi nulla
                asperiores, explicabo dolorum.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/login"
                  className="rounded-md bg-vallartaBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="w-[45%]">
              <img src={shirt} className=" rounded-lg" />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
