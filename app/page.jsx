'use client'
import { useState } from 'react';

export default function UploadPage() {
  const [format, setFormat] = useState('both'); // Default to 'photo'
  

  const handleFormatChange = (e) => {
    setFormat(e.target.value); // Update the format when user selects photo or video
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
      {/* Dynamic Heading */}
      <h1 className="text-3xl font-bold mb-6 text-white">
        {format === 'both'
          ? 'Upload your photo/video'
          : format === 'photo'
          ? 'Upload your photo'
          : 'Upload your video'}
      </h1>

      <div className="flex items-center space-x-4 mb-4 text-white">
        <label className="text-lg font-medium">Choose your format:</label>
        <div className="flex space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="format"
              value="photo"
              checked={format === 'photo'}
              onChange={handleFormatChange}
              className="mr-2"
            />
            Photo
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="format"
              value="video"
              checked={format === 'video'}
              onChange={handleFormatChange}
              className="mr-2"
            />
            Video
          </label>
        </div>
      </div>

      {/* File Input: Accepts only photo or video based on selection */}
      <div className="w-96 h-48 flex justify-center items-center border-2 border-dashed border-gray-400 rounded-lg bg-white">
        <input
          type="file"
          accept={format === 'photo' ? 'image/*' : 'video/*'}
          className="p-2"
        />
      </div>
    </div>
  );
}
