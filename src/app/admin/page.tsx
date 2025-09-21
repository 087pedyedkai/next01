'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import usePortfolioStore from '@/store/portfolio';
import { Portfolio } from '@/types/portfolio';

type SortField = 'firstName' | 'lastName' | 'gpa' | 'university' | 'createdAt';
type SortDirection = 'asc' | 'desc';

export default function AdminPage() {
  const portfolios = usePortfolioStore((state) => state.portfolios);
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedPortfolios = useMemo(() => {
    let filtered = portfolios.filter((portfolio) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        portfolio.firstName.toLowerCase().includes(searchLower) ||
        portfolio.lastName.toLowerCase().includes(searchLower) ||
        portfolio.university.toLowerCase().includes(searchLower) ||
        portfolio.selectedProgram.toLowerCase().includes(searchLower)
      );
    });

    return filtered.sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [portfolios, searchTerm, sortField, sortDirection]);

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ระบบจัดการใบสมัคร TCAS69
              </h1>
              <p className="text-gray-600 mt-1">
                จำนวนใบสมัครทั้งหมด: {portfolios.length} ใบสมัคร
              </p>
            </div>
            <Link
              href="/portfolio/add"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center gap-2"
            >
              <span>+</span>
              เพิ่มใบสมัครใหม่
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                ค้นหาใบสมัคร
              </label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ค้นหาจากชื่อ, นามสกุล, มหาวิทยาลัย, หรือสาขา..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredAndSortedPortfolios.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-gray-400 text-6xl mb-4">📋</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {portfolios.length === 0 ? 'ยังไม่มีใบสมัคร' : 'ไม่พบผลการค้นหา'}
              </h3>
              <p className="text-gray-600 mb-6">
                {portfolios.length === 0 
                  ? 'เริ่มต้นโดยการเพิ่มใบสมัครใหม่'
                  : 'ลองเปลี่ยนคำค้นหาหรือล้างตัวกรอง'
                }
              </p>
              {portfolios.length === 0 && (
                <Link
                  href="/portfolio/add"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  เพิ่มใบสมัครแรก
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      onClick={() => handleSort('firstName')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      ชื่อ-นามสกุล {getSortIcon('firstName')}
                    </th>
                    <th
                      onClick={() => handleSort('gpa')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      GPA {getSortIcon('gpa')}
                    </th>
                    <th
                      onClick={() => handleSort('university')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      มหาวิทยาลัย {getSortIcon('university')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      สาขาวิชา
                    </th>
                    <th
                      onClick={() => handleSort('createdAt')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      วันที่สมัคร {getSortIcon('createdAt')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      การดำเนินการ
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAndSortedPortfolios.map((portfolio) => (
                    <tr key={portfolio.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                              {portfolio.firstName.charAt(0)}{portfolio.lastName.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {portfolio.firstName} {portfolio.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {portfolio.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {portfolio.gpa.toFixed(2)}
                          </span>
                          <div className="ml-2 w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(portfolio.gpa / 4) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {portfolio.university}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {portfolio.selectedProgram}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(portfolio.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/portfolio/${portfolio.id}`}
                          className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition duration-200"
                        >
                          ดูรายละเอียด
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Statistics */}
        {portfolios.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-gray-500">GPA เฉลี่ย</div>
              <div className="text-2xl font-bold text-blue-600">
                {(portfolios.reduce((sum, p) => sum + p.gpa, 0) / portfolios.length).toFixed(2)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-gray-500">GPA สูงสุด</div>
              <div className="text-2xl font-bold text-green-600">
                {Math.max(...portfolios.map(p => p.gpa)).toFixed(2)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm font-medium text-gray-500">GPA ต่ำสุด</div>
              <div className="text-2xl font-bold text-red-600">
                {Math.min(...portfolios.map(p => p.gpa)).toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}