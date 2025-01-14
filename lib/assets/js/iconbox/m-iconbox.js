import { elBinder, addCSSLink } from "../general/m-general.js";

const styleURL = new URL('./iconbox.css', import.meta.url);

const dashicons = [
    {
        dashicon: 'dashicons-menu',
        keywords: 'menu admin',
        code: 'f333',
        text: 'menu',
    },
    {
        dashicon: 'dashicons-menu-alt',
        keywords: 'menu alt admin',
        code: 'f228',
        text: 'menu (alt)',
    },
    {
        dashicon: 'dashicons-menu-alt2',
        keywords: 'menu alt admin',
        code: 'f329',
        text: 'menu (alt2)',
    },
    {
        dashicon: 'dashicons-menu-alt3',
        keywords: 'menu alt admin',
        code: 'f349',
        text: 'menu (alt3)',
    },
    {
        dashicon: 'dashicons-admin-site',
        keywords: 'site admin',
        code: 'f319',
        text: 'site',
    },
    {
        dashicon: 'dashicons-admin-site-alt',
        keywords: 'site alt admin',
        code: 'f11d',
        text: 'site (alt)',
    },
    {
        dashicon: 'dashicons-admin-site-alt2',
        keywords: 'site alt admin',
        code: 'f11e',
        text: 'site (alt2)',
    },
    {
        dashicon: 'dashicons-admin-site-alt3',
        keywords: 'site alt admin',
        code: 'f11f',
        text: 'site (alt3)',
    },
    {
        dashicon: 'dashicons-dashboard',
        keywords: 'dashboard admin',
        code: 'f226',
        text: 'dashboard',
    },
    {
        dashicon: 'dashicons-admin-post',
        keywords: 'post admin',
        code: 'f109',
        text: 'post',
    },
    {
        dashicon: 'dashicons-admin-media',
        keywords: 'media admin',
        code: 'f104',
        text: 'media',
    },
    {
        dashicon: 'dashicons-admin-links',
        keywords: 'links admin',
        code: 'f103',
        text: 'links',
    },
    {
        dashicon: 'dashicons-admin-page',
        keywords: 'page admin',
        code: 'f105',
        text: 'page',
    },
    {
        dashicon: 'dashicons-admin-comments',
        keywords: 'comments admin',
        code: 'f101',
        text: 'comments',
    },
    {
        dashicon: 'dashicons-admin-appearance',
        keywords: 'appearance admin',
        code: 'f100',
        text: 'appearance',
    },
    {
        dashicon: 'dashicons-admin-plugins',
        keywords: 'plugins admin',
        code: 'f106',
        text: 'plugins',
    },
    {
        dashicon: 'dashicons-plugins-checked',
        keywords: 'plugins checked admin',
        code: 'f485',
        text: 'plugins checked',
    },
    {
        dashicon: 'dashicons-admin-users',
        keywords: 'users admin',
        code: 'f110',
        text: 'users',
    },
    {
        dashicon: 'dashicons-admin-tools',
        keywords: 'tools admin',
        code: 'f107',
        text: 'tools',
    },
    {
        dashicon: 'dashicons-admin-settings',
        keywords: 'settings admin',
        code: 'f108',
        text: 'settings',
    },
    {
        dashicon: 'dashicons-admin-network',
        keywords: 'network admin',
        code: 'f112',
        text: 'network',
    },
    {
        dashicon: 'dashicons-admin-home',
        keywords: 'home admin',
        code: 'f102',
        text: 'home',
    },
    {
        dashicon: 'dashicons-admin-generic',
        keywords: 'generic admin',
        code: 'f111',
        text: 'generic',
    },
    {
        dashicon: 'dashicons-admin-collapse',
        keywords: 'collapse admin',
        code: 'f148',
        text: 'collapse',
    },
    {
        dashicon: 'dashicons-filter',
        keywords: 'filter admin',
        code: 'f536',
        text: 'filter',
    },
    {
        dashicon: 'dashicons-admin-customizer',
        keywords: 'customizer admin',
        code: 'f540',
        text: 'customizer',
    },
    {
        dashicon: 'dashicons-admin-multisite',
        keywords: 'multisite admin',
        code: 'f541',
        text: 'multisite',
    },
    {
        dashicon: 'dashicons-welcome-write-blog',
        keywords: 'write blog welcome',
        code: 'f119',
        text: 'write blog',
    },
    {
        dashicon: 'dashicons-welcome-add-page',
        keywords: 'add page welcome',
        code: 'f133',
        text: 'add page',
    },
    {
        dashicon: 'dashicons-welcome-view-site',
        keywords: 'view site welcome',
        code: 'f115',
        text: 'view site',
    },
    {
        dashicon: 'dashicons-welcome-widgets-menus',
        keywords: 'widgets menus welcome',
        code: 'f116',
        text: 'widgets menus',
    },
    {
        dashicon: 'dashicons-welcome-comments',
        keywords: 'comments welcome',
        code: 'f117',
        text: 'comments',
    },
    {
        dashicon: 'dashicons-welcome-learn-more',
        keywords: 'learn more welcome',
        code: 'f118',
        text: 'learn more',
    },
    {
        dashicon: 'dashicons-format-aside',
        keywords: 'aside format',
        code: 'f123',
        text: 'aside',
    },
    {
        dashicon: 'dashicons-format-image',
        keywords: 'image format',
        code: 'f128',
        text: 'image',
    },
    {
        dashicon: 'dashicons-format-gallery',
        keywords: 'gallery format',
        code: 'f161',
        text: 'gallery',
    },
    {
        dashicon: 'dashicons-format-video',
        keywords: 'video format',
        code: 'f126',
        text: 'video',
    },
    {
        dashicon: 'dashicons-format-status',
        keywords: 'status format',
        code: 'f130',
        text: 'status',
    },
    {
        dashicon: 'dashicons-format-quote',
        keywords: 'quote format',
        code: 'f122',
        text: 'quote',
    },
    {
        dashicon: 'dashicons-format-chat',
        keywords: 'chat format',
        code: 'f125',
        text: 'chat',
    },
    {
        dashicon: 'dashicons-format-audio',
        keywords: 'audio format',
        code: 'f127',
        text: 'audio',
    },
    {
        dashicon: 'dashicons-camera',
        keywords: 'camera format',
        code: 'f306',
        text: 'camera',
    },
    {
        dashicon: 'dashicons-camera-alt',
        keywords: 'camera alt format',
        code: 'f129',
        text: 'camera (alt)',
    },
    {
        dashicon: 'dashicons-images-alt',
        keywords: 'images alt format',
        code: 'f232',
        text: 'images (alt)',
    },
    {
        dashicon: 'dashicons-images-alt2',
        keywords: 'images alt format',
        code: 'f233',
        text: 'images (alt2)',
    },
    {
        dashicon: 'dashicons-video-alt',
        keywords: 'video alt format',
        code: 'f234',
        text: 'video (alt)',
    },
    {
        dashicon: 'dashicons-video-alt2',
        keywords: 'video alt format',
        code: 'f235',
        text: 'video (alt2)',
    },
    {
        dashicon: 'dashicons-video-alt3',
        keywords: 'video alt format',
        code: 'f236',
        text: 'video (alt3)',
    },
    {
        dashicon: 'dashicons-media-archive',
        keywords: 'archive media',
        code: 'f501',
        text: 'archive',
    },
    {
        dashicon: 'dashicons-media-audio',
        keywords: 'audio media',
        code: 'f500',
        text: 'audio',
    },
    {
        dashicon: 'dashicons-media-code',
        keywords: 'code media',
        code: 'f499',
        text: 'code',
    },
    {
        dashicon: 'dashicons-media-default',
        keywords: 'default media',
        code: 'f498',
        text: 'default',
    },
    {
        dashicon: 'dashicons-media-document',
        keywords: 'document media',
        code: 'f497',
        text: 'document',
    },
    {
        dashicon: 'dashicons-media-interactive',
        keywords: 'interactive media',
        code: 'f496',
        text: 'interactive',
    },
    {
        dashicon: 'dashicons-media-spreadsheet',
        keywords: 'spreadsheet media',
        code: 'f495',
        text: 'spreadsheet',
    },
    {
        dashicon: 'dashicons-media-text',
        keywords: 'text media',
        code: 'f491',
        text: 'text',
    },
    {
        dashicon: 'dashicons-media-video',
        keywords: 'video media',
        code: 'f490',
        text: 'video',
    },
    {
        dashicon: 'dashicons-playlist-audio',
        keywords: 'audio playlist media',
        code: 'f492',
        text: 'playlist audio',
    },
    {
        dashicon: 'dashicons-playlist-video',
        keywords: 'video playlist media',
        code: 'f493',
        text: 'playlist video',
    },
    {
        dashicon: 'dashicons-controls-play',
        keywords: 'play player controls media',
        code: 'f522',
        text: 'play',
    },
    {
        dashicon: 'dashicons-controls-pause',
        keywords: 'player pause controls media',
        code: 'f523',
        text: 'pause',
    },
    {
        dashicon: 'dashicons-controls-forward',
        keywords: 'player forward controls media',
        code: 'f519',
        text: 'forward',
    },
    {
        dashicon: 'dashicons-controls-skipforward',
        keywords: 'player skip forward controls media',
        code: 'f517',
        text: 'skip forward',
    },
    {
        dashicon: 'dashicons-controls-back',
        keywords: 'player back controls media',
        code: 'f518',
        text: 'back',
    },
    {
        dashicon: 'dashicons-controls-skipback',
        keywords: 'player skip back controls media',
        code: 'f516',
        text: 'skip back',
    },
    {
        dashicon: 'dashicons-controls-repeat',
        keywords: 'player repeat controls media',
        code: 'f515',
        text: 'repeat',
    },
    {
        dashicon: 'dashicons-controls-volumeon',
        keywords: 'player volume on controls media',
        code: 'f521',
        text: 'volume on',
    },
    {
        dashicon: 'dashicons-controls-volumeoff',
        keywords: 'player volume off controls media',
        code: 'f520',
        text: 'volume off',
    },
    {
        dashicon: 'dashicons-image-crop',
        keywords: 'crop image',
        code: 'f165',
        text: 'crop',
    },
    {
        dashicon: 'dashicons-image-rotate',
        keywords: 'rotate image',
        code: 'f531',
        text: 'rotate',
    },
    {
        dashicon: 'dashicons-image-rotate-left',
        keywords: 'rotate left image',
        code: 'f166',
        text: 'rotate left',
    },
    {
        dashicon: 'dashicons-image-rotate-right',
        keywords: 'rotate right image',
        code: 'f167',
        text: 'rotate right',
    },
    {
        dashicon: 'dashicons-image-flip-vertical',
        keywords: 'flip vertical image',
        code: 'f168',
        text: 'flip vertical',
    },
    {
        dashicon: 'dashicons-image-flip-horizontal',
        keywords: 'flip horizontal image',
        code: 'f169',
        text: 'flip horizontal',
    },
    {
        dashicon: 'dashicons-image-filter',
        keywords: 'filter image',
        code: 'f533',
        text: 'filter',
    },
    {
        dashicon: 'dashicons-undo',
        keywords: 'undo image',
        code: 'f171',
        text: 'undo',
    },
    {
        dashicon: 'dashicons-redo',
        keywords: 'redo image',
        code: 'f172',
        text: 'redo',
    },
    {
        dashicon: 'dashicons-database-add',
        keywords: 'database add',
        code: 'f170',
        text: 'database add',
    },
    {
        dashicon: 'dashicons-database',
        keywords: 'database',
        code: 'f17e',
        text: 'database',
    },
    {
        dashicon: 'dashicons-database-export',
        keywords: 'database export',
        code: 'f17a',
        text: 'database export',
    },
    {
        dashicon: 'dashicons-database-import',
        keywords: 'database import',
        code: 'f17b',
        text: 'database import',
    },
    {
        dashicon: 'dashicons-database-remove',
        keywords: 'database remove',
        code: 'f17c',
        text: 'database remove',
    },
    {
        dashicon: 'dashicons-database-view',
        keywords: 'database view',
        code: 'f17d',
        text: 'database view',
    },
    {
        dashicon: 'dashicons-align-full-width',
        keywords: 'align full width block',
        code: 'f114',
        text: 'align full width',
    },
    {
        dashicon: 'dashicons-align-pull-left',
        keywords: 'align pull left block',
        code: 'f10a',
        text: 'align pull left',
    },
    {
        dashicon: 'dashicons-align-pull-right',
        keywords: 'align pull right block',
        code: 'f10b',
        text: 'align pull right',
    },
    {
        dashicon: 'dashicons-align-wide',
        keywords: 'align wide block',
        code: 'f11b',
        text: 'align wide',
    },
    {
        dashicon: 'dashicons-block-default',
        keywords: 'block default',
        code: 'f12b',
        text: 'block default',
    },
    {
        dashicon: 'dashicons-button',
        keywords: 'button block',
        code: 'f11a',
        text: 'button',
    },
    {
        dashicon: 'dashicons-cloud-saved',
        keywords: 'cloud saved block',
        code: 'f137',
        text: 'cloud saved',
    },
    {
        dashicon: 'dashicons-cloud-upload',
        keywords: 'cloud upload block',
        code: 'f13b',
        text: 'cloud upload',
    },
    {
        dashicon: 'dashicons-columns',
        keywords: 'columns block',
        code: 'f13c',
        text: 'columns',
    },
    {
        dashicon: 'dashicons-cover-image',
        keywords: 'cover image block',
        code: 'f13d',
        text: 'cover image',
    },
    {
        dashicon: 'dashicons-ellipsis',
        keywords: 'ellipsis block',
        code: 'f11c',
        text: 'ellipsis',
    },
    {
        dashicon: 'dashicons-embed-audio',
        keywords: 'embed audio block',
        code: 'f13e',
        text: 'embed audio',
    },
    {
        dashicon: 'dashicons-embed-generic',
        keywords: 'embed generic block',
        code: 'f13f',
        text: 'embed generic',
    },
    {
        dashicon: 'dashicons-embed-photo',
        keywords: 'embed photo block',
        code: 'f144',
        text: 'embed photo',
    },
    {
        dashicon: 'dashicons-embed-post',
        keywords: 'embed post block',
        code: 'f146',
        text: 'embed post',
    },
    {
        dashicon: 'dashicons-embed-video',
        keywords: 'embed video block',
        code: 'f149',
        text: 'embed video',
    },
    {
        dashicon: 'dashicons-exit',
        keywords: 'exit block',
        code: 'f14a',
        text: 'exit',
    },
    {
        dashicon: 'dashicons-heading',
        keywords: 'heading block',
        code: 'f10e',
        text: 'heading',
    },
    {
        dashicon: 'dashicons-html',
        keywords: 'html block',
        code: 'f14b',
        text: 'HTML',
    },
    {
        dashicon: 'dashicons-info-outline',
        keywords: 'info outline block',
        code: 'f14c',
        text: 'info outline',
    },
    {
        dashicon: 'dashicons-insert',
        keywords: 'insert block',
        code: 'f10f',
        text: 'insert',
    },
    {
        dashicon: 'dashicons-insert-after',
        keywords: 'insert after block',
        code: 'f14d',
        text: 'insert after',
    },
    {
        dashicon: 'dashicons-insert-before',
        keywords: 'insert before block',
        code: 'f14e',
        text: 'insert before',
    },
    {
        dashicon: 'dashicons-remove',
        keywords: 'remove block',
        code: 'f14f',
        text: 'remove',
    },
    {
        dashicon: 'dashicons-saved',
        keywords: 'saved block',
        code: 'f15e',
        text: 'saved',
    },
    {
        dashicon: 'dashicons-shortcode',
        keywords: 'shortcode block',
        code: 'f150',
        text: 'shortcode',
    },
    {
        dashicon: 'dashicons-table-col-after',
        keywords: 'table col after block',
        code: 'f151',
        text: 'table col after',
    },
    {
        dashicon: 'dashicons-table-col-before',
        keywords: 'table col before block',
        code: 'f152',
        text: 'table col before',
    },
    {
        dashicon: 'dashicons-table-col-delete',
        keywords: 'table col delete block',
        code: 'f15a',
        text: 'table col delete',
    },
    {
        dashicon: 'dashicons-table-row-after',
        keywords: 'table row after block',
        code: 'f15b',
        text: 'table row after',
    },
    {
        dashicon: 'dashicons-table-row-before',
        keywords: 'table row before block',
        code: 'f15c',
        text: 'table row before',
    },
    {
        dashicon: 'dashicons-table-row-delete',
        keywords: 'table row delete block',
        code: 'f15d',
        text: 'table row delete',
    },
    {
        dashicon: 'dashicons-editor-bold',
        keywords: 'bold editor tinymce',
        code: 'f200',
        text: 'bold',
    },
    {
        dashicon: 'dashicons-editor-italic',
        keywords: 'italic editor tinymce',
        code: 'f201',
        text: 'italic',
    },
    {
        dashicon: 'dashicons-editor-ul',
        keywords: 'ul unordered list editor tinymce',
        code: 'f203',
        text: 'unordered list',
    },
    {
        dashicon: 'dashicons-editor-ol',
        keywords: 'ol ordered listeditor tinymce',
        code: 'f204',
        text: 'ordered list',
    },
    {
        dashicon: 'dashicons-editor-ol-rtl',
        keywords: 'ol ordered list rtl right left editor tinymce',
        code: 'f12c',
        text: 'ordered list RTL',
    },
    {
        dashicon: 'dashicons-editor-quote',
        keywords: 'quote editor tinymce',
        code: 'f205',
        text: 'quote',
    },
    {
        dashicon: 'dashicons-editor-alignleft',
        keywords: 'align left editor tinymce',
        code: 'f206',
        text: 'align left',
    },
    {
        dashicon: 'dashicons-editor-aligncenter',
        keywords: 'align center editor tinymce',
        code: 'f207',
        text: 'align center',
    },
    {
        dashicon: 'dashicons-editor-alignright',
        keywords: 'align right editor tinymce',
        code: 'f208',
        text: 'align right',
    },
    {
        dashicon: 'dashicons-editor-insertmore',
        keywords: 'insert more editor tinymce',
        code: 'f209',
        text: 'insert more',
    },
    {
        dashicon: 'dashicons-editor-spellcheck',
        keywords: 'spellcheck editor tinymce',
        code: 'f210',
        text: 'spellcheck',
    },
    {
        dashicon: 'dashicons-editor-expand',
        keywords: 'expand editor tinymce',
        code: 'f211',
        text: 'expand',
    },
    {
        dashicon: 'dashicons-editor-contract',
        keywords: 'contract editor tinymce',
        code: 'f506',
        text: 'contract',
    },
    {
        dashicon: 'dashicons-editor-kitchensink',
        keywords: 'kitchen sink editor tinymce',
        code: 'f212',
        text: 'kitchen sink',
    },
    {
        dashicon: 'dashicons-editor-underline',
        keywords: 'underline editor tinymce',
        code: 'f213',
        text: 'underline',
    },
    {
        dashicon: 'dashicons-editor-justify',
        keywords: 'justify editor tinymce',
        code: 'f214',
        text: 'justify',
    },
    {
        dashicon: 'dashicons-editor-textcolor',
        keywords: 'textcolor editor text color tinymce',
        code: 'f215',
        text: 'text color',
    },
    {
        dashicon: 'dashicons-editor-paste-word',
        keywords: 'paste editor word tinymce',
        code: 'f216',
        text: 'paste word',
    },
    {
        dashicon: 'dashicons-editor-paste-text',
        keywords: 'paste editor text tinymce',
        code: 'f217',
        text: 'paste text',
    },
    {
        dashicon: 'dashicons-editor-removeformatting',
        keywords: 'remove formatting editor tinymce',
        code: 'f218',
        text: 'remove formatting',
    },
    {
        dashicon: 'dashicons-editor-video',
        keywords: 'video editor tinymce',
        code: 'f219',
        text: 'video',
    },
    {
        dashicon: 'dashicons-editor-customchar',
        keywords: 'custom character editor tinymce',
        code: 'f220',
        text: 'custom character',
    },
    {
        dashicon: 'dashicons-editor-outdent',
        keywords: 'outdent editor tinymce',
        code: 'f221',
        text: 'outdent',
    },
    {
        dashicon: 'dashicons-editor-indent',
        keywords: 'indent editor tinymce',
        code: 'f222',
        text: 'indent',
    },
    {
        dashicon: 'dashicons-editor-help',
        keywords: 'help editor tinymce',
        code: 'f223',
        text: 'help',
    },
    {
        dashicon: 'dashicons-editor-strikethrough',
        keywords: 'strikethrough editor tinymce',
        code: 'f224',
        text: 'strikethrough',
    },
    {
        dashicon: 'dashicons-editor-unlink',
        keywords: 'unlink editor tinymce',
        code: 'f225',
        text: 'unlink',
    },
    {
        dashicon: 'dashicons-editor-rtl',
        keywords: 'rtl right left editor tinymce',
        code: 'f320',
        text: 'RTL',
    },
    {
        dashicon: 'dashicons-editor-ltr',
        keywords: 'ltr left right editor tinymce',
        code: 'f10c',
        text: 'LTR',
    },
    {
        dashicon: 'dashicons-editor-break',
        keywords: 'break editor tinymce',
        code: 'f474',
        text: 'break',
    },
    {
        dashicon: 'dashicons-editor-code',
        keywords: 'code editor tinymce',
        code: 'f475',
        text: 'code',
    },
    {
        dashicon: 'dashicons-editor-paragraph',
        keywords: 'paragraph editor tinymce',
        code: 'f476',
        text: 'paragraph',
    },
    {
        dashicon: 'dashicons-editor-table',
        keywords: 'table editor tinymce',
        code: 'f535',
        text: 'table',
    },
    {
        dashicon: 'dashicons-align-left',
        keywords: 'align left',
        code: 'f135',
        text: 'align left',
    },
    {
        dashicon: 'dashicons-align-right',
        keywords: 'align right',
        code: 'f136',
        text: 'align right',
    },
    {
        dashicon: 'dashicons-align-center',
        keywords: 'align center',
        code: 'f134',
        text: 'align center',
    },
    {
        dashicon: 'dashicons-align-none',
        keywords: 'align none',
        code: 'f138',
        text: 'align none',
    },
    {
        dashicon: 'dashicons-lock',
        keywords: 'lock',
        code: 'f160',
        text: 'lock',
    },
    {
        dashicon: 'dashicons-unlock',
        keywords: 'unlock',
        code: 'f528',
        text: 'unlock',
    },
    {
        dashicon: 'dashicons-calendar',
        keywords: 'calendar',
        code: 'f145',
        text: 'calendar',
    },
    {
        dashicon: 'dashicons-calendar-alt',
        keywords: 'calendar alt',
        code: 'f508',
        text: 'calendar (alt)',
    },
    {
        dashicon: 'dashicons-visibility',
        keywords: 'visibility',
        code: 'f177',
        text: 'visibility',
    },
    {
        dashicon: 'dashicons-hidden',
        keywords: 'hidden',
        code: 'f530',
        text: 'hidden',
    },
    {
        dashicon: 'dashicons-post-status',
        keywords: 'post status',
        code: 'f173',
        text: 'post status',
    },
    {
        dashicon: 'dashicons-edit',
        keywords: 'edit pencil',
        code: 'f464',
        text: 'edit',
    },
    {
        dashicon: 'dashicons-trash',
        keywords: 'trash remove delete',
        code: 'f182',
        text: 'trash',
    },
    {
        dashicon: 'dashicons-sticky',
        keywords: 'sticky',
        code: 'f537',
        text: 'sticky',
    },
    {
        dashicon: 'dashicons-external',
        keywords: 'external',
        code: 'f504',
        text: 'external',
    },
    {
        dashicon: 'dashicons-arrow-up',
        keywords: 'arrow up',
        code: 'f142',
        text: 'arrow up',
    },
    {
        dashicon: 'dashicons-arrow-down',
        keywords: 'arrow down',
        code: 'f140',
        text: 'arrow down',
    },
    {
        dashicon: 'dashicons-arrow-right',
        keywords: 'arrow right',
        code: 'f139',
        text: 'arrow right',
    },
    {
        dashicon: 'dashicons-arrow-left',
        keywords: 'arrow left',
        code: 'f141',
        text: 'arrow left',
    },
    {
        dashicon: 'dashicons-arrow-up-alt',
        keywords: 'arrow up alt',
        code: 'f342',
        text: 'arrow up (alt)',
    },
    {
        dashicon: 'dashicons-arrow-down-alt',
        keywords: 'arrow down alt',
        code: 'f346',
        text: 'arrow down (alt)',
    },
    {
        dashicon: 'dashicons-arrow-right-alt',
        keywords: 'arrow right alt',
        code: 'f344',
        text: 'arrow right (alt)',
    },
    {
        dashicon: 'dashicons-arrow-left-alt',
        keywords: 'arrow left alt',
        code: 'f340',
        text: 'arrow left (alt)',
    },
    {
        dashicon: 'dashicons-arrow-up-alt2',
        keywords: 'arrow up alt',
        code: 'f343',
        text: 'arrow up (alt2)',
    },
    {
        dashicon: 'dashicons-arrow-down-alt2',
        keywords: 'arrow down alt',
        code: 'f347',
        text: 'arrow down (alt2)',
    },
    {
        dashicon: 'dashicons-arrow-right-alt2',
        keywords: 'arrow right alt',
        code: 'f345',
        text: 'arrow right (alt2)',
    },
    {
        dashicon: 'dashicons-arrow-left-alt2',
        keywords: 'arrow left alt',
        code: 'f341',
        text: 'arrow left (alt2)',
    },
    {
        dashicon: 'dashicons-sort',
        keywords: 'sort',
        code: 'f156',
        text: 'sort',
    },
    {
        dashicon: 'dashicons-leftright',
        keywords: 'left right',
        code: 'f229',
        text: 'left right',
    },
    {
        dashicon: 'dashicons-randomize',
        keywords: 'randomize shuffle',
        code: 'f503',
        text: 'randomize',
    },
    {
        dashicon: 'dashicons-list-view',
        keywords: 'list view',
        code: 'f163',
        text: 'list view',
    },
    {
        dashicon: 'dashicons-excerpt-view',
        keywords: 'excerpt view',
        code: 'f164',
        text: 'excerpt view',
    },
    {
        dashicon: 'dashicons-grid-view',
        keywords: 'grid view',
        code: 'f509',
        text: 'grid view',
    },
    {
        dashicon: 'dashicons-move',
        keywords: 'move',
        code: 'f545',
        text: 'move',
    },
    {
        dashicon: 'dashicons-share',
        keywords: 'share social',
        code: 'f237',
        text: 'share',
    },
    {
        dashicon: 'dashicons-share-alt',
        keywords: 'share alt social',
        code: 'f240',
        text: 'share (alt)',
    },
    {
        dashicon: 'dashicons-share-alt2',
        keywords: 'share alt social',
        code: 'f242',
        text: 'share (alt2)',
    },
    {
        dashicon: 'dashicons-rss',
        keywords: 'rss social',
        code: 'f303',
        text: 'RSS',
    },
    {
        dashicon: 'dashicons-email',
        keywords: 'email social',
        code: 'f465',
        text: 'email',
    },
    {
        dashicon: 'dashicons-email-alt',
        keywords: 'email alt social',
        code: 'f466',
        text: 'email (alt)',
    },
    {
        dashicon: 'dashicons-email-alt2',
        keywords: 'email alt social',
        code: 'f467',
        text: 'email (alt2)',
    },
    {
        dashicon: 'dashicons-networking',
        keywords: 'networking social',
        code: 'f325',
        text: 'networking',
    },
    {
        dashicon: 'dashicons-amazon',
        keywords: 'amazon social',
        code: 'f162',
        text: 'Amazon',
    },
    {
        dashicon: 'dashicons-facebook',
        keywords: 'facebook social',
        code: 'f304',
        text: 'Facebook',
    },
    {
        dashicon: 'dashicons-facebook-alt',
        keywords: 'facebook social alt',
        code: 'f305',
        text: 'Facebook (alt)',
    },
    {
        dashicon: 'dashicons-google',
        keywords: 'google social',
        code: 'f18b',
        text: 'Google',
    },
    {
        dashicon: 'dashicons-instagram',
        keywords: 'instagram social',
        code: 'f12d',
        text: 'Instagram',
    },
    {
        dashicon: 'dashicons-linkedin',
        keywords: 'linkedin social',
        code: 'f18d',
        text: 'LinkedIn',
    },
    {
        dashicon: 'dashicons-pinterest',
        keywords: 'pinterest social',
        code: 'f192',
        text: 'Pinterest',
    },
    {
        dashicon: 'dashicons-podio',
        keywords: 'podio social',
        code: 'f19c',
        text: 'Podio',
    },
    {
        dashicon: 'dashicons-reddit',
        keywords: 'reddit social',
        code: 'f195',
        text: 'Reddit',
    },
    {
        dashicon: 'dashicons-spotify',
        keywords: 'spotify social',
        code: 'f196',
        text: 'Spotify',
    },
    {
        dashicon: 'dashicons-twitch',
        keywords: 'twitch social',
        code: 'f199',
        text: 'Twitch',
    },
    {
        dashicon: 'dashicons-twitter',
        keywords: 'twitter social',
        code: 'f301',
        text: 'Twitter',
    },
    {
        dashicon: 'dashicons-twitter-alt',
        keywords: 'twitter social alt',
        code: 'f302',
        text: 'Twitter (alt)',
    },
    {
        dashicon: 'dashicons-whatsapp',
        keywords: 'whatsapp social',
        code: 'f19a',
        text: 'WhatsApp',
    },
    {
        dashicon: 'dashicons-xing',
        keywords: 'xing social',
        code: 'f19d',
        text: 'Xing',
    },
    {
        dashicon: 'dashicons-youtube',
        keywords: 'youtube social',
        code: 'f19b',
        text: 'YouTube',
    },
    {
        dashicon: 'dashicons-hammer',
        keywords: 'hammer development',
        code: 'f308',
        text: 'hammer',
    },
    {
        dashicon: 'dashicons-art',
        keywords: 'art design',
        code: 'f309',
        text: 'art',
    },
    {
        dashicon: 'dashicons-migrate',
        keywords: 'migrate migration',
        code: 'f310',
        text: 'migrate',
    },
    {
        dashicon: 'dashicons-performance',
        keywords: 'performance',
        code: 'f311',
        text: 'performance',
    },
    {
        dashicon: 'dashicons-universal-access',
        keywords: 'universal access accessibility',
        code: 'f483',
        text: 'universal access',
    },
    {
        dashicon: 'dashicons-universal-access-alt',
        keywords: 'universal access accessibility alt',
        code: 'f507',
        text: 'universal access (alt)',
    },
    {
        dashicon: 'dashicons-tickets',
        keywords: 'tickets',
        code: 'f486',
        text: 'tickets',
    },
    {
        dashicon: 'dashicons-nametag',
        keywords: 'nametag',
        code: 'f484',
        text: 'nametag',
    },
    {
        dashicon: 'dashicons-clipboard',
        keywords: 'clipboard',
        code: 'f481',
        text: 'clipboard',
    },
    {
        dashicon: 'dashicons-heart',
        keywords: 'heart',
        code: 'f487',
        text: 'heart',
    },
    {
        dashicon: 'dashicons-megaphone',
        keywords: 'megaphone',
        code: 'f488',
        text: 'megaphone',
    },
    {
        dashicon: 'dashicons-schedule',
        keywords: 'schedule',
        code: 'f489',
        text: 'schedule',
    },
    {
        dashicon: 'dashicons-tide',
        keywords: 'Tide',
        code: 'f10d',
        text: 'Tide',
    },
    {
        dashicon: 'dashicons-rest-api',
        keywords: 'REST API',
        code: 'f124',
        text: 'REST API',
    },
    {
        dashicon: 'dashicons-code-standards',
        keywords: 'code standards',
        code: 'f13a',
        text: 'code standards',
    },
    {
        dashicon: 'dashicons-buddicons-activity',
        keywords: 'activity buddicons',
        code: 'f452',
        text: 'activity',
    },
    {
        dashicon: 'dashicons-buddicons-bbpress-logo',
        keywords: 'bbPress buddicons',
        code: 'f477',
        text: 'bbPress',
    },
    {
        dashicon: 'dashicons-buddicons-buddypress-logo',
        keywords: 'BuddyPress buddicons',
        code: 'f448',
        text: 'BuddyPress',
    },
    {
        dashicon: 'dashicons-buddicons-community',
        keywords: 'community buddicons',
        code: 'f453',
        text: 'community',
    },
    {
        dashicon: 'dashicons-buddicons-forums',
        keywords: 'forums buddicons',
        code: 'f449',
        text: 'forums',
    },
    {
        dashicon: 'dashicons-buddicons-friends',
        keywords: 'friends buddicons',
        code: 'f454',
        text: 'friends',
    },
    {
        dashicon: 'dashicons-buddicons-groups',
        keywords: 'groups buddicons',
        code: 'f456',
        text: 'groups',
    },
    {
        dashicon: 'dashicons-buddicons-pm',
        keywords: 'private message buddicons pm',
        code: 'f457',
        text: 'pm',
    },
    {
        dashicon: 'dashicons-buddicons-replies',
        keywords: 'replies buddicons',
        code: 'f451',
        text: 'replies',
    },
    {
        dashicon: 'dashicons-buddicons-topics',
        keywords: 'topics buddicons',
        code: 'f450',
        text: 'topics',
    },
    {
        dashicon: 'dashicons-buddicons-tracking',
        keywords: 'tracking buddicons',
        code: 'f455',
        text: 'tracking',
    },
    {
        dashicon: 'dashicons-wordpress',
        keywords: 'WordPress',
        code: 'f120',
        text: 'WordPress',
    },
    {
        dashicon: 'dashicons-wordpress-alt',
        keywords: 'WordPress alt',
        code: 'f324',
        text: 'WordPress (alt)',
    },
    {
        dashicon: 'dashicons-pressthis',
        keywords: 'Pressthis',
        code: 'f157',
        text: 'Pressthis',
    },
    {
        dashicon: 'dashicons-update',
        keywords: 'update',
        code: 'f463',
        text: 'update',
    },
    {
        dashicon: 'dashicons-update-alt',
        keywords: 'update alt',
        code: 'f113',
        text: 'update (alt)',
    },
    {
        dashicon: 'dashicons-screenoptions',
        keywords: 'screenoptions',
        code: 'f180',
        text: 'screen options',
    },
    {
        dashicon: 'dashicons-info',
        keywords: 'info',
        code: 'f348',
        text: 'info',
    },
    {
        dashicon: 'dashicons-cart',
        keywords: 'cart shopping',
        code: 'f174',
        text: 'cart',
    },
    {
        dashicon: 'dashicons-feedback',
        keywords: 'feedback form',
        code: 'f175',
        text: 'feedback',
    },
    {
        dashicon: 'dashicons-cloud',
        keywords: 'cloud',
        code: 'f176',
        text: 'cloud',
    },
    {
        dashicon: 'dashicons-translation',
        keywords: 'translation language',
        code: 'f326',
        text: 'translation',
    },
    {
        dashicon: 'dashicons-tag',
        keywords: 'tag taxonomy',
        code: 'f323',
        text: 'tag',
    },
    {
        dashicon: 'dashicons-category',
        keywords: 'category taxonomy',
        code: 'f318',
        text: 'category',
    },
    {
        dashicon: 'dashicons-archive',
        keywords: 'archive widget',
        code: 'f480',
        text: 'archive',
    },
    {
        dashicon: 'dashicons-tagcloud',
        keywords: 'tagcloud widget',
        code: 'f479',
        text: 'tagcloud',
    },
    {
        dashicon: 'dashicons-text',
        keywords: 'text widget',
        code: 'f478',
        text: 'text',
    },
    {
        dashicon: 'dashicons-bell',
        keywords: 'bell notifications',
        code: 'f16d',
        text: 'bell',
    },
    {
        dashicon: 'dashicons-yes',
        keywords: 'yes check checkmark notifications',
        code: 'f147',
        text: 'yes',
    },
    {
        dashicon: 'dashicons-yes-alt',
        keywords: 'yes check checkmark alt notifications',
        code: 'f12a',
        text: 'yes (alt)',
    },
    {
        dashicon: 'dashicons-no',
        keywords: 'no x notifications',
        code: 'f158',
        text: 'no',
    },
    {
        dashicon: 'dashicons-no-alt',
        keywords: 'no x alt notifications',
        code: 'f335',
        text: 'no (alt)',
    },
    {
        dashicon: 'dashicons-plus',
        keywords: 'plus add increase notifications',
        code: 'f132',
        text: 'plus',
    },
    {
        dashicon: 'dashicons-plus-alt',
        keywords: 'plus add increase alt notifications',
        code: 'f502',
        text: 'plus (alt)',
    },
    {
        dashicon: 'dashicons-plus-alt2',
        keywords: 'plus add increase alt notifications',
        code: 'f543',
        text: 'plus (alt2)',
    },
    {
        dashicon: 'dashicons-minus',
        keywords: 'minus decrease notifications',
        code: 'f460',
        text: 'minus',
    },
    {
        dashicon: 'dashicons-dismiss',
        keywords: 'dismiss notifications',
        code: 'f153',
        text: 'dismiss',
    },
    {
        dashicon: 'dashicons-marker',
        keywords: 'marker notifications',
        code: 'f159',
        text: 'marker',
    },
    {
        dashicon: 'dashicons-star-filled',
        keywords: 'filled star notifications',
        code: 'f155',
        text: 'star filled',
    },
    {
        dashicon: 'dashicons-star-half',
        keywords: 'half star notifications',
        code: 'f459',
        text: 'star half',
    },
    {
        dashicon: 'dashicons-star-empty',
        keywords: 'empty star notifications',
        code: 'f154',
        text: 'star empty',
    },
    {
        dashicon: 'dashicons-flag',
        keywords: 'flag notifications',
        code: 'f227',
        text: 'flag',
    },
    {
        dashicon: 'dashicons-warning',
        keywords: 'warning notifications',
        code: 'f534',
        text: 'warning',
    },
    {
        dashicon: 'dashicons-location',
        keywords: 'location pin',
        code: 'f230',
        text: 'location',
    },
    {
        dashicon: 'dashicons-location-alt',
        keywords: 'location alt',
        code: 'f231',
        text: 'location (alt)',
    },
    {
        dashicon: 'dashicons-vault',
        keywords: 'vault safe',
        code: 'f178',
        text: 'vault',
    },
    {
        dashicon: 'dashicons-shield',
        keywords: 'shield',
        code: 'f332',
        text: 'shield',
    },
    {
        dashicon: 'dashicons-shield-alt',
        keywords: 'shield alt',
        code: 'f334',
        text: 'shield (alt)',
    },
    {
        dashicon: 'dashicons-sos',
        keywords: 'sos help',
        code: 'f468',
        text: 'sos',
    },
    {
        dashicon: 'dashicons-search',
        keywords: 'search',
        code: 'f179',
        text: 'search',
    },
    {
        dashicon: 'dashicons-slides',
        keywords: 'slides',
        code: 'f181',
        text: 'slides',
    },
    {
        dashicon: 'dashicons-text-page',
        keywords: 'text page',
        code: 'f121',
        text: 'text page',
    },
    {
        dashicon: 'dashicons-analytics',
        keywords: 'analytics',
        code: 'f183',
        text: 'analytics',
    },
    {
        dashicon: 'dashicons-chart-pie',
        keywords: 'pie chart',
        code: 'f184',
        text: 'chart pie',
    },
    {
        dashicon: 'dashicons-chart-bar',
        keywords: 'bar chart',
        code: 'f185',
        text: 'chart bar',
    },
    {
        dashicon: 'dashicons-chart-line',
        keywords: 'line chart',
        code: 'f238',
        text: 'chart line',
    },
    {
        dashicon: 'dashicons-chart-area',
        keywords: 'area chart',
        code: 'f239',
        text: 'chart area',
    },
    {
        dashicon: 'dashicons-groups',
        keywords: 'groups',
        code: 'f307',
        text: 'groups',
    },
    {
        dashicon: 'dashicons-businessman',
        keywords: 'businessman',
        code: 'f338',
        text: 'businessman',
    },
    {
        dashicon: 'dashicons-businesswoman',
        keywords: 'businesswoman',
        code: 'f12f',
        text: 'businesswoman',
    },
    {
        dashicon: 'dashicons-businessperson',
        keywords: 'businessperson',
        code: 'f12e',
        text: 'businessperson',
    },
    {
        dashicon: 'dashicons-id',
        keywords: 'id',
        code: 'f336',
        text: 'id',
    },
    {
        dashicon: 'dashicons-id-alt',
        keywords: 'id alt',
        code: 'f337',
        text: 'id (alt)',
    },
    {
        dashicon: 'dashicons-products',
        keywords: 'products',
        code: 'f312',
        text: 'products',
    },
    {
        dashicon: 'dashicons-awards',
        keywords: 'awards',
        code: 'f313',
        text: 'awards',
    },
    {
        dashicon: 'dashicons-forms',
        keywords: 'forms',
        code: 'f314',
        text: 'forms',
    },
    {
        dashicon: 'dashicons-testimonial',
        keywords: 'testimonial',
        code: 'f473',
        text: 'testimonial',
    },
    {
        dashicon: 'dashicons-portfolio',
        keywords: 'portfolio',
        code: 'f322',
        text: 'portfolio',
    },
    {
        dashicon: 'dashicons-book',
        keywords: 'book',
        code: 'f330',
        text: 'book',
    },
    {
        dashicon: 'dashicons-book-alt',
        keywords: 'book alt',
        code: 'f331',
        text: 'book (alt)',
    },
    {
        dashicon: 'dashicons-download',
        keywords: 'download',
        code: 'f316',
        text: 'download',
    },
    {
        dashicon: 'dashicons-upload',
        keywords: 'upload',
        code: 'f317',
        text: 'upload',
    },
    {
        dashicon: 'dashicons-backup',
        keywords: 'backup',
        code: 'f321',
        text: 'backup',
    },
    {
        dashicon: 'dashicons-clock',
        keywords: 'clock',
        code: 'f469',
        text: 'clock',
    },
    {
        dashicon: 'dashicons-lightbulb',
        keywords: 'lightbulb',
        code: 'f339',
        text: 'lightbulb',
    },
    {
        dashicon: 'dashicons-microphone',
        keywords: 'microphone mic',
        code: 'f482',
        text: 'microphone',
    },
    {
        dashicon: 'dashicons-desktop',
        keywords: 'desktop monitor',
        code: 'f472',
        text: 'desktop',
    },
    {
        dashicon: 'dashicons-laptop',
        keywords: 'laptop',
        code: 'f547',
        text: 'laptop',
    },
    {
        dashicon: 'dashicons-tablet',
        keywords: 'tablet ipad',
        code: 'f471',
        text: 'tablet',
    },
    {
        dashicon: 'dashicons-smartphone',
        keywords: 'smartphone iphone',
        code: 'f470',
        text: 'smartphone',
    },
    {
        dashicon: 'dashicons-phone',
        keywords: 'phone',
        code: 'f525',
        text: 'phone',
    },
    {
        dashicon: 'dashicons-index-card',
        keywords: 'index card',
        code: 'f510',
        text: 'index card',
    },
    {
        dashicon: 'dashicons-carrot',
        keywords: 'carrot food vendor',
        code: 'f511',
        text: 'carrot',
    },
    {
        dashicon: 'dashicons-building',
        keywords: 'building',
        code: 'f512',
        text: 'building',
    },
    {
        dashicon: 'dashicons-store',
        keywords: 'store',
        code: 'f513',
        text: 'store',
    },
    {
        dashicon: 'dashicons-album',
        keywords: 'album',
        code: 'f514',
        text: 'album',
    },
    {
        dashicon: 'dashicons-palmtree',
        keywords: 'palm tree',
        code: 'f527',
        text: 'palm tree',
    },
    {
        dashicon: 'dashicons-tickets-alt',
        keywords: 'tickets alt',
        code: 'f524',
        text: 'tickets (alt)',
    },
    {
        dashicon: 'dashicons-money',
        keywords: 'money',
        code: 'f526',
        text: 'money',
    },
    {
        dashicon: 'dashicons-money-alt',
        keywords: 'money alt',
        code: 'f18e',
        text: 'money (alt)',
    },
    {
        dashicon: 'dashicons-smiley',
        keywords: 'smiley smile',
        code: 'f328',
        text: 'smiley',
    },
    {
        dashicon: 'dashicons-thumbs-up',
        keywords: 'thumbs up',
        code: 'f529',
        text: 'thumbs up',
    },
    {
        dashicon: 'dashicons-thumbs-down',
        keywords: 'thumbs down',
        code: 'f542',
        text: 'thumbs down',
    },
    {
        dashicon: 'dashicons-layout',
        keywords: 'layout',
        code: 'f538',
        text: 'layout',
    },
    {
        dashicon: 'dashicons-paperclip',
        keywords: 'paperclip',
        code: 'f546',
        text: 'paperclip',
    },
    {
        dashicon: 'dashicons-color-picker',
        keywords: 'color picker',
        code: 'f131',
        text: 'color picker',
    },
    {
        dashicon: 'dashicons-edit-large',
        keywords: 'edit large',
        code: 'f327',
        text: 'edit large',
    },
    {
        dashicon: 'dashicons-edit-page',
        keywords: 'edit page',
        code: 'f186',
        text: 'edit page',
    },
    {
        dashicon: 'dashicons-airplane',
        keywords: 'airplane',
        code: 'f15f',
        text: 'airplane',
    },
    {
        dashicon: 'dashicons-bank',
        keywords: 'bank',
        code: 'f16a',
        text: 'bank',
    },
    {
        dashicon: 'dashicons-beer',
        keywords: 'beer',
        code: 'f16c',
        text: 'beer',
    },
    {
        dashicon: 'dashicons-calculator',
        keywords: 'calculator',
        code: 'f16e',
        text: 'calculator',
    },
    {
        dashicon: 'dashicons-car',
        keywords: 'car',
        code: 'f16b',
        text: 'car',
    },
    {
        dashicon: 'dashicons-coffee',
        keywords: 'coffee',
        code: 'f16f',
        text: 'coffee',
    },
    {
        dashicon: 'dashicons-drumstick',
        keywords: 'drumstick',
        code: 'f17f',
        text: 'drumstick',
    },
    {
        dashicon: 'dashicons-food',
        keywords: 'food',
        code: 'f187',
        text: 'food',
    },
    {
        dashicon: 'dashicons-fullscreen-alt',
        keywords: 'fullscreen alt',
        code: 'f188',
        text: 'fullscreen (alt)',
    },
    {
        dashicon: 'dashicons-fullscreen-exit-alt',
        keywords: 'fullscreen exit alt',
        code: 'f189',
        text: 'fullscreen exit (alt)',
    },
    {
        dashicon: 'dashicons-games',
        keywords: 'games',
        code: 'f18a',
        text: 'games',
    },
    {
        dashicon: 'dashicons-hourglass',
        keywords: 'hourglass',
        code: 'f18c',
        text: 'hourglass',
    },
    {
        dashicon: 'dashicons-open-folder',
        keywords: 'open folder',
        code: 'f18f',
        text: 'open folder',
    },
    {
        dashicon: 'dashicons-pdf',
        keywords: 'pdf',
        code: 'f190',
        text: 'PDF',
    },
    {
        dashicon: 'dashicons-pets',
        keywords: 'pets',
        code: 'f191',
        text: 'pets',
    },
    {
        dashicon: 'dashicons-printer',
        keywords: 'printer',
        code: 'f193',
        text: 'printer',
    },
    {
        dashicon: 'dashicons-privacy',
        keywords: 'privacy',
        code: 'f194',
        text: 'privacy',
    },
    {
        dashicon: 'dashicons-superhero',
        keywords: 'superhero',
        code: 'f198',
        text: 'superhero',
    },
    {
        dashicon: 'dashicons-superhero-alt',
        keywords: 'superhero alt',
        code: 'f197',
        text: 'superhero (alt)',
    },
];

