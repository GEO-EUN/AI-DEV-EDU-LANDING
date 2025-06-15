'use client';

export default function Programming() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center py-8 px-4">
      {/* Remove the border line above the title */}
      {/* <div className="w-full border-b border-gray-200" /> */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-black/80">문제해결과 프로그래밍</h1>
        </div>
        {/* 전자책 소개 카드 */}
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <p className="text-black/70 font-light text-sm mb-3">
            비상교육 정보교과서의 3단원 문제해결과 프로그래밍을 전자책으로 만든 프로젝트입니다. 다양한 알고리즘과 프로그래밍 실습 자료를 확인할 수 있습니다.
          </p>
          <a href="https://geo-eun.github.io/EPUB-ALGORITHMS-PROGRAMMING/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold mb-1 inline-block">전자책 github 페이지 바로가기</a><br/>
          <a href="https://github.com/GEO-EUN/EPUB-ALGORITHMS-PROGRAMMING" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold inline-block">전자책 github 바로가기</a>
        </section>
        {/* 전자책 임베드 카드 */}
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <div className="w-full" style={{ aspectRatio: '16/9', maxWidth: '1000px', minHeight: '1200px' }}>
            <iframe
              src="https://geo-eun.github.io/EPUB-ALGORITHMS-PROGRAMMING"
              className="w-full h-full rounded-xl border border-gray-300"
              style={{ minHeight: '1200px' }}
              allowFullScreen
              title="EPUB Algorithms Programming"
            />
          </div>
        </section>
      </div>
      <footer className="w-full max-w-4xl text-center text-gray-500 py-6 mt-8 border-t">© 2025 GEO-EUN. All rights reserved.</footer>
    </main>
  );
} 