import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
    req: Request,
    { params }: { params: { id_camiseta: string } }
) {
    try {
        const { userId } = auth();
        const { id_camiseta } = params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("No autorizado", { status: 401 });
        }

        const camiseta = await db.tbl_camiseta.update({
            where: {
                id_camiseta: parseInt(id_camiseta),
                id_usuario: userId
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(camiseta);
    } catch (error) {
        console.log("[CAMISETA_ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
