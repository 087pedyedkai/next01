export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">เกี่ยวกับระบบ TCAS69</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              ระบบสมัครเข้าศึกษา TCAS69 เป็นแพลตฟอร์มสำหรับการจัดการใบสมัครเข้าศึกษาต่อ
              ในระดับมหาวิทยาลัย ที่ออกแบบมาเพื่อให้การสมัครและจัดการข้อมูลเป็นเรื่องง่าย
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">ฟีเจอร์หลัก</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>แบบฟอร์มสมัครที่ครบครัน พร้อมการตรวจสอบความถูกต้อง</li>
              <li>ระบบอัปโหลดไฟล์และรูปภาพ</li>
              <li>ระบบจัดการสำหรับอาจารย์</li>
              <li>การจัดเก็บข้อมูลแบบปลอดภัย</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">เทคโนโลยีที่ใช้</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Next.js 15 - React Framework</li>
              <li>TypeScript - Type Safety</li>
              <li>Tailwind CSS - Styling</li>
              <li>Zustand - State Management</li>
              <li>React Hook Form - Form Management</li>
              <li>Zod - Validation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}