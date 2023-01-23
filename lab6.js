const img_l = document.querySelector(".lbn");
const img_r = document.querySelector(".rbn");
const BN = document.querySelectorAll("Button");

BN.forEach(Button => 
{
Button.onclick = () => 
{
if (Button.className == 'l') 
{
img_l.querySelector("img").style.display = 'block';
img_r.querySelector("img").style.display = 'none';
            
img_l.style.width = '95%';
img_r.style.width = '5%';
}

else if (Button.className == 'two') 
{
img_l.querySelector("img").style.display = 'block';
img_r.querySelector("img").style.display = 'block';
            
img_l.style.width = '50%';
img_r.style.width = '50%';
}

else 
{
img_l.querySelector("img").style.display = 'none';
img_r.querySelector("img").style.display = 'block';
            
img_l.style.width = '5%';
img_r.style.width = '95%';
}}})