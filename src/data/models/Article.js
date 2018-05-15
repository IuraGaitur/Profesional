import moment from 'moment';
import parser from 'xmldom';
import {Dimensions} from 'react-native';
import cheerio from 'react-native-cheerio';
import he from 'he';

export default class Article {

    id = 0;
    image = '';
    title = '';
    text = '';
    thumbnail_square = '';
    timeToRead = '';
    time = '';

    fromArticleRaw(article) {

        let content = this.formatImages(article.content.rendered);
        content = this.sanitiseSpecialCharacter(content);

        let articleResult = new Article();
        articleResult.id = article.id;
        articleResult.image = article.thumbnail_url;
        articleResult.thumbnail_square = article.thumbnail_square;
        articleResult.title = he.decode(article.title_full.rendered);
        articleResult.content = content;
        articleResult.text = article.excerpt.rendered;
        articleResult.timeToRead = article.minutes_to_read;
        articleResult.time = moment(article.date).format("HH:mm, DD.MM.YYYY");
        articleResult.categories = article.categories;
        articleResult.link = article.link;


        return articleResult;
    }

    formatArticleContent(article) {
        let content = this.formatImages(article.content);
        content = this.sanitiseSpecialCharacter(content);
        article.content = content;

        return article;
    }

    fromArticlesRaw(articles) {
        let resultArticles = [];
        for (let i = 0; i < articles.length; i++) {

            let article = new Article();
            article.id = articles[i].id;
            article.image = articles[i].thumbnail_url;
            article.thumbnail_square = articles[i].thumbnail_square;
            article.title = he.decode(articles[i].title.rendered);
            article.text = articles[i].excerpt.rendered;
            article.timeToRead = articles[i].minutes_to_read;
            article.time = moment(articles[i].date).format("HH:mm, DD.MM.YYYY");
            article.categories = articles[i].categories;
            article.link = articles[i].link;
            article.content = articles[i].content.rendered;
            resultArticles.push(article);
        }
        return resultArticles;
    }

    sanitiseSpecialCharacter (content) {
        return content.replace('&amp;nbsp;', ' ');
    }

    formatImages(content) {

        const $ = cheerio.load(content);

        $('img, iframe').each(function(i, elem) {

            let widthItem = $(this).attr('width');
            let heigthItem = $(this).attr('height');

            let imageWidth = parseInt(Dimensions.get('window').width * 0.95);
            let imageHeight = parseInt((imageWidth * heigthItem) / widthItem);

            $(this).attr('width', parseInt(imageWidth));
            $(this).attr('height', parseInt(imageHeight));
            $(this).css('style', 'margin-bottom: 10');

        });

        $('.instagram-media').each(function(i, elem) {

            let instaSource = $(this).find('a').attr('href');
            let iframeWidth = parseInt(Dimensions.get('window').width * 0.95);
            let iframeHeight = iframeWidth + 95;

            let iframeCode = '<iframe src="' + instaSource + 'embed/captioned/" allowtransparency="true" frameborder="0" width="' + iframeWidth + '" height="' + iframeHeight + '" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: rgb(255, 255, 255); border: 1px solid rgb(219, 219, 219); margin: 1px 1px 12px; width: calc(100% - 2px); border-radius: 4px; box-shadow: none; display: block; padding: 0;"></iframe>';

            $(this).replaceWith(iframeCode);
        });

        content = $.html();

        return content;
    }
}

