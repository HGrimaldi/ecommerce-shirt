import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src="/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
        />
    )
};
