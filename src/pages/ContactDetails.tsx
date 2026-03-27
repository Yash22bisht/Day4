// Card for showing details of a card 
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string | null;
    phone?: string;
    status: "active" | "inactive";
    createdAt: Date;
}

const contacts: Contact[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "987654320",
        status: "active",
        createdAt: new Date(),
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: null,
        status: "inactive",
        createdAt: new Date(),
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Wilson",
        email: "bob@test.com",
        phone: "987654320",
        status: "active",
        createdAt: new Date(),
    },
    {
        id: 4,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        phone: "5551234567",
        status: "active",
        createdAt: new Date(),
    },
    {
        id: 5,
        firstName: "Charlie",
        lastName: "Brown",
        email: "charlie@test.com",
        status: "inactive",
        createdAt: new Date(),
    },
    {
        id: 6,
        firstName: "Dana",
        lastName: "Smith",
        email: null,
        phone: "9876543210",
        status: "active",
        createdAt: new Date(),
    }
];


const searchById = (contacts: Contact[], id: number): Contact | undefined => {
    return contacts.find((contact) => contact.id === id);
}

export default function ContactDetails() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const contactId = id ? parseInt(id, 10) : NaN;
    const contact = searchById(contacts, contactId);

    if (!contact) {
        return <div className="bg-white p-6 rounded-lg shadow-md">Contact not found</div>;
    }


    const handleBack = () => {
        navigate(-1);
    }

    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-16 " onClick={handleBack}>
                Back
            </button>
            <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-32">
                <h2 className="text-xl font-bold mb-2">{contact.firstName} {contact.lastName}</h2>
                <p className="text-gray-600 mb-1">Email: {contact.email ? contact.email : "N/A"}</p>
                <p className="text-gray-600 mb-1">Phone: {contact.phone ? contact.phone : "N/A"}</p>
                <p className="text-gray-600 mb-1">Status: {contact.status}</p>
                <p className="text-gray-600 mb-1">Created At: {contact.createdAt.toLocaleDateString()}</p>

            </div>
        </>
    )
}