const createNode = () => {
    const popup = `
    <div class="rds-iconbox-overlay">
    <div class="rds-iconbox-wrapper">
        <div class="rds-iconbox-header">
            <h3>Choose Icon</h3>
            <button class="btn-close no-button dashicons dashicons-no"></button>
        </div>
        <div class="rds-iconbox-content">
            <div class="rds-dashicons-search">
                <input type="text" class="rds-icon-search-text" placeholder="Search">
            </div>
            <div class="rds-dashicons-wrapper"></div>
        </div>
    </div>
    </div>`;

    let buttons = '';
    dashicons.forEach((d)=>{
        buttons += `<button class="dashicons-before ${d.dashicon}" data-keywords="${d.keywords}" data-icon="${d.dashicon}" data-code="${d.code}" title="${d.text}"></button>`    
    })

    const node = (new DOMParser()).parseFromString(popup, "text/html").body.firstElementChild;
    node.querySelector('.rds-dashicons-wrapper').innerHTML = buttons;
    
    return node;
}

function keydownDashicons(e) {
    const $=jQuery;

    const icon = $(e.target);

    let next = icon;
    if(e.code == "ArrowLeft") {
        e.preventDefault();
        next = icon.prevAll(":visible").first();                
    }
    if(e.code == "ArrowUp") {
        e.preventDefault();
        const prevs = icon.prevAll(":visible");
        if(prevs.length > 7) {
            next = prevs[7];
        }
    }

    if(e.code == "ArrowRight") {
        e.preventDefault();
        next = icon.nextAll(":visible").first();
    } 

    if(e.code == "ArrowDown") {
        e.preventDefault();
        const nexts = icon.nextAll(":visible");
        if(nexts.length > 7) {
            next = nexts[7];
        }
    }

    if(e.code == "Tab") {
        e.preventDefault();
        next = document.querySelector('.btn-close');
    }

    if(e.shiftKey && e.code == "Tab") {
        e.preventDefault();
        next = document.querySelector(".rds-icon-search-text");
    }

    next.focus();
}

