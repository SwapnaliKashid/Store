let x = async() => {
    let data = await fetch('https://fakestoreapi.com/products')
    console.log(data);
    let finalData = await data.json();
    console.log(finalData);
    finalData.map((x) => {
        let body = document.body
        let section = document.createElement('section')
        section.innerHTML = `<main>
        <div class='card'>
        <img class="img-card" src=${x.image} height='200px' width='200px'>
        <div class='bio'>
        <h1>${x.title}</h1>
        <p>${x.description}</p>
        </div>
        </div>
        </main>`
        body.appendChild(section)
    })
}
x()





function search(){
    let input = document.getElementById('ip1').Value
    let x = document.getElementsByClassName('card');
    for (i=0; i<x.length; i++) {
       if (!x[i].innerHTML.toLowerCase().includes(input))
       {
          x[i].style.display='none';
       }
       else{
        x[i].style.display='cards';
       }
        
    }
}