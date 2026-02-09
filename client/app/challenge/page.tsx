'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ChallengePage() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noPosition, setNoPosition] = useState(null)
  const [noHoverCount, setNoHoverCount] = useState(0)

  const handleNoHover = () => {
    // Generate random position within viewport bounds, keeping button on screen
    const maxX = window.innerWidth - 120
    const maxY = window.innerHeight - 120
    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY
    setNoPosition({ x: randomX, y: randomY })
    setNoHoverCount(noHoverCount + 1)
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    handleNoHover()
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 flex items-center justify-center p-4 overflow-hidden">
      {!yesClicked ? (
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-200">
            {/* Animated hearts */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 text-4xl animate-bounce">💕</div>
              <div className="absolute bottom-10 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>
                💖
              </div>
              <div className="absolute top-1/2 right-5 text-3xl animate-pulse">💗</div>
            </div>

            {/* Main question */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-red-600">Will you be</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  My Valentine?
                </span>
              </h2>
            </div>

            {/* Decorative line */}
            <div className="flex justify-center gap-1 mb-12">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col gap-4 items-center">
              {/* Yes Button */}
              <button
                onClick={() => setYesClicked(true)}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-110 transition-all duration-300 z-20 relative"
              >
                Yes! 💕
              </button>

              {/* No button - floats around screen when clicked */}
              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                onClick={handleNoClick}
                onFocus={handleNoHover}
                style={
                  noPosition
                    ? {
                        position: 'fixed',
                        left: `${noPosition.x}px`,
                        top: `${noPosition.y}px`,
                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }
                    : { position: 'relative' }
                }
                className={`${noPosition ? 'bg-gradient-to-r from-red-300 to-pink-300 hover:from-red-400 hover:to-pink-400 cursor-not-allowed z-30' : 'bg-gradient-to-r from-red-300 to-pink-300 hover:from-red-400 hover:to-pink-400 text-white'} font-bold py-3 px-6 rounded-full text-lg shadow-lg whitespace-nowrap w-full md:w-auto`}
              >
                No
              </button>

            </div>

            {/* Hint text */}
            <div className="mt-8">
              {noHoverCount === 0 && (
                <p className="text-center text-gray-500 text-sm animate-pulse">
                  Try clicking No... 👀
                </p>
              )}
              {noHoverCount > 0 && noHoverCount < 5 && (
                <p className="text-center text-pink-600 text-sm font-semibold animate-pulse">
                  Oh no, it moved! 😄
                </p>
              )}
              {noHoverCount >= 5 && (
                <p className="text-center text-red-600 text-sm font-bold">
                  You can't escape YES! 💕 Just click it!
                </p>
              )}
            </div>

            {/* Back button */}
            <div className="mt-12 text-center">
              <Link href="/">
                <button className="text-gray-500 hover:text-gray-700 text-sm underline">
                  ← Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Success page
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-300 text-center">
            {/* Confetti effect with hearts */}
            <div className="mb-8 text-6xl animate-bounce">
              🎉
            </div>

            {/* Success message */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Yes! 💕
            </h1>

            <h2 className="text-3xl font-bold text-red-600 mb-6">
              You're My Valentine!
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Congratulations <span className="font-extrabold">Mr Pritam</span>! You've made the right choice and earned the most special spot in Srija's heart!
            </p>

            {/* Floating hearts */}
            <div className="flex justify-center gap-2 mb-8 text-4xl">
              <span className="animate-bounce">💕</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>
                💖
              </span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                💗
              </span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>
                💝
              </span>
            </div>

            <p className="text-gray-600 mb-8">
              Get ready for the most special Valentine's Day celebration ever!
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                setYesClicked(false)
                setNoPosition(null)
                setNoHoverCount(0)
              }}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
            >
              Ask Again? 💘
            </button>

            {/* Back button */}
            <div className="text-center">
              <Link href="/">
                <button className="text-gray-500 hover:text-gray-700 text-sm underline">
                  ← Go Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
