let arrOfChat=[
    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},

    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},
    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},
    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},
    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},
    {img:"https://yt3.ggpht.com/fsjUoWZmI4g9r1OpAjdma75OLPSsj4xFnwzvwZ4ccoj_KY2wKh7RfFejqGXPOrNeW8QqQs_Q=s900-c-k-c0x00ffffff-no-rj",name:"Narendra Modi",msg:"How are you",msgLength:"2",time:"9:49"},
    {img:"https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",name:"Mark Zuckerberg",msg:"Hi Dinesh",msgLength:"1",time:"7:16"},
    
]

displayChat(arrOfChat);

function displayChat(data){

    let cont=document.querySelector(".chatMain")

    data.forEach(el => {

        let div=document.createElement("div")
        div.setAttribute("class","chat")
        div.innerHTML=`
        <div class="image">
        <img src="${el.img}" alt="">        
        </div>

        <div class="name">
            <h3>${el.name}</h3>
            <p>${el.msg}</p>
        </div>

        <div class="time">
            <p>${el.time}</p>
            <p>${el.msgLength}</p>
        </div>
        `

        cont.append(div)
        
    });




}





