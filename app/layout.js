import "./globals.css";

export const metadata = {
  title: "JARVIS",
  description: "Personal AI Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
