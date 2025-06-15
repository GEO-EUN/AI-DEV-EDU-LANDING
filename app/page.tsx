import Image from 'next/image';
import Link from 'next/link';
import AnimatedProfileImages from "./AnimatedProfileImages";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center py-8 px-4 transition-all duration-300 ease-in-out">
      <section className="flex flex-col items-center text-center mb-10">
        <AnimatedProfileImages />
        <h1 className="text-3xl font-bold mb-10 text-black/80 leading-relaxed drop-shadow-lg">Eun C.</h1>
        <p className="text-xl font-semibold text-blue-900 max-w-2xl mb-6 drop-shadow">정보·컴퓨터 교육, 생성형 AI, 프로그래밍, 알고리즘, 풀스택 개발자</p>
        <p className="text-lg text-gray-700 max-w-2xl mb-2 drop-shadow-sm">다양한 최신 웹 기술과 교육 경험을 바탕으로 성장하는 교사와 학습자를 위한<br/>AI 코딩 교육의 디지털 브랜딩을 실현합니다.</p>
        <div className="flex gap-4 justify-center mt-2 mb-4">
          <a href="https://www.linkedin.com/in/eun-c/" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline visited:text-violet-700 hover:text-violet-500 transition-colors">LinkedIn</a>
          <a href="https://github.com/GEO-EUN" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline visited:text-violet-700 hover:text-violet-500 transition-colors">GitHub</a>
        </div>
      </section>
      <section className="w-full max-w-3xl glass-card rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-violet-800 drop-shadow">About</h2>
        <p className="text-gray-700">IT Consulting, Educational Consulting, Web Development, Information Management, Technical Support, AI융합 코딩·디지털 교육</p>
        <p className="text-gray-700 mt-4">AI Coding•Digital Educator, Information·Computer Education(Block & Physical Coding | Entry•Scratch with AI & microbit•Arduino with C•Python), Generative AI Development(with Cursor AI), Microsoft MVP(Visual Studio•Development Technologies | 2016 & Visual C# | 2013-2015), Next.js, React, Python, Node.js, Git, GitHub, Java, C, C#, ASP.NET Core, SQL, Full-Stack Engineer, IT En-Ko Book Translator</p>
      </section>
      <section className="w-full max-w-3xl glass-card rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-violet-800 drop-shadow">Technical Skills</h2>
        <div className="text-gray-800 space-y-3 leading-relaxed">
          <div><b>Languages:</b> C#, ASP.NET Core MVC, JavaScript(ES6), jQuery, JSON, Ajax, Node.js, Vue.js, HTML5, JAVA, JSP, Python, PHP</div>
          <div><b>Database:</b> MS-SQL Server, MongoDB</div>
          <div><b>Applications:</b> Visual Studio, Git, WebStorm, IntelliJ, GitLab, DevOps, Azure, AWS, Jira, Confluence, Google, Adobe Analytics</div>
          <div><b>Other:</b> Apache Tomcat, 소프트웨어 프로젝트 관리, 통계 데이터 분석</div>
        </div>
      </section>
      <section className="w-full max-w-3xl glass-card rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-violet-800 drop-shadow">Education</h2>
        <ul className="list-disc list-inside text-left text-gray-800">
          <li className="mb-4 flex items-start">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-base">Konkuk University</span>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">2025~현재 | Seoul, South Korea</span>
              </div>
              M.Ed. in Information·Computer Education<br/>
              <em className="mt-2 block text-sm">AI융합 코딩교육전문가, Generative AI, Next.js, React, Python, Node.js, Git, GitHub, Java, C, C#, ASP.NET Core, Web Application Development, Full-Stack Engineer, 정보컴퓨터 중등교육, 기술 번역</em>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-base">King's College London</span>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">2019~2021 | UK, London</span>
              </div>
              PG Certification of MSc in Computing and Internet Systems<br/>
              <em className="mt-2 block text-sm">Advanced Software Engineering, Software Architecture & Design, Optimization Methods, Agents and Multi-Agent Systems, Group Project(Node.js & GitHub)</em>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-base">Kookmin University</span>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">2008~2012 | Seoul, South Korea</span>
              </div>
              Bachelor of Management Information Systems<br/>
              <em className="mt-2 block text-sm">OOP, IT Security & Privacy, ERP, Project Management, Statistical Data Analysis, Finance & Accounting Information System</em>
            </div>
          </li>
        </ul>
      </section>
      <section className="w-full max-w-3xl glass-card rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-6 text-violet-800 drop-shadow">IT Book En-Ko Translator</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li className="flex items-center justify-between">
            <span className="font-semibold text-base">
              R for Microsoft Excel Users <span className="font-normal">(QUE, 2019)</span>
            </span>
            <span>
              <a href="https://www.oreilly.com/library/view/r-for-microsoft/9780134571881/" target="_blank" rel="noopener noreferrer" className="ml-2 text-violet-600 underline text-sm">영문</a> |
              <a href="https://product.kyobobook.co.kr/detail/S000001294219" target="_blank" rel="noopener noreferrer" className="ml-1 text-violet-600 underline text-sm">한글</a>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-semibold text-base">
              Programming Entity Framework Code First <span className="font-normal">(O'Reilly, 2012)</span>
            </span>
            <span>
              <a href="https://www.oreilly.com/library/view/programming-entity-framework/9781449317867/" target="_blank" rel="noopener noreferrer" className="ml-2 text-violet-600 underline text-sm">영문</a> |
              <a href="https://product.kyobobook.co.kr/detail/S000001556081" target="_blank" rel="noopener noreferrer" className="ml-1 text-violet-600 underline text-sm">한글</a>
            </span>
          </li>
        </ul>
      </section>
      <section className="w-full max-w-3xl glass-card rounded-2xl shadow-xl p-8 mb-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-3 text-violet-800 drop-shadow">Award</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <span className="font-semibold text-base">MICROSOFT MVP (MOST VALUABLE PROFESSIONAL) AWARD</span>
          <span className="text-sm text-gray-500 mt-1 md:mt-0">2013-18, 2021 &nbsp;|&nbsp; Seoul, South Korea</span>
        </div>
        <p className="text-gray-700 text-sm mb-2">Shared of IT skills with MS Tech as a lecturer, community leader and mediator for users</p>
        <div className="ml-4">
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 mb-2">
            <li>Specializing in C#, ASP.NET(Core/MVC) Skills</li>
            <li>Joined Global summit in Seattle</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>MVP Reconnect (2018-2021)</li>
            <li>Visual Studio & Development Technologies (2016)</li>
            <li>Visual C# (2013, 2014, 2015)</li>
          </ul>
        </div>
      </section>
      <footer className="w-full max-w-4xl text-center text-gray-500 py-6 mt-8 border-t">© 2025 GEO-EUN. All rights reserved.</footer>
    </main>
  );
} 