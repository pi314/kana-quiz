let hiragana_table = { // {{{
    'a': ['あ'],
    'ba': ['ば'],
    'be': ['べ'],
    'bi': ['び'],
    'bo': ['ぼ'],
    'bu': ['ぶ'],
    'bya': ['びゃ'],
    'byo': ['びょ'],
    'byu': ['びゅ'],
    'cha': ['ちゃ'],
    'chi': ['ち'],
    'cho': ['ちょ'],
    'chu': ['ちゅ'],
    'da': ['だ'],
    'de': ['で'],
    'do': ['ど'],
    'e': ['え'],
    'fu': ['ふ'],
    'ga': ['が'],
    'ge': ['げ'],
    'gi': ['ぎ'],
    'go': ['ご'],
    'gu': ['ぐ'],
    'gya': ['ぎゃ'],
    'gyo': ['ぎょ'],
    'gyu': ['ぎゅ'],
    'ha': ['は'],
    'he': ['へ'],
    'hi': ['ひ'],
    'ho': ['ほ'],
    'hya': ['ひゃ'],
    'hyo': ['ひょ'],
    'hyu': ['ひゅ'],
    'i': ['い'],
    'ja': ['じゃ'],
    'ji': ['じ', 'ぢ'],
    'jo': ['じょ'],
    'ju': ['じゅ'],
    'ka': ['か'],
    'ke': ['け'],
    'ki': ['き'],
    'ko': ['こ'],
    'ku': ['く'],
    'kya': ['きゃ'],
    'kyo': ['きょ'],
    'kyu': ['きゅ'],
    'ma': ['ま'],
    'me': ['め'],
    'mi': ['み'],
    'mo': ['も'],
    'mu': ['む'],
    'mya': ['みゃ'],
    'myo': ['みょ'],
    'myu': ['みゅ'],
    'n': ['ん'],
    'na': ['な'],
    'ne': ['ね'],
    'ni': ['に'],
    'no': ['の'],
    'nu': ['ぬ'],
    'nya': ['にゃ'],
    'nyo': ['にょ'],
    'nyu': ['にゅ'],
    'o': ['お'],
    'pa': ['ぱ'],
    'pe': ['ぺ'],
    'pi': ['ぴ'],
    'po': ['ぽ'],
    'pu': ['ぷ'],
    'pya': ['ぴゃ'],
    'pyo': ['ぴょ'],
    'pyu': ['ぴゅ'],
    'ra': ['ら'],
    're': ['れ'],
    'ri': ['り'],
    'ro': ['ろ'],
    'ru': ['る'],
    'rya': ['りゃ'],
    'ryo': ['りょ'],
    'ryu': ['りゅ'],
    'sa': ['さ'],
    'se': ['せ'],
    'sha': ['しゃ'],
    'shi': ['し'],
    'sho': ['しょ'],
    'shu': ['しゅ'],
    'so': ['そ'],
    'su': ['す'],
    'ta': ['た'],
    'te': ['て'],
    'to': ['と'],
    'tsu': ['つ'],
    'u': ['う'],
    'wa': ['わ'],
    'we': ['ゑ'],
    'wi': ['ゐ'],
    'wo': ['を'],
    'ya': ['や'],
    'yo': ['よ'],
    'yu': ['ゆ'],
    'za': ['ざ'],
    'ze': ['ぜ'],
    'zo': ['ぞ'],
    'zu': ['ず', 'づ'],
} // }}}

