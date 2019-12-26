let  messages=[]
let msgJSON=localStorage.getItem('message')
if(msgJSON!==null){
    messages=JSON.parse(msgJSON)
}
const renderMessage=(messages)=>{
    document.querySelector('#message').innerHTML=''
    messages.forEach((message)=>{
        const division= document.createElement('div')
        const p=document.createElement('p')
        p.textContent=message
        division.setAttribute('class','card text')
        division.setAttribute('style','background-color:#c3f584')
        division.appendChild(p)
        document.querySelector('#message').appendChild(division)
    })


}
document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    messages.push(e.target.elements.msg.value)
    localStorage.setItem('message',JSON.stringify(messages))
    e.target.elements.msg.value=''
    renderMessage(messages)
})


renderMessage(messages)
