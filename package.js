Package.describe({
	name: 'useful:visitor',
	version: '0.0.1',
	summary: 'Anonymous User Tracking Platform',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('1.1');

	// ====== BUILT-IN PACKAGES =======

	// ====== 3RD PARTY PACKAGES =======

	api.use('useful:visitor-client', 'client');
	api.imply('useful:visitor-client', 'client');

	api.use('useful:visitor-server', 'server');
	api.imply('useful:visitor-server', 'server');

	// ====== BOTH =======

	// ====== SERVER =======

	// ====== CLIENT =======

	// ====== EXPORTS =======

});

Package.onTest(function(api) {
	api.use('tinytest');
});
