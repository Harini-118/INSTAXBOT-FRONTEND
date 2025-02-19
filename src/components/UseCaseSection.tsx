import React from 'react';

const AlternatingSections = () => {
  return (
    <div className="w-full bg-white">
      

      {/* Second Section - Left Content, Right Image */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between py-16 px-8 bg-purple-50">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-[350px] h-[650px] mx-auto">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[48px] shadow-xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-b-3xl"></div>
              {/* iPhone Screen */}
              <div className="absolute top-[12px] left-[12px] right-[12px] bottom-[12px] bg-purple-100 rounded-[36px] overflow-hidden">
                {/* App Content */}
                <div className="absolute inset-0">
  <img 
    src="\src\images\Screenshot_2025-02-19-18-19-51-83_1c337646f29875672b5a61192b9010f9.jpg" 
    alt="iPhone screen content" 
    className="w-full h-full object-fit rounded-[36px]"
  />
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="text-5xl font-bold mb-6 text-900 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600   ">
          Use Instaxbot For Instant Fast Replies !
          </h2>
          <p className="text-2xl text-gray-700 mb-6 ">
          Tired of delayed responses? InstaxBot ensures lightning-fast, automated replies to keep your customers engaged 24/7. With AI-powered smart replies, never miss a message and boost customer satisfaction effortlessly!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition duration-300 text-2xl">
            Explore Features
          </button>
        </div>
      </section>

      {/* Third Section - iPhone Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-purple-50">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-[350px] h-[650px] mx-auto">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[48px] shadow-xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-b-3xl"></div>
              {/* iPhone Screen */}
              <div className="absolute top-[12px] left-[12px] right-[12px] bottom-[12px] bg-purple-100 rounded-[36px] overflow-hidden">
                {/* App Content */}
                <div className="absolute inset-0">
  <img 
    src="\src\images\Screenshot_2025-02-19-18-19-51-83_1c337646f29875672b5a61192b9010f9.jpg" 
    alt="iPhone screen content" 
    className="w-full h-full object-fit rounded-[36px]"
  />
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-5xl font-bold mb-6 text-900 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ">
          InstaxBot Instantly Delivers Seamless Product Links to Customers!          </h2>
          <p className="text-2xl text-gray-700 mb-6">
          In the fast-paced world of eCommerce, quick responses and effortless shopping experiences are key to customer satisfaction. InstaxBot ensures that your customers receive product links instantly, making their shopping journey smooth and hassle-free.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition duration-300 text-2xl">
          Explore Features
          </button>
        </div>
      </section>
      {/* Second Section - Left Content, Right Image */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between py-16 px-8 bg-purple-50">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-[350px] h-[650px] mx-auto">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[48px] shadow-xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-b-3xl"></div>
              {/* iPhone Screen */}
              <div className="absolute top-[12px] left-[12px] right-[12px] bottom-[12px] bg-purple-100 rounded-[36px] overflow-hidden">
                {/* App Content */}
                <div className="absolute inset-0">
  <img 
    src="\src\images\Screenshot_2025-02-19-18-19-51-83_1c337646f29875672b5a61192b9010f9.jpg" 
    alt="iPhone screen content" 
    className="w-full h-full object-fit rounded-[36px]"
  />
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="text-5xl font-bold mb-6 text-900 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          InstaxBot Intelligently Handles & Responds to Unwanted Messages!
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
          In the world of online business, not every message deserves your attention. InstaxBot ensures a clutter-free and professional chat experience by intelligently managing unwanted messages with precision.With InstaxBot, you stay focused on what truly matters growing your business and engaging with real customers!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition duration-300 text-2xl">
            Explore Features
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default AlternatingSections;