# 4. Ödev (Emoji Search Test Cases)

Patika.dev & FMSS Bilişim Front-end Practicum Hafta 3 - 4. Ödev
Patika.dev linkim: "https://app.patika.dev/keremyvz"

## Açıklama

Emoji Search, kullanıcının emoji ifadelerini arayıp bulmasına olanak tanıyan bir React.js uygulamasıdır. Kullanıcılar arama çubuğuna bir kelime yazabilir veya bir emoji ifadesi seçerek diğer benzer emoji ifadelerini filtreleyebilirler.

Bu projede Emoji Search uygulaması için dört farklı test ssenaryosu hazırladık.
Proje için yazılan testleri `EmojiSearch.test.js` dosyası içinde bulabilirsiniz,

Orijinal projenin kaynak kodlarına buradan erişebilirsiniz:
[Emoji Search](https://github.com/ahfarmer/emoji-search)

![Ekran Görüntüsü](https://github.com/krmmyvz/emoji-search-patika/blob/main/Screenshot.png)

## Kurulum

Emoji Search projesini kullanmak için şunları yapmanız gerekir:

1. Bu uygulamayı yerel olarak çalıştırmak için, öncelikle bu projeyi kopyalayın veya indirin.
2. `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyin.
3. `npm start` komutunu çalıştırarak konsol uygulamasını başlatın. Uygulama, [link](http://localhost:3000).adresinde çalışacaktır.
4. `npm test` komutu ile yazılmış test senaryolarını çalıştırabilirsiniz

## Testler

Emoji Search projesi için yazılan testler şunlardır:

- `"renders the title"`: Başlık kısmının başarılı bir şekilde render edildiğini kontrol eder.
- `"renders emoji list"`: Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol eder.
- `"filters the emoji list based on search input"`: Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol eder.
- `"copies the clicked emoji to clipboard"`: Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol eder.
