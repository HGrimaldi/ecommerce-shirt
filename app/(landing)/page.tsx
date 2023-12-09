"use client"
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Star } from "lucide-react"; // Cambié el ícono por una estrella

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Client } from "@clerk/nextjs/server";
import { Logo } from "@/components/Logo";

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

const ClothingStoreHomePage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
            )}>
                <div className="flex items-center justify-center p-10">
                    <Image
                        src="/logo.png" // Reemplaza con la ruta de tu logotipo de la tienda de ropa
                        alt="Logo"
                        height={100}
                        width={100}
                    />

                    <p className={cn(
                        "text-6xl text-neutral-700 dark:text-white pb-1",
                        headingFont.className,
                    )}>
                        FashionHub
                    </p>
                </div>
                <div className="mb-10 flex items-center border shadow-sm p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full">
                    <Star className="h-6 w-6 mr-2" /> {/* Cambié el ícono por una estrella */}
                    ¡Descubre la moda que te hace brillar!
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 dark:text-white mb-6">
                    Descubre las últimas tendencias en moda
                </h1>
                <motion.div
                    initial={ { opacity: 0, scale: 0.5 } }
                    animate={ { opacity: 1, scale: 1 } }
                    transition={ { duration: 0.5 } }
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-teal-800 dark:text-yellow-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <TypeAnimation
                            sequence={[
                                "Explora nuevas colecciones",
                                1000,
                                "Encuentra tu estilo único",
                                1000,
                                "Viste con confianza",
                                1000,
                                "Sé tendencia",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </motion.div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-600 dark:text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,
            )}>
                Descubre la moda que se adapta a tu estilo. Encuentra prendas exclusivas y crea tu look perfecto para cada ocasión.
            </div>
            <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white" size="lg" asChild>
                <Link href="/sign-up"> {}
                    Explora la tienda
                </Link>
            </Button>
        </div>
    );
};

export default ClothingStoreHomePage;