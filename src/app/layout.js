import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import { DesktopNav, MobileNav } from "../components/Navbar";
import RightBar from "@/components/RightBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aptos = localFont({
  src: "./fonts/Aptos.ttf",
  variable: "--font-aptos",
});

export const metadata = {
  title: "A Dashboard App",
  description:
    "Created to showcase how a student peformance date arepresented with values and infographics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aptos.variable} antialiased p-0 bg-gray-50 `}>
        <section className="w-full  min-h-[100vh] ">
          <section className="w-full bg-[#001028] z-[10000] sticky h-[45px] gap-6 top-0 xs:pt-1 pt-2">
            <section className="bg-transparent fixed top-0 w-full  h-[40px] flex items-center">
              <Header />
            </section>
          </section>
          <section className="w-full pb-8">
            <DesktopNav />
            <MobileNav />
            <div className="w-full ">
              <div className="w-full lg:pt-8 min-h-[calc(100vh-82px)] ">
                {/* max-w-7xl mx-auto px-5 lg:px-10 */}
                <div className="lg:pl-[210px] lg:pr-[44px] max-w-[1800px] mx-auto px-5">
                  {children}
                </div>
              </div>
            </div>
            <RightBar />
          </section>
        </section>
      </body>
    </html>
  );
}
