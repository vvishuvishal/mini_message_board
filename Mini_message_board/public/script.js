fetch(
    `http://localhost:3000/text`

       ).then(res=>{return res.json()}).then(data=>display(data));
function display(data) {

  document.getElementById("list").innerHTML="";

for(let i=0;i<data.length;i++)
{
const row = document.createElement('tr');
row.innerHTML = `<td> ${data[i].name} </td><td> ${data[i].text} </td><td> ${data[i].date} </td><td> ${data[i].time} </td>`;

document.getElementById("list").appendChild(row);
}  
}     