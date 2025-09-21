import Link from "next/link";

type TeamMember = {
    nameTH: string;
    nameEN: string;
    role: string;
    email: string;
};

const TEAM_MEMBERS: TeamMember[] = [
    { 
        nameTH: "ผศ.ดร.สมชาย ใจดี", 
        nameEN: "Assoc. Prof. Dr. Somchai Jaidee", 
        role: "หัวหน้าทีมพัฒนาระบบ",
        email: "somchai@university.ac.th"
    },
    { 
        nameTH: "ดร.สมหญิง สวยงาม", 
        nameEN: "Dr. Somying Suayngam", 
        role: "นักพัฒนาระบบอาวุโส",
        email: "somying@university.ac.th"
    },
    { 
        nameTH: "สมปอง สนุกสนาน", 
        nameEN: "Sompong Sanuksan", 
        role: "นักพัฒนาระบบ",
        email: "sompong@university.ac.th"
    },
];

export default function MemberPage(){
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">ทีมพัฒนาระบบ TCAS69</h1>
                    <p className="text-lg text-gray-600">บุคลากรที่รับผิดชอบพัฒนาและดูแลระบบสมัครเข้าศึกษา</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-2xl font-semibold">
                                            {member.nameTH.charAt(member.nameTH.indexOf('.') + 1 || 0)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {member.nameTH}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {member.nameEN}
                                    </p>
                                    <p className="text-sm font-medium text-blue-600 mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {member.email}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link 
                                        href={`/member/${index + 1}`}
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                                    >
                                        ดูรายละเอียด
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}