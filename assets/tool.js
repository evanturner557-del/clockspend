(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var c=v.people*v.rate*v.mins/60;return 'This meeting costs about <strong>£'+c.toFixed(0)+'</strong> each time, or <strong>£'+(c*v.weekly).toFixed(0)+'</strong> a year at '+v.weekly+' meetings.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
