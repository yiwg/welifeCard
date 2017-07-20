function id(name) {
    return document.getElementById(name)
}
function goGuanZhu() {
    location.href = "http://mp.weixin.qq.com/s?__biz=MzAwMTEwNzkzOA==&mid=201127912&idx=1&sn=80608f6d258aa4230fc204ce580bb16f#rd"
}
function goMakeCard() {
    location.href = "http://mp.weixin.qq.com/s?__biz=MzAwMTEwNzkzOA==&mid=201127912&idx=1&sn=80608f6d258aa4230fc204ce580bb16f#rd"
}
var faces = [":)", ":~", ":B", ":|", "8-)", ":<", ":$", ":X", ":Z", ":-|", ":@", ":P", ":D", ":O", ":(", ":+", "--b", ":Q", ":T", ",@P", ",@-D", ":d", ",@o", ":g", "|-)", ":!", ":L", ":>", ":,@", ",@f", ":-S", "?/", ":,@x", ",@@", ":8", ",@!", "!!!", "xx", "bye", "wipe", "dig", "handclap", "&-(", "B-)", "<@", "@>", ":-O", ">-|", "P-(", "X-)", ":*", "@x", "8*", "pd", "<W>", "beer", "basketb", "oo", "coffee", "eat", "pig", "rose", "fade", "showlove", "heart", "break", "cake", "li", "bome", "kn", "footb", "ladybug", "shit", "moon", "sun", "gift", "hug", "strong", "weak", "share", "v", "@)", "jj", "@@", "bad", "lvu", "no", "ok", "love", "<L>", "jump", "shake", "<O>", "circle", "kotow", "turn", "skip", "oY"];
var urls = ["http://cache.soso.com/img/img/e100.gif", "http://cache.soso.com/img/img/e101.gif", "http://cache.soso.com/img/img/e102.gif", "http://cache.soso.com/img/img/e103.gif", "http://cache.soso.com/img/img/e104.gif", "http://cache.soso.com/img/img/e105.gif", "http://cache.soso.com/img/img/e106.gif", "http://cache.soso.com/img/img/e107.gif", "http://cache.soso.com/img/img/e108.gif", "http://cache.soso.com/img/img/e110.gif", "http://cache.soso.com/img/img/e111.gif", "http://cache.soso.com/img/img/e112.gif", "http://cache.soso.com/img/img/e113.gif", "http://cache.soso.com/img/img/e114.gif", "http://cache.soso.com/img/img/e115.gif", "http://cache.soso.com/img/img/e116.gif", "http://cache.soso.com/img/img/e117.gif", "http://cache.soso.com/img/img/e118.gif", "http://cache.soso.com/img/img/e119.gif", "http://cache.soso.com/img/img/e120.gif", "http://cache.soso.com/img/img/e121.gif", "http://cache.soso.com/img/img/e122.gif", "http://cache.soso.com/img/img/e123.gif", "http://cache.soso.com/img/img/e124.gif", "http://cache.soso.com/img/img/e125.gif", "http://cache.soso.com/img/img/e126.gif", "http://cache.soso.com/img/img/e127.gif", "http://cache.soso.com/img/img/e128.gif", "http://cache.soso.com/img/img/e129.gif", "http://cache.soso.com/img/img/e130.gif", "http://cache.soso.com/img/img/e131.gif", "http://cache.soso.com/img/img/e132.gif", "http://cache.soso.com/img/img/e133.gif", "http://cache.soso.com/img/img/e134.gif", "http://cache.soso.com/img/img/e135.gif", "http://cache.soso.com/img/img/e136.gif", "http://cache.soso.com/img/img/e137.gif", "http://cache.soso.com/img/img/e138.gif", "http://cache.soso.com/img/img/e139.gif", "http://cache.soso.com/img/img/e140.gif", "http://cache.soso.com/img/img/e141.gif", "http://cache.soso.com/img/img/e142.gif", "http://cache.soso.com/img/img/e143.gif", "http://cache.soso.com/img/img/e144.gif", "http://cache.soso.com/img/img/e145.gif", "http://cache.soso.com/img/img/e146.gif", "http://cache.soso.com/img/img/e147.gif", "http://cache.soso.com/img/img/e148.gif", "http://cache.soso.com/img/img/e149.gif", "http://cache.soso.com/img/img/e151.gif", "http://cache.soso.com/img/img/e152.gif", "http://cache.soso.com/img/img/e153.gif", "http://cache.soso.com/img/img/e154.gif", "http://cache.soso.com/img/img/e155.gif", "http://cache.soso.com/img/img/e156.gif", "http://cache.soso.com/img/img/e157.gif", "http://cache.soso.com/img/img/e158.gif", "http://cache.soso.com/img/img/e159.gif", "http://cache.soso.com/img/img/e160.gif", "http://cache.soso.com/img/img/e161.gif", "http://cache.soso.com/img/img/e162.gif", "http://cache.soso.com/img/img/e163.gif", "http://cache.soso.com/img/img/e164.gif", "http://cache.soso.com/img/img/e165.gif", "http://cache.soso.com/img/img/e166.gif", "http://cache.soso.com/img/img/e167.gif", "http://cache.soso.com/img/img/e168.gif", "http://cache.soso.com/img/img/e169.gif", "http://cache.soso.com/img/img/e170.gif", "http://cache.soso.com/img/img/e171.gif", "http://cache.soso.com/img/img/e172.gif", "http://cache.soso.com/img/img/e173.gif", "http://cache.soso.com/img/img/e174.gif", "http://cache.soso.com/img/img/e175.gif", "http://cache.soso.com/img/img/e176.gif", "http://cache.soso.com/img/img/e177.gif", "http://cache.soso.com/img/img/e178.gif", "http://cache.soso.com/img/img/e179.gif", "http://cache.soso.com/img/img/e180.gif", "http://cache.soso.com/img/img/e181.gif", "http://cache.soso.com/img/img/e182.gif", "http://cache.soso.com/img/img/e183.gif", "http://cache.soso.com/img/img/e184.gif", "http://cache.soso.com/img/img/e185.gif", "http://cache.soso.com/img/img/e186.gif", "http://cache.soso.com/img/img/e187.gif", "http://cache.soso.com/img/img/e188.gif", "http://cache.soso.com/img/img/e189.gif", "http://cache.soso.com/img/img/e190.gif", "http://cache.soso.com/img/img/e191.gif", "http://cache.soso.com/img/img/e192.gif", "http://cache.soso.com/img/img/e193.gif", "http://cache.soso.com/img/img/e194.gif", "http://cache.soso.com/img/img/e195.gif", "http://cache.soso.com/img/img/e196.gif", "http://cache.soso.com/img/img/e197.gif", "http://cache.soso.com/img/img/e198.gif", "http://cache.soso.com/img/img/e199.gif"];
if (typeof gTextAreaLeft == "undefined") {
    var gTextAreaLeft = .1
}
if (typeof gTextAreaTop == "undefined") {
    var gTextAreaTop = .2
}
if (typeof gTextAreaWidth == "undefined") {
    var gTextAreaWidth = .8
}
if (typeof gTextAreaHeight == "undefined") {
    var gTextAreaHeight = .2
}
if (typeof gTextDesc == "undefined") {
    var gTextDesc = "一张小小的卡片，捎去对您的无限祝福!"
}
if (typeof gTextSizeMode == "undefined") {
    var gTextSizeMode = "bodywidth"
}
if (typeof gTextAnimateMode == "undefined") {
    var gTextAnimateMode = "up"
}
if (typeof gTextSpeed == "undefined") {
    var gTextSpeed = 350
}
function ConvFaceOnBegin(message) {
    var result = "";
    var i = 0;
    if (message.substring(i, i + 2) == "/:") {
        for (f = 0; f < faces.length; f++) {
            facestr = faces[f];
            if (message.substring(i + 2, i + 2 + facestr.length) == facestr) {
                result = '<img src="' + urls[f] + '" width="48" height="48">';
                i = i + 2 + facestr.length;
                break
            }
        }
    }
    return [result, i]
}
function ConvFace(message) {
    var msglen = message.length;
    var result = "";
    var i = 0;
    while (i < msglen) {
        var found = false;
        if (message.substring(i, i + 2) == "/:") {
            for (f = 0; f < faces.length; f++) {
                facestr = faces[f];
                if (message.substring(i + 2, i + 2 + facestr.length) == facestr) {
                    result = result + '<img src="' + urls[f] + '" width="36" height="36">';
                    i = i + 2 + facestr.length;
                    found = true;
                    break
                }
            }
        }
        if (found == false) {
            result = result + message.substring(i, i + 1);
            i += 1
        }
    }
    return result
}
function onLoad() {
    gTextSub = id("textsub");
    gTextSuper = id("textsuper");
    if (typeof gTextFont != "undefined") {
        gTextSub.innerHTML = '<img id="textcontent"/>';
        gTextContent = id("textcontent");
        var url = "http://weika.sinaapp.com/myfont.php?TextDesc=" + encodeURIComponent(gTextDesc) + "&TextColor=" + gTextColor.substr(1) + "&TextFont=" + gTextFont;
        gTextContent.style.top = 2e3;
        gTextContent.style.left = 0;
        gTextContent.onload = onTextLoad;
        gTextContent.src = url
    } else {
        gTextSub.innerHTML = '<b id="textcontent"/>';
        gTextContent = id("textcontent");
        if (gTextSizeMode == "img") {
            var cardimg = id("cardimg");
            gTextSuper.style.left = cardimg.offsetLeft + cardimg.offsetWidth * gTextAreaLeft;
            gTextSuper.style.top = cardimg.offsetTop + cardimg.offsetHeight * gTextAreaTop;
            gTextSuper.style.height = cardimg.offsetHeight * gTextAreaHeight;
            gTextSuper.style.width = cardimg.offsetWidth * gTextAreaWidth
        } else if (gTextSizeMode == "bodywidth") {
            var ruler = id("ruler");
            var baseLen = ruler.offsetWidth;
            gTextSuper.style.left = baseLen * gTextAreaLeft;
            gTextSuper.style.top = baseLen * gTextAreaTop;
            gTextSuper.style.height = baseLen * gTextAreaHeight;
            gTextSuper.style.width = baseLen * gTextAreaWidth
        }
        if (gTextAnimateMode == "print") {
            onPrintLoad();
            setTimeout("onPrintAnimate()", 1500)
        } else if (gTextAnimateMode == "up") {
            onUpLoad();
            setTimeout("onUpAnimate()", 10)
        } else if (gTextAnimateMode == "left") {
            gTextDesc = gTextDesc.replace(/<br>/g, "");
            onLeftLoad();
            setTimeout("onLeftAnimate()", 10)
        } else if (gTextAnimateMode == "static") {
            gTextDesc = gTextDesc.replace(/<br>/g, "");
            onStaticLoad()
        }
        gTextContent.innerHTML = gTextDesc;
        if (typeof gFontSize != "undefined") {
            gTextContent.style.fontSize = gFontSize
        }
        if (typeof gTextColor != "undefined") {
            gTextContent.style.color = gTextColor
        }
    }
}
function onTextLoad() {
    var ruler = id("ruler");
    var baseLen = ruler.offsetWidth;
    gTextSuper.style.left = baseLen * gTextAreaLeft;
    gTextSuper.style.top = baseLen * gTextAreaTop;
    gTextSuper.style.height = baseLen * gTextAreaHeight;
    gTextSuper.style.width = baseLen * gTextAreaWidth;
    gTextSub.style.top = "" + gTextSuper.offsetHeight + "px";
    gTextSub.addEventListener("webkitTransitionEnd", onMoveEnd, false);
    moveUp()
}
function onMoveEnd() {
    gTextSub.style.webkitTransition = "";
    gTextSub.style.top = "" + gTextSuper.offsetHeight + "px";
    moveUp()
}
function moveUp() {
    gTextSub.style.webkitTransition = "top " + (gTextContent.height + gTextSuper.offsetHeight) / gTextSpeed + "s linear";
    gTextSub.style.top = "-" + gTextContent.height + "px"
}
function onPrintLoad() {
    gTextSub.style.top = gTextSuper.offsetHeight;
    gPrintText = gTextDesc;
    gOrgTextDesc = gTextDesc;
    gTextDesc = ""
}
function onUpLoad() {
    gTextDesc = ConvFace(gTextDesc);
    gTextSub.style.top = gTextSuper.offsetHeight
}
function onLeftLoad() {
    gTextDesc = ConvFace(gTextDesc);
    textwidth = 75 * gTextDesc.length;
    if (textwidth < 500) textwidth = 500;
    gTextSub.style.width = textwidth;
    gTextSub.style.left = gTextSuper.offsetWidth
}
function onStaticLoad() {
    gTextDesc = ConvFace(gTextDesc);
    gTextSub.style.top = gTextSuper.offsetHeight
}
function onPrintAnimate() {
    pushText = "";
    var reachEnd = 0;
    if (gPrintText.length <= 1) {
        reachEnd = 1
    }
    var cutlen = 0;
    if (gPrintText.length >= 4 && gPrintText.substring(0, 4) == "<br>") {
        gPrintText = gPrintText.substring(4);
        pushText = "<br>";
        cutlen = 4
    } else if (gPrintText.substring(0, 2) == "/:") {
        result = ConvFaceOnBegin(gPrintText);
        cutlen = result[1];
        if (cutlen > 0) {
            gPrintText = gPrintText.substring(cutlen);
            pushText = result[0]
        }
    }
    if (cutlen == 0 && gPrintText.length >= 1) {
        pushText = gPrintText.substring(0, 1);
        gPrintText = gPrintText.substring(1)
    }
    gTextContent.innerHTML = gTextContent.innerHTML + pushText;
    if (textsub.offsetTop + textsub.offsetHeight > textsuper.offsetHeight) {
        textsub.style.top = textsuper.offsetHeight - textsub.offsetHeight
    }
    if (reachEnd == 1) {
        setTimeout("onPrintAnimate()", 1e4)
    } else if (gPrintText.length == 0) {
        gTextSub.style.top = gTextSuper.offsetHeight;
        gPrintText = gOrgTextDesc;
        gTextContent.innerHTML = gTextDesc;
        setTimeout("onPrintAnimate()", 1500)
    } else {
        setTimeout("onPrintAnimate()", gTextSpeed)
    }
}
function onUpAnimate() {
    gTextSub.style.top = gTextSub.offsetTop - 1;
    if (gTextSub.offsetTop < -gTextSub.offsetHeight) {
        gTextSub.style.top = gTextSuper.offsetHeight
    }
    setTimeout("onUpAnimate()", gTextSpeed)
}
function onLeftAnimate() {
    gTextSub.style.left = gTextSub.offsetLeft - 1;
    if (gTextSub.offsetLeft < -textwidth) {
        gTextSub.style.left = gTextSuper.offsetWidth
    }
    setTimeout("onLeftAnimate()", gTextSpeed)
}
function showText() {
    var text = id("textsuper");
    text.style.display = "block";
    setTimeout("onLoad();", 100)
}
var pop_up_note_mode = true;
var note_id = 1;
function switchsound() {
    au = id("bgsound");
    ai = id("sound_image");
    if (au.paused) {
        au.play();
        ai.src = "http://weika.sinaapp.com/img/ext/music_note_big.png";
        pop_up_note_mode = true;
        popup_note();
        id("music_txt").innerHTML = "打开";
        id("music_txt").style.visibility = "visible";
        setTimeout(function() {
            id("music_txt").style.visibility = "hidden"
        },
        2500)
    } else {
        pop_up_note_mode = false;
        au.pause();
        ai.src = "http://weika.sinaapp.com/img/ext/music_note_big.png";
        id("music_txt").innerHTML = "关闭";
        id("music_txt").style.visibility = "visible";
        setTimeout(function() {
            id("music_txt").style.visibility = "hidden"
        },
        2500)
    }
}
function on_pop_note_end(event) {
    note = event.target;
    if (note.parentNode == id("note_box")) {
        id("note_box").removeChild(note);
        console.log("remove note id " + note.getAttribute("id"))
    }
}
function popup_note() {
    box = id("note_box");
    note = document.createElement("span");
    note.style.cssText = "visibility:visible;position:absolute;background-image:url('http://tu.kagirl.net/pic/music_note_small.png');width:15px;height:25px";
    note.style.left = Math.random() * 20 + 20;
    note.style.top = "75px";
    this_node = "music_note_" + note_id;
    note.setAttribute("ID", this_node);
    note_id += 1;
    scale = Math.random() * .4 + .4;
    note.style.webkitTransform = "rotate(" + Math.floor(360 * Math.random()) + "deg) scale(" + scale + "," + scale + ")";
    note.style.webkitTransition = "top 2s ease-in, opacity 2s ease-in, left 2s ease-in";
    note.addEventListener("webkitTransitionEnd", on_pop_note_end);
    box.appendChild(note);
    setTimeout("document.getElementById('" + this_node + "').style.left = '0px';", 100);
    setTimeout("document.getElementById('" + this_node + "').style.top = '0px';", 100);
    setTimeout("document.getElementById('" + this_node + "').style.opacity = '0';", 100);
    if (pop_up_note_mode) {
        setTimeout("popup_note()", 600)
    }
}
function playbksound() {
    var audiocontainer = id("audiocontainer");
    if (audiocontainer != undefined) {
        audiocontainer.innerHTML = '<audio id="bgsound" loop="loop" autoplay="autoplay"><source src="' + gSoundUrl + '" ></audio>'
    }
    var audio = id("bgsound");
    audio.play();
    sound_div = document.createElement("div");
    sound_div.setAttribute("ID", "cardsound");
    sound_div.style.cssText = "position:absolute;right:20px;top:40px;z-index:2000;visibility:visible;";
    box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
    bg_htm = "<img id='sound_image' onclick='switchsound()' src='http://weika.sinaapp.com/img/ext/music_note_big.png'/>";
    txt_htm = "<div id='music_txt' style='text-shadow:1px 1px 1px #000;color:white;position:absolute;left:-40px;top:30px;width:60px'></div>";
    sound_div.innerHTML = bg_htm + box_htm + txt_htm;
    id("content").appendChild(sound_div);
    setTimeout("popup_note()", 100)
}
function translateUrl(url) {
    pos1 = url.indexOf("//", 0);
    if (pos1 != -1) {
        pos2 = url.indexOf("/", pos1 + 2);
        n = Math.floor(Math.random() * 5100 + 1);
        url = "http://" + n + ".c.vheka.cn" + url.substring(pos2)
    }
    return url
}
function in_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true
    }
    return false
} (function() {
    var onBridgeReady = function() {
        playbksound();
        WeixinJSBridge.on("menu:share:appmessage",
        function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                img_url: gShareLogo,
                img_width: "640",
                img_height: "640",
                //link: translateUrl(gShareUrl),
				link: gShareUrl,
                desc: gShareDesc,
                title: gShareTitle
            },
            function(res) {
                switch (res.err_msg) {
                case "send_app_msg:confirm":
                case "send_app_msg:ok":
                    location.href = "http://mp.weixin.qq.com/s?__biz=MzAwMTEwNzkzOA==&mid=201127912&idx=1&sn=80608f6d258aa4230fc204ce580bb16f#rd";
                    break
                }
            })
        });
        WeixinJSBridge.on("menu:share:timeline",
        function(argv) {
            WeixinJSBridge.invoke("shareTimeline", {
                img_url: gShareLogo,
                img_width: "640",
                img_height: "640",
                //link: translateUrl(gShareUrl),
				link: gShareUrl,
                desc: gShareDesc,
                title: gShareDesc
            },
            function(res) {
                switch (res.err_msg) {
                case "share_timeline:confirm":
                case "share_timeline:ok":
                    location.href = "http://mp.weixin.qq.com/s?__biz=MzAwMTEwNzkzOA==&mid=201127912&idx=1&sn=80608f6d258aa4230fc204ce580bb16f#rd";
                    break
                }
            })
        })
    };
    if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false)
    } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
        document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)
    }
    if (!in_weixin()) {
        setTimeout("playbksound()", 500)
    }
})();