"use Server";

import { UserData } from "@/app/register/page";

export const registerUser = async(data: UserData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data),
        cache: "no-store"

    });

    return await res.json();
}