let katakana_table = { // {{{
    'a': ['ア'],
    'ba': ['バ'],
    'be': ['ベ'],
    'bi': ['ビ'],
    'bo': ['ボ'],
    'bu': ['ブ'],
    'bya': ['ビャ'],
    'byo': ['ビョ'],
    'byu': ['ビュ'],
    'cha': ['チャ'],
    'chi': ['チ'],
    'cho': ['チョ'],
    'chu': ['チュ'],
    'da': ['ダ'],
    'de': ['デ'],
    'do': ['ド'],
    'e': ['エ'],
    'fu': ['フ'],
    'ga': ['ガ'],
    'ge': ['ゲ'],
    'gi': ['ギ'],
    'go': ['ゴ'],
    'gu': ['グ'],
    'gya': ['ギャ'],
    'gyo': ['ギョ'],
    'gyu': ['ギュ'],
    'ha': ['ハ'],
    'he': ['ヘ'],
    'hi': ['ヒ'],
    'ho': ['ホ'],
    'hya': ['ヒャ'],
    'hyo': ['ヒョ'],
    'hyu': ['ヒュ'],
    'i': ['イ'],
    'ja': ['ジャ'],
    'ji': ['ジ', 'ヂ'],
    'jo': ['ジョ'],
    'ju': ['ジュ'],
    'ka': ['カ'],
    'ke': ['ケ'],
    'ki': ['キ'],
    'ko': ['コ'],
    'ku': ['ク'],
    'kya': ['キャ'],
    'kyo': ['キョ'],
    'kyu': ['キュ'],
    'ma': ['マ'],
    'me': ['メ'],
    'mi': ['ミ'],
    'mo': ['モ'],
    'mu': ['ム'],
    'mya': ['ミャ'],
    'myo': ['ミョ'],
    'myu': ['ミュ'],
    'n': ['ン'],
    'na': ['ナ'],
    'ne': ['ネ'],
    'ni': ['ニ'],
    'no': ['ノ'],
    'nu': ['ヌ'],
    'nya': ['ニャ'],
    'nyo': ['ニョ'],
    'nyu': ['ニュ'],
    'o': ['オ'],
    'pa': ['パ'],
    'pe': ['ペ'],
    'pi': ['ピ'],
    'po': ['ポ'],
    'pu': ['プ'],
    'pya': ['ピャ'],
    'pyo': ['ピョ'],
    'pyu': ['ピュ'],
    'ra': ['ラ'],
    're': ['レ'],
    'ri': ['リ'],
    'ro': ['ロ'],
    'ru': ['ル'],
    'rya': ['リャ'],
    'ryo': ['リョ'],
    'ryu': ['リュ'],
    'sa': ['サ'],
    'se': ['セ'],
    'sha': ['シャ'],
    'shi': ['シ'],
    'sho': ['ショ'],
    'shu': ['シュ'],
    'so': ['ソ'],
    'su': ['ス'],
    'ta': ['タ'],
    'te': ['テ'],
    'to': ['ト'],
    'tsu': ['ツ'],
    'u': ['ウ'],
    'wa': ['ワ'],
    'we': ['ヱ'],
    'wi': ['ヰ'],
    'wo': ['ヲ'],
    'ya': ['ヤ'],
    'yo': ['ヨ'],
    'yu': ['ユ'],
    'za': ['ザ'],
    'ze': ['ゼ'],
    'zo': ['ゾ'],
    'zu': ['ズ', 'ヅ'],
} // }}}

$(function () {
    let prev = {};
    let curr = {};
    let next = {};
    let input = '';
    let pass_perfect = 0;
    let fail = 0;
    let pass = 0;

    function randint (a, b) {
        if (b === undefined) {
            min = 0;
            max = a;
        } else {
            min = a;
            max = b;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function choose (ary) {
        return ary[randint(ary.length)]
    }

    function new_quiz () {
        let table = null;
        let choices = null;
        let ans = '';
        let q = '';

        while (true) {
            table = randint(0, 2) ? hiragana_table : katakana_table;
            choices = Object.keys(table)
            ans = choose(choices)
            q = choose(table[ans])

            if (q != app.next.q || app.next.q == undefined) {
                break;
            }
        }

        app.prev = app.curr;
        app.curr = app.next;
        app.next = {
            q: q,
            input: '',
            ans: ans,
            fail: 0,
        };
    }

    let app = new Vue({
        el: '#app',
        data: {
            prev: prev,
            curr: curr,
            next: next,
            input: input,
            pass_perfect: pass_perfect,
            fail: fail,
            pass: pass,
            tally: ['', '一', '丄', '上', '止', '正'],
        },
    });

    $(document).keydown(function (event) {
        console.log(event.which);
        if (event.which == 8) {
            // backspace
            app.input = app.input.substr(0, app.input.length - 1);
        } else if (97 <= event.which && event.which <= 122) {
            // a-z
            app.input += String.fromCharCode(event.which);
            console.log(app.input);
        } else if (65 <= event.which && event.which <= 90) {
            // A-Z
            app.input += String.fromCharCode(event.which + 32);
            console.log(app.input);
        } else if (event.which == 13) {
            // enter
            app.curr.input = app.input;
            if (app.input == '') {
                // give up
                app.fail += 1;
                new_quiz();
            } else if (app.input == app.curr.ans) {
                // correct
                if (app.curr.fail == 0) {
                    app.pass_perfect += 1;
                } else {
                    app.pass += 1;
                }
                new_quiz();
            } else {
                // incorrect
                app.curr.fail += 1;
                if (app.curr.fail == 5) {
                    app.fail += 1;
                    new_quiz();
                }
            }
            app.input = '';
        }
    });

    new_quiz();
    new_quiz();
});
