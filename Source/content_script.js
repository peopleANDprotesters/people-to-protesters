// the shallowest possible copy of the great https://github.com/panicsteve/cloud-to-butt
// regex stuff from https://github.com/ericwbailey/millennials-to-snake-people


walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
    if (Math.random() < 0.8) {
        v = v.replace(/\bProtester\b/g, "Person");
        v = v.replace(/\bprotester\b/g, "person");
        v = v.replace(/\bProtester(?:(s)\b(')|s\b)/g, "People$2$1");
        v = v.replace(/\bprotester(?:(s)\b(')|s\b)/g, "people$2$1");
    } else {
        v = v.replace(/\bProtester('s|s(?:')?)?\b/g, "Human$1");
        v = v.replace(/\bprotester('s|s(?:')?)?\b/g, "human$1");
    }

	textNode.nodeValue = v;
}
