export type TeamMember = {
    nameTH: string;
    nameEN: string;
    role: string;
    email: string;
    description?: string;
    expertise?: string[];
};

export const BUS_MEMBERS: TeamMember[] = [
    { 
        nameTH: "ผศ.ดร.สมชาย ใจดี", 
        nameEN: "Assoc. Prof. Dr. Somchai Jaidee", 
        role: "หัวหน้าทีมพัฒนาระบบ",
        email: "somchai@university.ac.th",
        description: "ผู้เชี่ยวชาญด้านระบบสารสนเทศและการพัฒนาแพลตฟอร์มการศึกษา มีประสบการณ์ในการพัฒนาระบบมากกว่า 15 ปี",
        expertise: ["System Architecture", "Database Design", "Project Management", "Educational Technology"]
    },
    { 
        nameTH: "ดร.สมหญิง สวยงาม", 
        nameEN: "Dr. Somying Suayngam", 
        role: "นักพัฒนาระบบอาวุโส",
        email: "somying@university.ac.th",
        description: "ผู้เชี่ยวชาญด้านการพัฒนา Frontend และ User Experience Design มีความเชี่ยวชาญในเทคโนโลยี React และ Next.js",
        expertise: ["Frontend Development", "UI/UX Design", "React", "TypeScript", "Responsive Design"]
    },
    { 
        nameTH: "สมปอง สนุกสนาน", 
        nameEN: "Sompong Sanuksan", 
        role: "นักพัฒนาระบบ",
        email: "sompong@university.ac.th",
        description: "นักพัฒนาระบบรุ่นใหม่ที่มีความสามารถในการพัฒนา Backend และการจัดการฐานข้อมูล เชี่ยวชาญใน Node.js และ Database",
        expertise: ["Backend Development", "API Design", "Database Management", "Testing", "DevOps"]
    },
];