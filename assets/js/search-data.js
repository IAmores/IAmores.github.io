const ninja=document.querySelector("ninja-keys");ninja.data=[{id:"nav-about",title:"About",section:"Navigation",handler:()=>{window.location.href="/"}},{id:"nav-blog",title:"Blog",description:"",section:"Navigation",handler:()=>{window.location.href="/blog/"}},{id:"nav-publications",title:"Publications",description:"publications by categories in reversed chronological order. generated by jekyll-scholar.",section:"Navigation",handler:()=>{window.location.href="/publications/"}},{id:"nav-cv",title:"CV",description:"This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",section:"Navigation",handler:()=>{window.location.href="/cv/"}},{id:"post-modular-and-lightweight-elimination-of-transaction-reordering-attacks",title:"Modular and lightweight elimination of transaction reordering attacks",description:"A layer of protection against sandwich attacks",section:"Posts",handler:()=>{window.location.href="/blog/2024/sandwich/"}},{id:"post-displaying-external-posts-on-your-al-folio-blog",title:"Displaying External Posts on Your al-folio Blog",description:"",section:"Posts",handler:()=>{window.location.href="/blog/2022/displaying-external-posts-on-your-al-folio-blog/"}},{id:"project-project-1",title:"project 1",description:"with background image",section:"Projects",handler:()=>{window.location.href="/projects/1_project/"}},{id:"project-project-2",title:"project 2",description:"a project with a background image and giscus comments",section:"Projects",handler:()=>{window.location.href="/projects/2_project/"}},{id:"project-project-3-with-very-long-name",title:"project 3 with very long name",description:"a project that redirects to another website",section:"Projects",handler:()=>{window.location.href="/projects/3_project/"}},{id:"project-project-4",title:"project 4",description:"another without an image",section:"Projects",handler:()=>{window.location.href="/projects/4_project/"}},{id:"project-project-5",title:"project 5",description:"a project with a background image",section:"Projects",handler:()=>{window.location.href="/projects/5_project/"}},{id:"project-project-6",title:"project 6",description:"a project with no image",section:"Projects",handler:()=>{window.location.href="/projects/6_project/"}},{id:"socials-email",title:"Send email",section:"Socials",handler:()=>{window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D","_blank")}},{id:"socials-google-scholar",title:"Google Scholar",section:"Socials",handler:()=>{window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ","_blank")}},{id:"socials-rss",title:"RSS Feed",section:"Socials",handler:()=>{window.open("/feed.xml","_blank")}},{id:"light-theme",title:"Change theme to light",description:"Change the theme of the site to Light",section:"Theme",handler:()=>{setThemeSetting("light")}},{id:"dark-theme",title:"Change theme to dark",description:"Change the theme of the site to Dark",section:"Theme",handler:()=>{setThemeSetting("dark")}},{id:"system-theme",title:"Use system default theme",description:"Change the theme of the site to System Default",section:"Theme",handler:()=>{setThemeSetting("system")}}];