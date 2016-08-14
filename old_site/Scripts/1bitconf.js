	oneBit = new OneBit('Scripts/1bit.swf');
	oneBit.ready(function() {
		oneBit.specify('color', '#000000');
		oneBit.specify('background', '#FFFFFF');
		oneBit.specify('playerSize', '10');
		oneBit.specify('position', 'after');
		oneBit.specify('analytics', false);
		oneBit.apply('a');
	});