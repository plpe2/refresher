import { ParentContainer } from "@/components/parent-container";
import AuthGuard from "@/context/auth-guard";
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
          <AuthGuard>
            <ParentContainer>
              {children}
            </ParentContainer>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
