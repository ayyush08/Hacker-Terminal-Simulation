//Giving 1-7seconds delay between terminal messages
const delay = ()=>{
    return new Promise((resolve,reject)=>{
            let timer = 1+7*Math.random();
            setTimeout(() => {
                resolve()
            }, timer*1000);
        })
    }

//adding terminal messages
const addItem = async (item)=>{
        let div = document.createElement("div");
        // let break = document.createElement("br");
        await delay(); //wait for the previous item to finish before adding a new one
        div.innerHTML = item;
        document.body.append(div);
}

//simulation 
async function main(){
    let blink = setInterval(()=>{
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1]
        if(last.innerHTML.endsWith(" . . ."))
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-6);
        else
            last.innerHTML = last.innerHTML+" ."
    },250)
    let terminal = ['Breaching System',
        'Getting  through Firewall',
        'Accessing Database',
        'System Compromised',
        'Reading your Files',
        'Password files Detected',
        'Sending all passwords and personal files to server',
        'Cleaning up']
    
    for(let item of terminal) {
        await addItem(item);
    }
    await delay();
    clearInterval(blink);
}

//looping the simulation via async/await

async function reboot(){
    await main();
    document.body.innerHTML='';
    main();
}

reboot();       