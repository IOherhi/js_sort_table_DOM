var t=document.body.querySelector("thead").querySelectorAll("tr"),e=document.body.querySelector("tbody"),n=Array.from(e.children);t.forEach(function(t){t.addEventListener("click",function(t){n.sort(function(t,e){return t.firstElementChild.textContent.localeCompare(e.firstElementChild.textContent)}),e.textContent="",n.forEach(function(t){e.append(t)})})}),console.log(t);
//# sourceMappingURL=index.42915998.js.map
