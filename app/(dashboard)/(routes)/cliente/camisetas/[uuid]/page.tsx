import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { LayoutDashboard } from "lucide-react";
import { TitleForm } from "./_components/TitleForm";
import { DescriptionForm } from "./_components/DescriptionForm";
import { ImageForm } from "./_components/ImageForm";

const camisetaUuidPage = async ({
    params
}: {
    params: { uuid: string }
}) => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const camiseta = await db.tbl_camiseta.findFirst({
        where: {
            uuid: params.uuid,
            id_usuario: userId
        }
    });

    if (!camiseta) {
        return redirect("/");
    }

    const requiredFields = [
        camiseta.titulo,
        camiseta.descripcion,
        camiseta.imagen_url,
        camiseta.precio,
        camiseta.id_categoria];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalFields})`;

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Configuracion del curso
                    </h1>
                    <span className="text-sm text-slate-700 dark:text-white">
                        Completar todos los campos {completionText}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-full flex items-center justify-center bg-sky-100 dark:bg-[#1f1f1f] p-2">
                            <LayoutDashboard className="h-8 w-8 text-teal-700 dark:text-yellow-500" />
                        </div>
                        <h2 className="text-xl">
                            Personaliza de las camisetas
                        </h2>
                    </div>
                    <TitleForm
                        initialData={camiseta}
                        id_camiseta={camiseta.id_camiseta}
                    />
                    <DescriptionForm
                        initialData={camiseta}
                        id_camiseta={camiseta.id_camiseta}
                    />
                    <ImageForm
                        initialData={camiseta}
                        id_camiseta={camiseta.id_camiseta}
                    />
                </div>
            </div>
        </div>
    );
}

export default camisetaUuidPage;
