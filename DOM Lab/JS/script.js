var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

menuLinks.forEach(linkObj) => {
    const a = document.createElement("a")
    a.setAttribute('href', linkObj.href)
    a.textContent = linkObj.text
    topMenuEL.appendChild(a)
    console.log(a);

})

const topMenuEL = document.querySelector("#top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = `var(--top-menu-bg)"`
topMenuEL.classList.add("flex-around")

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = "<h1> SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr");


