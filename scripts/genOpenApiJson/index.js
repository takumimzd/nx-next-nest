// open-api.jsonを作成するscript
// Nest.jsのサーバーが立ち上がっている状態で実行する必要があります

const http = require('http');
const fs = require('fs');
const path = require('path');

function downloadJson() {
  const url = 'http://localhost:3000/api-json';

  http
    .get(url, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error(
          `リクエストが失敗しました。\nステータスコード: ${statusCode}`
        );
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          `無効なコンテンツタイプ。\n期待される: application/json でしたが、受け取った: ${contentType}`
        );
      }

      if (error) {
        console.error(error.message);
        res.resume(); // リクエストを中止して、メモリリークを防ぐ
        return;
      }

      let rawData = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          const filePath = 'open-api.json';

          // JSON データをファイルに書き込む
          fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2));

          console.log('JSON ファイルが保存されました:', filePath);
        } catch (e) {
          console.error('データの解析中にエラーが発生しました:', e.message);
        }
      });
    })
    .on('error', (e) => {
      console.error(`リクエスト中にエラーが発生しました: ${e.message}`);
    });
}

downloadJson();
