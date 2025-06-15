'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Practice() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-black/80">프로그래밍 실습하기</h1>
        </div>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-2">🎯 프로그래밍 과정을 알아보자</h3>
          <div className="input-tips mb-3">
            <h5 className="font-semibold mb-3">💡 학습 팁</h5>
            <ul className="list-disc list-inside text-black/60 text-sm space-y-1">
              <li>플립북 실행버튼을 클릭해 주세요.</li>
              <li>주제별 블록코딩 결과를 확인해 보세요.</li>
            </ul>
          </div>
          <iframe allowFullScreen scrolling="no" className="fp-iframe rounded-lg border" src="https://heyzine.com/flip-book/03c73a56e2.html" style={{ border: '1px solid lightgray', width: '100%', height: '333px' }} title="프로그래밍 과정 플립북" />
        </section>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-4">🎯 묻고 대답하기</h3>
          <div className="input-tips mb-3">
            <h5 className="font-semibold mb-3">💡 학습팁</h5>
            <ul className="list-disc list-inside text-black/60 text-sm space-y-1">
              <li>녹색깃발을 클릭해 주세요.</li>
              <li>입력과 출력을 연습해 보세요.</li>
            </ul>
          </div>
          <div style={{ width: '100%', maxWidth: '700px', aspectRatio: '16/10', margin: 'auto' }}>
            <iframe src="https://scratch.mit.edu/projects/1187864877/embed" frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%', minHeight: '300px', border: '1px solid #ccc', display: 'block' }} title="묻고 대답하기 실습" />
          </div>
        </section>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-4">🎯 자동차 미로찾기</h3>
          <div className="input-tips mb-3">
            <h5 className="font-semibold mb-3">💡 학습팁</h5>
            <ul className="list-disc list-inside text-black/60 text-sm space-y-1">
              <li>녹색깃발을 클릭해 주세요.</li>
              <li>방향키를 눌러 자동차를 깃발까지 이동해 보세요.</li>
              <li>10초 안에 깃발까지 도착해야 합니다.</li>
              <li>미로 선에 닿으면 원위치로 돌아갑니다.</li>
            </ul>
          </div>
          <div style={{ width: '100%', maxWidth: '700px', aspectRatio: '16/10', margin: 'auto' }}>
            <iframe src="https://scratch.mit.edu/projects/1187864113/embed" frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%', minHeight: '300px', border: '1px solid #ccc', display: 'block' }} title="자동차 미로찾기 실습" />
          </div>
        </section>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-4">🎯 병아리 미로찾기</h3>
          <div className="input-tips mb-3">
            <h5 className="font-semibold mb-3">💡 학습팁</h5>
            <ul className="list-disc list-inside text-black/60 text-sm space-y-1">
              <li>녹색깃발을 클릭해 주세요.</li>
              <li>방향키를 눌러 미로 따라 엄마 닭으로 이동해 보세요.</li>
              <li>60초 안에 엄마 닭 못 찾으면 게임오버입니다.</li>
              <li>뱀과 미로 선에 닿으면 원위치로 돌아갑니다.</li>
            </ul>
          </div>
          <div style={{ width: '100%', maxWidth: '700px', aspectRatio: '16/10', margin: 'auto' }}>
            <iframe src="https://scratch.mit.edu/projects/1187864335/embed" frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%', minHeight: '300px', border: '1px solid #ccc', display: 'block' }} title="병아리 미로찾기 실습" />
          </div>
        </section>
        <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4 w-full mb-8">
          <h3 className="text-lg font-bold text-black/80 mb-4">🎯 음료수 자동판매기</h3>
          <div className="input-tips mb-3">
            <h5 className="font-semibold mb-3">💡 학습팁</h5>
            <ul className="list-disc list-inside text-black/60 text-sm space-y-1">
              <li>녹색깃발을 클릭해 주세요.</li>
              <li>음료수를 선택해 주세요.</li>
              <li>오른쪽 리스트에 선택한 음료의 개수가 표시됩니다.</li>
              <li>계산 버튼을 클릭하신 후 거스름돈을 받거나 부족한 금액을 더 내 주세요.</li>
            </ul>
          </div>
          <div style={{ width: '100%', maxWidth: '700px', aspectRatio: '16/10', margin: 'auto' }}>
            <iframe src="https://scratch.mit.edu/projects/1187850306/embed" frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%', minHeight: '300px', border: '1px solid #ccc', display: 'block' }} title="음료수 자동판매기 실습" />
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4">
            <h3 className="text-lg font-bold text-black/80 mb-3">온라인 실습 플랫폼</h3>
            <ul className="list-disc list-inside text-black/70 font-light space-y-2 text-sm">
              <li><a href="https://codeup.kr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CodeUp</a> - 한국어 코딩테스트/실습</li>
              <li><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HackerRank</a> - 다양한 언어와 난이도의 실습 문제</li>
              <li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LeetCode</a> - 인터뷰 대비 실습 문제</li>
              <li><a href="https://playentry.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">엔트리</a> - 블록형 코딩 학습 플랫폼 (국내)</li>
              <li><a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">스크래치</a> - 블록형 코딩 학습 플랫폼 (해외)</li>
            </ul>
          </section>
          <section className="bg-white/60 rounded-2xl border border-white/30 shadow p-4">
            <h3 className="text-lg font-bold text-black/80 mb-3">온라인 실습 UI</h3>
            <ul className="list-disc list-inside text-black/70 font-light space-y-2 mb-4 text-sm">
              <li><b>JSFiddle</b> - HTML/CSS/JS 실습, 로그인 없이 사용 가능, 임베드 지원 <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">바로가기</a></li>
              <li><b>JDoodle</b> - 70개 이상의 언어 지원, 로그인 없이 사용 가능, 임베드 지원 <a href="https://www.jdoodle.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">바로가기</a></li>
              <li><b>Replit</b> - 다양한 언어 지원, 로그인 없이 일부 언어 실습 가능, 임베드 지원 <a href="https://replit.com/languages" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">바로가기</a></li>
              <li><b>CodePen</b> - 웹 프론트엔드 실습, 로그인 없이 사용 가능, 임베드 지원 <a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">바로가기</a></li>
            </ul>
          </section>
        </div>
      </div>
      <footer className="w-full max-w-4xl text-center text-gray-500 py-6 mt-8 border-t">© 2025 GEO-EUN. All rights reserved.</footer>
    </main>
  );
} 