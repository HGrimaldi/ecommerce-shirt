import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
    req: Request,
) {
    try {
        const { userId } = auth();
        const { titulo } = await req.json();

        if (!userId) {
            return new NextResponse("No autorizado", { status: 401 });
        }

        const camiseta = await db.tbl_camiseta.create({
            data: {
                id_usuario: userId,
                titulo,
            }
        });

        return NextResponse.json(camiseta);
    } catch (error) {
        console.log("[CAMISETA]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}
