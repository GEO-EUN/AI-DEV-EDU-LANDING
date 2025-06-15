'use client';
import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';

const skills = [
  { type: 'Language', name: 'C#' },
  { type: 'Language', name: 'ASP.NET Core MVC' },
  { type: 'Language', name: 'JavaScript(ES6)' },
  { type: 'Language', name: 'jQuery' },
  { type: 'Language', name: 'JSON' },
  { type: 'Language', name: 'Ajax' },
  { type: 'Language', name: 'Node.js' },
  { type: 'Language', name: 'Vue.js' },
  { type: 'Language', name: 'HTML5' },
  { type: 'Language', name: 'JAVA' },
  { type: 'Language', name: 'JSP' },
  { type: 'Language', name: 'Python' },
  { type: 'Language', name: 'PHP' },
  { type: 'Database', name: 'MS-SQL Server' },
  { type: 'Database', name: 'MongoDB' },
  { type: 'Application', name: 'Visual Studio' },
  { type: 'Application', name: 'Git' },
  { type: 'Application', name: 'WebStorm' },
  { type: 'Application', name: 'IntelliJ' },
  { type: 'Application', name: 'GitLab' },
  { type: 'Application', name: 'DevOps' },
  { type: 'Application', name: 'Azure' },
  { type: 'Application', name: 'AWS' },
  { type: 'Application', name: 'Jira' },
  { type: 'Application', name: 'Confluence' },
  { type: 'Application', name: 'Google' },
  { type: 'Application', name: 'Adobe Analytics' },
  { type: 'Other', name: 'Apache Tomcat' },
  { type: 'Other', name: '프로젝트 관리' },
  { type: 'Other', name: '통계 데이터 분석' },
];

export default function HomeProfile() {
  const [filter, setFilter] = useState('All');
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center py-8 px-4">
      <link rel="stylesheet" href="/style/algorithms.css" />
      <link rel="stylesheet" href="/style/theme.css" />
      <Script src="/js/theme.js" strategy="afterInteractive" />
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center mb-10">
          <Image
            src="/images/Image_me.jpg"
            alt="프로필 사진"
            width={180}
            height={180}
            className="rounded-full border-4 border-violet-200 shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
            priority
          />
          <h1 className="text-3xl font-bold mb-2 text-black/80">Eun C.</h1>
          <p className="text-lg text-black/60 font-light max-w-2xl mb-2">
            AI Coding·Digital Educator, IT Book Translator, Full-Stack Engineer<br/>
            정보·컴퓨터 교육, 생성형 AI, 프로그래밍, 알고리즘, 풀스택 개발자
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <a href="https://www.linkedin.com/in/eun-c/" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline visited:text-violet-700">LinkedIn</a>
            <a href="https://github.com/GEO-EUN" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline visited:text-violet-700">GitHub</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-6 border border-gray-200 rounded-2xl bg-white/80">
            <h2 className="text-xl font-bold text-black/80 mb-3">기술스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-violet-700 mb-2">Language</h3>
                <ul className="list-disc list-inside text-black/70 font-light mb-4">
                  {skills.filter(s => s.type === 'Language').map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-violet-700 mb-2">Database</h3>
                <ul className="list-disc list-inside text-black/70 font-light mb-4">
                  {skills.filter(s => s.type === 'Database').map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-violet-700 mb-2">Application</h3>
                <ul className="list-disc list-inside text-black/70 font-light mb-4">
                  {skills.filter(s => s.type === 'Application').map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-violet-700 mb-2">Other</h3>
                <ul className="list-disc list-inside text-black/70 font-light">
                  {skills.filter(s => s.type === 'Other').map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="p-6 border border-gray-200 rounded-2xl bg-white/80">
            <h2 className="text-xl font-bold text-black/80 mb-3">학력</h2>
            <ul className="list-disc list-inside text-black/70 font-light">
              <li className="mb-4">
                <b>Konkuk University</b> (2025~현재)<br/>
                M.Ed. in Information·Computer Education<br/>
                <em className="mt-2 block text-sm">AI융합 코딩교육전문가, Generative AI, Next.js, React, Python, Node.js, Git, GitHub, Java, C, C#, ASP.NET Core, Web Application Development, Full-Stack Engineer, 정보컴퓨터 중등교육, 기술 번역</em>
              </li>
              <li className="mb-4">
                <b>King's College London</b> (2019~2021)<br/>
                PG Certification of MSc in Computing and Internet Systems<br/>
                <em className="mt-2 block text-sm">Advanced Software Engineering, Software Architecture & Design, Optimization Methods, Agents and Multi-Agent Systems, Group Project(Node.js & GitHub)</em>
              </li>
              <li className="mb-4">
                <b>Kookmin University</b> (2008~2012)<br/>
                Bachelor of Management Information Systems<br/>
                <em className="mt-2 block text-sm">OOP, IT Security & Privacy, ERP, Project Management, Statistical Data Analysis, Finance & Accounting Information System</em>
              </li>
            </ul>
          </section>
          <section className="p-6 border border-gray-200 rounded-2xl bg-white/80">
            <h2 className="text-xl font-bold text-black/80 mb-3">IT Book En-Ko Translator</h2>
            <ul className="list-disc list-inside text-black/70 font-light space-y-2">
              <li>
                <b>R for Microsoft Excel Users</b> (QUE, 2019)
                <br/>
                <a href="https://www.oreilly.com/library/view/r-for-microsoft/9780134571881/" target="_blank" rel="noopener noreferrer" className="ml-2 text-violet-600 underline">영문</a> |
                <a href="https://product.kyobobook.co.kr/detail/S000001294219" target="_blank" rel="noopener noreferrer" className="ml-1 text-violet-600 underline">한글</a>
              </li>
              <li>
                <b>Programming Entity Framework Code First</b> (O'Reilly)
                <br/>
                <a href="https://www.oreilly.com/library/view/programming-entity-framework/9781449317867/" target="_blank" rel="noopener noreferrer" className="ml-2 text-violet-600 underline">영문</a> |
                <a href="https://product.kyobobook.co.kr/detail/S000001556081" target="_blank" rel="noopener noreferrer" className="ml-1 text-violet-600 underline">한글</a>
              </li>
            </ul>
          </section>
          <section className="p-6 border border-gray-200 rounded-2xl bg-white/80">
            <h2 className="text-xl font-bold text-black/80 mb-3">Keywords</h2>
            <p className="text-black/60 font-light">IT Consulting, Educational Consulting, Web Development, Information Management, Technical Support, AI융합 코딩·디지털 교육, Generative AI Development, Web Application Development, Next.js, Python</p>
          </section>
        </div>
        <footer className="w-full text-center text-black/50 py-6 mt-8 border-t border-white/30">
          &copy; 2024 GEO-EUN. All rights reserved.<br/>
          <span className="text-xs text-black/30">Powered by Next.js, React, HTML5, CSS3, JS</span>
        </footer>
      </div>
      <footer className="w-full max-w-4xl text-center text-gray-500 py-6 mt-8 border-t">© 2025 GEO-EUN. All rights reserved.</footer>
    </main>
  );
} 