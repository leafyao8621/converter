var table = [
    "字",
    "善",
    "敵",
    "三",
    "声",
    "舞",
    "球",
    "宿",
    "印",
    "女",
    "千",
    "絵",
    "録",
    "独",
    "隼",
    "父",
    "楓",
    "男",
    "山",
    "的",
    "同",
    "勝",
    "酒",
    "検",
    "米",
    "希"
];

function convert(s) {
    var out = "";
    for (var i = 0; i < s.length; i++) {
        var temp = s.charCodeAt(i);
        if (temp < 65 || temp > 122) {
            out += s.charAt(i);
        } else {
            if (temp >= 97 && temp <= 122) {
                temp -= 32;
            }
            if (temp >= 65 && temp <= 90) {
                out += table[temp - 65];
            } else {
                out += s.charAt(i);
            }
        }
    }
    return out;
}

function revert(s) {
    var out = "";
    for (var i = 0; i < s.length; i++) {
        var ind = table.indexOf(s.charAt(i), 0);
        out += ind == -1 ? s.charAt(i) : String.fromCharCode(ind + 65);
    }
    return out;
}

var [change_mode, conv, remove] = (() => {
    var flag = true;
    return [
        () => {
            flag = !flag;
            document.getElementById("iind").innerHTML = flag ? "入力（英）" :
                                                               "入力（日）";
            document.getElementById("oind").innerHTML = flag ? "出力（日）" :
                                                               "出力（英）";
        },
        () => {
            if (flag) {
                document.getElementById("opt").value =
                convert(document.getElementById("inp").value);
            } else {
                document.getElementById("opt").value =
                revert(document.getElementById("inp").value);
            }
        },
        () => {
            document.getElementById("inp").value = "";
            document.getElementById("opt").value = "";
        }
    ]
})()