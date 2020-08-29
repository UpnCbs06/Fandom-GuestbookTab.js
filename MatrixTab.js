$('<a>', {
    text: 'Matrix',
    href: mw.util.getUrl('User:' + mw.config.get('wgUserName') + '/matrix'),
    appendTo: $('#UserProfileMasthead + .tabs-container > .tabs')
}).wrap('<li></li>');
