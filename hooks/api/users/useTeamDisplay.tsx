"use client"
import { UserTypes } from "@/types/Users";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import { handleDisplayTeam } from "./users";

export default function useTeamDisplay() {
    const [teamMember, setTeamData] = useState<UserTypes[]>([])

    useEffect(() => {
        handleDisplayTeam(setTeamData)
    }, [])

    return { teamMember }
}