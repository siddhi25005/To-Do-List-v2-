let text=document.querySelector(".text");
let btn=document.querySelector("button");
let main=document.querySelector(".main");
btn.addEventListener("click",()=>{
    let task=text.value;
    if(task==="") return;
    let taskitem=document.createElement("div");
    taskitem.classList.add("task-item");
    let tasktext=document.createElement("span");
    tasktext.classList.add("task-text");
    tasktext.innerText=task;
    let main2=document.createElement("div");
    main2.classList.add("main2");
    let deletebtn=document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerText="Delete";
    let main3=document.createElement("div");
    main3.classList.add("main3");
    taskitem.appendChild(main3);
    main3.appendChild(main2);
    main2.appendChild(tasktext);
    main3.appendChild(deletebtn);
    main.appendChild(taskitem);
    deletebtn.addEventListener("click",()=>{
        taskitem.remove();
    })
    text.value="";
})
text.addEventListener("keypress",(e)=>{
    if(e.key==="Enter") {
        btn.click();
    }
})
