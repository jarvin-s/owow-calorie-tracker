import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-[375px] h-[812px] relative flex flex-col border-2 border-white rounded-3xl">
        <div className="flex-1 flex flex-col items-center justify-start pt-16">
          <h1 className="text-white text-4xl font-bold mb-16 tracking-wider">
            FlowerMe
          </h1>

          <div className="bg-white rounded-3xl p-8 w-[320px] mx-auto">
            <h2 className="text-2xl font-bold text-black mb-8">Sign in</h2>

            <div className="mb-6">
              <label className="block text-black text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full h-12 bg-gray-400 rounded-lg px-4 text-black placeholder-gray-600"
                placeholder=""
              />
            </div>

            <div className="mb-8">
              <label className="block text-black text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full h-12 bg-gray-400 rounded-lg px-4 text-black placeholder-gray-600"
                placeholder=""
              />
            </div>

            <Link
              href="/flipdots"
              className="w-full h-12 bg-black text-white rounded-full font-medium text-lg mb-6 cursor-pointer flex items-center justify-center no-underline"
            >
              Sign in
            </Link>

            <p className="text-center text-black text-sm">
              Already have an account?{" "}
              <Link href="/flipdots" className="hover:underline font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
