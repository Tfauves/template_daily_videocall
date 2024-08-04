import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "daily call template",
  description: "A simple call template for the daily",
};

export default function RootLayout({ children }) {
  const roomUrl = process.env.NEXT_PUBLIC_DAILY_ROOM_URL;
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
            <Footer />
            <script
              src="https://unpkg.com/@daily-co/daily-js"
              crossOrigin="anonymous"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              function createFrameAndJoinRoom() {
                window.call = window.Daily.createFrame();
                call.join({ url: '${roomUrl}' });
              }
            `,
              }}
            />
          </div>
        </div>
      </body>
    </html>
  );
}
