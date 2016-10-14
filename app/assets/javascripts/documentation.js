//
// Documentation Tables
//

var cssPrefix = '.bff-';

function parseDocumentation(object, name){
	$('#table--'+name+'-documentation').append('<thead> <tr class="bff-text-heading--label"> <th class="bff-size--1-of-3"> <span class="bff-truncate">Class Name</span> </th> <th class="bff-size--1-of-3"> <div class="bff-truncate">Usage</div> </th> <th class="bff-size--1-of-3"> <div class="bff-truncate">Comment</div> </th> </tr> </thead> <tbody id="table__content--'+ name +'-documentation"></tbody>');

	object.forEach(function(datum) {
		$('#table__content--'+name+'-documentation').append('<tr class="bff-align--top"> <td class="bff-cell-wrap"> <div><code>'+ datum.className +'</code></div> </td> <td class="bff-cell-wrap"> <div>'+ datum.usage +'</div> </td> <td class="bff-cell-wrap"> <div>'+ datum.notes +'</div> </td> </tr>');
	});
}

$(document).ready(function(){
	//Utilities
	parseDocumentation(gridDocumentation, 'grid');
	parseDocumentation(spacingDocumentation, 'spacing');
	parseDocumentation(typeDocumentation, 'type');
	parseDocumentation(visibilityDocumentation, 'visibility');
	parseDocumentation(responsiveDocumentation, 'responsive');
	//Atoms
})