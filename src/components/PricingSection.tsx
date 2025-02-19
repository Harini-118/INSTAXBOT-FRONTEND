"use client"

import { useRef, useEffect, useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

const features = [
  "Unlimited access to all features",
  "Priority customer support 24/7",
  "Advanced analytics and reporting",
  "Custom integration options",
  "Dedicated account manager",
]

const styles = {
  cursiveFont: {
    fontFamily: "'Dancing Script', cursive",
  },
  cloudBorder: {
    borderRadius: "60% 40% 50% 45% / 50% 45% 55% 50%",
  },
}

function PricingSection() {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [arrowPath, setArrowPath] = useState("")
  const arrowControls = useAnimation()

  useEffect(() => {
    const updateArrowPath = () => {
      if (paragraphRef.current && buttonRef.current) {
        const paragraphRect = paragraphRef.current.getBoundingClientRect()
        const buttonRect = buttonRef.current.getBoundingClientRect()

        const startX = paragraphRect.right
        const startY = paragraphRect.bottom - paragraphRect.height / 2
        const endX = buttonRect.left + buttonRect.width / 2
        const endY = buttonRect.top + buttonRect.height / 2

        const midX = (startX + endX) / 2

        const path = `M${startX},${startY} Q${midX},${startY} ${endX},${endY}`
        setArrowPath(path)

        // Animate the arrow
        arrowControls.start({ opacity: 1, pathLength: 1 })
      }
    }

    updateArrowPath()
    window.addEventListener("resize", updateArrowPath)
    return () => window.removeEventListener("resize", updateArrowPath)
  }, [arrowControls])

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left Side: Pricing Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 max-w-lg w-full"
          >
            <motion.div
              className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white text-center relative">
                <h3 className="text-3xl font-bold mb-3">Premium Plan</h3>
                <div className="text-6xl font-bold mb-3">₹1999</div>
                <p className="opacity-90 text-lg">per month</p>
              </div>
              <div className="p-8">
                <ul className="space-y-5 mb-8">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-purple-800 text-lg"
                    >
                      <Check className="h-6 w-6 text-pink-500 mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="w-full px-14 py-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold 
                             hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 
                             shadow-lg hover:shadow-xl border-2 border-white relative overflow-hidden group text-xl"
                    style={styles.cloudBorder}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started Now
                      
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left relative"
          >
            <h2 className="text-5xl font-bold mb-6 text-900 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600" style={styles.cursiveFont}>
              Still waiting to take your business to the next level?
            </h2>
            <motion.p
              ref={paragraphRef}
              className="text-2xl text-gray-700  leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Don't let manual processes slow you down! Our flexible pricing plans are designed to fit businesses of all
              sizes, making onboarding seamless and hassle-free. Whether you're just starting out or looking to scale,
              we offer the perfect solution to streamline operations, boost efficiency, and maximize growth.
            </motion.p>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span
                className="text-5xl inline-block relative font-bold text-purple-700 px-4 py-2 mt-4"
                style={{ ...styles.cursiveFont, fontSize: "1.5em", lineHeight: 1.4 }}
              >
                Contact us now and take the first step <br /> towards smarter business growth! 🚀
              </span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                ref={buttonRef}
                className="px-14 py-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold 
                           hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 
                           shadow-lg hover:shadow-xl border-2 border-white relative overflow-hidden group rounded-full text-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

