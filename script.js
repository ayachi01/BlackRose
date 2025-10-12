const navLinks = [
  { name: "Home", url: "#" },
  { name: "Tickets", url: "#tickets" },
  { name: "About", url: "#about" },
];

const navbar = document.getElementById("navbar");
navLinks.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = link.name;
  a.href = link.url;
  li.appendChild(a);
  navbar.appendChild(li);
});