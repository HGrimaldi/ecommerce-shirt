import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { CamisetasForm } from "../../../_components/CamisetasForm";


const EditPage = async ({
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
        },
        include: {
            categoria: true,
        },
    });

    if (!camiseta) {
        return redirect("/");
    }


    const categorias = await db.tbl_categorias.findMany({
        orderBy: {
            nombre: "asc"
        }
    });


    const requiredFields = [
        camiseta.titulo,
        camiseta.descripcion,
        camiseta.imagen_url,
        camiseta.precio,
        camiseta.id_categoria,

    ];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalFields})`;

    return (
        <div className="mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Editar la camiseta</h2>

            <span className="text-sm text-slate-700 dark:text-white">
                Campos completados {completionText}
            </span>

            <CamisetasForm
                initialData={camiseta}
                id_camiseta={camiseta.id_camiseta}
                optionsCategories={categorias.map(categoria => ({
                    label: categoria.nombre,
                    value: categoria.id_categoria
                }))}
                isEdit={true}
            />
        </div>
    );
}

export default EditPage;