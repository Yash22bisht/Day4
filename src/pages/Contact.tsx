import { useState } from 'react';
import { ContactCard } from '../componenets/ContactCard'
// import useDebounce from '../hooks/UseDebounce';

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

// 2. Create ContactList that takes Contact[] and renders ContactCards
//  - .map() with key, "No contacts found" if empty
const contactList = (contact: Contact[]) => {

    if (contact.length === 0) {
        return <p className='text-gray-500 text-center' > No contacts found</p>
    }
    return contact.map((contact) => {
        return <ContactCard key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            email={contact.email}
            phone={contact.phone}
            status={contact.status}
            createdAt={contact.createdAt}
        />
    })

}

// 4. Add search bar: useState + .filter() + .toLowerCase()
//  - Show "Showing 3 of 6 contacts"
// 5. Add status filter buttons (All / Active / Inactive)

const filterContacts = (contacts: Contact[], search: string, statusFilter: "all" | "active" | "inactive"): Contact[] => {
    return contacts.filter((contact) => {
        const matchesStatus = statusFilter === "all" || contact.status === statusFilter;

        const matchesSearch =
            (contact.firstName + " " + contact.lastName).toLowerCase().includes(search.toLowerCase()) ||
            contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
            (contact.email && contact.email.toLowerCase().includes(search.toLowerCase())) ||
            (contact.phone && contact.phone.includes(search));

        return matchesStatus && matchesSearch;
    });
};



export default function Contact() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

    // const debouncedValue = useDebounce(search,10000);

    const  onSearchChange = (e:{ target: { value: string } }) => {
        console.log(typeof(e));
        setSearch(e.target.value);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">

            <h2 className="text-2xl font-bold text-blue-900">Contact Manager</h2>

            <div className="statusCont flex gap-4">
                <button className={`${statusFilter === "all" ? "bg-blue-600" : "bg-gray-300"} hover:bg-blue-400 px-4 py-1 rounded-md`} onClick={() => setStatusFilter("all")}>All</button>
                <button className={`${statusFilter === "active" ? "bg-green-600" : "bg-gray-300 "} hover:bg-green-400 px-4 py-1 rounded-md`} onClick={() => setStatusFilter("active")}>Acitve</button>
                <button className={`${statusFilter === "inactive" ? "bg-red-600" : "bg-gray-300"} hover:bg-red-400 px-4 py-1 rounded-md`} onClick={() => setStatusFilter("inactive")}>Inacitve</button>
            </div>

            <input value={search} onChange={onSearchChange} type="text" placeholder="Search contacts..." className='border-2 border-blue-900 px-4 py-2 w-64 rounded-md' />

            {/* Visible contact count */}
            <p className='text-gray-500 text-sm'>Showing {filterContacts(contacts, search, statusFilter).length} of {contacts.length} contacts</p>

            {/* responsiveness 1 col mobile, 2 col md:, 3 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {contactList(filterContacts(contacts, search, statusFilter))}
            </div>
            ;
        </div>
    )
}

// export  Contact