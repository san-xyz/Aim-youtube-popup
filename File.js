const CE = _ => {
    return document.createElement(_)
}  
let D1 = CE("div"),
    S0 = CE("style");
D1.setAttribute("id", "MNB")
S0.innerHTML = `
    #MNB{
        position:fixed;
        left:0;
        top:0;
        height:100vh;
        width:100vw;
        background:rgba(0,0,0,.7);
        opacity:1;
        -webkit-transition:opacity .5s ease;
        z-index:1999;
    }
    .MND{
        height:250px;
        width:250px;
        position:fixed;
        top:calc(50vh - 125px);
        left:calc(50vw - 125px);
        background:rgb(300,225,200);
        border-radius:50px; 
        z-index:2999;      
        text-align:center; 
        font-weight:900;
    }
    #YTL{
        height:50px;
        width:50px;
        background:red;
        display:flex;
        align-items:center;
        justify-content:center;                
        border-radius:54% 46% 42% 58%/60% 58% 42% 40%; 
        -webkit-animation:wave 4s linear infinite;   
        position:absolute; 
        left:calc(50% - 25px);
        top:-10px;
        z-index:3999;
    }
    #YTS{
        height:25px;
        width:25px;
        background:red;
    }
    @keyframes wave { 
        20%{border-radius:45% 55% 62% 38%/53% 51% 49% 47%} 
        40%{border-radius:45% 55% 49% 51%/36% 51% 49% 64%} 
        60%{border-radius:60% 40% 57% 43%/47% 62% 38% 53%} 
        80%{border-radius:60% 40% 32% 68%/38% 36% 64% 62%}
    }
    #SMC{
        height:50px;
        width:200px;
        background:red;
        z-index:4999;
        position:absolute;
        left:25px;
        top:25px;
        color:white;
        border-radius:99px;
        display:flex;
        align-items:center;
        justify-content:center;   
    }
    #PPT{
        width:100%;
        z-index:4999;
        position:absolute;
        font-size:17px;
        top:90px;
        color:black;   
    }
    #YTLK{
        width:100%;
        z-index:5999;
        position:absolute;
        font-size:10px;
        top:170px;
        text-align:center;  
        display:block;
        cursor:none;
    }
    #OK{
        height:50px;
        width:50px;
        background:red;
        display:flex;
        align-items:center;
        justify-content:center;                
        border-radius:54% 46% 42% 58%/60% 58% 42% 40%; 
        -webkit-animation:wave 4s linear infinite;   
        position:absolute; 
        left:calc(50% - 25px);
        bottom:-10px;
        z-index:6999;
        color:white;
    }
`;
D1.innerHTML = `
    <div class="MND">
    <div style="-webkit-transform:rotate(45deg);z-index:1; " class="MND"></div>
    <div id="YTL">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" id="YTS" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>
    </div>
    <div id="SMC"><i>Coding Infinite</i></div>
    <p id="PPT">Subscribe My Youtube Channel</p>
    <a id="YTLK" href="https://youtube.com/c/CodingInfinite">https://youtube.com/c/CodingInfinite</a>
    <div id="OK">OK</div>
    </div>
`;
document.head.appendChild(S0);
document.body.appendChild(D1);
document.getElementById("OK").onclick = () => {
    D1.style.opacity = "0";
    setTimeout(()=>{
        D1.style.display = "none";
    },500)
}
