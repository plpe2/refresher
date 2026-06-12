import { ParentContainer } from "@/components/parent-container";
import AuthGuard from "@/context/auth-guard";
import React from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard>
            <ParentContainer>
                {children}
            </ParentContainer>
        </AuthGuard>
    )
}