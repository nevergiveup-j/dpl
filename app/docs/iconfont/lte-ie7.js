/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ayun\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-ECS' : '&#x45;',
			'icon-SLB' : '&#x53;',
			'icon-OSS' : '&#x4f;',
			'icon-home' : '&#x48;',
			'icon-pencil' : '&#x70;',
			'icon-image' : '&#x28;',
			'icon-cart' : '&#x63;',
			'icon-search' : '&#x2a;',
			'icon-minus' : '&#x2d;',
			'icon-plus' : '&#x2b;',
			'icon-close' : '&#x78;',
			'icon-cloud-download' : '&#x2e;',
			'icon-cloud-upload' : '&#x2f;',
			'icon-user' : '&#x30;',
			'icon-users' : '&#x31;',
			'icon-spinner' : '&#x32;',
			'icon-file' : '&#x33;',
			'icon-envelop' : '&#x34;',
			'icon-calendar' : '&#x35;',
			'icon-alarm' : '&#x36;',
			'icon-mobile' : '&#x37;',
			'icon-copy' : '&#x38;',
			'icon-credit' : '&#x39;',
			'icon-coin' : '&#x3a;',
			'icon-phone' : '&#x3b;',
			'icon-profile' : '&#x3c;',
			'icon-tags' : '&#x3d;',
			'icon-undo' : '&#x3e;',
			'icon-redo' : '&#x3f;',
			'icon-bubble' : '&#x40;',
			'icon-bubble-2' : '&#x42;',
			'icon-spinner-2' : '&#x72;',
			'icon-wrench' : '&#x7d;',
			'icon-cog' : '&#x46;',
			'icon-gift' : '&#x47;',
			'icon-remove' : '&#x67;',
			'icon-globe' : '&#x65;',
			'icon-attachment' : '&#x6b;',
			'icon-link' : '&#x4b;',
			'icon-bookmark' : '&#x4c;',
			'icon-star' : '&#x4d;',
			'icon-star-2' : '&#x4e;',
			'icon-warning' : '&#x21;',
			'icon-notification' : '&#xff01;',
			'icon-question' : '&#xff1f;',
			'icon-info' : '&#x69;',
			'icon-cancel-circle' : '&#x58;',
			'icon-checkmark-circle' : '&#x55;',
			'icon-checkmark' : '&#x56;',
			'icon-checkmark-2' : '&#x76;',
			'icon-RDS' : '&#x52;',
			'icon-ODPS' : '&#x59;',
			'icon-OTS' : '&#x5a;',
			'icon-ACE' : '&#x41;',
			'icon-arrow1' : '&#x5c;',
			'icon-lock' : '&#x5b;',
			'icon-unlocked' : '&#x5d;',
			'icon-heart' : '&#x5f;',
			'icon-heart-2' : '&#x60;',
			'icon-zoom-in' : '&#x61;',
			'icon-zoom-out' : '&#x62;',
			'icon-YUNDUN' : '&#x44;',
			'icon-JIANKONG' : '&#x4a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};