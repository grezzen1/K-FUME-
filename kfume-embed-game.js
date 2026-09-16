document.addEventListener('DOMContentLoaded',()=>{
 const space=document.querySelector('#fun');
 if(!space)return;
 space.insertAdjacentHTML('afterbegin','<section class="box pad" style="margin:18px 0"><div class="pro-title"><img class="kf-logo" src="kfume-logo.jpg"><div><div class="ey" style="color:var(--g)">K FUMÉ GAME</div><h2>Runner de Bamako</h2><p class="muted">Jouez directement pendant l’attente de votre commande.</p></div></div><iframe title="K FUMÉ Runner" src="kfume-runner.html" style="width:100%;height:min(720px,82vh);border:0;border-radius:14px;background:#160f08"></iframe><p class="muted">Le score est sauvegardé localement sur cet appareil.</p></section>');
});
