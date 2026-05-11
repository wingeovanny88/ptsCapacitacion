
function toggleAccordion(){
  document.querySelectorAll('.acc-head').forEach(head=>{
    head.addEventListener('click',()=>head.parentElement.classList.toggle('open'));
  });
}
function tabs(){
  document.querySelectorAll('[data-tabs]').forEach(group=>{
    const btns=group.querySelectorAll('.tab-btn');
    const panels=group.querySelectorAll('.tab-panel');
    btns.forEach(btn=>btn.addEventListener('click',()=>{
      btns.forEach(b=>b.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const panel=group.querySelector('#'+btn.dataset.target);
      if(panel) panel.classList.add('active');
    }));
  });
}
function searchCards(){
  const input=document.querySelector('[data-search]');
  if(!input) return;
  const cards=document.querySelectorAll('[data-card]');
  input.addEventListener('input',()=>{
    const q=input.value.toLowerCase();
    cards.forEach(c=>{c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none';});
  });
}
function quiz(){
  document.querySelectorAll('[data-answer]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const wrap=btn.closest('.quiz');
      if(!wrap) return;
      wrap.querySelectorAll('button').forEach(b=>b.disabled=true);
      if(btn.dataset.answer==='true') btn.classList.add('correct');
      else{
        btn.classList.add('wrong');
        const ok=wrap.querySelector('[data-answer="true"]');
        if(ok) ok.classList.add('correct');
      }
      const msg=wrap.querySelector('.quiz-msg');
      if(msg) msg.textContent=btn.dataset.answer==='true'?'Correcto.':'Revisa la opción marcada en verde.';
    });
  });
}
document.addEventListener('DOMContentLoaded',()=>{toggleAccordion();tabs();searchCards();quiz();});
