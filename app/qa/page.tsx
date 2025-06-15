'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function QA() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-black/80">Q&A</h1>
        </div>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-2">📝 패들랫으로 질문하기</h3>
          <p className="text-black/70 font-light text-sm mb-4">
            패들랫에서 상호작용하는 질문과 답변하기
          </p>
          <div className="padlet-container mb-6">
            <iframe
              src="https://padlet.com/embed/xmju3laff0on2zqe"
              frameBorder="0"
              allow="camera;microphone;geolocation"
              style={{ width: '100%', height: '800px', display: 'block', padding: 0, margin: 0 }}
              className="rounded-lg border border-gray-300"
              title="Q&A Padlet"
            />
          </div>
          <div className="padlet-info">
            <h4 className="text-base font-semibold text-black/80 mb-2">💡 패들랫 사용 안내</h4>
            <ul className="list-disc list-inside text-black/70 font-light space-y-1 text-sm">
              <li>패들랫에 질문을 작성하면 실시간으로 공유됩니다</li>
              <li>다른 학생들의 질문과 답변을 함께 볼 수 있습니다</li>
              <li>이미지나 코드를 첨부하여 질문할 수 있습니다</li>
              <li>질문 작성시 이름을 꼭 기입해주세요</li>
            </ul>
          </div>
        </section>
      </div>
      <footer className="w-full max-w-4xl text-center text-gray-500 py-6 mt-8 border-t">© 2025 GEO-EUN. All rights reserved.</footer>
    </main>
  );
} 