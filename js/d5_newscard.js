console.log("......App Started......");

function callAPI() {
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e44d6514c1824b4ba05a9aaf462d8d40")
    .then((res) => {return res.json().then((data)=>{renderUI(data);})})
}

const root = document.getElementById("root");

function renderUI(data){
    //got the articles from data
    const articles = data.articles;
    console.log(articles);
    //took single article from article array
    // const ar= articles[0];
    // console.log(ar);


    for(let i=0; i<articles.length;i++){
     const ar= articles[i];
    //created a parent div
    const div = document.createElement("div");
    div.setAttribute("class", "news-card")
    const h3= document.createElement("h3");
    h3.innerText= ar.title;
    // div.innerText='Card';
    // div.innerText=ar.title;
    const img= document.createElement("img");
    img.src = ar.urlToImage;
    const p=document.createElement("p");
    p.innerText= ar.description;
  
    const a= document.createElement("a");
    a.target='_blank';
    a.setAttribute("class","btn")
    a.href=ar.url;
    a.innerText= "Read More";
    a.className= "button";
    
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(a);
    root.appendChild(div);
    }
}
callAPI();
// renderUI();