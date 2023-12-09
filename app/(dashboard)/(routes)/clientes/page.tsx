import {auth, currentUser } from "@clerk/nextjs";

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    category: string;
};

const ClientePage = async () => {
    const user = await currentUser();



    return (
        
        <div>
            <h1>Bienvenido, { user?.firstName + ' ' + user?.lastName}</h1>
        </div>
    );
}

export default ClientePage;
