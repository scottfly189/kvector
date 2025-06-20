// définir le contenu
export default {
	router: {
		home: 'accueil',
		system: 'système',
		systemMenu: 'menu système',
		systemRole: 'rôle système',
		systemUser: 'utilisateur système',
		systemDept: 'département système',
		systemDic: 'dictionnaire système',
		limits: 'limites',
		limitsFrontEnd: 'interface',
		limitsFrontEndPage: 'page interface',
		limitsFrontEndBtn: 'bouton interface',
		limitsBackEnd: 'backend',
		limitsBackEndEndPage: 'page backend',
		menu: 'menu',
		menu1: 'menu1',
		menu11: 'menu11',
		menu12: 'menu12',
		menu121: 'menu121',
		menu122: 'menu122',
		menu13: 'menu13',
		menu2: 'menu2',
		funIndex: 'fonction',
		funTagsView: 'vue des tags',
		funCountup: 'compteur',
		funWangEditor: 'éditeur Wang',
		funCropper: 'recadrage',
		funQrcode: 'code QR',
		funEchartsMap: 'carte Echarts',
		funPrintJs: 'impression JS',
		funClipboard: 'copier coller',
		funGridLayout: 'mise en page glisser',
		funSplitpanes: 'séparateur de panneaux',
		funDragVerify: 'validateur',
		pagesIndex: 'pages',
		pagesFiltering: 'filtrage',
		pagesFilteringDetails: 'détails du filtrage',
		pagesFilteringDetails1: 'détails du filtrage 1',
		pagesIocnfont: 'icône iconfont',
		pagesElement: 'icône élément',
		pagesAwesome: 'icône awesome',
		pagesFormAdapt: 'adaptation du formulaire',
		pagesTableRules: 'règles du tableau',
		pagesFormI18n: 'formulaire I18n',
		pagesFormRules: 'validation multi-formulaires',
		pagesDynamicForm: 'formulaire complexe dynamique',
		pagesWorkflow: 'flux de travail',
		pagesListAdapt: 'adaptation de liste',
		pagesWaterfall: 'cascade',
		pagesSteps: 'étapes',
		pagesPreview: 'aperçu large',
		pagesWaves: 'effet de vague',
		pagesTree: 'arbre modifier tableau',
		pagesDrag: 'commande glisser',
		pagesLazyImg: "chargement paresseux d'image",
		makeIndex: 'créer index',
		makeSelector: "sélecteur d'icônes",
		makeNoticeBar: 'barre de notification',
		makeSvgDemo: 'démo Svgicon',
		makeTableDemo: 'démo tableau',
		paramsIndex: 'paramètres de routage',
		paramsCommon: 'routage général',
		paramsDynamic: 'routage dynamique',
		paramsCommonDetails: 'détails routage général',
		paramsDynamicDetails: 'détails routage dynamique',
		chartIndex: 'index graphique',
		visualizingIndex: 'index visualisation',
		visualizingLinkDemo1: 'démo lien visualisation 1',
		visualizingLinkDemo2: 'démo lien visualisation 2',
		personal: 'personnel',
		tools: 'outils',
		layoutLinkView: 'vue lien',
		layoutIframeViewOne: 'vue iframe un',
		layoutIframeViewTwo: 'vue iframe deux',
	},
	staticRoutes: {
		signIn: 'connexion',
		notFound: 'non trouvé',
		noPower: 'sans pouvoir',
	},
	user: {
		title0: 'Taille du composant',
		title1: 'Changement de langue',
		title2: 'Recherche de menu',
		title3: 'Configuration de mise en page',
		title4: 'actualités',
		title5: 'Plein écran activé',
		title6: 'Plein écran désactivé',
		dropdownLarge: 'Grand',
		dropdownDefault: 'Défaut',
		dropdownSmall: 'Petit',
		dropdown1: "page d'accueil",
		dropdown2: 'centre personnel',
		dropdown3: 'vider le cache',
		dropdown4: '401',
		dropdown5: 'déconnexion',
		dropdown6: 'dépôt de code',
		searchPlaceholder: 'Recherche menu: supporte chemin de routage et plus',
		newTitle: 'notification',
		newBtn: 'tout lu',
		newGo: 'aller au centre de notification',
		newDesc: 'pas de notification',
		logOutTitle: 'conseils',
		logOutMessage: 'Cette opération vous déconnectera. Voulez-vous continuer?',
		logOutConfirm: 'confirmer',
		logOutCancel: 'annuler',
		logOutExit: 'sortie',
		chat: 'Chat avec AI',
	},
	tagsView: {
		refresh: 'actualiser',
		close: 'fermer',
		closeOther: 'fermer autres',
		closeAll: 'fermer tout',
		fullscreen: 'plein écran',
		closeFullscreen: 'quitter plein écran',
	},
	notFound: {
		foundTitle: 'Adresse incorrecte, veuillez réessayer~',
		foundMsg: "Vous pouvez vérifier l'adresse web, puis la ressaisir ou nous faire part de vos commentaires.",
		foundBtn: "retour à l'accueil",
	},
	noAccess: {
		accessTitle: "Vous n'êtes pas autorisé à opérer~",
		accessMsg: 'Contact: alexzhao189@gmail.com',
		accessBtn: 'réautorisation',
	},
	layout: {
		themeColors: 'Thèmes de couleur',
		moreColors: 'Plus de couleurs',
		configTitle: 'Configuration de mise en page',
		oneTitle: 'Thèmes globaux',
		twoTopTitle: 'Configuration barre supérieure',
		twoMenuTitle: 'Configuration menu',
		twoColumnsTitle: 'Configuration colonnes',
		twoTopBar: 'Arrière-plan barre supérieure',
		twoTopBarColor: 'Couleur police barre supérieure',
		twoIsTopBarColorGradual: 'Dégradé barre supérieure',
		twoMenuBar: 'Arrière-plan menu',
		twoMenuBarColor: 'Couleur police menu',
		twoMenuBarActiveColor: 'Couleur surbrillance menu',
		twoIsMenuBarColorGradual: 'Dégradé menu',
		twoColumnsMenuBar: 'Arrière-plan menu colonnes',
		twoColumnsMenuBarColor: 'Couleur police menu colonnes',
		twoIsColumnsMenuBarColorGradual: 'Dégradé colonnes',
		twoIsColumnsMenuHoverPreload: 'Préchargement survol menu colonnes',
		twoColumnsLogoHeight: 'Hauteur logo colonnes(px)',
		twoColumnsMenuWidth: 'Largeur menu colonnes(px)',
		twoColumnsMenuHeight: 'Hauteur menu colonnes(px)',
		threeTitle: 'Paramètres interface',
		threeIsCollapse: 'Réduction horizontale menu',
		threeIsUniqueOpened: 'Menu accordéon',
		threeIsFixedHeader: 'En-tête fixe',
		threeIsClassicSplitMenu: 'Menu divisé disposition classique',
		threeIsLockScreen: 'Activer verrouillage écran',
		threeLockScreenTime: 'Verrouillage écran(s/s)',
		fourTitle: 'Affichage interface',
		fourIsShowLogo: 'Logo barre latérale',
		fourIsBreadcrumb: "Activer fil d'Ariane",
		fourIsBreadcrumbIcon: "Activer icône fil d'Ariane",
		fourIsTagsview: 'Activer tagsview',
		fourIsTagsviewIcon: 'Activer icône tagsview',
		fourIsCacheTagsView: 'Activer cache tagsview',
		fourIsSortableTagsView: 'Activer glisser tagsview',
		fourIsShareTagsView: 'Activer partage tagsview',
		fourIsFooter: 'Activer pied de page',
		fourIsGrayscale: 'Mode gris',
		fourIsInvert: 'Mode faible couleur',
		fourIsDark: 'Mode sombre',
		fourIsWatermark: 'Activer filigrane',
		fourWatermarkText: 'Texte filigrane',
		fiveTitle: 'Autres paramètres',
		fiveTagsStyle: 'Style tagsview',
		fiveAnimation: 'Animation page',
		fiveColumnsAsideStyle: 'Style colonnes',
		fiveColumnsAsideLayout: 'Disposition colonnes',
		sixTitle: 'Changement disposition',
		sixDefaults: 'Un',
		sixClassic: 'Deux',
		sixTransverse: 'Trois',
		sixColumns: 'Quatre',
		tipText: 'Cliquez sur le bouton ci-dessous pour copier la configuration de mise en page vers `/src/stores/themeConfig.ts`',
		copyText: 'copier configuration',
		resetText: 'restaurer défaut',
		copyTextSuccess: 'Copie réussie!',
		copyTextError: 'Échec de la copie!',
		unlock: 'unlock',
		confirm: 'confirmer',
		needPassword: 'veuillez entrer le mot de passe',
		chooseStyle: 'veuillez choisir',
		style1: 'style1',
		style4: 'style4',
		style5: 'style5',
		round: 'round',
		card: 'card',
		horizontal: 'horizontal',
		vertical: 'vertical',
		chineseTraditionalColors: 'couleurs traditionnelles chinoises',
		themeColorCopied: 'thème couleur copié',
		globalThemePrimaryColorCannotBeEmpty: 'La couleur primaire du thème global ne peut pas être vide',
	},
	upgrade: {
		title: 'Nouvelle version',
		msg: "Une nouvelle version est disponible, veuillez mettre à jour maintenant! Pas d'inquiétude, la mise à jour est rapide!",
		desc: 'Note: La mise à jour restaurera la configuration par défaut',
		btnOne: 'Refuser',
		btnTwo: 'Mettre à jour maintenant',
		btnTwoLoading: 'Mise à jour en cours',
	},
};
