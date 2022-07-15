/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
a = document.getElementsByTagName('a');
for (i = 0; i < a.length; i++) {
	url = new URL(a[i].href);
	if (url.href.match('^https://businesswebmail\.a1\.net/webmail/redirect\?')) {
		urlSearchParams = new URLSearchParams(url.search);
		if (urlSearchParams.has('u')) {
			a[i].href = urlSearchParams.get('u');
		}
	}
}
