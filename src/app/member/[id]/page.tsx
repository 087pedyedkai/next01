import { BUS_MEMBERS } from "@/store/member";
import Link from "next/link";
 
export default function MemberDetailPage(parameters: { params: { id: string } }) {
    const { id } = parameters.params;
    const member = BUS_MEMBERS[parseInt(id) - 1];

    if (!member) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl text-gray-400 mb-4">👤</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">ไม่พบข้อมูลสมาชิก</h1>
                    <p className="text-gray-600 mb-6">ขออภัย ไม่พบข้อมูลสมาชิกที่คุณค้นหา</p>
                    <Link 
                        href="/member"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                        กลับไปหน้าทีมงาน
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <div className="mb-6">
                    <Link 
                        href="/member"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                        ← กลับไปหน้าทีมงาน
                    </Link>
                </div>

                {/* Member Profile Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-3xl font-semibold">
                                    {member.nameTH.charAt(member.nameTH.indexOf('.') + 1 || 0)}
                                </span>
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">
                                {member.nameTH}
                            </h1>
                            <p className="text-blue-100 mb-2">
                                {member.nameEN}
                            </p>
                            <p className="text-blue-100 font-medium">
                                {member.role}
                            </p>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Contact Info */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-3">ข้อมูลติดต่อ</h2>
                            <div className="flex items-center text-gray-600">
                                <span className="mr-2">✉️</span>
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-700">
                                    {member.email}
                                </a>
                            </div>
                        </div>

                        {/* Description */}
                        {member.description && (
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-3">เกี่ยวกับ</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        )}

                        {/* Expertise */}
                        {member.expertise && member.expertise.length > 0 && (
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-3">ความเชี่ยวชาญ</h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
