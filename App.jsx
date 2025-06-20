import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/generate', { prompt });
      setResult(res.data.result);
    } catch (err) {
      setResult('❌ حدث خطأ. تأكد من الاتصال وحاول مرة أخرى.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">🤖 سامر AI – مساعد التسويق الذكي</h1>
        <textarea
          className="w-full p-4 border rounded-xl mb-4"
          placeholder="اكتب طلبك هنا (مثال: خطة تسويق لعطر في العيد)"
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          onClick={generateResponse}
          disabled={loading}
        >
          {loading ? 'جارٍ التحميل...' : '🔍 تحليل'}
        </button>

        {result && (
          <div className="mt-6 whitespace-pre-wrap text-right text-gray-800 bg-gray-50 p-4 rounded-xl">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
