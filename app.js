// Progression 1: create a function and fetch the api using axios

const articleGrid = document.getElementById('articleGrid');

function populateData()
{
  axios.get('https://gnews.io/api/v4/top-headlines?token=aa9f5a1c9efceb846f6fbfac137178f0&lang=en').then((res)=>{
    //console.log(res.data)
    //extracting article data from response
    const articles = res.data.articles;

    articles.forEach((article)=>{

      const articleElement = document.createElement('div')
      const titleElement = document.createElement('h3')
      const imageElement = document.createElement('img')
      const contentElement = document.createElement('p')
      articleElement.setAttribute('class', 'article')

      titleElement.innerText = article.title;
      imageElement.setAttribute('src', article.image)
      contentElement.innerText = article.content;

      articleElement.append(titleElement);
      articleElement.append(imageElement);
      articleElement.append(contentElement);

      articleGrid.append(articleElement);

       })
  });
}

populateData()
