module.exports=function(o){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=t,n.d=function(o,t,e){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)n.d(e,r,function(t){return o[t]}.bind(null,r));return e},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=12)}([function(o,t){o.exports=flarum.core.compat["forum/app"]},function(o,t){o.exports=flarum.core.compat["common/extend"]},function(o,t){o.exports=flarum.core.compat["common/models/Discussion"]},,function(o,t){o.exports=flarum.core.compat["common/Model"]},function(o,t){o.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["forum/components/NotificationGrid"]},function(o,t){o.exports=flarum.core.compat["forum/components/EventPost"]},function(o,t){o.exports=flarum.core.compat["forum/components/Notification"]},function(o,t){o.exports=flarum.core.compat["common/components/Badge"]},function(o,t){o.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat["common/components/Button"]},function(o,t,n){"use strict";n.r(t);var e=n(1),r=n(0),c=n.n(r),i=n(4),a=n.n(i),s=n(2),u=n.n(s),f=n(6),l=n.n(f);function p(o,t){return(p=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o})(o,t)}function d(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,p(o,t)}var k=n(7),b=function(o){function t(){return o.apply(this,arguments)||this}d(t,o);var n=t.prototype;return n.icon=function(){return this.attrs.post.content().locked?"fas fa-lock":"fas fa-unlock"},n.descriptionKey=function(){return this.attrs.post.content().locked?"flarum-lock.forum.post_stream.discussion_locked_text":"flarum-lock.forum.post_stream.discussion_unlocked_text"},t}(n.n(k).a),y=n(8),_=function(o){function t(){return o.apply(this,arguments)||this}d(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-lock"},n.href=function(){var o=this.attrs.notification;return c.a.route.discussion(o.subject(),o.content().postNumber)},n.content=function(){return c.a.translator.trans("flarum-lock.forum.notifications.discussion_locked_text",{user:this.attrs.notification.fromUser()})},t}(n.n(y).a),x=n(9),h=n.n(x);var v=n(5),j=n.n(v),L=n(10),O=n.n(L),g=n(11),P=n.n(g);c.a.initializers.add("flarum-lock",(function(){c.a.postComponents.discussionLocked=b,c.a.notificationComponents.discussionLocked=_,u.a.prototype.isLocked=a.a.attribute("isLocked"),u.a.prototype.canLock=a.a.attribute("canLock"),Object(e.extend)(u.a.prototype,"badges",(function(o){this.isLocked()&&o.add("locked",h.a.component({type:"locked",label:c.a.translator.trans("flarum-lock.forum.badge.locked_tooltip"),icon:"fas fa-lock"}))})),Object(e.extend)(j.a,"moderationControls",(function(o,t){t.canLock()&&o.add("lock",P.a.component({icon:"fas fa-lock",onclick:this.lockAction.bind(t)},c.a.translator.trans(t.isLocked()?"flarum-lock.forum.discussion_controls.unlock_button":"flarum-lock.forum.discussion_controls.lock_button")))})),j.a.lockAction=function(){this.save({isLocked:!this.isLocked()}).then((function(){c.a.current.matches(O.a)&&c.a.current.get("stream").update(),m.redraw()}))},Object(e.extend)(l.a.prototype,"notificationTypes",(function(o){o.add("discussionLocked",{name:"discussionLocked",icon:"fas fa-lock",label:c.a.translator.trans("flarum-lock.forum.settings.notify_discussion_locked_label")})}))}))}]);
//# sourceMappingURL=forum.js.map