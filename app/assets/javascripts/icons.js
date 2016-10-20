//
// Icons
//
function formatIcons(object, name){
	object.forEach(function(datum) {
		$('#table__content--'+name).append('<div class="example-container bff-grid bff-grid--vertical-align-center bff-wrap bff-text-align--center" style="height:7rem; width:7rem;"><div class="bff-col bff-size--1-of-1"><span class="bff-icon--'+datum.iconName+' bff-icon--large"></span></div><div class="bff-col bff-size--1-of-1"><span class="bff-text-body--small">'+datum.iconName+'</span></div></div>');
	});
}

var iconList = [
	{iconName: 'home'},
	{iconName: 'home2'},
	{iconName: 'home3'},
	{iconName: 'home4'},
	{iconName: 'home5'},
	{iconName: 'home6'},
	{iconName: 'bathtub'},
	{iconName: 'toothbrush'},
	{iconName: 'bed'},
	{iconName: 'couch'},
	{iconName: 'chair'},
	{iconName: 'city'},
	{iconName: 'apartment'},
	{iconName: 'pencil'},
	{iconName: 'pencil2'},
	{iconName: 'pen'},
	{iconName: 'pencil3'},
	{iconName: 'eraser'},
	{iconName: 'pencil4'},
	{iconName: 'pencil5'},
	{iconName: 'feather'},
	{iconName: 'feather2'},
	{iconName: 'feather3'},
	{iconName: 'pen2'},
	{iconName: 'pen-add'},
	{iconName: 'pen-remove'},
	{iconName: 'vector'},
	{iconName: 'pen3'},
	{iconName: 'blog'},
	{iconName: 'brush'},
	{iconName: 'brush2'},
	{iconName: 'spray'},
	{iconName: 'paint-roller'},
	{iconName: 'stamp'},
	{iconName: 'tape'},
	{iconName: 'desk-tape'},
	{iconName: 'texture'},
	{iconName: 'eye-dropper'},
	{iconName: 'palette'},
	{iconName: 'color-sampler'},
	{iconName: 'bucket'},
	{iconName: 'gradient'},
	{iconName: 'gradient2'},
	{iconName: 'magic-wand'},
	{iconName: 'magnet'},
	{iconName: 'pencil-ruler'},
	{iconName: 'pencil-ruler2'},
	{iconName: 'compass'},
	{iconName: 'aim'},
	{iconName: 'gun'},
	{iconName: 'bottle'},
	{iconName: 'drop'},
	{iconName: 'drop-crossed'},
	{iconName: 'drop2'},
	{iconName: 'snow'},
	{iconName: 'snow2'},
	{iconName: 'fire'},
	{iconName: 'lighter'},
	{iconName: 'knife'},
	{iconName: 'dagger'},
	{iconName: 'tissue'},
	{iconName: 'toilet-paper'},
	{iconName: 'poop'},
	{iconName: 'umbrella'},
	{iconName: 'umbrella2'},
	{iconName: 'rain'},
	{iconName: 'tornado'},
	{iconName: 'wind'},
	{iconName: 'fan'},
	{iconName: 'contrast'},
	{iconName: 'sun-small'},
	{iconName: 'sun'},
	{iconName: 'sun2'},
	{iconName: 'moon'},
	{iconName: 'cloud'},
	{iconName: 'cloud-upload'},
	{iconName: 'cloud-download'},
	{iconName: 'cloud-rain'},
	{iconName: 'cloud-hailstones'},
	{iconName: 'cloud-snow'},
	{iconName: 'cloud-windy'},
	{iconName: 'sun-wind'},
	{iconName: 'cloud-fog'},
	{iconName: 'cloud-sun'},
	{iconName: 'cloud-lightning'},
	{iconName: 'cloud-sync'},
	{iconName: 'cloud-lock'},
	{iconName: 'cloud-gear'},
	{iconName: 'cloud-alert'},
	{iconName: 'cloud-check'},
	{iconName: 'cloud-cross'},
	{iconName: 'cloud-crossed'},
	{iconName: 'cloud-database'},
	{iconName: 'database'},
	{iconName: 'database-add'},
	{iconName: 'database-remove'},
	{iconName: 'database-lock'},
	{iconName: 'database-refresh'},
	{iconName: 'database-check'},
	{iconName: 'database-history'},
	{iconName: 'database-upload'},
	{iconName: 'database-download'},
	{iconName: 'server'},
	{iconName: 'shield'},
	{iconName: 'shield-check'},
	{iconName: 'shield-alert'},
	{iconName: 'shield-cross'},
	{iconName: 'lock'},
	{iconName: 'rotation-lock'},
	{iconName: 'unlock'},
	{iconName: 'key'},
	{iconName: 'key-hole'},
	{iconName: 'toggle-off'},
	{iconName: 'toggle-on'},
	{iconName: 'cog'},
	{iconName: 'cog2'},
	{iconName: 'wrench'},
	{iconName: 'screwdriver'},
	{iconName: 'hammer-wrench'},
	{iconName: 'hammer'},
	{iconName: 'saw'},
	{iconName: 'axe'},
	{iconName: 'axe2'},
	{iconName: 'shovel'},
	{iconName: 'pickaxe'},
	{iconName: 'factory'},
	{iconName: 'factory2'},
	{iconName: 'recycle'},
	{iconName: 'trash'},
	{iconName: 'trash2'},
	{iconName: 'trash3'},
	{iconName: 'broom'},
	{iconName: 'game'},
	{iconName: 'gamepad'},
	{iconName: 'joystick'},
	{iconName: 'dice'},
	{iconName: 'spades'},
	{iconName: 'diamonds'},
	{iconName: 'clubs'},
	{iconName: 'hearts'},
	{iconName: 'heart'},
	{iconName: 'star'},
	{iconName: 'star-half'},
	{iconName: 'star-empty'},
	{iconName: 'flag'},
	{iconName: 'flag2'},
	{iconName: 'flag3'},
	{iconName: 'mailbox-full'},
	{iconName: 'mailbox-empty'},
	{iconName: 'at-sign'},
	{iconName: 'envelope'},
	{iconName: 'envelope-open'},
	{iconName: 'paperclip'},
	{iconName: 'paper-plane'},
	{iconName: 'reply'},
	{iconName: 'reply-all'},
	{iconName: 'inbox'},
	{iconName: 'inbox2'},
	{iconName: 'outbox'},
	{iconName: 'box'},
	{iconName: 'archive'},
	{iconName: 'archive2'},
	{iconName: 'drawers'},
	{iconName: 'drawers2'},
	{iconName: 'drawers3'},
	{iconName: 'eye'},
	{iconName: 'eye-crossed'},
	{iconName: 'eye-plus'},
	{iconName: 'eye-minus'},
	{iconName: 'binoculars'},
	{iconName: 'binoculars2'},
	{iconName: 'hdd'},
	{iconName: 'hdd-down'},
	{iconName: 'hdd-up'},
	{iconName: 'floppy-disk'},
	{iconName: 'disc'},
	{iconName: 'tape2'},
	{iconName: 'printer'},
	{iconName: 'shredder'},
	{iconName: 'file-empty'},
	{iconName: 'file-add'},
	{iconName: 'file-check'},
	{iconName: 'file-lock'},
	{iconName: 'files'},
	{iconName: 'copy'},
	{iconName: 'compare'},
	{iconName: 'folder'},
	{iconName: 'folder-search'},
	{iconName: 'folder-plus'},
	{iconName: 'folder-minus'},
	{iconName: 'folder-download'},
	{iconName: 'folder-upload'},
	{iconName: 'folder-star'},
	{iconName: 'folder-heart'},
	{iconName: 'folder-user'},
	{iconName: 'folder-shared'},
	{iconName: 'folder-music'},
	{iconName: 'folder-picture'},
	{iconName: 'folder-film'},
	{iconName: 'scissors'},
	{iconName: 'paste'},
	{iconName: 'clipboard-empty'},
	{iconName: 'clipboard-pencil'},
	{iconName: 'clipboard-text'},
	{iconName: 'clipboard-check'},
	{iconName: 'clipboard-down'},
	{iconName: 'clipboard-left'},
	{iconName: 'clipboard-alert'},
	{iconName: 'clipboard-user'},
	{iconName: 'register'},
	{iconName: 'enter'},
	{iconName: 'exit'},
	{iconName: 'papers'},
	{iconName: 'news'},
	{iconName: 'reading'},
	{iconName: 'typewriter'},
	{iconName: 'document'},
	{iconName: 'document2'},
	{iconName: 'graduation-hat'},
	{iconName: 'license'},
	{iconName: 'license2'},
	{iconName: 'medal-empty'},
	{iconName: 'medal-first'},
	{iconName: 'medal-second'},
	{iconName: 'medal-third'},
	{iconName: 'podium'},
	{iconName: 'trophy'},
	{iconName: 'trophy2'},
	{iconName: 'music-note'},
	{iconName: 'music-note2'},
	{iconName: 'music-note3'},
	{iconName: 'playlist'},
	{iconName: 'playlist-add'},
	{iconName: 'guitar'},
	{iconName: 'trumpet'},
	{iconName: 'album'},
	{iconName: 'shuffle'},
	{iconName: 'repeat-one'},
	{iconName: 'repeat'},
	{iconName: 'headphones'},
	{iconName: 'headset'},
	{iconName: 'loudspeaker'},
	{iconName: 'equalizer'},
	{iconName: 'theater'},
	{iconName: '3d-glasses'},
	{iconName: 'ticket'},
	{iconName: 'presentation'},
	{iconName: 'play'},
	{iconName: 'film-play'},
	{iconName: 'clapboard-play'},
	{iconName: 'media'},
	{iconName: 'film'},
	{iconName: 'film2'},
	{iconName: 'surveillance'},
	{iconName: 'surveillance2'},
	{iconName: 'camera'},
	{iconName: 'camera-crossed'},
	{iconName: 'camera-play'},
	{iconName: 'time-lapse'},
	{iconName: 'record'},
	{iconName: 'camera2'},
	{iconName: 'camera-flip'},
	{iconName: 'panorama'},
	{iconName: 'time-lapse2'},
	{iconName: 'shutter'},
	{iconName: 'shutter2'},
	{iconName: 'face-detection'},
	{iconName: 'flare'},
	{iconName: 'convex'},
	{iconName: 'concave'},
	{iconName: 'picture'},
	{iconName: 'picture2'},
	{iconName: 'picture3'},
	{iconName: 'pictures'},
	{iconName: 'book'},
	{iconName: 'audio-book'},
	{iconName: 'book2'},
	{iconName: 'bookmark'},
	{iconName: 'bookmark2'},
	{iconName: 'label'},
	{iconName: 'library'},
	{iconName: 'library2'},
	{iconName: 'contacts'},
	{iconName: 'profile'},
	{iconName: 'portrait'},
	{iconName: 'portrait2'},
	{iconName: 'user'},
	{iconName: 'user-plus'},
	{iconName: 'user-minus'},
	{iconName: 'user-lock'},
	{iconName: 'users'},
	{iconName: 'users2'},
	{iconName: 'users-plus'},
	{iconName: 'users-minus'},
	{iconName: 'group-work'},
	{iconName: 'woman'},
	{iconName: 'man'},
	{iconName: 'baby'},
	{iconName: 'baby2'},
	{iconName: 'baby3'},
	{iconName: 'baby-bottle'},
	{iconName: 'walk'},
	{iconName: 'hand-waving'},
	{iconName: 'jump'},
	{iconName: 'run'},
	{iconName: 'woman2'},
	{iconName: 'man2'},
	{iconName: 'man-woman'},
	{iconName: 'height'},
	{iconName: 'weight'},
	{iconName: 'scale'},
	{iconName: 'button'},
	{iconName: 'bow-tie'},
	{iconName: 'tie'},
	{iconName: 'socks'},
	{iconName: 'shoe'},
	{iconName: 'shoes'},
	{iconName: 'hat'},
	{iconName: 'pants'},
	{iconName: 'shorts'},
	{iconName: 'flip-flops'},
	{iconName: 'shirt'},
	{iconName: 'hanger'},
	{iconName: 'laundry'},
	{iconName: 'store'},
	{iconName: 'haircut'},
	{iconName: 'store-24'},
	{iconName: 'barcode'},
	{iconName: 'barcode2'},
	{iconName: 'barcode3'},
	{iconName: 'cashier'},
	{iconName: 'bag'},
	{iconName: 'bag2'},
	{iconName: 'cart'},
	{iconName: 'cart-empty'},
	{iconName: 'cart-full'},
	{iconName: 'cart-plus'},
	{iconName: 'cart-plus2'},
	{iconName: 'cart-add'},
	{iconName: 'cart-remove'},
	{iconName: 'cart-exchange'},
	{iconName: 'tag'},
	{iconName: 'tags'},
	{iconName: 'receipt'},
	{iconName: 'wallet'},
	{iconName: 'credit-card'},
	{iconName: 'cash-dollar'},
	{iconName: 'cash-euro'},
	{iconName: 'cash-pound'},
	{iconName: 'cash-yen'},
	{iconName: 'bag-dollar'},
	{iconName: 'bag-euro'},
	{iconName: 'bag-pound'},
	{iconName: 'bag-yen'},
	{iconName: 'coin-dollar'},
	{iconName: 'coin-euro'},
	{iconName: 'coin-pound'},
	{iconName: 'coin-yen'},
	{iconName: 'calculator'},
	{iconName: 'calculator2'},
	{iconName: 'abacus'},
	{iconName: 'vault'},
	{iconName: 'telephone'},
	{iconName: 'phone-lock'},
	{iconName: 'phone-wave'},
	{iconName: 'phone-pause'},
	{iconName: 'phone-outgoing'},
	{iconName: 'phone-incoming'},
	{iconName: 'phone-in-out'},
	{iconName: 'phone-error'},
	{iconName: 'phone-sip'},
	{iconName: 'phone-plus'},
	{iconName: 'phone-minus'},
	{iconName: 'voicemail'},
	{iconName: 'dial'},
	{iconName: 'telephone2'},
	{iconName: 'pushpin'},
	{iconName: 'pushpin2'},
	{iconName: 'map-marker'},
	{iconName: 'map-marker-user'},
	{iconName: 'map-marker-down'},
	{iconName: 'map-marker-check'},
	{iconName: 'map-marker-crossed'},
	{iconName: 'radar'},
	{iconName: 'compass2'},
	{iconName: 'map'},
	{iconName: 'map2'},
	{iconName: 'location'},
	{iconName: 'road-sign'},
	{iconName: 'calendar-empty'},
	{iconName: 'calendar-check'},
	{iconName: 'calendar-cross'},
	{iconName: 'calendar-31'},
	{iconName: 'calendar-full'},
	{iconName: 'calendar-insert'},
	{iconName: 'calendar-text'},
	{iconName: 'calendar-user'},
	{iconName: 'mouse'},
	{iconName: 'mouse-left'},
	{iconName: 'mouse-right'},
	{iconName: 'mouse-both'},
	{iconName: 'keyboard'},
	{iconName: 'keyboard-up'},
	{iconName: 'keyboard-down'},
	{iconName: 'delete'},
	{iconName: 'spell-check'},
	{iconName: 'escape'},
	{iconName: 'enter2'},
	{iconName: 'screen'},
	{iconName: 'aspect-ratio'},
	{iconName: 'signal'},
	{iconName: 'signal-lock'},
	{iconName: 'signal-80'},
	{iconName: 'signal-60'},
	{iconName: 'signal-40'},
	{iconName: 'signal-20'},
	{iconName: 'signal-0'},
	{iconName: 'signal-blocked'},
	{iconName: 'sim'},
	{iconName: 'flash-memory'},
	{iconName: 'usb-drive'},
	{iconName: 'phone'},
	{iconName: 'smartphone'},
	{iconName: 'smartphone-notification'},
	{iconName: 'smartphone-vibration'},
	{iconName: 'smartphone-embed'},
	{iconName: 'smartphone-waves'},
	{iconName: 'tablet'},
	{iconName: 'tablet2'},
	{iconName: 'laptop'},
	{iconName: 'laptop-phone'},
	{iconName: 'desktop'},
	{iconName: 'launch'},
	{iconName: 'new-tab'},
	{iconName: 'window'},
	{iconName: 'cable'},
	{iconName: 'cable2'},
	{iconName: 'tv'},
	{iconName: 'radio'},
	{iconName: 'remote-control'},
	{iconName: 'power-switch'},
	{iconName: 'power'},
	{iconName: 'power-crossed'},
	{iconName: 'flash-auto'},
	{iconName: 'lamp'},
	{iconName: 'flashlight'},
	{iconName: 'lampshade'},
	{iconName: 'cord'},
	{iconName: 'outlet'},
	{iconName: 'battery-power'},
	{iconName: 'battery-empty'},
	{iconName: 'battery-alert'},
	{iconName: 'battery-error'},
	{iconName: 'battery-low1'},
	{iconName: 'battery-low2'},
	{iconName: 'battery-low3'},
	{iconName: 'battery-mid1'},
	{iconName: 'battery-mid2'},
	{iconName: 'battery-mid3'},
	{iconName: 'battery-full'},
	{iconName: 'battery-charging'},
	{iconName: 'battery-charging2'},
	{iconName: 'battery-charging3'},
	{iconName: 'battery-charging4'},
	{iconName: 'battery-charging5'},
	{iconName: 'battery-charging6'},
	{iconName: 'battery-charging7'},
	{iconName: 'chip'},
	{iconName: 'chip-x64'},
	{iconName: 'chip-x86'},
	{iconName: 'bubble'},
	{iconName: 'bubbles'},
	{iconName: 'bubble-dots'},
	{iconName: 'bubble-alert'},
	{iconName: 'bubble-question'},
	{iconName: 'bubble-text'},
	{iconName: 'bubble-pencil'},
	{iconName: 'bubble-picture'},
	{iconName: 'bubble-video'},
	{iconName: 'bubble-user'},
	{iconName: 'bubble-quote'},
	{iconName: 'bubble-heart'},
	{iconName: 'bubble-emoticon'},
	{iconName: 'bubble-attachment'},
	{iconName: 'phone-bubble'},
	{iconName: 'quote-open'},
	{iconName: 'quote-close'},
	{iconName: 'dna'},
	{iconName: 'heart-pulse'},
	{iconName: 'pulse'},
	{iconName: 'syringe'},
	{iconName: 'pills'},
	{iconName: 'first-aid'},
	{iconName: 'lifebuoy'},
	{iconName: 'bandage'},
	{iconName: 'bandages'},
	{iconName: 'thermometer'},
	{iconName: 'microscope'},
	{iconName: 'brain'},
	{iconName: 'beaker'},
	{iconName: 'skull'},
	{iconName: 'bone'},
	{iconName: 'construction'},
	{iconName: 'construction-cone'},
	{iconName: 'pie-chart'},
	{iconName: 'pie-chart2'},
	{iconName: 'graph'},
	{iconName: 'chart-growth'},
	{iconName: 'chart-bars'},
	{iconName: 'chart-settings'},
	{iconName: 'cake'},
	{iconName: 'gift'},
	{iconName: 'balloon'},
	{iconName: 'rank'},
	{iconName: 'rank2'},
	{iconName: 'rank3'},
	{iconName: 'crown'},
	{iconName: 'lotus'},
	{iconName: 'diamond'},
	{iconName: 'diamond2'},
	{iconName: 'diamond3'},
	{iconName: 'diamond4'},
	{iconName: 'linearicons'},
	{iconName: 'teacup'},
	{iconName: 'teapot'},
	{iconName: 'glass'},
	{iconName: 'bottle2'},
	{iconName: 'glass-cocktail'},
	{iconName: 'glass2'},
	{iconName: 'dinner'},
	{iconName: 'dinner2'},
	{iconName: 'chef'},
	{iconName: 'scale2'},
	{iconName: 'egg'},
	{iconName: 'egg2'},
	{iconName: 'eggs'},
	{iconName: 'platter'},
	{iconName: 'steak'},
	{iconName: 'hamburger'},
	{iconName: 'hotdog'},
	{iconName: 'pizza'},
	{iconName: 'sausage'},
	{iconName: 'chicken'},
	{iconName: 'fish'},
	{iconName: 'carrot'},
	{iconName: 'cheese'},
	{iconName: 'bread'},
	{iconName: 'ice-cream'},
	{iconName: 'ice-cream2'},
	{iconName: 'candy'},
	{iconName: 'lollipop'},
	{iconName: 'coffee-bean'},
	{iconName: 'coffee-cup'},
	{iconName: 'cherry'},
	{iconName: 'grapes'},
	{iconName: 'citrus'},
	{iconName: 'apple'},
	{iconName: 'leaf'},
	{iconName: 'landscape'},
	{iconName: 'pine-tree'},
	{iconName: 'tree'},
	{iconName: 'cactus'},
	{iconName: 'paw'},
	{iconName: 'footprint'},
	{iconName: 'speed-slow'},
	{iconName: 'speed-medium'},
	{iconName: 'speed-fast'},
	{iconName: 'rocket'},
	{iconName: 'hammer2'},
	{iconName: 'balance'},
	{iconName: 'briefcase'},
	{iconName: 'luggage-weight'},
	{iconName: 'dolly'},
	{iconName: 'plane'},
	{iconName: 'plane-crossed'},
	{iconName: 'helicopter'},
	{iconName: 'traffic-lights'},
	{iconName: 'siren'},
	{iconName: 'road'},
	{iconName: 'engine'},
	{iconName: 'oil-pressure'},
	{iconName: 'coolant-temperature'},
	{iconName: 'car-battery'},
	{iconName: 'gas'},
	{iconName: 'gallon'},
	{iconName: 'transmission'},
	{iconName: 'car'},
	{iconName: 'car-wash'},
	{iconName: 'car-wash2'},
	{iconName: 'bus'},
	{iconName: 'bus2'},
	{iconName: 'car2'},
	{iconName: 'parking'},
	{iconName: 'car-lock'},
	{iconName: 'taxi'},
	{iconName: 'car-siren'},
	{iconName: 'car-wash3'},
	{iconName: 'car-wash4'},
	{iconName: 'ambulance'},
	{iconName: 'truck'},
	{iconName: 'trailer'},
	{iconName: 'scale-truck'},
	{iconName: 'train'},
	{iconName: 'ship'},
	{iconName: 'ship2'},
	{iconName: 'anchor'},
	{iconName: 'boat'},
	{iconName: 'bicycle'},
	{iconName: 'bicycle2'},
	{iconName: 'dumbbell'},
	{iconName: 'bench-press'},
	{iconName: 'swim'},
	{iconName: 'football'},
	{iconName: 'baseball-bat'},
	{iconName: 'baseball'},
	{iconName: 'tennis'},
	{iconName: 'tennis2'},
	{iconName: 'ping-pong'},
	{iconName: 'hockey'},
	{iconName: '8ball'},
	{iconName: 'bowling'},
	{iconName: 'bowling-pins'},
	{iconName: 'golf'},
	{iconName: 'golf2'},
	{iconName: 'archery'},
	{iconName: 'slingshot'},
	{iconName: 'soccer'},
	{iconName: 'basketball'},
	{iconName: 'cube'},
	{iconName: '3d-rotate'},
	{iconName: 'puzzle'},
	{iconName: 'glasses'},
	{iconName: 'glasses2'},
	{iconName: 'accessibility'},
	{iconName: 'wheelchair'},
	{iconName: 'wall'},
	{iconName: 'fence'},
	{iconName: 'wall2'},
	{iconName: 'icons'},
	{iconName: 'resize-handle'},
	{iconName: 'icons2'},
	{iconName: 'select'},
	{iconName: 'select2'},
	{iconName: 'site-map'},
	{iconName: 'earth'},
	{iconName: 'earth-lock'},
	{iconName: 'network'},
	{iconName: 'network-lock'},
	{iconName: 'planet'},
	{iconName: 'happy'},
	{iconName: 'smile'},
	{iconName: 'grin'},
	{iconName: 'tongue'},
	{iconName: 'sad'},
	{iconName: 'wink'},
	{iconName: 'dream'},
	{iconName: 'shocked'},
	{iconName: 'shocked2'},
	{iconName: 'tongue2'},
	{iconName: 'neutral'},
	{iconName: 'happy-grin'},
	{iconName: 'cool'},
	{iconName: 'mad'},
	{iconName: 'grin-evil'},
	{iconName: 'evil'},
	{iconName: 'wow'},
	{iconName: 'annoyed'},
	{iconName: 'wondering'},
	{iconName: 'confused'},
	{iconName: 'zipped'},
	{iconName: 'grumpy'},
	{iconName: 'mustache'},
	{iconName: 'tombstone-hipster'},
	{iconName: 'tombstone'},
	{iconName: 'ghost'},
	{iconName: 'ghost-hipster'},
	{iconName: 'halloween'},
	{iconName: 'christmas'},
	{iconName: 'easter-egg'},
	{iconName: 'mustache2'},
	{iconName: 'mustache-glasses'},
	{iconName: 'pipe'},
	{iconName: 'alarm'},
	{iconName: 'alarm-add'},
	{iconName: 'alarm-snooze'},
	{iconName: 'alarm-ringing'},
	{iconName: 'bullhorn'},
	{iconName: 'hearing'},
	{iconName: 'volume-high'},
	{iconName: 'volume-medium'},
	{iconName: 'volume-low'},
	{iconName: 'volume'},
	{iconName: 'mute'},
	{iconName: 'lan'},
	{iconName: 'lan2'},
	{iconName: 'wifi'},
	{iconName: 'wifi-lock'},
	{iconName: 'wifi-blocked'},
	{iconName: 'wifi-mid'},
	{iconName: 'wifi-low'},
	{iconName: 'wifi-low2'},
	{iconName: 'wifi-alert'},
	{iconName: 'wifi-alert-mid'},
	{iconName: 'wifi-alert-low'},
	{iconName: 'wifi-alert-low2'},
	{iconName: 'stream'},
	{iconName: 'stream-check'},
	{iconName: 'stream-error'},
	{iconName: 'stream-alert'},
	{iconName: 'communication'},
	{iconName: 'communication-crossed'},
	{iconName: 'broadcast'},
	{iconName: 'antenna'},
	{iconName: 'satellite'},
	{iconName: 'satellite2'},
	{iconName: 'mic'},
	{iconName: 'mic-mute'},
	{iconName: 'mic2'},
	{iconName: 'spotlights'},
	{iconName: 'hourglass'},
	{iconName: 'loading'},
	{iconName: 'loading2'},
	{iconName: 'loading3'},
	{iconName: 'refresh'},
	{iconName: 'refresh2'},
	{iconName: 'undo'},
	{iconName: 'redo'},
	{iconName: 'jump2'},
	{iconName: 'undo2'},
	{iconName: 'redo2'},
	{iconName: 'sync'},
	{iconName: 'repeat-one2'},
	{iconName: 'sync-crossed'},
	{iconName: 'sync2'},
	{iconName: 'repeat-one3'},
	{iconName: 'sync-crossed2'},
	{iconName: 'return'},
	{iconName: 'return2'},
	{iconName: 'refund'},
	{iconName: 'history'},
	{iconName: 'history2'},
	{iconName: 'self-timer'},
	{iconName: 'clock'},
	{iconName: 'clock2'},
	{iconName: 'clock3'},
	{iconName: 'watch'},
	{iconName: 'alarm2'},
	{iconName: 'alarm-add2'},
	{iconName: 'alarm-remove'},
	{iconName: 'alarm-check'},
	{iconName: 'alarm-error'},
	{iconName: 'timer'},
	{iconName: 'timer-crossed'},
	{iconName: 'timer2'},
	{iconName: 'timer-crossed2'},
	{iconName: 'download'},
	{iconName: 'upload'},
	{iconName: 'download2'},
	{iconName: 'upload2'},
	{iconName: 'enter-up'},
	{iconName: 'enter-down'},
	{iconName: 'enter-left'},
	{iconName: 'enter-right'},
	{iconName: 'exit-up'},
	{iconName: 'exit-down'},
	{iconName: 'exit-left'},
	{iconName: 'exit-right'},
	{iconName: 'enter-up2'},
	{iconName: 'enter-down2'},
	{iconName: 'enter-vertical'},
	{iconName: 'enter-left2'},
	{iconName: 'enter-right2'},
	{iconName: 'enter-horizontal'},
	{iconName: 'exit-up2'},
	{iconName: 'exit-down2'},
	{iconName: 'exit-left2'},
	{iconName: 'exit-right2'},
	{iconName: 'cli'},
	{iconName: 'bug'},
	{iconName: 'code'},
	{iconName: 'file-code'},
	{iconName: 'file-image'},
	{iconName: 'file-zip'},
	{iconName: 'file-audio'},
	{iconName: 'file-video'},
	{iconName: 'file-preview'},
	{iconName: 'file-charts'},
	{iconName: 'file-stats'},
	{iconName: 'file-spreadsheet'},
	{iconName: 'link'},
	{iconName: 'unlink'},
	{iconName: 'link2'},
	{iconName: 'unlink2'},
	{iconName: 'thumbs-up'},
	{iconName: 'thumbs-down'},
	{iconName: 'thumbs-up2'},
	{iconName: 'thumbs-down2'},
	{iconName: 'thumbs-up3'},
	{iconName: 'thumbs-down3'},
	{iconName: 'share'},
	{iconName: 'share2'},
	{iconName: 'share3'},
	{iconName: 'magnifier'},
	{iconName: 'file-search'},
	{iconName: 'find-replace'},
	{iconName: 'zoom-in'},
	{iconName: 'zoom-out'},
	{iconName: 'loupe'},
	{iconName: 'loupe-zoom-in'},
	{iconName: 'loupe-zoom-out'},
	{iconName: 'cross'},
	{iconName: 'menu'},
	{iconName: 'list'},
	{iconName: 'list2'},
	{iconName: 'list3'},
	{iconName: 'menu2'},
	{iconName: 'list4'},
	{iconName: 'menu3'},
	{iconName: 'exclamation'},
	{iconName: 'question'},
	{iconName: 'check'},
	{iconName: 'cross2'},
	{iconName: 'plus'},
	{iconName: 'minus'},
	{iconName: 'percent'},
	{iconName: 'chevron-up'},
	{iconName: 'chevron-down'},
	{iconName: 'chevron-left'},
	{iconName: 'chevron-right'},
	{iconName: 'chevrons-expand-vertical'},
	{iconName: 'chevrons-expand-horizontal'},
	{iconName: 'chevrons-contract-vertical'},
	{iconName: 'chevrons-contract-horizontal'},
	{iconName: 'arrow-up'},
	{iconName: 'arrow-down'},
	{iconName: 'arrow-left'},
	{iconName: 'arrow-right'},
	{iconName: 'arrow-up-right'},
	{iconName: 'arrows-merge'},
	{iconName: 'arrows-split'},
	{iconName: 'arrow-divert'},
	{iconName: 'arrow-return'},
	{iconName: 'expand'},
	{iconName: 'contract'},
	{iconName: 'expand2'},
	{iconName: 'contract2'},
	{iconName: 'move'},
	{iconName: 'tab'},
	{iconName: 'arrow-wave'},
	{iconName: 'expand3'},
	{iconName: 'expand4'},
	{iconName: 'contract3'},
	{iconName: 'notification'},
	{iconName: 'warning'},
	{iconName: 'notification-circle'},
	{iconName: 'question-circle'},
	{iconName: 'menu-circle'},
	{iconName: 'checkmark-circle'},
	{iconName: 'cross-circle'},
	{iconName: 'plus-circle'},
	{iconName: 'circle-minus'},
	{iconName: 'percent-circle'},
	{iconName: 'arrow-up-circle'},
	{iconName: 'arrow-down-circle'},
	{iconName: 'arrow-left-circle'},
	{iconName: 'arrow-right-circle'},
	{iconName: 'chevron-up-circle'},
	{iconName: 'chevron-down-circle'},
	{iconName: 'chevron-left-circle'},
	{iconName: 'chevron-right-circle'},
	{iconName: 'backward-circle'},
	{iconName: 'first-circle'},
	{iconName: 'previous-circle'},
	{iconName: 'stop-circle'},
	{iconName: 'play-circle'},
	{iconName: 'pause-circle'},
	{iconName: 'next-circle'},
	{iconName: 'last-circle'},
	{iconName: 'forward-circle'},
	{iconName: 'eject-circle'},
	{iconName: 'crop'},
	{iconName: 'frame-expand'},
	{iconName: 'frame-contract'},
	{iconName: 'focus'},
	{iconName: 'transform'},
	{iconName: 'grid'},
	{iconName: 'grid-crossed'},
	{iconName: 'layers'},
	{iconName: 'layers-crossed'},
	{iconName: 'toggle'},
	{iconName: 'rulers'},
	{iconName: 'ruler'},
	{iconName: 'funnel'},
	{iconName: 'flip-horizontal'},
	{iconName: 'flip-vertical'},
	{iconName: 'flip-horizontal2'},
	{iconName: 'flip-vertical2'},
	{iconName: 'angle'},
	{iconName: 'angle2'},
	{iconName: 'subtract'},
	{iconName: 'combine'},
	{iconName: 'intersect'},
	{iconName: 'exclude'},
	{iconName: 'align-center-vertical'},
	{iconName: 'align-right'},
	{iconName: 'align-bottom'},
	{iconName: 'align-left'},
	{iconName: 'align-center-horizontal'},
	{iconName: 'align-top'},
	{iconName: 'square'},
	{iconName: 'plus-square'},
	{iconName: 'minus-square'},
	{iconName: 'percent-square'},
	{iconName: 'arrow-up-square'},
	{iconName: 'arrow-down-square'},
	{iconName: 'arrow-left-square'},
	{iconName: 'arrow-right-square'},
	{iconName: 'chevron-up-square'},
	{iconName: 'chevron-down-square'},
	{iconName: 'chevron-left-square'},
	{iconName: 'chevron-right-square'},
	{iconName: 'check-square'},
	{iconName: 'cross-square'},
	{iconName: 'menu-square'},
	{iconName: 'prohibited'},
	{iconName: 'circle'},
	{iconName: 'radio-button'},
	{iconName: 'ligature'},
	{iconName: 'text-format'},
	{iconName: 'text-format-remove'},
	{iconName: 'text-size'},
	{iconName: 'bold'},
	{iconName: 'italic'},
	{iconName: 'underline'},
	{iconName: 'strikethrough'},
	{iconName: 'highlight'},
	{iconName: 'text-align-left'},
	{iconName: 'text-align-center'},
	{iconName: 'text-align-right'},
	{iconName: 'text-align-justify'},
	{iconName: 'line-spacing'},
	{iconName: 'indent-increase'},
	{iconName: 'indent-decrease'},
	{iconName: 'text-wrap'},
	{iconName: 'pilcrow'},
	{iconName: 'direction-ltr'},
	{iconName: 'direction-rtl'},
	{iconName: 'page-break'},
	{iconName: 'page-break2'},
	{iconName: 'sort-alpha-asc'},
	{iconName: 'sort-alpha-desc'},
	{iconName: 'sort-numeric-asc'},
	{iconName: 'sort-numeric-desc'},
	{iconName: 'sort-amount-asc'},
	{iconName: 'sort-amount-desc'},
	{iconName: 'sort-time-asc'},
	{iconName: 'sort-time-desc'},
	{iconName: 'sigma'},
	{iconName: 'pencil-line'},
	{iconName: 'hand'},
	{iconName: 'pointer-up'},
	{iconName: 'pointer-right'},
	{iconName: 'pointer-down'},
	{iconName: 'pointer-left'},
	{iconName: 'finger-tap'},
	{iconName: 'fingers-tap'},
	{iconName: 'reminder'},
	{iconName: 'fingers-crossed'},
	{iconName: 'fingers-victory'},
	{iconName: 'gesture-zoom'},
	{iconName: 'gesture-pinch'},
	{iconName: 'fingers-scroll-horizontal'},
	{iconName: 'fingers-scroll-vertical'},
	{iconName: 'fingers-scroll-left'},
	{iconName: 'fingers-scroll-right'},
	{iconName: 'hand2'},
	{iconName: 'pointer-up2'},
	{iconName: 'pointer-right2'},
	{iconName: 'pointer-down2'},
	{iconName: 'pointer-left2'},
	{iconName: 'finger-tap2'},
	{iconName: 'fingers-tap2'},
	{iconName: 'reminder2'},
	{iconName: 'gesture-zoom2'},
	{iconName: 'gesture-pinch2'},
	{iconName: 'fingers-scroll-horizontal2'},
	{iconName: 'fingers-scroll-vertical2'},
	{iconName: 'fingers-scroll-left2'},
	{iconName: 'fingers-scroll-right2'},
	{iconName: 'fingers-scroll-vertical3'},
	{iconName: 'border-style'},
	{iconName: 'border-all'},
	{iconName: 'border-outer'},
	{iconName: 'border-inner'},
	{iconName: 'border-top'},
	{iconName: 'border-horizontal'},
	{iconName: 'border-bottom'},
	{iconName: 'border-left'},
	{iconName: 'border-vertical'},
	{iconName: 'border-right'},
	{iconName: 'border-none'},
	{iconName: 'ellipsis'},
]

var iconsDocumentation = [
	{
		className: cssPrefix+'icon--*icon name*',
		usage: '--',
		notes: '--',
	},
	{
		className: cssPrefix+'icon--*size*',
		usage: '<div><span class="bff-text-body--semibold">Sizes:</span> small, normal, medium, large, x-large</div>',
		notes: '--',
	},
]