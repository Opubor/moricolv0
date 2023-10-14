import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex justify-between items-start gap-4 p-4 bg-pageBackground">
          <Sidebar />
          <div className="w-5/6 flex flex-col items-start gap-2">
            <AdminHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
