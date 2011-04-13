/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */

if (document.URL.match(/ideapit.net/)){
    change();
}
else if (document.URL.match(/zhquiz\.myshareshare\.com/) || document.URL.match(/lovetalk\.mypagediy\.com/)){
    $("#hidden-content").show("slow");
}
else if (document.URL.match(/www\.getjetso\.com\/forum\//))
{
    if (!document.cookie.match(tid))
    {
	document.cookie = 'fb_like_reply='+tid;
	location.reload();
    }
}
else if (document.URL.match(/tenkucity\.com\/thread/))
{
    if (!(document.URL.match(/\?display=true/)))
	location.replace(document.URL+'?display=true');
}
else
{
    FB.Event.fire('edge.create', location.href);
}

