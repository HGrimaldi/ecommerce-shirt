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
            return new NextResponse("No autorizado", { status: 401 });
        }

        const course = await db.tbl_camiseta.findUnique({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            },
        });

        if (!course) {
            return new NextResponse("Not found", { status: 404 });
        }

        if (!course.titulo || !course.descripcion || !course.imagen_url || !course.id_categoria) {
            return new NextResponse("Faltan campos requeridos", { status: 401 });
        }

        const publishedCourse = await db.tbl_camiseta.update({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            },
            data: {
                publicado: true,
            }
        });

        return NextResponse.json(publishedCourse);
    } catch (error) {
        console.log("[CAMISETA_ID_PUBLISH]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}
