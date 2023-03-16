const userId = 'soburi06'; // 自分のQiitaユーザー名
const url = `https://qiita.com/api/v2/users/${userId}/items`; // APIエンドポイント
const container = document.getElementById('qiita-posts'); // 投稿一覧を表示する要素のID

fetch(url, {
  headers: {
    'Authorization': 'Bearer 2818a0595b34040ffe4d93988b435a68df2bb897' // アクセストークンを設定
  }
})
  .then(response => response.json())
  .then(data => {
    // 取得した投稿データをループしてHTMLを作成
    let html = '';
    data.forEach(post => {
      html += `
              <div class="qiita-post">
                <a class="qiita-link" href="${post.url}" target="_blank" rel="noopener noreferrer"></a>
                <p>${post.title}</p>
                <div class="tags">
            `;
      post.tags.forEach(function(tag) {
        html+= `<a class="tag-name" href="https://qiita.com/tags/${tag.name}">`+ tag.name + '</a>';
      });
      html+=`   </div>
                <div class="date">${post.created_at.slice(0, 10)}</div>
              </div>
            `;
    });

    // HTMLを要素に表示
    container.innerHTML = html;
  })
  .catch(error => console.error(error));