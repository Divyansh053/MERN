function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?key=KB49WJ3Y7SKX6QH8MCKCX6GWN";
    fetch(url).then((res)=>res.json()).then(renderUI);
}
fetchAPI();
function renderUI(data){
    const days= data.days;
    console.log(data);

    const row= document.createElement("tr");
    const cell1= document.createElement("th");
    cell1.innerText='Date';
    row.appendChild(cell1);
    // const row= document.createElement("tr");
    const cell2= document.createElement("th");
    cell2.innerText='Maximum Temperature';
    row.appendChild(cell2);
    const cell3= document.createElement("th");
    cell3.innerText='Minimum Temperature';
    row.appendChild(cell3);

    root.appendChild(row);

    const childRow= document.createElement("tr");
    const c1= document.createElement("th");
    c1.innerText=days[0].datetime;
    childRow.appendChild(c1);
    // const row= document.createElement("tr");
    const c2= document.createElement("th");
    c2.innerText= days[0].tempmax;
    childRow.appendChild(c2);
    const c3= document.createElement("th");
    c3.innerText=days[0].tempmin;
    childRow.appendChild(c3);
    root.appendChild(childRow);
}