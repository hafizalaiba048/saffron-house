import "./globals.css";

export const metadata = {
  title: "Saffron House - Royal Taste",
  description: "Best Restaurant in Town - Delicious Desi & Fast Food",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#FFF8F0" }}>
        {children}
      </body>
    </html>
  );
}
