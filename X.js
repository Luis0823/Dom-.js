class X {
	constructor(e) {
		this.elem = document.querySelector(e);
	}
	style(e, t = "") {
		if ("" == t) return window.getComputedStyle(this.elem, null).getPropertyValue(e);
		this.elem.style[e] = t;
	}
	attr(e, t = null) {
		if (null == t) return this.elem.getAttribute(e);
		this.elem.setAttribute(e, t);
	}
	reAttr(e) {
		this.elem.removeAttribute(e);
	}
	val(e = null) {
		if (null == e) return this.elem.value;
		this.elem.value = e;
	}
	append(e) {
		this.elem.appendChild(e);
	}
	remove(e) {
		this.elem.removeChild(this.elem.childNodes[e]);
	}
	child() {
		return this.elem;
	}
	checkFor(ev, func) {
		this.elem.addEventListener(ev, () => {
			eval(func);
		});
	}
	html(e) {
		this.elem.innerHTML = e;
	}
	txt(e) {
		this.elem.textContent = e;
	}
	addClass(e) {
		this.elem.classList.add(e);
	}
	removeClass(e) {
		this.elem.classList.remove(e);
	}
	hide() {
		this.style("display", "none");
	}
	show() {
		this.style("display", "block");
	}
	box(e, t, i = "transparent") {
		this.style("width", e), this.style("height", t), this.style("backgroundColor", i);
	}
	scrollTo(e = !0) {
		this.elem.scrollIntoView(e);
	}
}

class Load {
	constructor(c, typ, bg) {
		this.color = c;
		this.thickness = typ;
		this.bgcolor = bg;
		this.time = 1;
		this.size = 70;
		this.animation = "linear";
		this.animationName = "spinner";
	}
	start() {
		this.loads = document.createElement("DIV");
		this.css = document.createElement("STYLE");
		this.css.innerHTML = `@keyframes spinner{
        0%{}
        100%{
            transform:rotateZ(720deg)
        }
    }`;
		this.loads.innerHTML = "<div id='ball'></div>";
		setTimeout(() => {
			document.body.appendChild(this.loads);
			document.body.appendChild(this.css);
			this.stylize();
		}, 2);
	}
	stylize() {
		this.loads.style.width = "100vw";
		this.loads.style.height = "100vh";
		this.loads.style.backgroundColor = this.bgcolor;
		this.loads.style.justifyContent = "center";
		this.loads.style.alignItems = "center";
		this.loads.style.position = "fixed";
		this.loads.style.top = "0";
		this.loads.style.left = "0";
		this.loads.style.display = "flex";
		this.loads.style.flexDirection = "column";
		this.ball = document.getElementById("ball");
		this.ball.style.width = this.size + "px";
		this.ball.style.height = this.size + "px";
		this.ball.style.borderRadius = "50%";
		this.ball.style.border = `${this.thickness}px solid ${this.color}`;
		this.ball.style.borderLeftColor = "transparent";
		this.ball.style.animation = `${this.animationName} ${this.time}s infinite ${this.animation}`;
	}
	stop(s) {
		if (null != s) {
			setTimeout(() => {
				this.loads.style.display = "none";
			}, s);
		} else {
			addEventListener("DOMContentLoaded", () => {
				setTimeout(() => {
					this.loads.style.display = "none";
				}, 3);
			});
		}
	}
}

function md5cycle(x, k) {
	var a = x[0],
		b = x[1],
		c = x[2],
		d = x[3];

	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17, 606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12, 1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7, 1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7, 1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22, 1236535329);

	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14, 643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9, 38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5, 568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20, 1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14, 1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);

	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16, 1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11, 1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4, 681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23, 76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16, 530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);

	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10, 1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6, 1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6, 1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21, 1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15, 718787259);
	b = ii(b, c, d, a, k[9], 21, -343485551);

	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
	txt = '';
	var n = s.length,
		state = [1732584193, -271733879, -1732584194, 271733878],
		i;
	for (i = 64; i <= s.length; i += 64) {
		md5cycle(state, md5blk(s.substring(i - 64, i)));
	}
	s = s.substring(i - 64);
	var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (i = 0; i < s.length; i++)
		tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	if (i > 55) {
		md5cycle(state, tail);
		for (i = 0; i < 16; i++) tail[i] = 0;
	}
	tail[14] = n * 8;
	md5cycle(state, tail);
	return state;
}

