import Image from "next/image";

function Register() {
  return (
    <>
      <div className="radialgradient flex justify-center">
        <div className="mx-8 mt-28 flex w-4/5 flex-col  rounded-lg bg-white/15  sm:w-2/3 lg:w-1/2">
          <h2 className="mt-8 flex justify-center text-2xl sm:m-4 sm:mt-10 sm:text-3xl md:text-4xl">
            Register Now
          </h2>
          <form className="mx-4 mb-6 mt-2 sm:mx-10 sm:mb-8  ">
            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">Name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded bg-white/5 p-2 pl-10"
                  placeholder="Name"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image
                    src="/assets/name.png"
                    alt="Icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded bg-white/5 p-2 pl-10"
                  placeholder="Email"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image
                    src="/assets/email.png"
                    alt="Icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full rounded bg-white/5 p-2 pl-10"
                  placeholder="Phone"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image
                    src="/assets/phone.png"
                    alt="Icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 sm:mb-8 sm:flex">
              <div className="mb-2 sm:mb-0 sm:w-1/2 sm:pr-2">
                <label className="block sm:mb-1">Branch</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Branch"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/branch.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2 sm:pl-2">
                <label className="block sm:mb-1">Year</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Year"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/year.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">
                Why do you want to join FLC?
              </label>
              <div className="relative">
                <textarea
                  className="w-full rounded-lg bg-white/5 p-2"
                  placeholder="Answer"
                  rows={3}
                />
              </div>
            </div>
            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">
                What are your expectation from FLC?
              </label>
              <div className="relative">
                <textarea
                  className="w-full rounded-lg bg-white/5 p-2"
                  placeholder="Answer"
                  rows={3}
                />
              </div>
            </div>
            <div className="mb-2 sm:mb-4">
              <label className="block sm:mb-1">
                How would you contribute to FLC?
              </label>
              <div className="relative">
                <textarea
                  className="w-full rounded-lg bg-white/5 p-2"
                  placeholder="Answer"
                  rows={3}
                />
              </div>
            </div>

            <button className="mt-4 w-full rounded bg-gradient-to-br from-purple-900 via-yellow-500 to-indigo-900 p-2 font-bold text-gray-900 sm:mt-6">
              Register
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Register;

