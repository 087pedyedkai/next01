import { useState, useRef } from 'react';

interface FileUploadProps {
  label: string;
  accept: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
  value?: FileList | null;
  error?: string;
  description?: string;
}

export default function FileUpload({
  label,
  accept,
  multiple = false,
  onChange,
  value,
  error,
  description
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isImage = (file: File) => {
    return file.type.startsWith('image/');
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {description && (
          <span className="text-xs text-gray-500 block mt-1">{description}</span>
        )}
      </label>
      
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
          dragActive
            ? 'border-blue-400 bg-blue-50'
            : error
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
        />
        
        <div className="text-center">
          <div className="text-4xl mb-4">
            {accept.includes('image') ? '🖼️' : '📄'}
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <button
              type="button"
              onClick={onButtonClick}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              คลิกเพื่อเลือกไฟล์
            </button>
            <span> หรือลากไฟล์มาวาง</span>
          </div>
          <p className="text-xs text-gray-500">
            รองรับไฟล์ประเภท: {accept.split(',').join(', ')}
            {multiple && ' (สามารถเลือกหลายไฟล์ได้)'}
          </p>
        </div>
      </div>

      {/* แสดงไฟล์ที่เลือก */}
      {value && value.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            ไฟล์ที่เลือก ({value.length} ไฟล์):
          </h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {Array.from(value).map((file, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-white rounded border">
                <div className="flex-shrink-0">
                  {isImage(file) ? (
                    <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs">IMG</span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-600 text-xs">FILE</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}