import Navbar from "@/sections/NavigationBar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
