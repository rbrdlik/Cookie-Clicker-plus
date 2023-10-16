// Cookie
const cookie = document.getElementById('Cookie');
const count_text = document.getElementById('CookieText')
const perClickInfo = document.getElementById('perClickInfo');

// Biome tlačítka
const biomeBtn1 = document.getElementById('biomeBtn1');
const biomeBtn2 = document.getElementById('biomeBtn2');
const biomeBtn3 = document.getElementById('biomeBtn3');
const biomeBtn4 = document.getElementById('biomeBtn4');
const biomeBtn5 = document.getElementById('biomeBtn5');
const biomeBtn6 = document.getElementById('biomeBtn6');
const biomeBtn7 = document.getElementById('biomeBtn7');
const biomeBtn8 = document.getElementById('biomeBtn8');
const biomeChange = document.getElementById('biomeBcg');
const biomeBtn8Text = document.getElementById('biomeBtn8Text');
const multiplierText = document.getElementById('multiplierText');

// Farmy tlačítka 
const farmBtn1 = document.getElementById('farmBtn1');
const farmBtn2 = document.getElementById('farmBtn2');
const farmBtn3 = document.getElementById('farmBtn3');
const farmBtn4 = document.getElementById('farmBtn4');
const farmBtn5 = document.getElementById('farmBtn5');

const farm1BtnText = document.getElementById('farm1BtnText');
const farm2BtnText = document.getElementById('farm2BtnText');
const farm3BtnText = document.getElementById('farm3BtnText');
const farm4BtnText = document.getElementById('farm4BtnText');
const farm5BtnText = document.getElementById('farm5BtnText');

// Factory earn text 
const farm1Text = document.getElementById('farm1Text');
const farm2Text = document.getElementById('farm2Text');
const farm3Text = document.getElementById('farm3Text');
const farm4Text = document.getElementById('farm4Text');
const farm5Text = document.getElementById('farm5Text');

const farm1border = document.getElementById('farm1border');
const farm2border = document.getElementById('farm2border');
const farm3border = document.getElementById('farm3border');
const farm4border = document.getElementById('farm4border');
const farm5border = document.getElementById('farm5border');

const farm1_box = document.getElementById('farm1-box');
const farm2_box = document.getElementById('farm2-box');
const farm3_box = document.getElementById('farm3-box');
const farm4_box = document.getElementById('farm4-box');
const farm5_box = document.getElementById('farm5-box');
const farmsTotalEarn = document.getElementById('farmsTotalEarn');

let farm1autoearn;
let farm2autoearn;
let farm3autoearn;
let farm4autoearn;
let farm5autoearn;

// Click Upgrade
const clickUpgBtn = document.getElementById('ClickUpgradeBtn');
const clickUpgText = document.getElementById('ClickUpgText');

let myCookieData = 0;
let earnCookie = 1;

// Ceny Upgradů
let clickPrice = 100;
let bakeryPrice = 1000;
let farmPrice = 12000;
let minesPrice = 24000;
let factoryPrice = 60000;
let bankPrice = 125000;

// Násobič podle toho v jakém jsme biomu
let biomeMultiplier = 1;
let upgVoidCost = 1450000;

// Výdělek/level farmy
let bakeryLvl = 0;
let farmsLvl = 0;
let minesLvl = 0;
let factoryLvl = 0;
let bankLvl = 0;
let bakeryEarn = 0;
let farmsEarn = 0;
let minesEarn = 0;
let factoryEarn = 0;
let bankEarn = 0;
let totalEarn = 0;


cookie.onclick = () => {
    myCookieData += earnCookie*biomeMultiplier;
    count_text.innerText = myCookieData+" Sušenek";
}

clickUpgBtn.onclick = () => {
    if(myCookieData>=clickPrice){
        myCookieData -= clickPrice;
        count_text.innerText = myCookieData+" Sušenek";
        earnCookie +=1;
        clickPrice +=100;
        clickUpgText.innerText = clickPrice+" Sušenek.";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
    }
}

