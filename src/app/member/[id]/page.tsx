import { BUS_MEMBERS } from "@/app/store/member";
 
export default function MemberPage(parameters: { params: { id: string } }) {
    const { id } = parameters.params;
    const member = BUS_MEMBERS[parseInt(id) - 1];

    if (!member) {
        return <div>Member not found</div>;
    }
    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '24px' }}>Member Detail Page {id}</h1>
            <h2>{member.nameTH}</h2>
            <p>{member.nameEN}</p>
        </div>
    );
}
