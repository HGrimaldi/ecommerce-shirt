import { Button } from "@/components/ui/button";
import Link from "next/link";

const CamisetasPage = () => {
    return (
        <div className="p-6">
            <Link href="/cliente/create">
                <Button> Crear Camiseta </Button>
            </Link>
        </div>
    );
}

export default CamisetasPage;

