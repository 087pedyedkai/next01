'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import usePortfolioStore from '@/store/portfolio';
import { portfolioSchema, type PortfolioFormSchema } from '@/lib/validations/portfolio';
import { UNIVERSITY_PROGRAMS } from '@/types/portfolio';
import FileUpload from '@/app/component/ui/FileUpload';

export default function AddPortfolioPage() {
  const router = useRouter();
  const addPortfolio = usePortfolioStore((state) => state.addPortfolio);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileImage, setProfileImage] = useState<FileList | null>(null);
  const [activityImages, setActivityImages] = useState<FileList | null>(null);
  const [awardImages, setAwardImages] = useState<FileList | null>(null);
  const [portfolioFiles, setPortfolioFiles] = useState<FileList | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PortfolioFormSchema>({
    resolver: zodResolver(portfolioSchema),
  });

  const selectedUniversity = watch('university');
  const filteredPrograms = selectedUniversity 
    ? UNIVERSITY_PROGRAMS.filter(program => program.universityName === selectedUniversity)
    : [];

  const onSubmit = async (data: PortfolioFormSchema) => {
    setIsSubmitting(true);
    try {
      // Convert FileList to URLs (in a real app, you'd upload to a server)
      const convertFilesToUrls = (fileList: FileList | null): string[] => {
        if (!fileList) return [];
        return Array.from(fileList).map(file => URL.createObjectURL(file));
      };

      const portfolioData = {
        ...data,
        profileImage: profileImage ? URL.createObjectURL(profileImage[0]) : undefined,
        activityImages: convertFilesToUrls(activityImages),
        awardImages: convertFilesToUrls(awardImages),
        portfolioFiles: convertFilesToUrls(portfolioFiles),
      };

      addPortfolio(portfolioData);
      router.push('/admin');
    } catch (error) {
      console.error('Error submitting portfolio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              แบบฟอร์มสมัคร TCAS69
            </h1>
            <p className="text-blue-100 text-center mt-2">
              กรุณากรอกข้อมูลให้ครบถ้วนเพื่อสมัครเข้าศึกษาต่อในระดับมหาวิทยาลัย
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* ข้อมูลส่วนตัว */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                ข้อมูลส่วนตัว
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="กรอกชื่อ"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="กรอกนามสกุล"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ที่อยู่ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="กรอกที่อยู่ที่ติดต่อได้"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    หมายเลขโทรศัพท์ <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phoneNumber')}
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0812345678"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* ข้อมูลการศึกษา */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                ข้อมูลการศึกษา
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    โรงเรียน <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('school')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ชื่อโรงเรียน"
                  />
                  {errors.school && (
                    <p className="text-red-500 text-sm mt-1">{errors.school.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('gpa', { valueAsNumber: true })}
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00 - 4.00"
                  />
                  {errors.gpa && (
                    <p className="text-red-500 text-sm mt-1">{errors.gpa.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* ข้อมูลการสมัคร */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                ข้อมูลการสมัคร
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      มหาวิทยาลัย <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('university')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">เลือกมหาวิทยาลัย</option>
                      {Array.from(new Set(UNIVERSITY_PROGRAMS.map(p => p.universityName))).map((university) => (
                        <option key={university} value={university}>
                          {university}
                        </option>
                      ))}
                    </select>
                    {errors.university && (
                      <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สาขาวิชา <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('selectedProgram')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={!selectedUniversity}
                    >
                      <option value="">เลือกสาขาวิชา</option>
                      {filteredPrograms.map((program) => (
                        <option key={program.id} value={`${program.programName} - ${program.faculty}`}>
                          {program.programName} - {program.faculty}
                        </option>
                      ))}
                    </select>
                    {errors.selectedProgram && (
                      <p className="text-red-500 text-sm mt-1">{errors.selectedProgram.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ความสามารถพิเศษ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('specialSkills')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="บรรยายความสามารถพิเศษของคุณ เช่น ทักษะด้านคอมพิวเตอร์, ภาษาต่างประเทศ, ดนตรี, กีฬา ฯลฯ"
                  />
                  {errors.specialSkills && (
                    <p className="text-red-500 text-sm mt-1">{errors.specialSkills.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    เหตุผลในการสมัครเข้าเรียน <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('applicationReason')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="บรรยายเหตุผลที่คุณต้องการเข้าเรียนในสาขาและมหาวิทยาลัยนี้"
                  />
                  {errors.applicationReason && (
                    <p className="text-red-500 text-sm mt-1">{errors.applicationReason.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* อัปโหลดไฟล์และรูปภาพ */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                อัปโหลดไฟล์และรูปภาพ
              </h2>
              <div className="space-y-6">
                <FileUpload
                  label="รูปภาพโปรไฟล์"
                  accept="image/*"
                  onChange={setProfileImage}
                  value={profileImage}
                  description="อัปโหลดรูปภาพของคุณ (สูงสุด 1 ไฟล์)"
                />

                <FileUpload
                  label="รูปภาพกิจกรรม"
                  accept="image/*"
                  multiple
                  onChange={setActivityImages}
                  value={activityImages}
                  description="อัปโหลดรูปภาพกิจกรรมที่เข้าร่วม (สามารถเลือกหลายไฟล์ได้)"
                />

                <FileUpload
                  label="รูปภาพรางวัลและผลงาน"
                  accept="image/*"
                  multiple
                  onChange={setAwardImages}
                  value={awardImages}
                  description="อัปโหลดรูปภาพรางวัลและผลงานที่ได้รับ (สามารถเลือกหลายไฟล์ได้)"
                />

                <FileUpload
                  label="ไฟล์ Portfolio อื่นๆ"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  multiple
                  onChange={setPortfolioFiles}
                  value={portfolioFiles}
                  description="อัปโหลดไฟล์เอกสาร เช่น ใบรับรอง, ผลงาน, etc. (PDF, Word, PowerPoint)"
                />
              </div>
            </div>

            {/* ปุ่มส่งข้อมูล */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลสมัคร'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}