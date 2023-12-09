import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
    req: Request,
    { params }: { params: { id_camiseta: string } }
) {
    try {
        const { userId } = auth();
        const { url, nombre } = await req.json();

        if (!userId) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const courseOwner = await db.tbl_camiseta.findUnique({
            where: {
                id_camiseta: parseInt(params.id_camiseta),
                id_usuario: userId,
            }
        });

        if (!courseOwner) {
            return new NextResponse("No Autorizado", { status: 401 });
        }

        const attachment = await db.tbl_adjuntos.create({

            data: {
                url: url,
                nombre: nombre,
                id_camiseta: parseInt(params.id_camiseta),
            }
        });

        return NextResponse.json(attachment);
    } catch (error) {
        console.log("CAMISETA_ID_ATTACHMENTS", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}
