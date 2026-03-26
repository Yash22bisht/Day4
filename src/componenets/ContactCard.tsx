type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string | null;
    phone?: string;
    status: "active" | "inactive";
    createdAt: Date;
}

// 1. Create ContactCard component with typed props (Contact interface from Day 1)
//    - Show name, email (or "No email"), status badge (green/red Tailwind classes)
//    - Style: rounded card, shadow, padding, flex layout


export  function ContactCard({ id, firstName, lastName, email, phone, status, createdAt }:Contact) {
    return (
        <div key={id} className="w-full  h-56 border border-gray-200 rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition-shadow duration-300 flex flex-col align-center">
            {/* <p className="text-sm text-gray-500 mb-1">ID: {id}</p> */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2 ">{firstName} {lastName}</h2>
            <p className="text-gray-700 mb-1">{email ? email : "No email"}</p>
            <span className={`inline-block px-2.5 py-0.5 text-xs w-24 font-semibold rounded-full ${status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {status.toUpperCase()}
            </span>
            <p className="text-gray-600 mt-2">{phone || "No phone number"}</p>
            <p className="text-xs text-gray-400 mt-3">Created at: {createdAt.toLocaleDateString()}</p>
        </div>
    )
}

