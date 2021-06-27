import axios from "axios";

export {};
let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";
//型が不定な変数

//function(response) のコールバック関数でurlのレスポンス情報を受け取れる
axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = response.data;
  data = [
    {
      id: 99,
      title: "da",
      description: "sa",
    },
  ];
  console.log(data);
});
