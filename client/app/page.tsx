import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-red-50 via-pink-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
          {/* Heart decoration */}
          <div className="text-5xl text-center mb-8 animate-bounce">❤️</div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-4">
            You Have a
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-2">
            Very Important
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-8">
            Quiz to Take!
          </h3>

          {/* Subheading */}
          <p className="text-center text-lg text-gray-700 mb-2 font-semibold">
            Given by
          </p>
          <p className="text-center text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-8">
            Srija ✨
          </p>

          {/* Description */}
          <p className="text-center text-gray-600 mb-8 text-base">
            Answer this quiz and discover something special about your Valentine's Day!
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mb-10">
            <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse delay-200"></div>
          </div>

          {/* Button */}
          <Link href="/challenge">
            <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Visit Challenge 💕
            </button>
          </Link>

          {/* Footer decoration */}
          <div className="mt-8 text-center text-4xl space-x-3">
            <span className="animate-bounce inline-block">💖</span>
            <span className="animate-bounce inline-block" style={{ animationDelay: '0.1s' }}>
              💕
            </span>
            <span className="animate-bounce inline-block" style={{ animationDelay: '0.2s' }}>
              💗
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
