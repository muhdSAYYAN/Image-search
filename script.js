const accessKey = "0u6Lwp44eFdyF_-YDbx_EFg9zs96SLH5aHBtFufbfec"

const form_el = document.querySelector('form');
const inp = document.getElementById('inp-search');
const searchResult =document.querySelector('.main');
const shwMore = document.getElementById('showm');


let inputData ="";
let page =1;

async function searchImages(){
    inputData =inp.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}` 

    const response = await  fetch(url);
    const data = await response.json();
      
    const results = data.results;

    if(page=== 1){
        searchResult.innerHTML="";

    }

    results.map((result) => {
        const imagWrap = document.createElement('div');
        imagWrap.classList.add("img-dv");
        const image  = document.createElement('img');
        image.src=result.urls.small;
        image.alt =result.alt_description;
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target ="_blank";
        imgLink.textContent = result.alt_description;


        imagWrap.appendChild(image);
        imagWrap.appendChild(imgLink);
        searchResult.appendChild(imagWrap);

    });

    page++;
    if(page > 1){
        shwMore.style.display ="block"
    }

}

form_el.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();

});

shwMore.addEventListener("click",()=>{
    searchImages();

});