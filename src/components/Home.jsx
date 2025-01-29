import React from "react";

import "./Home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReactの学習中です。 これから頑張って活躍していきたいです。
          よろしくお願いします。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@白石裕也</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};
