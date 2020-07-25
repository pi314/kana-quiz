let hiragana_table = { // {{{
    'あ': 'a',
    'ば': 'ba',
    'べ': 'be',
    'び': 'bi',
    'ぼ': 'bo',
    'ぶ': 'bu',
    'びゃ': 'bya',
    'びょ': 'byo',
    'びゅ': 'byu',
    'ちゃ': ['cha', 'cya'],
    'ち': 'chi',
    'ちょ': ['cho', 'cyo'],
    'ちゅ': ['chu', 'cyu'],
    'だ': 'da',
    'ぢ': 'di',
    'づ': 'du',
    'で': 'de',
    'ど': 'do',
    'え': 'e',
    'ふ': 'fu',
    'が': 'ga',
    'げ': 'ge',
    'ぎ': 'gi',
    'ご': 'go',
    'ぐ': 'gu',
    'ぎゃ': 'gya',
    'ぎょ': 'gyo',
    'ぎゅ': 'gyu',
    'は': 'ha',
    'へ': 'he',
    'ひ': 'hi',
    'ほ': 'ho',
    'ひゃ': 'hya',
    'ひょ': 'hyo',
    'ひゅ': 'hyu',
    'い': 'i',
    'じゃ': ['ja', 'jya'],
    'じ': 'ji',
    'じょ': ['jo', 'jyo'],
    'じゅ': ['ju', 'jyu'],
    'か': 'ka',
    'け': 'ke',
    'き': 'ki',
    'こ': 'ko',
    'く': 'ku',
    'きゃ': 'kya',
    'きょ': 'kyo',
    'きゅ': 'kyu',
    'ま': 'ma',
    'め': 'me',
    'み': 'mi',
    'も': 'mo',
    'む': 'mu',
    'みゃ': 'mya',
    'みょ': 'myo',
    'みゅ': 'myu',
    'ん': 'n',
    'な': 'na',
    'ね': 'ne',
    'に': 'ni',
    'の': 'no',
    'ぬ': 'nu',
    'にゃ': 'nya',
    'にょ': 'nyo',
    'にゅ': 'nyu',
    'お': 'o',
    'ぱ': 'pa',
    'ぺ': 'pe',
    'ぴ': 'pi',
    'ぽ': 'po',
    'ぷ': 'pu',
    'ぴゃ': 'pya',
    'ぴょ': 'pyo',
    'ぴゅ': 'pyu',
    'ら': 'ra',
    'れ': 're',
    'り': 'ri',
    'ろ': 'ro',
    'る': 'ru',
    'りゃ': 'rya',
    'りょ': 'ryo',
    'りゅ': 'ryu',
    'さ': 'sa',
    'せ': 'se',
    'しゃ': 'sha',
    'し': 'shi',
    'しょ': 'sho',
    'しゅ': 'shu',
    'そ': 'so',
    'す': 'su',
    'た': 'ta',
    'て': 'te',
    'と': 'to',
    'つ': ['tsu', 'tu'],
    'う': 'u',
    'わ': 'wa',
    'ゑ': 'we',
    'ゐ': 'wi',
    'を': 'wo',
    'や': 'ya',
    'よ': 'yo',
    'ゆ': 'yu',
    'ざ': 'za',
    'ぜ': 'ze',
    'ぞ': 'zo',
    'ず': 'zu',
}
// }}}

let katakana_table = { // {{{
    'ア': 'a',
    'バ': 'ba',
    'ベ': 'be',
    'ビ': 'bi',
    'ボ': 'bo',
    'ブ': 'bu',
    'ビャ': 'bya',
    'ビョ': 'byo',
    'ビュ': 'byu',
    'チャ': ['cha', 'cya'],
    'チ': 'chi',
    'チョ': ['cho', 'cyo'],
    'チュ': ['chu', 'cyu'],
    'ダ': 'da',
    'ヂ': 'di',
    'ヅ': 'du',
    'デ': 'de',
    'ド': 'do',
    'エ': 'e',
    'フ': 'fu',
    'ガ': 'ga',
    'ゲ': 'ge',
    'ギ': 'gi',
    'ゴ': 'go',
    'グ': 'gu',
    'ギャ': 'gya',
    'ギョ': 'gyo',
    'ギュ': 'gyu',
    'ハ': 'ha',
    'ヘ': 'he',
    'ヒ': 'hi',
    'ホ': 'ho',
    'ヒャ': 'hya',
    'ヒョ': 'hyo',
    'ヒュ': 'hyu',
    'イ': 'i',
    'ジャ': ['ja', 'jya'],
    'ジ': 'ji',
    'ジョ': ['jo', 'jyo'],
    'ジュ': ['ju', 'jyu'],
    'カ': 'ka',
    'ケ': 'ke',
    'キ': 'ki',
    'コ': 'ko',
    'ク': 'ku',
    'キャ': 'kya',
    'キョ': 'kyo',
    'キュ': 'kyu',
    'マ': 'ma',
    'メ': 'me',
    'ミ': 'mi',
    'モ': 'mo',
    'ム': 'mu',
    'ミャ': 'mya',
    'ミョ': 'myo',
    'ミュ': 'myu',
    'ン': 'n',
    'ナ': 'na',
    'ネ': 'ne',
    'ニ': 'ni',
    'ノ': 'no',
    'ヌ': 'nu',
    'ニャ': 'nya',
    'ニョ': 'nyo',
    'ニュ': 'nyu',
    'オ': 'o',
    'パ': 'pa',
    'ペ': 'pe',
    'ピ': 'pi',
    'ポ': 'po',
    'プ': 'pu',
    'ピャ': 'pya',
    'ピョ': 'pyo',
    'ピュ': 'pyu',
    'ラ': 'ra',
    'レ': 're',
    'リ': 'ri',
    'ロ': 'ro',
    'ル': 'ru',
    'リャ': 'rya',
    'リョ': 'ryo',
    'リュ': 'ryu',
    'サ': 'sa',
    'セ': 'se',
    'シャ': 'sha',
    'シ': 'shi',
    'ショ': 'sho',
    'シュ': 'shu',
    'ソ': 'so',
    'ス': 'su',
    'タ': 'ta',
    'テ': 'te',
    'ト': 'to',
    'ツ': ['tsu', 'tu'],
    'ウ': 'u',
    'ワ': 'wa',
    'ヱ': 'we',
    'ヰ': 'wi',
    'ヲ': 'wo',
    'ヤ': 'ya',
    'ヨ': 'yo',
    'ユ': 'yu',
    'ザ': 'za',
    'ゼ': 'ze',
    'ゾ': 'zo',
    'ズ': 'zu',
}
// }}}

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
            choices = Object.keys(table);
            q = choose(choices);
            ans = table[q];

            if (q == app.next.q) {
                continue
            }
            break;
        }

        if (typeof ans === "string") {
            ans = [ans];
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
                app.curr.pass = false;
                new_quiz();
            } else if (app.curr.ans.indexOf(app.input) != -1) {
                // correct
                if (app.curr.fail == 0) {
                    app.pass_perfect += 1;
                } else {
                    app.pass += 1;
                }
                app.curr.pass = true;
                new_quiz();
            } else {
                // incorrect
                app.curr.fail += 1;
                app.curr.pass = false;
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
