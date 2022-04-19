function changeText(){
    const text = document.querySelector("textarea").value;
    const outText = document.getElementById("out__text");

    outText.innerHTML = text;
}

function cripto(){
    const text = document.querySelector("textarea").value;
    const secondText = document.getElementById("out__text");

    const resultCript = text.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[a]/gi,'ai').replace(/[o]/gi,'ober').replace(/[u]/gi,'ufat');
    secondText.innerHTML = resultCript;
}
function descripto(){
    const secondText = document.getElementById("out__text").value;

    const resultDes = secondText.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    out__text.innerHTML = resultDes;
}

function copy(){
        const copyText = document.getElementById("out__text");

        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
} 

