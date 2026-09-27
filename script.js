const skills=[
["C","C",82],["C++","C+",88],["Python","PY",88],["J2SE","JA",72],
["HTML / CSS","WEB",92],["JavaScript","JS",82],["Node.js","ND",76],["Express.js","EX",74],
["React.js","RE",80],["Tailwind CSS","TW",82],["DSA","DS",78],["OOP","OO",82],
["Git / GitHub","GH",88],["Communication","CO",90],["Teamwork","TW",88],["Leadership","LD",80]
];

const projects=[
{letter:"GG",title:"Gau Gyan – Image Breed Recognition",desc:"Worked on the user interface design for an image-based breed recognition project, focusing on a clean and usable experience.",role:"UI Designer",stack:"Tailwind CSS",github:"#",demo:"#"},
{letter:"KX",title:"KaushalyaX AI – Skill Development & Industry Alignment Platform",desc:"A solution concept designed to bridge the gap between learners' skills, skill-development programs and evolving industry requirements.",role:"UI/UX Designer & React Developer",stack:"MERN — MongoDB, Express.js, React.js, Node.js",github:"#",demo:"#"}
];

document.getElementById("skillsGrid").innerHTML=skills.map(([n,i,p])=>`
<div class="skill reveal"><div class="skill-top"><div class="skill-icon">${i}</div><div class="skill-name">${n}</div><div class="pct">${p}%</div></div><div class="bar"><span data-width="${p}%"></span></div></div>`).join("");

document.getElementById("projectsGrid").innerHTML=projects.map(p=>`
<article class="project">
  <div class="thumb">${p.letter}</div>
  <div class="project-body">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="role">Role: ${p.role}</div>
    <div class="stack">Technology: ${p.stack}</div>
    <div class="chips"><span class="chip">Student Project</span><span class="chip">Portfolio</span></div>
    <div class="project-links"><a href="${p.github}" target="_blank">GitHub</a><a href="${p.demo}" target="_blank">Project</a></div>
  </div>
</article>`).join("");

const observer=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add("visible");
    e.target.querySelectorAll?.(".bar span").forEach(x=>x.style.width=x.dataset.width);
  }
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

document.getElementById("menuBtn").onclick=()=>document.getElementById("navLinks").classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>document.getElementById("navLinks").classList.remove("open"));
document.getElementById("themeBtn").onclick=()=>{
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent=document.body.classList.contains("light")?"☾":"☼";
};
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").onsubmit=e=>{
  e.preventDefault();
  const n=document.getElementById("name").value.trim(),em=document.getElementById("email").value.trim(),
        s=document.getElementById("subject").value.trim(),m=document.getElementById("message").value.trim(),
        st=document.getElementById("status");
  if(!n||!em||!s||!m){st.textContent="Please fill all fields.";return}
  window.location.href=`mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent("Name: "+n+"\nEmail: "+em+"\n\n"+m)}`;
  st.textContent="Opening your email app...";
};
