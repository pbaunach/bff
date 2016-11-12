//
// Colors
//

function formatColors(object, name){
	object.forEach(function(datum) {
		$('#table__content--'+name+'-grid').append('<div class="example-container bff-p-around--x-small bff-m-bottom--x-small bff-m-right--x-small" style="border-radius:3px; width:18rem"> <div class="bff-m-bottom--x-small" style="background-color:'+datum.hex+'; height:2rem; border-radius:3px"></div> <div>'+datum.colorName+'</div> <div>'+datum.hex+'</div> <code> <div>'+datum.colorVariable+'</div> </code> </div>');
	});
}

var colorsDocumentation = [
	{
		colorName: 'Booker Blue',
		hex: '#00AEEF',
		colorVariable: '$booker--color-blue',
	},
	{
		colorName: 'Booker Blue Light',
		hex: '#43C8F5',
		colorVariable: '$booker--color-blue-light',
	},
	{
		colorName: 'Frederick Green',
		hex: '#54D48A',
		colorVariable: '$frederick--color-green',
	},
	{
		colorName: 'Frederick Green Light',
		hex: '#86E0AA',
		colorVariable: '$frederick--color-green-light',
	},
	{
		colorName: 'White',
		hex: '#FFFFFF',
		colorVariable: '$white',
	},
	{
		colorName: 'Gray Lightest',
		hex: '#F5F7FA',
		colorVariable: '$gray-lightest',
	},
	{
		colorName: 'Gray Lighter',
		hex: '#E6E9ED',
		colorVariable: '$gray-lighter',
	},
	{
		colorName: 'Gray Light',
		hex: '#CCD1D9',
		colorVariable: '$gray-light',
	},
	{
		colorName: 'Gray',
		hex: '#AAB2BD',
		colorVariable: '$gray',
	},
	{
		colorName: 'Gray Dark',
		hex: '#838B91',
		colorVariable: '$gray-dark',
	},
	{
		colorName: 'Gray Darker',
		hex: '#656D78',
		colorVariable: '$gray-darker',
	},
	{
		colorName: 'Gray Darkest',
		hex: '#434A54',
		colorVariable: '$gray-darkest',
	},
	{
		colorName: 'Graperfruit',
		hex: '#DA4453',
		colorVariable: '$grapefruit',
	},
	{
		colorName: 'Grapefruit Light',
		hex: '#ED5565',
		colorVariable: '$grapefruit-light',
	},
	{
		colorName: 'Grapefruit Lighter',
		hex: '#F27789',
		colorVariable: '$grapefruit-lighter',
	},
	{
		colorName: 'Bittersweet',
		hex: '#E9573F',
		colorVariable: '$bittersweet',
	},
	{
		colorName: 'Bittersweet Light',
		hex: '#FC6E51',
		colorVariable: '$bittersweet-light',
	},
	{
		colorName: 'Bittersweet Lighter',
		hex: '#FC8C7A',
		colorVariable: '$bittersweet-lighter',
	},
	{
		colorName: 'Sunflower',
		hex: '#F6BB42',
		colorVariable: '$sunflower',
	},
	{
		colorName: 'Sunflower Light',
		hex: '#FFCE54',
		colorVariable: '$sunflower-light',
	},
	{
		colorName: 'Sunflower Lighter',
		hex: '#FFD983',
		colorVariable: '$sunflower-lighter',
	},
	{
		colorName: 'Grass',
		hex: '#8CC152',
		colorVariable: '$grass',
	},
	{
		colorName: 'Grass Light',
		hex: '#A0D468',
		colorVariable: '$grass-light',
	},
	{
		colorName: 'Grass Lighter',
		hex: '#BADD8A',
		colorVariable: '$grass-lighter',
	},
	{
		colorName: 'Mint',
		hex: '#37BC9B',
		colorVariable: '$mint',
	},
	{
		colorName: 'Mint Light',
		hex: '#48CFAD',
		colorVariable: '$mint-light',
	},
	{
		colorName: 'Mint Lighter',
		hex: '#6FDDBE',
		colorVariable: '$mint-lighter',
	},
	{
		colorName: 'Aqua',
		hex: '#3BAFDA',
		colorVariable: '$aqua',
	},
	{
		colorName: 'Aqua Light',
		hex: '#4FC1E9',
		colorVariable: '$aqua-light',
	},
	{
		colorName: 'Aqua Lighter',
		hex: '#69D1ED',
		colorVariable: '$aqua-lighter',
	},
	{
		colorName: 'Cornflower',
		hex: '#4A89DC',
		colorVariable: '$cornflower',
	},
	{
		colorName: 'Cornflower Light',
		hex: '#5D9CEC',
		colorVariable: '$cornflower-light',
	},
	{
		colorName: 'Cornflower Lighter',
		hex: '#79B3F2',
		colorVariable: '$cornflower-lighter',
	},
	{
		colorName: 'Lavander',
		hex: '#967ADC',
		colorVariable: '$lavander',
	},
	{
		colorName: 'Lavander Light',
		hex: '#AC92EC',
		colorVariable: '$lavander-light',
	},
	{
		colorName: 'Lavander Lighter',
		hex: '#BAA6F4',
		colorVariable: '$lavander-lighter',
	},
	{
		colorName: 'Rose',
		hex: '#D770AD',
		colorVariable: '$rose',
	},
	{
		colorName: 'Rose Light',
		hex: '#EC87C0',
		colorVariable: '$rose-light',
	},
	{
		colorName: 'Rose Lighter',
		hex: '#F4A6D4',
		colorVariable: '$rose-lighter',
	},
]