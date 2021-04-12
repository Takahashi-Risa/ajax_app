const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}

function post (){
  // リクエストを送信する処理
  // console.log("イベント発火");
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("イベント発火");
    const form = document.getElementById("form")
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      // console.log(XHR.response);
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null; //JavaScriptの処理から抜け出す
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      // console.log(formText.value);
            // ここから
            // const item = XHR.response.post;
            // const html = `
            //   <div class = "post">
            //     <div class="post-date">
            //       投稿日時：${item.created_at}
            //     </div>
            //     <div class="post-content">
            //       ${item.content}
            //     </div>
            //   </div> `;
            // ↑buildHTMLとして外に切り出す
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post);