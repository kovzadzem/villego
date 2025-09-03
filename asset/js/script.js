// პატარა JS მობილური მენიუსთვის
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// რეგიონის სახელები და პოზიციები (procents) — შეგიძლია მოუარო ციფრებს, რომ ზუსტად დაემთხვეს
const regions = [
  { id: "apkhazeti", name: "აფხაზეთი", left: 6.5, top: 9 },
  { id: "svaneti", name: "სვანეთი", left: 24.5, top: 12 },
  { id: "samegrelo", name: "სამეგრელო", left: 18.5, top: 30 },
  { id: "imereti", name: "იმერეთი", left: 34.5, top: 44 },
  { id: "guria", name: "გურია", left: 28.5, top: 62 },
  { id: "achara", name: "აჭარა", left: 19.5, top: 78 },
  { id: "racha", name: "რაჭა-ლეჩხუმი", left: 40.5, top: 28 },
  { id: "mtskheta", name: "მცხეთა-მთიანეთი", left: 66.5, top: 28 },
  { id: "shida", name: "შიდა ქართლი", left: 56.5, top: 48 },
  { id: "kvemo", name: "ქვემო ქართლი", left: 68.5, top: 82 },
  { id: "samtskhe", name: "სამცხე-ჯავახეთი", left: 52.5, top: 78 },
  { id: "kakheti", name: "კახეთი", left: 85.5, top: 64 },
  { id: "tbilisi", name: "თბილისი", left: 69.2, top: 66.2 }
];

const map = document.getElementById("map");
const modal = document.getElementById("regionModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody  = document.getElementById("modalBody");

// ასეთი ფუნქციით დაამატე Pin + Label
function addPin(region){
  // Pin ღილაკი
  const btn = document.createElement("button");
  btn.className = "pin";
  btn.type = "button";
  btn.setAttribute("aria-label", region.name + " — გახსნა");
  btn.style.left = region.left + "%";
  btn.style.top  = region.top  + "%";

  // როცა დააჭირავ, მოდალი გაიხსნება
  btn.addEventListener("click", ()=>{
    modalTitle.textContent = region.name;
    modalBody.innerHTML = `<p><strong>${region.name}</strong></p>
      <p>ამ რეგიონზე შეგიძლია ჩასვა მისამართები, სამუშაო საათები, ან ბმულები.</p>
      <ul>
        <li>ფილიალების რაოდენობა — ${Math.floor(Math.random()*6)}</li>
        <li>სტატუსი — ${["მაღალი","საშუალო","დაბალი"][Math.floor(Math.random()*3)]}</li>
      </ul>`;
    modal.showModal();
  });

  // პატარა ლეიბლი სახელისთვის (შეამოწმე პოზიცია და საჭიროებისამებრ დააჯღუჯე offsets)
  const label = document.createElement("div");
  label.className = "label";
  label.textContent = region.name;
  // ამ შემთხვევაში ვდებთ label-ს თითქმის იმავე X-ზე, მაგრამ Y-ს ვაყენებთ ცოტა ზევით (გვაქვს translate)
  label.style.left = region.left + "%";
  // თუ ურჩევნია ტექსტი იყოს შემდეგი ვერსიით — შეგიძლია შეინარჩუნო სხვა offsets per-region:
  label.style.top  = (region.top - 8) + "%";

  // მიამაგრე DOM-ში
  map.appendChild(btn);
  map.appendChild(label);
}

// დააჭერს თითოეულს
regions.forEach(r => addPin(r));

// დახურვისას დაბრუნება ფოკუსზე
modal.addEventListener("close", () => {
  map.querySelector(".pin")?.focus();
});
