import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(
    req: Request,
    { params }: { params: { id_camiseta: string, id_adjunto: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const courseOwner = await db.tbl_camiseta.findUnique({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId
            }
        });

        if (!courseOwner) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const attachment = await db.tbl_adjuntos.delete({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_adjunto: parseInt(params.id_adjunto),
            }
        });

        return NextResponse.json(attachment);
    } catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}