biomeBtn1.onclick = () => {
    if(myCookieData>=30000){
        myCookieData -= 30000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn1.style.display = "none";
        biomeBtn2.style.display = "block";
        biomeChange.className = "cookie-section b2";
        biomeMultiplier += 1;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Cave (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn2.onclick = () => {
    if(myCookieData>=80000){
        myCookieData -= 80000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn2.style.display = "none";
        biomeBtn3.style.display = "block";
        biomeChange.className = "cookie-section b3";
        biomeMultiplier += 2;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Jungle (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn3.onclick = () => {
    if(myCookieData>=200000){
        myCookieData -= 200000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn3.style.display = "none";
        biomeBtn4.style.display = "block";
        biomeChange.className = "cookie-section b4";
        biomeMultiplier += 2;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Savana (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn4.onclick = () => {
    if(myCookieData>=500000){
        myCookieData -= 500000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn4.style.display = "none";
        biomeBtn5.style.display = "block";
        biomeChange.className = "cookie-section b5";
        biomeMultiplier += 2;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Desert (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn5.onclick = () => {
    if(myCookieData>=1000000){
        myCookieData -= 1000000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn5.style.display = "none";
        biomeBtn6.style.display = "block";
        biomeChange.className = "cookie-section b6";
        biomeMultiplier += 2;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Winter (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn6.onclick = () => {
    if(myCookieData>=2000000){
        myCookieData -= 2000000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn6.style.display = "none";
        biomeBtn7.style.display = "block";
        biomeChange.className = "cookie-section b7";
        biomeMultiplier += 5;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Nether (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn7.onclick = () => {
    if(myCookieData>=5000000){
        myCookieData -= 5000000;
        count_text.innerText = myCookieData+" Sušenek";
        biomeBtn7.style.display = "none";
        biomeBtn8.style.display = "block";
        biomeChange.className = "cookie-section b8";
        biomeMultiplier += 5;
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Void (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
    }
}

biomeBtn8.onclick = () => {
    if(myCookieData>=upgVoidCost){
        myCookieData -= upgVoidCost;
        count_text.innerText = myCookieData+" Sušenek";
        biomeChange.className = "cookie-section b8";
        biomeMultiplier += 5;
        upgVoidCost += 1500000
        bakeryEarn*biomeMultiplier;
        farmsEarn*biomeMultiplier;
        minesEarn*biomeMultiplier;
        factoryEarn*biomeMultiplier;
        bankEarn*biomeMultiplier;
        multiplierText.innerText = "Biome Void (Násobič "+biomeMultiplier+".0x)";
        perClickInfo.innerText = "Počet sušenek za kliknutí: "+earnCookie*biomeMultiplier;
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        biomeBtn8Text.innerText = upgVoidCost+" Sušenek.";
    }
}

farmBtn1.onclick = () => {
    if(myCookieData>=bakeryPrice){
        myCookieData -= bakeryPrice;
        count_text.innerText = myCookieData+" Sušenek";
        bakeryPrice += 1500;
        bakeryEarn += 50;
        totalEarn +=50;
        bakeryLvl += 1; 
        clearInterval(farm1autoearn);
        farm1autoearn = setInterval(() => {
            myCookieData += bakeryEarn*biomeMultiplier;
            count_text.innerText = myCookieData+" Sušenek";
        }, 1500);
        farm1Text.innerHTML = "🍪 Pekařství - LVL. "+bakeryLvl+"<br>"+bakeryEarn*biomeMultiplier+" sušenek/sec.";
        farm1_box.style.opacity = "1";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        farm1BtnText.innerText = bakeryPrice+" Sušenek.";
        farmBtn2.style.display = "block";
    }
}

farmBtn2.onclick = () => {
    if(myCookieData>=farmPrice){
        myCookieData -= farmPrice;
        count_text.innerText = myCookieData+" Sušenek";
        farmPrice += 7000;
        farmsEarn += 200;
        totalEarn +=200;
        farmsLvl += 1; 
        clearInterval(farm2autoearn);
        farm2autoearn = setInterval(() => {
            myCookieData += farmsEarn*biomeMultiplier;
            count_text.innerText = myCookieData+" Sušenek";
        }, 1500);
        farm2Text.innerHTML = "🎑 Farma - LVL. "+farmsLvl+"<br>"+farmsEarn*biomeMultiplier+" sušenek/sec.";
        farm2border.style.opacity = "1";
        farm2_box.style.opacity = "1";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        farm2BtnText.innerText = farmPrice+" Sušenek.";
        farmBtn3.style.display = "block";
    }
}

farmBtn3.onclick = () => {
    if(myCookieData>=minesPrice){
        myCookieData -= minesPrice;
        count_text.innerText = myCookieData+" Sušenek";
        minesPrice += 12000;
        minesEarn += 600;
        totalEarn +=600;
        minesLvl += 1; 
        clearInterval(farm3autoearn);
        farm3autoearn = setInterval(() => {
            myCookieData += minesEarn*biomeMultiplier;
            count_text.innerText = myCookieData+" Sušenek";
        }, 1500);
        farm3Text.innerHTML = "⛏ Důl - LVL. "+minesLvl+"<br>"+minesEarn*biomeMultiplier+" sušenek/sec.";
        farm3border.style.opacity = "1";
        farm3_box.style.opacity = "1";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        farm3BtnText.innerText = minesPrice+" Sušenek.";
        farmBtn4.style.display = "block";
    }
}

farmBtn4.onclick = () => {
    if(myCookieData>=factoryPrice){
        myCookieData -= factoryPrice;
        count_text.innerText = myCookieData+" Sušenek";
        factoryPrice += 20000;
        factoryEarn += 1000;
        totalEarn +=1000;
        factoryLvl += 1; 
        clearInterval(farm4autoearn);
        farm4autoearn = setInterval(() => {
            myCookieData += factoryEarn*biomeMultiplier;
            count_text.innerText = myCookieData+" Sušenek";
        }, 1500);
        farm4Text.innerHTML = "🏭 Továrna - LVL. "+factoryLvl+"<br>"+factoryEarn*biomeMultiplier+" sušenek/sec.";
        farm4border.style.opacity = "1";
        farm4_box.style.opacity = "1";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        farm4BtnText.innerText = factoryPrice+" Sušenek.";
        farmBtn5.style.display = "block";
    }
}

farmBtn5.onclick = () => {
    if(myCookieData>=bankPrice){
        myCookieData -= bankPrice;
        count_text.innerText = myCookieData+" Sušenek";
        bankPrice += 50000;
        bankEarn += 2000;
        totalEarn +=2000;
        bankLvl += 1; 
        clearInterval(farm5autoearn);
        farm5autoearn = setInterval(() => {
            myCookieData += bankEarn*biomeMultiplier;
            count_text.innerText = myCookieData+" Sušenek";
        }, 1500);
        farm5Text.innerHTML = "🏛 Banka - LVL. "+bankLvl+"<br>"+bankEarn*biomeMultiplier+" sušenek/sec.";
        farm5border.style.opacity = "1";
        farm5_box.style.opacity = "1";
        farmsTotalEarn.innerText = "Celkový výdělek z farem "+totalEarn*biomeMultiplier+" sušenek/sec.";
        farm5BtnText.innerText = bankPrice+" Sušenek.";
    }
}

function reloadPage(event){
    event.preventDefault();
    event.returnValue = "";
}
window.addEventListener("beforeunload", reloadPage);