export class iconBox extends elBinder{
    node;
    
    constructor(id){
        super();        
        
        addCSSLink('rds-iconbox-style', styleURL);        
        this.node =  createNode();
        this.node.id = id;  
        
        this.#init();          

        const _this=this;

        document.body.appendChild(this.node)

        this.node.querySelectorAll("button[data-icon]").forEach((element) => {
            this._bind(element, element.getAttribute('data-icon'));
        });
        this._bind(this.node.querySelector('.btn-close'), 'btnClose');
        this._bind(this.node.querySelector('.rds-icon-search-text'), 'textSearch');

        this.node.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                _this.close();
            }
        });

        this.node.querySelectorAll('.rds-dashicons-wrapper button').forEach((element) => {
            element.addEventListener("keydown", keydownDashicons);  
        });
        // $(".rds-dashicons-wrapper button").on("keydown", keydownDashicons);  
    }

    #init(){
        const _this = this;

        this.addEventListener('input', (e)=>{
            if(e.detail.handle == 'textSearch') {
                _this.node.querySelectorAll('button[data-icon]').forEach((element) => {
                    element.style.display = 'initial';
                });

                if(this.textSearch){
                    _this.node.querySelectorAll('.rds-dashicons-wrapper :not(button[data-keywords*="'+_this.textSearch+'"], button[data-icon*="'+_this.textSearch+'"])' ).forEach((element) => {
                        element.style.display = 'none';
                    });
                }
            }
        });

        this.addEventListener('buttonClick', (e)=>{
            const handle = e.detail.handle;
            if(handle == 'btnClose'){
                _this.close();
                return;
            }

            if(e.detail.handle.substring(0, 10) == 'dashicons-'){
                this.dispatchEvent (
                    new CustomEvent("iconClick", {
                        bubbles: true,
                        detail: { 
                            handle: handle,
                            icon: _this.elBinded(handle).getAttribute('data-icon'),
                            code: _this.elBinded(handle).getAttribute('data-code') 
                        },
                    }),
                );  
            }            
        });
    }

    close(){
        this.node.classList.remove('active')
        this.dispatchEvent (
            new CustomEvent("close", {
                bubbles: true,
            }),
        );          
    }

    open(){
        this.node.classList.add('active');
        this.dispatchEvent (new CustomEvent("open", {
            bubbles: true,
          }),
        )              
    }
}