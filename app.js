const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET', NEWS_URL, false);  // true 비동기, false 동기 // 데이터를 동기적으로 가져옴
ajax.send();

// console.log(ajax.response); // 데이터 가져오는 것 콘솔로 확인

const newsFeed = JSON.parse(ajax.response); // 제이슨을 객채로 받아서 반환받기
const ul = document.createElement('ul');

// console.log(newsFeed);

for(let i = 0; i < 10; i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.href="#"
    a.innerHTML = newsFeed[i].title;
    
    li.appendChild(a)

    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
