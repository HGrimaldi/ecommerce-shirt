

import { db } from "@/lib/db";
import { tbl_camiseta, tbl_categorias } from "@prisma/client";

type CourseWithCategory = tbl_camiseta & {
    categoria: tbl_categorias | null;
};

type GetCourses = {
    userId: string;
    title?: string;
    category?: string;
};

export const getCourses = async ({
    userId,
    title,
    category
}: GetCourses): Promise<CourseWithCategory[]> => {
    try {
        const categoria = await db.tbl_categorias.findFirst({
            where: {
                uuid: category,
            },
        });

        const courses = await db.tbl_camiseta.findMany({
            where: {
                publicado: true,
                titulo: {
                    contains: title,
                },
                id_categoria: category ? categoria?.id_categoria : undefined,
            },
            include: {
                categoria: true,
            },
            orderBy: {
                createdAt: "desc",
            }
        });

        const coursesList: CourseWithCategory[] = await Promise.all(
            courses.map(async course => {
                return {
                    ...course
                }
            })
        );
        return coursesList;

    } catch (error) {
        console.log("[GET_COURSES]", error);
        return [];
    }
}
