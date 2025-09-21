export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">ติดต่อเรา</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">ข้อมูลติดต่อ</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 text-blue-600">📍</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">ที่อยู่</p>
                    <p className="text-sm text-gray-600">
                      คณะวิทยาศาสตร์และเทคโนโลยี<br />
                      มหาวิทยาลัยมหาจุฬาลงกรณราชวิทยาลัย<br />
                      วังทองหลาง กรุงเทพฯ 10120
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 text-blue-600">📞</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">โทรศัพท์</p>
                    <p className="text-sm text-gray-600">02-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 text-blue-600">✉️</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">อีเมล</p>
                    <p className="text-sm text-gray-600">tcas69@university.ac.th</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">เวลาทำการ</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">จันทร์ - ศุกร์:</span> 08:30 - 16:30</p>
                <p><span className="font-medium">เสาร์ - อาทิตย์:</span> ปิดทำการ</p>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">ช่วงเวลารับสมัคร</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">TCAS รอบ 1:</span> มกราคม - กุมภาพันธ์</p>
                <p><span className="font-medium">TCAS รอบ 2:</span> มีนาคม - เมษายน</p>
                <p><span className="font-medium">TCAS รอบ 3:</span> พฤษภาคม - มิถุนายน</p>
                <p><span className="font-medium">TCAS รอบ 4:</span> กรกฎาคม - สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}