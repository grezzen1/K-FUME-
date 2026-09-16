document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('nav button').forEach(b=>{if(b.textContent.trim()==='Détente')b.textContent='JEUX'});
 const e=document.querySelector('#fun');if(!e)return;
 e.insertAdjacentHTML('afterbegin','<section class="box pad" style="margin:18px 0"><div class="pro-title"><img class="kf-logo" src="kfume-logo.jpg"><div><div class="ey" style="color:var(--g)">ESPACE JEUX</div><h1 style="margin:3px 0">🍬 K FUMÉ Match</h1><p class="muted">Alignez trois friandises ou plus et marquez le meilleur score.</p></div></div><iframe src="kfume-candy-match.html" title="K FUMÉ Match" style="width:100%;height:650px;border:0;border-radius:14px;background:white"></iframe><p class="muted">Touchez deux cases voisines pour les échanger.</p></section>');
});
