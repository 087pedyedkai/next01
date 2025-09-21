import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ระบบสมัคร{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                TCAS69
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              แพลตฟอร์มสำหรับการจัดการใบสมัครเข้าศึกษาต่อในระดับมหาวิทยาลัย 
              ด้วยระบบที่ทันสมัยและใช้งานง่าย พร้อมเครื่องมือจัดการ Portfolio ที่ครบครัน
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/portfolio/add"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                เริ่มสมัครเลย
              </Link>
              <Link
                href="/admin"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                เข้าสู่ระบบอาจารย์
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ฟีเจอร์ที่ครบครัน
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ระบบที่ออกแบบมาเพื่อให้การสมัครและจัดการใบสมัครเป็นเรื่องง่าย
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                แบบฟอร์มที่ครบครัน
              </h3>
              <p className="text-gray-600">
                กรอกข้อมูลส่วนตัว การศึกษา และเหตุผลในการสมัครพร้อมการตรวจสอบความถูกต้อง
              </p>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ระบบจัดการสำหรับอาจารย์
              </h3>
              <p className="text-gray-600">
                ดูรายชื่อผู้สมัคร เรียงลำดับตาม GPA และดูรายละเอียดของแต่ละคน
              </p>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📁</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                อัปโหลดไฟล์และรูปภาพ
              </h3>
              <p className="text-gray-600">
                อัปโหลดรูปภาพโปรไฟล์ กิจกรรม รางวัล และไฟล์เอกสารต่างๆ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            พร้อมที่จะเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            เริ่มสร้าง Portfolio ของคุณวันนี้และเตรียมพร้อมสำหรับการสมัครเข้าศึกษาต่อ
          </p>
          <div className="mt-8">
            <Link
              href="/portfolio/add"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
            >
              เริ่มสมัครเลย
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
