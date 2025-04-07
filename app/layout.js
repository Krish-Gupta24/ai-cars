import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartWheels",
  description: "Find your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>

          {/*<Toaster richColors />*/}
          <Toaster richColors />

          <footer className="bg-[#0a0f1c] text-gray-300 pt-16 relative z-10">
            {/* Gradient Bar on Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 animate-pulse" />

            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 pb-10 text-center md:text-left">
                {/* Logo + Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Smart<span className="text-yellow-400">Wheels</span>
                  </h2>
                  <p className="text-sm text-gray-400">
                    Find your dream car with AI-powered search. Smart. Fast.
                    Reliable.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/saved-cars"
                        className="hover:text-white transition"
                      >
                        Saved Cars
                      </a>
                    </li>
                    <li>
                      <a href="/admin" className="hover:text-white transition">
                        Admin Portal
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:text-white transition">
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="hover:text-white transition"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social & Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Connect
                  </h3>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/krishgupta24/"
                      className="hover:text-white transition"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Krish-Gupta24"
                      className="hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>Made with 💗 by Krish Gupta</p>
                <p className="mt-2 md:mt-0">
                  © {new Date().getFullYear()} SmartWheels. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
