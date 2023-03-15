const userId = 'soburi-re'; // 自分のQiitaユーザー名
const url = `https://qiita.com/api/v2/users/${userId}/items`; // APIエンドポイント
const container = document.getElementById('qiita-posts'); // 投稿一覧を表示する要素のID

fetch(url, {
    headers: {
        'Authorization': 'Bearer c65a1be6085190aae8c9a2dade64fa21806e1c68' // アクセストークンを設定
    }
})
    .then(response => response.json())
    .then(data => {
        // 取得した投稿データをループしてHTMLを作成
        let html = '<ul>';
        data.forEach(post => {
            html += `<li><a href="${post.url}">${post.title}</a></li>`;
        });
        html += '</ul>';

        // HTMLを要素に表示
        container.innerHTML = html;
    })
    .catch(error => console.error(error));