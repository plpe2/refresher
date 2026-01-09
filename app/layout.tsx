import AuthGuard from "@/context/auth-guard";
import { AuthProvider } from "@/context/jwt/auth-provider";
import Navbar from "@/sections/NavigationBar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AuthProvider>
          <AuthGuard>
            <Navbar />
            {children}
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
