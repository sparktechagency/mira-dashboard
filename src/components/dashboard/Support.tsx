import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';


export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-lg w-full">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
            Contact Us
          </h1>
          <p className="text-blue-100 text-lg">
            We're here to help you succeed
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h2>
          </div>

          <div className="space-y-6">
            {/* Email Contact */}
            <a
              href="mailto:abdella.amira@gmail.com"
              className="group block bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 transition-all duration-300 hover:from-indigo-100 hover:to-blue-100 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FiMail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-lg font-medium text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                    abdella.amira@gmail.com
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Phone Contact */}
            <a
              href="tel:+16172511209"
              className="group block bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 transition-all duration-300 hover:from-purple-100 hover:to-pink-100 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FiPhone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                    +16 172511209
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <FiMapPin className="w-5 h-5" />
              <p className="text-sm">
                Available Monday - Friday, 9:00 AM - 6:00 PM CET
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm">
            © 2024 Alpha Track. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}