export default class FormulaUtils {

    static transformInHtml(text) {
        text = "<p>" + text + " </p>";
        let result = text.replace(/(\d+)([a-zA-Z ]+)/g, '<b>$1</b> $2');
        return result;
    }

}