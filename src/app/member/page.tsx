import Link from "next/link";

type Member = {
    nameTH: string;
    nameEN: string;
};

const BUS_MEMBERS: Member[] = [
    { nameTH: "สมชาย ใจดี", nameEN: "Somchai Jaidee" },
    { nameTH: "สมหญิง สวยงาม", nameEN: "Somying Suayngam" },
    { nameTH: "สมปอง สนุกสนาน", nameEN: "Sompong Sanuksan" },
];

export default function MemberPage(){
    return (
        <>
            <ul>
                {/* ให้ Link -- > หน้ารายละเอียดสมาชิกแต่ละคน */}
                {BUS_MEMBERS.map((member, index) => (
                <li key={index}>
                    <Link href={`/member/${index + 1}`}>
                    {index + 1} {member.nameTH} ({member.nameEN})
                    </Link>
                </li>
                ))}
            </ul>

        </>
    )
}