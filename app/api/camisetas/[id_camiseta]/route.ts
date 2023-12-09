import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(
    req: Request,
    { params }: { params: { id_camiseta: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const camise = await db.tbl_camiseta.findUnique({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            },
        });

        if (!camise) {
            return new NextResponse("Curso No encontrado", { status: 404 });
        }

        const deletedcamise = await db.tbl_camiseta.delete({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
            },
        });

        return NextResponse.json(deletedcamise);
    } catch (error) {
        console.log("[camise_ID_DELETE]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}

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

        const camise = await db.tbl_camiseta.update({
            where: {
                id_camiseta: parseInt(id_camiseta),
                id_usuario: userId
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(camise);
    } catch (error) {
        console.log("[camise_ID]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}
