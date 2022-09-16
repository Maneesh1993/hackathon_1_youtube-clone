// used bootstrap card
// used three different apis  

var card1=document.createElement("div");
    card1.classList.add("card","mb-3");
    card1.style="max-width: 540px;";
    
var row=document.createElement("div");
    row.classList.add("row","no-gutter");

var col4=document.createElement("div");
    col4.setAttribute("class","col-md-4");

var img=document.createElement("img");
    img.setAttribute("src","data:image/png;base64,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");
    img.setAttribute("class","card-img");

var col8=document.createElement("div");
    col8.setAttribute("class","col-md-8");

var card2=document.createElement("div");
    card2.setAttribute("class","card-body") 

var cardtitle=document.createElement("h1");
    cardtitle.setAttribute("class","card-title") ;
    cardtitle.innerHTML="YouTUBE Clone ";

    card1.append(row);
    row.append(col4,col8)
    col4.append(img);
    card2.append(cardtitle);
    col8.append(card2);
                                                    document.body.append(card1);

var guvi=document.createElement("h3")
    guvi.innerHTML="UCiEmtpFVJjpvdhsQ2QAhxVA";
    guvi.style.marginTop="50px";
        

var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","channel");
    input.setAttribute("placeholder","Enter the above id 👆")
    console.log(input)
    
var button=document.createElement("button");
    button.setAttribute("type","button");
    button.classList.add("btn","btn-primary");
    button.innerHTML="search";
    button.addEventListener("click",foo)
    console.log(button);
    
var info=document.createElement("div");
    info.setAttribute("id","active");
    info.style.fontWeight="bold"
    
                                                     document.body.append(guvi,input,button,info);

    async function foo(){
            var channel_id=document.getElementById("channel").value
                console.log(channel_id)

            let url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=AIzaSyBhHZ_lfdZMEJFdRgTl4PDHGMvhRtl16KM`;
                console.log(url)

            let res=await fetch(url);
                console.log(res)

            let res1=await res.json();
                console.log(res1)

                var index=res1.items[0].snippet.description;  
                console.log(index)
                info.innerHTML=`${(index)}`; 
    }


var guvi1=document.createElement("h3")
    guvi1.innerHTML="UCiEmtpFVJjpvdhsQ2QAhxVA";
    guvi1.style.marginTop="50px";
    // document.body.append(guvi1)

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","channel1");
    input1.setAttribute("placeholder","Enter the above id 👆")
    // input.style.marginLeft="700px";
    console.log(input1)
    // document.body.append(input1);


var button1=document.createElement("button");
    button1.setAttribute("type","button");
    button1.classList.add("btn","btn-primary");
    button1.innerHTML="search";
    button1.addEventListener("click",foo1)
    console.log(button1);
    
var title1=document.createElement("div");
    title1.setAttribute("id","active");
    title1.style.fontWeight="bold";
    

var info1=document.createElement("div");
    info1.setAttribute("id","active");
    info1.style.fontWeight="bold";
    

var info2=document.createElement("div");
    info2.setAttribute("id","active");
    info2.style.fontWeight="bold";
    

var info3=document.createElement("div");
    info3.setAttribute("id","active");
    info3.style.fontWeight="bold";

                                    document.body.append(guvi1,input1,button1,title1,info1,info2,info3);

    
    async function foo1(){
            var channel_id1=document.getElementById("channel1").value
                console.log(channel_id1);

            let url1=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id1}&key=AIzaSyBhHZ_lfdZMEJFdRgTl4PDHGMvhRtl16KM`;
                console.log(url1)

            let res1=await fetch(url1);
                console.log(res1)

            let res2=await res1.json();
                console.log(res2)
                
                var title=res2.items[0].snippet.title;
                var index1=res2.items[0].statistics.subscriberCount;
                var index2=res2.items[0].statistics.videoCount;
                var index3=res2.items[0].statistics.viewCount;


           
                                             console.log(title,index1,index2,index3)

            title1.innerHTML=`Title:${(title)}`;
            info1.innerHTML=`SubscriberCount:${(index1)}`; 
            info2.innerHTML=`VideoCount:${(index2)}`;
            info3.innerHTML=`ViewCount:${(index3)}`;
    }

var guvi5=document.createElement("h3")
        guvi5.innerHTML="Youtube videos search Ex.Guvi";
        guvi5.style.marginTop="50px";
        

var input5=document.createElement("input");
    input5.setAttribute("type","text");
    input5.setAttribute("id","channel5");
    input5.setAttribute("placeholder","Enter your search")
    
    console.log(input5)
    
var button5=document.createElement("button");
    button5.setAttribute("type","button");
    button5.classList.add("btn","btn-primary");
    button5.innerHTML="search";
    button5.addEventListener("click",foo5)
    console.log(button5);
    
var info5=document.createElement("div");
    info5.setAttribute("id","active");
    info5.style.fontWeight="bold";
            

 var info6=document.createElement("div");
    info6.setAttribute("id","active");
    info5.style.fontWeight="bold";
                                     document.body.append(guvi5,input5,button5,info5,info6);
        
            async function foo5(){
                    var channel_5=document.getElementById("channel5").value
                        console.log(channel_5)
        
                    let url5=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${channel_5}&key=AIzaSyAWcpqmR4Ng-LIbOO9dVXzAiQtUa9g9UYU`;
                        console.log(url5)
        
                    let res5=await fetch(url5);
                        console.log(res5)
        
                    let res51=await res5.json();
                        console.log(res51)
    
                        console.log(res51.items[0].snippet.title)
                        console.log(res51.items[0].id.channelId)
        
                    info5.innerHTML=`Title:${(res51.items[0].snippet.title)}`; 
                    info6.innerHTML=`youtube_channel_id:${(res51.items[0].id.channelId)}`
                    
                }