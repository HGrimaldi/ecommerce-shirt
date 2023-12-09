"use client"

import { Button } from "@/components/ui/button"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link"
import { cn } from "@/lib/utils"
import { tbl_camiseta } from "@prisma/client";

export const columns: ColumnDef<tbl_camiseta>[] = [
    {
        accessorKey: "titulo",
        header: ({ column }) => {
            return (
                <Button
                    variant="customghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Titulo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "categoria.nombre",
        header: ({ column }) => {
            return (
                <Button
                    variant="customghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Categoria
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "precio",
        header: ({ column }) => {
            return (
                <Button
                    variant="customghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Precio
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("precio") || "0");
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(price);

            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: "publicado",
        header: ({ column }) => {
            return (
                <Button
                    variant="customghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Publicado
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const isPublished = row.getValue("publicado") || false;

            return (
                <Badge className={cn(
                    "bg-sky-500 text-black",
                    isPublished && "bg-green-600 text-black"
                )}>
                    {isPublished ? "Publicado" : "Sin Publicar"}
                </Badge>
            )
        }
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const { uuid, titulo } = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={`/cliente/camisetas/${uuid}/edit`}>
                            <DropdownMenuItem>
                                <Pencil className="h-4 w-4 mr-2" />
                                Editar Camiseta
                            </DropdownMenuItem>
                        </Link>
                        <Link href={`/cliente/camisetas/${uuid}`}>
                            <DropdownMenuItem>
                                <Pencil className="h-4 w-4 mr-2" />
                                Detalle
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(uuid)}
                        >
                            Copiar UUID de la camiseta
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(titulo)}
                        >
                            Copiar Titulo de la camiseta
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

