function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Login form */}
      <div className="container z-10">
        <div className="flex flex-wrap mt-0 -mx-3 w-full">
          <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
            <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                <h3 className="relative z-10 font-bold text-primary bg-clip-text text-3xl">
                  Chào mừng bạn trở lại
                </h3>
                <p className="mb-0">
                  Nhập thông tin tài khoản của bạn để đăng nhập
                </p>
              </div>
              <div className="flex-auto p-6">
                <form action="#" role="form">
                  <div className="mb-2">
                    <label
                      className="block text-sm font-medium text-gray-700 capitalize"
                      for="product_name"
                    >
                      email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 w-full">
                      <input
                        name="email"
                        id="email"
                        type="text"
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md disabled:opacity-40 disabled:cursor-not-allowed aria-hidden:hidden"
                        value=""
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 capitalize"
                      for="product_name"
                    >
                      Mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 w-full">
                      <input
                        name="password"
                        id="password"
                        type="password"
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md disabled:opacity-40 disabled:cursor-not-allowed aria-hidden:hidden"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-md bg-x-25 bg-150 leading text-xs ease-in tracking-tight bg-gradient-to-tl from-primary to-orange-400 hover:scale-[102%] hover:shadow active:opacity-85 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
              <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                <p className="mx-auto mb-6 leading-normal text-sm">
                  Bạn không có tài khoản?{" "}
                  <a
                    className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text"
                    href="/register"
                  >
                    Đăng ký
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