function md5blk(s) {
	var md5blks = [],
		i;
	for (i = 0; i < 64; i += 4) {
		md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
	var s = '',
		j = 0;
	for (; j < 4; j++)
		s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
	return s;
}

function hex(x) {
	for (var i = 0; i < x.length; i++)
		x[i] = rhex(x[i]);
	return x.join('');
}

function md5(s) {
	return hex(md51(s));
}

function add32(a, b) {
	return (a + b) & 0xFFFFFFFF;
}

if (md5('md5') != '1bc29b36f623ba82aaf6724fd3b16718') {
	function add32(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF),
			msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
}

function encodeBase64(textPlane) {
	let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	textPlane = escape(textPlane);
	let bits, dual, i = 0,
		encOut = '';
	while (textPlane.length >= i + 3) {
		bits =
			(textPlane.charCodeAt(i++) & 0xff) << 16 |
			(textPlane.charCodeAt(i++) & 0xff) << 8 |
			textPlane.charCodeAt(i++) & 0xff;
		encOut +=
			base64s.charAt((bits & 0x00fc0000) >> 18) +
			base64s.charAt((bits & 0x0003f000) >> 12) +
			base64s.charAt((bits & 0x00000fc0) >> 6) +
			base64s.charAt((bits & 0x0000003f));
	}
	if (textPlane.length - i > 0 && textPlane.length - i < 3) {
		dual = Boolean(textPlane.length - i - 1);
		bits =
			((textPlane.charCodeAt(i++) & 0xff) << 16) |
			(dual ? (textPlane.charCodeAt(i) & 0xff) << 8 : 0);
		encOut +=
			base64s.charAt((bits & 0x00fc0000) >> 18) +
			base64s.charAt((bits & 0x0003f000) >> 12) +
			(dual ? base64s.charAt((bits & 0x00000fc0) >> 6) : '=') +
			'=';
	}
	return encOut;
}

function decodeBase64(textBase64) {
	let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	let bits, decOut = '',
		i = 0;
	let undecOut = null;
	for (; i < textBase64.length; i += 4) {
		bits =
			(base64s.indexOf(textBase64.charAt(i)) & 0xff) << 18 |
			(base64s.indexOf(textBase64.charAt(i + 1)) & 0xff) << 12 |
			(base64s.indexOf(textBase64.charAt(i + 2)) & 0xff) << 6 |
			base64s.indexOf(textBase64.charAt(i + 3)) & 0xff;
		decOut += String.fromCharCode((bits & 0xff0000) >> 16, (bits & 0xff00) >> 8, bits & 0xff);
	}
	if (textBase64.charCodeAt(i - 2) === 61) {
		undecOut = decOut.substring(0, decOut.length - 2);
	} else if (textBase64.charCodeAt(i - 1) === 61) {
		undecOut = decOut.substring(0, decOut.length - 1);
	} else {
		undecOut = decOut;
	}
	return unescape(undecOut);
}

function encodeUTF8(text) {
	for (let c, i = -1, l = (text = text.split('')).length, o = String.fromCharCode;
		++i < l; text[i] = (c = text[i].charCodeAt(0)) >= 127 ? o(0xc0 | (c >>> 6)) + o(0x80 | (c & 0x3f)) : text[i]);
	return text.join('');
}

function decodeUTF8(textUTF8) {
	for (let a, b, i = -1, l = (textUTF8 = textUTF8.split('')).length, o = String.fromCharCode, c = 'charCodeAt';
		++i < l;
		((a = textUTF8[i][c](0)) & 0x80) && (textUTF8[i] = (a & 0xfc) === 0xc0 && ((b = textUTF8[i + 1][c](0)) & 0xc0) === 0x80 ?
			o(((a & 0x03) << 6) + (b & 0x3f)) :
			o(128), textUTF8[++i] = ''));
	return textUTF8.join('');
}

function cc(x) {
	let down = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let downre = Array.prototype.slice.call(down);
	downre.reverse();
	let up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	let upre = Array.prototype.slice.call(up);
	upre.reverse();

	var word = "";
	for (var i = 0; i < x.length; i++) {
		let j = x[i];
		if (j >= "a" && j <= "z") {
			let k = down.indexOf(j);
			let sl = downre[k];
			word += sl;
		} else if (j >= "A" && j <= "Z") {
			let k = up.indexOf(j);
			let sl = upre[k];
			word += sl;
		} else {
			word += j;
		}
	}
	return word;
}

function encodeBinary(e) {
	var t = "";
	for (var i = 0; i < e.length; i++) {
		t += e[i].charCodeAt(0).toString(2) + " ";
	}
	return t;
}

function decodeBinary(c) {
	return c.split(/\s/).map(function(val) {
		return String.fromCharCode(parseInt(val, 2));
	}).join("");
}

function decodeSwich(a) {
	a = cc(decodeBase64(unescape(atob(decodeUTF8(cc(atob(cc(a))))))));
	return a;
}

function encodeSwich(s) {
	s = cc(btoa(cc(encodeUTF8(btoa(escape(encodeBase64(cc(s))))))));
	return s;
}

function $(e) {
	return document.querySelector(e);
}

function remove(e, t) {
	e.removeChild(t);
}

function append(e, t) {
	e.appendChild(t);
}

function val(e, t = null) {
	if (null == t) return e.value;
	e.value = t;
}

function hide(e) {
	style(e, "display", "none");
}

function show(e) {
	style(e, "display", "block");
}

function style(a, e, t = "") {
	if ("" == t) return window.getComputedStyle(a, null).getPropertyValue(e);
	a.style[e] = t;
}

function attr(a, e, t = null) {
	if (null == t) return a.getAttribute(e);
	a.setAttribute(e, t);
}

function reAttr(a, e) {
	a.removeAttribute(e);
}

function child(a) {
	return a;
}

function checkFor(a, ev, func) {
	a.addEventListener(ev, () => {
		eval(func);
	})
}

function html(a, e) {
	a.innerHTML = e;
}

function txt(a, e) {
	a.textContent = e;
}

function addClass(a, e) {
	a.classList.add(e);
}

function removeClass(a, e) {
	a.classList.remove(e);
}

function box(a, e, t, i = "transparent") {
	style(a, "width", e), style(a, "height", t), style(a, "backgroundColor", i);
}

function scrollTo(a, e = !0) {
	a.scrollIntoView(e);
}

function timer(cd, ti = 1) {
	this.code = "()=>{" + cd + "}", setTimeout(eval(this.code), 1e3 * ti);
}

function makeClass(e, t) {
	this.class = document.createElement("style"), this.stuff = "." + e + "{" + t + "}", this.class.innerHTML = this.stuff, document.body.appendChild(this.class);
}

function create(e, t = null, a = $("body")) {
	if (null == t || t == "") {
		return this.element = document.createElement(e), a.appendChild(this.element), $(e);
	} else {
		if (t.includes('#')) {
			t = t.replace(/#/, "");
			return this.element = document.createElement(e), this.element.setAttribute("id", t), a.appendChild(this.element), new X("#" + t);
		}
		if (t.includes(".")) {
			t = t.replace(/\./, "");
			return this.element = document.createElement(e), this.element.setAttribute("class", t), a.appendChild(this.element), new X("." + t);
		}
	}
}

function repeat(cd, limit, jump = 1, ti = .07) {
	this.cnt = 1, this.cntrl = "this.cnt+=" + jump, this.code = "()=>{" + cd + ";if(this.cnt>=" + limit + "){clearInterval(this.inter)}else{" + this.cntrl + "}}", this.inter = setInterval(eval(this.code), 1e3 * ti);
}

function random(e, t = 0) {
	return 1 == Array.isArray(e) ? e[Math.round(Math.random() * (e.length - t))] : Math.round(Math.random() * (e - t));
}
