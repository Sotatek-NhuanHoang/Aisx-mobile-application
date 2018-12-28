/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'aisxicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-chart-pie': '&#xe946;',
		'icon-delete_3': '&#xe947;',
		'icon-delete': '&#xe948;',
		'icon-edit-favorite': '&#xe949;',
		'icon-gift': '&#xe94a;',
		'icon-ID-card': '&#xe94b;',
		'icon-move': '&#xe94c;',
		'icon-plus': '&#xe94d;',
		'icon-QR': '&#xe94e;',
		'icon-setting_2': '&#xe94f;',
		'icon-top': '&#xe950;',
		'icon-world': '&#xe951;',
		'icon-display': '&#xe940;',
		'icon-fillter': '&#xe941;',
		'icon-hide': '&#xe942;',
		'icon-icon': '&#xe943;',
		'icon-plus1': '&#xe944;',
		'icon-arrow_5_1': '&#xe93e;',
		'icon-arrow_5': '&#xe93f;',
		'icon-account': '&#xe900;',
		'icon-aisx': '&#xe901;',
		'icon-alphabe': '&#xe902;',
		'icon-anti-phishing-code': '&#xe903;',
		'icon-API': '&#xe904;',
		'icon-area': '&#xe905;',
		'icon-arrow_1_1': '&#xe906;',
		'icon-arrow_1': '&#xe907;',
		'icon-arrow_2_1': '&#xe908;',
		'icon-arrow_2_2': '&#xe909;',
		'icon-arrow_2': '&#xe90a;',
		'icon-arrow_3_1': '&#xe90b;',
		'icon-arrow_3': '&#xe90c;',
		'icon-arrow_4_1': '&#xe90d;',
		'icon-arrow_4_2': '&#xe90e;',
		'icon-bars': '&#xe90f;',
		'icon-calendar': '&#xe910;',
		'icon-candles': '&#xe911;',
		'icon-chart': '&#xe912;',
		'icon-close': '&#xe913;',
		'icon-coppy': '&#xe914;',
		'icon-deposit': '&#xe915;',
		'icon-diamond': '&#xe916;',
		'icon-email': '&#xe917;',
		'icon-ethereum': '&#xe918;',
		'icon-expad': '&#xe919;',
		'icon-export': '&#xe91a;',
		'icon-facebook': '&#xe91b;',
		'icon-favorites-2': '&#xe91c;',
		'icon-favorites': '&#xe91d;',
		'icon-Funds': '&#xe91e;',
		'icon-gainers': '&#xe91f;',
		'icon-get-reward': '&#xe920;',
		'icon-google-authen': '&#xe921;',
		'icon-google-plus': '&#xe922;',
		'icon-heikin-ashi': '&#xe923;',
		'icon-help': '&#xe924;',
		'icon-hollow-candles': '&#xe925;',
		'icon-key-pass': '&#xe926;',
		'icon-line': '&#xe927;',
		'icon-link': '&#xe928;',
		'icon-linkedin': '&#xe929;',
		'icon-login-password': '&#xe92a;',
		'icon-losers': '&#xe92b;',
		'icon-market': '&#xe92c;',
		'icon-nodata': '&#xe92d;',
		'icon-referral-program': '&#xe92e;',
		'icon-Search': '&#xe92f;',
		'icon-setting': '&#xe930;',
		'icon-shield': '&#xe931;',
		'icon-sign': '&#xe932;',
		'icon-sms-authen': '&#xe933;',
		'icon-Speaker': '&#xe934;',
		'icon-support': '&#xe935;',
		'icon-telegram': '&#xe936;',
		'icon-trades': '&#xe937;',
		'icon-transfer': '&#xe938;',
		'icon-twitter': '&#xe939;',
		'icon-user-2': '&#xe93a;',
		'icon-user': '&#xe93b;',
		'icon-withdrawal': '&#xe93c;',
		'icon-youtube': '&#xe93d;',
		'icon-delete_2': '&#xe945;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
