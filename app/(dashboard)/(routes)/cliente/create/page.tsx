import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { CamisetasForm } from "../_components/CamisetasForm";


const CreatePage = async() => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }


    const categorias = await db.tbl_categorias.findMany({
        orderBy: {
            nombre: "asc"
        }
    });

    

    return (
        <div className="mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Nueva Camiseta</h2>

            <CamisetasForm
                initialData={undefined}
                id_camiseta={0}
                optionsCategories={categorias.map(categoria => ({
                    label: categoria.nombre,
                    value: categoria.id_categoria
                }))}
                isEdit={false}
            />
        </div>
    );
}

export default CreatePage;