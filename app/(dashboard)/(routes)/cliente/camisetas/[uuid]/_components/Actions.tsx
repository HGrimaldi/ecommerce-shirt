"use client";

import axios from "axios";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/confirm-modal";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import Link from "next/link";
import { Trash } from "lucide-react";

interface ActionsProps {
    disabled: boolean;
    id_camiseta: number;
    isPublished: boolean;
    uuid:string;
};

export const Actions = ({
    disabled,
    id_camiseta,
    isPublished,
    uuid
}: ActionsProps) => {
    const router = useRouter();
    const confetti = useConfettiStore();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);

            if (isPublished) {
                await axios.patch(`/api/camisetas/${id_camiseta}/unpublish`);
                toast.success("Curso despublicado");
            } else {
                await axios.patch(`/api/camisetas/${id_camiseta}/publish`);
                toast.success("Camiseta publicada");
                confetti.onOpen();
            }

            router.refresh();
        } catch {
            toast.error("Sucedió un error al actualizar el curso");

        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);

            await axios.delete(`/api/camisetas/${id_camiseta}`);

            toast.success("Camiseta eliminado");
            router.refresh();
            router.push(`/cliente/camisetas`);
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center gap-x-2">
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant="customghost"
                size="sm"
            >
                {isPublished ? "Despublicar" : "Publicar"}
            </Button>
            <Link href={`/cliente/camisetas/${uuid}/edit`}>
            <Button>Editar</Button>
            </Link>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isLoading} variant={"destructive"}>
                    <Trash className="h-4 w-4" />
                </Button>
            </ConfirmModal>
        </div>
    )
}
