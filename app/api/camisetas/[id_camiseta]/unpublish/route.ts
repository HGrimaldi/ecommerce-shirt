import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
    req: Request,
    { params }: { params: { id_camiseta: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const course = await db.tbl_camiseta.findUnique({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            },
        });

        if (!course) {
            return new NextResponse("Camiseta No encontrado", { status: 404 });
        }

        const unpublishedCourse = await db.tbl_camiseta.update({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            },
            data: {
                publicado: false,
            }
        });

        return NextResponse.json(unpublishedCourse);
    } catch (error) {
        console.log("[CAMISETA_ID_UNPUBLISH]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}
