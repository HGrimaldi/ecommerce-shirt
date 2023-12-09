import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { CircleDollarSign, File, LayoutDashboard } from "lucide-react";
import { TitleForm } from "./_components/TitleForm";
import { DescriptionForm } from "./_components/DescriptionForm";
import { ImageForm } from "./_components/ImageForm";
import { PriceForm } from "./_components/PriceForm";
import { Prisma } from "@prisma/client";

import { Banner } from "@/components/Banner";

import { Actions } from "./_components/Actions";
import { CategoriesForm } from "./_components/CategoriesForm";
import { AttachmentsForm } from "./_components/AttachmentsForm";


const camiseUuidPage = async ({
    params
}: {
    params: { uuid: string }
}) => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const camise = await db.tbl_camiseta.findFirst({
        where: {
            uuid: params.uuid,
            id_usuario: userId
        },
        include: {
            categoria: true,
            adjuntos: true
           
        },
    });

    const categories = await db.tbl_categorias.findMany({
        orderBy: {
            nombre: "asc"
        }
    });

    if(camise?.id_categoria != null){
        let category =  await db.tbl_categorias.findUnique({
            where: {
                id_categoria: camise?.id_categoria
            }
        });
        var categoryName = category?.nombre;
    }

    if (!camise) {
        return redirect("/");
    }

    const requiredFields = [
        camise.titulo,
        camise.descripcion,
        camise.imagen_url,
        camise.precio,
        camise.id_categoria];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalFields})`;

    const isComplete = requiredFields.every(Boolean);

    return (
        <>
            {!camise.publicado && (
                <Banner
                    label="Esta camiseta no esta publicado. No sera visible para los clientes."
                />
            )}
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Configuracion de la camiseta
                        </h1>
                        <span className="text-sm text-slate-700 dark:text-white">
                            Completar todos los campos {completionText}
                        </span>
                    </div>
                    
                    <Actions
                    
                        disabled={!isComplete}
                        id_camiseta={camise.id_camiseta}
                        isPublished={camise.publicado}
                        uuid={camise.uuid}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <div className="rounded-full flex items-center justify-center bg-sky-100 dark:bg-[#1f1f1f] p-2">
                                <LayoutDashboard className="h-8 w-8 text-teal-700 dark:text-yellow-500" />
                            </div>
                            <h2 className="text-xl">
                                Personaliza tu camiseta
                            </h2><br />
                            
                        </div>
                         <h1 className="text-2xl font-medium">
                            Detalle de la camiseta
                        </h1>
                        <div>
                            Nombre: 
                        {camise.titulo}
                        </div>
                        <div >
                            Descripcion:
                        {camise.descripcion}
                        </div>
                        <div>
                            Precio:
                        {camise.precio}
                        </div>
                        <div>
                            Categoria:
                        {camise.categoria?.nombre}
                        </div>
                               
                        <ImageForm
                            initialData={camise}
                            id_camiseta={camise.id_camiseta}
                        />
                         <AttachmentsForm
                        initialData={camise}
                        id_camiseta={camise.id_camiseta}
                    />
                    </div>
                </div>
            </div>
        </>
    );
}

export default camiseUuidPage;
