export interface Portfolio {
  id: string;
  // ข้อมูลส่วนตัว
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  school: string;
  gpa: number;
  
  // ข้อมูลการสมัคร
  specialSkills: string;
  applicationReason: string;
  selectedProgram: string;
  university: string;
  
  // รูปภาพและไฟล์
  profileImage?: string;
  activityImages?: string[];
  awardImages?: string[];
  portfolioFiles?: string[];
  
  // เวลาสร้าง
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioFormData {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  school: string;
  gpa: number;
  specialSkills: string;
  applicationReason: string;
  selectedProgram: string;
  university: string;
  profileImage?: FileList;
  activityImages?: FileList;
  awardImages?: FileList;
  portfolioFiles?: FileList;
}

export interface UniversityProgram {
  id: string;
  universityName: string;
  programName: string;
  faculty: string;
}

export const UNIVERSITY_PROGRAMS: UniversityProgram[] = [
  { id: "1", universityName: "จุฬาลงกรณ์มหาวิทยาลัย", programName: "วิทยาการคอมพิวเตอร์", faculty: "คณะวิทยาศาสตร์" },
  { id: "2", universityName: "จุฬาลงกรณ์มหาวิทยาลัย", programName: "วิศวกรรมคอมพิวเตอร์", faculty: "คณะวิศวกรรมศาสตร์" },
  { id: "3", universityName: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", programName: "วิศวกรรมซอฟต์แวร์", faculty: "คณะเทคโนโลยีสารสนเทศ" },
  { id: "4", universityName: "มหาวิทยาลัยธรรมศาสตร์", programName: "วิทยาการคอมพิวเตอร์", faculty: "คณะวิทยาศาสตร์และเทคโนโลยี" },
  { id: "5", universityName: "มหาวิทยาลัยมหิดล", programName: "วิทยาการคอมพิวเตอร์", faculty: "คณะไอซีที" },
  { id: "6", universityName: "มหาวิทยาลัยเกษตรศาสตร์", programName: "วิศวกรรมคอมพิวเตอร์", faculty: "คณะวิศวกรรมศาสตร์" },
];