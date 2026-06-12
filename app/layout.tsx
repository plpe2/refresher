import { AuthProvider } from "@/context/jwt/auth-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
