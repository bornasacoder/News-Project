console.log("welcome to our news project");
// initialize the variable

let source = 'bbc-news';
let apikey = 'f8a044b4e4b54fbf827789fb1a7e8e99';

//grab the news container 
let newsaccordion = document.getElementById('newsaccordion');

// create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`,true);

 // what to do when response is ready
 xhr.onload = function(){
     if(this.status === 200){
         let json = JSON.parse(this.responseText);
         let article = json.articles;
         console.log(article);
         let newshtml = "";
         article.forEach(function(element,index){
            let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                          <b> Breaking News: ${index+1} </b> ${element["title"]}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsaccordion">
                        <div class="card-body">
                           ${element["content"]}. <a href="${element['url']}" target="_blank">Read More here </a>
                        </div>
                    </div>
                    </div>`;
                    newshtml += news;
         });
         newsaccordion.innerHTML = newshtml;

     }else{
         console.log("some error occured");
     }
 }
 xhr.send();

