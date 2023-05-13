# amazon-seller-filter-checker

![image-5.png](image/image-5.png)

Amazonの検索ページにマーケットプレイス商品を除外・解除するボタンを追加したり、商品ページにサクラチェッカーの検索結果を開くボタンを追加するUserScriptです。

**UserScript URL**

```
https://raw.githubusercontent.com/motoacs/amazon-seller-filter-checker/master/amazon-seller-filter-checker.user.js
```



## 使い方

このユーザースクリプトを追加すると、Amazonの商品検索画面の左上に、マーケットプレイスの商品を除外するためのボタンが表示されます。ボタンをクリックするとページがリロードされ、Amazonが販売・発送する商品のみが表示されます。
![image-1.png](image/image-1.png)



再び画面左上のボタンをクリックすると、マーケットプレイスを含めた標準の検索画面に戻ります。
![image-2.png](image/image-2.png)



また各商品ページの左上に、表示中の商品を「サクラチェッカー」で検索するためのボタンが追加されます。
![image-3.png](image/image-3.png)



ボタンをクリックすると、新しいタブでサクラチェッカーが開きます。
![image.png](image/image.png)



## インストール方法

このプログラムはブラウザ拡張機能ではなくユーザースクリプトです。別途、ブラウザ拡張機能「Tampermonkey」や、Windows版 AdGuardなどの、ユーザースクリプトを実行できるツールにインストールしてご使用ください。



### Tampermonkey

Chrome / Edge / Firefoxの拡張機能ストアから、[Tampermonkey](https://www.tampermonkey.net/) をインストールします。
![image-4.png](image/image-4.png)



Tampermonkeyのダッシュボードを開きます。
![image-8.png](image/image-8.png)



「ユーティリティ」タブを開いて、「URLからインポート」に、以下のURLを入力してインストールします。

```
https://raw.githubusercontent.com/motoacs/amazon-seller-filter-checker/master/amazon-seller-filter-checker.user.js
```

![image-9.png](image/image-9.png)



### AdGuard

AdGuardの設定を開き、「拡張機能」→「拡張機能を追加」をクリックします。
![image-10.png](image/image-10.png)



以下のURLを入力して、「インストール」をクリックします。

```
https://raw.githubusercontent.com/motoacs/amazon-seller-filter-checker/master/amazon-seller-filter-checker.user.js
```

![image-6.png](image/image-6.png)



確認して「インストール」をクリックします。
![image-7.png](image/image-7.png)
