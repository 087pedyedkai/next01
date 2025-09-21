import { z } from 'zod';

export const portfolioSchema = z.object({
  firstName: z.string().min(1, 'กรุณากรอกชื่อ').min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  lastName: z.string().min(1, 'กรุณากรอกนามสกุล').min(2, 'นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร'),
  address: z.string().min(1, 'กรุณากรอกที่อยู่').min(10, 'ที่อยู่ต้องมีอย่างน้อย 10 ตัวอักษร'),
  phoneNumber: z.string()
    .min(1, 'กรุณากรอกหมายเลขโทรศัพท์')
    .regex(/^[0-9]{10}$/, 'หมายเลขโทรศัพท์ต้องเป็นตัวเลข 10 หลัก'),
  email: z.string().min(1, 'กรุณากรอกอีเมล').email('รูปแบบอีเมลไม่ถูกต้อง'),
  school: z.string().min(1, 'กรุณากรอกชื่อโรงเรียน').min(3, 'ชื่อโรงเรียนต้องมีอย่างน้อย 3 ตัวอักษร'),
  gpa: z.number()
    .min(0, 'GPA ต้องมากกว่าหรือเท่ากับ 0')
    .max(4, 'GPA ต้องน้อยกว่าหรือเท่ากับ 4')
    .transform(val => Number(val.toFixed(2))),
  specialSkills: z.string().min(1, 'กรุณากรอกความสามารถพิเศษ').min(10, 'ความสามารถพิเศษต้องมีอย่างน้อย 10 ตัวอักษร'),
  applicationReason: z.string().min(1, 'กรุณากรอกเหตุผลในการสมัคร').min(20, 'เหตุผลในการสมัครต้องมีอย่างน้อย 20 ตัวอักษร'),
  selectedProgram: z.string().min(1, 'กรุณาเลือกสาขาวิชา'),
  university: z.string().min(1, 'กรุณาเลือกมหาวิทยาลัย'),
});

export type PortfolioFormSchema = z.infer<typeof portfolioSchema>;