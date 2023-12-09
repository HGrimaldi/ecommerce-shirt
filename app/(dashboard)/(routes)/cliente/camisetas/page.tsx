

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DataTable } from "./[uuid]/_components/data-table";
import { columns } from "./[uuid]/_components/columns";

const CoursesPage = async () => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const camise = await db.tbl_camiseta.findMany({
        where: {
            id_usuario: userId
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            categoria: true
        }
    });

    return (
        <div className="p-6">
            <div className="mt-6 border-2 bg-[#cfcfcf] dark:bg-[#1f1f1f] rounded-md p-4 border-solid">
        <DataTable columns={columns} data={camise} />
        </div>
    </div>
    );
}

export default CoursesPage;
