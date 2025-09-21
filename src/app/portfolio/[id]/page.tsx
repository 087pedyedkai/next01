'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import usePortfolioStore from '@/store/portfolio';
import { Portfolio } from '@/types/portfolio';

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const portfolio = usePortfolioStore((state) => state.getPortfolioById(id));
  const deletePortfolio = usePortfolioStore((state) => state.deletePortfolio);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-gray-400 mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">ไม่พบข้อมูลใบสมัคร</h1>
          <p className="text-gray-600 mb-6">ใบสมัครที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่ในระบบ</p>
          <button
            onClick={() => router.push('/admin')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            กลับไปหน้ารายชื่อ
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirm('คุณแน่ใจหรือไม่ที่จะลบใบสมัครนี้? การกำเนินนี้ไม่สามารถย้อนกลับได้')) {
      deletePortfolio(id);
      router.push('/admin');
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                ← กลับ
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  รายละเอียดใบสมัคร
                </h1>
                <p className="text-gray-600">
                  {portfolio.firstName} {portfolio.lastName}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                ลบใบสมัคร
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* ข้อมูลส่วนตัว */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                ข้อมูลส่วนตัว
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
                  <p className="mt-1 text-gray-900">{portfolio.firstName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
                  <p className="mt-1 text-gray-900">{portfolio.lastName}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">ที่อยู่</label>
                  <p className="mt-1 text-gray-900">{portfolio.address}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">หมายเลขโทรศัพท์</label>
                  <p className="mt-1 text-gray-900">{portfolio.phoneNumber}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">อีเมล</label>
                  <p className="mt-1 text-gray-900">{portfolio.email}</p>
                </div>
              </div>
            </div>

            {/* ข้อมูลการศึกษา */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                ข้อมูลการศึกษา
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">โรงเรียน</label>
                  <p className="mt-1 text-gray-900">{portfolio.school}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">GPA</label>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {portfolio.gpa.toFixed(2)}
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${(portfolio.gpa / 4) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">/ 4.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ข้อมูลการสมัคร */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                ข้อมูลการสมัคร
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">มหาวิทยาลัย</label>
                  <p className="mt-1 text-gray-900">{portfolio.university}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">สาขาวิชา</label>
                  <p className="mt-1 text-gray-900">{portfolio.selectedProgram}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ความสามารถพิเศษ</label>
                  <div className="mt-1 bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-900 whitespace-pre-wrap">{portfolio.specialSkills}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">เหตุผลในการสมัครเข้าเรียน</label>
                  <div className="mt-1 bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-900 whitespace-pre-wrap">{portfolio.applicationReason}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* รูปภาพและไฟล์ */}
            {(portfolio.profileImage || 
              (portfolio.activityImages && portfolio.activityImages.length > 0) ||
              (portfolio.awardImages && portfolio.awardImages.length > 0) ||
              (portfolio.portfolioFiles && portfolio.portfolioFiles.length > 0)) && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                  รูปภาพและไฟล์
                </h2>
                
                {/* รูปโปรไฟล์ */}
                {portfolio.profileImage && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-800 mb-2">รูปภาพโปรไฟล์</h3>
                    <div className="flex justify-center">
                      <img
                        src={portfolio.profileImage}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
                      />
                    </div>
                  </div>
                )}

                {/* รูปกิจกรรม */}
                {portfolio.activityImages && portfolio.activityImages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-800 mb-2">
                      รูปภาพกิจกรรม ({portfolio.activityImages.length} รูป)
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {portfolio.activityImages.map((image, index) => (
                        <div key={index} className="aspect-square">
                          <img
                            src={image}
                            alt={`Activity ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => window.open(image, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* รูปรางวัล */}
                {portfolio.awardImages && portfolio.awardImages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-800 mb-2">
                      รูปภาพรางวัลและผลงาน ({portfolio.awardImages.length} รูป)
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {portfolio.awardImages.map((image, index) => (
                        <div key={index} className="aspect-square">
                          <img
                            src={image}
                            alt={`Award ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => window.open(image, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ไฟล์เอกสาร */}
                {portfolio.portfolioFiles && portfolio.portfolioFiles.length > 0 && (
                  <div>
                    <h3 className="text-md font-medium text-gray-800 mb-2">
                      ไฟล์เอกสาร ({portfolio.portfolioFiles.length} ไฟล์)
                    </h3>
                    <div className="space-y-2">
                      {portfolio.portfolioFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="bg-blue-100 p-2 rounded">
                            <span className="text-blue-600">📄</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              เอกสาร {index + 1}
                            </p>
                            <p className="text-xs text-gray-500">
                              คลิกเพื่อดาวน์โหลด
                            </p>
                          </div>
                          <button
                            onClick={() => window.open(file, '_blank')}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            ดูไฟล์
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* รูปโปรไฟล์ใน Sidebar */}
            {portfolio.profileImage && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">โปรไฟล์</h3>
                <div className="flex flex-col items-center">
                  <img
                    src={portfolio.profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-3"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {portfolio.firstName} {portfolio.lastName}
                  </h4>
                  <p className="text-sm text-gray-600">{portfolio.school}</p>
                </div>
              </div>
            )}
            {/* สถิติ */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">สถิติ</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">สถานะ</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    รอการพิจารณา
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">วันที่สมัคร</span>
                  <span className="text-sm text-gray-900">{formatDate(portfolio.createdAt)}</span>
                </div>
                {portfolio.updatedAt !== portfolio.createdAt && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">อัปเดตล่าสุด</span>
                    <span className="text-sm text-gray-900">{formatDate(portfolio.updatedAt)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* การติดต่อ */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">การติดต่อ</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">อีเมล</p>
                    <a href={`mailto:${portfolio.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {portfolio.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="text-green-600">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">โทรศัพท์</p>
                    <a href={`tel:${portfolio.phoneNumber}`} className="text-green-600 hover:text-green-800 text-sm">
                      {portfolio.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* คะแนน GPA */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">คะแนน GPA</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {portfolio.gpa.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600 mb-3">จาก 4.00</div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${(portfolio.gpa / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {((portfolio.gpa / 4) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}