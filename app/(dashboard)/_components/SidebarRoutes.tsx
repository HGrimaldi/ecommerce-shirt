"use client";
import { Layout, Compass, List, BarChart } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/clientes",
    },
    {
        icon: Compass,
        label: "Navegar",
        href: "/search",
    }
];

const clienteRoutes = [
    {
        icon: List,
        label: "camisetas",
        href: "/cliente/camisetas",
    },
    {
        icon: BarChart,
        label: "Estadisticas",
        href: "/cliente/estadisticas",
    },
    {
        icon: Compass,
        label: "Navegar",
        href: "/search",
    }
    
];

export const SidebarRoutes = () => {
    const pathname = usePathname(); 
    const isClientePage = pathname?.includes("/cliente");
    const routes = isClientePage ? clienteRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
            ))}
        </div>
    )
};



