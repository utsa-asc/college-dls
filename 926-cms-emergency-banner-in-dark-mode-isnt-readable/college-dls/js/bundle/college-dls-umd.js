(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('collegeDlsUmdCalendar', factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.collegeDlsUmdCalendar = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jquery = createCommonjsModule(function (module) {
	/*!
	 * jQuery JavaScript Library v3.7.1
	 * https://jquery.com/
	 *
	 * Copyright OpenJS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2023-08-28T13:37Z
	 */
	( function( global, factory ) {

		{

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket trac-14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

	var arr = [];

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var flat = arr.flat ? function( array ) {
		return arr.flat.call( array );
	} : function( array ) {
		return arr.concat.apply( [], array );
	};


	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
			// Plus for old WebKit, typeof returns "function" for HTML collections
			// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
			return typeof obj === "function" && typeof obj.nodeType !== "number" &&
				typeof obj.item !== "function";
		};


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};


	var document = window.document;



		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var version = "3.7.1",

		rhtmlSuffix = /HTML$/i,

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		even: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return ( i + 1 ) % 2;
			} ) );
		},

		odd: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return i % 2;
			} ) );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a provided context; falls back to the global one
		// if not specified.
		globalEval: function( code, options, doc ) {
			DOMEval( code, { nonce: options && options.nonce }, doc );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},


		// Retrieve the text value of an array of DOM nodes
		text: function( elem ) {
			var node,
				ret = "",
				i = 0,
				nodeType = elem.nodeType;

			if ( !nodeType ) {

				// If no nodeType, this is expected to be an array
				while ( ( node = elem[ i++ ] ) ) {

					// Do not traverse comment nodes
					ret += jQuery.text( node );
				}
			}
			if ( nodeType === 1 || nodeType === 11 ) {
				return elem.textContent;
			}
			if ( nodeType === 9 ) {
				return elem.documentElement.textContent;
			}
			if ( nodeType === 3 || nodeType === 4 ) {
				return elem.nodeValue;
			}

			// Do not include comment or processing instruction nodes

			return ret;
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
							[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		isXMLDoc: function( elem ) {
			var namespace = elem && elem.namespaceURI,
				docElem = elem && ( elem.ownerDocument || elem ).documentElement;

			// Assume HTML when documentElement doesn't yet exist, such as inside
			// document fragments.
			return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return flat( ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( _i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
		} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}


	function nodeName( elem, name ) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	}
	var pop = arr.pop;


	var sort = arr.sort;


	var splice = arr.splice;


	var whitespace = "[\\x20\\t\\r\\n\\f]";


	var rtrimCSS = new RegExp(
		"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
		"g"
	);




	// Note: an element does not contain itself
	jQuery.contains = function( a, b ) {
		var bup = b && b.parentNode;

		return a === bup || !!( bup && bup.nodeType === 1 && (

			// Support: IE 9 - 11+
			// IE doesn't have `contains` on SVG.
			a.contains ?
				a.contains( bup ) :
				a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
		) );
	};




	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

	function fcssescape( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	}

	jQuery.escapeSelector = function( sel ) {
		return ( sel + "" ).replace( rcssescape, fcssescape );
	};




	var preferredDoc = document,
		pushNative = push;

	( function() {

	var i,
		Expr,
		outermostContext,
		sortInput,
		hasDuplicate,
		push = pushNative,

		// Local document vars
		document,
		documentElement,
		documentIsHTML,
		rbuggyQSA,
		matches,

		// Instance-specific data
		expando = jQuery.expando,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
			"loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
		identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

		// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +

			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
			whitespace + "*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
			whitespace + "*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			ID: new RegExp( "^#(" + identifier + ")" ),
			CLASS: new RegExp( "^\\.(" + identifier + ")" ),
			TAG: new RegExp( "^(" + identifier + "|[*])" ),
			ATTR: new RegExp( "^" + attributes ),
			PSEUDO: new RegExp( "^" + pseudos ),
			CHILD: new RegExp(
				"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
					whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
					whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			needsContext: new RegExp( "^" + whitespace +
				"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
				"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\([^\\r\\n\\f])", "g" ),
		funescape = function( escape, nonHex ) {
			var high = "0x" + escape.slice( 1 ) - 0x10000;

			if ( nonHex ) {

				// Strip the backslash prefix from a non-hex escape sequence
				return nonHex;
			}

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			return high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes; see `setDocument`.
		// Support: IE 9 - 11+, Edge 12 - 18+
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE/Edge.
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && nodeName( elem, "fieldset" );
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			( arr = slice.call( preferredDoc.childNodes ) ),
			preferredDoc.childNodes
		);

		// Support: Android <=4.0
		// Detect silently failing push.apply
		// eslint-disable-next-line no-unused-expressions
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = {
			apply: function( target, els ) {
				pushNative.apply( target, slice.call( els ) );
			},
			call: function( target ) {
				pushNative.apply( target, slice.call( arguments, 1 ) );
			}
		};
	}

	function find( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
			setDocument( context );
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

					// ID selector
					if ( ( m = match[ 1 ] ) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( ( elem = context.getElementById( m ) ) ) {

								// Support: IE 9 only
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									push.call( results, elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( newContext && ( elem = newContext.getElementById( m ) ) &&
								find.contains( context, elem ) &&
								elem.id === m ) {

								push.call( results, elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[ 2 ] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( !nonnativeSelectorCache[ selector + " " ] &&
					( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// The technique has to be used as well when a leading combinator is used
					// as such selectors are not recognized by querySelectorAll.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 &&
						( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;

						// We can use :scope instead of the ID hack if the browser
						// supports it & if we're not changing the context.
						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when
						// strict-comparing two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( newContext != context || !support.scope ) {

							// Capture the context ID, setting it first if necessary
							if ( ( nid = context.getAttribute( "id" ) ) ) {
								nid = jQuery.escapeSelector( nid );
							} else {
								context.setAttribute( "id", ( nid = expando ) );
							}
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
								toSelector( groups[ i ] );
						}
						newSelector = groups.join( "," );
					}

					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {

			// Use (key + " ") to avoid collision with native prototype properties
			// (see https://github.com/jquery/sizzle/issues/157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return ( cache[ key + " " ] = value );
		}
		return cache;
	}

	/**
	 * Mark a function for special use by jQuery selector module
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement( "fieldset" );

		try {
			return !!fn( el );
		} catch ( e ) {
			return false;
		} finally {

			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}

			// release memory in IE
			el = null;
		}
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			return nodeName( elem, "input" ) && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
				elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11+
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						elem.isDisabled !== !disabled &&
							inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction( function( argument ) {
			argument = +argument;
			return markFunction( function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
						seed[ j ] = !( matches[ j ] = seed[ j ] );
					}
				}
			} );
		} );
	}

	/**
	 * Checks a node for validity as a jQuery selector context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [node] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	function setDocument( node ) {
		var subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		documentElement = document.documentElement;
		documentIsHTML = !jQuery.isXMLDoc( document );

		// Support: iOS 7 only, IE 9 - 11+
		// Older browsers didn't support unprefixed `matches`.
		matches = documentElement.matches ||
			documentElement.webkitMatchesSelector ||
			documentElement.msMatchesSelector;

		// Support: IE 9 - 11+, Edge 12 - 18+
		// Accessing iframe documents after unload throws "permission denied" errors
		// (see trac-13936).
		// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
		// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
		if ( documentElement.msMatchesSelector &&

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			preferredDoc != document &&
			( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

			// Support: IE 9 - 11+, Edge 12 - 18+
			subWindow.addEventListener( "unload", unloadHandler );
		}

		// Support: IE <10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert( function( el ) {
			documentElement.appendChild( el ).id = jQuery.expando;
			return !document.getElementsByName ||
				!document.getElementsByName( jQuery.expando ).length;
		} );

		// Support: IE 9 only
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node.
		support.disconnectedMatch = assert( function( el ) {
			return matches.call( el, "*" );
		} );

		// Support: IE 9 - 11+, Edge 12 - 18+
		// IE/Edge don't support the :scope pseudo-class.
		support.scope = assert( function() {
			return document.querySelectorAll( ":scope" );
		} );

		// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
		// Make sure the `:has()` argument is parsed unforgivingly.
		// We include `*` in the test to detect buggy implementations that are
		// _selectively_ forgiving (specifically when the list includes at least
		// one valid selector).
		// Note that we treat complete lack of support for `:has()` as if it were
		// spec-compliant support, which is fine because use of `:has()` in such
		// environments will fail in the qSA path and fall back to jQuery traversal
		// anyway.
		support.cssHas = assert( function() {
			try {
				document.querySelector( ":has(*,:jqfake)" );
				return false;
			} catch ( e ) {
				return true;
			}
		} );

		// ID filter and find
		if ( support.getById ) {
			Expr.filter.ID = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute( "id" ) === attrId;
				};
			};
			Expr.find.ID = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter.ID =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode( "id" );
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find.ID = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( ( elem = elems[ i++ ] ) ) {
							node = elem.getAttributeNode( "id" );
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find.TAG = function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else {
				return context.querySelectorAll( tag );
			}
		};

		// Class
		Expr.find.CLASS = function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		rbuggyQSA = [];

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			documentElement.appendChild( el ).innerHTML =
				"<a id='" + expando + "' href='' disabled='disabled'></a>" +
				"<select id='" + expando + "-\r\\' disabled='disabled'>" +
				"<option selected=''></option></select>";

			// Support: iOS <=7 - 8 only
			// Boolean attributes and "value" are not treated correctly in some XML documents
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: iOS <=7 - 8 only
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: iOS 8 only
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
			// In some of the document kinds, these selectors wouldn't work natively.
			// This is probably OK but for backwards compatibility we want to maintain
			// handling them through jQuery traversal in jQuery 3.x.
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE 9 - 11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
			// In some of the document kinds, these selectors wouldn't work natively.
			// This is probably OK but for backwards compatibility we want to maintain
			// handling them through jQuery traversal in jQuery 3.x.
			documentElement.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}
		} );

		if ( !support.cssHas ) {

			// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
			// Our regular `try-catch` mechanism fails to detect natively-unsupported
			// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
			// in browsers that parse the `:has()` argument as a forgiving selector list.
			// https://drafts.csswg.org/selectors/#relational now requires the argument
			// to be parsed unforgivingly, but browsers have not yet fully adjusted.
			rbuggyQSA.push( ":has" );
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

				// Choose the first element that is related to our preferred document
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( a === document || a.ownerDocument == preferredDoc &&
					find.contains( preferredDoc, a ) ) {
					return -1;
				}

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( b === document || b.ownerDocument == preferredDoc &&
					find.contains( preferredDoc, b ) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		};

		return document;
	}

	find.matches = function( expr, elements ) {
		return find( expr, null, null, elements );
	};

	find.matchesSelector = function( elem, expr ) {
		setDocument( elem );

		if ( documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||

						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch ( e ) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return find( expr, document, null, [ elem ] ).length > 0;
	};

	find.contains = function( context, elem ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( context.ownerDocument || context ) != document ) {
			setDocument( context );
		}
		return jQuery.contains( context, elem );
	};


	find.attr = function( elem, name ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( elem.ownerDocument || elem ) != document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			// Don't get fooled by Object.prototype properties (see trac-13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		if ( val !== undefined ) {
			return val;
		}

		return elem.getAttribute( name );
	};

	find.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	jQuery.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		//
		// Support: Android <=4.0+
		// Testing for detecting duplicates is unpredictable so instead assume we can't
		// depend on duplicate detection in all browsers without a stable sort.
		hasDuplicate = !support.sortStable;
		sortInput = !support.sortStable && slice.call( results, 0 );
		sort.call( results, sortOrder );

		if ( hasDuplicate ) {
			while ( ( elem = results[ i++ ] ) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				splice.call( results, duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	jQuery.fn.uniqueSort = function() {
		return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
	};

	Expr = jQuery.expr = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			ATTR: function( match ) {
				match[ 1 ] = match[ 1 ].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
					.replace( runescape, funescape );

				if ( match[ 2 ] === "~=" ) {
					match[ 3 ] = " " + match[ 3 ] + " ";
				}

				return match.slice( 0, 4 );
			},

			CHILD: function( match ) {

				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[ 1 ] = match[ 1 ].toLowerCase();

				if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

					// nth-* requires argument
					if ( !match[ 3 ] ) {
						find.error( match[ 0 ] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[ 4 ] = +( match[ 4 ] ?
						match[ 5 ] + ( match[ 6 ] || 1 ) :
						2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
					);
					match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
				} else if ( match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				return match;
			},

			PSEUDO: function( match ) {
				var excess,
					unquoted = !match[ 6 ] && match[ 2 ];

				if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[ 3 ] ) {
					match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&

					// Get excess from tokenize (recursively)
					( excess = tokenize( unquoted, true ) ) &&

					// advance to the next closing parenthesis
					( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

					// excess is a negative index
					match[ 0 ] = match[ 0 ].slice( 0, excess );
					match[ 2 ] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			TAG: function( nodeNameSelector ) {
				var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() {
						return true;
					} :
					function( elem ) {
						return nodeName( elem, expectedNodeName );
					};
			},

			CLASS: function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					( pattern = new RegExp( "(^|" + whitespace + ")" + className +
						"(" + whitespace + "|$)" ) ) &&
					classCache( className, function( elem ) {
						return pattern.test(
							typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
						);
					} );
			},

			ATTR: function( name, operator, check ) {
				return function( elem ) {
					var result = find.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					if ( operator === "=" ) {
						return result === check;
					}
					if ( operator === "!=" ) {
						return result !== check;
					}
					if ( operator === "^=" ) {
						return check && result.indexOf( check ) === 0;
					}
					if ( operator === "*=" ) {
						return check && result.indexOf( check ) > -1;
					}
					if ( operator === "$=" ) {
						return check && result.slice( -check.length ) === check;
					}
					if ( operator === "~=" ) {
						return ( " " + result.replace( rwhitespace, " " ) + " " )
							.indexOf( check ) > -1;
					}
					if ( operator === "|=" ) {
						return result === check || result.slice( 0, check.length + 1 ) === check + "-";
					}

					return false;
				};
			},

			CHILD: function( type, what, _argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, _context, xml ) {
						var cache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( ( node = node[ dir ] ) ) {
										if ( ofType ?
											nodeName( node, name ) :
											node.nodeType === 1 ) {

											return false;
										}
									}

									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || ( parent[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( ( node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								// Use previously-cached element index if available
								if ( useCache ) {
									outerCache = elem[ expando ] || ( elem[ expando ] = {} );
									cache = outerCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {

									// Use the same loop as above to seek `elem` from the start
									while ( ( node = ++nodeIndex && node && node[ dir ] ||
										( diff = nodeIndex = 0 ) || start.pop() ) ) {

										if ( ( ofType ?
											nodeName( node, name ) :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] ||
													( node[ expando ] = {} );
												outerCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			PSEUDO: function( pseudo, argument ) {

				// pseudo-class names are case-insensitive
				// https://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						find.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as jQuery does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction( function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[ i ] );
								seed[ idx ] = !( matches[ idx ] = matched[ i ] );
							}
						} ) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			// Potentially complex pseudos
			not: markFunction( function( selector ) {

				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrimCSS, "$1" ) );

				return matcher[ expando ] ?
					markFunction( function( seed, matches, _context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( ( elem = unmatched[ i ] ) ) {
								seed[ i ] = !( matches[ i ] = elem );
							}
						}
					} ) :
					function( elem, _context, xml ) {
						input[ 0 ] = elem;
						matcher( input, null, xml, results );

						// Don't keep the element
						// (see https://github.com/jquery/sizzle/issues/299)
						input[ 0 ] = null;
						return !results.pop();
					};
			} ),

			has: markFunction( function( selector ) {
				return function( elem ) {
					return find( selector, elem ).length > 0;
				};
			} ),

			contains: markFunction( function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
				};
			} ),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// https://www.w3.org/TR/selectors/#lang-pseudo
			lang: markFunction( function( lang ) {

				// lang value must be a valid identifier
				if ( !ridentifier.test( lang || "" ) ) {
					find.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( ( elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
					return false;
				};
			} ),

			// Miscellaneous
			target: function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			root: function( elem ) {
				return elem === documentElement;
			},

			focus: function( elem ) {
				return elem === safeActiveElement() &&
					document.hasFocus() &&
					!!( elem.type || elem.href || ~elem.tabIndex );
			},

			// Boolean properties
			enabled: createDisabledPseudo( false ),
			disabled: createDisabledPseudo( true ),

			checked: function( elem ) {

				// In CSS3, :checked should return both checked and selected elements
				// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				return ( nodeName( elem, "input" ) && !!elem.checked ) ||
					( nodeName( elem, "option" ) && !!elem.selected );
			},

			selected: function( elem ) {

				// Support: IE <=11+
				// Accessing the selectedIndex property
				// forces the browser to treat the default option as
				// selected when in an optgroup.
				if ( elem.parentNode ) {
					// eslint-disable-next-line no-unused-expressions
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			empty: function( elem ) {

				// https://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			parent: function( elem ) {
				return !Expr.pseudos.empty( elem );
			},

			// Element/input types
			header: function( elem ) {
				return rheader.test( elem.nodeName );
			},

			input: function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			button: function( elem ) {
				return nodeName( elem, "input" ) && elem.type === "button" ||
					nodeName( elem, "button" );
			},

			text: function( elem ) {
				var attr;
				return nodeName( elem, "input" ) && elem.type === "text" &&

					// Support: IE <10 only
					// New HTML5 attribute values (e.g., "search") appear
					// with elem.type === "text"
					( ( attr = elem.getAttribute( "type" ) ) == null ||
						attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			first: createPositionalPseudo( function() {
				return [ 0 ];
			} ),

			last: createPositionalPseudo( function( _matchIndexes, length ) {
				return [ length - 1 ];
			} ),

			eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			} ),

			even: createPositionalPseudo( function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			odd: createPositionalPseudo( function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i;

				if ( argument < 0 ) {
					i = argument + length;
				} else if ( argument > length ) {
					i = length;
				} else {
					i = argument;
				}

				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} )
		}
	};

	Expr.pseudos.nth = Expr.pseudos.eq;

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
				if ( match ) {

					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[ 0 ].length ) || soFar;
				}
				groups.push( ( tokens = [] ) );
			}

			matched = false;

			// Combinators
			if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,

					// Cast descendant combinators to space
					type: match[ 0 ].replace( rtrimCSS, " " )
				} );
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
					( match = preFilters[ type ]( match ) ) ) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		if ( parseOnly ) {
			return soFar.length;
		}

		return soFar ?
			find.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
	}

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[ i ].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?

			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || ( elem[ expando ] = {} );

							if ( skip && nodeName( elem, skip ) ) {
								elem = elem[ dir ] || elem;
							} else if ( ( oldCache = outerCache[ key ] ) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return ( newCache[ 2 ] = oldCache[ 2 ] );
							} else {

								// Reuse newcache so results back-propagate to previous elements
								outerCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[ i ]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[ 0 ];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			find( selector, contexts[ i ], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( ( elem = unmatched[ i ] ) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction( function( seed, results, context, xml ) {
			var temp, i, elem, matcherOut,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed ||
					multipleContexts( selector || "*",
						context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems;

			if ( matcher ) {

				// If we have a postFinder, or filtered seed, or non-seed postFilter
				// or preexisting results,
				matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results;

				// Find primary matches
				matcher( matcherIn, matcherOut, context, xml );
			} else {
				matcherOut = matcherIn;
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( ( elem = temp[ i ] ) ) {
						matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( ( elem = matcherOut[ i ] ) ) {

								// Restore matcherIn since elem is not yet a final match
								temp.push( ( matcherIn[ i ] = elem ) );
							}
						}
						postFinder( null, ( matcherOut = [] ), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) &&
							( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

							seed[ temp ] = !( results[ temp ] = elem );
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		} );
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[ 0 ].type ],
			implicitRelative = leadingRelative || Expr.relative[ " " ],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
					( checkContext = context ).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				// Avoid hanging onto element
				// (see https://github.com/jquery/sizzle/issues/299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
				matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
			} else {
				matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {

					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[ j ].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 )
								.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
						).replace( rtrimCSS, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find.TAG( "*", outermost ),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
					len = elems.length;

				if ( outermost ) {

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					outermostContext = context == document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: iOS <=7 - 9 only
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
				// elements by id. (see trac-14142)
				for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;

						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
						// two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( !context && elem.ownerDocument != document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( ( matcher = elementMatchers[ j++ ] ) ) {
							if ( matcher( elem, context || document, xml ) ) {
								push.call( results, elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {

						// They will have gone through all possible matchers
						if ( ( elem = !matcher && elem ) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( ( matcher = setMatchers[ j++ ] ) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
									setMatched[ i ] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						jQuery.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	function compile( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[ i ] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector,
				matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	}

	/**
	 * A low-level selection function that works with jQuery's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with jQuery selector compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( ( selector = compiled.selector || selector ) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[ 0 ] = match[ 0 ].slice( 0 );
			if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

				context = ( Expr.find.ID(
					token.matches[ 0 ].replace( runescape, funescape ),
					context
				) || [] )[ 0 ];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[ i ];

				// Abort if we hit a combinator
				if ( Expr.relative[ ( type = token.type ) ] ) {
					break;
				}
				if ( ( find = Expr.find[ type ] ) ) {

					// Search, expanding context for leading sibling combinators
					if ( ( seed = find(
						token.matches[ 0 ].replace( runescape, funescape ),
						rsibling.test( tokens[ 0 ].type ) &&
							testContext( context.parentNode ) || context
					) ) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	}

	// One-time assignments

	// Support: Android <=4.0 - 4.1+
	// Sort stability
	support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

	// Initialize against the default document
	setDocument();

	// Support: Android <=4.0 - 4.1+
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert( function( el ) {

		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
	} );

	jQuery.find = find;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.unique = jQuery.uniqueSort;

	// These have always been private, but they used to be documented as part of
	// Sizzle so let's maintain them for now for backwards compatibility purposes.
	find.compile = compile;
	find.select = select;
	find.setDocument = setDocument;
	find.tokenize = tokenize;

	find.escape = jQuery.escapeSelector;
	find.getText = jQuery.text;
	find.isXML = jQuery.isXMLDoc;
	find.selectors = jQuery.expr;
	find.support = jQuery.support;
	find.uniqueSort = jQuery.uniqueSort;

		/* eslint-enable */

	} )();


	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
		// Strict HTML recognition (trac-11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to jQuery#find
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, _i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, _i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, _i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( elem.contentDocument != null &&

				// Support: IE 11+
				// <object> elements with no `data` attribute has an object
				// `contentDocument` with a `null` prototype.
				getProto( elem.contentDocument ) ) {

				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( _i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.error );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the error, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getErrorHook ) {
										process.error = jQuery.Deferred.getErrorHook();

									// The deprecated alias of the above. While the name suggests
									// returning the stack, not an error instance, jQuery just passes
									// it directly to `console.warn` so both will work; an instance
									// just better cooperates with source maps.
									} else if ( jQuery.Deferred.getStackHook ) {
										process.error = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the primary Deferred
				primary = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							primary.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( primary.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return primary.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
			}

			return primary.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
	// captured before the async barrier to get the original error cause
	// which may otherwise be hidden.
	jQuery.Deferred.exceptionHook = function( error, asyncError ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message,
				error.stack, asyncError );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See trac-6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, _key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
							value :
							value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( _all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (trac-9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see trac-8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (trac-14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (trac-11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (trac-14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// Support: IE <=9 only
		// IE <=9 replaces <option> tags with their contents when inserted outside of
		// the select element.
		div.innerHTML = "<option></option>";
		support.option = !!div.lastChild;
	} )();


	// We have to close these tags to support XHTML (trac-13200)
	var wrapMap = {

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: IE <=9 only
	if ( !support.option ) {
		wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
	}


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (trac-12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Only attach events to objects that accept data
			if ( !acceptData( elem ) ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = Object.create( null );
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( nativeEvent ),

				handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (trac-13208)
					// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (trac-13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", true );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, isSetup ) {

		// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
		if ( !isSetup ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					if ( !saved ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						this[ type ]();
						result = dataPriv.get( this, type );
						dataPriv.set( this, type, false );

						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();

							return result;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering
					// the native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved ) {

					// ...and capture the result
					dataPriv.set( this, type, jQuery.event.trigger(
						saved[ 0 ],
						saved.slice( 1 ),
						this
					) );

					// Abort handling of the native event by all jQuery handlers while allowing
					// native handlers on the same element to run. On target, this is achieved
					// by stopping immediate propagation just on the jQuery event. However,
					// the native event is re-wrapped by a jQuery one on each level of the
					// propagation so the only way to stop it for jQuery is to stop it for
					// everyone via native `stopPropagation()`. This is not a problem for
					// focus/blur which don't bubble, but it does also stop click on checkboxes
					// and radios. We accept this limitation.
					event.stopPropagation();
					event.isImmediatePropagationStopped = returnTrue;
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (trac-504, trac-13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

		function focusMappedHandler( nativeEvent ) {
			if ( document.documentMode ) {

				// Support: IE 11+
				// Attach a single focusin/focusout handler on the document while someone wants
				// focus/blur. This is because the former are synchronous in IE while the latter
				// are async. In other browsers, all those handlers are invoked synchronously.

				// `handle` from private data would already wrap the event, but we need
				// to change the `type` here.
				var handle = dataPriv.get( this, "handle" ),
					event = jQuery.event.fix( nativeEvent );
				event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
				event.isSimulated = true;

				// First, handle focusin/focusout
				handle( nativeEvent );

				// ...then, handle focus/blur
				//
				// focus/blur don't bubble while focusin/focusout do; simulate the former by only
				// invoking the handler at the lower level.
				if ( event.target === event.currentTarget ) {

					// The setup part calls `leverageNative`, which, in turn, calls
					// `jQuery.event.add`, so event handle will already have been set
					// by this point.
					handle( event );
				}
			} else {

				// For non-IE browsers, attach a single capturing handler on the document
				// while someone wants focusin/focusout.
				jQuery.event.simulate( delegateType, nativeEvent.target,
					jQuery.event.fix( nativeEvent ) );
			}
		}

		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				var attaches;

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, true );

				if ( document.documentMode ) {

					// Support: IE 9 - 11+
					// We use the same native handler for focusin & focus (and focusout & blur)
					// so we need to coordinate setup & teardown parts between those events.
					// Use `delegateType` as the key as `type` is already used by `leverageNative`.
					attaches = dataPriv.get( this, delegateType );
					if ( !attaches ) {
						this.addEventListener( delegateType, focusMappedHandler );
					}
					dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
				} else {

					// Return false to allow normal processing in the caller
					return false;
				}
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			teardown: function() {
				var attaches;

				if ( document.documentMode ) {
					attaches = dataPriv.get( this, delegateType ) - 1;
					if ( !attaches ) {
						this.removeEventListener( delegateType, focusMappedHandler );
						dataPriv.remove( this, delegateType );
					} else {
						dataPriv.set( this, delegateType, attaches );
					}
				} else {

					// Return false to indicate standard teardown should be applied
					return false;
				}
			},

			// Suppress native focus or blur if we're currently inside
			// a leveraged native-event stack
			_default: function( event ) {
				return dataPriv.get( event.target, type );
			},

			delegateType: delegateType
		};

		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		//
		// Support: IE 9 - 11+
		// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
		// attach a single handler for both events in IE.
		jQuery.event.special[ delegateType ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					dataHolder = document.documentMode ? this : doc,
					attaches = dataPriv.get( dataHolder, delegateType );

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				if ( !attaches ) {
					if ( document.documentMode ) {
						this.addEventListener( delegateType, focusMappedHandler );
					} else {
						doc.addEventListener( type, focusMappedHandler, true );
					}
				}
				dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					dataHolder = document.documentMode ? this : doc,
					attaches = dataPriv.get( dataHolder, delegateType ) - 1;

				if ( !attaches ) {
					if ( document.documentMode ) {
						this.removeEventListener( delegateType, focusMappedHandler );
					} else {
						doc.removeEventListener( type, focusMappedHandler, true );
					}
					dataPriv.remove( dataHolder, delegateType );
				} else {
					dataPriv.set( dataHolder, delegateType, attaches );
				}
			}
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

		rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.get( src );
			events = pdataOld.events;

			if ( events ) {
				dataPriv.remove( dest, "handle events" );

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = flat( args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (trac-8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Re-enable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									}, doc );
								}
							} else {

								// Unwrap a CDATA section containing script contents. This shouldn't be
								// needed as in XML documents they're already not visible when
								// inspecting element contents and in HTML documents they have no
								// meaning but we're preserving that logic for backwards compatibility.
								// This will be removed completely in 4.0. See gh-4904.
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html;
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew jQuery#find here for performance reasons:
				// https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var rcustomProp = /^--/;


	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableTrDimensionsVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (trac-8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			},

			// Support: IE 9 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Behavior in IE 9 is more subtle than in newer versions & it passes
			// some versions of this test; make sure not to make it pass there!
			//
			// Support: Firefox 70+
			// Only Firefox includes border widths
			// in computed dimensions. (gh-4529)
			reliableTrDimensions: function() {
				var table, tr, trChild, trStyle;
				if ( reliableTrDimensionsVal == null ) {
					table = document.createElement( "table" );
					tr = document.createElement( "tr" );
					trChild = document.createElement( "div" );

					table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
					tr.style.cssText = "box-sizing:content-box;border:1px solid";

					// Support: Chrome 86+
					// Height set through cssText does not get applied.
					// Computed height then comes back as 0.
					tr.style.height = "1px";
					trChild.style.height = "9px";

					// Support: Android 8 Chrome 86+
					// In our bodyBackground.html iframe,
					// display for all div elements is set to "inline",
					// which causes a problem only in Android 8 Chrome 86.
					// Ensuring the div is `display: block`
					// gets around this issue.
					trChild.style.display = "block";

					documentElement
						.appendChild( table )
						.appendChild( tr )
						.appendChild( trChild );

					trStyle = window.getComputedStyle( tr );
					reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
						parseInt( trStyle.borderTopWidth, 10 ) +
						parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

					documentElement.removeChild( table );
				}
				return reliableTrDimensionsVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			isCustomProp = rcustomProp.test( name ),

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, trac-12537)
		//   .css('--customProperty) (gh-3144)
		if ( computed ) {

			// Support: IE <=9 - 11+
			// IE only supports `"float"` in `getPropertyValue`; in computed styles
			// it's only available as `"cssFloat"`. We no longer modify properties
			// sent to `.css()` apart from camelCasing, so we need to check both.
			// Normally, this would create difference in behavior: if
			// `getPropertyValue` returns an empty string, the value returned
			// by `.css()` would be `undefined`. This is usually the case for
			// disconnected elements. However, in IE even disconnected elements
			// with no styles return `"none"` for `getPropertyValue( "float" )`
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( isCustomProp && ret ) {

				// Support: Firefox 105+, Chrome <=105+
				// Spec requires trimming whitespace for custom properties (gh-4926).
				// Firefox only trims leading whitespace. Chrome just collapses
				// both leading & trailing whitespace to a single space.
				//
				// Fall back to `undefined` if empty string returned.
				// This collapses a missing definition with property defined
				// and set to an empty string but there's no standard API
				// allowing us to differentiate them without a performance penalty
				// and returning `undefined` aligns with older jQuery.
				//
				// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
				// as whitespace while CSS does not, but this is not a problem
				// because CSS preprocessing replaces them with U+000A LINE FEED
				// (which *is* CSS whitespace)
				// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
				ret = ret.replace( rtrimCSS, "$1" ) || undefined;
			}

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( _elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0,
			marginDelta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			// Count margin delta separately to only add it after scroll gutter adjustment.
			// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
			if ( box === "margin" ) {
				marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta + marginDelta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Support: IE 9 - 11 only
		// Use offsetWidth/offsetHeight for when box sizing is unreliable.
		// In those cases, the computed value can be trusted to be border-box.
		if ( ( !support.boxSizingReliable() && isBorderBox ||

			// Support: IE 10 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Interestingly, in some cases IE 9 doesn't suffer from this issue.
			!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			val === "auto" ||

			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

			// Make sure the element is visible & connected
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			animationIterationCount: true,
			aspectRatio: true,
			borderImageSlice: true,
			columnCount: true,
			flexGrow: true,
			flexShrink: true,
			fontWeight: true,
			gridArea: true,
			gridColumn: true,
			gridColumnEnd: true,
			gridColumnStart: true,
			gridRow: true,
			gridRowEnd: true,
			gridRowStart: true,
			lineHeight: true,
			opacity: true,
			order: true,
			orphans: true,
			scale: true,
			widows: true,
			zIndex: true,
			zoom: true,

			// SVG-related
			fillOpacity: true,
			floodOpacity: true,
			stopOpacity: true,
			strokeMiterlimit: true,
			strokeOpacity: true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (trac-7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug trac-9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (trac-7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( _i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};

			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// Use proper attribute retrieval (trac-12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classNames, cur, curValue, className, i, finalValue;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classNames = classesToArray( value );

			if ( classNames.length ) {
				return this.each( function() {
					curValue = getClass( this );
					cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						for ( i = 0; i < classNames.length; i++ ) {
							className = classNames[ i ];
							if ( cur.indexOf( " " + className + " " ) < 0 ) {
								cur += className + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							this.setAttribute( "class", finalValue );
						}
					}
				} );
			}

			return this;
		},

		removeClass: function( value ) {
			var classNames, cur, curValue, className, i, finalValue;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classNames = classesToArray( value );

			if ( classNames.length ) {
				return this.each( function() {
					curValue = getClass( this );

					// This expression is here for better compressibility (see addClass)
					cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						for ( i = 0; i < classNames.length; i++ ) {
							className = classNames[ i ];

							// Remove *all* instances
							while ( cur.indexOf( " " + className + " " ) > -1 ) {
								cur = cur.replace( " " + className + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							this.setAttribute( "class", finalValue );
						}
					}
				} );
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var classNames, className, i, self,
				type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			classNames = classesToArray( value );

			return this.each( function() {
				if ( isValidValue ) {

					// Toggle individual class names
					self = jQuery( this );

					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
								"" :
								dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (trac-14686, trac-14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (trac-2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion
	var location = window.location;

	var nonce = { guid: Date.now() };

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, parserErrorElem;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {}

		parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
		if ( !xml || parserErrorElem ) {
			jQuery.error( "Invalid XML: " + (
				parserErrorElem ?
					jQuery.map( parserErrorElem.childNodes, function( el ) {
						return el.textContent;
					} ).join( "\n" ) :
					data
			) );
		}
		return xml;
	};


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (trac-9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (trac-6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} ).filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} ).map( function( _i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// trac-7653, trac-8125, trac-8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );

	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes trac-9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (trac-10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket trac-12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// trac-9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
						uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Use a noop converter for missing script but not if jsonp
				if ( !isSuccess &&
					jQuery.inArray( "script", s.dataTypes ) > -1 &&
					jQuery.inArray( "json", s.dataTypes ) < 0 ) {
					s.converters[ "text script" ] = function() {};
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( _i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery.ajaxPrefilter( function( s ) {
		var i;
		for ( i in s.headers ) {
			if ( i.toLowerCase() === "content-type" ) {
				s.contentType = s.headers[ i ] || "";
			}
		}
	} );


	jQuery._evalUrl = function( url, options, doc ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (trac-11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options, doc );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// trac-1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see trac-8605, trac-14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// trac-14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( _i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( {
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( _i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},

		hover: function( fnOver, fnOut ) {
			return this
				.on( "mouseenter", fnOver )
				.on( "mouseleave", fnOut || fnOver );
		}
	} );

	jQuery.each(
		( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( _i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		}
	);




	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	// Require that the "whitespace run" starts from a non-whitespace
	// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
	var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};

	jQuery.trim = function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "$1" );
	};




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (trac-13566)
	if ( typeof noGlobal === "undefined" ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );
	});

	createCommonjsModule(function (module, exports) {
	(function (factory) { 
	{ 
	 // Node/CommonJS 
	 factory(jquery); 
	 } 
	 }(function($) { 

	/*>>core*/
	/**
	 * 
	 * Magnific Popup Core JS file
	 * 
	 */


	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


	/**
	 * Private vars 
	 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function(){},
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;


	/**
	 * Private functions
	 */
	var _mfpOn = function(name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
		},
		_getEl = function(className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-'+className;
			if(html) {
				el.innerHTML = html;
			}
			if(!raw) {
				el = $(el);
				if(appendTo) {
					el.appendTo(appendTo);
				}
			} else if(appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function(e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if(mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if(mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, Array.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function(type) {
			if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function() {
			if(!$.magnificPopup.instance) {
				/*jshint -W020 */
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function() {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms','O','Moz','Webkit']; // 'v' for vendor

			if( s['transition'] !== undefined ) {
				return true; 
			}
				
			while( v.length ) {
				if( v.pop() + 'Transition' in s ) {
					return true;
				}
			}
					
			return false;
		};



	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
		 * Initializes Magnific Popup plugin. 
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function() {
			var appVersion = navigator.appVersion;
			mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function(data) {

			var i;

			if(data.isObj === false) { 
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
					item;
				for(i = 0; i < items.length; i++) {
					item = items[i];
					if(item.parsed) {
						item = item.el[0];
					}
					if(item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = Array.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if(mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}
			
			mfp.types = []; 
			_wrapClasses = '';
			if(data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if(data.key) {
				if(!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}



			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if(mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}
			

			// Building markup
			// main containers are created only once
			if(!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
					if(mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if(mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}


			// Initializing modules
			var modules = $.magnificPopup.modules;
			for(i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init'+n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');


			if(mfp.st.showCloseBtn) {
				// Close button
				if(!mfp.st.closeBtnInside) {
					mfp.wrap.append( _getCloseBtn() );
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if(mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}

		

			if(mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({ 
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}

			

			if(mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function(e) {
					if(e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function() {
				mfp.updateSize();
			});


			if(!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}
			
			if(_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);


			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();

			
			var windowStyles = {};

			if( mfp.fixedContentPos ) {
	            if(mfp._hasScrollBar(windowHeight)){
	                var s = mfp._getScrollbarSize();
	                if(s) {
	                    windowStyles.marginRight = s;
	                }
	            }
	        }

			if(mfp.fixedContentPos) {
				if(!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}

			
			
			var classesToadd = mfp.st.mainClass;
			if(mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if(classesToadd) {
				mfp._addClassToMFP( classesToadd );
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);
			
			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;
			
			// Wait for next cycle to allow CSS transition
			setTimeout(function() {
				
				if(mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}
				
				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
		 * Closes the popup
		 */
		close: function() {
			if(!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function() {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
		 * Helper for close() function
		 */
		_close: function() {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if(mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if(mfp.fixedContentPos) {
				var windowStyles = {marginRight: ''};
				if(mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}
			
			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if(mfp.st.showCloseBtn &&
			(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if(mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}


			if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).trigger('focus'); // put tab focus back
			}
			mfp.currItem = null;	
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},
		
		updateSize: function(winHeight) {

			if(mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if(!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');

		},

		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function() {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if(mfp.content)
				mfp.content.detach();

			if(!item.parsed) {
				item = mfp.parseEl( mfp.index );
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;

			if(!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if(markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if(_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},


		/**
		 * Set HTML content of popup
		 */
		appendContent: function(newContent, type) {
			mfp.content = newContent;

			if(newContent) {
				if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if(!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-'+type+'-holder');

			mfp.contentContainer.append(mfp.content);
		},


		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function(index) {
			var item = mfp.items[index],
				type;

			if(item.tagName) {
				item = { el: $(item) };
			} else {
				type = item.type;
				item = { data: item, src: item.src };
			}

			if(item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for(var i = 0; i < types.length; i++) {
					if( item.el.hasClass('mfp-'+types[i]) ) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if(!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},


		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function(el, options) {
			var eHandler = function(e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if(!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if(options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if(options.delegate) {
					el.off(eName).on(eName, options.delegate , eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function(e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


			if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if(disableOn) {
				if(typeof disableOn === "function") {
					if( !disableOn.call(mfp) ) {
						return true;
					}
				} else { // else it's number
					if( _window.width() < disableOn ) {
						return true;
					}
				}
			}

			if(e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if(mfp.isOpen) {
					e.stopPropagation();
				}
			}

			options.el = $(e.mfpEl);
			if(options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},


		/**
		 * Updates text on preloader
		 */
		updateStatus: function(status, text) {

			if(mfp.preloader) {
				if(_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-'+_prevStatus);
				}

				if(!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				if (mfp.st.allowHTMLInStatusIndicator) {
					mfp.preloader.html(text);
				} else {
					mfp.preloader.text(text);
				}

				mfp.preloader.find('a').on('click', function(e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-'+status);
				_prevStatus = status;
			}
		},


		/*
			"Private" helpers that aren't private at all
		 */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function(target) {

			if($(target).closest('.' + PREVENT_CLOSE_CLASS).length) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if(closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if(!mfp.content || $(target).closest('.mfp-close').length || (mfp.preloader && target === mfp.preloader[0]) ) {
					return true;
				}

				// if click is outside the content
				if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
					if(closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if( $.contains(document, target) ) {
							return true;
						}
					}
				} else if(closeOnContent) {
					return true;
				}

			}
			return false;
		},
		_addClassToMFP: function(cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function(cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function(winHeight) {
			return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
		},
		_setFocus: function() {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).trigger('focus');
		},
		_onFocusIn: function(e) {
			if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function(template, values, item) {
			var arr;
			if(item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

			$.each(values, function(key, value) {
				if(value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if(arr.length > 1) {
					var el = template.find(EVENT_NS + '-'+arr[0]);

					if(el.length > 0) {
						var attr = arr[1];
						if(attr === 'replaceWith') {
							if(el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if(attr === 'img') {
							if(el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
							}
						} else {
							el.attr(arr[1], value);
						}
					}

				} else {
					if (mfp.st.allowHTMLInTemplate) {
						template.find(EVENT_NS + '-'+key).html(value);
					} else {
						template.find(EVENT_NS + '-'+key).text(value);
					}
				}
			});
		},

		_getScrollbarSize: function() {
			// thx David
			if(mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */




	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function(options, index) {
			_checkInstance();

			if(!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}

			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function() {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function(name, module) {
			if(module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			prependTo: null,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...',

			autoFocusLast: true,

			allowHTMLInStatusIndicator: false,

			allowHTMLInTemplate: false

		}
	};



	$.fn.magnificPopup = function(options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string" ) {

			if(options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;

				if(itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if(itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq( index );
				}
				mfp._openClick({mfpEl:items}, jqEl, itemOpts);
			} else {
				if(mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}

		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
			 * As Zepto doesn't support .data() method for objects
			 * and it works only in normal browsers
			 * we assign "options" object directly to the DOM element. FTW!
			 */
			if(_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);

		}
		return jqEl;
	};

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder,
		_lastInlineElement,
		_putInlineElementsBack = function() {
			if(_lastInlineElement) {
				_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
				_lastInlineElement = null;
			}
		};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function() {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
					_putInlineElementsBack();
				});
			},

			getInline: function(item, template) {

				_putInlineElementsBack();

				if(item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);

					if(el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if(parent && parent.tagName) {
							if(!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-'+_hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function() {
			if(_ajaxCur) {
				$(document.body).removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function() {
			_removeAjaxCursor();
			if(mfp.req) {
				mfp.req.abort();
			}
		};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: 'The content could not be loaded.'
		},

		proto: {
			initAjax: function() {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function(item) {

				if(_ajaxCur) {
					$(document.body).addClass(_ajaxCur);
				}

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function(data, textStatus, jqXHR) {
						var temp = {
							data:data,
							xhr:jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent( $(temp.data), AJAX_NS );

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function() {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function() {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
		_getTitle = function(item) {
			if(item.data && item.data.title !== undefined)
				return item.data.title;

			var src = mfp.st.image.titleSrc;

			if(src) {
				if(typeof src === "function") {
					return src.call(mfp, item);
				} else if(item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">'+
						'<div class="mfp-close"></div>'+
						'<figure>'+
							'<div class="mfp-img"></div>'+
							'<figcaption>'+
								'<div class="mfp-bottom-bar">'+
									'<div class="mfp-title"></div>'+
									'<div class="mfp-counter"></div>'+
								'</div>'+
							'</figcaption>'+
						'</figure>'+
					'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: 'The image could not be loaded.'
		},

		proto: {
			initImage: function() {
				var imgSt = mfp.st.image,
					ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT+ns, function() {
					if(mfp.currItem.type === 'image' && imgSt.cursor) {
						$(document.body).addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT+ns, function() {
					if(imgSt.cursor) {
						$(document.body).removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize'+ns, mfp.resizeImage);
				if(mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function() {
				var item = mfp.currItem;
				if(!item || !item.img) return;

				if(mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if(mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
					}
					item.img.css('max-height', mfp.wH-decr);
				}
			},
			_onImageHasSize: function(item) {
				if(item.img) {

					item.hasSize = true;

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if(item.imgHidden) {
						if(mfp.content)
							mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}

				}
			},

			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function(item) {

				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function(delay) {

						if(_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function() {
							if(img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}

							if(counter > 200) {
								clearInterval(_imgInterval);
							}

							counter++;
							if(counter === 3) {
								mfpSetInterval(10);
							} else if(counter === 40) {
								mfpSetInterval(50);
							} else if(counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};

				mfpSetInterval(1);
			},

			getImage: function(item, template) {

				var guard = 0,

					imgSt = mfp.st.image,

					// image error handler
					onLoadError = function() {
						if(item) {
							item.img.off('.mfploader');
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
							}

							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},

					// image load complete handler
					onLoadComplete = function() {
						if(item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');

								if(item === mfp.currItem){
									mfp._onImageHasSize(item);

									mfp.updateStatus('ready');
								}

								item.hasSize = true;
								item.loaded = true;

								_mfpTrigger('ImageLoadComplete');

							}
							else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if(guard < 200) {
									setTimeout(onLoadComplete,100);
								} else {
									onLoadError();
								}
							}
						}
					};
					


				var el = template.find('.mfp-img');
				if(el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if(item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if(el.is('img')) {
						item.img = item.img.clone();
					}

					img = item.img[0];
					if(img.naturalWidth > 0) {
						item.hasSize = true;
					} else if(!img.width) {
						item.hasSize = false;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if(item.hasSize) {
					if(_imgInterval) clearInterval(_imgInterval);

					if(item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if(!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function() {
			if(hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
		};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function() {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;

				if(!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
					getElToAnimate = function(image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';

						cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function() {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;

				_mfpOn('BuildControls'+ns, function() {
					if(mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if(!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css( mfp._getOffset() );

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function() {
							animatedImg.css( mfp._getOffset( true ) );
							openTimeout = setTimeout(function() {

								showMainContent();

								setTimeout(function() {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images

							}, duration); // this timeout equals animation duration

						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if(!image) {
							image = mfp._getItemToZoom();
							if(!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}

						animatedImg.css( mfp._getOffset(true) );
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function() {
							animatedImg.css( mfp._getOffset() );
						}, 16);
					}

				});

				_mfpOn(CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {
						showMainContent();
						if(animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function() {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function() {
				if(mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function(isLarge) {
				var el;
				if(isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'),10);
				var paddingBottom = parseInt(el.css('padding-bottom'),10);
				offset.top -= ( $(window).scrollTop() - paddingTop );


				/*

				Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

				 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if( getHasMozTransform() ) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});



	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',

		_fixIframeBugs = function(isShowing) {
			if(mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if(el.length) {
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if(!isShowing) {
						el[0].src = _emptyPage;
					}

					// IE8 black screen bug fix
					if(mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
					'</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function() {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function(e, prevType, newType) {
					if(prevType !== newType) {
						if(prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if(newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					}// else {
						// iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
					_fixIframeBugs();
				});
			},

			getIframe: function(item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function() {
					if(embedSrc.indexOf( this.index ) > -1) {
						if(this.id) {
							if(typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call( this, embedSrc );
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc );
						return false; // break;
					}
				});

				var dataObj = {};
				if(iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}

				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});



	/*>>iframe*/

	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function(index) {
			var numSlides = mfp.items.length;
			if(index > numSlides - 1) {
				return index - numSlides;
			} else  if(index < 0) {
				return numSlides + index;
			}
			return index;
		},
		_replaceCurrTotal = function(text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0,2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%',
			
			langDir: null,
			loop: true,
		},

		proto: {
			initGallery: function() {

				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery';

				mfp.direction = true; // true - next, false - prev

				if(!gSt || !gSt.enabled ) return false;
				
				if (!gSt.langDir) {
					gSt.langDir = document.dir || 'ltr';
				}

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT+ns, function() {

					if(gSt.navigateByImgClick) {
						mfp.wrap.on('click'+ns, '.mfp-img', function() {
							if(mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown'+ns, function(e) {
						if (e.keyCode === 37) {
							if (gSt.langDir === 'rtl') mfp.next();
							else mfp.prev();
						} else if (e.keyCode === 39) {
							if (gSt.langDir === 'rtl') mfp.prev();
							else mfp.next();
						}
					});

					mfp.updateGalleryButtons();

				});

				_mfpOn('UpdateStatus'+ns, function(/*e, data*/) {
					mfp.updateGalleryButtons();
				});

				_mfpOn('UpdateStatus'+ns, function(e, data) {
					if(data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function() {
					if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {

						var arrowLeftDesc, arrowRightDesc, arrowLeftAction, arrowRightAction;

						if (gSt.langDir === 'rtl') {
							arrowLeftDesc = gSt.tNext;
							arrowRightDesc = gSt.tPrev;
							arrowLeftAction = 'next';
							arrowRightAction = 'prev';
						} else {
							arrowLeftDesc = gSt.tPrev;
							arrowRightDesc = gSt.tNext;
							arrowLeftAction = 'prev';
							arrowRightAction = 'next';
						}

						var markup     = gSt.arrowMarkup,
						    arrowLeft  = mfp.arrowLeft = $( markup.replace(/%title%/gi, arrowLeftDesc).replace(/%action%/gi, arrowLeftAction).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						    arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, arrowRightDesc).replace(/%action%/gi, arrowRightAction).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

						if (gSt.langDir === 'rtl') {
							mfp.arrowNext = arrowLeft;
							mfp.arrowPrev = arrowRight;
						} else {
							mfp.arrowNext = arrowRight;
							mfp.arrowPrev = arrowLeft;
						}

						arrowLeft.on('click', function() {
							if (gSt.langDir === 'rtl') mfp.next();
							else mfp.prev();
						});
						arrowRight.on('click', function() {
							if (gSt.langDir === 'rtl') mfp.prev();
							else mfp.next();
						});

						mfp.container.append(arrowLeft.add(arrowRight));

					}
				});

				_mfpOn(CHANGE_EVENT+ns, function() {
					if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function() {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});


				_mfpOn(CLOSE_EVENT+ns, function() {
					_document.off(ns);
					mfp.wrap.off('click'+ns);
					mfp.arrowRight = mfp.arrowLeft = null;
				});

			},
			next: function() {
				var newIndex = _getLoopedId(mfp.index + 1);
				if (!mfp.st.gallery.loop && newIndex === 0 ) return false;
				mfp.direction = true;
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			prev: function() {
				var newIndex = mfp.index - 1;
				if (!mfp.st.gallery.loop && newIndex < 0) return false;
				mfp.direction = false;
				mfp.index = _getLoopedId(newIndex);
				mfp.updateItemHTML();
			},
			goTo: function(newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function() {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;

				for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index+i);
				}
				for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index-i);
				}
			},
			_preloadItem: function(index) {
				index = _getLoopedId(index);

				if(mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if(!item.parsed) {
					item = mfp.parseEl( index );
				}

				_mfpTrigger('LazyLoad', item);

				if(item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
						item.hasSize = true;
					}).on('error.mfploader', function() {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}


				item.preloaded = true;
			},

			/**
			 * Show/hide the gallery prev/next buttons if we're at the start/end, if looping is turned off
			 * Added by Joloco for Veg
			 */
			updateGalleryButtons: function() {

				if ( !mfp.st.gallery.loop && typeof mfp.arrowPrev === 'object' && mfp.arrowPrev !== null) {

					if (mfp.index === 0) mfp.arrowPrev.hide();
					else mfp.arrowPrev.show();

					if (mfp.index === (mfp.items.length - 1)) mfp.arrowNext.hide();
					else mfp.arrowNext.show();

				}

			},

		}

	});


	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function(item) {
				return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function() {
				if(window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
						ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if(ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}

			}
		}
	});

	/*>>retina*/
	 _checkInstance(); }));
	});

	var popper$1 = createCommonjsModule(function (module, exports) {
	/**
	 * @popperjs/core v2.11.8 - MIT License
	 */

	(function (global, factory) {
	  factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	  function getWindow(node) {
	    if (node == null) {
	      return window;
	    }

	    if (node.toString() !== '[object Window]') {
	      var ownerDocument = node.ownerDocument;
	      return ownerDocument ? ownerDocument.defaultView || window : window;
	    }

	    return node;
	  }

	  function isElement(node) {
	    var OwnElement = getWindow(node).Element;
	    return node instanceof OwnElement || node instanceof Element;
	  }

	  function isHTMLElement(node) {
	    var OwnElement = getWindow(node).HTMLElement;
	    return node instanceof OwnElement || node instanceof HTMLElement;
	  }

	  function isShadowRoot(node) {
	    // IE 11 has no ShadowRoot
	    if (typeof ShadowRoot === 'undefined') {
	      return false;
	    }

	    var OwnElement = getWindow(node).ShadowRoot;
	    return node instanceof OwnElement || node instanceof ShadowRoot;
	  }

	  var max = Math.max;
	  var min = Math.min;
	  var round = Math.round;

	  function getUAString() {
	    var uaData = navigator.userAgentData;

	    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
	      return uaData.brands.map(function (item) {
	        return item.brand + "/" + item.version;
	      }).join(' ');
	    }

	    return navigator.userAgent;
	  }

	  function isLayoutViewport() {
	    return !/^((?!chrome|android).)*safari/i.test(getUAString());
	  }

	  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
	    if (includeScale === void 0) {
	      includeScale = false;
	    }

	    if (isFixedStrategy === void 0) {
	      isFixedStrategy = false;
	    }

	    var clientRect = element.getBoundingClientRect();
	    var scaleX = 1;
	    var scaleY = 1;

	    if (includeScale && isHTMLElement(element)) {
	      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
	      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
	    }

	    var _ref = isElement(element) ? getWindow(element) : window,
	        visualViewport = _ref.visualViewport;

	    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
	    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
	    var width = clientRect.width / scaleX;
	    var height = clientRect.height / scaleY;
	    return {
	      width: width,
	      height: height,
	      top: y,
	      right: x + width,
	      bottom: y + height,
	      left: x,
	      x: x,
	      y: y
	    };
	  }

	  function getWindowScroll(node) {
	    var win = getWindow(node);
	    var scrollLeft = win.pageXOffset;
	    var scrollTop = win.pageYOffset;
	    return {
	      scrollLeft: scrollLeft,
	      scrollTop: scrollTop
	    };
	  }

	  function getHTMLElementScroll(element) {
	    return {
	      scrollLeft: element.scrollLeft,
	      scrollTop: element.scrollTop
	    };
	  }

	  function getNodeScroll(node) {
	    if (node === getWindow(node) || !isHTMLElement(node)) {
	      return getWindowScroll(node);
	    } else {
	      return getHTMLElementScroll(node);
	    }
	  }

	  function getNodeName(element) {
	    return element ? (element.nodeName || '').toLowerCase() : null;
	  }

	  function getDocumentElement(element) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
	    element.document) || window.document).documentElement;
	  }

	  function getWindowScrollBarX(element) {
	    // If <html> has a CSS width greater than the viewport, then this will be
	    // incorrect for RTL.
	    // Popper 1 is broken in this case and never had a bug report so let's assume
	    // it's not an issue. I don't think anyone ever specifies width on <html>
	    // anyway.
	    // Browsers where the left scrollbar doesn't cause an issue report `0` for
	    // this (e.g. Edge 2019, IE11, Safari)
	    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	  }

	  function getComputedStyle(element) {
	    return getWindow(element).getComputedStyle(element);
	  }

	  function isScrollParent(element) {
	    // Firefox wants us to check `-x` and `-y` variations as well
	    var _getComputedStyle = getComputedStyle(element),
	        overflow = _getComputedStyle.overflow,
	        overflowX = _getComputedStyle.overflowX,
	        overflowY = _getComputedStyle.overflowY;

	    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	  }

	  function isElementScaled(element) {
	    var rect = element.getBoundingClientRect();
	    var scaleX = round(rect.width) / element.offsetWidth || 1;
	    var scaleY = round(rect.height) / element.offsetHeight || 1;
	    return scaleX !== 1 || scaleY !== 1;
	  } // Returns the composite rect of an element relative to its offsetParent.
	  // Composite means it takes into account transforms as well as layout.


	  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	    if (isFixed === void 0) {
	      isFixed = false;
	    }

	    var isOffsetParentAnElement = isHTMLElement(offsetParent);
	    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	    var documentElement = getDocumentElement(offsetParent);
	    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
	    var scroll = {
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	    var offsets = {
	      x: 0,
	      y: 0
	    };

	    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	      isScrollParent(documentElement)) {
	        scroll = getNodeScroll(offsetParent);
	      }

	      if (isHTMLElement(offsetParent)) {
	        offsets = getBoundingClientRect(offsetParent, true);
	        offsets.x += offsetParent.clientLeft;
	        offsets.y += offsetParent.clientTop;
	      } else if (documentElement) {
	        offsets.x = getWindowScrollBarX(documentElement);
	      }
	    }

	    return {
	      x: rect.left + scroll.scrollLeft - offsets.x,
	      y: rect.top + scroll.scrollTop - offsets.y,
	      width: rect.width,
	      height: rect.height
	    };
	  }

	  // means it doesn't take into account transforms.

	  function getLayoutRect(element) {
	    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	    // Fixes https://github.com/popperjs/popper-core/issues/1223

	    var width = element.offsetWidth;
	    var height = element.offsetHeight;

	    if (Math.abs(clientRect.width - width) <= 1) {
	      width = clientRect.width;
	    }

	    if (Math.abs(clientRect.height - height) <= 1) {
	      height = clientRect.height;
	    }

	    return {
	      x: element.offsetLeft,
	      y: element.offsetTop,
	      width: width,
	      height: height
	    };
	  }

	  function getParentNode(element) {
	    if (getNodeName(element) === 'html') {
	      return element;
	    }

	    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
	      // $FlowFixMe[incompatible-return]
	      // $FlowFixMe[prop-missing]
	      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	      element.parentNode || ( // DOM Element detected
	      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
	      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	      getDocumentElement(element) // fallback

	    );
	  }

	  function getScrollParent(node) {
	    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	      // $FlowFixMe[incompatible-return]: assume body is always available
	      return node.ownerDocument.body;
	    }

	    if (isHTMLElement(node) && isScrollParent(node)) {
	      return node;
	    }

	    return getScrollParent(getParentNode(node));
	  }

	  /*
	  given a DOM element, return the list of all scroll parents, up the list of ancesors
	  until we get to the top window object. This list is what we attach scroll listeners
	  to, because if any of these parent elements scroll, we'll need to re-calculate the
	  reference element's position.
	  */

	  function listScrollParents(element, list) {
	    var _element$ownerDocumen;

	    if (list === void 0) {
	      list = [];
	    }

	    var scrollParent = getScrollParent(element);
	    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	    var win = getWindow(scrollParent);
	    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	    var updatedList = list.concat(target);
	    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	    updatedList.concat(listScrollParents(getParentNode(target)));
	  }

	  function isTableElement(element) {
	    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	  }

	  function getTrueOffsetParent(element) {
	    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	    getComputedStyle(element).position === 'fixed') {
	      return null;
	    }

	    return element.offsetParent;
	  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
	  // return the containing block


	  function getContainingBlock(element) {
	    var isFirefox = /firefox/i.test(getUAString());
	    var isIE = /Trident/i.test(getUAString());

	    if (isIE && isHTMLElement(element)) {
	      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	      var elementCss = getComputedStyle(element);

	      if (elementCss.position === 'fixed') {
	        return null;
	      }
	    }

	    var currentNode = getParentNode(element);

	    if (isShadowRoot(currentNode)) {
	      currentNode = currentNode.host;
	    }

	    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	      // create a containing block.
	      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	        return currentNode;
	      } else {
	        currentNode = currentNode.parentNode;
	      }
	    }

	    return null;
	  } // Gets the closest ancestor positioned element. Handles some edge cases,
	  // such as table ancestors and cross browser bugs.


	  function getOffsetParent(element) {
	    var window = getWindow(element);
	    var offsetParent = getTrueOffsetParent(element);

	    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
	      offsetParent = getTrueOffsetParent(offsetParent);
	    }

	    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
	      return window;
	    }

	    return offsetParent || getContainingBlock(element) || window;
	  }

	  var top = 'top';
	  var bottom = 'bottom';
	  var right = 'right';
	  var left = 'left';
	  var auto = 'auto';
	  var basePlacements = [top, bottom, right, left];
	  var start = 'start';
	  var end = 'end';
	  var clippingParents = 'clippingParents';
	  var viewport = 'viewport';
	  var popper = 'popper';
	  var reference = 'reference';
	  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	    return acc.concat([placement + "-" + start, placement + "-" + end]);
	  }, []);
	  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	  }, []); // modifiers that need to read the DOM

	  var beforeRead = 'beforeRead';
	  var read = 'read';
	  var afterRead = 'afterRead'; // pure-logic modifiers

	  var beforeMain = 'beforeMain';
	  var main = 'main';
	  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	  var beforeWrite = 'beforeWrite';
	  var write = 'write';
	  var afterWrite = 'afterWrite';
	  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	  function order(modifiers) {
	    var map = new Map();
	    var visited = new Set();
	    var result = [];
	    modifiers.forEach(function (modifier) {
	      map.set(modifier.name, modifier);
	    }); // On visiting object, check for its dependencies and visit them recursively

	    function sort(modifier) {
	      visited.add(modifier.name);
	      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	      requires.forEach(function (dep) {
	        if (!visited.has(dep)) {
	          var depModifier = map.get(dep);

	          if (depModifier) {
	            sort(depModifier);
	          }
	        }
	      });
	      result.push(modifier);
	    }

	    modifiers.forEach(function (modifier) {
	      if (!visited.has(modifier.name)) {
	        // check for visited object
	        sort(modifier);
	      }
	    });
	    return result;
	  }

	  function orderModifiers(modifiers) {
	    // order based on dependencies
	    var orderedModifiers = order(modifiers); // order based on phase

	    return modifierPhases.reduce(function (acc, phase) {
	      return acc.concat(orderedModifiers.filter(function (modifier) {
	        return modifier.phase === phase;
	      }));
	    }, []);
	  }

	  function debounce(fn) {
	    var pending;
	    return function () {
	      if (!pending) {
	        pending = new Promise(function (resolve) {
	          Promise.resolve().then(function () {
	            pending = undefined;
	            resolve(fn());
	          });
	        });
	      }

	      return pending;
	    };
	  }

	  function mergeByName(modifiers) {
	    var merged = modifiers.reduce(function (merged, current) {
	      var existing = merged[current.name];
	      merged[current.name] = existing ? Object.assign({}, existing, current, {
	        options: Object.assign({}, existing.options, current.options),
	        data: Object.assign({}, existing.data, current.data)
	      }) : current;
	      return merged;
	    }, {}); // IE11 does not support Object.values

	    return Object.keys(merged).map(function (key) {
	      return merged[key];
	    });
	  }

	  function getViewportRect(element, strategy) {
	    var win = getWindow(element);
	    var html = getDocumentElement(element);
	    var visualViewport = win.visualViewport;
	    var width = html.clientWidth;
	    var height = html.clientHeight;
	    var x = 0;
	    var y = 0;

	    if (visualViewport) {
	      width = visualViewport.width;
	      height = visualViewport.height;
	      var layoutViewport = isLayoutViewport();

	      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
	        x = visualViewport.offsetLeft;
	        y = visualViewport.offsetTop;
	      }
	    }

	    return {
	      width: width,
	      height: height,
	      x: x + getWindowScrollBarX(element),
	      y: y
	    };
	  }

	  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

	  function getDocumentRect(element) {
	    var _element$ownerDocumen;

	    var html = getDocumentElement(element);
	    var winScroll = getWindowScroll(element);
	    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	    var y = -winScroll.scrollTop;

	    if (getComputedStyle(body || html).direction === 'rtl') {
	      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	    }

	    return {
	      width: width,
	      height: height,
	      x: x,
	      y: y
	    };
	  }

	  function contains(parent, child) {
	    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	    if (parent.contains(child)) {
	      return true;
	    } // then fallback to custom implementation with Shadow DOM support
	    else if (rootNode && isShadowRoot(rootNode)) {
	        var next = child;

	        do {
	          if (next && parent.isSameNode(next)) {
	            return true;
	          } // $FlowFixMe[prop-missing]: need a better way to handle this...


	          next = next.parentNode || next.host;
	        } while (next);
	      } // Give up, the result is false


	    return false;
	  }

	  function rectToClientRect(rect) {
	    return Object.assign({}, rect, {
	      left: rect.x,
	      top: rect.y,
	      right: rect.x + rect.width,
	      bottom: rect.y + rect.height
	    });
	  }

	  function getInnerBoundingClientRect(element, strategy) {
	    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
	    rect.top = rect.top + element.clientTop;
	    rect.left = rect.left + element.clientLeft;
	    rect.bottom = rect.top + element.clientHeight;
	    rect.right = rect.left + element.clientWidth;
	    rect.width = element.clientWidth;
	    rect.height = element.clientHeight;
	    rect.x = rect.left;
	    rect.y = rect.top;
	    return rect;
	  }

	  function getClientRectFromMixedType(element, clippingParent, strategy) {
	    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	  } // A "clipping parent" is an overflowable container with the characteristic of
	  // clipping (or hiding) overflowing elements with a position different from
	  // `initial`


	  function getClippingParents(element) {
	    var clippingParents = listScrollParents(getParentNode(element));
	    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
	    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	    if (!isElement(clipperElement)) {
	      return [];
	    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


	    return clippingParents.filter(function (clippingParent) {
	      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	    });
	  } // Gets the maximum area that the element is visible in due to any number of
	  // clipping parents


	  function getClippingRect(element, boundary, rootBoundary, strategy) {
	    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	    var firstClippingParent = clippingParents[0];
	    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
	      accRect.top = max(rect.top, accRect.top);
	      accRect.right = min(rect.right, accRect.right);
	      accRect.bottom = min(rect.bottom, accRect.bottom);
	      accRect.left = max(rect.left, accRect.left);
	      return accRect;
	    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
	    clippingRect.width = clippingRect.right - clippingRect.left;
	    clippingRect.height = clippingRect.bottom - clippingRect.top;
	    clippingRect.x = clippingRect.left;
	    clippingRect.y = clippingRect.top;
	    return clippingRect;
	  }

	  function getBasePlacement(placement) {
	    return placement.split('-')[0];
	  }

	  function getVariation(placement) {
	    return placement.split('-')[1];
	  }

	  function getMainAxisFromPlacement(placement) {
	    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	  }

	  function computeOffsets(_ref) {
	    var reference = _ref.reference,
	        element = _ref.element,
	        placement = _ref.placement;
	    var basePlacement = placement ? getBasePlacement(placement) : null;
	    var variation = placement ? getVariation(placement) : null;
	    var commonX = reference.x + reference.width / 2 - element.width / 2;
	    var commonY = reference.y + reference.height / 2 - element.height / 2;
	    var offsets;

	    switch (basePlacement) {
	      case top:
	        offsets = {
	          x: commonX,
	          y: reference.y - element.height
	        };
	        break;

	      case bottom:
	        offsets = {
	          x: commonX,
	          y: reference.y + reference.height
	        };
	        break;

	      case right:
	        offsets = {
	          x: reference.x + reference.width,
	          y: commonY
	        };
	        break;

	      case left:
	        offsets = {
	          x: reference.x - element.width,
	          y: commonY
	        };
	        break;

	      default:
	        offsets = {
	          x: reference.x,
	          y: reference.y
	        };
	    }

	    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	    if (mainAxis != null) {
	      var len = mainAxis === 'y' ? 'height' : 'width';

	      switch (variation) {
	        case start:
	          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	          break;

	        case end:
	          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	          break;
	      }
	    }

	    return offsets;
	  }

	  function getFreshSideObject() {
	    return {
	      top: 0,
	      right: 0,
	      bottom: 0,
	      left: 0
	    };
	  }

	  function mergePaddingObject(paddingObject) {
	    return Object.assign({}, getFreshSideObject(), paddingObject);
	  }

	  function expandToHashMap(value, keys) {
	    return keys.reduce(function (hashMap, key) {
	      hashMap[key] = value;
	      return hashMap;
	    }, {});
	  }

	  function detectOverflow(state, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var _options = options,
	        _options$placement = _options.placement,
	        placement = _options$placement === void 0 ? state.placement : _options$placement,
	        _options$strategy = _options.strategy,
	        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
	        _options$boundary = _options.boundary,
	        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	        _options$rootBoundary = _options.rootBoundary,
	        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	        _options$elementConte = _options.elementContext,
	        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	        _options$altBoundary = _options.altBoundary,
	        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	        _options$padding = _options.padding,
	        padding = _options$padding === void 0 ? 0 : _options$padding;
	    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	    var altContext = elementContext === popper ? reference : popper;
	    var popperRect = state.rects.popper;
	    var element = state.elements[altBoundary ? altContext : elementContext];
	    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
	    var referenceClientRect = getBoundingClientRect(state.elements.reference);
	    var popperOffsets = computeOffsets({
	      reference: referenceClientRect,
	      element: popperRect,
	      strategy: 'absolute',
	      placement: placement
	    });
	    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	    // 0 or negative = within the clipping rect

	    var overflowOffsets = {
	      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	    };
	    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	    if (elementContext === popper && offsetData) {
	      var offset = offsetData[placement];
	      Object.keys(overflowOffsets).forEach(function (key) {
	        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	        overflowOffsets[key] += offset[axis] * multiply;
	      });
	    }

	    return overflowOffsets;
	  }

	  var DEFAULT_OPTIONS = {
	    placement: 'bottom',
	    modifiers: [],
	    strategy: 'absolute'
	  };

	  function areValidElements() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return !args.some(function (element) {
	      return !(element && typeof element.getBoundingClientRect === 'function');
	    });
	  }

	  function popperGenerator(generatorOptions) {
	    if (generatorOptions === void 0) {
	      generatorOptions = {};
	    }

	    var _generatorOptions = generatorOptions,
	        _generatorOptions$def = _generatorOptions.defaultModifiers,
	        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	        _generatorOptions$def2 = _generatorOptions.defaultOptions,
	        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	    return function createPopper(reference, popper, options) {
	      if (options === void 0) {
	        options = defaultOptions;
	      }

	      var state = {
	        placement: 'bottom',
	        orderedModifiers: [],
	        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	        modifiersData: {},
	        elements: {
	          reference: reference,
	          popper: popper
	        },
	        attributes: {},
	        styles: {}
	      };
	      var effectCleanupFns = [];
	      var isDestroyed = false;
	      var instance = {
	        state: state,
	        setOptions: function setOptions(setOptionsAction) {
	          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	          cleanupModifierEffects();
	          state.options = Object.assign({}, defaultOptions, state.options, options);
	          state.scrollParents = {
	            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	            popper: listScrollParents(popper)
	          }; // Orders the modifiers based on their dependencies and `phase`
	          // properties

	          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	          state.orderedModifiers = orderedModifiers.filter(function (m) {
	            return m.enabled;
	          });
	          runModifierEffects();
	          return instance.update();
	        },
	        // Sync update – it will always be executed, even if not necessary. This
	        // is useful for low frequency updates where sync behavior simplifies the
	        // logic.
	        // For high frequency updates (e.g. `resize` and `scroll` events), always
	        // prefer the async Popper#update method
	        forceUpdate: function forceUpdate() {
	          if (isDestroyed) {
	            return;
	          }

	          var _state$elements = state.elements,
	              reference = _state$elements.reference,
	              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	          // anymore

	          if (!areValidElements(reference, popper)) {
	            return;
	          } // Store the reference and popper rects to be read by modifiers


	          state.rects = {
	            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	            popper: getLayoutRect(popper)
	          }; // Modifiers have the ability to reset the current update cycle. The
	          // most common use case for this is the `flip` modifier changing the
	          // placement, which then needs to re-run all the modifiers, because the
	          // logic was previously ran for the previous placement and is therefore
	          // stale/incorrect

	          state.reset = false;
	          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	          // is filled with the initial data specified by the modifier. This means
	          // it doesn't persist and is fresh on each update.
	          // To ensure persistent data, use `${name}#persistent`

	          state.orderedModifiers.forEach(function (modifier) {
	            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	          });

	          for (var index = 0; index < state.orderedModifiers.length; index++) {
	            if (state.reset === true) {
	              state.reset = false;
	              index = -1;
	              continue;
	            }

	            var _state$orderedModifie = state.orderedModifiers[index],
	                fn = _state$orderedModifie.fn,
	                _state$orderedModifie2 = _state$orderedModifie.options,
	                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	                name = _state$orderedModifie.name;

	            if (typeof fn === 'function') {
	              state = fn({
	                state: state,
	                options: _options,
	                name: name,
	                instance: instance
	              }) || state;
	            }
	          }
	        },
	        // Async and optimistically optimized update – it will not be executed if
	        // not necessary (debounced to run at most once-per-tick)
	        update: debounce(function () {
	          return new Promise(function (resolve) {
	            instance.forceUpdate();
	            resolve(state);
	          });
	        }),
	        destroy: function destroy() {
	          cleanupModifierEffects();
	          isDestroyed = true;
	        }
	      };

	      if (!areValidElements(reference, popper)) {
	        return instance;
	      }

	      instance.setOptions(options).then(function (state) {
	        if (!isDestroyed && options.onFirstUpdate) {
	          options.onFirstUpdate(state);
	        }
	      }); // Modifiers have the ability to execute arbitrary code before the first
	      // update cycle runs. They will be executed in the same order as the update
	      // cycle. This is useful when a modifier adds some persistent data that
	      // other modifiers need to use, but the modifier is run after the dependent
	      // one.

	      function runModifierEffects() {
	        state.orderedModifiers.forEach(function (_ref) {
	          var name = _ref.name,
	              _ref$options = _ref.options,
	              options = _ref$options === void 0 ? {} : _ref$options,
	              effect = _ref.effect;

	          if (typeof effect === 'function') {
	            var cleanupFn = effect({
	              state: state,
	              name: name,
	              instance: instance,
	              options: options
	            });

	            var noopFn = function noopFn() {};

	            effectCleanupFns.push(cleanupFn || noopFn);
	          }
	        });
	      }

	      function cleanupModifierEffects() {
	        effectCleanupFns.forEach(function (fn) {
	          return fn();
	        });
	        effectCleanupFns = [];
	      }

	      return instance;
	    };
	  }

	  var passive = {
	    passive: true
	  };

	  function effect$2(_ref) {
	    var state = _ref.state,
	        instance = _ref.instance,
	        options = _ref.options;
	    var _options$scroll = options.scroll,
	        scroll = _options$scroll === void 0 ? true : _options$scroll,
	        _options$resize = options.resize,
	        resize = _options$resize === void 0 ? true : _options$resize;
	    var window = getWindow(state.elements.popper);
	    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.addEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.addEventListener('resize', instance.update, passive);
	    }

	    return function () {
	      if (scroll) {
	        scrollParents.forEach(function (scrollParent) {
	          scrollParent.removeEventListener('scroll', instance.update, passive);
	        });
	      }

	      if (resize) {
	        window.removeEventListener('resize', instance.update, passive);
	      }
	    };
	  } // eslint-disable-next-line import/no-unused-modules


	  var eventListeners = {
	    name: 'eventListeners',
	    enabled: true,
	    phase: 'write',
	    fn: function fn() {},
	    effect: effect$2,
	    data: {}
	  };

	  function popperOffsets(_ref) {
	    var state = _ref.state,
	        name = _ref.name;
	    // Offsets are the actual position the popper needs to have to be
	    // properly positioned near its reference element
	    // This is the most basic placement, and will be adjusted by
	    // the modifiers in the next step
	    state.modifiersData[name] = computeOffsets({
	      reference: state.rects.reference,
	      element: state.rects.popper,
	      strategy: 'absolute',
	      placement: state.placement
	    });
	  } // eslint-disable-next-line import/no-unused-modules


	  var popperOffsets$1 = {
	    name: 'popperOffsets',
	    enabled: true,
	    phase: 'read',
	    fn: popperOffsets,
	    data: {}
	  };

	  var unsetSides = {
	    top: 'auto',
	    right: 'auto',
	    bottom: 'auto',
	    left: 'auto'
	  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
	  // Zooming can change the DPR, but it seems to report a value that will
	  // cleanly divide the values into the appropriate subpixels.

	  function roundOffsetsByDPR(_ref, win) {
	    var x = _ref.x,
	        y = _ref.y;
	    var dpr = win.devicePixelRatio || 1;
	    return {
	      x: round(x * dpr) / dpr || 0,
	      y: round(y * dpr) / dpr || 0
	    };
	  }

	  function mapToStyles(_ref2) {
	    var _Object$assign2;

	    var popper = _ref2.popper,
	        popperRect = _ref2.popperRect,
	        placement = _ref2.placement,
	        variation = _ref2.variation,
	        offsets = _ref2.offsets,
	        position = _ref2.position,
	        gpuAcceleration = _ref2.gpuAcceleration,
	        adaptive = _ref2.adaptive,
	        roundOffsets = _ref2.roundOffsets,
	        isFixed = _ref2.isFixed;
	    var _offsets$x = offsets.x,
	        x = _offsets$x === void 0 ? 0 : _offsets$x,
	        _offsets$y = offsets.y,
	        y = _offsets$y === void 0 ? 0 : _offsets$y;

	    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	      x: x,
	      y: y
	    }) : {
	      x: x,
	      y: y
	    };

	    x = _ref3.x;
	    y = _ref3.y;
	    var hasX = offsets.hasOwnProperty('x');
	    var hasY = offsets.hasOwnProperty('y');
	    var sideX = left;
	    var sideY = top;
	    var win = window;

	    if (adaptive) {
	      var offsetParent = getOffsetParent(popper);
	      var heightProp = 'clientHeight';
	      var widthProp = 'clientWidth';

	      if (offsetParent === getWindow(popper)) {
	        offsetParent = getDocumentElement(popper);

	        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
	          heightProp = 'scrollHeight';
	          widthProp = 'scrollWidth';
	        }
	      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


	      offsetParent = offsetParent;

	      if (placement === top || (placement === left || placement === right) && variation === end) {
	        sideY = bottom;
	        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
	        offsetParent[heightProp];
	        y -= offsetY - popperRect.height;
	        y *= gpuAcceleration ? 1 : -1;
	      }

	      if (placement === left || (placement === top || placement === bottom) && variation === end) {
	        sideX = right;
	        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
	        offsetParent[widthProp];
	        x -= offsetX - popperRect.width;
	        x *= gpuAcceleration ? 1 : -1;
	      }
	    }

	    var commonStyles = Object.assign({
	      position: position
	    }, adaptive && unsetSides);

	    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	      x: x,
	      y: y
	    }, getWindow(popper)) : {
	      x: x,
	      y: y
	    };

	    x = _ref4.x;
	    y = _ref4.y;

	    if (gpuAcceleration) {
	      var _Object$assign;

	      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	    }

	    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	  }

	  function computeStyles(_ref5) {
	    var state = _ref5.state,
	        options = _ref5.options;
	    var _options$gpuAccelerat = options.gpuAcceleration,
	        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	        _options$adaptive = options.adaptive,
	        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	        _options$roundOffsets = options.roundOffsets,
	        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	    var commonStyles = {
	      placement: getBasePlacement(state.placement),
	      variation: getVariation(state.placement),
	      popper: state.elements.popper,
	      popperRect: state.rects.popper,
	      gpuAcceleration: gpuAcceleration,
	      isFixed: state.options.strategy === 'fixed'
	    };

	    if (state.modifiersData.popperOffsets != null) {
	      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	        offsets: state.modifiersData.popperOffsets,
	        position: state.options.strategy,
	        adaptive: adaptive,
	        roundOffsets: roundOffsets
	      })));
	    }

	    if (state.modifiersData.arrow != null) {
	      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	        offsets: state.modifiersData.arrow,
	        position: 'absolute',
	        adaptive: false,
	        roundOffsets: roundOffsets
	      })));
	    }

	    state.attributes.popper = Object.assign({}, state.attributes.popper, {
	      'data-popper-placement': state.placement
	    });
	  } // eslint-disable-next-line import/no-unused-modules


	  var computeStyles$1 = {
	    name: 'computeStyles',
	    enabled: true,
	    phase: 'beforeWrite',
	    fn: computeStyles,
	    data: {}
	  };

	  // and applies them to the HTMLElements such as popper and arrow

	  function applyStyles(_ref) {
	    var state = _ref.state;
	    Object.keys(state.elements).forEach(function (name) {
	      var style = state.styles[name] || {};
	      var attributes = state.attributes[name] || {};
	      var element = state.elements[name]; // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      } // Flow doesn't support to extend this property, but it's the most
	      // effective way to apply styles to an HTMLElement
	      // $FlowFixMe[cannot-write]


	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (name) {
	        var value = attributes[name];

	        if (value === false) {
	          element.removeAttribute(name);
	        } else {
	          element.setAttribute(name, value === true ? '' : value);
	        }
	      });
	    });
	  }

	  function effect$1(_ref2) {
	    var state = _ref2.state;
	    var initialStyles = {
	      popper: {
	        position: state.options.strategy,
	        left: '0',
	        top: '0',
	        margin: '0'
	      },
	      arrow: {
	        position: 'absolute'
	      },
	      reference: {}
	    };
	    Object.assign(state.elements.popper.style, initialStyles.popper);
	    state.styles = initialStyles;

	    if (state.elements.arrow) {
	      Object.assign(state.elements.arrow.style, initialStyles.arrow);
	    }

	    return function () {
	      Object.keys(state.elements).forEach(function (name) {
	        var element = state.elements[name];
	        var attributes = state.attributes[name] || {};
	        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	        var style = styleProperties.reduce(function (style, property) {
	          style[property] = '';
	          return style;
	        }, {}); // arrow is optional + virtual elements

	        if (!isHTMLElement(element) || !getNodeName(element)) {
	          return;
	        }

	        Object.assign(element.style, style);
	        Object.keys(attributes).forEach(function (attribute) {
	          element.removeAttribute(attribute);
	        });
	      });
	    };
	  } // eslint-disable-next-line import/no-unused-modules


	  var applyStyles$1 = {
	    name: 'applyStyles',
	    enabled: true,
	    phase: 'write',
	    fn: applyStyles,
	    effect: effect$1,
	    requires: ['computeStyles']
	  };

	  function distanceAndSkiddingToXY(placement, rects, offset) {
	    var basePlacement = getBasePlacement(placement);
	    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	      placement: placement
	    })) : offset,
	        skidding = _ref[0],
	        distance = _ref[1];

	    skidding = skidding || 0;
	    distance = (distance || 0) * invertDistance;
	    return [left, right].indexOf(basePlacement) >= 0 ? {
	      x: distance,
	      y: skidding
	    } : {
	      x: skidding,
	      y: distance
	    };
	  }

	  function offset(_ref2) {
	    var state = _ref2.state,
	        options = _ref2.options,
	        name = _ref2.name;
	    var _options$offset = options.offset,
	        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	    var data = placements.reduce(function (acc, placement) {
	      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	      return acc;
	    }, {});
	    var _data$state$placement = data[state.placement],
	        x = _data$state$placement.x,
	        y = _data$state$placement.y;

	    if (state.modifiersData.popperOffsets != null) {
	      state.modifiersData.popperOffsets.x += x;
	      state.modifiersData.popperOffsets.y += y;
	    }

	    state.modifiersData[name] = data;
	  } // eslint-disable-next-line import/no-unused-modules


	  var offset$1 = {
	    name: 'offset',
	    enabled: true,
	    phase: 'main',
	    requires: ['popperOffsets'],
	    fn: offset
	  };

	  var hash$1 = {
	    left: 'right',
	    right: 'left',
	    bottom: 'top',
	    top: 'bottom'
	  };
	  function getOppositePlacement(placement) {
	    return placement.replace(/left|right|bottom|top/g, function (matched) {
	      return hash$1[matched];
	    });
	  }

	  var hash = {
	    start: 'end',
	    end: 'start'
	  };
	  function getOppositeVariationPlacement(placement) {
	    return placement.replace(/start|end/g, function (matched) {
	      return hash[matched];
	    });
	  }

	  function computeAutoPlacement(state, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var _options = options,
	        placement = _options.placement,
	        boundary = _options.boundary,
	        rootBoundary = _options.rootBoundary,
	        padding = _options.padding,
	        flipVariations = _options.flipVariations,
	        _options$allowedAutoP = _options.allowedAutoPlacements,
	        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	    var variation = getVariation(placement);
	    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	      return getVariation(placement) === variation;
	    }) : basePlacements;
	    var allowedPlacements = placements$1.filter(function (placement) {
	      return allowedAutoPlacements.indexOf(placement) >= 0;
	    });

	    if (allowedPlacements.length === 0) {
	      allowedPlacements = placements$1;
	    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


	    var overflows = allowedPlacements.reduce(function (acc, placement) {
	      acc[placement] = detectOverflow(state, {
	        placement: placement,
	        boundary: boundary,
	        rootBoundary: rootBoundary,
	        padding: padding
	      })[getBasePlacement(placement)];
	      return acc;
	    }, {});
	    return Object.keys(overflows).sort(function (a, b) {
	      return overflows[a] - overflows[b];
	    });
	  }

	  function getExpandedFallbackPlacements(placement) {
	    if (getBasePlacement(placement) === auto) {
	      return [];
	    }

	    var oppositePlacement = getOppositePlacement(placement);
	    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	  }

	  function flip(_ref) {
	    var state = _ref.state,
	        options = _ref.options,
	        name = _ref.name;

	    if (state.modifiersData[name]._skip) {
	      return;
	    }

	    var _options$mainAxis = options.mainAxis,
	        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	        _options$altAxis = options.altAxis,
	        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	        specifiedFallbackPlacements = options.fallbackPlacements,
	        padding = options.padding,
	        boundary = options.boundary,
	        rootBoundary = options.rootBoundary,
	        altBoundary = options.altBoundary,
	        _options$flipVariatio = options.flipVariations,
	        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	        allowedAutoPlacements = options.allowedAutoPlacements;
	    var preferredPlacement = state.options.placement;
	    var basePlacement = getBasePlacement(preferredPlacement);
	    var isBasePlacement = basePlacement === preferredPlacement;
	    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	        placement: placement,
	        boundary: boundary,
	        rootBoundary: rootBoundary,
	        padding: padding,
	        flipVariations: flipVariations,
	        allowedAutoPlacements: allowedAutoPlacements
	      }) : placement);
	    }, []);
	    var referenceRect = state.rects.reference;
	    var popperRect = state.rects.popper;
	    var checksMap = new Map();
	    var makeFallbackChecks = true;
	    var firstFittingPlacement = placements[0];

	    for (var i = 0; i < placements.length; i++) {
	      var placement = placements[i];

	      var _basePlacement = getBasePlacement(placement);

	      var isStartVariation = getVariation(placement) === start;
	      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	      var len = isVertical ? 'width' : 'height';
	      var overflow = detectOverflow(state, {
	        placement: placement,
	        boundary: boundary,
	        rootBoundary: rootBoundary,
	        altBoundary: altBoundary,
	        padding: padding
	      });
	      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	      if (referenceRect[len] > popperRect[len]) {
	        mainVariationSide = getOppositePlacement(mainVariationSide);
	      }

	      var altVariationSide = getOppositePlacement(mainVariationSide);
	      var checks = [];

	      if (checkMainAxis) {
	        checks.push(overflow[_basePlacement] <= 0);
	      }

	      if (checkAltAxis) {
	        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	      }

	      if (checks.every(function (check) {
	        return check;
	      })) {
	        firstFittingPlacement = placement;
	        makeFallbackChecks = false;
	        break;
	      }

	      checksMap.set(placement, checks);
	    }

	    if (makeFallbackChecks) {
	      // `2` may be desired in some cases – research later
	      var numberOfChecks = flipVariations ? 3 : 1;

	      var _loop = function _loop(_i) {
	        var fittingPlacement = placements.find(function (placement) {
	          var checks = checksMap.get(placement);

	          if (checks) {
	            return checks.slice(0, _i).every(function (check) {
	              return check;
	            });
	          }
	        });

	        if (fittingPlacement) {
	          firstFittingPlacement = fittingPlacement;
	          return "break";
	        }
	      };

	      for (var _i = numberOfChecks; _i > 0; _i--) {
	        var _ret = _loop(_i);

	        if (_ret === "break") break;
	      }
	    }

	    if (state.placement !== firstFittingPlacement) {
	      state.modifiersData[name]._skip = true;
	      state.placement = firstFittingPlacement;
	      state.reset = true;
	    }
	  } // eslint-disable-next-line import/no-unused-modules


	  var flip$1 = {
	    name: 'flip',
	    enabled: true,
	    phase: 'main',
	    fn: flip,
	    requiresIfExists: ['offset'],
	    data: {
	      _skip: false
	    }
	  };

	  function getAltAxis(axis) {
	    return axis === 'x' ? 'y' : 'x';
	  }

	  function within(min$1, value, max$1) {
	    return max(min$1, min(value, max$1));
	  }
	  function withinMaxClamp(min, value, max) {
	    var v = within(min, value, max);
	    return v > max ? max : v;
	  }

	  function preventOverflow(_ref) {
	    var state = _ref.state,
	        options = _ref.options,
	        name = _ref.name;
	    var _options$mainAxis = options.mainAxis,
	        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	        _options$altAxis = options.altAxis,
	        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	        boundary = options.boundary,
	        rootBoundary = options.rootBoundary,
	        altBoundary = options.altBoundary,
	        padding = options.padding,
	        _options$tether = options.tether,
	        tether = _options$tether === void 0 ? true : _options$tether,
	        _options$tetherOffset = options.tetherOffset,
	        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	    var overflow = detectOverflow(state, {
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      altBoundary: altBoundary
	    });
	    var basePlacement = getBasePlacement(state.placement);
	    var variation = getVariation(state.placement);
	    var isBasePlacement = !variation;
	    var mainAxis = getMainAxisFromPlacement(basePlacement);
	    var altAxis = getAltAxis(mainAxis);
	    var popperOffsets = state.modifiersData.popperOffsets;
	    var referenceRect = state.rects.reference;
	    var popperRect = state.rects.popper;
	    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	      placement: state.placement
	    })) : tetherOffset;
	    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	      mainAxis: tetherOffsetValue,
	      altAxis: tetherOffsetValue
	    } : Object.assign({
	      mainAxis: 0,
	      altAxis: 0
	    }, tetherOffsetValue);
	    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	    var data = {
	      x: 0,
	      y: 0
	    };

	    if (!popperOffsets) {
	      return;
	    }

	    if (checkMainAxis) {
	      var _offsetModifierState$;

	      var mainSide = mainAxis === 'y' ? top : left;
	      var altSide = mainAxis === 'y' ? bottom : right;
	      var len = mainAxis === 'y' ? 'height' : 'width';
	      var offset = popperOffsets[mainAxis];
	      var min$1 = offset + overflow[mainSide];
	      var max$1 = offset - overflow[altSide];
	      var additive = tether ? -popperRect[len] / 2 : 0;
	      var minLen = variation === start ? referenceRect[len] : popperRect[len];
	      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	      // outside the reference bounds

	      var arrowElement = state.elements.arrow;
	      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	        width: 0,
	        height: 0
	      };
	      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	      var arrowPaddingMin = arrowPaddingObject[mainSide];
	      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	      // to include its full size in the calculation. If the reference is small
	      // and near the edge of a boundary, the popper can overflow even if the
	      // reference is not overflowing as well (e.g. virtual elements with no
	      // width or height)

	      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	      var tetherMax = offset + maxOffset - offsetModifierValue;
	      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	      popperOffsets[mainAxis] = preventedOffset;
	      data[mainAxis] = preventedOffset - offset;
	    }

	    if (checkAltAxis) {
	      var _offsetModifierState$2;

	      var _mainSide = mainAxis === 'x' ? top : left;

	      var _altSide = mainAxis === 'x' ? bottom : right;

	      var _offset = popperOffsets[altAxis];

	      var _len = altAxis === 'y' ? 'height' : 'width';

	      var _min = _offset + overflow[_mainSide];

	      var _max = _offset - overflow[_altSide];

	      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

	      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

	      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

	      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

	      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

	      popperOffsets[altAxis] = _preventedOffset;
	      data[altAxis] = _preventedOffset - _offset;
	    }

	    state.modifiersData[name] = data;
	  } // eslint-disable-next-line import/no-unused-modules


	  var preventOverflow$1 = {
	    name: 'preventOverflow',
	    enabled: true,
	    phase: 'main',
	    fn: preventOverflow,
	    requiresIfExists: ['offset']
	  };

	  var toPaddingObject = function toPaddingObject(padding, state) {
	    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	      placement: state.placement
	    })) : padding;
	    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  };

	  function arrow(_ref) {
	    var _state$modifiersData$;

	    var state = _ref.state,
	        name = _ref.name,
	        options = _ref.options;
	    var arrowElement = state.elements.arrow;
	    var popperOffsets = state.modifiersData.popperOffsets;
	    var basePlacement = getBasePlacement(state.placement);
	    var axis = getMainAxisFromPlacement(basePlacement);
	    var isVertical = [left, right].indexOf(basePlacement) >= 0;
	    var len = isVertical ? 'height' : 'width';

	    if (!arrowElement || !popperOffsets) {
	      return;
	    }

	    var paddingObject = toPaddingObject(options.padding, state);
	    var arrowRect = getLayoutRect(arrowElement);
	    var minProp = axis === 'y' ? top : left;
	    var maxProp = axis === 'y' ? bottom : right;
	    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	    var arrowOffsetParent = getOffsetParent(arrowElement);
	    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	    // outside of the popper bounds

	    var min = paddingObject[minProp];
	    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	    var axisProp = axis;
	    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	  }

	  function effect(_ref2) {
	    var state = _ref2.state,
	        options = _ref2.options;
	    var _options$element = options.element,
	        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

	    if (arrowElement == null) {
	      return;
	    } // CSS selector


	    if (typeof arrowElement === 'string') {
	      arrowElement = state.elements.popper.querySelector(arrowElement);

	      if (!arrowElement) {
	        return;
	      }
	    }

	    if (!contains(state.elements.popper, arrowElement)) {
	      return;
	    }

	    state.elements.arrow = arrowElement;
	  } // eslint-disable-next-line import/no-unused-modules


	  var arrow$1 = {
	    name: 'arrow',
	    enabled: true,
	    phase: 'main',
	    fn: arrow,
	    effect: effect,
	    requires: ['popperOffsets'],
	    requiresIfExists: ['preventOverflow']
	  };

	  function getSideOffsets(overflow, rect, preventedOffsets) {
	    if (preventedOffsets === void 0) {
	      preventedOffsets = {
	        x: 0,
	        y: 0
	      };
	    }

	    return {
	      top: overflow.top - rect.height - preventedOffsets.y,
	      right: overflow.right - rect.width + preventedOffsets.x,
	      bottom: overflow.bottom - rect.height + preventedOffsets.y,
	      left: overflow.left - rect.width - preventedOffsets.x
	    };
	  }

	  function isAnySideFullyClipped(overflow) {
	    return [top, right, bottom, left].some(function (side) {
	      return overflow[side] >= 0;
	    });
	  }

	  function hide(_ref) {
	    var state = _ref.state,
	        name = _ref.name;
	    var referenceRect = state.rects.reference;
	    var popperRect = state.rects.popper;
	    var preventedOffsets = state.modifiersData.preventOverflow;
	    var referenceOverflow = detectOverflow(state, {
	      elementContext: 'reference'
	    });
	    var popperAltOverflow = detectOverflow(state, {
	      altBoundary: true
	    });
	    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	    state.modifiersData[name] = {
	      referenceClippingOffsets: referenceClippingOffsets,
	      popperEscapeOffsets: popperEscapeOffsets,
	      isReferenceHidden: isReferenceHidden,
	      hasPopperEscaped: hasPopperEscaped
	    };
	    state.attributes.popper = Object.assign({}, state.attributes.popper, {
	      'data-popper-reference-hidden': isReferenceHidden,
	      'data-popper-escaped': hasPopperEscaped
	    });
	  } // eslint-disable-next-line import/no-unused-modules


	  var hide$1 = {
	    name: 'hide',
	    enabled: true,
	    phase: 'main',
	    requiresIfExists: ['preventOverflow'],
	    fn: hide
	  };

	  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
	  var createPopper$1 = /*#__PURE__*/popperGenerator({
	    defaultModifiers: defaultModifiers$1
	  }); // eslint-disable-next-line import/no-unused-modules

	  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	  var createPopper = /*#__PURE__*/popperGenerator({
	    defaultModifiers: defaultModifiers
	  }); // eslint-disable-next-line import/no-unused-modules

	  exports.applyStyles = applyStyles$1;
	  exports.arrow = arrow$1;
	  exports.computeStyles = computeStyles$1;
	  exports.createPopper = createPopper;
	  exports.createPopperLite = createPopper$1;
	  exports.defaultModifiers = defaultModifiers;
	  exports.detectOverflow = detectOverflow;
	  exports.eventListeners = eventListeners;
	  exports.flip = flip$1;
	  exports.hide = hide$1;
	  exports.offset = offset$1;
	  exports.popperGenerator = popperGenerator;
	  exports.popperOffsets = popperOffsets$1;
	  exports.preventOverflow = preventOverflow$1;

	  Object.defineProperty(exports, '__esModule', { value: true });

	})));

	});

	var popper$2 = unwrapExports(popper$1);

	var Popper$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__moduleExports: popper$1,
		default: popper$2
	});

	/*!
	 * Glide.js v3.7.1
	 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
	 * Released under the MIT License.
	 */

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get.apply(this, arguments);
	}

	var defaults = {
	  /**
	   * Type of the movement.
	   *
	   * Available types:
	   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
	   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
	   *
	   * @type {String}
	   */
	  type: 'slider',

	  /**
	   * Start at specific slide number defined with zero-based index.
	   *
	   * @type {Number}
	   */
	  startAt: 0,

	  /**
	   * A number of slides visible on the single viewport.
	   *
	   * @type {Number}
	   */
	  perView: 1,

	  /**
	   * Focus currently active slide at a specified position in the track.
	   *
	   * Available inputs:
	   * `center` - Current slide will be always focused at the center of a track.
	   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
	   *
	   * @type {String|Number}
	   */
	  focusAt: 0,

	  /**
	   * A size of the gap added between slides.
	   *
	   * @type {Number}
	   */
	  gap: 10,

	  /**
	   * Change slides after a specified interval. Use `false` for turning off autoplay.
	   *
	   * @type {Number|Boolean}
	   */
	  autoplay: false,

	  /**
	   * Stop autoplay on mouseover event.
	   *
	   * @type {Boolean}
	   */
	  hoverpause: true,

	  /**
	   * Allow for changing slides with left and right keyboard arrows.
	   *
	   * @type {Boolean}
	   */
	  keyboard: true,

	  /**
	   * Stop running `perView` number of slides from the end. Use this
	   * option if you don't want to have an empty space after
	   * a slider. Works only with `slider` type and a
	   * non-centered `focusAt` setting.
	   *
	   * @type {Boolean}
	   */
	  bound: false,

	  /**
	   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
	   *
	   * @type {Number|Boolean}
	   */
	  swipeThreshold: 80,

	  /**
	   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
	   *
	   * @type {Number|Boolean}
	   */
	  dragThreshold: 120,

	  /**
	   * A number of slides moved on single swipe.
	   *
	   * Available types:
	   * `` - Moves slider by one slide per swipe
	   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
	   *
	   * @type {String}
	   */
	  perSwipe: '',

	  /**
	   * Moving distance ratio of the slides on a swiping and dragging.
	   *
	   * @type {Number}
	   */
	  touchRatio: 0.5,

	  /**
	   * Angle required to activate slides moving on swiping or dragging.
	   *
	   * @type {Number}
	   */
	  touchAngle: 45,

	  /**
	   * Duration of the animation in milliseconds.
	   *
	   * @type {Number}
	   */
	  animationDuration: 400,

	  /**
	   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
	   *
	   * @type {Boolean}
	   */
	  rewind: true,

	  /**
	   * Duration of the rewinding animation of the `slider` type in milliseconds.
	   *
	   * @type {Number}
	   */
	  rewindDuration: 800,

	  /**
	   * Easing function for the animation.
	   *
	   * @type {String}
	   */
	  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

	  /**
	   * Wait for the animation to finish until the next user input can be processed
	   *
	   * @type {boolean}
	   */
	  waitForTransition: true,

	  /**
	   * Throttle costly events at most once per every wait milliseconds.
	   *
	   * @type {Number}
	   */
	  throttle: 10,

	  /**
	   * Moving direction mode.
	   *
	   * Available inputs:
	   * - 'ltr' - left to right movement,
	   * - 'rtl' - right to left movement.
	   *
	   * @type {String}
	   */
	  direction: 'ltr',

	  /**
	   * The distance value of the next and previous viewports which
	   * have to peek in the current view. Accepts number and
	   * pixels as a string. Left and right peeking can be
	   * set up separately with a directions object.
	   *
	   * For example:
	   * `100` - Peek 100px on the both sides.
	   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
	   *
	   * @type {Number|String|Object}
	   */
	  peek: 0,

	  /**
	   * Defines how many clones of current viewport will be generated.
	   *
	   * @type {Number}
	   */
	  cloningRatio: 1,

	  /**
	   * Collection of options applied at specified media breakpoints.
	   * For example: display two slides per view under 800px.
	   * `{
	   *   '800px': {
	   *     perView: 2
	   *   }
	   * }`
	   */
	  breakpoints: {},

	  /**
	   * Collection of internally used HTML classes.
	   *
	   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
	   * @type {Object}
	   */
	  classes: {
	    swipeable: 'glide--swipeable',
	    dragging: 'glide--dragging',
	    direction: {
	      ltr: 'glide--ltr',
	      rtl: 'glide--rtl'
	    },
	    type: {
	      slider: 'glide--slider',
	      carousel: 'glide--carousel'
	    },
	    slide: {
	      clone: 'glide__slide--clone',
	      active: 'glide__slide--active'
	    },
	    arrow: {
	      disabled: 'glide__arrow--disabled'
	    },
	    nav: {
	      active: 'glide__bullet--active'
	    }
	  }
	};

	/**
	 * Outputs warning message to the bowser console.
	 *
	 * @param  {String} msg
	 * @return {Void}
	 */
	function warn(msg) {
	  console.error("[Glide warn]: ".concat(msg));
	}

	/**
	 * Converts value entered as number
	 * or string to integer value.
	 *
	 * @param {String} value
	 * @returns {Number}
	 */
	function toInt(value) {
	  return parseInt(value);
	}
	/**
	 * Converts value entered as number
	 * or string to flat value.
	 *
	 * @param {String} value
	 * @returns {Number}
	 */

	function toFloat(value) {
	  return parseFloat(value);
	}
	/**
	 * Indicates whether the specified value is a string.
	 *
	 * @param  {*}   value
	 * @return {Boolean}
	 */

	function isString(value) {
	  return typeof value === 'string';
	}
	/**
	 * Indicates whether the specified value is an object.
	 *
	 * @param  {*} value
	 * @return {Boolean}
	 *
	 * @see https://github.com/jashkenas/underscore
	 */

	function isObject(value) {
	  var type = _typeof(value);

	  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
	}
	/**
	 * Indicates whether the specified value is a function.
	 *
	 * @param  {*} value
	 * @return {Boolean}
	 */

	function isFunction(value) {
	  return typeof value === 'function';
	}
	/**
	 * Indicates whether the specified value is undefined.
	 *
	 * @param  {*} value
	 * @return {Boolean}
	 */

	function isUndefined(value) {
	  return typeof value === 'undefined';
	}
	/**
	 * Indicates whether the specified value is an array.
	 *
	 * @param  {*} value
	 * @return {Boolean}
	 */

	function isArray(value) {
	  return value.constructor === Array;
	}

	/**
	 * Creates and initializes specified collection of extensions.
	 * Each extension receives access to instance of glide and rest of components.
	 *
	 * @param {Object} glide
	 * @param {Object} extensions
	 *
	 * @returns {Object}
	 */

	function mount(glide, extensions, events) {
	  var components = {};

	  for (var name in extensions) {
	    if (isFunction(extensions[name])) {
	      components[name] = extensions[name](glide, components, events);
	    } else {
	      warn('Extension must be a function');
	    }
	  }

	  for (var _name in components) {
	    if (isFunction(components[_name].mount)) {
	      components[_name].mount();
	    }
	  }

	  return components;
	}

	/**
	 * Defines getter and setter property on the specified object.
	 *
	 * @param  {Object} obj         Object where property has to be defined.
	 * @param  {String} prop        Name of the defined property.
	 * @param  {Object} definition  Get and set definitions for the property.
	 * @return {Void}
	 */
	function define(obj, prop, definition) {
	  Object.defineProperty(obj, prop, definition);
	}
	/**
	 * Sorts aphabetically object keys.
	 *
	 * @param  {Object} obj
	 * @return {Object}
	 */

	function sortKeys(obj) {
	  return Object.keys(obj).sort().reduce(function (r, k) {
	    r[k] = obj[k];
	    return r[k], r;
	  }, {});
	}
	/**
	 * Merges passed settings object with default options.
	 *
	 * @param  {Object} defaults
	 * @param  {Object} settings
	 * @return {Object}
	 */

	function mergeOptions(defaults, settings) {
	  var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
	  // have to do it manually for every nested object
	  // in options. Although it does not look smart,
	  // it's smaller and faster than some fancy
	  // merging deep-merge algorithm script.

	  if (settings.hasOwnProperty('classes')) {
	    options.classes = Object.assign({}, defaults.classes, settings.classes);
	    var properties = ['direction', 'type', 'slide', 'arrow', 'nav'];
	    properties.forEach(function (property) {
	      if (settings.classes.hasOwnProperty(property)) {
	        options.classes[property] = _objectSpread2(_objectSpread2({}, defaults.classes[property]), settings.classes[property]);
	      }
	    });
	  }

	  if (settings.hasOwnProperty('breakpoints')) {
	    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
	  }

	  return options;
	}

	var EventsBus = /*#__PURE__*/function () {
	  /**
	   * Construct a EventBus instance.
	   *
	   * @param {Object} events
	   */
	  function EventsBus() {
	    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, EventsBus);

	    this.events = events;
	    this.hop = events.hasOwnProperty;
	  }
	  /**
	   * Adds listener to the specifed event.
	   *
	   * @param {String|Array} event
	   * @param {Function} handler
	   */


	  _createClass(EventsBus, [{
	    key: "on",
	    value: function on(event, handler) {
	      if (isArray(event)) {
	        for (var i = 0; i < event.length; i++) {
	          this.on(event[i], handler);
	        }

	        return;
	      } // Create the event's object if not yet created


	      if (!this.hop.call(this.events, event)) {
	        this.events[event] = [];
	      } // Add the handler to queue


	      var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

	      return {
	        remove: function remove() {
	          delete this.events[event][index];
	        }
	      };
	    }
	    /**
	     * Runs registered handlers for specified event.
	     *
	     * @param {String|Array} event
	     * @param {Object=} context
	     */

	  }, {
	    key: "emit",
	    value: function emit(event, context) {
	      if (isArray(event)) {
	        for (var i = 0; i < event.length; i++) {
	          this.emit(event[i], context);
	        }

	        return;
	      } // If the event doesn't exist, or there's no handlers in queue, just leave


	      if (!this.hop.call(this.events, event)) {
	        return;
	      } // Cycle through events queue, fire!


	      this.events[event].forEach(function (item) {
	        item(context || {});
	      });
	    }
	  }]);

	  return EventsBus;
	}();

	var Glide$1 = /*#__PURE__*/function () {
	  /**
	   * Construct glide.
	   *
	   * @param  {String} selector
	   * @param  {Object} options
	   */
	  function Glide(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Glide);

	    this._c = {};
	    this._t = [];
	    this._e = new EventsBus();
	    this.disabled = false;
	    this.selector = selector;
	    this.settings = mergeOptions(defaults, options);
	    this.index = this.settings.startAt;
	  }
	  /**
	   * Initializes glide.
	   *
	   * @param {Object} extensions Collection of extensions to initialize.
	   * @return {Glide}
	   */


	  _createClass(Glide, [{
	    key: "mount",
	    value: function mount$1() {
	      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      this._e.emit('mount.before');

	      if (isObject(extensions)) {
	        this._c = mount(this, extensions, this._e);
	      } else {
	        warn('You need to provide a object on `mount()`');
	      }

	      this._e.emit('mount.after');

	      return this;
	    }
	    /**
	     * Collects an instance `translate` transformers.
	     *
	     * @param  {Array} transformers Collection of transformers.
	     * @return {Void}
	     */

	  }, {
	    key: "mutate",
	    value: function mutate() {
	      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	      if (isArray(transformers)) {
	        this._t = transformers;
	      } else {
	        warn('You need to provide a array on `mutate()`');
	      }

	      return this;
	    }
	    /**
	     * Updates glide with specified settings.
	     *
	     * @param {Object} settings
	     * @return {Glide}
	     */

	  }, {
	    key: "update",
	    value: function update() {
	      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      this.settings = mergeOptions(this.settings, settings);

	      if (settings.hasOwnProperty('startAt')) {
	        this.index = settings.startAt;
	      }

	      this._e.emit('update');

	      return this;
	    }
	    /**
	     * Change slide with specified pattern. A pattern must be in the special format:
	     * `>` - Move one forward
	     * `<` - Move one backward
	     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
	     * `>>` - Rewinds to end (last slide)
	     * `<<` - Rewinds to start (first slide)
	     * `|>` - Move one viewport forward
	     * `|<` - Move one viewport backward
	     *
	     * @param {String} pattern
	     * @return {Glide}
	     */

	  }, {
	    key: "go",
	    value: function go(pattern) {
	      this._c.Run.make(pattern);

	      return this;
	    }
	    /**
	     * Move track by specified distance.
	     *
	     * @param {String} distance
	     * @return {Glide}
	     */

	  }, {
	    key: "move",
	    value: function move(distance) {
	      this._c.Transition.disable();

	      this._c.Move.make(distance);

	      return this;
	    }
	    /**
	     * Destroy instance and revert all changes done by this._c.
	     *
	     * @return {Glide}
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._e.emit('destroy');

	      return this;
	    }
	    /**
	     * Start instance autoplaying.
	     *
	     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
	     * @return {Glide}
	     */

	  }, {
	    key: "play",
	    value: function play() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (interval) {
	        this.settings.autoplay = interval;
	      }

	      this._e.emit('play');

	      return this;
	    }
	    /**
	     * Stop instance autoplaying.
	     *
	     * @return {Glide}
	     */

	  }, {
	    key: "pause",
	    value: function pause() {
	      this._e.emit('pause');

	      return this;
	    }
	    /**
	     * Sets glide into a idle status.
	     *
	     * @return {Glide}
	     */

	  }, {
	    key: "disable",
	    value: function disable() {
	      this.disabled = true;
	      return this;
	    }
	    /**
	     * Sets glide into a active status.
	     *
	     * @return {Glide}
	     */

	  }, {
	    key: "enable",
	    value: function enable() {
	      this.disabled = false;
	      return this;
	    }
	    /**
	     * Adds cuutom event listener with handler.
	     *
	     * @param  {String|Array} event
	     * @param  {Function} handler
	     * @return {Glide}
	     */

	  }, {
	    key: "on",
	    value: function on(event, handler) {
	      this._e.on(event, handler);

	      return this;
	    }
	    /**
	     * Checks if glide is a precised type.
	     *
	     * @param  {String} name
	     * @return {Boolean}
	     */

	  }, {
	    key: "isType",
	    value: function isType(name) {
	      return this.settings.type === name;
	    }
	    /**
	     * Gets value of the core options.
	     *
	     * @return {Object}
	     */

	  }, {
	    key: "settings",
	    get: function get() {
	      return this._o;
	    }
	    /**
	     * Sets value of the core options.
	     *
	     * @param  {Object} o
	     * @return {Void}
	     */
	    ,
	    set: function set(o) {
	      if (isObject(o)) {
	        this._o = o;
	      } else {
	        warn('Options must be an `object` instance.');
	      }
	    }
	    /**
	     * Gets current index of the slider.
	     *
	     * @return {Object}
	     */

	  }, {
	    key: "index",
	    get: function get() {
	      return this._i;
	    }
	    /**
	     * Sets current index a slider.
	     *
	     * @return {Object}
	     */
	    ,
	    set: function set(i) {
	      this._i = toInt(i);
	    }
	    /**
	     * Gets type name of the slider.
	     *
	     * @return {String}
	     */

	  }, {
	    key: "type",
	    get: function get() {
	      return this.settings.type;
	    }
	    /**
	     * Gets value of the idle status.
	     *
	     * @return {Boolean}
	     */

	  }, {
	    key: "disabled",
	    get: function get() {
	      return this._d;
	    }
	    /**
	     * Sets value of the idle status.
	     *
	     * @return {Boolean}
	     */
	    ,
	    set: function set(status) {
	      this._d = !!status;
	    }
	  }]);

	  return Glide;
	}();

	function Run (Glide, Components, Events) {
	  var Run = {
	    /**
	     * Initializes autorunning of the glide.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this._o = false;
	    },

	    /**
	     * Makes glides running based on the passed moving schema.
	     *
	     * @param {String} move
	     */
	    make: function make(move) {
	      var _this = this;

	      if (!Glide.disabled) {
	        !Glide.settings.waitForTransition || Glide.disable();
	        this.move = move;
	        Events.emit('run.before', this.move);
	        this.calculate();
	        Events.emit('run', this.move);
	        Components.Transition.after(function () {
	          if (_this.isStart()) {
	            Events.emit('run.start', _this.move);
	          }

	          if (_this.isEnd()) {
	            Events.emit('run.end', _this.move);
	          }

	          if (_this.isOffset()) {
	            _this._o = false;
	            Events.emit('run.offset', _this.move);
	          }

	          Events.emit('run.after', _this.move);
	          Glide.enable();
	        });
	      }
	    },

	    /**
	     * Calculates current index based on defined move.
	     *
	     * @return {Number|Undefined}
	     */
	    calculate: function calculate() {
	      var move = this.move,
	          length = this.length;
	      var steps = move.steps,
	          direction = move.direction; // By default assume that size of view is equal to one slide

	      var viewSize = 1; // While direction is `=` we want jump to
	      // a specified index described in steps.

	      if (direction === '=') {
	        // Check if bound is true, 
	        // as we want to avoid whitespaces.
	        if (Glide.settings.bound && toInt(steps) > length) {
	          Glide.index = length;
	          return;
	        }

	        Glide.index = steps;
	        return;
	      } // When pattern is equal to `>>` we want
	      // fast forward to the last slide.


	      if (direction === '>' && steps === '>') {
	        Glide.index = length;
	        return;
	      } // When pattern is equal to `<<` we want
	      // fast forward to the first slide.


	      if (direction === '<' && steps === '<') {
	        Glide.index = 0;
	        return;
	      } // pagination movement


	      if (direction === '|') {
	        viewSize = Glide.settings.perView || 1;
	      } // we are moving forward


	      if (direction === '>' || direction === '|' && steps === '>') {
	        var index = calculateForwardIndex(viewSize);

	        if (index > length) {
	          this._o = true;
	        }

	        Glide.index = normalizeForwardIndex(index, viewSize);
	        return;
	      } // we are moving backward


	      if (direction === '<' || direction === '|' && steps === '<') {
	        var _index = calculateBackwardIndex(viewSize);

	        if (_index < 0) {
	          this._o = true;
	        }

	        Glide.index = normalizeBackwardIndex(_index, viewSize);
	        return;
	      }

	      warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
	    },

	    /**
	     * Checks if we are on the first slide.
	     *
	     * @return {Boolean}
	     */
	    isStart: function isStart() {
	      return Glide.index <= 0;
	    },

	    /**
	     * Checks if we are on the last slide.
	     *
	     * @return {Boolean}
	     */
	    isEnd: function isEnd() {
	      return Glide.index >= this.length;
	    },

	    /**
	     * Checks if we are making a offset run.
	     *
	     * @param {String} direction
	     * @return {Boolean}
	     */
	    isOffset: function isOffset() {
	      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

	      if (!direction) {
	        return this._o;
	      }

	      if (!this._o) {
	        return false;
	      } // did we view to the right?


	      if (direction === '|>') {
	        return this.move.direction === '|' && this.move.steps === '>';
	      } // did we view to the left?


	      if (direction === '|<') {
	        return this.move.direction === '|' && this.move.steps === '<';
	      }

	      return this.move.direction === direction;
	    },

	    /**
	     * Checks if bound mode is active
	     *
	     * @return {Boolean}
	     */
	    isBound: function isBound() {
	      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
	    }
	  };
	  /**
	   * Returns index value to move forward/to the right
	   *
	   * @param viewSize
	   * @returns {Number}
	   */

	  function calculateForwardIndex(viewSize) {
	    var index = Glide.index;

	    if (Glide.isType('carousel')) {
	      return index + viewSize;
	    }

	    return index + (viewSize - index % viewSize);
	  }
	  /**
	   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
	   *
	   * @param index
	   * @param length
	   * @param viewSize
	   * @returns {Number}
	   */


	  function normalizeForwardIndex(index, viewSize) {
	    var length = Run.length;

	    if (index <= length) {
	      return index;
	    }

	    if (Glide.isType('carousel')) {
	      return index - (length + 1);
	    }

	    if (Glide.settings.rewind) {
	      // bound does funny things with the length, therefor we have to be certain
	      // that we are on the last possible index value given by bound
	      if (Run.isBound() && !Run.isEnd()) {
	        return length;
	      }

	      return 0;
	    }

	    if (Run.isBound()) {
	      return length;
	    }

	    return Math.floor(length / viewSize) * viewSize;
	  }
	  /**
	   * Calculates index value to move backward/to the left
	   *
	   * @param viewSize
	   * @returns {Number}
	   */


	  function calculateBackwardIndex(viewSize) {
	    var index = Glide.index;

	    if (Glide.isType('carousel')) {
	      return index - viewSize;
	    } // ensure our back navigation results in the same index as a forward navigation
	    // to experience a homogeneous paging


	    var view = Math.ceil(index / viewSize);
	    return (view - 1) * viewSize;
	  }
	  /**
	   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
	   *
	   * @param index
	   * @param length
	   * @param viewSize
	   * @returns {*}
	   */


	  function normalizeBackwardIndex(index, viewSize) {
	    var length = Run.length;

	    if (index >= 0) {
	      return index;
	    }

	    if (Glide.isType('carousel')) {
	      return index + (length + 1);
	    }

	    if (Glide.settings.rewind) {
	      // bound does funny things with the length, therefor we have to be certain
	      // that we are on first possible index value before we to rewind to the length given by bound
	      if (Run.isBound() && Run.isStart()) {
	        return length;
	      }

	      return Math.floor(length / viewSize) * viewSize;
	    }

	    return 0;
	  }

	  define(Run, 'move', {
	    /**
	     * Gets value of the move schema.
	     *
	     * @returns {Object}
	     */
	    get: function get() {
	      return this._m;
	    },

	    /**
	     * Sets value of the move schema.
	     *
	     * @returns {Object}
	     */
	    set: function set(value) {
	      var step = value.substr(1);
	      this._m = {
	        direction: value.substr(0, 1),
	        steps: step ? toInt(step) ? toInt(step) : step : 0
	      };
	    }
	  });
	  define(Run, 'length', {
	    /**
	     * Gets value of the running distance based
	     * on zero-indexing number of slides.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      var settings = Glide.settings;
	      var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
	      // reduced by `perView` and `focusAt` settings. Running distance
	      // should end before creating an empty space after instance.

	      if (this.isBound()) {
	        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
	      }

	      return length - 1;
	    }
	  });
	  define(Run, 'offset', {
	    /**
	     * Gets status of the offsetting flag.
	     *
	     * @return {Boolean}
	     */
	    get: function get() {
	      return this._o;
	    }
	  });
	  return Run;
	}

	/**
	 * Returns a current time.
	 *
	 * @return {Number}
	 */
	function now() {
	  return new Date().getTime();
	}

	/**
	 * Returns a function, that, when invoked, will only be triggered
	 * at most once during a given window of time.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @param {Object=} options
	 * @return {Function}
	 *
	 * @see https://github.com/jashkenas/underscore
	 */

	function throttle(func, wait) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var timeout, context, args, result;
	  var previous = 0;

	  var later = function later() {
	    previous = options.leading === false ? 0 : now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };

	  var throttled = function throttled() {
	    var at = now();
	    if (!previous && options.leading === false) previous = at;
	    var remaining = wait - (at - previous);
	    context = this;
	    args = arguments;

	    if (remaining <= 0 || remaining > wait) {
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }

	      previous = at;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    } else if (!timeout && options.trailing !== false) {
	      timeout = setTimeout(later, remaining);
	    }

	    return result;
	  };

	  throttled.cancel = function () {
	    clearTimeout(timeout);
	    previous = 0;
	    timeout = context = args = null;
	  };

	  return throttled;
	}

	var MARGIN_TYPE = {
	  ltr: ['marginLeft', 'marginRight'],
	  rtl: ['marginRight', 'marginLeft']
	};
	function Gaps (Glide, Components, Events) {
	  var Gaps = {
	    /**
	     * Applies gaps between slides. First and last
	     * slides do not receive it's edge margins.
	     *
	     * @param {HTMLCollection} slides
	     * @return {Void}
	     */
	    apply: function apply(slides) {
	      for (var i = 0, len = slides.length; i < len; i++) {
	        var style = slides[i].style;
	        var direction = Components.Direction.value;

	        if (i !== 0) {
	          style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
	        } else {
	          style[MARGIN_TYPE[direction][0]] = '';
	        }

	        if (i !== slides.length - 1) {
	          style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
	        } else {
	          style[MARGIN_TYPE[direction][1]] = '';
	        }
	      }
	    },

	    /**
	     * Removes gaps from the slides.
	     *
	     * @param {HTMLCollection} slides
	     * @returns {Void}
	    */
	    remove: function remove(slides) {
	      for (var i = 0, len = slides.length; i < len; i++) {
	        var style = slides[i].style;
	        style.marginLeft = '';
	        style.marginRight = '';
	      }
	    }
	  };
	  define(Gaps, 'value', {
	    /**
	     * Gets value of the gap.
	     *
	     * @returns {Number}
	     */
	    get: function get() {
	      return toInt(Glide.settings.gap);
	    }
	  });
	  define(Gaps, 'grow', {
	    /**
	     * Gets additional dimensions value caused by gaps.
	     * Used to increase width of the slides wrapper.
	     *
	     * @returns {Number}
	     */
	    get: function get() {
	      return Gaps.value * Components.Sizes.length;
	    }
	  });
	  define(Gaps, 'reductor', {
	    /**
	     * Gets reduction value caused by gaps.
	     * Used to subtract width of the slides.
	     *
	     * @returns {Number}
	     */
	    get: function get() {
	      var perView = Glide.settings.perView;
	      return Gaps.value * (perView - 1) / perView;
	    }
	  });
	  /**
	   * Apply calculated gaps:
	   * - after building, so slides (including clones) will receive proper margins
	   * - on updating via API, to recalculate gaps with new options
	   */

	  Events.on(['build.after', 'update'], throttle(function () {
	    Gaps.apply(Components.Html.wrapper.children);
	  }, 30));
	  /**
	   * Remove gaps:
	   * - on destroying to bring markup to its inital state
	   */

	  Events.on('destroy', function () {
	    Gaps.remove(Components.Html.wrapper.children);
	  });
	  return Gaps;
	}

	/**
	 * Finds siblings nodes of the passed node.
	 *
	 * @param  {Element} node
	 * @return {Array}
	 */
	function siblings(node) {
	  if (node && node.parentNode) {
	    var n = node.parentNode.firstChild;
	    var matched = [];

	    for (; n; n = n.nextSibling) {
	      if (n.nodeType === 1 && n !== node) {
	        matched.push(n);
	      }
	    }

	    return matched;
	  }

	  return [];
	}
	/**
	 * Coerces a NodeList to an Array.
	 *
	 * @param  {NodeList} nodeList
	 * @return {Array}
	 */

	function toArray(nodeList) {
	  return Array.prototype.slice.call(nodeList);
	}

	var TRACK_SELECTOR = '[data-glide-el="track"]';
	function Html (Glide, Components, Events) {
	  var Html = {
	    /**
	     * Setup slider HTML nodes.
	     *
	     * @param {Glide} glide
	     */
	    mount: function mount() {
	      this.root = Glide.selector;
	      this.track = this.root.querySelector(TRACK_SELECTOR);
	      this.collectSlides();
	    },

	    /**
	     * Collect slides
	     */
	    collectSlides: function collectSlides() {
	      this.slides = toArray(this.wrapper.children).filter(function (slide) {
	        return !slide.classList.contains(Glide.settings.classes.slide.clone);
	      });
	    }
	  };
	  define(Html, 'root', {
	    /**
	     * Gets node of the glide main element.
	     *
	     * @return {Object}
	     */
	    get: function get() {
	      return Html._r;
	    },

	    /**
	     * Sets node of the glide main element.
	     *
	     * @return {Object}
	     */
	    set: function set(r) {
	      if (isString(r)) {
	        r = document.querySelector(r);
	      }

	      if (r !== null) {
	        Html._r = r;
	      } else {
	        warn('Root element must be a existing Html node');
	      }
	    }
	  });
	  define(Html, 'track', {
	    /**
	     * Gets node of the glide track with slides.
	     *
	     * @return {Object}
	     */
	    get: function get() {
	      return Html._t;
	    },

	    /**
	     * Sets node of the glide track with slides.
	     *
	     * @return {Object}
	     */
	    set: function set(t) {
	      Html._t = t;
	    }
	  });
	  define(Html, 'wrapper', {
	    /**
	     * Gets node of the slides wrapper.
	     *
	     * @return {Object}
	     */
	    get: function get() {
	      return Html.track.children[0];
	    }
	  });
	  /**
	   * Add/remove/reorder dynamic slides
	   */

	  Events.on('update', function () {
	    Html.collectSlides();
	  });
	  return Html;
	}

	function Peek (Glide, Components, Events) {
	  var Peek = {
	    /**
	     * Setups how much to peek based on settings.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this.value = Glide.settings.peek;
	    }
	  };
	  define(Peek, 'value', {
	    /**
	     * Gets value of the peek.
	     *
	     * @returns {Number|Object}
	     */
	    get: function get() {
	      return Peek._v;
	    },

	    /**
	     * Sets value of the peek.
	     *
	     * @param {Number|Object} value
	     * @return {Void}
	     */
	    set: function set(value) {
	      if (isObject(value)) {
	        value.before = toInt(value.before);
	        value.after = toInt(value.after);
	      } else {
	        value = toInt(value);
	      }

	      Peek._v = value;
	    }
	  });
	  define(Peek, 'reductor', {
	    /**
	     * Gets reduction value caused by peek.
	     *
	     * @returns {Number}
	     */
	    get: function get() {
	      var value = Peek.value;
	      var perView = Glide.settings.perView;

	      if (isObject(value)) {
	        return value.before / perView + value.after / perView;
	      }

	      return value * 2 / perView;
	    }
	  });
	  /**
	   * Recalculate peeking sizes on:
	   * - when resizing window to update to proper percents
	   */

	  Events.on(['resize', 'update'], function () {
	    Peek.mount();
	  });
	  return Peek;
	}

	function Move (Glide, Components, Events) {
	  var Move = {
	    /**
	     * Constructs move component.
	     *
	     * @returns {Void}
	     */
	    mount: function mount() {
	      this._o = 0;
	    },

	    /**
	     * Calculates a movement value based on passed offset and currently active index.
	     *
	     * @param  {Number} offset
	     * @return {Void}
	     */
	    make: function make() {
	      var _this = this;

	      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      this.offset = offset;
	      Events.emit('move', {
	        movement: this.value
	      });
	      Components.Transition.after(function () {
	        Events.emit('move.after', {
	          movement: _this.value
	        });
	      });
	    }
	  };
	  define(Move, 'offset', {
	    /**
	     * Gets an offset value used to modify current translate.
	     *
	     * @return {Object}
	     */
	    get: function get() {
	      return Move._o;
	    },

	    /**
	     * Sets an offset value used to modify current translate.
	     *
	     * @return {Object}
	     */
	    set: function set(value) {
	      Move._o = !isUndefined(value) ? toInt(value) : 0;
	    }
	  });
	  define(Move, 'translate', {
	    /**
	     * Gets a raw movement value.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return Components.Sizes.slideWidth * Glide.index;
	    }
	  });
	  define(Move, 'value', {
	    /**
	     * Gets an actual movement value corrected by offset.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      var offset = this.offset;
	      var translate = this.translate;

	      if (Components.Direction.is('rtl')) {
	        return translate + offset;
	      }

	      return translate - offset;
	    }
	  });
	  /**
	   * Make movement to proper slide on:
	   * - before build, so glide will start at `startAt` index
	   * - on each standard run to move to newly calculated index
	   */

	  Events.on(['build.before', 'run'], function () {
	    Move.make();
	  });
	  return Move;
	}

	function Sizes (Glide, Components, Events) {
	  var Sizes = {
	    /**
	     * Setups dimensions of slides.
	     *
	     * @return {Void}
	     */
	    setupSlides: function setupSlides() {
	      var width = "".concat(this.slideWidth, "px");
	      var slides = Components.Html.slides;

	      for (var i = 0; i < slides.length; i++) {
	        slides[i].style.width = width;
	      }
	    },

	    /**
	     * Setups dimensions of slides wrapper.
	     *
	     * @return {Void}
	     */
	    setupWrapper: function setupWrapper() {
	      Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
	    },

	    /**
	     * Removes applied styles from HTML elements.
	     *
	     * @returns {Void}
	     */
	    remove: function remove() {
	      var slides = Components.Html.slides;

	      for (var i = 0; i < slides.length; i++) {
	        slides[i].style.width = '';
	      }

	      Components.Html.wrapper.style.width = '';
	    }
	  };
	  define(Sizes, 'length', {
	    /**
	     * Gets count number of the slides.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return Components.Html.slides.length;
	    }
	  });
	  define(Sizes, 'width', {
	    /**
	     * Gets width value of the slider (visible area).
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return Components.Html.track.offsetWidth;
	    }
	  });
	  define(Sizes, 'wrapperSize', {
	    /**
	     * Gets size of the slides wrapper.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
	    }
	  });
	  define(Sizes, 'slideWidth', {
	    /**
	     * Gets width value of a single slide.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
	    }
	  });
	  /**
	   * Apply calculated glide's dimensions:
	   * - before building, so other dimensions (e.g. translate) will be calculated propertly
	   * - when resizing window to recalculate sildes dimensions
	   * - on updating via API, to calculate dimensions based on new options
	   */

	  Events.on(['build.before', 'resize', 'update'], function () {
	    Sizes.setupSlides();
	    Sizes.setupWrapper();
	  });
	  /**
	   * Remove calculated glide's dimensions:
	   * - on destoting to bring markup to its inital state
	   */

	  Events.on('destroy', function () {
	    Sizes.remove();
	  });
	  return Sizes;
	}

	function Build (Glide, Components, Events) {
	  var Build = {
	    /**
	     * Init glide building. Adds classes, sets
	     * dimensions and setups initial state.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      Events.emit('build.before');
	      this.typeClass();
	      this.activeClass();
	      Events.emit('build.after');
	    },

	    /**
	     * Adds `type` class to the glide element.
	     *
	     * @return {Void}
	     */
	    typeClass: function typeClass() {
	      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
	    },

	    /**
	     * Sets active class to current slide.
	     *
	     * @return {Void}
	     */
	    activeClass: function activeClass() {
	      var classes = Glide.settings.classes;
	      var slide = Components.Html.slides[Glide.index];

	      if (slide) {
	        slide.classList.add(classes.slide.active);
	        siblings(slide).forEach(function (sibling) {
	          sibling.classList.remove(classes.slide.active);
	        });
	      }
	    },

	    /**
	     * Removes HTML classes applied at building.
	     *
	     * @return {Void}
	     */
	    removeClasses: function removeClasses() {
	      var _Glide$settings$class = Glide.settings.classes,
	          type = _Glide$settings$class.type,
	          slide = _Glide$settings$class.slide;
	      Components.Html.root.classList.remove(type[Glide.settings.type]);
	      Components.Html.slides.forEach(function (sibling) {
	        sibling.classList.remove(slide.active);
	      });
	    }
	  };
	  /**
	   * Clear building classes:
	   * - on destroying to bring HTML to its initial state
	   * - on updating to remove classes before remounting component
	   */

	  Events.on(['destroy', 'update'], function () {
	    Build.removeClasses();
	  });
	  /**
	   * Remount component:
	   * - on resizing of the window to calculate new dimensions
	   * - on updating settings via API
	   */

	  Events.on(['resize', 'update'], function () {
	    Build.mount();
	  });
	  /**
	   * Swap active class of current slide:
	   * - after each move to the new index
	   */

	  Events.on('move.after', function () {
	    Build.activeClass();
	  });
	  return Build;
	}

	function Clones (Glide, Components, Events) {
	  var Clones = {
	    /**
	     * Create pattern map and collect slides to be cloned.
	     */
	    mount: function mount() {
	      this.items = [];

	      if (Glide.isType('carousel')) {
	        this.items = this.collect();
	      }
	    },

	    /**
	     * Collect clones with pattern.
	     *
	     * @return {[]}
	     */
	    collect: function collect() {
	      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var slides = Components.Html.slides;
	      var _Glide$settings = Glide.settings,
	          perView = _Glide$settings.perView,
	          classes = _Glide$settings.classes,
	          cloningRatio = _Glide$settings.cloningRatio;

	      if (slides.length > 0) {
	        var peekIncrementer = +!!Glide.settings.peek;
	        var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
	        var append = slides.slice(0, cloneCount).reverse();
	        var prepend = slides.slice(cloneCount * -1);

	        for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
	          for (var i = 0; i < append.length; i++) {
	            var clone = append[i].cloneNode(true);
	            clone.classList.add(classes.slide.clone);
	            items.push(clone);
	          }

	          for (var _i = 0; _i < prepend.length; _i++) {
	            var _clone = prepend[_i].cloneNode(true);

	            _clone.classList.add(classes.slide.clone);

	            items.unshift(_clone);
	          }
	        }
	      }

	      return items;
	    },

	    /**
	     * Append cloned slides with generated pattern.
	     *
	     * @return {Void}
	     */
	    append: function append() {
	      var items = this.items;
	      var _Components$Html = Components.Html,
	          wrapper = _Components$Html.wrapper,
	          slides = _Components$Html.slides;
	      var half = Math.floor(items.length / 2);
	      var prepend = items.slice(0, half).reverse();
	      var append = items.slice(half * -1).reverse();
	      var width = "".concat(Components.Sizes.slideWidth, "px");

	      for (var i = 0; i < append.length; i++) {
	        wrapper.appendChild(append[i]);
	      }

	      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
	        wrapper.insertBefore(prepend[_i2], slides[0]);
	      }

	      for (var _i3 = 0; _i3 < items.length; _i3++) {
	        items[_i3].style.width = width;
	      }
	    },

	    /**
	     * Remove all cloned slides.
	     *
	     * @return {Void}
	     */
	    remove: function remove() {
	      var items = this.items;

	      for (var i = 0; i < items.length; i++) {
	        Components.Html.wrapper.removeChild(items[i]);
	      }
	    }
	  };
	  define(Clones, 'grow', {
	    /**
	     * Gets additional dimensions value caused by clones.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
	    }
	  });
	  /**
	   * Append additional slide's clones:
	   * - while glide's type is `carousel`
	   */

	  Events.on('update', function () {
	    Clones.remove();
	    Clones.mount();
	    Clones.append();
	  });
	  /**
	   * Append additional slide's clones:
	   * - while glide's type is `carousel`
	   */

	  Events.on('build.before', function () {
	    if (Glide.isType('carousel')) {
	      Clones.append();
	    }
	  });
	  /**
	   * Remove clones HTMLElements:
	   * - on destroying, to bring HTML to its initial state
	   */

	  Events.on('destroy', function () {
	    Clones.remove();
	  });
	  return Clones;
	}

	var EventsBinder = /*#__PURE__*/function () {
	  /**
	   * Construct a EventsBinder instance.
	   */
	  function EventsBinder() {
	    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, EventsBinder);

	    this.listeners = listeners;
	  }
	  /**
	   * Adds events listeners to arrows HTML elements.
	   *
	   * @param  {String|Array} events
	   * @param  {Element|Window|Document} el
	   * @param  {Function} closure
	   * @param  {Boolean|Object} capture
	   * @return {Void}
	   */


	  _createClass(EventsBinder, [{
	    key: "on",
	    value: function on(events, el, closure) {
	      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      if (isString(events)) {
	        events = [events];
	      }

	      for (var i = 0; i < events.length; i++) {
	        this.listeners[events[i]] = closure;
	        el.addEventListener(events[i], this.listeners[events[i]], capture);
	      }
	    }
	    /**
	     * Removes event listeners from arrows HTML elements.
	     *
	     * @param  {String|Array} events
	     * @param  {Element|Window|Document} el
	     * @param  {Boolean|Object} capture
	     * @return {Void}
	     */

	  }, {
	    key: "off",
	    value: function off(events, el) {
	      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      if (isString(events)) {
	        events = [events];
	      }

	      for (var i = 0; i < events.length; i++) {
	        el.removeEventListener(events[i], this.listeners[events[i]], capture);
	      }
	    }
	    /**
	     * Destroy collected listeners.
	     *
	     * @returns {Void}
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      delete this.listeners;
	    }
	  }]);

	  return EventsBinder;
	}();

	function Resize (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var Resize = {
	    /**
	     * Initializes window bindings.
	     */
	    mount: function mount() {
	      this.bind();
	    },

	    /**
	     * Binds `rezsize` listener to the window.
	     * It's a costly event, so we are debouncing it.
	     *
	     * @return {Void}
	     */
	    bind: function bind() {
	      Binder.on('resize', window, throttle(function () {
	        Events.emit('resize');
	      }, Glide.settings.throttle));
	    },

	    /**
	     * Unbinds listeners from the window.
	     *
	     * @return {Void}
	     */
	    unbind: function unbind() {
	      Binder.off('resize', window);
	    }
	  };
	  /**
	   * Remove bindings from window:
	   * - on destroying, to remove added EventListener
	   */

	  Events.on('destroy', function () {
	    Resize.unbind();
	    Binder.destroy();
	  });
	  return Resize;
	}

	var VALID_DIRECTIONS = ['ltr', 'rtl'];
	var FLIPED_MOVEMENTS = {
	  '>': '<',
	  '<': '>',
	  '=': '='
	};
	function Direction (Glide, Components, Events) {
	  var Direction = {
	    /**
	     * Setups gap value based on settings.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this.value = Glide.settings.direction;
	    },

	    /**
	     * Resolves pattern based on direction value
	     *
	     * @param {String} pattern
	     * @returns {String}
	     */
	    resolve: function resolve(pattern) {
	      var token = pattern.slice(0, 1);

	      if (this.is('rtl')) {
	        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
	      }

	      return pattern;
	    },

	    /**
	     * Checks value of direction mode.
	     *
	     * @param {String} direction
	     * @returns {Boolean}
	     */
	    is: function is(direction) {
	      return this.value === direction;
	    },

	    /**
	     * Applies direction class to the root HTML element.
	     *
	     * @return {Void}
	     */
	    addClass: function addClass() {
	      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
	    },

	    /**
	     * Removes direction class from the root HTML element.
	     *
	     * @return {Void}
	     */
	    removeClass: function removeClass() {
	      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
	    }
	  };
	  define(Direction, 'value', {
	    /**
	     * Gets value of the direction.
	     *
	     * @returns {Number}
	     */
	    get: function get() {
	      return Direction._v;
	    },

	    /**
	     * Sets value of the direction.
	     *
	     * @param {String} value
	     * @return {Void}
	     */
	    set: function set(value) {
	      if (VALID_DIRECTIONS.indexOf(value) > -1) {
	        Direction._v = value;
	      } else {
	        warn('Direction value must be `ltr` or `rtl`');
	      }
	    }
	  });
	  /**
	   * Clear direction class:
	   * - on destroy to bring HTML to its initial state
	   * - on update to remove class before reappling bellow
	   */

	  Events.on(['destroy', 'update'], function () {
	    Direction.removeClass();
	  });
	  /**
	   * Remount component:
	   * - on update to reflect changes in direction value
	   */

	  Events.on('update', function () {
	    Direction.mount();
	  });
	  /**
	   * Apply direction class:
	   * - before building to apply class for the first time
	   * - on updating to reapply direction class that may changed
	   */

	  Events.on(['build.before', 'update'], function () {
	    Direction.addClass();
	  });
	  return Direction;
	}

	/**
	 * Reflects value of glide movement.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */
	function Rtl (Glide, Components) {
	  return {
	    /**
	     * Negates the passed translate if glide is in RTL option.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    modify: function modify(translate) {
	      if (Components.Direction.is('rtl')) {
	        return -translate;
	      }

	      return translate;
	    }
	  };
	}

	/**
	 * Updates glide movement with a `gap` settings.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */
	function Gap (Glide, Components) {
	  return {
	    /**
	     * Modifies passed translate value with number in the `gap` settings.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    modify: function modify(translate) {
	      var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
	      return translate + Components.Gaps.value * multiplier;
	    }
	  };
	}

	/**
	 * Updates glide movement with width of additional clones width.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */
	function Grow (Glide, Components) {
	  return {
	    /**
	     * Adds to the passed translate width of the half of clones.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    modify: function modify(translate) {
	      return translate + Components.Clones.grow / 2;
	    }
	  };
	}

	/**
	 * Updates glide movement with a `peek` settings.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */

	function Peeking (Glide, Components) {
	  return {
	    /**
	     * Modifies passed translate value with a `peek` setting.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    modify: function modify(translate) {
	      if (Glide.settings.focusAt >= 0) {
	        var peek = Components.Peek.value;

	        if (isObject(peek)) {
	          return translate - peek.before;
	        }

	        return translate - peek;
	      }

	      return translate;
	    }
	  };
	}

	/**
	 * Updates glide movement with a `focusAt` settings.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */
	function Focusing (Glide, Components) {
	  return {
	    /**
	     * Modifies passed translate value with index in the `focusAt` setting.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    modify: function modify(translate) {
	      var gap = Components.Gaps.value;
	      var width = Components.Sizes.width;
	      var focusAt = Glide.settings.focusAt;
	      var slideWidth = Components.Sizes.slideWidth;

	      if (focusAt === 'center') {
	        return translate - (width / 2 - slideWidth / 2);
	      }

	      return translate - slideWidth * focusAt - gap * focusAt;
	    }
	  };
	}

	/**
	 * Applies diffrent transformers on translate value.
	 *
	 * @param  {Object} Glide
	 * @param  {Object} Components
	 * @return {Object}
	 */

	function mutator (Glide, Components, Events) {
	  /**
	   * Merge instance transformers with collection of default transformers.
	   * It's important that the Rtl component be last on the list,
	   * so it reflects all previous transformations.
	   *
	   * @type {Array}
	   */
	  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);
	  return {
	    /**
	     * Piplines translate value with registered transformers.
	     *
	     * @param  {Number} translate
	     * @return {Number}
	     */
	    mutate: function mutate(translate) {
	      for (var i = 0; i < TRANSFORMERS.length; i++) {
	        var transformer = TRANSFORMERS[i];

	        if (isFunction(transformer) && isFunction(transformer().modify)) {
	          translate = transformer(Glide, Components, Events).modify(translate);
	        } else {
	          warn('Transformer should be a function that returns an object with `modify()` method');
	        }
	      }

	      return translate;
	    }
	  };
	}

	function Translate (Glide, Components, Events) {
	  var Translate = {
	    /**
	     * Sets value of translate on HTML element.
	     *
	     * @param {Number} value
	     * @return {Void}
	     */
	    set: function set(value) {
	      var transform = mutator(Glide, Components).mutate(value);
	      var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
	      Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

	      Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

	      Components.Html.wrapper.style.transform = translate3d;
	    },

	    /**
	     * Removes value of translate from HTML element.
	     *
	     * @return {Void}
	     */
	    remove: function remove() {
	      Components.Html.wrapper.style.transform = '';
	    },

	    /**
	     * @return {number}
	     */
	    getStartIndex: function getStartIndex() {
	      var length = Components.Sizes.length;
	      var index = Glide.index;
	      var perView = Glide.settings.perView;

	      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
	        return length + (index - perView);
	      } // "modulo length" converts an index that equals length to zero


	      return (index + perView) % length;
	    },

	    /**
	     * @return {number}
	     */
	    getTravelDistance: function getTravelDistance() {
	      var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;

	      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
	        // reverse travel distance so that we don't have to change subtract operations
	        return travelDistance * -1;
	      }

	      return travelDistance;
	    }
	  };
	  /**
	   * Set new translate value:
	   * - on move to reflect index change
	   * - on updating via API to reflect possible changes in options
	   */

	  Events.on('move', function (context) {
	    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
	      return Translate.set(context.movement);
	    }

	    Components.Transition.after(function () {
	      Events.emit('translate.jump');
	      Translate.set(Components.Sizes.slideWidth * Glide.index);
	    });
	    var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
	    return Translate.set(startWidth - Components.Translate.getTravelDistance());
	  });
	  /**
	   * Remove translate:
	   * - on destroying to bring markup to its inital state
	   */

	  Events.on('destroy', function () {
	    Translate.remove();
	  });
	  return Translate;
	}

	function Transition (Glide, Components, Events) {
	  /**
	   * Holds inactivity status of transition.
	   * When true transition is not applied.
	   *
	   * @type {Boolean}
	   */
	  var disabled = false;
	  var Transition = {
	    /**
	     * Composes string of the CSS transition.
	     *
	     * @param {String} property
	     * @return {String}
	     */
	    compose: function compose(property) {
	      var settings = Glide.settings;

	      if (disabled) {
	        return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
	      }

	      return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
	    },

	    /**
	     * Sets value of transition on HTML element.
	     *
	     * @param {String=} property
	     * @return {Void}
	     */
	    set: function set() {
	      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
	      Components.Html.wrapper.style.transition = this.compose(property);
	    },

	    /**
	     * Removes value of transition from HTML element.
	     *
	     * @return {Void}
	     */
	    remove: function remove() {
	      Components.Html.wrapper.style.transition = '';
	    },

	    /**
	     * Runs callback after animation.
	     *
	     * @param  {Function} callback
	     * @return {Void}
	     */
	    after: function after(callback) {
	      setTimeout(function () {
	        callback();
	      }, this.duration);
	    },

	    /**
	     * Enable transition.
	     *
	     * @return {Void}
	     */
	    enable: function enable() {
	      disabled = false;
	      this.set();
	    },

	    /**
	     * Disable transition.
	     *
	     * @return {Void}
	     */
	    disable: function disable() {
	      disabled = true;
	      this.set();
	    }
	  };
	  define(Transition, 'duration', {
	    /**
	     * Gets duration of the transition based
	     * on currently running animation type.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      var settings = Glide.settings;

	      if (Glide.isType('slider') && Components.Run.offset) {
	        return settings.rewindDuration;
	      }

	      return settings.animationDuration;
	    }
	  });
	  /**
	   * Set transition `style` value:
	   * - on each moving, because it may be cleared by offset move
	   */

	  Events.on('move', function () {
	    Transition.set();
	  });
	  /**
	   * Disable transition:
	   * - before initial build to avoid transitioning from `0` to `startAt` index
	   * - while resizing window and recalculating dimensions
	   * - on jumping from offset transition at start and end edges in `carousel` type
	   */

	  Events.on(['build.before', 'resize', 'translate.jump'], function () {
	    Transition.disable();
	  });
	  /**
	   * Enable transition:
	   * - on each running, because it may be disabled by offset move
	   */

	  Events.on('run', function () {
	    Transition.enable();
	  });
	  /**
	   * Remove transition:
	   * - on destroying to bring markup to its inital state
	   */

	  Events.on('destroy', function () {
	    Transition.remove();
	  });
	  return Transition;
	}

	/**
	 * Test via a getter in the options object to see
	 * if the passive property is accessed.
	 *
	 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
	 */
	var supportsPassive = false;

	try {
	  var opts = Object.defineProperty({}, 'passive', {
	    get: function get() {
	      supportsPassive = true;
	    }
	  });
	  window.addEventListener('testPassive', null, opts);
	  window.removeEventListener('testPassive', null, opts);
	} catch (e) {}

	var supportsPassive$1 = supportsPassive;

	var START_EVENTS = ['touchstart', 'mousedown'];
	var MOVE_EVENTS = ['touchmove', 'mousemove'];
	var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
	var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
	function Swipe$1 (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var swipeSin = 0;
	  var swipeStartX = 0;
	  var swipeStartY = 0;
	  var disabled = false;
	  var capture = supportsPassive$1 ? {
	    passive: true
	  } : false;
	  var Swipe = {
	    /**
	     * Initializes swipe bindings.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this.bindSwipeStart();
	    },

	    /**
	     * Handler for `swipestart` event. Calculates entry points of the user's tap.
	     *
	     * @param {Object} event
	     * @return {Void}
	     */
	    start: function start(event) {
	      if (!disabled && !Glide.disabled) {
	        this.disable();
	        var swipe = this.touches(event);
	        swipeSin = null;
	        swipeStartX = toInt(swipe.pageX);
	        swipeStartY = toInt(swipe.pageY);
	        this.bindSwipeMove();
	        this.bindSwipeEnd();
	        Events.emit('swipe.start');
	      }
	    },

	    /**
	     * Handler for `swipemove` event. Calculates user's tap angle and distance.
	     *
	     * @param {Object} event
	     */
	    move: function move(event) {
	      if (!Glide.disabled) {
	        var _Glide$settings = Glide.settings,
	            touchAngle = _Glide$settings.touchAngle,
	            touchRatio = _Glide$settings.touchRatio,
	            classes = _Glide$settings.classes;
	        var swipe = this.touches(event);
	        var subExSx = toInt(swipe.pageX) - swipeStartX;
	        var subEySy = toInt(swipe.pageY) - swipeStartY;
	        var powEX = Math.abs(subExSx << 2);
	        var powEY = Math.abs(subEySy << 2);
	        var swipeHypotenuse = Math.sqrt(powEX + powEY);
	        var swipeCathetus = Math.sqrt(powEY);
	        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

	        if (swipeSin * 180 / Math.PI < touchAngle) {
	          event.stopPropagation();
	          Components.Move.make(subExSx * toFloat(touchRatio));
	          Components.Html.root.classList.add(classes.dragging);
	          Events.emit('swipe.move');
	        } else {
	          return false;
	        }
	      }
	    },

	    /**
	     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
	     *
	     * @param {Object} event
	     * @return {Void}
	     */
	    end: function end(event) {
	      if (!Glide.disabled) {
	        var _Glide$settings2 = Glide.settings,
	            perSwipe = _Glide$settings2.perSwipe,
	            touchAngle = _Glide$settings2.touchAngle,
	            classes = _Glide$settings2.classes;
	        var swipe = this.touches(event);
	        var threshold = this.threshold(event);
	        var swipeDistance = swipe.pageX - swipeStartX;
	        var swipeDeg = swipeSin * 180 / Math.PI;
	        this.enable();

	        if (swipeDistance > threshold && swipeDeg < touchAngle) {
	          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
	        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
	          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
	        } else {
	          // While swipe don't reach distance apply previous transform.
	          Components.Move.make();
	        }

	        Components.Html.root.classList.remove(classes.dragging);
	        this.unbindSwipeMove();
	        this.unbindSwipeEnd();
	        Events.emit('swipe.end');
	      }
	    },

	    /**
	     * Binds swipe's starting event.
	     *
	     * @return {Void}
	     */
	    bindSwipeStart: function bindSwipeStart() {
	      var _this = this;

	      var _Glide$settings3 = Glide.settings,
	          swipeThreshold = _Glide$settings3.swipeThreshold,
	          dragThreshold = _Glide$settings3.dragThreshold;

	      if (swipeThreshold) {
	        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
	          _this.start(event);
	        }, capture);
	      }

	      if (dragThreshold) {
	        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
	          _this.start(event);
	        }, capture);
	      }
	    },

	    /**
	     * Unbinds swipe's starting event.
	     *
	     * @return {Void}
	     */
	    unbindSwipeStart: function unbindSwipeStart() {
	      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
	      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
	    },

	    /**
	     * Binds swipe's moving event.
	     *
	     * @return {Void}
	     */
	    bindSwipeMove: function bindSwipeMove() {
	      var _this2 = this;

	      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
	        _this2.move(event);
	      }, Glide.settings.throttle), capture);
	    },

	    /**
	     * Unbinds swipe's moving event.
	     *
	     * @return {Void}
	     */
	    unbindSwipeMove: function unbindSwipeMove() {
	      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
	    },

	    /**
	     * Binds swipe's ending event.
	     *
	     * @return {Void}
	     */
	    bindSwipeEnd: function bindSwipeEnd() {
	      var _this3 = this;

	      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
	        _this3.end(event);
	      });
	    },

	    /**
	     * Unbinds swipe's ending event.
	     *
	     * @return {Void}
	     */
	    unbindSwipeEnd: function unbindSwipeEnd() {
	      Binder.off(END_EVENTS, Components.Html.wrapper);
	    },

	    /**
	     * Normalizes event touches points accorting to different types.
	     *
	     * @param {Object} event
	     */
	    touches: function touches(event) {
	      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
	        return event;
	      }

	      return event.touches[0] || event.changedTouches[0];
	    },

	    /**
	     * Gets value of minimum swipe distance settings based on event type.
	     *
	     * @return {Number}
	     */
	    threshold: function threshold(event) {
	      var settings = Glide.settings;

	      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
	        return settings.dragThreshold;
	      }

	      return settings.swipeThreshold;
	    },

	    /**
	     * Enables swipe event.
	     *
	     * @return {self}
	     */
	    enable: function enable() {
	      disabled = false;
	      Components.Transition.enable();
	      return this;
	    },

	    /**
	     * Disables swipe event.
	     *
	     * @return {self}
	     */
	    disable: function disable() {
	      disabled = true;
	      Components.Transition.disable();
	      return this;
	    }
	  };
	  /**
	   * Add component class:
	   * - after initial building
	   */

	  Events.on('build.after', function () {
	    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
	  });
	  /**
	   * Remove swiping bindings:
	   * - on destroying, to remove added EventListeners
	   */

	  Events.on('destroy', function () {
	    Swipe.unbindSwipeStart();
	    Swipe.unbindSwipeMove();
	    Swipe.unbindSwipeEnd();
	    Binder.destroy();
	  });
	  return Swipe;
	}

	function Images (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var Images = {
	    /**
	     * Binds listener to glide wrapper.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this.bind();
	    },

	    /**
	     * Binds `dragstart` event on wrapper to prevent dragging images.
	     *
	     * @return {Void}
	     */
	    bind: function bind() {
	      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
	    },

	    /**
	     * Unbinds `dragstart` event on wrapper.
	     *
	     * @return {Void}
	     */
	    unbind: function unbind() {
	      Binder.off('dragstart', Components.Html.wrapper);
	    },

	    /**
	     * Event handler. Prevents dragging.
	     *
	     * @return {Void}
	     */
	    dragstart: function dragstart(event) {
	      event.preventDefault();
	    }
	  };
	  /**
	   * Remove bindings from images:
	   * - on destroying, to remove added EventListeners
	   */

	  Events.on('destroy', function () {
	    Images.unbind();
	    Binder.destroy();
	  });
	  return Images;
	}

	function Anchors (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  /**
	   * Holds detaching status of anchors.
	   * Prevents detaching of already detached anchors.
	   *
	   * @private
	   * @type {Boolean}
	   */

	  var detached = false;
	  /**
	   * Holds preventing status of anchors.
	   * If `true` redirection after click will be disabled.
	   *
	   * @private
	   * @type {Boolean}
	   */

	  var prevented = false;
	  var Anchors = {
	    /**
	     * Setups a initial state of anchors component.
	     *
	     * @returns {Void}
	     */
	    mount: function mount() {
	      /**
	       * Holds collection of anchors elements.
	       *
	       * @private
	       * @type {HTMLCollection}
	       */
	      this._a = Components.Html.wrapper.querySelectorAll('a');
	      this.bind();
	    },

	    /**
	     * Binds events to anchors inside a track.
	     *
	     * @return {Void}
	     */
	    bind: function bind() {
	      Binder.on('click', Components.Html.wrapper, this.click);
	    },

	    /**
	     * Unbinds events attached to anchors inside a track.
	     *
	     * @return {Void}
	     */
	    unbind: function unbind() {
	      Binder.off('click', Components.Html.wrapper);
	    },

	    /**
	     * Handler for click event. Prevents clicks when glide is in `prevent` status.
	     *
	     * @param  {Object} event
	     * @return {Void}
	     */
	    click: function click(event) {
	      if (prevented) {
	        event.stopPropagation();
	        event.preventDefault();
	      }
	    },

	    /**
	     * Detaches anchors click event inside glide.
	     *
	     * @return {self}
	     */
	    detach: function detach() {
	      prevented = true;

	      if (!detached) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].draggable = false;
	        }

	        detached = true;
	      }

	      return this;
	    },

	    /**
	     * Attaches anchors click events inside glide.
	     *
	     * @return {self}
	     */
	    attach: function attach() {
	      prevented = false;

	      if (detached) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].draggable = true;
	        }

	        detached = false;
	      }

	      return this;
	    }
	  };
	  define(Anchors, 'items', {
	    /**
	     * Gets collection of the arrows HTML elements.
	     *
	     * @return {HTMLElement[]}
	     */
	    get: function get() {
	      return Anchors._a;
	    }
	  });
	  /**
	   * Detach anchors inside slides:
	   * - on swiping, so they won't redirect to its `href` attributes
	   */

	  Events.on('swipe.move', function () {
	    Anchors.detach();
	  });
	  /**
	   * Attach anchors inside slides:
	   * - after swiping and transitions ends, so they can redirect after click again
	   */

	  Events.on('swipe.end', function () {
	    Components.Transition.after(function () {
	      Anchors.attach();
	    });
	  });
	  /**
	   * Unbind anchors inside slides:
	   * - on destroying, to bring anchors to its initial state
	   */

	  Events.on('destroy', function () {
	    Anchors.attach();
	    Anchors.unbind();
	    Binder.destroy();
	  });
	  return Anchors;
	}

	var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
	var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
	var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\"<\"]");
	var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\">\"]");
	function Controls (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var capture = supportsPassive$1 ? {
	    passive: true
	  } : false;
	  var Controls = {
	    /**
	     * Inits arrows. Binds events listeners
	     * to the arrows HTML elements.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      /**
	       * Collection of navigation HTML elements.
	       *
	       * @private
	       * @type {HTMLCollection}
	       */
	      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
	      /**
	       * Collection of controls HTML elements.
	       *
	       * @private
	       * @type {HTMLCollection}
	       */

	      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
	      /**
	       * Collection of arrow control HTML elements.
	       *
	       * @private
	       * @type {Object}
	       */

	      this._arrowControls = {
	        previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
	        next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
	      };
	      this.addBindings();
	    },

	    /**
	     * Sets active class to current slide.
	     *
	     * @return {Void}
	     */
	    setActive: function setActive() {
	      for (var i = 0; i < this._n.length; i++) {
	        this.addClass(this._n[i].children);
	      }
	    },

	    /**
	     * Removes active class to current slide.
	     *
	     * @return {Void}
	     */
	    removeActive: function removeActive() {
	      for (var i = 0; i < this._n.length; i++) {
	        this.removeClass(this._n[i].children);
	      }
	    },

	    /**
	     * Toggles active class on items inside navigation.
	     *
	     * @param  {HTMLElement} controls
	     * @return {Void}
	     */
	    addClass: function addClass(controls) {
	      var settings = Glide.settings;
	      var item = controls[Glide.index];

	      if (!item) {
	        return;
	      }

	      item.classList.add(settings.classes.nav.active);
	      siblings(item).forEach(function (sibling) {
	        sibling.classList.remove(settings.classes.nav.active);
	      });
	    },

	    /**
	     * Removes active class from active control.
	     *
	     * @param  {HTMLElement} controls
	     * @return {Void}
	     */
	    removeClass: function removeClass(controls) {
	      var item = controls[Glide.index];
	      item === null || item === void 0 ? void 0 : item.classList.remove(Glide.settings.classes.nav.active);
	    },

	    /**
	     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
	     */
	    setArrowState: function setArrowState() {
	      if (Glide.settings.rewind) {
	        return;
	      }

	      var next = Controls._arrowControls.next;
	      var previous = Controls._arrowControls.previous;
	      this.resetArrowState(next, previous);

	      if (Glide.index === 0) {
	        this.disableArrow(previous);
	      }

	      if (Glide.index === Components.Run.length) {
	        this.disableArrow(next);
	      }
	    },

	    /**
	     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
	     *
	     * @param {NodeList[]} lists
	     */
	    resetArrowState: function resetArrowState() {
	      var settings = Glide.settings;

	      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
	        lists[_key] = arguments[_key];
	      }

	      lists.forEach(function (list) {
	        toArray(list).forEach(function (element) {
	          element.classList.remove(settings.classes.arrow.disabled);
	        });
	      });
	    },

	    /**
	     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
	     *
	     * @param {NodeList[]} lists
	     */
	    disableArrow: function disableArrow() {
	      var settings = Glide.settings;

	      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        lists[_key2] = arguments[_key2];
	      }

	      lists.forEach(function (list) {
	        toArray(list).forEach(function (element) {
	          element.classList.add(settings.classes.arrow.disabled);
	        });
	      });
	    },

	    /**
	     * Adds handles to the each group of controls.
	     *
	     * @return {Void}
	     */
	    addBindings: function addBindings() {
	      for (var i = 0; i < this._c.length; i++) {
	        this.bind(this._c[i].children);
	      }
	    },

	    /**
	     * Removes handles from the each group of controls.
	     *
	     * @return {Void}
	     */
	    removeBindings: function removeBindings() {
	      for (var i = 0; i < this._c.length; i++) {
	        this.unbind(this._c[i].children);
	      }
	    },

	    /**
	     * Binds events to arrows HTML elements.
	     *
	     * @param {HTMLCollection} elements
	     * @return {Void}
	     */
	    bind: function bind(elements) {
	      for (var i = 0; i < elements.length; i++) {
	        Binder.on('click', elements[i], this.click);
	        Binder.on('touchstart', elements[i], this.click, capture);
	      }
	    },

	    /**
	     * Unbinds events binded to the arrows HTML elements.
	     *
	     * @param {HTMLCollection} elements
	     * @return {Void}
	     */
	    unbind: function unbind(elements) {
	      for (var i = 0; i < elements.length; i++) {
	        Binder.off(['click', 'touchstart'], elements[i]);
	      }
	    },

	    /**
	     * Handles `click` event on the arrows HTML elements.
	     * Moves slider in direction given via the
	     * `data-glide-dir` attribute.
	     *
	     * @param {Object} event
	     * @return {void}
	     */
	    click: function click(event) {
	      if (!supportsPassive$1 && event.type === 'touchstart') {
	        event.preventDefault();
	      }

	      var direction = event.currentTarget.getAttribute('data-glide-dir');
	      Components.Run.make(Components.Direction.resolve(direction));
	    }
	  };
	  define(Controls, 'items', {
	    /**
	     * Gets collection of the controls HTML elements.
	     *
	     * @return {HTMLElement[]}
	     */
	    get: function get() {
	      return Controls._c;
	    }
	  });
	  /**
	   * Swap active class of current navigation item:
	   * - after mounting to set it to initial index
	   * - after each move to the new index
	   */

	  Events.on(['mount.after', 'move.after'], function () {
	    Controls.setActive();
	  });
	  /**
	   * Add or remove disabled class of arrow elements
	   */

	  Events.on(['mount.after', 'run'], function () {
	    Controls.setArrowState();
	  });
	  /**
	   * Remove bindings and HTML Classes:
	   * - on destroying, to bring markup to its initial state
	   */

	  Events.on('destroy', function () {
	    Controls.removeBindings();
	    Controls.removeActive();
	    Binder.destroy();
	  });
	  return Controls;
	}

	function Keyboard (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var Keyboard = {
	    /**
	     * Binds keyboard events on component mount.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      if (Glide.settings.keyboard) {
	        this.bind();
	      }
	    },

	    /**
	     * Adds keyboard press events.
	     *
	     * @return {Void}
	     */
	    bind: function bind() {
	      Binder.on('keyup', document, this.press);
	    },

	    /**
	     * Removes keyboard press events.
	     *
	     * @return {Void}
	     */
	    unbind: function unbind() {
	      Binder.off('keyup', document);
	    },

	    /**
	     * Handles keyboard's arrows press and moving glide foward and backward.
	     *
	     * @param  {Object} event
	     * @return {Void}
	     */
	    press: function press(event) {
	      var perSwipe = Glide.settings.perSwipe;
	      var arrowSymbols = {
	        ArrowRight: '>',
	        ArrowLeft: '<'
	      };

	      if (['ArrowRight', 'ArrowLeft'].includes(event.code)) {
	        Components.Run.make(Components.Direction.resolve("".concat(perSwipe).concat(arrowSymbols[event.code])));
	      }
	    }
	  };
	  /**
	   * Remove bindings from keyboard:
	   * - on destroying to remove added events
	   * - on updating to remove events before remounting
	   */

	  Events.on(['destroy', 'update'], function () {
	    Keyboard.unbind();
	  });
	  /**
	   * Remount component
	   * - on updating to reflect potential changes in settings
	   */

	  Events.on('update', function () {
	    Keyboard.mount();
	  });
	  /**
	   * Destroy binder:
	   * - on destroying to remove listeners
	   */

	  Events.on('destroy', function () {
	    Binder.destroy();
	  });
	  return Keyboard;
	}

	function Autoplay (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  var Autoplay = {
	    /**
	     * Initializes autoplaying and events.
	     *
	     * @return {Void}
	     */
	    mount: function mount() {
	      this.enable();
	      this.start();

	      if (Glide.settings.hoverpause) {
	        this.bind();
	      }
	    },

	    /**
	     * Enables autoplaying
	     *
	     * @returns {Void}
	     */
	    enable: function enable() {
	      this._e = true;
	    },

	    /**
	     * Disables autoplaying.
	     *
	     * @returns {Void}
	     */
	    disable: function disable() {
	      this._e = false;
	    },

	    /**
	     * Starts autoplaying in configured interval.
	     *
	     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
	     * @return {Void}
	     */
	    start: function start() {
	      var _this = this;

	      if (!this._e) {
	        return;
	      }

	      this.enable();

	      if (Glide.settings.autoplay) {
	        if (isUndefined(this._i)) {
	          this._i = setInterval(function () {
	            _this.stop();

	            Components.Run.make('>');

	            _this.start();

	            Events.emit('autoplay');
	          }, this.time);
	        }
	      }
	    },

	    /**
	     * Stops autorunning of the glide.
	     *
	     * @return {Void}
	     */
	    stop: function stop() {
	      this._i = clearInterval(this._i);
	    },

	    /**
	     * Stops autoplaying while mouse is over glide's area.
	     *
	     * @return {Void}
	     */
	    bind: function bind() {
	      var _this2 = this;

	      Binder.on('mouseover', Components.Html.root, function () {
	        if (_this2._e) {
	          _this2.stop();
	        }
	      });
	      Binder.on('mouseout', Components.Html.root, function () {
	        if (_this2._e) {
	          _this2.start();
	        }
	      });
	    },

	    /**
	     * Unbind mouseover events.
	     *
	     * @returns {Void}
	     */
	    unbind: function unbind() {
	      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
	    }
	  };
	  define(Autoplay, 'time', {
	    /**
	     * Gets time period value for the autoplay interval. Prioritizes
	     * times in `data-glide-autoplay` attrubutes over options.
	     *
	     * @return {Number}
	     */
	    get: function get() {
	      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

	      if (autoplay) {
	        return toInt(autoplay);
	      }

	      return toInt(Glide.settings.autoplay);
	    }
	  });
	  /**
	   * Stop autoplaying and unbind events:
	   * - on destroying, to clear defined interval
	   * - on updating via API to reset interval that may changed
	   */

	  Events.on(['destroy', 'update'], function () {
	    Autoplay.unbind();
	  });
	  /**
	   * Stop autoplaying:
	   * - before each run, to restart autoplaying
	   * - on pausing via API
	   * - on destroying, to clear defined interval
	   * - while starting a swipe
	   * - on updating via API to reset interval that may changed
	   */

	  Events.on(['run.before', 'swipe.start', 'update'], function () {
	    Autoplay.stop();
	  });
	  Events.on(['pause', 'destroy'], function () {
	    Autoplay.disable();
	    Autoplay.stop();
	  });
	  /**
	   * Start autoplaying:
	   * - after each run, to restart autoplaying
	   * - on playing via API
	   * - while ending a swipe
	   */

	  Events.on(['run.after', 'swipe.end'], function () {
	    Autoplay.start();
	  });
	  /**
	   * Start autoplaying:
	   * - after each run, to restart autoplaying
	   * - on playing via API
	   * - while ending a swipe
	   */

	  Events.on(['play'], function () {
	    Autoplay.enable();
	    Autoplay.start();
	  });
	  /**
	   * Remount autoplaying:
	   * - on updating via API to reset interval that may changed
	   */

	  Events.on('update', function () {
	    Autoplay.mount();
	  });
	  /**
	   * Destroy a binder:
	   * - on destroying glide instance to clearup listeners
	   */

	  Events.on('destroy', function () {
	    Binder.destroy();
	  });
	  return Autoplay;
	}

	/**
	 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
	 *
	 * @param {Object} points
	 * @returns {Object}
	 */

	function sortBreakpoints(points) {
	  if (isObject(points)) {
	    return sortKeys(points);
	  } else {
	    warn("Breakpoints option must be an object");
	  }

	  return {};
	}

	function Breakpoints (Glide, Components, Events) {
	  /**
	   * Instance of the binder for DOM Events.
	   *
	   * @type {EventsBinder}
	   */
	  var Binder = new EventsBinder();
	  /**
	   * Holds reference to settings.
	   *
	   * @type {Object}
	   */

	  var settings = Glide.settings;
	  /**
	   * Holds reference to breakpoints object in settings. Sorts breakpoints
	   * from smaller to larger. It is required in order to proper
	   * matching currently active breakpoint settings.
	   *
	   * @type {Object}
	   */

	  var points = sortBreakpoints(settings.breakpoints);
	  /**
	   * Cache initial settings before overwritting.
	   *
	   * @type {Object}
	   */

	  var defaults = Object.assign({}, settings);
	  var Breakpoints = {
	    /**
	     * Matches settings for currectly matching media breakpoint.
	     *
	     * @param {Object} points
	     * @returns {Object}
	     */
	    match: function match(points) {
	      if (typeof window.matchMedia !== 'undefined') {
	        for (var point in points) {
	          if (points.hasOwnProperty(point)) {
	            if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
	              return points[point];
	            }
	          }
	        }
	      }

	      return defaults;
	    }
	  };
	  /**
	   * Overwrite instance settings with currently matching breakpoint settings.
	   * This happens right after component initialization.
	   */

	  Object.assign(settings, Breakpoints.match(points));
	  /**
	   * Update glide with settings of matched brekpoint:
	   * - window resize to update slider
	   */

	  Binder.on('resize', window, throttle(function () {
	    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
	  }, Glide.settings.throttle));
	  /**
	   * Resort and update default settings:
	   * - on reinit via API, so breakpoint matching will be performed with options
	   */

	  Events.on('update', function () {
	    points = sortBreakpoints(points);
	    defaults = Object.assign({}, settings);
	  });
	  /**
	   * Unbind resize listener:
	   * - on destroying, to bring markup to its initial state
	   */

	  Events.on('destroy', function () {
	    Binder.off('resize', window);
	  });
	  return Breakpoints;
	}

	var COMPONENTS = {
	  // Required
	  Html: Html,
	  Translate: Translate,
	  Transition: Transition,
	  Direction: Direction,
	  Peek: Peek,
	  Sizes: Sizes,
	  Gaps: Gaps,
	  Move: Move,
	  Clones: Clones,
	  Resize: Resize,
	  Build: Build,
	  Run: Run,
	  // Optional
	  Swipe: Swipe$1,
	  Images: Images,
	  Anchors: Anchors,
	  Controls: Controls,
	  Keyboard: Keyboard,
	  Autoplay: Autoplay,
	  Breakpoints: Breakpoints
	};

	var Glide = /*#__PURE__*/function (_Core) {
	  _inherits(Glide, _Core);

	  var _super = _createSuper(Glide);

	  function Glide() {
	    _classCallCheck(this, Glide);

	    return _super.apply(this, arguments);
	  }

	  _createClass(Glide, [{
	    key: "mount",
	    value: function mount() {
	      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
	    }
	  }]);

	  return Glide;
	}(Glide$1);

	var select2 = createCommonjsModule(function (module) {
	(function (factory) {
	  if (module.exports) {
	    // Node/CommonJS
	    module.exports = function (root, jQuery) {
	      if (jQuery === undefined) {
	        // require('jQuery') returns a factory that requires window to
	        // build a jQuery instance, we normalize how we use modules
	        // that require this pattern but the window provided is a noop
	        // if it's defined (how jquery works)
	        if (typeof window !== 'undefined') {
	          jQuery = jquery;
	        }
	        else {
	          jQuery = jquery(root);
	        }
	      }
	      factory(jQuery);
	      return jQuery;
	    };
	  } else {
	    // Browser globals
	    factory(jQuery);
	  }
	} (function (jQuery) {
	  // This is needed so we can catch the AMD loader configuration and use it
	  // The inner file should be wrapped (by `banner.start.js`) in a function that
	  // returns the AMD loader references.
	  var S2 =(function () {
	  // Restore the Select2 AMD loader so it can be used
	  // Needed mostly in the language files, where the loader is not inserted
	  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
	    var S2 = jQuery.fn.select2.amd;
	  }
	var S2;(function () { if (!S2 || !S2.requirejs) {
	if (!S2) { S2 = {}; } else { require = S2; }
	/**
	 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
	 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
	 */
	//Going sloppy to avoid 'use strict' string cost, but strict practices should
	//be followed.
	/*global setTimeout: false */

	var requirejs, require, define;
	(function (undef) {
	    var main, req, makeMap, handlers,
	        defined = {},
	        waiting = {},
	        config = {},
	        defining = {},
	        hasOwn = Object.prototype.hasOwnProperty,
	        aps = [].slice,
	        jsSuffixRegExp = /\.js$/;

	    function hasProp(obj, prop) {
	        return hasOwn.call(obj, prop);
	    }

	    /**
	     * Given a relative module name, like ./something, normalize it to
	     * a real name that can be mapped to a path.
	     * @param {String} name the relative name
	     * @param {String} baseName a real name that the name arg is relative
	     * to.
	     * @returns {String} normalized name
	     */
	    function normalize(name, baseName) {
	        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
	            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
	            baseParts = baseName && baseName.split("/"),
	            map = config.map,
	            starMap = (map && map['*']) || {};

	        //Adjust any relative paths.
	        if (name) {
	            name = name.split('/');
	            lastIndex = name.length - 1;

	            // If wanting node ID compatibility, strip .js from end
	            // of IDs. Have to do this here, and not in nameToUrl
	            // because node allows either .js or non .js to map
	            // to same file.
	            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
	                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
	            }

	            // Starts with a '.' so need the baseName
	            if (name[0].charAt(0) === '.' && baseParts) {
	                //Convert baseName to array, and lop off the last part,
	                //so that . matches that 'directory' and not name of the baseName's
	                //module. For instance, baseName of 'one/two/three', maps to
	                //'one/two/three.js', but we want the directory, 'one/two' for
	                //this normalization.
	                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
	                name = normalizedBaseParts.concat(name);
	            }

	            //start trimDots
	            for (i = 0; i < name.length; i++) {
	                part = name[i];
	                if (part === '.') {
	                    name.splice(i, 1);
	                    i -= 1;
	                } else if (part === '..') {
	                    // If at the start, or previous value is still ..,
	                    // keep them so that when converted to a path it may
	                    // still work when converted to a path, even though
	                    // as an ID it is less than ideal. In larger point
	                    // releases, may be better to just kick out an error.
	                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
	                        continue;
	                    } else if (i > 0) {
	                        name.splice(i - 1, 2);
	                        i -= 2;
	                    }
	                }
	            }
	            //end trimDots

	            name = name.join('/');
	        }

	        //Apply map config if available.
	        if ((baseParts || starMap) && map) {
	            nameParts = name.split('/');

	            for (i = nameParts.length; i > 0; i -= 1) {
	                nameSegment = nameParts.slice(0, i).join("/");

	                if (baseParts) {
	                    //Find the longest baseName segment match in the config.
	                    //So, do joins on the biggest to smallest lengths of baseParts.
	                    for (j = baseParts.length; j > 0; j -= 1) {
	                        mapValue = map[baseParts.slice(0, j).join('/')];

	                        //baseName segment has  config, find if it has one for
	                        //this name.
	                        if (mapValue) {
	                            mapValue = mapValue[nameSegment];
	                            if (mapValue) {
	                                //Match, update name to the new value.
	                                foundMap = mapValue;
	                                foundI = i;
	                                break;
	                            }
	                        }
	                    }
	                }

	                if (foundMap) {
	                    break;
	                }

	                //Check for a star map match, but just hold on to it,
	                //if there is a shorter segment match later in a matching
	                //config, then favor over this star map.
	                if (!foundStarMap && starMap && starMap[nameSegment]) {
	                    foundStarMap = starMap[nameSegment];
	                    starI = i;
	                }
	            }

	            if (!foundMap && foundStarMap) {
	                foundMap = foundStarMap;
	                foundI = starI;
	            }

	            if (foundMap) {
	                nameParts.splice(0, foundI, foundMap);
	                name = nameParts.join('/');
	            }
	        }

	        return name;
	    }

	    function makeRequire(relName, forceSync) {
	        return function () {
	            //A version of a require function that passes a moduleName
	            //value for items that may need to
	            //look up paths relative to the moduleName
	            var args = aps.call(arguments, 0);

	            //If first arg is not require('string'), and there is only
	            //one arg, it is the array form without a callback. Insert
	            //a null so that the following concat is correct.
	            if (typeof args[0] !== 'string' && args.length === 1) {
	                args.push(null);
	            }
	            return req.apply(undef, args.concat([relName, forceSync]));
	        };
	    }

	    function makeNormalize(relName) {
	        return function (name) {
	            return normalize(name, relName);
	        };
	    }

	    function makeLoad(depName) {
	        return function (value) {
	            defined[depName] = value;
	        };
	    }

	    function callDep(name) {
	        if (hasProp(waiting, name)) {
	            var args = waiting[name];
	            delete waiting[name];
	            defining[name] = true;
	            main.apply(undef, args);
	        }

	        if (!hasProp(defined, name) && !hasProp(defining, name)) {
	            throw new Error('No ' + name);
	        }
	        return defined[name];
	    }

	    //Turns a plugin!resource to [plugin, resource]
	    //with the plugin being undefined if the name
	    //did not have a plugin prefix.
	    function splitPrefix(name) {
	        var prefix,
	            index = name ? name.indexOf('!') : -1;
	        if (index > -1) {
	            prefix = name.substring(0, index);
	            name = name.substring(index + 1, name.length);
	        }
	        return [prefix, name];
	    }

	    //Creates a parts array for a relName where first part is plugin ID,
	    //second part is resource ID. Assumes relName has already been normalized.
	    function makeRelParts(relName) {
	        return relName ? splitPrefix(relName) : [];
	    }

	    /**
	     * Makes a name map, normalizing the name, and using a plugin
	     * for normalization if necessary. Grabs a ref to plugin
	     * too, as an optimization.
	     */
	    makeMap = function (name, relParts) {
	        var plugin,
	            parts = splitPrefix(name),
	            prefix = parts[0],
	            relResourceName = relParts[1];

	        name = parts[1];

	        if (prefix) {
	            prefix = normalize(prefix, relResourceName);
	            plugin = callDep(prefix);
	        }

	        //Normalize according
	        if (prefix) {
	            if (plugin && plugin.normalize) {
	                name = plugin.normalize(name, makeNormalize(relResourceName));
	            } else {
	                name = normalize(name, relResourceName);
	            }
	        } else {
	            name = normalize(name, relResourceName);
	            parts = splitPrefix(name);
	            prefix = parts[0];
	            name = parts[1];
	            if (prefix) {
	                plugin = callDep(prefix);
	            }
	        }

	        //Using ridiculous property names for space reasons
	        return {
	            f: prefix ? prefix + '!' + name : name, //fullName
	            n: name,
	            pr: prefix,
	            p: plugin
	        };
	    };

	    function makeConfig(name) {
	        return function () {
	            return (config && config.config && config.config[name]) || {};
	        };
	    }

	    handlers = {
	        require: function (name) {
	            return makeRequire(name);
	        },
	        exports: function (name) {
	            var e = defined[name];
	            if (typeof e !== 'undefined') {
	                return e;
	            } else {
	                return (defined[name] = {});
	            }
	        },
	        module: function (name) {
	            return {
	                id: name,
	                uri: '',
	                exports: defined[name],
	                config: makeConfig(name)
	            };
	        }
	    };

	    main = function (name, deps, callback, relName) {
	        var cjsModule, depName, ret, map, i, relParts,
	            args = [],
	            callbackType = typeof callback,
	            usingExports;

	        //Use name if no relName
	        relName = relName || name;
	        relParts = makeRelParts(relName);

	        //Call the callback to define the module, if necessary.
	        if (callbackType === 'undefined' || callbackType === 'function') {
	            //Pull out the defined dependencies and pass the ordered
	            //values to the callback.
	            //Default to [require, exports, module] if no deps
	            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
	            for (i = 0; i < deps.length; i += 1) {
	                map = makeMap(deps[i], relParts);
	                depName = map.f;

	                //Fast path CommonJS standard dependencies.
	                if (depName === "require") {
	                    args[i] = handlers.require(name);
	                } else if (depName === "exports") {
	                    //CommonJS module spec 1.1
	                    args[i] = handlers.exports(name);
	                    usingExports = true;
	                } else if (depName === "module") {
	                    //CommonJS module spec 1.1
	                    cjsModule = args[i] = handlers.module(name);
	                } else if (hasProp(defined, depName) ||
	                           hasProp(waiting, depName) ||
	                           hasProp(defining, depName)) {
	                    args[i] = callDep(depName);
	                } else if (map.p) {
	                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
	                    args[i] = defined[depName];
	                } else {
	                    throw new Error(name + ' missing ' + depName);
	                }
	            }

	            ret = callback ? callback.apply(defined[name], args) : undefined;

	            if (name) {
	                //If setting exports via "module" is in play,
	                //favor that over return value and exports. After that,
	                //favor a non-undefined return value over exports use.
	                if (cjsModule && cjsModule.exports !== undef &&
	                        cjsModule.exports !== defined[name]) {
	                    defined[name] = cjsModule.exports;
	                } else if (ret !== undef || !usingExports) {
	                    //Use the return value from the function.
	                    defined[name] = ret;
	                }
	            }
	        } else if (name) {
	            //May just be an object definition for the module. Only
	            //worry about defining if have a module name.
	            defined[name] = callback;
	        }
	    };

	    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
	        if (typeof deps === "string") {
	            if (handlers[deps]) {
	                //callback in this case is really relName
	                return handlers[deps](callback);
	            }
	            //Just return the module wanted. In this scenario, the
	            //deps arg is the module name, and second arg (if passed)
	            //is just the relName.
	            //Normalize module name, if it contains . or ..
	            return callDep(makeMap(deps, makeRelParts(callback)).f);
	        } else if (!deps.splice) {
	            //deps is a config object, not an array.
	            config = deps;
	            if (config.deps) {
	                req(config.deps, config.callback);
	            }
	            if (!callback) {
	                return;
	            }

	            if (callback.splice) {
	                //callback is an array, which means it is a dependency list.
	                //Adjust args if there are dependencies
	                deps = callback;
	                callback = relName;
	                relName = null;
	            } else {
	                deps = undef;
	            }
	        }

	        //Support require(['a'])
	        callback = callback || function () {};

	        //If relName is a function, it is an errback handler,
	        //so remove it.
	        if (typeof relName === 'function') {
	            relName = forceSync;
	            forceSync = alt;
	        }

	        //Simulate async callback;
	        if (forceSync) {
	            main(undef, deps, callback, relName);
	        } else {
	            //Using a non-zero value because of concern for what old browsers
	            //do, and latest browsers "upgrade" to 4 if lower value is used:
	            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
	            //If want a value immediately, use require('id') instead -- something
	            //that works in almond on the global level, but not guaranteed and
	            //unlikely to work in other AMD implementations.
	            setTimeout(function () {
	                main(undef, deps, callback, relName);
	            }, 4);
	        }

	        return req;
	    };

	    /**
	     * Just drops the config on the floor, but returns req in case
	     * the config return value is used.
	     */
	    req.config = function (cfg) {
	        return req(cfg);
	    };

	    /**
	     * Expose module registry for debugging and tooling
	     */
	    requirejs._defined = defined;

	    define = function (name, deps, callback) {
	        if (typeof name !== 'string') {
	            throw new Error('See almond README: incorrect module build, no module name');
	        }

	        //This module may not have dependencies
	        if (!deps.splice) {
	            //deps is not an array, so probably means
	            //an object literal or factory function for
	            //the value. Adjust args.
	            callback = deps;
	            deps = [];
	        }

	        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
	            waiting[name] = [name, deps, callback];
	        }
	    };

	    define.amd = {
	        jQuery: true
	    };
	}());

	S2.requirejs = requirejs;S2.require = require;S2.define = define;
	}
	}());
	S2.define("almond", function(){});

	/* global jQuery:false, $:false */
	S2.define('jquery',[],function () {
	  var _$ = jQuery || $;

	  if (_$ == null && console && console.error) {
	    console.error(
	      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
	      'found. Make sure that you are including jQuery before Select2 on your ' +
	      'web page.'
	    );
	  }

	  return _$;
	});

	S2.define('select2/utils',[
	  'jquery'
	], function ($) {
	  var Utils = {};

	  Utils.Extend = function (ChildClass, SuperClass) {
	    var __hasProp = {}.hasOwnProperty;

	    function BaseConstructor () {
	      this.constructor = ChildClass;
	    }

	    for (var key in SuperClass) {
	      if (__hasProp.call(SuperClass, key)) {
	        ChildClass[key] = SuperClass[key];
	      }
	    }

	    BaseConstructor.prototype = SuperClass.prototype;
	    ChildClass.prototype = new BaseConstructor();
	    ChildClass.__super__ = SuperClass.prototype;

	    return ChildClass;
	  };

	  function getMethods (theClass) {
	    var proto = theClass.prototype;

	    var methods = [];

	    for (var methodName in proto) {
	      var m = proto[methodName];

	      if (typeof m !== 'function') {
	        continue;
	      }

	      if (methodName === 'constructor') {
	        continue;
	      }

	      methods.push(methodName);
	    }

	    return methods;
	  }

	  Utils.Decorate = function (SuperClass, DecoratorClass) {
	    var decoratedMethods = getMethods(DecoratorClass);
	    var superMethods = getMethods(SuperClass);

	    function DecoratedClass () {
	      var unshift = Array.prototype.unshift;

	      var argCount = DecoratorClass.prototype.constructor.length;

	      var calledConstructor = SuperClass.prototype.constructor;

	      if (argCount > 0) {
	        unshift.call(arguments, SuperClass.prototype.constructor);

	        calledConstructor = DecoratorClass.prototype.constructor;
	      }

	      calledConstructor.apply(this, arguments);
	    }

	    DecoratorClass.displayName = SuperClass.displayName;

	    function ctr () {
	      this.constructor = DecoratedClass;
	    }

	    DecoratedClass.prototype = new ctr();

	    for (var m = 0; m < superMethods.length; m++) {
	      var superMethod = superMethods[m];

	      DecoratedClass.prototype[superMethod] =
	        SuperClass.prototype[superMethod];
	    }

	    var calledMethod = function (methodName) {
	      // Stub out the original method if it's not decorating an actual method
	      var originalMethod = function () {};

	      if (methodName in DecoratedClass.prototype) {
	        originalMethod = DecoratedClass.prototype[methodName];
	      }

	      var decoratedMethod = DecoratorClass.prototype[methodName];

	      return function () {
	        var unshift = Array.prototype.unshift;

	        unshift.call(arguments, originalMethod);

	        return decoratedMethod.apply(this, arguments);
	      };
	    };

	    for (var d = 0; d < decoratedMethods.length; d++) {
	      var decoratedMethod = decoratedMethods[d];

	      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
	    }

	    return DecoratedClass;
	  };

	  var Observable = function () {
	    this.listeners = {};
	  };

	  Observable.prototype.on = function (event, callback) {
	    this.listeners = this.listeners || {};

	    if (event in this.listeners) {
	      this.listeners[event].push(callback);
	    } else {
	      this.listeners[event] = [callback];
	    }
	  };

	  Observable.prototype.trigger = function (event) {
	    var slice = Array.prototype.slice;
	    var params = slice.call(arguments, 1);

	    this.listeners = this.listeners || {};

	    // Params should always come in as an array
	    if (params == null) {
	      params = [];
	    }

	    // If there are no arguments to the event, use a temporary object
	    if (params.length === 0) {
	      params.push({});
	    }

	    // Set the `_type` of the first object to the event
	    params[0]._type = event;

	    if (event in this.listeners) {
	      this.invoke(this.listeners[event], slice.call(arguments, 1));
	    }

	    if ('*' in this.listeners) {
	      this.invoke(this.listeners['*'], arguments);
	    }
	  };

	  Observable.prototype.invoke = function (listeners, params) {
	    for (var i = 0, len = listeners.length; i < len; i++) {
	      listeners[i].apply(this, params);
	    }
	  };

	  Utils.Observable = Observable;

	  Utils.generateChars = function (length) {
	    var chars = '';

	    for (var i = 0; i < length; i++) {
	      var randomChar = Math.floor(Math.random() * 36);
	      chars += randomChar.toString(36);
	    }

	    return chars;
	  };

	  Utils.bind = function (func, context) {
	    return function () {
	      func.apply(context, arguments);
	    };
	  };

	  Utils._convertData = function (data) {
	    for (var originalKey in data) {
	      var keys = originalKey.split('-');

	      var dataLevel = data;

	      if (keys.length === 1) {
	        continue;
	      }

	      for (var k = 0; k < keys.length; k++) {
	        var key = keys[k];

	        // Lowercase the first letter
	        // By default, dash-separated becomes camelCase
	        key = key.substring(0, 1).toLowerCase() + key.substring(1);

	        if (!(key in dataLevel)) {
	          dataLevel[key] = {};
	        }

	        if (k == keys.length - 1) {
	          dataLevel[key] = data[originalKey];
	        }

	        dataLevel = dataLevel[key];
	      }

	      delete data[originalKey];
	    }

	    return data;
	  };

	  Utils.hasScroll = function (index, el) {
	    // Adapted from the function created by @ShadowScripter
	    // and adapted by @BillBarry on the Stack Exchange Code Review website.
	    // The original code can be found at
	    // http://codereview.stackexchange.com/q/13338
	    // and was designed to be used with the Sizzle selector engine.

	    var $el = $(el);
	    var overflowX = el.style.overflowX;
	    var overflowY = el.style.overflowY;

	    //Check both x and y declarations
	    if (overflowX === overflowY &&
	        (overflowY === 'hidden' || overflowY === 'visible')) {
	      return false;
	    }

	    if (overflowX === 'scroll' || overflowY === 'scroll') {
	      return true;
	    }

	    return ($el.innerHeight() < el.scrollHeight ||
	      $el.innerWidth() < el.scrollWidth);
	  };

	  Utils.escapeMarkup = function (markup) {
	    var replaceMap = {
	      '\\': '&#92;',
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      '\'': '&#39;',
	      '/': '&#47;'
	    };

	    // Do not try to escape the markup if it's not a string
	    if (typeof markup !== 'string') {
	      return markup;
	    }

	    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	      return replaceMap[match];
	    });
	  };

	  // Cache objects in Utils.__cache instead of $.data (see #4346)
	  Utils.__cache = {};

	  var id = 0;
	  Utils.GetUniqueElementId = function (element) {
	    // Get a unique element Id. If element has no id,
	    // creates a new unique number, stores it in the id
	    // attribute and returns the new id with a prefix.
	    // If an id already exists, it simply returns it with a prefix.

	    var select2Id = element.getAttribute('data-select2-id');

	    if (select2Id != null) {
	      return select2Id;
	    }

	    // If element has id, use it.
	    if (element.id) {
	      select2Id = 'select2-data-' + element.id;
	    } else {
	      select2Id = 'select2-data-' + (++id).toString() +
	        '-' + Utils.generateChars(4);
	    }

	    element.setAttribute('data-select2-id', select2Id);

	    return select2Id;
	  };

	  Utils.StoreData = function (element, name, value) {
	    // Stores an item in the cache for a specified element.
	    // name is the cache key.
	    var id = Utils.GetUniqueElementId(element);
	    if (!Utils.__cache[id]) {
	      Utils.__cache[id] = {};
	    }

	    Utils.__cache[id][name] = value;
	  };

	  Utils.GetData = function (element, name) {
	    // Retrieves a value from the cache by its key (name)
	    // name is optional. If no name specified, return
	    // all cache items for the specified element.
	    // and for a specified element.
	    var id = Utils.GetUniqueElementId(element);
	    if (name) {
	      if (Utils.__cache[id]) {
	        if (Utils.__cache[id][name] != null) {
	          return Utils.__cache[id][name];
	        }
	        return $(element).data(name); // Fallback to HTML5 data attribs.
	      }
	      return $(element).data(name); // Fallback to HTML5 data attribs.
	    } else {
	      return Utils.__cache[id];
	    }
	  };

	  Utils.RemoveData = function (element) {
	    // Removes all cached items for a specified element.
	    var id = Utils.GetUniqueElementId(element);
	    if (Utils.__cache[id] != null) {
	      delete Utils.__cache[id];
	    }

	    element.removeAttribute('data-select2-id');
	  };

	  Utils.copyNonInternalCssClasses = function (dest, src) {

	    var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);

	    destinationClasses = destinationClasses.filter(function (clazz) {
	      // Save all Select2 classes
	      return clazz.indexOf('select2-') === 0;
	    });

	    var sourceClasses = src.getAttribute('class').trim().split(/\s+/);

	    sourceClasses = sourceClasses.filter(function (clazz) {
	      // Only copy non-Select2 classes
	      return clazz.indexOf('select2-') !== 0;
	    });

	    var replacements = destinationClasses.concat(sourceClasses);

	    dest.setAttribute('class', replacements.join(' '));
	  };

	  return Utils;
	});

	S2.define('select2/results',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Results ($element, options, dataAdapter) {
	    this.$element = $element;
	    this.data = dataAdapter;
	    this.options = options;

	    Results.__super__.constructor.call(this);
	  }

	  Utils.Extend(Results, Utils.Observable);

	  Results.prototype.render = function () {
	    var $results = $(
	      '<ul class="select2-results__options" role="listbox"></ul>'
	    );

	    if (this.options.get('multiple')) {
	      $results.attr('aria-multiselectable', 'true');
	    }

	    this.$results = $results;

	    return $results;
	  };

	  Results.prototype.clear = function () {
	    this.$results.empty();
	  };

	  Results.prototype.displayMessage = function (params) {
	    var escapeMarkup = this.options.get('escapeMarkup');

	    this.clear();
	    this.hideLoading();

	    var $message = $(
	      '<li role="alert" aria-live="assertive"' +
	      ' class="select2-results__option"></li>'
	    );

	    var message = this.options.get('translations').get(params.message);

	    $message.append(
	      escapeMarkup(
	        message(params.args)
	      )
	    );

	    $message[0].className += ' select2-results__message';

	    this.$results.append($message);
	  };

	  Results.prototype.hideMessages = function () {
	    this.$results.find('.select2-results__message').remove();
	  };

	  Results.prototype.append = function (data) {
	    this.hideLoading();

	    var $options = [];

	    if (data.results == null || data.results.length === 0) {
	      if (this.$results.children().length === 0) {
	        this.trigger('results:message', {
	          message: 'noResults'
	        });
	      }

	      return;
	    }

	    data.results = this.sort(data.results);

	    for (var d = 0; d < data.results.length; d++) {
	      var item = data.results[d];

	      var $option = this.option(item);

	      $options.push($option);
	    }

	    this.$results.append($options);
	  };

	  Results.prototype.position = function ($results, $dropdown) {
	    var $resultsContainer = $dropdown.find('.select2-results');
	    $resultsContainer.append($results);
	  };

	  Results.prototype.sort = function (data) {
	    var sorter = this.options.get('sorter');

	    return sorter(data);
	  };

	  Results.prototype.highlightFirstItem = function () {
	    var $options = this.$results
	      .find('.select2-results__option--selectable');

	    var $selected = $options.filter('.select2-results__option--selected');

	    // Check if there are any selected options
	    if ($selected.length > 0) {
	      // If there are selected options, highlight the first
	      $selected.first().trigger('mouseenter');
	    } else {
	      // If there are no selected options, highlight the first option
	      // in the dropdown
	      $options.first().trigger('mouseenter');
	    }

	    this.ensureHighlightVisible();
	  };

	  Results.prototype.setClasses = function () {
	    var self = this;

	    this.data.current(function (selected) {
	      var selectedIds = selected.map(function (s) {
	        return s.id.toString();
	      });

	      var $options = self.$results
	        .find('.select2-results__option--selectable');

	      $options.each(function () {
	        var $option = $(this);

	        var item = Utils.GetData(this, 'data');

	        // id needs to be converted to a string when comparing
	        var id = '' + item.id;

	        if ((item.element != null && item.element.selected) ||
	            (item.element == null && selectedIds.indexOf(id) > -1)) {
	          this.classList.add('select2-results__option--selected');
	          $option.attr('aria-selected', 'true');
	        } else {
	          this.classList.remove('select2-results__option--selected');
	          $option.attr('aria-selected', 'false');
	        }
	      });

	    });
	  };

	  Results.prototype.showLoading = function (params) {
	    this.hideLoading();

	    var loadingMore = this.options.get('translations').get('searching');

	    var loading = {
	      disabled: true,
	      loading: true,
	      text: loadingMore(params)
	    };
	    var $loading = this.option(loading);
	    $loading.className += ' loading-results';

	    this.$results.prepend($loading);
	  };

	  Results.prototype.hideLoading = function () {
	    this.$results.find('.loading-results').remove();
	  };

	  Results.prototype.option = function (data) {
	    var option = document.createElement('li');
	    option.classList.add('select2-results__option');
	    option.classList.add('select2-results__option--selectable');

	    var attrs = {
	      'role': 'option'
	    };

	    var matches = window.Element.prototype.matches ||
	      window.Element.prototype.msMatchesSelector ||
	      window.Element.prototype.webkitMatchesSelector;

	    if ((data.element != null && matches.call(data.element, ':disabled')) ||
	        (data.element == null && data.disabled)) {
	      attrs['aria-disabled'] = 'true';

	      option.classList.remove('select2-results__option--selectable');
	      option.classList.add('select2-results__option--disabled');
	    }

	    if (data.id == null) {
	      option.classList.remove('select2-results__option--selectable');
	    }

	    if (data._resultId != null) {
	      option.id = data._resultId;
	    }

	    if (data.title) {
	      option.title = data.title;
	    }

	    if (data.children) {
	      attrs.role = 'group';
	      attrs['aria-label'] = data.text;

	      option.classList.remove('select2-results__option--selectable');
	      option.classList.add('select2-results__option--group');
	    }

	    for (var attr in attrs) {
	      var val = attrs[attr];

	      option.setAttribute(attr, val);
	    }

	    if (data.children) {
	      var $option = $(option);

	      var label = document.createElement('strong');
	      label.className = 'select2-results__group';

	      this.template(data, label);

	      var $children = [];

	      for (var c = 0; c < data.children.length; c++) {
	        var child = data.children[c];

	        var $child = this.option(child);

	        $children.push($child);
	      }

	      var $childrenContainer = $('<ul></ul>', {
	        'class': 'select2-results__options select2-results__options--nested',
	        'role': 'none'
	      });

	      $childrenContainer.append($children);

	      $option.append(label);
	      $option.append($childrenContainer);
	    } else {
	      this.template(data, option);
	    }

	    Utils.StoreData(option, 'data', data);

	    return option;
	  };

	  Results.prototype.bind = function (container, $container) {
	    var self = this;

	    var id = container.id + '-results';

	    this.$results.attr('id', id);

	    container.on('results:all', function (params) {
	      self.clear();
	      self.append(params.data);

	      if (container.isOpen()) {
	        self.setClasses();
	        self.highlightFirstItem();
	      }
	    });

	    container.on('results:append', function (params) {
	      self.append(params.data);

	      if (container.isOpen()) {
	        self.setClasses();
	      }
	    });

	    container.on('query', function (params) {
	      self.hideMessages();
	      self.showLoading(params);
	    });

	    container.on('select', function () {
	      if (!container.isOpen()) {
	        return;
	      }

	      self.setClasses();

	      if (self.options.get('scrollAfterSelect')) {
	        self.highlightFirstItem();
	      }
	    });

	    container.on('unselect', function () {
	      if (!container.isOpen()) {
	        return;
	      }

	      self.setClasses();

	      if (self.options.get('scrollAfterSelect')) {
	        self.highlightFirstItem();
	      }
	    });

	    container.on('open', function () {
	      // When the dropdown is open, aria-expended="true"
	      self.$results.attr('aria-expanded', 'true');
	      self.$results.attr('aria-hidden', 'false');

	      self.setClasses();
	      self.ensureHighlightVisible();
	    });

	    container.on('close', function () {
	      // When the dropdown is closed, aria-expended="false"
	      self.$results.attr('aria-expanded', 'false');
	      self.$results.attr('aria-hidden', 'true');
	      self.$results.removeAttr('aria-activedescendant');
	    });

	    container.on('results:toggle', function () {
	      var $highlighted = self.getHighlightedResults();

	      if ($highlighted.length === 0) {
	        return;
	      }

	      $highlighted.trigger('mouseup');
	    });

	    container.on('results:select', function () {
	      var $highlighted = self.getHighlightedResults();

	      if ($highlighted.length === 0) {
	        return;
	      }

	      var data = Utils.GetData($highlighted[0], 'data');

	      if ($highlighted.hasClass('select2-results__option--selected')) {
	        self.trigger('close', {});
	      } else {
	        self.trigger('select', {
	          data: data
	        });
	      }
	    });

	    container.on('results:previous', function () {
	      var $highlighted = self.getHighlightedResults();

	      var $options = self.$results.find('.select2-results__option--selectable');

	      var currentIndex = $options.index($highlighted);

	      // If we are already at the top, don't move further
	      // If no options, currentIndex will be -1
	      if (currentIndex <= 0) {
	        return;
	      }

	      var nextIndex = currentIndex - 1;

	      // If none are highlighted, highlight the first
	      if ($highlighted.length === 0) {
	        nextIndex = 0;
	      }

	      var $next = $options.eq(nextIndex);

	      $next.trigger('mouseenter');

	      var currentOffset = self.$results.offset().top;
	      var nextTop = $next.offset().top;
	      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextTop - currentOffset < 0) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });

	    container.on('results:next', function () {
	      var $highlighted = self.getHighlightedResults();

	      var $options = self.$results.find('.select2-results__option--selectable');

	      var currentIndex = $options.index($highlighted);

	      var nextIndex = currentIndex + 1;

	      // If we are at the last option, stay there
	      if (nextIndex >= $options.length) {
	        return;
	      }

	      var $next = $options.eq(nextIndex);

	      $next.trigger('mouseenter');

	      var currentOffset = self.$results.offset().top +
	        self.$results.outerHeight(false);
	      var nextBottom = $next.offset().top + $next.outerHeight(false);
	      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextBottom > currentOffset) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });

	    container.on('results:focus', function (params) {
	      params.element[0].classList.add('select2-results__option--highlighted');
	      params.element[0].setAttribute('aria-selected', 'true');
	    });

	    container.on('results:message', function (params) {
	      self.displayMessage(params);
	    });

	    if ($.fn.mousewheel) {
	      this.$results.on('mousewheel', function (e) {
	        var top = self.$results.scrollTop();

	        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

	        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
	        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

	        if (isAtTop) {
	          self.$results.scrollTop(0);

	          e.preventDefault();
	          e.stopPropagation();
	        } else if (isAtBottom) {
	          self.$results.scrollTop(
	            self.$results.get(0).scrollHeight - self.$results.height()
	          );

	          e.preventDefault();
	          e.stopPropagation();
	        }
	      });
	    }

	    this.$results.on('mouseup', '.select2-results__option--selectable',
	      function (evt) {
	      var $this = $(this);

	      var data = Utils.GetData(this, 'data');

	      if ($this.hasClass('select2-results__option--selected')) {
	        if (self.options.get('multiple')) {
	          self.trigger('unselect', {
	            originalEvent: evt,
	            data: data
	          });
	        } else {
	          self.trigger('close', {});
	        }

	        return;
	      }

	      self.trigger('select', {
	        originalEvent: evt,
	        data: data
	      });
	    });

	    this.$results.on('mouseenter', '.select2-results__option--selectable',
	      function (evt) {
	      var data = Utils.GetData(this, 'data');

	      self.getHighlightedResults()
	          .removeClass('select2-results__option--highlighted')
	          .attr('aria-selected', 'false');

	      self.trigger('results:focus', {
	        data: data,
	        element: $(this)
	      });
	    });
	  };

	  Results.prototype.getHighlightedResults = function () {
	    var $highlighted = this.$results
	    .find('.select2-results__option--highlighted');

	    return $highlighted;
	  };

	  Results.prototype.destroy = function () {
	    this.$results.remove();
	  };

	  Results.prototype.ensureHighlightVisible = function () {
	    var $highlighted = this.getHighlightedResults();

	    if ($highlighted.length === 0) {
	      return;
	    }

	    var $options = this.$results.find('.select2-results__option--selectable');

	    var currentIndex = $options.index($highlighted);

	    var currentOffset = this.$results.offset().top;
	    var nextTop = $highlighted.offset().top;
	    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

	    var offsetDelta = nextTop - currentOffset;
	    nextOffset -= $highlighted.outerHeight(false) * 2;

	    if (currentIndex <= 2) {
	      this.$results.scrollTop(0);
	    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
	      this.$results.scrollTop(nextOffset);
	    }
	  };

	  Results.prototype.template = function (result, container) {
	    var template = this.options.get('templateResult');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    var content = template(result, container);

	    if (content == null) {
	      container.style.display = 'none';
	    } else if (typeof content === 'string') {
	      container.innerHTML = escapeMarkup(content);
	    } else {
	      $(container).append(content);
	    }
	  };

	  return Results;
	});

	S2.define('select2/keys',[

	], function () {
	  var KEYS = {
	    BACKSPACE: 8,
	    TAB: 9,
	    ENTER: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    ESC: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    DELETE: 46
	  };

	  return KEYS;
	});

	S2.define('select2/selection/base',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function BaseSelection ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    BaseSelection.__super__.constructor.call(this);
	  }

	  Utils.Extend(BaseSelection, Utils.Observable);

	  BaseSelection.prototype.render = function () {
	    var $selection = $(
	      '<span class="select2-selection" role="combobox" ' +
	      ' aria-haspopup="true" aria-expanded="false">' +
	      '</span>'
	    );

	    this._tabindex = 0;

	    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
	      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
	    } else if (this.$element.attr('tabindex') != null) {
	      this._tabindex = this.$element.attr('tabindex');
	    }

	    $selection.attr('title', this.$element.attr('title'));
	    $selection.attr('tabindex', this._tabindex);
	    $selection.attr('aria-disabled', 'false');

	    this.$selection = $selection;

	    return $selection;
	  };

	  BaseSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    var resultsId = container.id + '-results';

	    this.container = container;

	    this.$selection.on('focus', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this.$selection.on('blur', function (evt) {
	      self._handleBlur(evt);
	    });

	    this.$selection.on('keydown', function (evt) {
	      self.trigger('keypress', evt);

	      if (evt.which === KEYS.SPACE) {
	        evt.preventDefault();
	      }
	    });

	    container.on('results:focus', function (params) {
	      self.$selection.attr('aria-activedescendant', params.data._resultId);
	    });

	    container.on('selection:update', function (params) {
	      self.update(params.data);
	    });

	    container.on('open', function () {
	      // When the dropdown is open, aria-expanded="true"
	      self.$selection.attr('aria-expanded', 'true');
	      self.$selection.attr('aria-owns', resultsId);

	      self._attachCloseHandler(container);
	    });

	    container.on('close', function () {
	      // When the dropdown is closed, aria-expanded="false"
	      self.$selection.attr('aria-expanded', 'false');
	      self.$selection.removeAttr('aria-activedescendant');
	      self.$selection.removeAttr('aria-owns');

	      self.$selection.trigger('focus');

	      self._detachCloseHandler(container);
	    });

	    container.on('enable', function () {
	      self.$selection.attr('tabindex', self._tabindex);
	      self.$selection.attr('aria-disabled', 'false');
	    });

	    container.on('disable', function () {
	      self.$selection.attr('tabindex', '-1');
	      self.$selection.attr('aria-disabled', 'true');
	    });
	  };

	  BaseSelection.prototype._handleBlur = function (evt) {
	    var self = this;

	    // This needs to be delayed as the active element is the body when the tab
	    // key is pressed, possibly along with others.
	    window.setTimeout(function () {
	      // Don't trigger `blur` if the focus is still in the selection
	      if (
	        (document.activeElement == self.$selection[0]) ||
	        ($.contains(self.$selection[0], document.activeElement))
	      ) {
	        return;
	      }

	      self.trigger('blur', evt);
	    }, 1);
	  };

	  BaseSelection.prototype._attachCloseHandler = function (container) {

	    $(document.body).on('mousedown.select2.' + container.id, function (e) {
	      var $target = $(e.target);

	      var $select = $target.closest('.select2');

	      var $all = $('.select2.select2-container--open');

	      $all.each(function () {
	        if (this == $select[0]) {
	          return;
	        }

	        var $element = Utils.GetData(this, 'element');

	        $element.select2('close');
	      });
	    });
	  };

	  BaseSelection.prototype._detachCloseHandler = function (container) {
	    $(document.body).off('mousedown.select2.' + container.id);
	  };

	  BaseSelection.prototype.position = function ($selection, $container) {
	    var $selectionContainer = $container.find('.selection');
	    $selectionContainer.append($selection);
	  };

	  BaseSelection.prototype.destroy = function () {
	    this._detachCloseHandler(this.container);
	  };

	  BaseSelection.prototype.update = function (data) {
	    throw new Error('The `update` method must be defined in child classes.');
	  };

	  /**
	   * Helper method to abstract the "enabled" (not "disabled") state of this
	   * object.
	   *
	   * @return {true} if the instance is not disabled.
	   * @return {false} if the instance is disabled.
	   */
	  BaseSelection.prototype.isEnabled = function () {
	    return !this.isDisabled();
	  };

	  /**
	   * Helper method to abstract the "disabled" state of this object.
	   *
	   * @return {true} if the disabled option is true.
	   * @return {false} if the disabled option is false.
	   */
	  BaseSelection.prototype.isDisabled = function () {
	    return this.options.get('disabled');
	  };

	  return BaseSelection;
	});

	S2.define('select2/selection/single',[
	  'jquery',
	  './base',
	  '../utils',
	  '../keys'
	], function ($, BaseSelection, Utils, KEYS) {
	  function SingleSelection () {
	    SingleSelection.__super__.constructor.apply(this, arguments);
	  }

	  Utils.Extend(SingleSelection, BaseSelection);

	  SingleSelection.prototype.render = function () {
	    var $selection = SingleSelection.__super__.render.call(this);

	    $selection[0].classList.add('select2-selection--single');

	    $selection.html(
	      '<span class="select2-selection__rendered"></span>' +
	      '<span class="select2-selection__arrow" role="presentation">' +
	        '<b role="presentation"></b>' +
	      '</span>'
	    );

	    return $selection;
	  };

	  SingleSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    SingleSelection.__super__.bind.apply(this, arguments);

	    var id = container.id + '-container';

	    this.$selection.find('.select2-selection__rendered')
	      .attr('id', id)
	      .attr('role', 'textbox')
	      .attr('aria-readonly', 'true');
	    this.$selection.attr('aria-labelledby', id);
	    this.$selection.attr('aria-controls', id);

	    this.$selection.on('mousedown', function (evt) {
	      // Only respond to left clicks
	      if (evt.which !== 1) {
	        return;
	      }

	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });

	    this.$selection.on('focus', function (evt) {
	      // User focuses on the container
	    });

	    this.$selection.on('blur', function (evt) {
	      // User exits the container
	    });

	    container.on('focus', function (evt) {
	      if (!container.isOpen()) {
	        self.$selection.trigger('focus');
	      }
	    });
	  };

	  SingleSelection.prototype.clear = function () {
	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    $rendered.empty();
	    $rendered.removeAttr('title'); // clear tooltip on empty
	  };

	  SingleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    return escapeMarkup(template(data, container));
	  };

	  SingleSelection.prototype.selectionContainer = function () {
	    return $('<span></span>');
	  };

	  SingleSelection.prototype.update = function (data) {
	    if (data.length === 0) {
	      this.clear();
	      return;
	    }

	    var selection = data[0];

	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    var formatted = this.display(selection, $rendered);

	    $rendered.empty().append(formatted);

	    var title = selection.title || selection.text;

	    if (title) {
	      $rendered.attr('title', title);
	    } else {
	      $rendered.removeAttr('title');
	    }
	  };

	  return SingleSelection;
	});

	S2.define('select2/selection/multiple',[
	  'jquery',
	  './base',
	  '../utils'
	], function ($, BaseSelection, Utils) {
	  function MultipleSelection ($element, options) {
	    MultipleSelection.__super__.constructor.apply(this, arguments);
	  }

	  Utils.Extend(MultipleSelection, BaseSelection);

	  MultipleSelection.prototype.render = function () {
	    var $selection = MultipleSelection.__super__.render.call(this);

	    $selection[0].classList.add('select2-selection--multiple');

	    $selection.html(
	      '<ul class="select2-selection__rendered"></ul>'
	    );

	    return $selection;
	  };

	  MultipleSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    MultipleSelection.__super__.bind.apply(this, arguments);

	    var id = container.id + '-container';
	    this.$selection.find('.select2-selection__rendered').attr('id', id);

	    this.$selection.on('click', function (evt) {
	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });

	    this.$selection.on(
	      'click',
	      '.select2-selection__choice__remove',
	      function (evt) {
	        // Ignore the event if it is disabled
	        if (self.isDisabled()) {
	          return;
	        }

	        var $remove = $(this);
	        var $selection = $remove.parent();

	        var data = Utils.GetData($selection[0], 'data');

	        self.trigger('unselect', {
	          originalEvent: evt,
	          data: data
	        });
	      }
	    );

	    this.$selection.on(
	      'keydown',
	      '.select2-selection__choice__remove',
	      function (evt) {
	        // Ignore the event if it is disabled
	        if (self.isDisabled()) {
	          return;
	        }

	        evt.stopPropagation();
	      }
	    );
	  };

	  MultipleSelection.prototype.clear = function () {
	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    $rendered.empty();
	    $rendered.removeAttr('title');
	  };

	  MultipleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    return escapeMarkup(template(data, container));
	  };

	  MultipleSelection.prototype.selectionContainer = function () {
	    var $container = $(
	      '<li class="select2-selection__choice">' +
	        '<button type="button" class="select2-selection__choice__remove" ' +
	        'tabindex="-1">' +
	          '<span aria-hidden="true">&times;</span>' +
	        '</button>' +
	        '<span class="select2-selection__choice__display"></span>' +
	      '</li>'
	    );

	    return $container;
	  };

	  MultipleSelection.prototype.update = function (data) {
	    this.clear();

	    if (data.length === 0) {
	      return;
	    }

	    var $selections = [];

	    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
	      .attr('id') + '-choice-';

	    for (var d = 0; d < data.length; d++) {
	      var selection = data[d];

	      var $selection = this.selectionContainer();
	      var formatted = this.display(selection, $selection);

	      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

	      if (selection.id) {
	        selectionId += selection.id;
	      } else {
	        selectionId += Utils.generateChars(4);
	      }

	      $selection.find('.select2-selection__choice__display')
	        .append(formatted)
	        .attr('id', selectionId);

	      var title = selection.title || selection.text;

	      if (title) {
	        $selection.attr('title', title);
	      }

	      var removeItem = this.options.get('translations').get('removeItem');

	      var $remove = $selection.find('.select2-selection__choice__remove');

	      $remove.attr('title', removeItem());
	      $remove.attr('aria-label', removeItem());
	      $remove.attr('aria-describedby', selectionId);

	      Utils.StoreData($selection[0], 'data', selection);

	      $selections.push($selection);
	    }

	    var $rendered = this.$selection.find('.select2-selection__rendered');

	    $rendered.append($selections);
	  };

	  return MultipleSelection;
	});

	S2.define('select2/selection/placeholder',[

	], function () {
	  function Placeholder (decorated, $element, options) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

	    decorated.call(this, $element, options);
	  }

	  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }

	    return placeholder;
	  };

	  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
	    var $placeholder = this.selectionContainer();

	    $placeholder.html(this.display(placeholder));
	    $placeholder[0].classList.add('select2-selection__placeholder');
	    $placeholder[0].classList.remove('select2-selection__choice');

	    var placeholderTitle = placeholder.title ||
	      placeholder.text ||
	      $placeholder.text();

	    this.$selection.find('.select2-selection__rendered').attr(
	      'title',
	      placeholderTitle
	    );

	    return $placeholder;
	  };

	  Placeholder.prototype.update = function (decorated, data) {
	    var singlePlaceholder = (
	      data.length == 1 && data[0].id != this.placeholder.id
	    );
	    var multipleSelections = data.length > 1;

	    if (multipleSelections || singlePlaceholder) {
	      return decorated.call(this, data);
	    }

	    this.clear();

	    var $placeholder = this.createPlaceholder(this.placeholder);

	    this.$selection.find('.select2-selection__rendered').append($placeholder);
	  };

	  return Placeholder;
	});

	S2.define('select2/selection/allowClear',[
	  'jquery',
	  '../keys',
	  '../utils'
	], function ($, KEYS, Utils) {
	  function AllowClear () { }

	  AllowClear.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    if (this.placeholder == null) {
	      if (this.options.get('debug') && window.console && console.error) {
	        console.error(
	          'Select2: The `allowClear` option should be used in combination ' +
	          'with the `placeholder` option.'
	        );
	      }
	    }

	    this.$selection.on('mousedown', '.select2-selection__clear',
	      function (evt) {
	        self._handleClear(evt);
	    });

	    container.on('keypress', function (evt) {
	      self._handleKeyboardClear(evt, container);
	    });
	  };

	  AllowClear.prototype._handleClear = function (_, evt) {
	    // Ignore the event if it is disabled
	    if (this.isDisabled()) {
	      return;
	    }

	    var $clear = this.$selection.find('.select2-selection__clear');

	    // Ignore the event if nothing has been selected
	    if ($clear.length === 0) {
	      return;
	    }

	    evt.stopPropagation();

	    var data = Utils.GetData($clear[0], 'data');

	    var previousVal = this.$element.val();
	    this.$element.val(this.placeholder.id);

	    var unselectData = {
	      data: data
	    };
	    this.trigger('clear', unselectData);
	    if (unselectData.prevented) {
	      this.$element.val(previousVal);
	      return;
	    }

	    for (var d = 0; d < data.length; d++) {
	      unselectData = {
	        data: data[d]
	      };

	      // Trigger the `unselect` event, so people can prevent it from being
	      // cleared.
	      this.trigger('unselect', unselectData);

	      // If the event was prevented, don't clear it out.
	      if (unselectData.prevented) {
	        this.$element.val(previousVal);
	        return;
	      }
	    }

	    this.$element.trigger('input').trigger('change');

	    this.trigger('toggle', {});
	  };

	  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
	    if (container.isOpen()) {
	      return;
	    }

	    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
	      this._handleClear(evt);
	    }
	  };

	  AllowClear.prototype.update = function (decorated, data) {
	    decorated.call(this, data);

	    this.$selection.find('.select2-selection__clear').remove();
	    this.$selection[0].classList.remove('select2-selection--clearable');

	    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
	        data.length === 0) {
	      return;
	    }

	    var selectionId = this.$selection.find('.select2-selection__rendered')
	      .attr('id');

	    var removeAll = this.options.get('translations').get('removeAllItems');

	    var $remove = $(
	      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
	        '<span aria-hidden="true">&times;</span>' +
	      '</button>'
	    );
	    $remove.attr('title', removeAll());
	    $remove.attr('aria-label', removeAll());
	    $remove.attr('aria-describedby', selectionId);
	    Utils.StoreData($remove[0], 'data', data);

	    this.$selection.prepend($remove);
	    this.$selection[0].classList.add('select2-selection--clearable');
	  };

	  return AllowClear;
	});

	S2.define('select2/selection/search',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function Search (decorated, $element, options) {
	    decorated.call(this, $element, options);
	  }

	  Search.prototype.render = function (decorated) {
	    var searchLabel = this.options.get('translations').get('search');
	    var $search = $(
	      '<span class="select2-search select2-search--inline">' +
	        '<textarea class="select2-search__field"'+
	        ' type="search" tabindex="-1"' +
	        ' autocorrect="off" autocapitalize="none"' +
	        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
	        '</textarea>' +
	      '</span>'
	    );

	    this.$searchContainer = $search;
	    this.$search = $search.find('textarea');

	    this.$search.prop('autocomplete', this.options.get('autocomplete'));
	    this.$search.attr('aria-label', searchLabel());

	    var $rendered = decorated.call(this);

	    this._transferTabIndex();
	    $rendered.append(this.$searchContainer);

	    return $rendered;
	  };

	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    var resultsId = container.id + '-results';
	    var selectionId = container.id + '-container';

	    decorated.call(this, container, $container);

	    self.$search.attr('aria-describedby', selectionId);

	    container.on('open', function () {
	      self.$search.attr('aria-controls', resultsId);
	      self.$search.trigger('focus');
	    });

	    container.on('close', function () {
	      self.$search.val('');
	      self.resizeSearch();
	      self.$search.removeAttr('aria-controls');
	      self.$search.removeAttr('aria-activedescendant');
	      self.$search.trigger('focus');
	    });

	    container.on('enable', function () {
	      self.$search.prop('disabled', false);

	      self._transferTabIndex();
	    });

	    container.on('disable', function () {
	      self.$search.prop('disabled', true);
	    });

	    container.on('focus', function (evt) {
	      self.$search.trigger('focus');
	    });

	    container.on('results:focus', function (params) {
	      if (params.data._resultId) {
	        self.$search.attr('aria-activedescendant', params.data._resultId);
	      } else {
	        self.$search.removeAttr('aria-activedescendant');
	      }
	    });

	    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
	      self._handleBlur(evt);
	    });

	    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
	      evt.stopPropagation();

	      self.trigger('keypress', evt);

	      self._keyUpPrevented = evt.isDefaultPrevented();

	      var key = evt.which;

	      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
	        var $previousChoice = self.$selection
	          .find('.select2-selection__choice').last();

	        if ($previousChoice.length > 0) {
	          var item = Utils.GetData($previousChoice[0], 'data');

	          self.searchRemoveChoice(item);

	          evt.preventDefault();
	        }
	      }
	    });

	    this.$selection.on('click', '.select2-search--inline', function (evt) {
	      if (self.$search.val()) {
	        evt.stopPropagation();
	      }
	    });

	    // Try to detect the IE version should the `documentMode` property that
	    // is stored on the document. This is only implemented in IE and is
	    // slightly cleaner than doing a user agent check.
	    // This property is not available in Edge, but Edge also doesn't have
	    // this bug.
	    var msie = document.documentMode;
	    var disableInputEvents = msie && msie <= 11;

	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$selection.on(
	      'input.searchcheck',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents) {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }

	        // Unbind the duplicated `keyup` event
	        self.$selection.off('keyup.search');
	      }
	    );

	    this.$selection.on(
	      'keyup.search input.search',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents && evt.type === 'input') {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }

	        var key = evt.which;

	        // We can freely ignore events from modifier keys
	        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
	          return;
	        }

	        // Tabbing will be handled during the `keydown` phase
	        if (key == KEYS.TAB) {
	          return;
	        }

	        self.handleSearch(evt);
	      }
	    );
	  };

	  /**
	   * This method will transfer the tabindex attribute from the rendered
	   * selection to the search box. This allows for the search box to be used as
	   * the primary focus instead of the selection container.
	   *
	   * @private
	   */
	  Search.prototype._transferTabIndex = function (decorated) {
	    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
	    this.$selection.attr('tabindex', '-1');
	  };

	  Search.prototype.createPlaceholder = function (decorated, placeholder) {
	    this.$search.attr('placeholder', placeholder.text);
	  };

	  Search.prototype.update = function (decorated, data) {
	    var searchHadFocus = this.$search[0] == document.activeElement;

	    this.$search.attr('placeholder', '');

	    decorated.call(this, data);

	    this.resizeSearch();
	    if (searchHadFocus) {
	      this.$search.trigger('focus');
	    }
	  };

	  Search.prototype.handleSearch = function () {
	    this.resizeSearch();

	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();

	      this.trigger('query', {
	        term: input
	      });
	    }

	    this._keyUpPrevented = false;
	  };

	  Search.prototype.searchRemoveChoice = function (decorated, item) {
	    this.trigger('unselect', {
	      data: item
	    });

	    this.$search.val(item.text);
	    this.handleSearch();
	  };

	  Search.prototype.resizeSearch = function () {
	    this.$search.css('width', '25px');

	    var width = '100%';

	    if (this.$search.attr('placeholder') === '') {
	      var minimumWidth = this.$search.val().length + 1;

	      width = (minimumWidth * 0.75) + 'em';
	    }

	    this.$search.css('width', width);
	  };

	  return Search;
	});

	S2.define('select2/selection/selectionCss',[
	  '../utils'
	], function (Utils) {
	  function SelectionCSS () { }

	  SelectionCSS.prototype.render = function (decorated) {
	    var $selection = decorated.call(this);

	    var selectionCssClass = this.options.get('selectionCssClass') || '';

	    if (selectionCssClass.indexOf(':all:') !== -1) {
	      selectionCssClass = selectionCssClass.replace(':all:', '');

	      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
	    }

	    $selection.addClass(selectionCssClass);

	    return $selection;
	  };

	  return SelectionCSS;
	});

	S2.define('select2/selection/eventRelay',[
	  'jquery'
	], function ($) {
	  function EventRelay () { }

	  EventRelay.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	    var relayEvents = [
	      'open', 'opening',
	      'close', 'closing',
	      'select', 'selecting',
	      'unselect', 'unselecting',
	      'clear', 'clearing'
	    ];

	    var preventableEvents = [
	      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
	    ];

	    decorated.call(this, container, $container);

	    container.on('*', function (name, params) {
	      // Ignore events that should not be relayed
	      if (relayEvents.indexOf(name) === -1) {
	        return;
	      }

	      // The parameters should always be an object
	      params = params || {};

	      // Generate the jQuery event for the Select2 event
	      var evt = $.Event('select2:' + name, {
	        params: params
	      });

	      self.$element.trigger(evt);

	      // Only handle preventable events if it was one
	      if (preventableEvents.indexOf(name) === -1) {
	        return;
	      }

	      params.prevented = evt.isDefaultPrevented();
	    });
	  };

	  return EventRelay;
	});

	S2.define('select2/translation',[
	  'jquery',
	  'require'
	], function ($, require) {
	  function Translation (dict) {
	    this.dict = dict || {};
	  }

	  Translation.prototype.all = function () {
	    return this.dict;
	  };

	  Translation.prototype.get = function (key) {
	    return this.dict[key];
	  };

	  Translation.prototype.extend = function (translation) {
	    this.dict = $.extend({}, translation.all(), this.dict);
	  };

	  // Static functions

	  Translation._cache = {};

	  Translation.loadPath = function (path) {
	    if (!(path in Translation._cache)) {
	      var translations = require(path);

	      Translation._cache[path] = translations;
	    }

	    return new Translation(Translation._cache[path]);
	  };

	  return Translation;
	});

	S2.define('select2/diacritics',[

	], function () {
	  var diacritics = {
	    '\u24B6': 'A',
	    '\uFF21': 'A',
	    '\u00C0': 'A',
	    '\u00C1': 'A',
	    '\u00C2': 'A',
	    '\u1EA6': 'A',
	    '\u1EA4': 'A',
	    '\u1EAA': 'A',
	    '\u1EA8': 'A',
	    '\u00C3': 'A',
	    '\u0100': 'A',
	    '\u0102': 'A',
	    '\u1EB0': 'A',
	    '\u1EAE': 'A',
	    '\u1EB4': 'A',
	    '\u1EB2': 'A',
	    '\u0226': 'A',
	    '\u01E0': 'A',
	    '\u00C4': 'A',
	    '\u01DE': 'A',
	    '\u1EA2': 'A',
	    '\u00C5': 'A',
	    '\u01FA': 'A',
	    '\u01CD': 'A',
	    '\u0200': 'A',
	    '\u0202': 'A',
	    '\u1EA0': 'A',
	    '\u1EAC': 'A',
	    '\u1EB6': 'A',
	    '\u1E00': 'A',
	    '\u0104': 'A',
	    '\u023A': 'A',
	    '\u2C6F': 'A',
	    '\uA732': 'AA',
	    '\u00C6': 'AE',
	    '\u01FC': 'AE',
	    '\u01E2': 'AE',
	    '\uA734': 'AO',
	    '\uA736': 'AU',
	    '\uA738': 'AV',
	    '\uA73A': 'AV',
	    '\uA73C': 'AY',
	    '\u24B7': 'B',
	    '\uFF22': 'B',
	    '\u1E02': 'B',
	    '\u1E04': 'B',
	    '\u1E06': 'B',
	    '\u0243': 'B',
	    '\u0182': 'B',
	    '\u0181': 'B',
	    '\u24B8': 'C',
	    '\uFF23': 'C',
	    '\u0106': 'C',
	    '\u0108': 'C',
	    '\u010A': 'C',
	    '\u010C': 'C',
	    '\u00C7': 'C',
	    '\u1E08': 'C',
	    '\u0187': 'C',
	    '\u023B': 'C',
	    '\uA73E': 'C',
	    '\u24B9': 'D',
	    '\uFF24': 'D',
	    '\u1E0A': 'D',
	    '\u010E': 'D',
	    '\u1E0C': 'D',
	    '\u1E10': 'D',
	    '\u1E12': 'D',
	    '\u1E0E': 'D',
	    '\u0110': 'D',
	    '\u018B': 'D',
	    '\u018A': 'D',
	    '\u0189': 'D',
	    '\uA779': 'D',
	    '\u01F1': 'DZ',
	    '\u01C4': 'DZ',
	    '\u01F2': 'Dz',
	    '\u01C5': 'Dz',
	    '\u24BA': 'E',
	    '\uFF25': 'E',
	    '\u00C8': 'E',
	    '\u00C9': 'E',
	    '\u00CA': 'E',
	    '\u1EC0': 'E',
	    '\u1EBE': 'E',
	    '\u1EC4': 'E',
	    '\u1EC2': 'E',
	    '\u1EBC': 'E',
	    '\u0112': 'E',
	    '\u1E14': 'E',
	    '\u1E16': 'E',
	    '\u0114': 'E',
	    '\u0116': 'E',
	    '\u00CB': 'E',
	    '\u1EBA': 'E',
	    '\u011A': 'E',
	    '\u0204': 'E',
	    '\u0206': 'E',
	    '\u1EB8': 'E',
	    '\u1EC6': 'E',
	    '\u0228': 'E',
	    '\u1E1C': 'E',
	    '\u0118': 'E',
	    '\u1E18': 'E',
	    '\u1E1A': 'E',
	    '\u0190': 'E',
	    '\u018E': 'E',
	    '\u24BB': 'F',
	    '\uFF26': 'F',
	    '\u1E1E': 'F',
	    '\u0191': 'F',
	    '\uA77B': 'F',
	    '\u24BC': 'G',
	    '\uFF27': 'G',
	    '\u01F4': 'G',
	    '\u011C': 'G',
	    '\u1E20': 'G',
	    '\u011E': 'G',
	    '\u0120': 'G',
	    '\u01E6': 'G',
	    '\u0122': 'G',
	    '\u01E4': 'G',
	    '\u0193': 'G',
	    '\uA7A0': 'G',
	    '\uA77D': 'G',
	    '\uA77E': 'G',
	    '\u24BD': 'H',
	    '\uFF28': 'H',
	    '\u0124': 'H',
	    '\u1E22': 'H',
	    '\u1E26': 'H',
	    '\u021E': 'H',
	    '\u1E24': 'H',
	    '\u1E28': 'H',
	    '\u1E2A': 'H',
	    '\u0126': 'H',
	    '\u2C67': 'H',
	    '\u2C75': 'H',
	    '\uA78D': 'H',
	    '\u24BE': 'I',
	    '\uFF29': 'I',
	    '\u00CC': 'I',
	    '\u00CD': 'I',
	    '\u00CE': 'I',
	    '\u0128': 'I',
	    '\u012A': 'I',
	    '\u012C': 'I',
	    '\u0130': 'I',
	    '\u00CF': 'I',
	    '\u1E2E': 'I',
	    '\u1EC8': 'I',
	    '\u01CF': 'I',
	    '\u0208': 'I',
	    '\u020A': 'I',
	    '\u1ECA': 'I',
	    '\u012E': 'I',
	    '\u1E2C': 'I',
	    '\u0197': 'I',
	    '\u24BF': 'J',
	    '\uFF2A': 'J',
	    '\u0134': 'J',
	    '\u0248': 'J',
	    '\u24C0': 'K',
	    '\uFF2B': 'K',
	    '\u1E30': 'K',
	    '\u01E8': 'K',
	    '\u1E32': 'K',
	    '\u0136': 'K',
	    '\u1E34': 'K',
	    '\u0198': 'K',
	    '\u2C69': 'K',
	    '\uA740': 'K',
	    '\uA742': 'K',
	    '\uA744': 'K',
	    '\uA7A2': 'K',
	    '\u24C1': 'L',
	    '\uFF2C': 'L',
	    '\u013F': 'L',
	    '\u0139': 'L',
	    '\u013D': 'L',
	    '\u1E36': 'L',
	    '\u1E38': 'L',
	    '\u013B': 'L',
	    '\u1E3C': 'L',
	    '\u1E3A': 'L',
	    '\u0141': 'L',
	    '\u023D': 'L',
	    '\u2C62': 'L',
	    '\u2C60': 'L',
	    '\uA748': 'L',
	    '\uA746': 'L',
	    '\uA780': 'L',
	    '\u01C7': 'LJ',
	    '\u01C8': 'Lj',
	    '\u24C2': 'M',
	    '\uFF2D': 'M',
	    '\u1E3E': 'M',
	    '\u1E40': 'M',
	    '\u1E42': 'M',
	    '\u2C6E': 'M',
	    '\u019C': 'M',
	    '\u24C3': 'N',
	    '\uFF2E': 'N',
	    '\u01F8': 'N',
	    '\u0143': 'N',
	    '\u00D1': 'N',
	    '\u1E44': 'N',
	    '\u0147': 'N',
	    '\u1E46': 'N',
	    '\u0145': 'N',
	    '\u1E4A': 'N',
	    '\u1E48': 'N',
	    '\u0220': 'N',
	    '\u019D': 'N',
	    '\uA790': 'N',
	    '\uA7A4': 'N',
	    '\u01CA': 'NJ',
	    '\u01CB': 'Nj',
	    '\u24C4': 'O',
	    '\uFF2F': 'O',
	    '\u00D2': 'O',
	    '\u00D3': 'O',
	    '\u00D4': 'O',
	    '\u1ED2': 'O',
	    '\u1ED0': 'O',
	    '\u1ED6': 'O',
	    '\u1ED4': 'O',
	    '\u00D5': 'O',
	    '\u1E4C': 'O',
	    '\u022C': 'O',
	    '\u1E4E': 'O',
	    '\u014C': 'O',
	    '\u1E50': 'O',
	    '\u1E52': 'O',
	    '\u014E': 'O',
	    '\u022E': 'O',
	    '\u0230': 'O',
	    '\u00D6': 'O',
	    '\u022A': 'O',
	    '\u1ECE': 'O',
	    '\u0150': 'O',
	    '\u01D1': 'O',
	    '\u020C': 'O',
	    '\u020E': 'O',
	    '\u01A0': 'O',
	    '\u1EDC': 'O',
	    '\u1EDA': 'O',
	    '\u1EE0': 'O',
	    '\u1EDE': 'O',
	    '\u1EE2': 'O',
	    '\u1ECC': 'O',
	    '\u1ED8': 'O',
	    '\u01EA': 'O',
	    '\u01EC': 'O',
	    '\u00D8': 'O',
	    '\u01FE': 'O',
	    '\u0186': 'O',
	    '\u019F': 'O',
	    '\uA74A': 'O',
	    '\uA74C': 'O',
	    '\u0152': 'OE',
	    '\u01A2': 'OI',
	    '\uA74E': 'OO',
	    '\u0222': 'OU',
	    '\u24C5': 'P',
	    '\uFF30': 'P',
	    '\u1E54': 'P',
	    '\u1E56': 'P',
	    '\u01A4': 'P',
	    '\u2C63': 'P',
	    '\uA750': 'P',
	    '\uA752': 'P',
	    '\uA754': 'P',
	    '\u24C6': 'Q',
	    '\uFF31': 'Q',
	    '\uA756': 'Q',
	    '\uA758': 'Q',
	    '\u024A': 'Q',
	    '\u24C7': 'R',
	    '\uFF32': 'R',
	    '\u0154': 'R',
	    '\u1E58': 'R',
	    '\u0158': 'R',
	    '\u0210': 'R',
	    '\u0212': 'R',
	    '\u1E5A': 'R',
	    '\u1E5C': 'R',
	    '\u0156': 'R',
	    '\u1E5E': 'R',
	    '\u024C': 'R',
	    '\u2C64': 'R',
	    '\uA75A': 'R',
	    '\uA7A6': 'R',
	    '\uA782': 'R',
	    '\u24C8': 'S',
	    '\uFF33': 'S',
	    '\u1E9E': 'S',
	    '\u015A': 'S',
	    '\u1E64': 'S',
	    '\u015C': 'S',
	    '\u1E60': 'S',
	    '\u0160': 'S',
	    '\u1E66': 'S',
	    '\u1E62': 'S',
	    '\u1E68': 'S',
	    '\u0218': 'S',
	    '\u015E': 'S',
	    '\u2C7E': 'S',
	    '\uA7A8': 'S',
	    '\uA784': 'S',
	    '\u24C9': 'T',
	    '\uFF34': 'T',
	    '\u1E6A': 'T',
	    '\u0164': 'T',
	    '\u1E6C': 'T',
	    '\u021A': 'T',
	    '\u0162': 'T',
	    '\u1E70': 'T',
	    '\u1E6E': 'T',
	    '\u0166': 'T',
	    '\u01AC': 'T',
	    '\u01AE': 'T',
	    '\u023E': 'T',
	    '\uA786': 'T',
	    '\uA728': 'TZ',
	    '\u24CA': 'U',
	    '\uFF35': 'U',
	    '\u00D9': 'U',
	    '\u00DA': 'U',
	    '\u00DB': 'U',
	    '\u0168': 'U',
	    '\u1E78': 'U',
	    '\u016A': 'U',
	    '\u1E7A': 'U',
	    '\u016C': 'U',
	    '\u00DC': 'U',
	    '\u01DB': 'U',
	    '\u01D7': 'U',
	    '\u01D5': 'U',
	    '\u01D9': 'U',
	    '\u1EE6': 'U',
	    '\u016E': 'U',
	    '\u0170': 'U',
	    '\u01D3': 'U',
	    '\u0214': 'U',
	    '\u0216': 'U',
	    '\u01AF': 'U',
	    '\u1EEA': 'U',
	    '\u1EE8': 'U',
	    '\u1EEE': 'U',
	    '\u1EEC': 'U',
	    '\u1EF0': 'U',
	    '\u1EE4': 'U',
	    '\u1E72': 'U',
	    '\u0172': 'U',
	    '\u1E76': 'U',
	    '\u1E74': 'U',
	    '\u0244': 'U',
	    '\u24CB': 'V',
	    '\uFF36': 'V',
	    '\u1E7C': 'V',
	    '\u1E7E': 'V',
	    '\u01B2': 'V',
	    '\uA75E': 'V',
	    '\u0245': 'V',
	    '\uA760': 'VY',
	    '\u24CC': 'W',
	    '\uFF37': 'W',
	    '\u1E80': 'W',
	    '\u1E82': 'W',
	    '\u0174': 'W',
	    '\u1E86': 'W',
	    '\u1E84': 'W',
	    '\u1E88': 'W',
	    '\u2C72': 'W',
	    '\u24CD': 'X',
	    '\uFF38': 'X',
	    '\u1E8A': 'X',
	    '\u1E8C': 'X',
	    '\u24CE': 'Y',
	    '\uFF39': 'Y',
	    '\u1EF2': 'Y',
	    '\u00DD': 'Y',
	    '\u0176': 'Y',
	    '\u1EF8': 'Y',
	    '\u0232': 'Y',
	    '\u1E8E': 'Y',
	    '\u0178': 'Y',
	    '\u1EF6': 'Y',
	    '\u1EF4': 'Y',
	    '\u01B3': 'Y',
	    '\u024E': 'Y',
	    '\u1EFE': 'Y',
	    '\u24CF': 'Z',
	    '\uFF3A': 'Z',
	    '\u0179': 'Z',
	    '\u1E90': 'Z',
	    '\u017B': 'Z',
	    '\u017D': 'Z',
	    '\u1E92': 'Z',
	    '\u1E94': 'Z',
	    '\u01B5': 'Z',
	    '\u0224': 'Z',
	    '\u2C7F': 'Z',
	    '\u2C6B': 'Z',
	    '\uA762': 'Z',
	    '\u24D0': 'a',
	    '\uFF41': 'a',
	    '\u1E9A': 'a',
	    '\u00E0': 'a',
	    '\u00E1': 'a',
	    '\u00E2': 'a',
	    '\u1EA7': 'a',
	    '\u1EA5': 'a',
	    '\u1EAB': 'a',
	    '\u1EA9': 'a',
	    '\u00E3': 'a',
	    '\u0101': 'a',
	    '\u0103': 'a',
	    '\u1EB1': 'a',
	    '\u1EAF': 'a',
	    '\u1EB5': 'a',
	    '\u1EB3': 'a',
	    '\u0227': 'a',
	    '\u01E1': 'a',
	    '\u00E4': 'a',
	    '\u01DF': 'a',
	    '\u1EA3': 'a',
	    '\u00E5': 'a',
	    '\u01FB': 'a',
	    '\u01CE': 'a',
	    '\u0201': 'a',
	    '\u0203': 'a',
	    '\u1EA1': 'a',
	    '\u1EAD': 'a',
	    '\u1EB7': 'a',
	    '\u1E01': 'a',
	    '\u0105': 'a',
	    '\u2C65': 'a',
	    '\u0250': 'a',
	    '\uA733': 'aa',
	    '\u00E6': 'ae',
	    '\u01FD': 'ae',
	    '\u01E3': 'ae',
	    '\uA735': 'ao',
	    '\uA737': 'au',
	    '\uA739': 'av',
	    '\uA73B': 'av',
	    '\uA73D': 'ay',
	    '\u24D1': 'b',
	    '\uFF42': 'b',
	    '\u1E03': 'b',
	    '\u1E05': 'b',
	    '\u1E07': 'b',
	    '\u0180': 'b',
	    '\u0183': 'b',
	    '\u0253': 'b',
	    '\u24D2': 'c',
	    '\uFF43': 'c',
	    '\u0107': 'c',
	    '\u0109': 'c',
	    '\u010B': 'c',
	    '\u010D': 'c',
	    '\u00E7': 'c',
	    '\u1E09': 'c',
	    '\u0188': 'c',
	    '\u023C': 'c',
	    '\uA73F': 'c',
	    '\u2184': 'c',
	    '\u24D3': 'd',
	    '\uFF44': 'd',
	    '\u1E0B': 'd',
	    '\u010F': 'd',
	    '\u1E0D': 'd',
	    '\u1E11': 'd',
	    '\u1E13': 'd',
	    '\u1E0F': 'd',
	    '\u0111': 'd',
	    '\u018C': 'd',
	    '\u0256': 'd',
	    '\u0257': 'd',
	    '\uA77A': 'd',
	    '\u01F3': 'dz',
	    '\u01C6': 'dz',
	    '\u24D4': 'e',
	    '\uFF45': 'e',
	    '\u00E8': 'e',
	    '\u00E9': 'e',
	    '\u00EA': 'e',
	    '\u1EC1': 'e',
	    '\u1EBF': 'e',
	    '\u1EC5': 'e',
	    '\u1EC3': 'e',
	    '\u1EBD': 'e',
	    '\u0113': 'e',
	    '\u1E15': 'e',
	    '\u1E17': 'e',
	    '\u0115': 'e',
	    '\u0117': 'e',
	    '\u00EB': 'e',
	    '\u1EBB': 'e',
	    '\u011B': 'e',
	    '\u0205': 'e',
	    '\u0207': 'e',
	    '\u1EB9': 'e',
	    '\u1EC7': 'e',
	    '\u0229': 'e',
	    '\u1E1D': 'e',
	    '\u0119': 'e',
	    '\u1E19': 'e',
	    '\u1E1B': 'e',
	    '\u0247': 'e',
	    '\u025B': 'e',
	    '\u01DD': 'e',
	    '\u24D5': 'f',
	    '\uFF46': 'f',
	    '\u1E1F': 'f',
	    '\u0192': 'f',
	    '\uA77C': 'f',
	    '\u24D6': 'g',
	    '\uFF47': 'g',
	    '\u01F5': 'g',
	    '\u011D': 'g',
	    '\u1E21': 'g',
	    '\u011F': 'g',
	    '\u0121': 'g',
	    '\u01E7': 'g',
	    '\u0123': 'g',
	    '\u01E5': 'g',
	    '\u0260': 'g',
	    '\uA7A1': 'g',
	    '\u1D79': 'g',
	    '\uA77F': 'g',
	    '\u24D7': 'h',
	    '\uFF48': 'h',
	    '\u0125': 'h',
	    '\u1E23': 'h',
	    '\u1E27': 'h',
	    '\u021F': 'h',
	    '\u1E25': 'h',
	    '\u1E29': 'h',
	    '\u1E2B': 'h',
	    '\u1E96': 'h',
	    '\u0127': 'h',
	    '\u2C68': 'h',
	    '\u2C76': 'h',
	    '\u0265': 'h',
	    '\u0195': 'hv',
	    '\u24D8': 'i',
	    '\uFF49': 'i',
	    '\u00EC': 'i',
	    '\u00ED': 'i',
	    '\u00EE': 'i',
	    '\u0129': 'i',
	    '\u012B': 'i',
	    '\u012D': 'i',
	    '\u00EF': 'i',
	    '\u1E2F': 'i',
	    '\u1EC9': 'i',
	    '\u01D0': 'i',
	    '\u0209': 'i',
	    '\u020B': 'i',
	    '\u1ECB': 'i',
	    '\u012F': 'i',
	    '\u1E2D': 'i',
	    '\u0268': 'i',
	    '\u0131': 'i',
	    '\u24D9': 'j',
	    '\uFF4A': 'j',
	    '\u0135': 'j',
	    '\u01F0': 'j',
	    '\u0249': 'j',
	    '\u24DA': 'k',
	    '\uFF4B': 'k',
	    '\u1E31': 'k',
	    '\u01E9': 'k',
	    '\u1E33': 'k',
	    '\u0137': 'k',
	    '\u1E35': 'k',
	    '\u0199': 'k',
	    '\u2C6A': 'k',
	    '\uA741': 'k',
	    '\uA743': 'k',
	    '\uA745': 'k',
	    '\uA7A3': 'k',
	    '\u24DB': 'l',
	    '\uFF4C': 'l',
	    '\u0140': 'l',
	    '\u013A': 'l',
	    '\u013E': 'l',
	    '\u1E37': 'l',
	    '\u1E39': 'l',
	    '\u013C': 'l',
	    '\u1E3D': 'l',
	    '\u1E3B': 'l',
	    '\u017F': 'l',
	    '\u0142': 'l',
	    '\u019A': 'l',
	    '\u026B': 'l',
	    '\u2C61': 'l',
	    '\uA749': 'l',
	    '\uA781': 'l',
	    '\uA747': 'l',
	    '\u01C9': 'lj',
	    '\u24DC': 'm',
	    '\uFF4D': 'm',
	    '\u1E3F': 'm',
	    '\u1E41': 'm',
	    '\u1E43': 'm',
	    '\u0271': 'm',
	    '\u026F': 'm',
	    '\u24DD': 'n',
	    '\uFF4E': 'n',
	    '\u01F9': 'n',
	    '\u0144': 'n',
	    '\u00F1': 'n',
	    '\u1E45': 'n',
	    '\u0148': 'n',
	    '\u1E47': 'n',
	    '\u0146': 'n',
	    '\u1E4B': 'n',
	    '\u1E49': 'n',
	    '\u019E': 'n',
	    '\u0272': 'n',
	    '\u0149': 'n',
	    '\uA791': 'n',
	    '\uA7A5': 'n',
	    '\u01CC': 'nj',
	    '\u24DE': 'o',
	    '\uFF4F': 'o',
	    '\u00F2': 'o',
	    '\u00F3': 'o',
	    '\u00F4': 'o',
	    '\u1ED3': 'o',
	    '\u1ED1': 'o',
	    '\u1ED7': 'o',
	    '\u1ED5': 'o',
	    '\u00F5': 'o',
	    '\u1E4D': 'o',
	    '\u022D': 'o',
	    '\u1E4F': 'o',
	    '\u014D': 'o',
	    '\u1E51': 'o',
	    '\u1E53': 'o',
	    '\u014F': 'o',
	    '\u022F': 'o',
	    '\u0231': 'o',
	    '\u00F6': 'o',
	    '\u022B': 'o',
	    '\u1ECF': 'o',
	    '\u0151': 'o',
	    '\u01D2': 'o',
	    '\u020D': 'o',
	    '\u020F': 'o',
	    '\u01A1': 'o',
	    '\u1EDD': 'o',
	    '\u1EDB': 'o',
	    '\u1EE1': 'o',
	    '\u1EDF': 'o',
	    '\u1EE3': 'o',
	    '\u1ECD': 'o',
	    '\u1ED9': 'o',
	    '\u01EB': 'o',
	    '\u01ED': 'o',
	    '\u00F8': 'o',
	    '\u01FF': 'o',
	    '\u0254': 'o',
	    '\uA74B': 'o',
	    '\uA74D': 'o',
	    '\u0275': 'o',
	    '\u0153': 'oe',
	    '\u01A3': 'oi',
	    '\u0223': 'ou',
	    '\uA74F': 'oo',
	    '\u24DF': 'p',
	    '\uFF50': 'p',
	    '\u1E55': 'p',
	    '\u1E57': 'p',
	    '\u01A5': 'p',
	    '\u1D7D': 'p',
	    '\uA751': 'p',
	    '\uA753': 'p',
	    '\uA755': 'p',
	    '\u24E0': 'q',
	    '\uFF51': 'q',
	    '\u024B': 'q',
	    '\uA757': 'q',
	    '\uA759': 'q',
	    '\u24E1': 'r',
	    '\uFF52': 'r',
	    '\u0155': 'r',
	    '\u1E59': 'r',
	    '\u0159': 'r',
	    '\u0211': 'r',
	    '\u0213': 'r',
	    '\u1E5B': 'r',
	    '\u1E5D': 'r',
	    '\u0157': 'r',
	    '\u1E5F': 'r',
	    '\u024D': 'r',
	    '\u027D': 'r',
	    '\uA75B': 'r',
	    '\uA7A7': 'r',
	    '\uA783': 'r',
	    '\u24E2': 's',
	    '\uFF53': 's',
	    '\u00DF': 's',
	    '\u015B': 's',
	    '\u1E65': 's',
	    '\u015D': 's',
	    '\u1E61': 's',
	    '\u0161': 's',
	    '\u1E67': 's',
	    '\u1E63': 's',
	    '\u1E69': 's',
	    '\u0219': 's',
	    '\u015F': 's',
	    '\u023F': 's',
	    '\uA7A9': 's',
	    '\uA785': 's',
	    '\u1E9B': 's',
	    '\u24E3': 't',
	    '\uFF54': 't',
	    '\u1E6B': 't',
	    '\u1E97': 't',
	    '\u0165': 't',
	    '\u1E6D': 't',
	    '\u021B': 't',
	    '\u0163': 't',
	    '\u1E71': 't',
	    '\u1E6F': 't',
	    '\u0167': 't',
	    '\u01AD': 't',
	    '\u0288': 't',
	    '\u2C66': 't',
	    '\uA787': 't',
	    '\uA729': 'tz',
	    '\u24E4': 'u',
	    '\uFF55': 'u',
	    '\u00F9': 'u',
	    '\u00FA': 'u',
	    '\u00FB': 'u',
	    '\u0169': 'u',
	    '\u1E79': 'u',
	    '\u016B': 'u',
	    '\u1E7B': 'u',
	    '\u016D': 'u',
	    '\u00FC': 'u',
	    '\u01DC': 'u',
	    '\u01D8': 'u',
	    '\u01D6': 'u',
	    '\u01DA': 'u',
	    '\u1EE7': 'u',
	    '\u016F': 'u',
	    '\u0171': 'u',
	    '\u01D4': 'u',
	    '\u0215': 'u',
	    '\u0217': 'u',
	    '\u01B0': 'u',
	    '\u1EEB': 'u',
	    '\u1EE9': 'u',
	    '\u1EEF': 'u',
	    '\u1EED': 'u',
	    '\u1EF1': 'u',
	    '\u1EE5': 'u',
	    '\u1E73': 'u',
	    '\u0173': 'u',
	    '\u1E77': 'u',
	    '\u1E75': 'u',
	    '\u0289': 'u',
	    '\u24E5': 'v',
	    '\uFF56': 'v',
	    '\u1E7D': 'v',
	    '\u1E7F': 'v',
	    '\u028B': 'v',
	    '\uA75F': 'v',
	    '\u028C': 'v',
	    '\uA761': 'vy',
	    '\u24E6': 'w',
	    '\uFF57': 'w',
	    '\u1E81': 'w',
	    '\u1E83': 'w',
	    '\u0175': 'w',
	    '\u1E87': 'w',
	    '\u1E85': 'w',
	    '\u1E98': 'w',
	    '\u1E89': 'w',
	    '\u2C73': 'w',
	    '\u24E7': 'x',
	    '\uFF58': 'x',
	    '\u1E8B': 'x',
	    '\u1E8D': 'x',
	    '\u24E8': 'y',
	    '\uFF59': 'y',
	    '\u1EF3': 'y',
	    '\u00FD': 'y',
	    '\u0177': 'y',
	    '\u1EF9': 'y',
	    '\u0233': 'y',
	    '\u1E8F': 'y',
	    '\u00FF': 'y',
	    '\u1EF7': 'y',
	    '\u1E99': 'y',
	    '\u1EF5': 'y',
	    '\u01B4': 'y',
	    '\u024F': 'y',
	    '\u1EFF': 'y',
	    '\u24E9': 'z',
	    '\uFF5A': 'z',
	    '\u017A': 'z',
	    '\u1E91': 'z',
	    '\u017C': 'z',
	    '\u017E': 'z',
	    '\u1E93': 'z',
	    '\u1E95': 'z',
	    '\u01B6': 'z',
	    '\u0225': 'z',
	    '\u0240': 'z',
	    '\u2C6C': 'z',
	    '\uA763': 'z',
	    '\u0386': '\u0391',
	    '\u0388': '\u0395',
	    '\u0389': '\u0397',
	    '\u038A': '\u0399',
	    '\u03AA': '\u0399',
	    '\u038C': '\u039F',
	    '\u038E': '\u03A5',
	    '\u03AB': '\u03A5',
	    '\u038F': '\u03A9',
	    '\u03AC': '\u03B1',
	    '\u03AD': '\u03B5',
	    '\u03AE': '\u03B7',
	    '\u03AF': '\u03B9',
	    '\u03CA': '\u03B9',
	    '\u0390': '\u03B9',
	    '\u03CC': '\u03BF',
	    '\u03CD': '\u03C5',
	    '\u03CB': '\u03C5',
	    '\u03B0': '\u03C5',
	    '\u03CE': '\u03C9',
	    '\u03C2': '\u03C3',
	    '\u2019': '\''
	  };

	  return diacritics;
	});

	S2.define('select2/data/base',[
	  '../utils'
	], function (Utils) {
	  function BaseAdapter ($element, options) {
	    BaseAdapter.__super__.constructor.call(this);
	  }

	  Utils.Extend(BaseAdapter, Utils.Observable);

	  BaseAdapter.prototype.current = function (callback) {
	    throw new Error('The `current` method must be defined in child classes.');
	  };

	  BaseAdapter.prototype.query = function (params, callback) {
	    throw new Error('The `query` method must be defined in child classes.');
	  };

	  BaseAdapter.prototype.bind = function (container, $container) {
	    // Can be implemented in subclasses
	  };

	  BaseAdapter.prototype.destroy = function () {
	    // Can be implemented in subclasses
	  };

	  BaseAdapter.prototype.generateResultId = function (container, data) {
	    var id = container.id + '-result-';

	    id += Utils.generateChars(4);

	    if (data.id != null) {
	      id += '-' + data.id.toString();
	    } else {
	      id += '-' + Utils.generateChars(4);
	    }
	    return id;
	  };

	  return BaseAdapter;
	});

	S2.define('select2/data/select',[
	  './base',
	  '../utils',
	  'jquery'
	], function (BaseAdapter, Utils, $) {
	  function SelectAdapter ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    SelectAdapter.__super__.constructor.call(this);
	  }

	  Utils.Extend(SelectAdapter, BaseAdapter);

	  SelectAdapter.prototype.current = function (callback) {
	    var self = this;

	    var data = Array.prototype.map.call(
	      this.$element[0].querySelectorAll(':checked'),
	      function (selectedElement) {
	        return self.item($(selectedElement));
	      }
	    );

	    callback(data);
	  };

	  SelectAdapter.prototype.select = function (data) {
	    var self = this;

	    data.selected = true;

	    // If data.element is a DOM node, use it instead
	    if (
	      data.element != null && data.element.tagName.toLowerCase() === 'option'
	    ) {
	      data.element.selected = true;

	      this.$element.trigger('input').trigger('change');

	      return;
	    }

	    if (this.$element.prop('multiple')) {
	      this.current(function (currentData) {
	        var val = [];

	        data = [data];
	        data.push.apply(data, currentData);

	        for (var d = 0; d < data.length; d++) {
	          var id = data[d].id;

	          if (val.indexOf(id) === -1) {
	            val.push(id);
	          }
	        }

	        self.$element.val(val);
	        self.$element.trigger('input').trigger('change');
	      });
	    } else {
	      var val = data.id;

	      this.$element.val(val);
	      this.$element.trigger('input').trigger('change');
	    }
	  };

	  SelectAdapter.prototype.unselect = function (data) {
	    var self = this;

	    if (!this.$element.prop('multiple')) {
	      return;
	    }

	    data.selected = false;

	    if (
	      data.element != null &&
	      data.element.tagName.toLowerCase() === 'option'
	    ) {
	      data.element.selected = false;

	      this.$element.trigger('input').trigger('change');

	      return;
	    }

	    this.current(function (currentData) {
	      var val = [];

	      for (var d = 0; d < currentData.length; d++) {
	        var id = currentData[d].id;

	        if (id !== data.id && val.indexOf(id) === -1) {
	          val.push(id);
	        }
	      }

	      self.$element.val(val);

	      self.$element.trigger('input').trigger('change');
	    });
	  };

	  SelectAdapter.prototype.bind = function (container, $container) {
	    var self = this;

	    this.container = container;

	    container.on('select', function (params) {
	      self.select(params.data);
	    });

	    container.on('unselect', function (params) {
	      self.unselect(params.data);
	    });
	  };

	  SelectAdapter.prototype.destroy = function () {
	    // Remove anything added to child elements
	    this.$element.find('*').each(function () {
	      // Remove any custom data set by Select2
	      Utils.RemoveData(this);
	    });
	  };

	  SelectAdapter.prototype.query = function (params, callback) {
	    var data = [];
	    var self = this;

	    var $options = this.$element.children();

	    $options.each(function () {
	      if (
	        this.tagName.toLowerCase() !== 'option' &&
	        this.tagName.toLowerCase() !== 'optgroup'
	      ) {
	        return;
	      }

	      var $option = $(this);

	      var option = self.item($option);

	      var matches = self.matches(params, option);

	      if (matches !== null) {
	        data.push(matches);
	      }
	    });

	    callback({
	      results: data
	    });
	  };

	  SelectAdapter.prototype.addOptions = function ($options) {
	    this.$element.append($options);
	  };

	  SelectAdapter.prototype.option = function (data) {
	    var option;

	    if (data.children) {
	      option = document.createElement('optgroup');
	      option.label = data.text;
	    } else {
	      option = document.createElement('option');

	      if (option.textContent !== undefined) {
	        option.textContent = data.text;
	      } else {
	        option.innerText = data.text;
	      }
	    }

	    if (data.id !== undefined) {
	      option.value = data.id;
	    }

	    if (data.disabled) {
	      option.disabled = true;
	    }

	    if (data.selected) {
	      option.selected = true;
	    }

	    if (data.title) {
	      option.title = data.title;
	    }

	    var normalizedData = this._normalizeItem(data);
	    normalizedData.element = option;

	    // Override the option's data with the combined data
	    Utils.StoreData(option, 'data', normalizedData);

	    return $(option);
	  };

	  SelectAdapter.prototype.item = function ($option) {
	    var data = {};

	    data = Utils.GetData($option[0], 'data');

	    if (data != null) {
	      return data;
	    }

	    var option = $option[0];

	    if (option.tagName.toLowerCase() === 'option') {
	      data = {
	        id: $option.val(),
	        text: $option.text(),
	        disabled: $option.prop('disabled'),
	        selected: $option.prop('selected'),
	        title: $option.prop('title')
	      };
	    } else if (option.tagName.toLowerCase() === 'optgroup') {
	      data = {
	        text: $option.prop('label'),
	        children: [],
	        title: $option.prop('title')
	      };

	      var $children = $option.children('option');
	      var children = [];

	      for (var c = 0; c < $children.length; c++) {
	        var $child = $($children[c]);

	        var child = this.item($child);

	        children.push(child);
	      }

	      data.children = children;
	    }

	    data = this._normalizeItem(data);
	    data.element = $option[0];

	    Utils.StoreData($option[0], 'data', data);

	    return data;
	  };

	  SelectAdapter.prototype._normalizeItem = function (item) {
	    if (item !== Object(item)) {
	      item = {
	        id: item,
	        text: item
	      };
	    }

	    item = $.extend({}, {
	      text: ''
	    }, item);

	    var defaults = {
	      selected: false,
	      disabled: false
	    };

	    if (item.id != null) {
	      item.id = item.id.toString();
	    }

	    if (item.text != null) {
	      item.text = item.text.toString();
	    }

	    if (item._resultId == null && item.id && this.container != null) {
	      item._resultId = this.generateResultId(this.container, item);
	    }

	    return $.extend({}, defaults, item);
	  };

	  SelectAdapter.prototype.matches = function (params, data) {
	    var matcher = this.options.get('matcher');

	    return matcher(params, data);
	  };

	  return SelectAdapter;
	});

	S2.define('select2/data/array',[
	  './select',
	  '../utils',
	  'jquery'
	], function (SelectAdapter, Utils, $) {
	  function ArrayAdapter ($element, options) {
	    this._dataToConvert = options.get('data') || [];

	    ArrayAdapter.__super__.constructor.call(this, $element, options);
	  }

	  Utils.Extend(ArrayAdapter, SelectAdapter);

	  ArrayAdapter.prototype.bind = function (container, $container) {
	    ArrayAdapter.__super__.bind.call(this, container, $container);

	    this.addOptions(this.convertToOptions(this._dataToConvert));
	  };

	  ArrayAdapter.prototype.select = function (data) {
	    var $option = this.$element.find('option').filter(function (i, elm) {
	      return elm.value == data.id.toString();
	    });

	    if ($option.length === 0) {
	      $option = this.option(data);

	      this.addOptions($option);
	    }

	    ArrayAdapter.__super__.select.call(this, data);
	  };

	  ArrayAdapter.prototype.convertToOptions = function (data) {
	    var self = this;

	    var $existing = this.$element.find('option');
	    var existingIds = $existing.map(function () {
	      return self.item($(this)).id;
	    }).get();

	    var $options = [];

	    // Filter out all items except for the one passed in the argument
	    function onlyItem (item) {
	      return function () {
	        return $(this).val() == item.id;
	      };
	    }

	    for (var d = 0; d < data.length; d++) {
	      var item = this._normalizeItem(data[d]);

	      // Skip items which were pre-loaded, only merge the data
	      if (existingIds.indexOf(item.id) >= 0) {
	        var $existingOption = $existing.filter(onlyItem(item));

	        var existingData = this.item($existingOption);
	        var newData = $.extend(true, {}, item, existingData);

	        var $newOption = this.option(newData);

	        $existingOption.replaceWith($newOption);

	        continue;
	      }

	      var $option = this.option(item);

	      if (item.children) {
	        var $children = this.convertToOptions(item.children);

	        $option.append($children);
	      }

	      $options.push($option);
	    }

	    return $options;
	  };

	  return ArrayAdapter;
	});

	S2.define('select2/data/ajax',[
	  './array',
	  '../utils',
	  'jquery'
	], function (ArrayAdapter, Utils, $) {
	  function AjaxAdapter ($element, options) {
	    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

	    if (this.ajaxOptions.processResults != null) {
	      this.processResults = this.ajaxOptions.processResults;
	    }

	    AjaxAdapter.__super__.constructor.call(this, $element, options);
	  }

	  Utils.Extend(AjaxAdapter, ArrayAdapter);

	  AjaxAdapter.prototype._applyDefaults = function (options) {
	    var defaults = {
	      data: function (params) {
	        return $.extend({}, params, {
	          q: params.term
	        });
	      },
	      transport: function (params, success, failure) {
	        var $request = $.ajax(params);

	        $request.then(success);
	        $request.fail(failure);

	        return $request;
	      }
	    };

	    return $.extend({}, defaults, options, true);
	  };

	  AjaxAdapter.prototype.processResults = function (results) {
	    return results;
	  };

	  AjaxAdapter.prototype.query = function (params, callback) {
	    var self = this;

	    if (this._request != null) {
	      // JSONP requests cannot always be aborted
	      if (typeof this._request.abort === 'function') {
	        this._request.abort();
	      }

	      this._request = null;
	    }

	    var options = $.extend({
	      type: 'GET'
	    }, this.ajaxOptions);

	    if (typeof options.url === 'function') {
	      options.url = options.url.call(this.$element, params);
	    }

	    if (typeof options.data === 'function') {
	      options.data = options.data.call(this.$element, params);
	    }

	    function request () {
	      var $request = options.transport(options, function (data) {
	        var results = self.processResults(data, params);

	        if (self.options.get('debug') && window.console && console.error) {
	          // Check to make sure that the response included a `results` key.
	          if (!results || !results.results || !Array.isArray(results.results)) {
	            console.error(
	              'Select2: The AJAX results did not return an array in the ' +
	              '`results` key of the response.'
	            );
	          }
	        }

	        callback(results);
	      }, function () {
	        // Attempt to detect if a request was aborted
	        // Only works if the transport exposes a status property
	        if ('status' in $request &&
	            ($request.status === 0 || $request.status === '0')) {
	          return;
	        }

	        self.trigger('results:message', {
	          message: 'errorLoading'
	        });
	      });

	      self._request = $request;
	    }

	    if (this.ajaxOptions.delay && params.term != null) {
	      if (this._queryTimeout) {
	        window.clearTimeout(this._queryTimeout);
	      }

	      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
	    } else {
	      request();
	    }
	  };

	  return AjaxAdapter;
	});

	S2.define('select2/data/tags',[
	  'jquery'
	], function ($) {
	  function Tags (decorated, $element, options) {
	    var tags = options.get('tags');

	    var createTag = options.get('createTag');

	    if (createTag !== undefined) {
	      this.createTag = createTag;
	    }

	    var insertTag = options.get('insertTag');

	    if (insertTag !== undefined) {
	        this.insertTag = insertTag;
	    }

	    decorated.call(this, $element, options);

	    if (Array.isArray(tags)) {
	      for (var t = 0; t < tags.length; t++) {
	        var tag = tags[t];
	        var item = this._normalizeItem(tag);

	        var $option = this.option(item);

	        this.$element.append($option);
	      }
	    }
	  }

	  Tags.prototype.query = function (decorated, params, callback) {
	    var self = this;

	    this._removeOldTags();

	    if (params.term == null || params.page != null) {
	      decorated.call(this, params, callback);
	      return;
	    }

	    function wrapper (obj, child) {
	      var data = obj.results;

	      for (var i = 0; i < data.length; i++) {
	        var option = data[i];

	        var checkChildren = (
	          option.children != null &&
	          !wrapper({
	            results: option.children
	          }, true)
	        );

	        var optionText = (option.text || '').toUpperCase();
	        var paramsTerm = (params.term || '').toUpperCase();

	        var checkText = optionText === paramsTerm;

	        if (checkText || checkChildren) {
	          if (child) {
	            return false;
	          }

	          obj.data = data;
	          callback(obj);

	          return;
	        }
	      }

	      if (child) {
	        return true;
	      }

	      var tag = self.createTag(params);

	      if (tag != null) {
	        var $option = self.option(tag);
	        $option.attr('data-select2-tag', 'true');

	        self.addOptions([$option]);

	        self.insertTag(data, tag);
	      }

	      obj.results = data;

	      callback(obj);
	    }

	    decorated.call(this, params, wrapper);
	  };

	  Tags.prototype.createTag = function (decorated, params) {
	    if (params.term == null) {
	      return null;
	    }

	    var term = params.term.trim();

	    if (term === '') {
	      return null;
	    }

	    return {
	      id: term,
	      text: term
	    };
	  };

	  Tags.prototype.insertTag = function (_, data, tag) {
	    data.unshift(tag);
	  };

	  Tags.prototype._removeOldTags = function (_) {
	    var $options = this.$element.find('option[data-select2-tag]');

	    $options.each(function () {
	      if (this.selected) {
	        return;
	      }

	      $(this).remove();
	    });
	  };

	  return Tags;
	});

	S2.define('select2/data/tokenizer',[
	  'jquery'
	], function ($) {
	  function Tokenizer (decorated, $element, options) {
	    var tokenizer = options.get('tokenizer');

	    if (tokenizer !== undefined) {
	      this.tokenizer = tokenizer;
	    }

	    decorated.call(this, $element, options);
	  }

	  Tokenizer.prototype.bind = function (decorated, container, $container) {
	    decorated.call(this, container, $container);

	    this.$search =  container.dropdown.$search || container.selection.$search ||
	      $container.find('.select2-search__field');
	  };

	  Tokenizer.prototype.query = function (decorated, params, callback) {
	    var self = this;

	    function createAndSelect (data) {
	      // Normalize the data object so we can use it for checks
	      var item = self._normalizeItem(data);

	      // Check if the data object already exists as a tag
	      // Select it if it doesn't
	      var $existingOptions = self.$element.find('option').filter(function () {
	        return $(this).val() === item.id;
	      });

	      // If an existing option wasn't found for it, create the option
	      if (!$existingOptions.length) {
	        var $option = self.option(item);
	        $option.attr('data-select2-tag', true);

	        self._removeOldTags();
	        self.addOptions([$option]);
	      }

	      // Select the item, now that we know there is an option for it
	      select(item);
	    }

	    function select (data) {
	      self.trigger('select', {
	        data: data
	      });
	    }

	    params.term = params.term || '';

	    var tokenData = this.tokenizer(params, this.options, createAndSelect);

	    if (tokenData.term !== params.term) {
	      // Replace the search term if we have the search box
	      if (this.$search.length) {
	        this.$search.val(tokenData.term);
	        this.$search.trigger('focus');
	      }

	      params.term = tokenData.term;
	    }

	    decorated.call(this, params, callback);
	  };

	  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
	    var separators = options.get('tokenSeparators') || [];
	    var term = params.term;
	    var i = 0;

	    var createTag = this.createTag || function (params) {
	      return {
	        id: params.term,
	        text: params.term
	      };
	    };

	    while (i < term.length) {
	      var termChar = term[i];

	      if (separators.indexOf(termChar) === -1) {
	        i++;

	        continue;
	      }

	      var part = term.substr(0, i);
	      var partParams = $.extend({}, params, {
	        term: part
	      });

	      var data = createTag(partParams);

	      if (data == null) {
	        i++;
	        continue;
	      }

	      callback(data);

	      // Reset the term to not include the tokenized portion
	      term = term.substr(i + 1) || '';
	      i = 0;
	    }

	    return {
	      term: term
	    };
	  };

	  return Tokenizer;
	});

	S2.define('select2/data/minimumInputLength',[

	], function () {
	  function MinimumInputLength (decorated, $e, options) {
	    this.minimumInputLength = options.get('minimumInputLength');

	    decorated.call(this, $e, options);
	  }

	  MinimumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';

	    if (params.term.length < this.minimumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooShort',
	        args: {
	          minimum: this.minimumInputLength,
	          input: params.term,
	          params: params
	        }
	      });

	      return;
	    }

	    decorated.call(this, params, callback);
	  };

	  return MinimumInputLength;
	});

	S2.define('select2/data/maximumInputLength',[

	], function () {
	  function MaximumInputLength (decorated, $e, options) {
	    this.maximumInputLength = options.get('maximumInputLength');

	    decorated.call(this, $e, options);
	  }

	  MaximumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';

	    if (this.maximumInputLength > 0 &&
	        params.term.length > this.maximumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooLong',
	        args: {
	          maximum: this.maximumInputLength,
	          input: params.term,
	          params: params
	        }
	      });

	      return;
	    }

	    decorated.call(this, params, callback);
	  };

	  return MaximumInputLength;
	});

	S2.define('select2/data/maximumSelectionLength',[

	], function (){
	  function MaximumSelectionLength (decorated, $e, options) {
	    this.maximumSelectionLength = options.get('maximumSelectionLength');

	    decorated.call(this, $e, options);
	  }

	  MaximumSelectionLength.prototype.bind =
	    function (decorated, container, $container) {
	      var self = this;

	      decorated.call(this, container, $container);

	      container.on('select', function () {
	        self._checkIfMaximumSelected();
	      });
	  };

	  MaximumSelectionLength.prototype.query =
	    function (decorated, params, callback) {
	      var self = this;

	      this._checkIfMaximumSelected(function () {
	        decorated.call(self, params, callback);
	      });
	  };

	  MaximumSelectionLength.prototype._checkIfMaximumSelected =
	    function (_, successCallback) {
	      var self = this;

	      this.current(function (currentData) {
	        var count = currentData != null ? currentData.length : 0;
	        if (self.maximumSelectionLength > 0 &&
	          count >= self.maximumSelectionLength) {
	          self.trigger('results:message', {
	            message: 'maximumSelected',
	            args: {
	              maximum: self.maximumSelectionLength
	            }
	          });
	          return;
	        }

	        if (successCallback) {
	          successCallback();
	        }
	      });
	  };

	  return MaximumSelectionLength;
	});

	S2.define('select2/dropdown',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Dropdown ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    Dropdown.__super__.constructor.call(this);
	  }

	  Utils.Extend(Dropdown, Utils.Observable);

	  Dropdown.prototype.render = function () {
	    var $dropdown = $(
	      '<span class="select2-dropdown">' +
	        '<span class="select2-results"></span>' +
	      '</span>'
	    );

	    $dropdown.attr('dir', this.options.get('dir'));

	    this.$dropdown = $dropdown;

	    return $dropdown;
	  };

	  Dropdown.prototype.bind = function () {
	    // Should be implemented in subclasses
	  };

	  Dropdown.prototype.position = function ($dropdown, $container) {
	    // Should be implemented in subclasses
	  };

	  Dropdown.prototype.destroy = function () {
	    // Remove the dropdown from the DOM
	    this.$dropdown.remove();
	  };

	  return Dropdown;
	});

	S2.define('select2/dropdown/search',[
	  'jquery'
	], function ($) {
	  function Search () { }

	  Search.prototype.render = function (decorated) {
	    var $rendered = decorated.call(this);
	    var searchLabel = this.options.get('translations').get('search');

	    var $search = $(
	      '<span class="select2-search select2-search--dropdown">' +
	        '<input class="select2-search__field" type="search" tabindex="-1"' +
	        ' autocorrect="off" autocapitalize="none"' +
	        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
	      '</span>'
	    );

	    this.$searchContainer = $search;
	    this.$search = $search.find('input');

	    this.$search.prop('autocomplete', this.options.get('autocomplete'));
	    this.$search.attr('aria-label', searchLabel());

	    $rendered.prepend($search);

	    return $rendered;
	  };

	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    var resultsId = container.id + '-results';

	    decorated.call(this, container, $container);

	    this.$search.on('keydown', function (evt) {
	      self.trigger('keypress', evt);

	      self._keyUpPrevented = evt.isDefaultPrevented();
	    });

	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$search.on('input', function (evt) {
	      // Unbind the duplicated `keyup` event
	      $(this).off('keyup');
	    });

	    this.$search.on('keyup input', function (evt) {
	      self.handleSearch(evt);
	    });

	    container.on('open', function () {
	      self.$search.attr('tabindex', 0);
	      self.$search.attr('aria-controls', resultsId);

	      self.$search.trigger('focus');

	      window.setTimeout(function () {
	        self.$search.trigger('focus');
	      }, 0);
	    });

	    container.on('close', function () {
	      self.$search.attr('tabindex', -1);
	      self.$search.removeAttr('aria-controls');
	      self.$search.removeAttr('aria-activedescendant');

	      self.$search.val('');
	      self.$search.trigger('blur');
	    });

	    container.on('focus', function () {
	      if (!container.isOpen()) {
	        self.$search.trigger('focus');
	      }
	    });

	    container.on('results:all', function (params) {
	      if (params.query.term == null || params.query.term === '') {
	        var showSearch = self.showSearch(params);

	        if (showSearch) {
	          self.$searchContainer[0].classList.remove('select2-search--hide');
	        } else {
	          self.$searchContainer[0].classList.add('select2-search--hide');
	        }
	      }
	    });

	    container.on('results:focus', function (params) {
	      if (params.data._resultId) {
	        self.$search.attr('aria-activedescendant', params.data._resultId);
	      } else {
	        self.$search.removeAttr('aria-activedescendant');
	      }
	    });
	  };

	  Search.prototype.handleSearch = function (evt) {
	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();

	      this.trigger('query', {
	        term: input
	      });
	    }

	    this._keyUpPrevented = false;
	  };

	  Search.prototype.showSearch = function (_, params) {
	    return true;
	  };

	  return Search;
	});

	S2.define('select2/dropdown/hidePlaceholder',[

	], function () {
	  function HidePlaceholder (decorated, $element, options, dataAdapter) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

	    decorated.call(this, $element, options, dataAdapter);
	  }

	  HidePlaceholder.prototype.append = function (decorated, data) {
	    data.results = this.removePlaceholder(data.results);

	    decorated.call(this, data);
	  };

	  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }

	    return placeholder;
	  };

	  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
	    var modifiedData = data.slice(0);

	    for (var d = data.length - 1; d >= 0; d--) {
	      var item = data[d];

	      if (this.placeholder.id === item.id) {
	        modifiedData.splice(d, 1);
	      }
	    }

	    return modifiedData;
	  };

	  return HidePlaceholder;
	});

	S2.define('select2/dropdown/infiniteScroll',[
	  'jquery'
	], function ($) {
	  function InfiniteScroll (decorated, $element, options, dataAdapter) {
	    this.lastParams = {};

	    decorated.call(this, $element, options, dataAdapter);

	    this.$loadingMore = this.createLoadingMore();
	    this.loading = false;
	  }

	  InfiniteScroll.prototype.append = function (decorated, data) {
	    this.$loadingMore.remove();
	    this.loading = false;

	    decorated.call(this, data);

	    if (this.showLoadingMore(data)) {
	      this.$results.append(this.$loadingMore);
	      this.loadMoreIfNeeded();
	    }
	  };

	  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('query', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });

	    container.on('query:append', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });

	    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
	  };

	  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
	    var isLoadMoreVisible = $.contains(
	      document.documentElement,
	      this.$loadingMore[0]
	    );

	    if (this.loading || !isLoadMoreVisible) {
	      return;
	    }

	    var currentOffset = this.$results.offset().top +
	      this.$results.outerHeight(false);
	    var loadingMoreOffset = this.$loadingMore.offset().top +
	      this.$loadingMore.outerHeight(false);

	    if (currentOffset + 50 >= loadingMoreOffset) {
	      this.loadMore();
	    }
	  };

	  InfiniteScroll.prototype.loadMore = function () {
	    this.loading = true;

	    var params = $.extend({}, {page: 1}, this.lastParams);

	    params.page++;

	    this.trigger('query:append', params);
	  };

	  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
	    return data.pagination && data.pagination.more;
	  };

	  InfiniteScroll.prototype.createLoadingMore = function () {
	    var $option = $(
	      '<li ' +
	      'class="select2-results__option select2-results__option--load-more"' +
	      'role="option" aria-disabled="true"></li>'
	    );

	    var message = this.options.get('translations').get('loadingMore');

	    $option.html(message(this.lastParams));

	    return $option;
	  };

	  return InfiniteScroll;
	});

	S2.define('select2/dropdown/attachBody',[
	  'jquery',
	  '../utils'
	], function ($, Utils) {
	  function AttachBody (decorated, $element, options) {
	    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

	    decorated.call(this, $element, options);
	  }

	  AttachBody.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('open', function () {
	      self._showDropdown();
	      self._attachPositioningHandler(container);

	      // Must bind after the results handlers to ensure correct sizing
	      self._bindContainerResultHandlers(container);
	    });

	    container.on('close', function () {
	      self._hideDropdown();
	      self._detachPositioningHandler(container);
	    });

	    this.$dropdownContainer.on('mousedown', function (evt) {
	      evt.stopPropagation();
	    });
	  };

	  AttachBody.prototype.destroy = function (decorated) {
	    decorated.call(this);

	    this.$dropdownContainer.remove();
	  };

	  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
	    // Clone all of the container classes
	    $dropdown.attr('class', $container.attr('class'));

	    $dropdown[0].classList.remove('select2');
	    $dropdown[0].classList.add('select2-container--open');

	    $dropdown.css({
	      position: 'absolute',
	      top: -999999
	    });

	    this.$container = $container;
	  };

	  AttachBody.prototype.render = function (decorated) {
	    var $container = $('<span></span>');

	    var $dropdown = decorated.call(this);
	    $container.append($dropdown);

	    this.$dropdownContainer = $container;

	    return $container;
	  };

	  AttachBody.prototype._hideDropdown = function (decorated) {
	    this.$dropdownContainer.detach();
	  };

	  AttachBody.prototype._bindContainerResultHandlers =
	      function (decorated, container) {

	    // These should only be bound once
	    if (this._containerResultsHandlersBound) {
	      return;
	    }

	    var self = this;

	    container.on('results:all', function () {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });

	    container.on('results:append', function () {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });

	    container.on('results:message', function () {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });

	    container.on('select', function () {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });

	    container.on('unselect', function () {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });

	    this._containerResultsHandlersBound = true;
	  };

	  AttachBody.prototype._attachPositioningHandler =
	      function (decorated, container) {
	    var self = this;

	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;

	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.each(function () {
	      Utils.StoreData(this, 'select2-scroll-position', {
	        x: $(this).scrollLeft(),
	        y: $(this).scrollTop()
	      });
	    });

	    $watchers.on(scrollEvent, function (ev) {
	      var position = Utils.GetData(this, 'select2-scroll-position');
	      $(this).scrollTop(position.y);
	    });

	    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
	      function (e) {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });
	  };

	  AttachBody.prototype._detachPositioningHandler =
	      function (decorated, container) {
	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;

	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.off(scrollEvent);

	    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
	  };

	  AttachBody.prototype._positionDropdown = function () {
	    var $window = $(window);

	    var isCurrentlyAbove = this.$dropdown[0].classList
	      .contains('select2-dropdown--above');
	    var isCurrentlyBelow = this.$dropdown[0].classList
	      .contains('select2-dropdown--below');

	    var newDirection = null;

	    var offset = this.$container.offset();

	    offset.bottom = offset.top + this.$container.outerHeight(false);

	    var container = {
	      height: this.$container.outerHeight(false)
	    };

	    container.top = offset.top;
	    container.bottom = offset.top + container.height;

	    var dropdown = {
	      height: this.$dropdown.outerHeight(false)
	    };

	    var viewport = {
	      top: $window.scrollTop(),
	      bottom: $window.scrollTop() + $window.height()
	    };

	    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
	    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

	    var css = {
	      left: offset.left,
	      top: container.bottom
	    };

	    // Determine what the parent element is to use for calculating the offset
	    var $offsetParent = this.$dropdownParent;

	    // For statically positioned elements, we need to get the element
	    // that is determining the offset
	    if ($offsetParent.css('position') === 'static') {
	      $offsetParent = $offsetParent.offsetParent();
	    }

	    var parentOffset = {
	      top: 0,
	      left: 0
	    };

	    if (
	      $.contains(document.body, $offsetParent[0]) ||
	      $offsetParent[0].isConnected
	      ) {
	      parentOffset = $offsetParent.offset();
	    }

	    css.top -= parentOffset.top;
	    css.left -= parentOffset.left;

	    if (!isCurrentlyAbove && !isCurrentlyBelow) {
	      newDirection = 'below';
	    }

	    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
	      newDirection = 'above';
	    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
	      newDirection = 'below';
	    }

	    if (newDirection == 'above' ||
	      (isCurrentlyAbove && newDirection !== 'below')) {
	      css.top = container.top - parentOffset.top - dropdown.height;
	    }

	    if (newDirection != null) {
	      this.$dropdown[0].classList.remove('select2-dropdown--below');
	      this.$dropdown[0].classList.remove('select2-dropdown--above');
	      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

	      this.$container[0].classList.remove('select2-container--below');
	      this.$container[0].classList.remove('select2-container--above');
	      this.$container[0].classList.add('select2-container--' + newDirection);
	    }

	    this.$dropdownContainer.css(css);
	  };

	  AttachBody.prototype._resizeDropdown = function () {
	    var css = {
	      width: this.$container.outerWidth(false) + 'px'
	    };

	    if (this.options.get('dropdownAutoWidth')) {
	      css.minWidth = css.width;
	      css.position = 'relative';
	      css.width = 'auto';
	    }

	    this.$dropdown.css(css);
	  };

	  AttachBody.prototype._showDropdown = function (decorated) {
	    this.$dropdownContainer.appendTo(this.$dropdownParent);

	    this._positionDropdown();
	    this._resizeDropdown();
	  };

	  return AttachBody;
	});

	S2.define('select2/dropdown/minimumResultsForSearch',[

	], function () {
	  function countResults (data) {
	    var count = 0;

	    for (var d = 0; d < data.length; d++) {
	      var item = data[d];

	      if (item.children) {
	        count += countResults(item.children);
	      } else {
	        count++;
	      }
	    }

	    return count;
	  }

	  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
	    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

	    if (this.minimumResultsForSearch < 0) {
	      this.minimumResultsForSearch = Infinity;
	    }

	    decorated.call(this, $element, options, dataAdapter);
	  }

	  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
	    if (countResults(params.data.results) < this.minimumResultsForSearch) {
	      return false;
	    }

	    return decorated.call(this, params);
	  };

	  return MinimumResultsForSearch;
	});

	S2.define('select2/dropdown/selectOnClose',[
	  '../utils'
	], function (Utils) {
	  function SelectOnClose () { }

	  SelectOnClose.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('close', function (params) {
	      self._handleSelectOnClose(params);
	    });
	  };

	  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
	    if (params && params.originalSelect2Event != null) {
	      var event = params.originalSelect2Event;

	      // Don't select an item if the close event was triggered from a select or
	      // unselect event
	      if (event._type === 'select' || event._type === 'unselect') {
	        return;
	      }
	    }

	    var $highlightedResults = this.getHighlightedResults();

	    // Only select highlighted results
	    if ($highlightedResults.length < 1) {
	      return;
	    }

	    var data = Utils.GetData($highlightedResults[0], 'data');

	    // Don't re-select already selected resulte
	    if (
	      (data.element != null && data.element.selected) ||
	      (data.element == null && data.selected)
	    ) {
	      return;
	    }

	    this.trigger('select', {
	        data: data
	    });
	  };

	  return SelectOnClose;
	});

	S2.define('select2/dropdown/closeOnSelect',[

	], function () {
	  function CloseOnSelect () { }

	  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('select', function (evt) {
	      self._selectTriggered(evt);
	    });

	    container.on('unselect', function (evt) {
	      self._selectTriggered(evt);
	    });
	  };

	  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
	    var originalEvent = evt.originalEvent;

	    // Don't close if the control key is being held
	    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
	      return;
	    }

	    this.trigger('close', {
	      originalEvent: originalEvent,
	      originalSelect2Event: evt
	    });
	  };

	  return CloseOnSelect;
	});

	S2.define('select2/dropdown/dropdownCss',[
	  '../utils'
	], function (Utils) {
	  function DropdownCSS () { }

	  DropdownCSS.prototype.render = function (decorated) {
	    var $dropdown = decorated.call(this);

	    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

	    if (dropdownCssClass.indexOf(':all:') !== -1) {
	      dropdownCssClass = dropdownCssClass.replace(':all:', '');

	      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
	    }

	    $dropdown.addClass(dropdownCssClass);

	    return $dropdown;
	  };

	  return DropdownCSS;
	});

	S2.define('select2/dropdown/tagsSearchHighlight',[
	  '../utils'
	], function (Utils) {
	  function TagsSearchHighlight () { }

	  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
	    var $options = this.$results
	    .find(
	      '.select2-results__option--selectable' +
	      ':not(.select2-results__option--selected)'
	    );

	    if ($options.length > 0) {
	      var $firstOption = $options.first();
	      var data = Utils.GetData($firstOption[0], 'data');
	      var firstElement = data.element;

	      if (firstElement && firstElement.getAttribute) {
	        if (firstElement.getAttribute('data-select2-tag') === 'true') {
	          $firstOption.trigger('mouseenter');

	          return;
	        }
	      }
	    }

	    decorated.call(this);
	  };

	  return TagsSearchHighlight;
	});

	S2.define('select2/i18n/en',[],function () {
	  // English
	  return {
	    errorLoading: function () {
	      return 'The results could not be loaded.';
	    },
	    inputTooLong: function (args) {
	      var overChars = args.input.length - args.maximum;

	      var message = 'Please delete ' + overChars + ' character';

	      if (overChars != 1) {
	        message += 's';
	      }

	      return message;
	    },
	    inputTooShort: function (args) {
	      var remainingChars = args.minimum - args.input.length;

	      var message = 'Please enter ' + remainingChars + ' or more characters';

	      return message;
	    },
	    loadingMore: function () {
	      return 'Loading more results…';
	    },
	    maximumSelected: function (args) {
	      var message = 'You can only select ' + args.maximum + ' item';

	      if (args.maximum != 1) {
	        message += 's';
	      }

	      return message;
	    },
	    noResults: function () {
	      return 'No results found';
	    },
	    searching: function () {
	      return 'Searching…';
	    },
	    removeAllItems: function () {
	      return 'Remove all items';
	    },
	    removeItem: function () {
	      return 'Remove item';
	    },
	    search: function() {
	      return 'Search';
	    }
	  };
	});

	S2.define('select2/defaults',[
	  'jquery',

	  './results',

	  './selection/single',
	  './selection/multiple',
	  './selection/placeholder',
	  './selection/allowClear',
	  './selection/search',
	  './selection/selectionCss',
	  './selection/eventRelay',

	  './utils',
	  './translation',
	  './diacritics',

	  './data/select',
	  './data/array',
	  './data/ajax',
	  './data/tags',
	  './data/tokenizer',
	  './data/minimumInputLength',
	  './data/maximumInputLength',
	  './data/maximumSelectionLength',

	  './dropdown',
	  './dropdown/search',
	  './dropdown/hidePlaceholder',
	  './dropdown/infiniteScroll',
	  './dropdown/attachBody',
	  './dropdown/minimumResultsForSearch',
	  './dropdown/selectOnClose',
	  './dropdown/closeOnSelect',
	  './dropdown/dropdownCss',
	  './dropdown/tagsSearchHighlight',

	  './i18n/en'
	], function ($,

	             ResultsList,

	             SingleSelection, MultipleSelection, Placeholder, AllowClear,
	             SelectionSearch, SelectionCSS, EventRelay,

	             Utils, Translation, DIACRITICS,

	             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
	             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

	             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
	             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
	             DropdownCSS, TagsSearchHighlight,

	             EnglishTranslation) {
	  function Defaults () {
	    this.reset();
	  }

	  Defaults.prototype.apply = function (options) {
	    options = $.extend(true, {}, this.defaults, options);

	    if (options.dataAdapter == null) {
	      if (options.ajax != null) {
	        options.dataAdapter = AjaxData;
	      } else if (options.data != null) {
	        options.dataAdapter = ArrayData;
	      } else {
	        options.dataAdapter = SelectData;
	      }

	      if (options.minimumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MinimumInputLength
	        );
	      }

	      if (options.maximumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumInputLength
	        );
	      }

	      if (options.maximumSelectionLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumSelectionLength
	        );
	      }

	      if (options.tags) {
	        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
	      }

	      if (options.tokenSeparators != null || options.tokenizer != null) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          Tokenizer
	        );
	      }
	    }

	    if (options.resultsAdapter == null) {
	      options.resultsAdapter = ResultsList;

	      if (options.ajax != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          InfiniteScroll
	        );
	      }

	      if (options.placeholder != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          HidePlaceholder
	        );
	      }

	      if (options.selectOnClose) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          SelectOnClose
	        );
	      }

	      if (options.tags) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          TagsSearchHighlight
	        );
	      }
	    }

	    if (options.dropdownAdapter == null) {
	      if (options.multiple) {
	        options.dropdownAdapter = Dropdown;
	      } else {
	        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

	        options.dropdownAdapter = SearchableDropdown;
	      }

	      if (options.minimumResultsForSearch !== 0) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          MinimumResultsForSearch
	        );
	      }

	      if (options.closeOnSelect) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          CloseOnSelect
	        );
	      }

	      if (options.dropdownCssClass != null) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          DropdownCSS
	        );
	      }

	      options.dropdownAdapter = Utils.Decorate(
	        options.dropdownAdapter,
	        AttachBody
	      );
	    }

	    if (options.selectionAdapter == null) {
	      if (options.multiple) {
	        options.selectionAdapter = MultipleSelection;
	      } else {
	        options.selectionAdapter = SingleSelection;
	      }

	      // Add the placeholder mixin if a placeholder was specified
	      if (options.placeholder != null) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          Placeholder
	        );
	      }

	      if (options.allowClear) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          AllowClear
	        );
	      }

	      if (options.multiple) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          SelectionSearch
	        );
	      }

	      if (options.selectionCssClass != null) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          SelectionCSS
	        );
	      }

	      options.selectionAdapter = Utils.Decorate(
	        options.selectionAdapter,
	        EventRelay
	      );
	    }

	    // If the defaults were not previously applied from an element, it is
	    // possible for the language option to have not been resolved
	    options.language = this._resolveLanguage(options.language);

	    // Always fall back to English since it will always be complete
	    options.language.push('en');

	    var uniqueLanguages = [];

	    for (var l = 0; l < options.language.length; l++) {
	      var language = options.language[l];

	      if (uniqueLanguages.indexOf(language) === -1) {
	        uniqueLanguages.push(language);
	      }
	    }

	    options.language = uniqueLanguages;

	    options.translations = this._processTranslations(
	      options.language,
	      options.debug
	    );

	    return options;
	  };

	  Defaults.prototype.reset = function () {
	    function stripDiacritics (text) {
	      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	      function match(a) {
	        return DIACRITICS[a] || a;
	      }

	      return text.replace(/[^\u0000-\u007E]/g, match);
	    }

	    function matcher (params, data) {
	      // Always return the object if there is nothing to compare
	      if (params.term == null || params.term.trim() === '') {
	        return data;
	      }

	      // Do a recursive check for options with children
	      if (data.children && data.children.length > 0) {
	        // Clone the data object if there are children
	        // This is required as we modify the object to remove any non-matches
	        var match = $.extend(true, {}, data);

	        // Check each child of the option
	        for (var c = data.children.length - 1; c >= 0; c--) {
	          var child = data.children[c];

	          var matches = matcher(params, child);

	          // If there wasn't a match, remove the object in the array
	          if (matches == null) {
	            match.children.splice(c, 1);
	          }
	        }

	        // If any children matched, return the new object
	        if (match.children.length > 0) {
	          return match;
	        }

	        // If there were no matching children, check just the plain object
	        return matcher(params, match);
	      }

	      var original = stripDiacritics(data.text).toUpperCase();
	      var term = stripDiacritics(params.term).toUpperCase();

	      // Check if the text contains the term
	      if (original.indexOf(term) > -1) {
	        return data;
	      }

	      // If it doesn't contain the term, don't return anything
	      return null;
	    }

	    this.defaults = {
	      amdLanguageBase: './i18n/',
	      autocomplete: 'off',
	      closeOnSelect: true,
	      debug: false,
	      dropdownAutoWidth: false,
	      escapeMarkup: Utils.escapeMarkup,
	      language: {},
	      matcher: matcher,
	      minimumInputLength: 0,
	      maximumInputLength: 0,
	      maximumSelectionLength: 0,
	      minimumResultsForSearch: 0,
	      selectOnClose: false,
	      scrollAfterSelect: false,
	      sorter: function (data) {
	        return data;
	      },
	      templateResult: function (result) {
	        return result.text;
	      },
	      templateSelection: function (selection) {
	        return selection.text;
	      },
	      theme: 'default',
	      width: 'resolve'
	    };
	  };

	  Defaults.prototype.applyFromElement = function (options, $element) {
	    var optionLanguage = options.language;
	    var defaultLanguage = this.defaults.language;
	    var elementLanguage = $element.prop('lang');
	    var parentLanguage = $element.closest('[lang]').prop('lang');

	    var languages = Array.prototype.concat.call(
	      this._resolveLanguage(elementLanguage),
	      this._resolveLanguage(optionLanguage),
	      this._resolveLanguage(defaultLanguage),
	      this._resolveLanguage(parentLanguage)
	    );

	    options.language = languages;

	    return options;
	  };

	  Defaults.prototype._resolveLanguage = function (language) {
	    if (!language) {
	      return [];
	    }

	    if ($.isEmptyObject(language)) {
	      return [];
	    }

	    if ($.isPlainObject(language)) {
	      return [language];
	    }

	    var languages;

	    if (!Array.isArray(language)) {
	      languages = [language];
	    } else {
	      languages = language;
	    }

	    var resolvedLanguages = [];

	    for (var l = 0; l < languages.length; l++) {
	      resolvedLanguages.push(languages[l]);

	      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
	        // Extract the region information if it is included
	        var languageParts = languages[l].split('-');
	        var baseLanguage = languageParts[0];

	        resolvedLanguages.push(baseLanguage);
	      }
	    }

	    return resolvedLanguages;
	  };

	  Defaults.prototype._processTranslations = function (languages, debug) {
	    var translations = new Translation();

	    for (var l = 0; l < languages.length; l++) {
	      var languageData = new Translation();

	      var language = languages[l];

	      if (typeof language === 'string') {
	        try {
	          // Try to load it with the original name
	          languageData = Translation.loadPath(language);
	        } catch (e) {
	          try {
	            // If we couldn't load it, check if it wasn't the full path
	            language = this.defaults.amdLanguageBase + language;
	            languageData = Translation.loadPath(language);
	          } catch (ex) {
	            // The translation could not be loaded at all. Sometimes this is
	            // because of a configuration problem, other times this can be
	            // because of how Select2 helps load all possible translation files
	            if (debug && window.console && console.warn) {
	              console.warn(
	                'Select2: The language file for "' + language + '" could ' +
	                'not be automatically loaded. A fallback will be used instead.'
	              );
	            }
	          }
	        }
	      } else if ($.isPlainObject(language)) {
	        languageData = new Translation(language);
	      } else {
	        languageData = language;
	      }

	      translations.extend(languageData);
	    }

	    return translations;
	  };

	  Defaults.prototype.set = function (key, value) {
	    var camelKey = $.camelCase(key);

	    var data = {};
	    data[camelKey] = value;

	    var convertedData = Utils._convertData(data);

	    $.extend(true, this.defaults, convertedData);
	  };

	  var defaults = new Defaults();

	  return defaults;
	});

	S2.define('select2/options',[
	  'jquery',
	  './defaults',
	  './utils'
	], function ($, Defaults, Utils) {
	  function Options (options, $element) {
	    this.options = options;

	    if ($element != null) {
	      this.fromElement($element);
	    }

	    if ($element != null) {
	      this.options = Defaults.applyFromElement(this.options, $element);
	    }

	    this.options = Defaults.apply(this.options);
	  }

	  Options.prototype.fromElement = function ($e) {
	    var excludedData = ['select2'];

	    if (this.options.multiple == null) {
	      this.options.multiple = $e.prop('multiple');
	    }

	    if (this.options.disabled == null) {
	      this.options.disabled = $e.prop('disabled');
	    }

	    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
	      this.options.autocomplete = $e.prop('autocomplete');
	    }

	    if (this.options.dir == null) {
	      if ($e.prop('dir')) {
	        this.options.dir = $e.prop('dir');
	      } else if ($e.closest('[dir]').prop('dir')) {
	        this.options.dir = $e.closest('[dir]').prop('dir');
	      } else {
	        this.options.dir = 'ltr';
	      }
	    }

	    $e.prop('disabled', this.options.disabled);
	    $e.prop('multiple', this.options.multiple);

	    if (Utils.GetData($e[0], 'select2Tags')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-select2-tags` attribute has been changed to ' +
	          'use the `data-data` and `data-tags="true"` attributes and will be ' +
	          'removed in future versions of Select2.'
	        );
	      }

	      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
	      Utils.StoreData($e[0], 'tags', true);
	    }

	    if (Utils.GetData($e[0], 'ajaxUrl')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-ajax-url` attribute has been changed to ' +
	          '`data-ajax--url` and support for the old attribute will be removed' +
	          ' in future versions of Select2.'
	        );
	      }

	      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
	      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
	    }

	    var dataset = {};

	    function upperCaseLetter(_, letter) {
	      return letter.toUpperCase();
	    }

	    // Pre-load all of the attributes which are prefixed with `data-`
	    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
	      var attributeName = $e[0].attributes[attr].name;
	      var prefix = 'data-';

	      if (attributeName.substr(0, prefix.length) == prefix) {
	        // Get the contents of the attribute after `data-`
	        var dataName = attributeName.substring(prefix.length);

	        // Get the data contents from the consistent source
	        // This is more than likely the jQuery data helper
	        var dataValue = Utils.GetData($e[0], dataName);

	        // camelCase the attribute name to match the spec
	        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

	        // Store the data attribute contents into the dataset since
	        dataset[camelDataName] = dataValue;
	      }
	    }

	    // Prefer the element's `dataset` attribute if it exists
	    // jQuery 1.x does not correctly handle data attributes with multiple dashes
	    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
	      dataset = $.extend(true, {}, $e[0].dataset, dataset);
	    }

	    // Prefer our internal data cache if it exists
	    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

	    data = Utils._convertData(data);

	    for (var key in data) {
	      if (excludedData.indexOf(key) > -1) {
	        continue;
	      }

	      if ($.isPlainObject(this.options[key])) {
	        $.extend(this.options[key], data[key]);
	      } else {
	        this.options[key] = data[key];
	      }
	    }

	    return this;
	  };

	  Options.prototype.get = function (key) {
	    return this.options[key];
	  };

	  Options.prototype.set = function (key, val) {
	    this.options[key] = val;
	  };

	  return Options;
	});

	S2.define('select2/core',[
	  'jquery',
	  './options',
	  './utils',
	  './keys'
	], function ($, Options, Utils, KEYS) {
	  var Select2 = function ($element, options) {
	    if (Utils.GetData($element[0], 'select2') != null) {
	      Utils.GetData($element[0], 'select2').destroy();
	    }

	    this.$element = $element;

	    this.id = this._generateId($element);

	    options = options || {};

	    this.options = new Options(options, $element);

	    Select2.__super__.constructor.call(this);

	    // Set up the tabindex

	    var tabindex = $element.attr('tabindex') || 0;
	    Utils.StoreData($element[0], 'old-tabindex', tabindex);
	    $element.attr('tabindex', '-1');

	    // Set up containers and adapters

	    var DataAdapter = this.options.get('dataAdapter');
	    this.dataAdapter = new DataAdapter($element, this.options);

	    var $container = this.render();

	    this._placeContainer($container);

	    var SelectionAdapter = this.options.get('selectionAdapter');
	    this.selection = new SelectionAdapter($element, this.options);
	    this.$selection = this.selection.render();

	    this.selection.position(this.$selection, $container);

	    var DropdownAdapter = this.options.get('dropdownAdapter');
	    this.dropdown = new DropdownAdapter($element, this.options);
	    this.$dropdown = this.dropdown.render();

	    this.dropdown.position(this.$dropdown, $container);

	    var ResultsAdapter = this.options.get('resultsAdapter');
	    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
	    this.$results = this.results.render();

	    this.results.position(this.$results, this.$dropdown);

	    // Bind events

	    var self = this;

	    // Bind the container to all of the adapters
	    this._bindAdapters();

	    // Register any DOM event handlers
	    this._registerDomEvents();

	    // Register any internal event handlers
	    this._registerDataEvents();
	    this._registerSelectionEvents();
	    this._registerDropdownEvents();
	    this._registerResultsEvents();
	    this._registerEvents();

	    // Set the initial state
	    this.dataAdapter.current(function (initialData) {
	      self.trigger('selection:update', {
	        data: initialData
	      });
	    });

	    // Hide the original select
	    $element[0].classList.add('select2-hidden-accessible');
	    $element.attr('aria-hidden', 'true');

	    // Synchronize any monitored attributes
	    this._syncAttributes();

	    Utils.StoreData($element[0], 'select2', this);

	    // Ensure backwards compatibility with $element.data('select2').
	    $element.data('select2', this);
	  };

	  Utils.Extend(Select2, Utils.Observable);

	  Select2.prototype._generateId = function ($element) {
	    var id = '';

	    if ($element.attr('id') != null) {
	      id = $element.attr('id');
	    } else if ($element.attr('name') != null) {
	      id = $element.attr('name') + '-' + Utils.generateChars(2);
	    } else {
	      id = Utils.generateChars(4);
	    }

	    id = id.replace(/(:|\.|\[|\]|,)/g, '');
	    id = 'select2-' + id;

	    return id;
	  };

	  Select2.prototype._placeContainer = function ($container) {
	    $container.insertAfter(this.$element);

	    var width = this._resolveWidth(this.$element, this.options.get('width'));

	    if (width != null) {
	      $container.css('width', width);
	    }
	  };

	  Select2.prototype._resolveWidth = function ($element, method) {
	    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

	    if (method == 'resolve') {
	      var styleWidth = this._resolveWidth($element, 'style');

	      if (styleWidth != null) {
	        return styleWidth;
	      }

	      return this._resolveWidth($element, 'element');
	    }

	    if (method == 'element') {
	      var elementWidth = $element.outerWidth(false);

	      if (elementWidth <= 0) {
	        return 'auto';
	      }

	      return elementWidth + 'px';
	    }

	    if (method == 'style') {
	      var style = $element.attr('style');

	      if (typeof(style) !== 'string') {
	        return null;
	      }

	      var attrs = style.split(';');

	      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
	        var attr = attrs[i].replace(/\s/g, '');
	        var matches = attr.match(WIDTH);

	        if (matches !== null && matches.length >= 1) {
	          return matches[1];
	        }
	      }

	      return null;
	    }

	    if (method == 'computedstyle') {
	      var computedStyle = window.getComputedStyle($element[0]);

	      return computedStyle.width;
	    }

	    return method;
	  };

	  Select2.prototype._bindAdapters = function () {
	    this.dataAdapter.bind(this, this.$container);
	    this.selection.bind(this, this.$container);

	    this.dropdown.bind(this, this.$container);
	    this.results.bind(this, this.$container);
	  };

	  Select2.prototype._registerDomEvents = function () {
	    var self = this;

	    this.$element.on('change.select2', function () {
	      self.dataAdapter.current(function (data) {
	        self.trigger('selection:update', {
	          data: data
	        });
	      });
	    });

	    this.$element.on('focus.select2', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this._syncA = Utils.bind(this._syncAttributes, this);
	    this._syncS = Utils.bind(this._syncSubtree, this);

	    this._observer = new window.MutationObserver(function (mutations) {
	      self._syncA();
	      self._syncS(mutations);
	    });
	    this._observer.observe(this.$element[0], {
	      attributes: true,
	      childList: true,
	      subtree: false
	    });
	  };

	  Select2.prototype._registerDataEvents = function () {
	    var self = this;

	    this.dataAdapter.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerSelectionEvents = function () {
	    var self = this;
	    var nonRelayEvents = ['toggle', 'focus'];

	    this.selection.on('toggle', function () {
	      self.toggleDropdown();
	    });

	    this.selection.on('focus', function (params) {
	      self.focus(params);
	    });

	    this.selection.on('*', function (name, params) {
	      if (nonRelayEvents.indexOf(name) !== -1) {
	        return;
	      }

	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerDropdownEvents = function () {
	    var self = this;

	    this.dropdown.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerResultsEvents = function () {
	    var self = this;

	    this.results.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerEvents = function () {
	    var self = this;

	    this.on('open', function () {
	      self.$container[0].classList.add('select2-container--open');
	    });

	    this.on('close', function () {
	      self.$container[0].classList.remove('select2-container--open');
	    });

	    this.on('enable', function () {
	      self.$container[0].classList.remove('select2-container--disabled');
	    });

	    this.on('disable', function () {
	      self.$container[0].classList.add('select2-container--disabled');
	    });

	    this.on('blur', function () {
	      self.$container[0].classList.remove('select2-container--focus');
	    });

	    this.on('query', function (params) {
	      if (!self.isOpen()) {
	        self.trigger('open', {});
	      }

	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:all', {
	          data: data,
	          query: params
	        });
	      });
	    });

	    this.on('query:append', function (params) {
	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:append', {
	          data: data,
	          query: params
	        });
	      });
	    });

	    this.on('keypress', function (evt) {
	      var key = evt.which;

	      if (self.isOpen()) {
	        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
	          self.close(evt);

	          evt.preventDefault();
	        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
	          self.trigger('results:select', {});

	          evt.preventDefault();
	        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
	          self.trigger('results:toggle', {});

	          evt.preventDefault();
	        } else if (key === KEYS.UP) {
	          self.trigger('results:previous', {});

	          evt.preventDefault();
	        } else if (key === KEYS.DOWN) {
	          self.trigger('results:next', {});

	          evt.preventDefault();
	        }
	      } else {
	        if (key === KEYS.ENTER || key === KEYS.SPACE ||
	            (key === KEYS.DOWN && evt.altKey)) {
	          self.open();

	          evt.preventDefault();
	        }
	      }
	    });
	  };

	  Select2.prototype._syncAttributes = function () {
	    this.options.set('disabled', this.$element.prop('disabled'));

	    if (this.isDisabled()) {
	      if (this.isOpen()) {
	        this.close();
	      }

	      this.trigger('disable', {});
	    } else {
	      this.trigger('enable', {});
	    }
	  };

	  Select2.prototype._isChangeMutation = function (mutations) {
	    var self = this;

	    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
	      for (var n = 0; n < mutations.addedNodes.length; n++) {
	        var node = mutations.addedNodes[n];

	        if (node.selected) {
	          return true;
	        }
	      }
	    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
	      return true;
	    } else if (Array.isArray(mutations)) {
	      return mutations.some(function (mutation) {
	        return self._isChangeMutation(mutation);
	      });
	    }

	    return false;
	  };

	  Select2.prototype._syncSubtree = function (mutations) {
	    var changed = this._isChangeMutation(mutations);
	    var self = this;

	    // Only re-pull the data if we think there is a change
	    if (changed) {
	      this.dataAdapter.current(function (currentData) {
	        self.trigger('selection:update', {
	          data: currentData
	        });
	      });
	    }
	  };

	  /**
	   * Override the trigger method to automatically trigger pre-events when
	   * there are events that can be prevented.
	   */
	  Select2.prototype.trigger = function (name, args) {
	    var actualTrigger = Select2.__super__.trigger;
	    var preTriggerMap = {
	      'open': 'opening',
	      'close': 'closing',
	      'select': 'selecting',
	      'unselect': 'unselecting',
	      'clear': 'clearing'
	    };

	    if (args === undefined) {
	      args = {};
	    }

	    if (name in preTriggerMap) {
	      var preTriggerName = preTriggerMap[name];
	      var preTriggerArgs = {
	        prevented: false,
	        name: name,
	        args: args
	      };

	      actualTrigger.call(this, preTriggerName, preTriggerArgs);

	      if (preTriggerArgs.prevented) {
	        args.prevented = true;

	        return;
	      }
	    }

	    actualTrigger.call(this, name, args);
	  };

	  Select2.prototype.toggleDropdown = function () {
	    if (this.isDisabled()) {
	      return;
	    }

	    if (this.isOpen()) {
	      this.close();
	    } else {
	      this.open();
	    }
	  };

	  Select2.prototype.open = function () {
	    if (this.isOpen()) {
	      return;
	    }

	    if (this.isDisabled()) {
	      return;
	    }

	    this.trigger('query', {});
	  };

	  Select2.prototype.close = function (evt) {
	    if (!this.isOpen()) {
	      return;
	    }

	    this.trigger('close', { originalEvent : evt });
	  };

	  /**
	   * Helper method to abstract the "enabled" (not "disabled") state of this
	   * object.
	   *
	   * @return {true} if the instance is not disabled.
	   * @return {false} if the instance is disabled.
	   */
	  Select2.prototype.isEnabled = function () {
	    return !this.isDisabled();
	  };

	  /**
	   * Helper method to abstract the "disabled" state of this object.
	   *
	   * @return {true} if the disabled option is true.
	   * @return {false} if the disabled option is false.
	   */
	  Select2.prototype.isDisabled = function () {
	    return this.options.get('disabled');
	  };

	  Select2.prototype.isOpen = function () {
	    return this.$container[0].classList.contains('select2-container--open');
	  };

	  Select2.prototype.hasFocus = function () {
	    return this.$container[0].classList.contains('select2-container--focus');
	  };

	  Select2.prototype.focus = function (data) {
	    // No need to re-trigger focus events if we are already focused
	    if (this.hasFocus()) {
	      return;
	    }

	    this.$container[0].classList.add('select2-container--focus');
	    this.trigger('focus', {});
	  };

	  Select2.prototype.enable = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("enable")` method has been deprecated and will' +
	        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
	        ' instead.'
	      );
	    }

	    if (args == null || args.length === 0) {
	      args = [true];
	    }

	    var disabled = !args[0];

	    this.$element.prop('disabled', disabled);
	  };

	  Select2.prototype.data = function () {
	    if (this.options.get('debug') &&
	        arguments.length > 0 && window.console && console.warn) {
	      console.warn(
	        'Select2: Data can no longer be set using `select2("data")`. You ' +
	        'should consider setting the value instead using `$element.val()`.'
	      );
	    }

	    var data = [];

	    this.dataAdapter.current(function (currentData) {
	      data = currentData;
	    });

	    return data;
	  };

	  Select2.prototype.val = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("val")` method has been deprecated and will be' +
	        ' removed in later Select2 versions. Use $element.val() instead.'
	      );
	    }

	    if (args == null || args.length === 0) {
	      return this.$element.val();
	    }

	    var newVal = args[0];

	    if (Array.isArray(newVal)) {
	      newVal = newVal.map(function (obj) {
	        return obj.toString();
	      });
	    }

	    this.$element.val(newVal).trigger('input').trigger('change');
	  };

	  Select2.prototype.destroy = function () {
	    Utils.RemoveData(this.$container[0]);
	    this.$container.remove();

	    this._observer.disconnect();
	    this._observer = null;

	    this._syncA = null;
	    this._syncS = null;

	    this.$element.off('.select2');
	    this.$element.attr('tabindex',
	    Utils.GetData(this.$element[0], 'old-tabindex'));

	    this.$element[0].classList.remove('select2-hidden-accessible');
	    this.$element.attr('aria-hidden', 'false');
	    Utils.RemoveData(this.$element[0]);
	    this.$element.removeData('select2');

	    this.dataAdapter.destroy();
	    this.selection.destroy();
	    this.dropdown.destroy();
	    this.results.destroy();

	    this.dataAdapter = null;
	    this.selection = null;
	    this.dropdown = null;
	    this.results = null;
	  };

	  Select2.prototype.render = function () {
	    var $container = $(
	      '<span class="select2 select2-container">' +
	        '<span class="selection"></span>' +
	        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
	      '</span>'
	    );

	    $container.attr('dir', this.options.get('dir'));

	    this.$container = $container;

	    this.$container[0].classList
	      .add('select2-container--' + this.options.get('theme'));

	    Utils.StoreData($container[0], 'element', this.$element);

	    return $container;
	  };

	  return Select2;
	});

	S2.define('jquery-mousewheel',[
	  'jquery'
	], function ($) {
	  // Used to shim jQuery.mousewheel for non-full builds.
	  return $;
	});

	S2.define('jquery.select2',[
	  'jquery',
	  'jquery-mousewheel',

	  './select2/core',
	  './select2/defaults',
	  './select2/utils'
	], function ($, _, Select2, Defaults, Utils) {
	  if ($.fn.select2 == null) {
	    // All methods that should return the element
	    var thisMethods = ['open', 'close', 'destroy'];

	    $.fn.select2 = function (options) {
	      options = options || {};

	      if (typeof options === 'object') {
	        this.each(function () {
	          var instanceOptions = $.extend(true, {}, options);

	          new Select2($(this), instanceOptions);
	        });

	        return this;
	      } else if (typeof options === 'string') {
	        var ret;
	        var args = Array.prototype.slice.call(arguments, 1);

	        this.each(function () {
	          var instance = Utils.GetData(this, 'select2');

	          if (instance == null && window.console && console.error) {
	            console.error(
	              'The select2(\'' + options + '\') method was called on an ' +
	              'element that is not using Select2.'
	            );
	          }

	          ret = instance[options].apply(instance, args);
	        });

	        // Check if we should be returning `this`
	        if (thisMethods.indexOf(options) > -1) {
	          return this;
	        }

	        return ret;
	      } else {
	        throw new Error('Invalid arguments for Select2: ' + options);
	      }
	    };
	  }

	  if ($.fn.select2.defaults == null) {
	    $.fn.select2.defaults = Defaults;
	  }

	  return Select2;
	});

	  // Return the AMD loader configuration so it can be used outside of this file
	  return {
	    define: S2.define,
	    require: S2.require
	  };
	}());

	  // Autoload the jQuery bindings
	  // We know that all of the modules exist above this, so we're safe
	  var select2 = S2.require('jquery.select2');

	  // Hold the AMD module references on the jQuery function that was just loaded
	  // This allows Select2 to use the internal loader outside of this file, such
	  // as in the language files.
	  jQuery.fn.select2.amd = S2;

	  // Return the Select2 instance for anyone who is importing it.
	  return select2;
	}));
	});

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/data.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * Constants
	 */

	const elementMap = new Map();

	var Data = {
	  set(element, key, instance) {
	    if (!elementMap.has(element)) {
	      elementMap.set(element, new Map());
	    }

	    const instanceMap = elementMap.get(element);

	    // make it clear we only want one instance per element
	    // can be removed later when multiple key/instances are fine to be used
	    if (!instanceMap.has(key) && instanceMap.size !== 0) {
	      // eslint-disable-next-line no-console
	      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
	      return
	    }

	    instanceMap.set(key, instance);
	  },

	  get(element, key) {
	    if (elementMap.has(element)) {
	      return elementMap.get(element).get(key) || null
	    }

	    return null
	  },

	  remove(element, key) {
	    if (!elementMap.has(element)) {
	      return
	    }

	    const instanceMap = elementMap.get(element);

	    instanceMap.delete(key);

	    // free up element references if there are no instances left for an element
	    if (instanceMap.size === 0) {
	      elementMap.delete(element);
	    }
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/index.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const MAX_UID = 1_000_000;
	const MILLISECONDS_MULTIPLIER = 1000;
	const TRANSITION_END = 'transitionend';

	/**
	 * Properly escape IDs selectors to handle weird IDs
	 * @param {string} selector
	 * @returns {string}
	 */
	const parseSelector = selector => {
	  if (selector && window.CSS && window.CSS.escape) {
	    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
	    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
	  }

	  return selector
	};

	// Shout-out Angus Croll (https://goo.gl/pxwQGp)
	const toType = object => {
	  if (object === null || object === undefined) {
	    return `${object}`
	  }

	  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()
	};

	/**
	 * Public Util API
	 */

	const getUID = prefix => {
	  do {
	    prefix += Math.floor(Math.random() * MAX_UID);
	  } while (document.getElementById(prefix))

	  return prefix
	};

	const getTransitionDurationFromElement = element => {
	  if (!element) {
	    return 0
	  }

	  // Get transition-duration of the element
	  let { transitionDuration, transitionDelay } = window.getComputedStyle(element);

	  const floatTransitionDuration = Number.parseFloat(transitionDuration);
	  const floatTransitionDelay = Number.parseFloat(transitionDelay);

	  // Return 0 if element or transition duration is not found
	  if (!floatTransitionDuration && !floatTransitionDelay) {
	    return 0
	  }

	  // If multiple durations are defined, take the first
	  transitionDuration = transitionDuration.split(',')[0];
	  transitionDelay = transitionDelay.split(',')[0];

	  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
	};

	const triggerTransitionEnd = element => {
	  element.dispatchEvent(new Event(TRANSITION_END));
	};

	const isElement$1 = object => {
	  if (!object || typeof object !== 'object') {
	    return false
	  }

	  if (typeof object.jquery !== 'undefined') {
	    object = object[0];
	  }

	  return typeof object.nodeType !== 'undefined'
	};

	const getElement = object => {
	  // it's a jQuery object or a node element
	  if (isElement$1(object)) {
	    return object.jquery ? object[0] : object
	  }

	  if (typeof object === 'string' && object.length > 0) {
	    return document.querySelector(parseSelector(object))
	  }

	  return null
	};

	const isVisible = element => {
	  if (!isElement$1(element) || element.getClientRects().length === 0) {
	    return false
	  }

	  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
	  // Handle `details` element as its content may falsie appear visible when it is closed
	  const closedDetails = element.closest('details:not([open])');

	  if (!closedDetails) {
	    return elementIsVisible
	  }

	  if (closedDetails !== element) {
	    const summary = element.closest('summary');
	    if (summary && summary.parentNode !== closedDetails) {
	      return false
	    }

	    if (summary === null) {
	      return false
	    }
	  }

	  return elementIsVisible
	};

	const isDisabled = element => {
	  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
	    return true
	  }

	  if (element.classList.contains('disabled')) {
	    return true
	  }

	  if (typeof element.disabled !== 'undefined') {
	    return element.disabled
	  }

	  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
	};

	const findShadowRoot = element => {
	  if (!document.documentElement.attachShadow) {
	    return null
	  }

	  // Can find the shadow root otherwise it'll return the document
	  if (typeof element.getRootNode === 'function') {
	    const root = element.getRootNode();
	    return root instanceof ShadowRoot ? root : null
	  }

	  if (element instanceof ShadowRoot) {
	    return element
	  }

	  // when we don't find a shadow root
	  if (!element.parentNode) {
	    return null
	  }

	  return findShadowRoot(element.parentNode)
	};

	const noop = () => {};

	/**
	 * Trick to restart an element's animation
	 *
	 * @param {HTMLElement} element
	 * @return void
	 *
	 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
	 */
	const reflow = element => {
	  element.offsetHeight; // eslint-disable-line no-unused-expressions
	};

	const getjQuery = () => {
	  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
	    return window.jQuery
	  }

	  return null
	};

	const DOMContentLoadedCallbacks = [];

	const onDOMContentLoaded = callback => {
	  if (document.readyState === 'loading') {
	    // add listener on the first call when the document is in loading state
	    if (!DOMContentLoadedCallbacks.length) {
	      document.addEventListener('DOMContentLoaded', () => {
	        for (const callback of DOMContentLoadedCallbacks) {
	          callback();
	        }
	      });
	    }

	    DOMContentLoadedCallbacks.push(callback);
	  } else {
	    callback();
	  }
	};

	const isRTL = () => document.documentElement.dir === 'rtl';

	const defineJQueryPlugin = plugin => {
	  onDOMContentLoaded(() => {
	    const $ = getjQuery();
	    /* istanbul ignore if */
	    if ($) {
	      const name = plugin.NAME;
	      const JQUERY_NO_CONFLICT = $.fn[name];
	      $.fn[name] = plugin.jQueryInterface;
	      $.fn[name].Constructor = plugin;
	      $.fn[name].noConflict = () => {
	        $.fn[name] = JQUERY_NO_CONFLICT;
	        return plugin.jQueryInterface
	      };
	    }
	  });
	};

	const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
	  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue
	};

	const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
	  if (!waitForTransition) {
	    execute(callback);
	    return
	  }

	  const durationPadding = 5;
	  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;

	  let called = false;

	  const handler = ({ target }) => {
	    if (target !== transitionElement) {
	      return
	    }

	    called = true;
	    transitionElement.removeEventListener(TRANSITION_END, handler);
	    execute(callback);
	  };

	  transitionElement.addEventListener(TRANSITION_END, handler);
	  setTimeout(() => {
	    if (!called) {
	      triggerTransitionEnd(transitionElement);
	    }
	  }, emulatedDuration);
	};

	/**
	 * Return the previous/next element of a list.
	 *
	 * @param {array} list    The list of elements
	 * @param activeElement   The active element
	 * @param shouldGetNext   Choose to get next or previous element
	 * @param isCycleAllowed
	 * @return {Element|elem} The proper element
	 */
	const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
	  const listLength = list.length;
	  let index = list.indexOf(activeElement);

	  // if the element does not exist in the list return an element
	  // depending on the direction and if cycle is allowed
	  if (index === -1) {
	    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]
	  }

	  index += shouldGetNext ? 1 : -1;

	  if (isCycleAllowed) {
	    index = (index + listLength) % listLength;
	  }

	  return list[Math.max(0, Math.min(index, listLength - 1))]
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/event-handler.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
	const stripNameRegex = /\..*/;
	const stripUidRegex = /::\d+$/;
	const eventRegistry = {}; // Events storage
	let uidEvent = 1;
	const customEvents = {
	  mouseenter: 'mouseover',
	  mouseleave: 'mouseout'
	};

	const nativeEvents = new Set([
	  'click',
	  'dblclick',
	  'mouseup',
	  'mousedown',
	  'contextmenu',
	  'mousewheel',
	  'DOMMouseScroll',
	  'mouseover',
	  'mouseout',
	  'mousemove',
	  'selectstart',
	  'selectend',
	  'keydown',
	  'keypress',
	  'keyup',
	  'orientationchange',
	  'touchstart',
	  'touchmove',
	  'touchend',
	  'touchcancel',
	  'pointerdown',
	  'pointermove',
	  'pointerup',
	  'pointerleave',
	  'pointercancel',
	  'gesturestart',
	  'gesturechange',
	  'gestureend',
	  'focus',
	  'blur',
	  'change',
	  'reset',
	  'select',
	  'submit',
	  'focusin',
	  'focusout',
	  'load',
	  'unload',
	  'beforeunload',
	  'resize',
	  'move',
	  'DOMContentLoaded',
	  'readystatechange',
	  'error',
	  'abort',
	  'scroll'
	]);

	/**
	 * Private methods
	 */

	function makeEventUid(element, uid) {
	  return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
	}

	function getElementEvents(element) {
	  const uid = makeEventUid(element);

	  element.uidEvent = uid;
	  eventRegistry[uid] = eventRegistry[uid] || {};

	  return eventRegistry[uid]
	}

	function bootstrapHandler(element, fn) {
	  return function handler(event) {
	    hydrateObj(event, { delegateTarget: element });

	    if (handler.oneOff) {
	      EventHandler.off(element, event.type, fn);
	    }

	    return fn.apply(element, [event])
	  }
	}

	function bootstrapDelegationHandler(element, selector, fn) {
	  return function handler(event) {
	    const domElements = element.querySelectorAll(selector);

	    for (let { target } = event; target && target !== this; target = target.parentNode) {
	      for (const domElement of domElements) {
	        if (domElement !== target) {
	          continue
	        }

	        hydrateObj(event, { delegateTarget: target });

	        if (handler.oneOff) {
	          EventHandler.off(element, event.type, selector, fn);
	        }

	        return fn.apply(target, [event])
	      }
	    }
	  }
	}

	function findHandler(events, callable, delegationSelector = null) {
	  return Object.values(events)
	    .find(event => event.callable === callable && event.delegationSelector === delegationSelector)
	}

	function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
	  const isDelegated = typeof handler === 'string';
	  // TODO: tooltip passes `false` instead of selector, so we need to check
	  const callable = isDelegated ? delegationFunction : (handler || delegationFunction);
	  let typeEvent = getTypeEvent(originalTypeEvent);

	  if (!nativeEvents.has(typeEvent)) {
	    typeEvent = originalTypeEvent;
	  }

	  return [isDelegated, callable, typeEvent]
	}

	function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
	  if (typeof originalTypeEvent !== 'string' || !element) {
	    return
	  }

	  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

	  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
	  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
	  if (originalTypeEvent in customEvents) {
	    const wrapFunction = fn => {
	      return function (event) {
	        if (!event.relatedTarget || (event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget))) {
	          return fn.call(this, event)
	        }
	      }
	    };

	    callable = wrapFunction(callable);
	  }

	  const events = getElementEvents(element);
	  const handlers = events[typeEvent] || (events[typeEvent] = {});
	  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

	  if (previousFunction) {
	    previousFunction.oneOff = previousFunction.oneOff && oneOff;

	    return
	  }

	  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
	  const fn = isDelegated ?
	    bootstrapDelegationHandler(element, handler, callable) :
	    bootstrapHandler(element, callable);

	  fn.delegationSelector = isDelegated ? handler : null;
	  fn.callable = callable;
	  fn.oneOff = oneOff;
	  fn.uidEvent = uid;
	  handlers[uid] = fn;

	  element.addEventListener(typeEvent, fn, isDelegated);
	}

	function removeHandler(element, events, typeEvent, handler, delegationSelector) {
	  const fn = findHandler(events[typeEvent], handler, delegationSelector);

	  if (!fn) {
	    return
	  }

	  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
	  delete events[typeEvent][fn.uidEvent];
	}

	function removeNamespacedHandlers(element, events, typeEvent, namespace) {
	  const storeElementEvent = events[typeEvent] || {};

	  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
	    if (handlerKey.includes(namespace)) {
	      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
	    }
	  }
	}

	function getTypeEvent(event) {
	  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
	  event = event.replace(stripNameRegex, '');
	  return customEvents[event] || event
	}

	const EventHandler = {
	  on(element, event, handler, delegationFunction) {
	    addHandler(element, event, handler, delegationFunction, false);
	  },

	  one(element, event, handler, delegationFunction) {
	    addHandler(element, event, handler, delegationFunction, true);
	  },

	  off(element, originalTypeEvent, handler, delegationFunction) {
	    if (typeof originalTypeEvent !== 'string' || !element) {
	      return
	    }

	    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
	    const inNamespace = typeEvent !== originalTypeEvent;
	    const events = getElementEvents(element);
	    const storeElementEvent = events[typeEvent] || {};
	    const isNamespace = originalTypeEvent.startsWith('.');

	    if (typeof callable !== 'undefined') {
	      // Simplest case: handler is passed, remove that listener ONLY.
	      if (!Object.keys(storeElementEvent).length) {
	        return
	      }

	      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
	      return
	    }

	    if (isNamespace) {
	      for (const elementEvent of Object.keys(events)) {
	        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
	      }
	    }

	    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
	      const handlerKey = keyHandlers.replace(stripUidRegex, '');

	      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
	        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
	      }
	    }
	  },

	  trigger(element, event, args) {
	    if (typeof event !== 'string' || !element) {
	      return null
	    }

	    const $ = getjQuery();
	    const typeEvent = getTypeEvent(event);
	    const inNamespace = event !== typeEvent;

	    let jQueryEvent = null;
	    let bubbles = true;
	    let nativeDispatch = true;
	    let defaultPrevented = false;

	    if (inNamespace && $) {
	      jQueryEvent = $.Event(event, args);

	      $(element).trigger(jQueryEvent);
	      bubbles = !jQueryEvent.isPropagationStopped();
	      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
	      defaultPrevented = jQueryEvent.isDefaultPrevented();
	    }

	    const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);

	    if (defaultPrevented) {
	      evt.preventDefault();
	    }

	    if (nativeDispatch) {
	      element.dispatchEvent(evt);
	    }

	    if (evt.defaultPrevented && jQueryEvent) {
	      jQueryEvent.preventDefault();
	    }

	    return evt
	  }
	};

	function hydrateObj(obj, meta = {}) {
	  for (const [key, value] of Object.entries(meta)) {
	    try {
	      obj[key] = value;
	    } catch {
	      Object.defineProperty(obj, key, {
	        configurable: true,
	        get() {
	          return value
	        }
	      });
	    }
	  }

	  return obj
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/manipulator.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	function normalizeData(value) {
	  if (value === 'true') {
	    return true
	  }

	  if (value === 'false') {
	    return false
	  }

	  if (value === Number(value).toString()) {
	    return Number(value)
	  }

	  if (value === '' || value === 'null') {
	    return null
	  }

	  if (typeof value !== 'string') {
	    return value
	  }

	  try {
	    return JSON.parse(decodeURIComponent(value))
	  } catch {
	    return value
	  }
	}

	function normalizeDataKey(key) {
	  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
	}

	const Manipulator = {
	  setDataAttribute(element, key, value) {
	    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
	  },

	  removeDataAttribute(element, key) {
	    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
	  },

	  getDataAttributes(element) {
	    if (!element) {
	      return {}
	    }

	    const attributes = {};
	    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

	    for (const key of bsKeys) {
	      let pureKey = key.replace(/^bs/, '');
	      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
	      attributes[pureKey] = normalizeData(element.dataset[key]);
	    }

	    return attributes
	  },

	  getDataAttribute(element, key) {
	    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/config.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Class definition
	 */

	class Config {
	  // Getters
	  static get Default() {
	    return {}
	  }

	  static get DefaultType() {
	    return {}
	  }

	  static get NAME() {
	    throw new Error('You have to implement the static method "NAME", for each component!')
	  }

	  _getConfig(config) {
	    config = this._mergeConfigObj(config);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config
	  }

	  _configAfterMerge(config) {
	    return config
	  }

	  _mergeConfigObj(config, element) {
	    const jsonConfig = isElement$1(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

	    return {
	      ...this.constructor.Default,
	      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
	      ...(isElement$1(element) ? Manipulator.getDataAttributes(element) : {}),
	      ...(typeof config === 'object' ? config : {})
	    }
	  }

	  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
	    for (const [property, expectedTypes] of Object.entries(configTypes)) {
	      const value = config[property];
	      const valueType = isElement$1(value) ? 'element' : toType(value);

	      if (!new RegExp(expectedTypes).test(valueType)) {
	        throw new TypeError(
	          `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
	        )
	      }
	    }
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap base-component.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const VERSION = '5.3.3';

	/**
	 * Class definition
	 */

	class BaseComponent extends Config {
	  constructor(element, config) {
	    super();

	    element = getElement(element);
	    if (!element) {
	      return
	    }

	    this._element = element;
	    this._config = this._getConfig(config);

	    Data.set(this._element, this.constructor.DATA_KEY, this);
	  }

	  // Public
	  dispose() {
	    Data.remove(this._element, this.constructor.DATA_KEY);
	    EventHandler.off(this._element, this.constructor.EVENT_KEY);

	    for (const propertyName of Object.getOwnPropertyNames(this)) {
	      this[propertyName] = null;
	    }
	  }

	  _queueCallback(callback, element, isAnimated = true) {
	    executeAfterTransition(callback, element, isAnimated);
	  }

	  _getConfig(config) {
	    config = this._mergeConfigObj(config, this._element);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config
	  }

	  // Static
	  static getInstance(element) {
	    return Data.get(getElement(element), this.DATA_KEY)
	  }

	  static getOrCreateInstance(element, config = {}) {
	    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null)
	  }

	  static get VERSION() {
	    return VERSION
	  }

	  static get DATA_KEY() {
	    return `bs.${this.NAME}`
	  }

	  static get EVENT_KEY() {
	    return `.${this.DATA_KEY}`
	  }

	  static eventName(name) {
	    return `${name}${this.EVENT_KEY}`
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap button.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$e = 'button';
	const DATA_KEY$9 = 'bs.button';
	const EVENT_KEY$a = `.${DATA_KEY$9}`;
	const DATA_API_KEY$6 = '.data-api';

	const CLASS_NAME_ACTIVE$3 = 'active';
	const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
	const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

	/**
	 * Class definition
	 */

	class Button extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$e
	  }

	  // Public
	  toggle() {
	    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
	    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Button.getOrCreateInstance(this);

	      if (config === 'toggle') {
	        data[config]();
	      }
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
	  event.preventDefault();

	  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
	  const data = Button.getOrCreateInstance(button);

	  data.toggle();
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Button);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dom/selector-engine.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	const getSelector = element => {
	  let selector = element.getAttribute('data-bs-target');

	  if (!selector || selector === '#') {
	    let hrefAttribute = element.getAttribute('href');

	    // The only valid content that could double as a selector are IDs or classes,
	    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
	    // `document.querySelector` will rightfully complain it is invalid.
	    // See https://github.com/twbs/bootstrap/issues/32273
	    if (!hrefAttribute || (!hrefAttribute.includes('#') && !hrefAttribute.startsWith('.'))) {
	      return null
	    }

	    // Just in case some CMS puts out a full URL with the anchor appended
	    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
	      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
	    }

	    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
	  }

	  return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null
	};

	const SelectorEngine = {
	  find(selector, element = document.documentElement) {
	    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
	  },

	  findOne(selector, element = document.documentElement) {
	    return Element.prototype.querySelector.call(element, selector)
	  },

	  children(element, selector) {
	    return [].concat(...element.children).filter(child => child.matches(selector))
	  },

	  parents(element, selector) {
	    const parents = [];
	    let ancestor = element.parentNode.closest(selector);

	    while (ancestor) {
	      parents.push(ancestor);
	      ancestor = ancestor.parentNode.closest(selector);
	    }

	    return parents
	  },

	  prev(element, selector) {
	    let previous = element.previousElementSibling;

	    while (previous) {
	      if (previous.matches(selector)) {
	        return [previous]
	      }

	      previous = previous.previousElementSibling;
	    }

	    return []
	  },
	  // TODO: this is now unused; remove later along with prev()
	  next(element, selector) {
	    let next = element.nextElementSibling;

	    while (next) {
	      if (next.matches(selector)) {
	        return [next]
	      }

	      next = next.nextElementSibling;
	    }

	    return []
	  },

	  focusableChildren(element) {
	    const focusables = [
	      'a',
	      'button',
	      'input',
	      'textarea',
	      'select',
	      'details',
	      '[tabindex]',
	      '[contenteditable="true"]'
	    ].map(selector => `${selector}:not([tabindex^="-"])`).join(',');

	    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el))
	  },

	  getSelectorFromElement(element) {
	    const selector = getSelector(element);

	    if (selector) {
	      return SelectorEngine.findOne(selector) ? selector : null
	    }

	    return null
	  },

	  getElementFromSelector(element) {
	    const selector = getSelector(element);

	    return selector ? SelectorEngine.findOne(selector) : null
	  },

	  getMultipleElementsFromSelector(element) {
	    const selector = getSelector(element);

	    return selector ? SelectorEngine.find(selector) : []
	  }
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/swipe.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$d = 'swipe';
	const EVENT_KEY$9 = '.bs.swipe';
	const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
	const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
	const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
	const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
	const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
	const POINTER_TYPE_TOUCH = 'touch';
	const POINTER_TYPE_PEN = 'pen';
	const CLASS_NAME_POINTER_EVENT = 'pointer-event';
	const SWIPE_THRESHOLD = 40;

	const Default$c = {
	  endCallback: null,
	  leftCallback: null,
	  rightCallback: null
	};

	const DefaultType$c = {
	  endCallback: '(function|null)',
	  leftCallback: '(function|null)',
	  rightCallback: '(function|null)'
	};

	/**
	 * Class definition
	 */

	class Swipe extends Config {
	  constructor(element, config) {
	    super();
	    this._element = element;

	    if (!element || !Swipe.isSupported()) {
	      return
	    }

	    this._config = this._getConfig(config);
	    this._deltaX = 0;
	    this._supportPointerEvents = Boolean(window.PointerEvent);
	    this._initEvents();
	  }

	  // Getters
	  static get Default() {
	    return Default$c
	  }

	  static get DefaultType() {
	    return DefaultType$c
	  }

	  static get NAME() {
	    return NAME$d
	  }

	  // Public
	  dispose() {
	    EventHandler.off(this._element, EVENT_KEY$9);
	  }

	  // Private
	  _start(event) {
	    if (!this._supportPointerEvents) {
	      this._deltaX = event.touches[0].clientX;

	      return
	    }

	    if (this._eventIsPointerPenTouch(event)) {
	      this._deltaX = event.clientX;
	    }
	  }

	  _end(event) {
	    if (this._eventIsPointerPenTouch(event)) {
	      this._deltaX = event.clientX - this._deltaX;
	    }

	    this._handleSwipe();
	    execute(this._config.endCallback);
	  }

	  _move(event) {
	    this._deltaX = event.touches && event.touches.length > 1 ?
	      0 :
	      event.touches[0].clientX - this._deltaX;
	  }

	  _handleSwipe() {
	    const absDeltaX = Math.abs(this._deltaX);

	    if (absDeltaX <= SWIPE_THRESHOLD) {
	      return
	    }

	    const direction = absDeltaX / this._deltaX;

	    this._deltaX = 0;

	    if (!direction) {
	      return
	    }

	    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
	  }

	  _initEvents() {
	    if (this._supportPointerEvents) {
	      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
	      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

	      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
	    } else {
	      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
	      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
	      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
	    }
	  }

	  _eventIsPointerPenTouch(event) {
	    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)
	  }

	  // Static
	  static isSupported() {
	    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap carousel.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$c = 'carousel';
	const DATA_KEY$8 = 'bs.carousel';
	const EVENT_KEY$8 = `.${DATA_KEY$8}`;
	const DATA_API_KEY$5 = '.data-api';

	const ARROW_LEFT_KEY$1 = 'ArrowLeft';
	const ARROW_RIGHT_KEY$1 = 'ArrowRight';
	const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	const ORDER_NEXT = 'next';
	const ORDER_PREV = 'prev';
	const DIRECTION_LEFT = 'left';
	const DIRECTION_RIGHT = 'right';

	const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
	const EVENT_SLID = `slid${EVENT_KEY$8}`;
	const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
	const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
	const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
	const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
	const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
	const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;

	const CLASS_NAME_CAROUSEL = 'carousel';
	const CLASS_NAME_ACTIVE$2 = 'active';
	const CLASS_NAME_SLIDE = 'slide';
	const CLASS_NAME_END = 'carousel-item-end';
	const CLASS_NAME_START = 'carousel-item-start';
	const CLASS_NAME_NEXT = 'carousel-item-next';
	const CLASS_NAME_PREV = 'carousel-item-prev';

	const SELECTOR_ACTIVE = '.active';
	const SELECTOR_ITEM = '.carousel-item';
	const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
	const SELECTOR_ITEM_IMG = '.carousel-item img';
	const SELECTOR_INDICATORS = '.carousel-indicators';
	const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
	const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';

	const KEY_TO_DIRECTION = {
	  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
	  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
	};

	const Default$b = {
	  interval: 5000,
	  keyboard: true,
	  pause: 'hover',
	  ride: false,
	  touch: true,
	  wrap: true
	};

	const DefaultType$b = {
	  interval: '(number|boolean)', // TODO:v6 remove boolean support
	  keyboard: 'boolean',
	  pause: '(string|boolean)',
	  ride: '(boolean|string)',
	  touch: 'boolean',
	  wrap: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Carousel extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._interval = null;
	    this._activeElement = null;
	    this._isSliding = false;
	    this.touchTimeout = null;
	    this._swipeHelper = null;

	    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
	    this._addEventListeners();

	    if (this._config.ride === CLASS_NAME_CAROUSEL) {
	      this.cycle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$b
	  }

	  static get DefaultType() {
	    return DefaultType$b
	  }

	  static get NAME() {
	    return NAME$c
	  }

	  // Public
	  next() {
	    this._slide(ORDER_NEXT);
	  }

	  nextWhenVisible() {
	    // FIXME TODO use `document.visibilityState`
	    // Don't call next when the page isn't visible
	    // or the carousel or its parent isn't visible
	    if (!document.hidden && isVisible(this._element)) {
	      this.next();
	    }
	  }

	  prev() {
	    this._slide(ORDER_PREV);
	  }

	  pause() {
	    if (this._isSliding) {
	      triggerTransitionEnd(this._element);
	    }

	    this._clearInterval();
	  }

	  cycle() {
	    this._clearInterval();
	    this._updateInterval();

	    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
	  }

	  _maybeEnableCycle() {
	    if (!this._config.ride) {
	      return
	    }

	    if (this._isSliding) {
	      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
	      return
	    }

	    this.cycle();
	  }

	  to(index) {
	    const items = this._getItems();
	    if (index > items.length - 1 || index < 0) {
	      return
	    }

	    if (this._isSliding) {
	      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
	      return
	    }

	    const activeIndex = this._getItemIndex(this._getActive());
	    if (activeIndex === index) {
	      return
	    }

	    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

	    this._slide(order, items[index]);
	  }

	  dispose() {
	    if (this._swipeHelper) {
	      this._swipeHelper.dispose();
	    }

	    super.dispose();
	  }

	  // Private
	  _configAfterMerge(config) {
	    config.defaultInterval = config.interval;
	    return config
	  }

	  _addEventListeners() {
	    if (this._config.keyboard) {
	      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
	    }

	    if (this._config.pause === 'hover') {
	      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
	      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
	    }

	    if (this._config.touch && Swipe.isSupported()) {
	      this._addTouchEventListeners();
	    }
	  }

	  _addTouchEventListeners() {
	    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
	      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
	    }

	    const endCallBack = () => {
	      if (this._config.pause !== 'hover') {
	        return
	      }

	      // If it's a touch-enabled device, mouseenter/leave are fired as
	      // part of the mouse compatibility events on first tap - the carousel
	      // would stop cycling until user tapped out of it;
	      // here, we listen for touchend, explicitly pause the carousel
	      // (as if it's the second time we tap on it, mouseenter compat event
	      // is NOT fired) and after a timeout (to allow for mouse compatibility
	      // events to fire) we explicitly restart cycling

	      this.pause();
	      if (this.touchTimeout) {
	        clearTimeout(this.touchTimeout);
	      }

	      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
	    };

	    const swipeConfig = {
	      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
	      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
	      endCallback: endCallBack
	    };

	    this._swipeHelper = new Swipe(this._element, swipeConfig);
	  }

	  _keydown(event) {
	    if (/input|textarea/i.test(event.target.tagName)) {
	      return
	    }

	    const direction = KEY_TO_DIRECTION[event.key];
	    if (direction) {
	      event.preventDefault();
	      this._slide(this._directionToOrder(direction));
	    }
	  }

	  _getItemIndex(element) {
	    return this._getItems().indexOf(element)
	  }

	  _setActiveIndicatorElement(index) {
	    if (!this._indicatorsElement) {
	      return
	    }

	    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);

	    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
	    activeIndicator.removeAttribute('aria-current');

	    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

	    if (newActiveIndicator) {
	      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
	      newActiveIndicator.setAttribute('aria-current', 'true');
	    }
	  }

	  _updateInterval() {
	    const element = this._activeElement || this._getActive();

	    if (!element) {
	      return
	    }

	    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

	    this._config.interval = elementInterval || this._config.defaultInterval;
	  }

	  _slide(order, element = null) {
	    if (this._isSliding) {
	      return
	    }

	    const activeElement = this._getActive();
	    const isNext = order === ORDER_NEXT;
	    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

	    if (nextElement === activeElement) {
	      return
	    }

	    const nextElementIndex = this._getItemIndex(nextElement);

	    const triggerEvent = eventName => {
	      return EventHandler.trigger(this._element, eventName, {
	        relatedTarget: nextElement,
	        direction: this._orderToDirection(order),
	        from: this._getItemIndex(activeElement),
	        to: nextElementIndex
	      })
	    };

	    const slideEvent = triggerEvent(EVENT_SLIDE);

	    if (slideEvent.defaultPrevented) {
	      return
	    }

	    if (!activeElement || !nextElement) {
	      // Some weirdness is happening, so we bail
	      // TODO: change tests that use empty divs to avoid this check
	      return
	    }

	    const isCycling = Boolean(this._interval);
	    this.pause();

	    this._isSliding = true;

	    this._setActiveIndicatorElement(nextElementIndex);
	    this._activeElement = nextElement;

	    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
	    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

	    nextElement.classList.add(orderClassName);

	    reflow(nextElement);

	    activeElement.classList.add(directionalClassName);
	    nextElement.classList.add(directionalClassName);

	    const completeCallBack = () => {
	      nextElement.classList.remove(directionalClassName, orderClassName);
	      nextElement.classList.add(CLASS_NAME_ACTIVE$2);

	      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);

	      this._isSliding = false;

	      triggerEvent(EVENT_SLID);
	    };

	    this._queueCallback(completeCallBack, activeElement, this._isAnimated());

	    if (isCycling) {
	      this.cycle();
	    }
	  }

	  _isAnimated() {
	    return this._element.classList.contains(CLASS_NAME_SLIDE)
	  }

	  _getActive() {
	    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element)
	  }

	  _getItems() {
	    return SelectorEngine.find(SELECTOR_ITEM, this._element)
	  }

	  _clearInterval() {
	    if (this._interval) {
	      clearInterval(this._interval);
	      this._interval = null;
	    }
	  }

	  _directionToOrder(direction) {
	    if (isRTL()) {
	      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT
	    }

	    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV
	  }

	  _orderToDirection(order) {
	    if (isRTL()) {
	      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT
	    }

	    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Carousel.getOrCreateInstance(this, config);

	      if (typeof config === 'number') {
	        data.to(config);
	        return
	      }

	      if (typeof config === 'string') {
	        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	          throw new TypeError(`No method named "${config}"`)
	        }

	        data[config]();
	      }
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);

	  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
	    return
	  }

	  event.preventDefault();

	  const carousel = Carousel.getOrCreateInstance(target);
	  const slideIndex = this.getAttribute('data-bs-slide-to');

	  if (slideIndex) {
	    carousel.to(slideIndex);
	    carousel._maybeEnableCycle();
	    return
	  }

	  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
	    carousel.next();
	    carousel._maybeEnableCycle();
	    return
	  }

	  carousel.prev();
	  carousel._maybeEnableCycle();
	});

	EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
	  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

	  for (const carousel of carousels) {
	    Carousel.getOrCreateInstance(carousel);
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Carousel);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$b = 'collapse';
	const DATA_KEY$7 = 'bs.collapse';
	const EVENT_KEY$7 = `.${DATA_KEY$7}`;
	const DATA_API_KEY$4 = '.data-api';

	const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
	const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
	const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
	const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
	const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;

	const CLASS_NAME_SHOW$7 = 'show';
	const CLASS_NAME_COLLAPSE = 'collapse';
	const CLASS_NAME_COLLAPSING = 'collapsing';
	const CLASS_NAME_COLLAPSED = 'collapsed';
	const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
	const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';

	const WIDTH = 'width';
	const HEIGHT = 'height';

	const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
	const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

	const Default$a = {
	  parent: null,
	  toggle: true
	};

	const DefaultType$a = {
	  parent: '(null|element)',
	  toggle: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Collapse extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._isTransitioning = false;
	    this._triggerArray = [];

	    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

	    for (const elem of toggleList) {
	      const selector = SelectorEngine.getSelectorFromElement(elem);
	      const filterElement = SelectorEngine.find(selector)
	        .filter(foundElement => foundElement === this._element);

	      if (selector !== null && filterElement.length) {
	        this._triggerArray.push(elem);
	      }
	    }

	    this._initializeChildren();

	    if (!this._config.parent) {
	      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
	    }

	    if (this._config.toggle) {
	      this.toggle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$a
	  }

	  static get DefaultType() {
	    return DefaultType$a
	  }

	  static get NAME() {
	    return NAME$b
	  }

	  // Public
	  toggle() {
	    if (this._isShown()) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }

	  show() {
	    if (this._isTransitioning || this._isShown()) {
	      return
	    }

	    let activeChildren = [];

	    // find active children
	    if (this._config.parent) {
	      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES)
	        .filter(element => element !== this._element)
	        .map(element => Collapse.getOrCreateInstance(element, { toggle: false }));
	    }

	    if (activeChildren.length && activeChildren[0]._isTransitioning) {
	      return
	    }

	    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
	    if (startEvent.defaultPrevented) {
	      return
	    }

	    for (const activeInstance of activeChildren) {
	      activeInstance.hide();
	    }

	    const dimension = this._getDimension();

	    this._element.classList.remove(CLASS_NAME_COLLAPSE);
	    this._element.classList.add(CLASS_NAME_COLLAPSING);

	    this._element.style[dimension] = 0;

	    this._addAriaAndCollapsedClass(this._triggerArray, true);
	    this._isTransitioning = true;

	    const complete = () => {
	      this._isTransitioning = false;

	      this._element.classList.remove(CLASS_NAME_COLLAPSING);
	      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

	      this._element.style[dimension] = '';

	      EventHandler.trigger(this._element, EVENT_SHOWN$6);
	    };

	    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	    const scrollSize = `scroll${capitalizedDimension}`;

	    this._queueCallback(complete, this._element, true);
	    this._element.style[dimension] = `${this._element[scrollSize]}px`;
	  }

	  hide() {
	    if (this._isTransitioning || !this._isShown()) {
	      return
	    }

	    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
	    if (startEvent.defaultPrevented) {
	      return
	    }

	    const dimension = this._getDimension();

	    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;

	    reflow(this._element);

	    this._element.classList.add(CLASS_NAME_COLLAPSING);
	    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

	    for (const trigger of this._triggerArray) {
	      const element = SelectorEngine.getElementFromSelector(trigger);

	      if (element && !this._isShown(element)) {
	        this._addAriaAndCollapsedClass([trigger], false);
	      }
	    }

	    this._isTransitioning = true;

	    const complete = () => {
	      this._isTransitioning = false;
	      this._element.classList.remove(CLASS_NAME_COLLAPSING);
	      this._element.classList.add(CLASS_NAME_COLLAPSE);
	      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
	    };

	    this._element.style[dimension] = '';

	    this._queueCallback(complete, this._element, true);
	  }

	  _isShown(element = this._element) {
	    return element.classList.contains(CLASS_NAME_SHOW$7)
	  }

	  // Private
	  _configAfterMerge(config) {
	    config.toggle = Boolean(config.toggle); // Coerce string values
	    config.parent = getElement(config.parent);
	    return config
	  }

	  _getDimension() {
	    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT
	  }

	  _initializeChildren() {
	    if (!this._config.parent) {
	      return
	    }

	    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

	    for (const element of children) {
	      const selected = SelectorEngine.getElementFromSelector(element);

	      if (selected) {
	        this._addAriaAndCollapsedClass([element], this._isShown(selected));
	      }
	    }
	  }

	  _getFirstLevelChildren(selector) {
	    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
	    // remove children if greater depth
	    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element))
	  }

	  _addAriaAndCollapsedClass(triggerArray, isOpen) {
	    if (!triggerArray.length) {
	      return
	    }

	    for (const element of triggerArray) {
	      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
	      element.setAttribute('aria-expanded', isOpen);
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    const _config = {};
	    if (typeof config === 'string' && /show|hide/.test(config)) {
	      _config.toggle = false;
	    }

	    return this.each(function () {
	      const data = Collapse.getOrCreateInstance(this, _config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`)
	        }

	        data[config]();
	      }
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
	  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	  if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
	    event.preventDefault();
	  }

	  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
	    Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Collapse);

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }

	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }

	  return node;
	}

	function isElement(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}

	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}

	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }

	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]


	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];

	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}

	function effect$2(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;

	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }

	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }

	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect$2,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	var max = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getUAString() {
	  var uaData = navigator.userAgentData;

	  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
	    return uaData.brands.map(function (item) {
	      return item.brand + "/" + item.version;
	    }).join(' ');
	  }

	  return navigator.userAgent;
	}

	function isLayoutViewport() {
	  return !/^((?!chrome|android).)*safari/i.test(getUAString());
	}

	function getBoundingClientRect(element, includeScale, isFixedStrategy) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }

	  if (isFixedStrategy === void 0) {
	    isFixedStrategy = false;
	  }

	  var clientRect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;

	  if (includeScale && isHTMLElement(element)) {
	    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
	    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
	  }

	  var _ref = isElement(element) ? getWindow(element) : window,
	      visualViewport = _ref.visualViewport;

	  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
	  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
	  var width = clientRect.width / scaleX;
	  var height = clientRect.height / scaleY;
	  return {
	    width: width,
	    height: height,
	    top: y,
	    right: x + width,
	    bottom: y + height,
	    left: x,
	    x: x,
	    y: y
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;

	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }

	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }

	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	      var next = child;

	      do {
	        if (next && parent.isSameNode(next)) {
	          return true;
	        } // $FlowFixMe[prop-missing]: need a better way to handle this...


	        next = next.parentNode || next.host;
	      } while (next);
	    } // Give up, the result is false


	  return false;
	}

	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }

	  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || ( // DOM Element detected
	    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback

	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle$1(element).position === 'fixed') {
	    return null;
	  }

	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block


	function getContainingBlock(element) {
	  var isFirefox = /firefox/i.test(getUAString());
	  var isIE = /Trident/i.test(getUAString());

	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle$1(element);

	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }

	  var currentNode = getParentNode(element);

	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }

	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.


	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
	    return window;
	  }

	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max$1) {
	  return max(min$1, min(value, max$1));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};

	function arrow(_ref) {
	  var _state$modifiersData$;

	  var state = _ref.state,
	      name = _ref.name,
	      options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';

	  if (!arrowElement || !popperOffsets) {
	    return;
	  }

	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}

	function effect$1(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options;
	  var _options$element = options.element,
	      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

	  if (arrowElement == null) {
	    return;
	  } // CSS selector


	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);

	    if (!arrowElement) {
	      return;
	    }
	  }

	  if (!contains(state.elements.popper, arrowElement)) {
	    return;
	  }

	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules


	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref, win) {
	  var x = _ref.x,
	      y = _ref.y;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}

	function mapToStyles(_ref2) {
	  var _Object$assign2;

	  var popper = _ref2.popper,
	      popperRect = _ref2.popperRect,
	      placement = _ref2.placement,
	      variation = _ref2.variation,
	      offsets = _ref2.offsets,
	      position = _ref2.position,
	      gpuAcceleration = _ref2.gpuAcceleration,
	      adaptive = _ref2.adaptive,
	      roundOffsets = _ref2.roundOffsets,
	      isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	      x = _offsets$x === void 0 ? 0 : _offsets$x,
	      _offsets$y = offsets.y,
	      y = _offsets$y === void 0 ? 0 : _offsets$y;

	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;

	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';

	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);

	      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


	    offsetParent = offsetParent;

	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }

	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }

	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);

	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }, getWindow(popper)) : {
	    x: x,
	    y: y
	  };

	  x = _ref4.x;
	  y = _ref4.y;

	  if (gpuAcceleration) {
	    var _Object$assign;

	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }

	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}

	function computeStyles(_ref5) {
	  var state = _ref5.state,
	      options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	      _options$adaptive = options.adaptive,
	      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	      _options$roundOffsets = options.roundOffsets,
	      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };

	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }

	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }

	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};

	function effect(_ref) {
	  var state = _ref.state,
	      instance = _ref.instance,
	      options = _ref.options;
	  var _options$scroll = options.scroll,
	      scroll = _options$scroll === void 0 ? true : _options$scroll,
	      _options$resize = options.resize,
	      resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }

	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }

	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect,
	  data: {}
	};

	var hash$1 = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	var hash = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element, strategy) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0;

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height;
	    var layoutViewport = isLayoutViewport();

	    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }

	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;

	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;

	  if (getComputedStyle$1(body || html).direction === 'rtl') {
	    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }

	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle$1(element),
	      overflow = _getComputedStyle.overflow,
	      overflowX = _getComputedStyle.overflowX,
	      overflowY = _getComputedStyle.overflowY;

	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }

	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }

	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;

	  if (list === void 0) {
	    list = [];
	  }

	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element, strategy) {
	  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}

	function getClientRectFromMixedType(element, clippingParent, strategy) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`


	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	  if (!isElement(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


	  return clippingParents.filter(function (clippingParent) {
	    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents


	function getClippingRect(element, boundary, rootBoundary, strategy) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
	    accRect.top = max(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	      element = _ref.element,
	      placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;

	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;

	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;

	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;

	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;

	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }

	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';

	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;

	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }

	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$placement = _options.placement,
	      placement = _options$placement === void 0 ? state.placement : _options$placement,
	      _options$strategy = _options.strategy,
	      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
	      _options$boundary = _options.boundary,
	      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	      _options$rootBoundary = _options.rootBoundary,
	      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	      _options$elementConte = _options.elementContext,
	      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	      _options$altBoundary = _options.altBoundary,
	      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	      _options$padding = _options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    strategy: 'absolute',
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }

	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      placement = _options.placement,
	      boundary = _options.boundary,
	      rootBoundary = _options.rootBoundary,
	      padding = _options.padding,
	      flipVariations = _options.flipVariations,
	      _options$allowedAutoP = _options.allowedAutoPlacements,
	      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });

	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }

	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}

	function flip(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;

	  if (state.modifiersData[name]._skip) {
	    return;
	  }

	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	      specifiedFallbackPlacements = options.fallbackPlacements,
	      padding = options.padding,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      _options$flipVariatio = options.flipVariations,
	      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	      allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];

	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];

	    var _basePlacement = getBasePlacement(placement);

	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }

	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];

	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }

	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }

	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }

	    checksMap.set(placement, checks);
	  }

	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;

	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);

	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });

	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };

	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);

	      if (_ret === "break") break;
	    }
	  }

	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules


	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }

	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}

	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}

	function hide(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	    placement: placement
	  })) : offset,
	      skidding = _ref[0],
	      distance = _ref[1];

	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}

	function offset(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$offset = options.offset,
	      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	      x = _data$state$placement.x,
	      y = _data$state$placement.y;

	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    strategy: 'absolute',
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      padding = options.padding,
	      _options$tether = options.tether,
	      tether = _options$tether === void 0 ? true : _options$tether,
	      _options$tetherOffset = options.tetherOffset,
	      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };

	  if (!popperOffsets) {
	    return;
	  }

	  if (checkMainAxis) {
	    var _offsetModifierState$;

	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max$1 = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }

	  if (checkAltAxis) {
	    var _offsetModifierState$2;

	    var _mainSide = mainAxis === 'x' ? top : left;

	    var _altSide = mainAxis === 'x' ? bottom : right;

	    var _offset = popperOffsets[altAxis];

	    var _len = altAxis === 'y' ? 'height' : 'width';

	    var _min = _offset + overflow[_mainSide];

	    var _max = _offset - overflow[_altSide];

	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.


	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }

	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };

	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }

	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }

	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);

	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }

	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}

	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }

	    return pending;
	  };
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};

	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}

	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }

	  var _generatorOptions = generatorOptions,
	      _generatorOptions$def = _generatorOptions.defaultModifiers,
	      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	      _generatorOptions$def2 = _generatorOptions.defaultOptions,
	      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }

	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        });
	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }

	        var _state$elements = state.elements,
	            reference = _state$elements.reference,
	            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {
	          return;
	        } // Store the reference and popper rects to be read by modifiers


	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });

	        for (var index = 0; index < state.orderedModifiers.length; index++) {
	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }

	          var _state$orderedModifie = state.orderedModifiers[index],
	              fn = _state$orderedModifie.fn,
	              _state$orderedModifie2 = _state$orderedModifie.options,
	              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	              name = _state$orderedModifie.name;

	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };

	    if (!areValidElements(reference, popper)) {
	      return instance;
	    }

	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref) {
	        var name = _ref.name,
	            _ref$options = _ref.options,
	            options = _ref$options === void 0 ? {} : _ref$options,
	            effect = _ref.effect;

	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });

	          var noopFn = function noopFn() {};

	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }

	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }

	    return instance;
	  };
	}
	var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
	var createPopper$1 = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers$1
	}); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	var Popper = /*#__PURE__*/Object.freeze({
		__proto__: null,
		afterMain: afterMain,
		afterRead: afterRead,
		afterWrite: afterWrite,
		applyStyles: applyStyles$1,
		arrow: arrow$1,
		auto: auto,
		basePlacements: basePlacements,
		beforeMain: beforeMain,
		beforeRead: beforeRead,
		beforeWrite: beforeWrite,
		bottom: bottom,
		clippingParents: clippingParents,
		computeStyles: computeStyles$1,
		createPopper: createPopper,
		createPopperBase: createPopper$2,
		createPopperLite: createPopper$1,
		detectOverflow: detectOverflow,
		end: end,
		eventListeners: eventListeners,
		flip: flip$1,
		hide: hide$1,
		left: left,
		main: main,
		modifierPhases: modifierPhases,
		offset: offset$1,
		placements: placements,
		popper: popper,
		popperGenerator: popperGenerator,
		popperOffsets: popperOffsets$1,
		preventOverflow: preventOverflow$1,
		read: read,
		reference: reference,
		right: right,
		start: start,
		top: top,
		variationPlacements: variationPlacements,
		viewport: viewport,
		write: write
	});

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$a = 'dropdown';
	const DATA_KEY$6 = 'bs.dropdown';
	const EVENT_KEY$6 = `.${DATA_KEY$6}`;
	const DATA_API_KEY$3 = '.data-api';

	const ESCAPE_KEY$2 = 'Escape';
	const TAB_KEY$1 = 'Tab';
	const ARROW_UP_KEY$1 = 'ArrowUp';
	const ARROW_DOWN_KEY$1 = 'ArrowDown';
	const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

	const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
	const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
	const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
	const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
	const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;

	const CLASS_NAME_SHOW$6 = 'show';
	const CLASS_NAME_DROPUP = 'dropup';
	const CLASS_NAME_DROPEND = 'dropend';
	const CLASS_NAME_DROPSTART = 'dropstart';
	const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
	const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';

	const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
	const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
	const SELECTOR_MENU = '.dropdown-menu';
	const SELECTOR_NAVBAR = '.navbar';
	const SELECTOR_NAVBAR_NAV = '.navbar-nav';
	const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';

	const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
	const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
	const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
	const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
	const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
	const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
	const PLACEMENT_TOPCENTER = 'top';
	const PLACEMENT_BOTTOMCENTER = 'bottom';

	const Default$9 = {
	  autoClose: true,
	  boundary: 'clippingParents',
	  display: 'dynamic',
	  offset: [0, 2],
	  popperConfig: null,
	  reference: 'toggle'
	};

	const DefaultType$9 = {
	  autoClose: '(boolean|string)',
	  boundary: '(string|element)',
	  display: 'string',
	  offset: '(array|string|function)',
	  popperConfig: '(null|object|function)',
	  reference: '(string|element|object)'
	};

	/**
	 * Class definition
	 */

	class Dropdown extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._popper = null;
	    this._parent = this._element.parentNode; // dropdown wrapper
	    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
	    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] ||
	      SelectorEngine.prev(this._element, SELECTOR_MENU)[0] ||
	      SelectorEngine.findOne(SELECTOR_MENU, this._parent);
	    this._inNavbar = this._detectNavbar();
	  }

	  // Getters
	  static get Default() {
	    return Default$9
	  }

	  static get DefaultType() {
	    return DefaultType$9
	  }

	  static get NAME() {
	    return NAME$a
	  }

	  // Public
	  toggle() {
	    return this._isShown() ? this.hide() : this.show()
	  }

	  show() {
	    if (isDisabled(this._element) || this._isShown()) {
	      return
	    }

	    const relatedTarget = {
	      relatedTarget: this._element
	    };

	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

	    if (showEvent.defaultPrevented) {
	      return
	    }

	    this._createPopper();

	    // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.on(element, 'mouseover', noop);
	      }
	    }

	    this._element.focus();
	    this._element.setAttribute('aria-expanded', true);

	    this._menu.classList.add(CLASS_NAME_SHOW$6);
	    this._element.classList.add(CLASS_NAME_SHOW$6);
	    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
	  }

	  hide() {
	    if (isDisabled(this._element) || !this._isShown()) {
	      return
	    }

	    const relatedTarget = {
	      relatedTarget: this._element
	    };

	    this._completeHide(relatedTarget);
	  }

	  dispose() {
	    if (this._popper) {
	      this._popper.destroy();
	    }

	    super.dispose();
	  }

	  update() {
	    this._inNavbar = this._detectNavbar();
	    if (this._popper) {
	      this._popper.update();
	    }
	  }

	  // Private
	  _completeHide(relatedTarget) {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.off(element, 'mouseover', noop);
	      }
	    }

	    if (this._popper) {
	      this._popper.destroy();
	    }

	    this._menu.classList.remove(CLASS_NAME_SHOW$6);
	    this._element.classList.remove(CLASS_NAME_SHOW$6);
	    this._element.setAttribute('aria-expanded', 'false');
	    Manipulator.removeDataAttribute(this._menu, 'popper');
	    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
	  }

	  _getConfig(config) {
	    config = super._getConfig(config);

	    if (typeof config.reference === 'object' && !isElement$1(config.reference) &&
	      typeof config.reference.getBoundingClientRect !== 'function'
	    ) {
	      // Popper virtual elements require a getBoundingClientRect method
	      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
	    }

	    return config
	  }

	  _createPopper() {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)')
	    }

	    let referenceElement = this._element;

	    if (this._config.reference === 'parent') {
	      referenceElement = this._parent;
	    } else if (isElement$1(this._config.reference)) {
	      referenceElement = getElement(this._config.reference);
	    } else if (typeof this._config.reference === 'object') {
	      referenceElement = this._config.reference;
	    }

	    const popperConfig = this._getPopperConfig();
	    this._popper = createPopper(referenceElement, this._menu, popperConfig);
	  }

	  _isShown() {
	    return this._menu.classList.contains(CLASS_NAME_SHOW$6)
	  }

	  _getPlacement() {
	    const parentDropdown = this._parent;

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
	      return PLACEMENT_RIGHT
	    }

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
	      return PLACEMENT_LEFT
	    }

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
	      return PLACEMENT_TOPCENTER
	    }

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
	      return PLACEMENT_BOTTOMCENTER
	    }

	    // We need to trim the value because custom properties can also include spaces
	    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
	      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP
	    }

	    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM
	  }

	  _detectNavbar() {
	    return this._element.closest(SELECTOR_NAVBAR) !== null
	  }

	  _getOffset() {
	    const { offset } = this._config;

	    if (typeof offset === 'string') {
	      return offset.split(',').map(value => Number.parseInt(value, 10))
	    }

	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element)
	    }

	    return offset
	  }

	  _getPopperConfig() {
	    const defaultBsPopperConfig = {
	      placement: this._getPlacement(),
	      modifiers: [{
	        name: 'preventOverflow',
	        options: {
	          boundary: this._config.boundary
	        }
	      },
	      {
	        name: 'offset',
	        options: {
	          offset: this._getOffset()
	        }
	      }]
	    };

	    // Disable Popper if we have a static display or Dropdown is in Navbar
	    if (this._inNavbar || this._config.display === 'static') {
	      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
	      defaultBsPopperConfig.modifiers = [{
	        name: 'applyStyles',
	        enabled: false
	      }];
	    }

	    return {
	      ...defaultBsPopperConfig,
	      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
	    }
	  }

	  _selectMenuItem({ key, target }) {
	    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));

	    if (!items.length) {
	      return
	    }

	    // if target isn't included in items (e.g. when expanding the dropdown)
	    // allow cycling to get the last item in case key equals ARROW_UP_KEY
	    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Dropdown.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config]();
	    })
	  }

	  static clearMenus(event) {
	    if (event.button === RIGHT_MOUSE_BUTTON || (event.type === 'keyup' && event.key !== TAB_KEY$1)) {
	      return
	    }

	    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

	    for (const toggle of openToggles) {
	      const context = Dropdown.getInstance(toggle);
	      if (!context || context._config.autoClose === false) {
	        continue
	      }

	      const composedPath = event.composedPath();
	      const isMenuTarget = composedPath.includes(context._menu);
	      if (
	        composedPath.includes(context._element) ||
	        (context._config.autoClose === 'inside' && !isMenuTarget) ||
	        (context._config.autoClose === 'outside' && isMenuTarget)
	      ) {
	        continue
	      }

	      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
	      if (context._menu.contains(event.target) && ((event.type === 'keyup' && event.key === TAB_KEY$1) || /input|select|option|textarea|form/i.test(event.target.tagName))) {
	        continue
	      }

	      const relatedTarget = { relatedTarget: context._element };

	      if (event.type === 'click') {
	        relatedTarget.clickEvent = event;
	      }

	      context._completeHide(relatedTarget);
	    }
	  }

	  static dataApiKeydownHandler(event) {
	    // If not an UP | DOWN | ESCAPE key => not a dropdown command
	    // If input/textarea && if key is other than ESCAPE => not a dropdown command

	    const isInput = /input|textarea/i.test(event.target.tagName);
	    const isEscapeEvent = event.key === ESCAPE_KEY$2;
	    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

	    if (!isUpOrDownEvent && !isEscapeEvent) {
	      return
	    }

	    if (isInput && !isEscapeEvent) {
	      return
	    }

	    event.preventDefault();

	    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
	    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ?
	      this :
	      (SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] ||
	        SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] ||
	        SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode));

	    const instance = Dropdown.getOrCreateInstance(getToggleButton);

	    if (isUpOrDownEvent) {
	      event.stopPropagation();
	      instance.show();
	      instance._selectMenuItem(event);
	      return
	    }

	    if (instance._isShown()) { // else is escape and we check if it is shown
	      event.stopPropagation();
	      instance.hide();
	      getToggleButton.focus();
	    }
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
	  event.preventDefault();
	  Dropdown.getOrCreateInstance(this).toggle();
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Dropdown);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/backdrop.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$9 = 'backdrop';
	const CLASS_NAME_FADE$4 = 'fade';
	const CLASS_NAME_SHOW$5 = 'show';
	const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;

	const Default$8 = {
	  className: 'modal-backdrop',
	  clickCallback: null,
	  isAnimated: false,
	  isVisible: true, // if false, we use the backdrop helper without adding any element to the dom
	  rootElement: 'body' // give the choice to place backdrop under different elements
	};

	const DefaultType$8 = {
	  className: 'string',
	  clickCallback: '(function|null)',
	  isAnimated: 'boolean',
	  isVisible: 'boolean',
	  rootElement: '(element|string)'
	};

	/**
	 * Class definition
	 */

	class Backdrop extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	    this._isAppended = false;
	    this._element = null;
	  }

	  // Getters
	  static get Default() {
	    return Default$8
	  }

	  static get DefaultType() {
	    return DefaultType$8
	  }

	  static get NAME() {
	    return NAME$9
	  }

	  // Public
	  show(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return
	    }

	    this._append();

	    const element = this._getElement();
	    if (this._config.isAnimated) {
	      reflow(element);
	    }

	    element.classList.add(CLASS_NAME_SHOW$5);

	    this._emulateAnimation(() => {
	      execute(callback);
	    });
	  }

	  hide(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return
	    }

	    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

	    this._emulateAnimation(() => {
	      this.dispose();
	      execute(callback);
	    });
	  }

	  dispose() {
	    if (!this._isAppended) {
	      return
	    }

	    EventHandler.off(this._element, EVENT_MOUSEDOWN);

	    this._element.remove();
	    this._isAppended = false;
	  }

	  // Private
	  _getElement() {
	    if (!this._element) {
	      const backdrop = document.createElement('div');
	      backdrop.className = this._config.className;
	      if (this._config.isAnimated) {
	        backdrop.classList.add(CLASS_NAME_FADE$4);
	      }

	      this._element = backdrop;
	    }

	    return this._element
	  }

	  _configAfterMerge(config) {
	    // use getElement() with the default "body" to get a fresh Element on each instantiation
	    config.rootElement = getElement(config.rootElement);
	    return config
	  }

	  _append() {
	    if (this._isAppended) {
	      return
	    }

	    const element = this._getElement();
	    this._config.rootElement.append(element);

	    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
	      execute(this._config.clickCallback);
	    });

	    this._isAppended = true;
	  }

	  _emulateAnimation(callback) {
	    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/component-functions.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	const enableDismissTrigger = (component, method = 'hide') => {
	  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
	  const name = component.NAME;

	  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
	    if (['A', 'AREA'].includes(this.tagName)) {
	      event.preventDefault();
	    }

	    if (isDisabled(this)) {
	      return
	    }

	    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
	    const instance = component.getOrCreateInstance(target);

	    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
	    instance[method]();
	  });
	};

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/focustrap.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$8 = 'focustrap';
	const DATA_KEY$5 = 'bs.focustrap';
	const EVENT_KEY$5 = `.${DATA_KEY$5}`;
	const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
	const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;

	const TAB_KEY = 'Tab';
	const TAB_NAV_FORWARD = 'forward';
	const TAB_NAV_BACKWARD = 'backward';

	const Default$7 = {
	  autofocus: true,
	  trapElement: null // The element to trap focus inside of
	};

	const DefaultType$7 = {
	  autofocus: 'boolean',
	  trapElement: 'element'
	};

	/**
	 * Class definition
	 */

	class FocusTrap extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	    this._isActive = false;
	    this._lastTabNavDirection = null;
	  }

	  // Getters
	  static get Default() {
	    return Default$7
	  }

	  static get DefaultType() {
	    return DefaultType$7
	  }

	  static get NAME() {
	    return NAME$8
	  }

	  // Public
	  activate() {
	    if (this._isActive) {
	      return
	    }

	    if (this._config.autofocus) {
	      this._config.trapElement.focus();
	    }

	    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
	    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
	    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));

	    this._isActive = true;
	  }

	  deactivate() {
	    if (!this._isActive) {
	      return
	    }

	    this._isActive = false;
	    EventHandler.off(document, EVENT_KEY$5);
	  }

	  // Private
	  _handleFocusin(event) {
	    const { trapElement } = this._config;

	    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
	      return
	    }

	    const elements = SelectorEngine.focusableChildren(trapElement);

	    if (elements.length === 0) {
	      trapElement.focus();
	    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
	      elements[elements.length - 1].focus();
	    } else {
	      elements[0].focus();
	    }
	  }

	  _handleKeydown(event) {
	    if (event.key !== TAB_KEY) {
	      return
	    }

	    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/scrollBar.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
	const SELECTOR_STICKY_CONTENT = '.sticky-top';
	const PROPERTY_PADDING = 'padding-right';
	const PROPERTY_MARGIN = 'margin-right';

	/**
	 * Class definition
	 */

	class ScrollBarHelper {
	  constructor() {
	    this._element = document.body;
	  }

	  // Public
	  getWidth() {
	    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
	    const documentWidth = document.documentElement.clientWidth;
	    return Math.abs(window.innerWidth - documentWidth)
	  }

	  hide() {
	    const width = this.getWidth();
	    this._disableOverFlow();
	    // give padding to element to balance the hidden scrollbar width
	    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
	    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
	    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
	    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
	  }

	  reset() {
	    this._resetElementAttributes(this._element, 'overflow');
	    this._resetElementAttributes(this._element, PROPERTY_PADDING);
	    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
	    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
	  }

	  isOverflowing() {
	    return this.getWidth() > 0
	  }

	  // Private
	  _disableOverFlow() {
	    this._saveInitialAttribute(this._element, 'overflow');
	    this._element.style.overflow = 'hidden';
	  }

	  _setElementAttributes(selector, styleProperty, callback) {
	    const scrollbarWidth = this.getWidth();
	    const manipulationCallBack = element => {
	      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
	        return
	      }

	      this._saveInitialAttribute(element, styleProperty);
	      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
	      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
	    };

	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }

	  _saveInitialAttribute(element, styleProperty) {
	    const actualValue = element.style.getPropertyValue(styleProperty);
	    if (actualValue) {
	      Manipulator.setDataAttribute(element, styleProperty, actualValue);
	    }
	  }

	  _resetElementAttributes(selector, styleProperty) {
	    const manipulationCallBack = element => {
	      const value = Manipulator.getDataAttribute(element, styleProperty);
	      // We only want to remove the property if the value is `null`; the value can also be zero
	      if (value === null) {
	        element.style.removeProperty(styleProperty);
	        return
	      }

	      Manipulator.removeDataAttribute(element, styleProperty);
	      element.style.setProperty(styleProperty, value);
	    };

	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }

	  _applyManipulationCallback(selector, callBack) {
	    if (isElement$1(selector)) {
	      callBack(selector);
	      return
	    }

	    for (const sel of SelectorEngine.find(selector, this._element)) {
	      callBack(sel);
	    }
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$7 = 'modal';
	const DATA_KEY$4 = 'bs.modal';
	const EVENT_KEY$4 = `.${DATA_KEY$4}`;
	const DATA_API_KEY$2 = '.data-api';
	const ESCAPE_KEY$1 = 'Escape';

	const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
	const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
	const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
	const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
	const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
	const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
	const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
	const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
	const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
	const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;

	const CLASS_NAME_OPEN = 'modal-open';
	const CLASS_NAME_FADE$3 = 'fade';
	const CLASS_NAME_SHOW$4 = 'show';
	const CLASS_NAME_STATIC = 'modal-static';

	const OPEN_SELECTOR$1 = '.modal.show';
	const SELECTOR_DIALOG = '.modal-dialog';
	const SELECTOR_MODAL_BODY = '.modal-body';
	const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';

	const Default$6 = {
	  backdrop: true,
	  focus: true,
	  keyboard: true
	};

	const DefaultType$6 = {
	  backdrop: '(boolean|string)',
	  focus: 'boolean',
	  keyboard: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Modal extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();
	    this._isShown = false;
	    this._isTransitioning = false;
	    this._scrollBar = new ScrollBarHelper();

	    this._addEventListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default$6
	  }

	  static get DefaultType() {
	    return DefaultType$6
	  }

	  static get NAME() {
	    return NAME$7
	  }

	  // Public
	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget)
	  }

	  show(relatedTarget) {
	    if (this._isShown || this._isTransitioning) {
	      return
	    }

	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
	      relatedTarget
	    });

	    if (showEvent.defaultPrevented) {
	      return
	    }

	    this._isShown = true;
	    this._isTransitioning = true;

	    this._scrollBar.hide();

	    document.body.classList.add(CLASS_NAME_OPEN);

	    this._adjustDialog();

	    this._backdrop.show(() => this._showElement(relatedTarget));
	  }

	  hide() {
	    if (!this._isShown || this._isTransitioning) {
	      return
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    this._isShown = false;
	    this._isTransitioning = true;
	    this._focustrap.deactivate();

	    this._element.classList.remove(CLASS_NAME_SHOW$4);

	    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
	  }

	  dispose() {
	    EventHandler.off(window, EVENT_KEY$4);
	    EventHandler.off(this._dialog, EVENT_KEY$4);

	    this._backdrop.dispose();
	    this._focustrap.deactivate();

	    super.dispose();
	  }

	  handleUpdate() {
	    this._adjustDialog();
	  }

	  // Private
	  _initializeBackDrop() {
	    return new Backdrop({
	      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,
	      isAnimated: this._isAnimated()
	    })
	  }

	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    })
	  }

	  _showElement(relatedTarget) {
	    // try to append dynamic modal
	    if (!document.body.contains(this._element)) {
	      document.body.append(this._element);
	    }

	    this._element.style.display = 'block';
	    this._element.removeAttribute('aria-hidden');
	    this._element.setAttribute('aria-modal', true);
	    this._element.setAttribute('role', 'dialog');
	    this._element.scrollTop = 0;

	    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
	    if (modalBody) {
	      modalBody.scrollTop = 0;
	    }

	    reflow(this._element);

	    this._element.classList.add(CLASS_NAME_SHOW$4);

	    const transitionComplete = () => {
	      if (this._config.focus) {
	        this._focustrap.activate();
	      }

	      this._isTransitioning = false;
	      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
	        relatedTarget
	      });
	    };

	    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
	  }

	  _addEventListeners() {
	    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
	      if (event.key !== ESCAPE_KEY$1) {
	        return
	      }

	      if (this._config.keyboard) {
	        this.hide();
	        return
	      }

	      this._triggerBackdropTransition();
	    });

	    EventHandler.on(window, EVENT_RESIZE$1, () => {
	      if (this._isShown && !this._isTransitioning) {
	        this._adjustDialog();
	      }
	    });

	    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
	      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
	      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
	        if (this._element !== event.target || this._element !== event2.target) {
	          return
	        }

	        if (this._config.backdrop === 'static') {
	          this._triggerBackdropTransition();
	          return
	        }

	        if (this._config.backdrop) {
	          this.hide();
	        }
	      });
	    });
	  }

	  _hideModal() {
	    this._element.style.display = 'none';
	    this._element.setAttribute('aria-hidden', true);
	    this._element.removeAttribute('aria-modal');
	    this._element.removeAttribute('role');
	    this._isTransitioning = false;

	    this._backdrop.hide(() => {
	      document.body.classList.remove(CLASS_NAME_OPEN);
	      this._resetAdjustments();
	      this._scrollBar.reset();
	      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
	    });
	  }

	  _isAnimated() {
	    return this._element.classList.contains(CLASS_NAME_FADE$3)
	  }

	  _triggerBackdropTransition() {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
	    const initialOverflowY = this._element.style.overflowY;
	    // return if the following background transition hasn't yet completed
	    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
	      return
	    }

	    if (!isModalOverflowing) {
	      this._element.style.overflowY = 'hidden';
	    }

	    this._element.classList.add(CLASS_NAME_STATIC);
	    this._queueCallback(() => {
	      this._element.classList.remove(CLASS_NAME_STATIC);
	      this._queueCallback(() => {
	        this._element.style.overflowY = initialOverflowY;
	      }, this._dialog);
	    }, this._dialog);

	    this._element.focus();
	  }

	  /**
	   * The following methods are used to handle overflowing modals
	   */

	  _adjustDialog() {
	    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
	    const scrollbarWidth = this._scrollBar.getWidth();
	    const isBodyOverflowing = scrollbarWidth > 0;

	    if (isBodyOverflowing && !isModalOverflowing) {
	      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
	      this._element.style[property] = `${scrollbarWidth}px`;
	    }

	    if (!isBodyOverflowing && isModalOverflowing) {
	      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
	      this._element.style[property] = `${scrollbarWidth}px`;
	    }
	  }

	  _resetAdjustments() {
	    this._element.style.paddingLeft = '';
	    this._element.style.paddingRight = '';
	  }

	  // Static
	  static jQueryInterface(config, relatedTarget) {
	    return this.each(function () {
	      const data = Modal.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config](relatedTarget);
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);

	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
	    if (showEvent.defaultPrevented) {
	      // only register focus restorer if modal will actually get shown
	      return
	    }

	    EventHandler.one(target, EVENT_HIDDEN$4, () => {
	      if (isVisible(this)) {
	        this.focus();
	      }
	    });
	  });

	  // avoid conflict when clicking modal toggler while another one is open
	  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
	  if (alreadyOpen) {
	    Modal.getInstance(alreadyOpen).hide();
	  }

	  const data = Modal.getOrCreateInstance(target);

	  data.toggle(this);
	});

	enableDismissTrigger(Modal);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Modal);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap offcanvas.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$6 = 'offcanvas';
	const DATA_KEY$3 = 'bs.offcanvas';
	const EVENT_KEY$3 = `.${DATA_KEY$3}`;
	const DATA_API_KEY$1 = '.data-api';
	const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
	const ESCAPE_KEY = 'Escape';

	const CLASS_NAME_SHOW$3 = 'show';
	const CLASS_NAME_SHOWING$1 = 'showing';
	const CLASS_NAME_HIDING = 'hiding';
	const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
	const OPEN_SELECTOR = '.offcanvas.show';

	const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
	const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
	const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
	const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
	const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
	const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
	const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
	const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;

	const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

	const Default$5 = {
	  backdrop: true,
	  keyboard: true,
	  scroll: false
	};

	const DefaultType$5 = {
	  backdrop: '(boolean|string)',
	  keyboard: 'boolean',
	  scroll: 'boolean'
	};

	/**
	 * Class definition
	 */

	class Offcanvas extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._isShown = false;
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();
	    this._addEventListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default$5
	  }

	  static get DefaultType() {
	    return DefaultType$5
	  }

	  static get NAME() {
	    return NAME$6
	  }

	  // Public
	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget)
	  }

	  show(relatedTarget) {
	    if (this._isShown) {
	      return
	    }

	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, { relatedTarget });

	    if (showEvent.defaultPrevented) {
	      return
	    }

	    this._isShown = true;
	    this._backdrop.show();

	    if (!this._config.scroll) {
	      new ScrollBarHelper().hide();
	    }

	    this._element.setAttribute('aria-modal', true);
	    this._element.setAttribute('role', 'dialog');
	    this._element.classList.add(CLASS_NAME_SHOWING$1);

	    const completeCallBack = () => {
	      if (!this._config.scroll || this._config.backdrop) {
	        this._focustrap.activate();
	      }

	      this._element.classList.add(CLASS_NAME_SHOW$3);
	      this._element.classList.remove(CLASS_NAME_SHOWING$1);
	      EventHandler.trigger(this._element, EVENT_SHOWN$3, { relatedTarget });
	    };

	    this._queueCallback(completeCallBack, this._element, true);
	  }

	  hide() {
	    if (!this._isShown) {
	      return
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    this._focustrap.deactivate();
	    this._element.blur();
	    this._isShown = false;
	    this._element.classList.add(CLASS_NAME_HIDING);
	    this._backdrop.hide();

	    const completeCallback = () => {
	      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
	      this._element.removeAttribute('aria-modal');
	      this._element.removeAttribute('role');

	      if (!this._config.scroll) {
	        new ScrollBarHelper().reset();
	      }

	      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
	    };

	    this._queueCallback(completeCallback, this._element, true);
	  }

	  dispose() {
	    this._backdrop.dispose();
	    this._focustrap.deactivate();
	    super.dispose();
	  }

	  // Private
	  _initializeBackDrop() {
	    const clickCallback = () => {
	      if (this._config.backdrop === 'static') {
	        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
	        return
	      }

	      this.hide();
	    };

	    // 'static' option will be translated to true, and booleans will keep their value
	    const isVisible = Boolean(this._config.backdrop);

	    return new Backdrop({
	      className: CLASS_NAME_BACKDROP,
	      isVisible,
	      isAnimated: true,
	      rootElement: this._element.parentNode,
	      clickCallback: isVisible ? clickCallback : null
	    })
	  }

	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    })
	  }

	  _addEventListeners() {
	    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
	      if (event.key !== ESCAPE_KEY) {
	        return
	      }

	      if (this._config.keyboard) {
	        this.hide();
	        return
	      }

	      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
	    });
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Offcanvas.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config](this);
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
	  const target = SelectorEngine.getElementFromSelector(this);

	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  if (isDisabled(this)) {
	    return
	  }

	  EventHandler.one(target, EVENT_HIDDEN$3, () => {
	    // focus on trigger when it is closed
	    if (isVisible(this)) {
	      this.focus();
	    }
	  });

	  // avoid conflict when clicking a toggler of an offcanvas, while another is open
	  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
	  if (alreadyOpen && alreadyOpen !== target) {
	    Offcanvas.getInstance(alreadyOpen).hide();
	  }

	  const data = Offcanvas.getOrCreateInstance(target);
	  data.toggle(this);
	});

	EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
	  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
	    Offcanvas.getOrCreateInstance(selector).show();
	  }
	});

	EventHandler.on(window, EVENT_RESIZE, () => {
	  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
	    if (getComputedStyle(element).position !== 'fixed') {
	      Offcanvas.getOrCreateInstance(element).hide();
	    }
	  }
	});

	enableDismissTrigger(Offcanvas);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Offcanvas);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/sanitizer.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	// js-docs-start allow-list
	const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

	const DefaultAllowlist = {
	  // Global attributes allowed on any supplied element below.
	  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
	  a: ['target', 'href', 'title', 'rel'],
	  area: [],
	  b: [],
	  br: [],
	  col: [],
	  code: [],
	  dd: [],
	  div: [],
	  dl: [],
	  dt: [],
	  em: [],
	  hr: [],
	  h1: [],
	  h2: [],
	  h3: [],
	  h4: [],
	  h5: [],
	  h6: [],
	  i: [],
	  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
	  li: [],
	  ol: [],
	  p: [],
	  pre: [],
	  s: [],
	  small: [],
	  span: [],
	  sub: [],
	  sup: [],
	  strong: [],
	  u: [],
	  ul: []
	};
	// js-docs-end allow-list

	const uriAttributes = new Set([
	  'background',
	  'cite',
	  'href',
	  'itemtype',
	  'longdesc',
	  'poster',
	  'src',
	  'xlink:href'
	]);

	/**
	 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
	 * contexts.
	 *
	 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
	 */
	// eslint-disable-next-line unicorn/better-regex
	const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;

	const allowedAttribute = (attribute, allowedAttributeList) => {
	  const attributeName = attribute.nodeName.toLowerCase();

	  if (allowedAttributeList.includes(attributeName)) {
	    if (uriAttributes.has(attributeName)) {
	      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue))
	    }

	    return true
	  }

	  // Check if a regular expression validates the attribute.
	  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp)
	    .some(regex => regex.test(attributeName))
	};

	function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
	  if (!unsafeHtml.length) {
	    return unsafeHtml
	  }

	  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
	    return sanitizeFunction(unsafeHtml)
	  }

	  const domParser = new window.DOMParser();
	  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
	  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

	  for (const element of elements) {
	    const elementName = element.nodeName.toLowerCase();

	    if (!Object.keys(allowList).includes(elementName)) {
	      element.remove();
	      continue
	    }

	    const attributeList = [].concat(...element.attributes);
	    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

	    for (const attribute of attributeList) {
	      if (!allowedAttribute(attribute, allowedAttributes)) {
	        element.removeAttribute(attribute.nodeName);
	      }
	    }
	  }

	  return createdDocument.body.innerHTML
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap util/template-factory.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$5 = 'TemplateFactory';

	const Default$4 = {
	  allowList: DefaultAllowlist,
	  content: {}, // { selector : text ,  selector2 : text2 , }
	  extraClass: '',
	  html: false,
	  sanitize: true,
	  sanitizeFn: null,
	  template: '<div></div>'
	};

	const DefaultType$4 = {
	  allowList: 'object',
	  content: 'object',
	  extraClass: '(string|function)',
	  html: 'boolean',
	  sanitize: 'boolean',
	  sanitizeFn: '(null|function)',
	  template: 'string'
	};

	const DefaultContentType = {
	  entry: '(string|element|function|null)',
	  selector: '(string|element)'
	};

	/**
	 * Class definition
	 */

	class TemplateFactory extends Config {
	  constructor(config) {
	    super();
	    this._config = this._getConfig(config);
	  }

	  // Getters
	  static get Default() {
	    return Default$4
	  }

	  static get DefaultType() {
	    return DefaultType$4
	  }

	  static get NAME() {
	    return NAME$5
	  }

	  // Public
	  getContent() {
	    return Object.values(this._config.content)
	      .map(config => this._resolvePossibleFunction(config))
	      .filter(Boolean)
	  }

	  hasContent() {
	    return this.getContent().length > 0
	  }

	  changeContent(content) {
	    this._checkContent(content);
	    this._config.content = { ...this._config.content, ...content };
	    return this
	  }

	  toHtml() {
	    const templateWrapper = document.createElement('div');
	    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

	    for (const [selector, text] of Object.entries(this._config.content)) {
	      this._setContent(templateWrapper, text, selector);
	    }

	    const template = templateWrapper.children[0];
	    const extraClass = this._resolvePossibleFunction(this._config.extraClass);

	    if (extraClass) {
	      template.classList.add(...extraClass.split(' '));
	    }

	    return template
	  }

	  // Private
	  _typeCheckConfig(config) {
	    super._typeCheckConfig(config);
	    this._checkContent(config.content);
	  }

	  _checkContent(arg) {
	    for (const [selector, content] of Object.entries(arg)) {
	      super._typeCheckConfig({ selector, entry: content }, DefaultContentType);
	    }
	  }

	  _setContent(template, content, selector) {
	    const templateElement = SelectorEngine.findOne(selector, template);

	    if (!templateElement) {
	      return
	    }

	    content = this._resolvePossibleFunction(content);

	    if (!content) {
	      templateElement.remove();
	      return
	    }

	    if (isElement$1(content)) {
	      this._putElementInTemplate(getElement(content), templateElement);
	      return
	    }

	    if (this._config.html) {
	      templateElement.innerHTML = this._maybeSanitize(content);
	      return
	    }

	    templateElement.textContent = content;
	  }

	  _maybeSanitize(arg) {
	    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg
	  }

	  _resolvePossibleFunction(arg) {
	    return execute(arg, [this])
	  }

	  _putElementInTemplate(element, templateElement) {
	    if (this._config.html) {
	      templateElement.innerHTML = '';
	      templateElement.append(element);
	      return
	    }

	    templateElement.textContent = element.textContent;
	  }
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$4 = 'tooltip';
	const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);

	const CLASS_NAME_FADE$2 = 'fade';
	const CLASS_NAME_MODAL = 'modal';
	const CLASS_NAME_SHOW$2 = 'show';

	const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
	const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;

	const EVENT_MODAL_HIDE = 'hide.bs.modal';

	const TRIGGER_HOVER = 'hover';
	const TRIGGER_FOCUS = 'focus';
	const TRIGGER_CLICK = 'click';
	const TRIGGER_MANUAL = 'manual';

	const EVENT_HIDE$2 = 'hide';
	const EVENT_HIDDEN$2 = 'hidden';
	const EVENT_SHOW$2 = 'show';
	const EVENT_SHOWN$2 = 'shown';
	const EVENT_INSERTED = 'inserted';
	const EVENT_CLICK$1 = 'click';
	const EVENT_FOCUSIN$1 = 'focusin';
	const EVENT_FOCUSOUT$1 = 'focusout';
	const EVENT_MOUSEENTER = 'mouseenter';
	const EVENT_MOUSELEAVE = 'mouseleave';

	const AttachmentMap = {
	  AUTO: 'auto',
	  TOP: 'top',
	  RIGHT: isRTL() ? 'left' : 'right',
	  BOTTOM: 'bottom',
	  LEFT: isRTL() ? 'right' : 'left'
	};

	const Default$3 = {
	  allowList: DefaultAllowlist,
	  animation: true,
	  boundary: 'clippingParents',
	  container: false,
	  customClass: '',
	  delay: 0,
	  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
	  html: false,
	  offset: [0, 6],
	  placement: 'top',
	  popperConfig: null,
	  sanitize: true,
	  sanitizeFn: null,
	  selector: false,
	  template: '<div class="tooltip" role="tooltip">' +
	            '<div class="tooltip-arrow"></div>' +
	            '<div class="tooltip-inner"></div>' +
	            '</div>',
	  title: '',
	  trigger: 'hover focus'
	};

	const DefaultType$3 = {
	  allowList: 'object',
	  animation: 'boolean',
	  boundary: '(string|element)',
	  container: '(string|element|boolean)',
	  customClass: '(string|function)',
	  delay: '(number|object)',
	  fallbackPlacements: 'array',
	  html: 'boolean',
	  offset: '(array|string|function)',
	  placement: '(string|function)',
	  popperConfig: '(null|object|function)',
	  sanitize: 'boolean',
	  sanitizeFn: '(null|function)',
	  selector: '(string|boolean)',
	  template: 'string',
	  title: '(string|element|function)',
	  trigger: 'string'
	};

	/**
	 * Class definition
	 */

	class Tooltip extends BaseComponent {
	  constructor(element, config) {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)')
	    }

	    super(element, config);

	    // Private
	    this._isEnabled = true;
	    this._timeout = 0;
	    this._isHovered = null;
	    this._activeTrigger = {};
	    this._popper = null;
	    this._templateFactory = null;
	    this._newContent = null;

	    // Protected
	    this.tip = null;

	    this._setListeners();

	    if (!this._config.selector) {
	      this._fixTitle();
	    }
	  }

	  // Getters
	  static get Default() {
	    return Default$3
	  }

	  static get DefaultType() {
	    return DefaultType$3
	  }

	  static get NAME() {
	    return NAME$4
	  }

	  // Public
	  enable() {
	    this._isEnabled = true;
	  }

	  disable() {
	    this._isEnabled = false;
	  }

	  toggleEnabled() {
	    this._isEnabled = !this._isEnabled;
	  }

	  toggle() {
	    if (!this._isEnabled) {
	      return
	    }

	    this._activeTrigger.click = !this._activeTrigger.click;
	    if (this._isShown()) {
	      this._leave();
	      return
	    }

	    this._enter();
	  }

	  dispose() {
	    clearTimeout(this._timeout);

	    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

	    if (this._element.getAttribute('data-bs-original-title')) {
	      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
	    }

	    this._disposePopper();
	    super.dispose();
	  }

	  show() {
	    if (this._element.style.display === 'none') {
	      throw new Error('Please use show on visible elements')
	    }

	    if (!(this._isWithContent() && this._isEnabled)) {
	      return
	    }

	    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
	    const shadowRoot = findShadowRoot(this._element);
	    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

	    if (showEvent.defaultPrevented || !isInTheDom) {
	      return
	    }

	    // TODO: v6 remove this or make it optional
	    this._disposePopper();

	    const tip = this._getTipElement();

	    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

	    const { container } = this._config;

	    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
	      container.append(tip);
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
	    }

	    this._popper = this._createPopper(tip);

	    tip.classList.add(CLASS_NAME_SHOW$2);

	    // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.on(element, 'mouseover', noop);
	      }
	    }

	    const complete = () => {
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

	      if (this._isHovered === false) {
	        this._leave();
	      }

	      this._isHovered = false;
	    };

	    this._queueCallback(complete, this.tip, this._isAnimated());
	  }

	  hide() {
	    if (!this._isShown()) {
	      return
	    }

	    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    const tip = this._getTipElement();
	    tip.classList.remove(CLASS_NAME_SHOW$2);

	    // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support
	    if ('ontouchstart' in document.documentElement) {
	      for (const element of [].concat(...document.body.children)) {
	        EventHandler.off(element, 'mouseover', noop);
	      }
	    }

	    this._activeTrigger[TRIGGER_CLICK] = false;
	    this._activeTrigger[TRIGGER_FOCUS] = false;
	    this._activeTrigger[TRIGGER_HOVER] = false;
	    this._isHovered = null; // it is a trick to support manual triggering

	    const complete = () => {
	      if (this._isWithActiveTrigger()) {
	        return
	      }

	      if (!this._isHovered) {
	        this._disposePopper();
	      }

	      this._element.removeAttribute('aria-describedby');
	      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
	    };

	    this._queueCallback(complete, this.tip, this._isAnimated());
	  }

	  update() {
	    if (this._popper) {
	      this._popper.update();
	    }
	  }

	  // Protected
	  _isWithContent() {
	    return Boolean(this._getTitle())
	  }

	  _getTipElement() {
	    if (!this.tip) {
	      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
	    }

	    return this.tip
	  }

	  _createTipElement(content) {
	    const tip = this._getTemplateFactory(content).toHtml();

	    // TODO: remove this check in v6
	    if (!tip) {
	      return null
	    }

	    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
	    // TODO: v6 the following can be achieved with CSS only
	    tip.classList.add(`bs-${this.constructor.NAME}-auto`);

	    const tipId = getUID(this.constructor.NAME).toString();

	    tip.setAttribute('id', tipId);

	    if (this._isAnimated()) {
	      tip.classList.add(CLASS_NAME_FADE$2);
	    }

	    return tip
	  }

	  setContent(content) {
	    this._newContent = content;
	    if (this._isShown()) {
	      this._disposePopper();
	      this.show();
	    }
	  }

	  _getTemplateFactory(content) {
	    if (this._templateFactory) {
	      this._templateFactory.changeContent(content);
	    } else {
	      this._templateFactory = new TemplateFactory({
	        ...this._config,
	        // the `content` var has to be after `this._config`
	        // to override config.content in case of popover
	        content,
	        extraClass: this._resolvePossibleFunction(this._config.customClass)
	      });
	    }

	    return this._templateFactory
	  }

	  _getContentForTemplate() {
	    return {
	      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
	    }
	  }

	  _getTitle() {
	    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title')
	  }

	  // Private
	  _initializeOnDelegatedTarget(event) {
	    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig())
	  }

	  _isAnimated() {
	    return this._config.animation || (this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2))
	  }

	  _isShown() {
	    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2)
	  }

	  _createPopper(tip) {
	    const placement = execute(this._config.placement, [this, tip, this._element]);
	    const attachment = AttachmentMap[placement.toUpperCase()];
	    return createPopper(this._element, tip, this._getPopperConfig(attachment))
	  }

	  _getOffset() {
	    const { offset } = this._config;

	    if (typeof offset === 'string') {
	      return offset.split(',').map(value => Number.parseInt(value, 10))
	    }

	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element)
	    }

	    return offset
	  }

	  _resolvePossibleFunction(arg) {
	    return execute(arg, [this._element])
	  }

	  _getPopperConfig(attachment) {
	    const defaultBsPopperConfig = {
	      placement: attachment,
	      modifiers: [
	        {
	          name: 'flip',
	          options: {
	            fallbackPlacements: this._config.fallbackPlacements
	          }
	        },
	        {
	          name: 'offset',
	          options: {
	            offset: this._getOffset()
	          }
	        },
	        {
	          name: 'preventOverflow',
	          options: {
	            boundary: this._config.boundary
	          }
	        },
	        {
	          name: 'arrow',
	          options: {
	            element: `.${this.constructor.NAME}-arrow`
	          }
	        },
	        {
	          name: 'preSetPlacement',
	          enabled: true,
	          phase: 'beforeMain',
	          fn: data => {
	            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
	            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
	            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
	          }
	        }
	      ]
	    };

	    return {
	      ...defaultBsPopperConfig,
	      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
	    }
	  }

	  _setListeners() {
	    const triggers = this._config.trigger.split(' ');

	    for (const trigger of triggers) {
	      if (trigger === 'click') {
	        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context.toggle();
	        });
	      } else if (trigger !== TRIGGER_MANUAL) {
	        const eventIn = trigger === TRIGGER_HOVER ?
	          this.constructor.eventName(EVENT_MOUSEENTER) :
	          this.constructor.eventName(EVENT_FOCUSIN$1);
	        const eventOut = trigger === TRIGGER_HOVER ?
	          this.constructor.eventName(EVENT_MOUSELEAVE) :
	          this.constructor.eventName(EVENT_FOCUSOUT$1);

	        EventHandler.on(this._element, eventIn, this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
	          context._enter();
	        });
	        EventHandler.on(this._element, eventOut, this._config.selector, event => {
	          const context = this._initializeOnDelegatedTarget(event);
	          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] =
	            context._element.contains(event.relatedTarget);

	          context._leave();
	        });
	      }
	    }

	    this._hideModalHandler = () => {
	      if (this._element) {
	        this.hide();
	      }
	    };

	    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
	  }

	  _fixTitle() {
	    const title = this._element.getAttribute('title');

	    if (!title) {
	      return
	    }

	    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
	      this._element.setAttribute('aria-label', title);
	    }

	    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
	    this._element.removeAttribute('title');
	  }

	  _enter() {
	    if (this._isShown() || this._isHovered) {
	      this._isHovered = true;
	      return
	    }

	    this._isHovered = true;

	    this._setTimeout(() => {
	      if (this._isHovered) {
	        this.show();
	      }
	    }, this._config.delay.show);
	  }

	  _leave() {
	    if (this._isWithActiveTrigger()) {
	      return
	    }

	    this._isHovered = false;

	    this._setTimeout(() => {
	      if (!this._isHovered) {
	        this.hide();
	      }
	    }, this._config.delay.hide);
	  }

	  _setTimeout(handler, timeout) {
	    clearTimeout(this._timeout);
	    this._timeout = setTimeout(handler, timeout);
	  }

	  _isWithActiveTrigger() {
	    return Object.values(this._activeTrigger).includes(true)
	  }

	  _getConfig(config) {
	    const dataAttributes = Manipulator.getDataAttributes(this._element);

	    for (const dataAttribute of Object.keys(dataAttributes)) {
	      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
	        delete dataAttributes[dataAttribute];
	      }
	    }

	    config = {
	      ...dataAttributes,
	      ...(typeof config === 'object' && config ? config : {})
	    };
	    config = this._mergeConfigObj(config);
	    config = this._configAfterMerge(config);
	    this._typeCheckConfig(config);
	    return config
	  }

	  _configAfterMerge(config) {
	    config.container = config.container === false ? document.body : getElement(config.container);

	    if (typeof config.delay === 'number') {
	      config.delay = {
	        show: config.delay,
	        hide: config.delay
	      };
	    }

	    if (typeof config.title === 'number') {
	      config.title = config.title.toString();
	    }

	    if (typeof config.content === 'number') {
	      config.content = config.content.toString();
	    }

	    return config
	  }

	  _getDelegateConfig() {
	    const config = {};

	    for (const [key, value] of Object.entries(this._config)) {
	      if (this.constructor.Default[key] !== value) {
	        config[key] = value;
	      }
	    }

	    config.selector = false;
	    config.trigger = 'manual';

	    // In the future can be replaced with:
	    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
	    // `Object.fromEntries(keysWithDifferentValues)`
	    return config
	  }

	  _disposePopper() {
	    if (this._popper) {
	      this._popper.destroy();
	      this._popper = null;
	    }

	    if (this.tip) {
	      this.tip.remove();
	      this.tip = null;
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tooltip.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config]();
	    })
	  }
	}

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Tooltip);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$3 = 'popover';

	const SELECTOR_TITLE = '.popover-header';
	const SELECTOR_CONTENT = '.popover-body';

	const Default$2 = {
	  ...Tooltip.Default,
	  content: '',
	  offset: [0, 8],
	  placement: 'right',
	  template: '<div class="popover" role="tooltip">' +
	    '<div class="popover-arrow"></div>' +
	    '<h3 class="popover-header"></h3>' +
	    '<div class="popover-body"></div>' +
	    '</div>',
	  trigger: 'click'
	};

	const DefaultType$2 = {
	  ...Tooltip.DefaultType,
	  content: '(null|string|element|function)'
	};

	/**
	 * Class definition
	 */

	class Popover extends Tooltip {
	  // Getters
	  static get Default() {
	    return Default$2
	  }

	  static get DefaultType() {
	    return DefaultType$2
	  }

	  static get NAME() {
	    return NAME$3
	  }

	  // Overrides
	  _isWithContent() {
	    return this._getTitle() || this._getContent()
	  }

	  // Private
	  _getContentForTemplate() {
	    return {
	      [SELECTOR_TITLE]: this._getTitle(),
	      [SELECTOR_CONTENT]: this._getContent()
	    }
	  }

	  _getContent() {
	    return this._resolvePossibleFunction(this._config.content)
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Popover.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config]();
	    })
	  }
	}

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Popover);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap scrollspy.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$2 = 'scrollspy';
	const DATA_KEY$2 = 'bs.scrollspy';
	const EVENT_KEY$2 = `.${DATA_KEY$2}`;
	const DATA_API_KEY = '.data-api';

	const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
	const EVENT_CLICK = `click${EVENT_KEY$2}`;
	const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;

	const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
	const CLASS_NAME_ACTIVE$1 = 'active';

	const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
	const SELECTOR_TARGET_LINKS = '[href]';
	const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
	const SELECTOR_NAV_LINKS = '.nav-link';
	const SELECTOR_NAV_ITEMS = '.nav-item';
	const SELECTOR_LIST_ITEMS = '.list-group-item';
	const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
	const SELECTOR_DROPDOWN = '.dropdown';
	const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';

	const Default$1 = {
	  offset: null, // TODO: v6 @deprecated, keep it for backwards compatibility reasons
	  rootMargin: '0px 0px -25%',
	  smoothScroll: false,
	  target: null,
	  threshold: [0.1, 0.5, 1]
	};

	const DefaultType$1 = {
	  offset: '(number|null)', // TODO v6 @deprecated, keep it for backwards compatibility reasons
	  rootMargin: 'string',
	  smoothScroll: 'boolean',
	  target: 'element',
	  threshold: 'array'
	};

	/**
	 * Class definition
	 */

	class ScrollSpy extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    // this._element is the observablesContainer and config.target the menu links wrapper
	    this._targetLinks = new Map();
	    this._observableSections = new Map();
	    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
	    this._activeTarget = null;
	    this._observer = null;
	    this._previousScrollData = {
	      visibleEntryTop: 0,
	      parentScrollTop: 0
	    };
	    this.refresh(); // initialize
	  }

	  // Getters
	  static get Default() {
	    return Default$1
	  }

	  static get DefaultType() {
	    return DefaultType$1
	  }

	  static get NAME() {
	    return NAME$2
	  }

	  // Public
	  refresh() {
	    this._initializeTargetsAndObservables();
	    this._maybeEnableSmoothScroll();

	    if (this._observer) {
	      this._observer.disconnect();
	    } else {
	      this._observer = this._getNewObserver();
	    }

	    for (const section of this._observableSections.values()) {
	      this._observer.observe(section);
	    }
	  }

	  dispose() {
	    this._observer.disconnect();
	    super.dispose();
	  }

	  // Private
	  _configAfterMerge(config) {
	    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
	    config.target = getElement(config.target) || document.body;

	    // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
	    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

	    if (typeof config.threshold === 'string') {
	      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
	    }

	    return config
	  }

	  _maybeEnableSmoothScroll() {
	    if (!this._config.smoothScroll) {
	      return
	    }

	    // unregister any previous listeners
	    EventHandler.off(this._config.target, EVENT_CLICK);

	    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
	      const observableSection = this._observableSections.get(event.target.hash);
	      if (observableSection) {
	        event.preventDefault();
	        const root = this._rootElement || window;
	        const height = observableSection.offsetTop - this._element.offsetTop;
	        if (root.scrollTo) {
	          root.scrollTo({ top: height, behavior: 'smooth' });
	          return
	        }

	        // Chrome 60 doesn't support `scrollTo`
	        root.scrollTop = height;
	      }
	    });
	  }

	  _getNewObserver() {
	    const options = {
	      root: this._rootElement,
	      threshold: this._config.threshold,
	      rootMargin: this._config.rootMargin
	    };

	    return new IntersectionObserver(entries => this._observerCallback(entries), options)
	  }

	  // The logic of selection
	  _observerCallback(entries) {
	    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
	    const activate = entry => {
	      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
	      this._process(targetElement(entry));
	    };

	    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
	    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
	    this._previousScrollData.parentScrollTop = parentScrollTop;

	    for (const entry of entries) {
	      if (!entry.isIntersecting) {
	        this._activeTarget = null;
	        this._clearActiveClass(targetElement(entry));

	        continue
	      }

	      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
	      // if we are scrolling down, pick the bigger offsetTop
	      if (userScrollsDown && entryIsLowerThanPrevious) {
	        activate(entry);
	        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
	        if (!parentScrollTop) {
	          return
	        }

	        continue
	      }

	      // if we are scrolling up, pick the smallest offsetTop
	      if (!userScrollsDown && !entryIsLowerThanPrevious) {
	        activate(entry);
	      }
	    }
	  }

	  _initializeTargetsAndObservables() {
	    this._targetLinks = new Map();
	    this._observableSections = new Map();

	    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

	    for (const anchor of targetLinks) {
	      // ensure that the anchor has an id and is not disabled
	      if (!anchor.hash || isDisabled(anchor)) {
	        continue
	      }

	      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

	      // ensure that the observableSection exists & is visible
	      if (isVisible(observableSection)) {
	        this._targetLinks.set(decodeURI(anchor.hash), anchor);
	        this._observableSections.set(anchor.hash, observableSection);
	      }
	    }
	  }

	  _process(target) {
	    if (this._activeTarget === target) {
	      return
	    }

	    this._clearActiveClass(this._config.target);
	    this._activeTarget = target;
	    target.classList.add(CLASS_NAME_ACTIVE$1);
	    this._activateParents(target);

	    EventHandler.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
	  }

	  _activateParents(target) {
	    // Activate dropdown parents
	    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
	      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN))
	        .classList.add(CLASS_NAME_ACTIVE$1);
	      return
	    }

	    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
	      // Set triggered links parents as active
	      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
	      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
	        item.classList.add(CLASS_NAME_ACTIVE$1);
	      }
	    }
	  }

	  _clearActiveClass(parent) {
	    parent.classList.remove(CLASS_NAME_ACTIVE$1);

	    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
	    for (const node of activeNodes) {
	      node.classList.remove(CLASS_NAME_ACTIVE$1);
	    }
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = ScrollSpy.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config]();
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
	  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
	    ScrollSpy.getOrCreateInstance(spy);
	  }
	});

	/**
	 * jQuery
	 */

	defineJQueryPlugin(ScrollSpy);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME$1 = 'tab';
	const DATA_KEY$1 = 'bs.tab';
	const EVENT_KEY$1 = `.${DATA_KEY$1}`;

	const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
	const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
	const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
	const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
	const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
	const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
	const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;

	const ARROW_LEFT_KEY = 'ArrowLeft';
	const ARROW_RIGHT_KEY = 'ArrowRight';
	const ARROW_UP_KEY = 'ArrowUp';
	const ARROW_DOWN_KEY = 'ArrowDown';
	const HOME_KEY = 'Home';
	const END_KEY = 'End';

	const CLASS_NAME_ACTIVE = 'active';
	const CLASS_NAME_FADE$1 = 'fade';
	const CLASS_NAME_SHOW$1 = 'show';
	const CLASS_DROPDOWN = 'dropdown';

	const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
	const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
	const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;

	const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
	const SELECTOR_OUTER = '.nav-item, .list-group-item';
	const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
	const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
	const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;

	const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

	/**
	 * Class definition
	 */

	class Tab extends BaseComponent {
	  constructor(element) {
	    super(element);
	    this._parent = this._element.closest(SELECTOR_TAB_PANEL);

	    if (!this._parent) {
	      return
	      // TODO: should throw exception in v6
	      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
	    }

	    // Set up initial aria attributes
	    this._setInitialAttributes(this._parent, this._getChildren());

	    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
	  }

	  // Getters
	  static get NAME() {
	    return NAME$1
	  }

	  // Public
	  show() { // Shows this elem and deactivate the active sibling if exists
	    const innerElem = this._element;
	    if (this._elemIsActive(innerElem)) {
	      return
	    }

	    // Search for active tab on same parent to deactivate it
	    const active = this._getActiveElem();

	    const hideEvent = active ?
	      EventHandler.trigger(active, EVENT_HIDE$1, { relatedTarget: innerElem }) :
	      null;

	    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, { relatedTarget: active });

	    if (showEvent.defaultPrevented || (hideEvent && hideEvent.defaultPrevented)) {
	      return
	    }

	    this._deactivate(active, innerElem);
	    this._activate(innerElem, active);
	  }

	  // Private
	  _activate(element, relatedElem) {
	    if (!element) {
	      return
	    }

	    element.classList.add(CLASS_NAME_ACTIVE);

	    this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

	    const complete = () => {
	      if (element.getAttribute('role') !== 'tab') {
	        element.classList.add(CLASS_NAME_SHOW$1);
	        return
	      }

	      element.removeAttribute('tabindex');
	      element.setAttribute('aria-selected', true);
	      this._toggleDropDown(element, true);
	      EventHandler.trigger(element, EVENT_SHOWN$1, {
	        relatedTarget: relatedElem
	      });
	    };

	    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
	  }

	  _deactivate(element, relatedElem) {
	    if (!element) {
	      return
	    }

	    element.classList.remove(CLASS_NAME_ACTIVE);
	    element.blur();

	    this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

	    const complete = () => {
	      if (element.getAttribute('role') !== 'tab') {
	        element.classList.remove(CLASS_NAME_SHOW$1);
	        return
	      }

	      element.setAttribute('aria-selected', false);
	      element.setAttribute('tabindex', '-1');
	      this._toggleDropDown(element, false);
	      EventHandler.trigger(element, EVENT_HIDDEN$1, { relatedTarget: relatedElem });
	    };

	    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
	  }

	  _keydown(event) {
	    if (!([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key))) {
	      return
	    }

	    event.stopPropagation();// stopPropagation/preventDefault both added to support up/down keys without scrolling the page
	    event.preventDefault();

	    const children = this._getChildren().filter(element => !isDisabled(element));
	    let nextActiveElement;

	    if ([HOME_KEY, END_KEY].includes(event.key)) {
	      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
	    } else {
	      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
	      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
	    }

	    if (nextActiveElement) {
	      nextActiveElement.focus({ preventScroll: true });
	      Tab.getOrCreateInstance(nextActiveElement).show();
	    }
	  }

	  _getChildren() { // collection of inner elements
	    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent)
	  }

	  _getActiveElem() {
	    return this._getChildren().find(child => this._elemIsActive(child)) || null
	  }

	  _setInitialAttributes(parent, children) {
	    this._setAttributeIfNotExists(parent, 'role', 'tablist');

	    for (const child of children) {
	      this._setInitialAttributesOnChild(child);
	    }
	  }

	  _setInitialAttributesOnChild(child) {
	    child = this._getInnerElement(child);
	    const isActive = this._elemIsActive(child);
	    const outerElem = this._getOuterElement(child);
	    child.setAttribute('aria-selected', isActive);

	    if (outerElem !== child) {
	      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
	    }

	    if (!isActive) {
	      child.setAttribute('tabindex', '-1');
	    }

	    this._setAttributeIfNotExists(child, 'role', 'tab');

	    // set attributes to the related panel too
	    this._setInitialAttributesOnTargetPanel(child);
	  }

	  _setInitialAttributesOnTargetPanel(child) {
	    const target = SelectorEngine.getElementFromSelector(child);

	    if (!target) {
	      return
	    }

	    this._setAttributeIfNotExists(target, 'role', 'tabpanel');

	    if (child.id) {
	      this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
	    }
	  }

	  _toggleDropDown(element, open) {
	    const outerElem = this._getOuterElement(element);
	    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
	      return
	    }

	    const toggle = (selector, className) => {
	      const element = SelectorEngine.findOne(selector, outerElem);
	      if (element) {
	        element.classList.toggle(className, open);
	      }
	    };

	    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
	    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
	    outerElem.setAttribute('aria-expanded', open);
	  }

	  _setAttributeIfNotExists(element, attribute, value) {
	    if (!element.hasAttribute(attribute)) {
	      element.setAttribute(attribute, value);
	    }
	  }

	  _elemIsActive(elem) {
	    return elem.classList.contains(CLASS_NAME_ACTIVE)
	  }

	  // Try to get the inner element (usually the .nav-link)
	  _getInnerElement(elem) {
	    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem)
	  }

	  // Try to get the outer element (usually the .nav-item)
	  _getOuterElement(elem) {
	    return elem.closest(SELECTOR_OUTER) || elem
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tab.getOrCreateInstance(this);

	      if (typeof config !== 'string') {
	        return
	      }

	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`)
	      }

	      data[config]();
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  if (isDisabled(this)) {
	    return
	  }

	  Tab.getOrCreateInstance(this).show();
	});

	/**
	 * Initialize on focus
	 */
	EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
	  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
	    Tab.getOrCreateInstance(element);
	  }
	});
	/**
	 * jQuery
	 */

	defineJQueryPlugin(Tab);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap toast.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	/**
	 * Constants
	 */

	const NAME = 'toast';
	const DATA_KEY = 'bs.toast';
	const EVENT_KEY = `.${DATA_KEY}`;

	const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
	const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
	const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
	const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
	const EVENT_HIDE = `hide${EVENT_KEY}`;
	const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
	const EVENT_SHOW = `show${EVENT_KEY}`;
	const EVENT_SHOWN = `shown${EVENT_KEY}`;

	const CLASS_NAME_FADE = 'fade';
	const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
	const CLASS_NAME_SHOW = 'show';
	const CLASS_NAME_SHOWING = 'showing';

	const DefaultType = {
	  animation: 'boolean',
	  autohide: 'boolean',
	  delay: 'number'
	};

	const Default = {
	  animation: true,
	  autohide: true,
	  delay: 5000
	};

	/**
	 * Class definition
	 */

	class Toast extends BaseComponent {
	  constructor(element, config) {
	    super(element, config);

	    this._timeout = null;
	    this._hasMouseInteraction = false;
	    this._hasKeyboardInteraction = false;
	    this._setListeners();
	  }

	  // Getters
	  static get Default() {
	    return Default
	  }

	  static get DefaultType() {
	    return DefaultType
	  }

	  static get NAME() {
	    return NAME
	  }

	  // Public
	  show() {
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

	    if (showEvent.defaultPrevented) {
	      return
	    }

	    this._clearTimeout();

	    if (this._config.animation) {
	      this._element.classList.add(CLASS_NAME_FADE);
	    }

	    const complete = () => {
	      this._element.classList.remove(CLASS_NAME_SHOWING);
	      EventHandler.trigger(this._element, EVENT_SHOWN);

	      this._maybeScheduleHide();
	    };

	    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
	    reflow(this._element);
	    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

	    this._queueCallback(complete, this._element, this._config.animation);
	  }

	  hide() {
	    if (!this.isShown()) {
	      return
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

	    if (hideEvent.defaultPrevented) {
	      return
	    }

	    const complete = () => {
	      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
	      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
	      EventHandler.trigger(this._element, EVENT_HIDDEN);
	    };

	    this._element.classList.add(CLASS_NAME_SHOWING);
	    this._queueCallback(complete, this._element, this._config.animation);
	  }

	  dispose() {
	    this._clearTimeout();

	    if (this.isShown()) {
	      this._element.classList.remove(CLASS_NAME_SHOW);
	    }

	    super.dispose();
	  }

	  isShown() {
	    return this._element.classList.contains(CLASS_NAME_SHOW)
	  }

	  // Private

	  _maybeScheduleHide() {
	    if (!this._config.autohide) {
	      return
	    }

	    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
	      return
	    }

	    this._timeout = setTimeout(() => {
	      this.hide();
	    }, this._config.delay);
	  }

	  _onInteraction(event, isInteracting) {
	    switch (event.type) {
	      case 'mouseover':
	      case 'mouseout': {
	        this._hasMouseInteraction = isInteracting;
	        break
	      }

	      case 'focusin':
	      case 'focusout': {
	        this._hasKeyboardInteraction = isInteracting;
	        break
	      }
	    }

	    if (isInteracting) {
	      this._clearTimeout();
	      return
	    }

	    const nextElement = event.relatedTarget;
	    if (this._element === nextElement || this._element.contains(nextElement)) {
	      return
	    }

	    this._maybeScheduleHide();
	  }

	  _setListeners() {
	    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
	    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
	  }

	  _clearTimeout() {
	    clearTimeout(this._timeout);
	    this._timeout = null;
	  }

	  // Static
	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Toast.getOrCreateInstance(this, config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`)
	        }

	        data[config](this);
	      }
	    })
	  }
	}

	/**
	 * Data API implementation
	 */

	enableDismissTrigger(Toast);

	/**
	 * jQuery
	 */

	defineJQueryPlugin(Toast);

	class LiteYTEmbed extends HTMLElement {
	    constructor() {
	        super();
	        this.isIframeLoaded = false;
	        this.setupDom();
	    }
	    static get observedAttributes() {
	        return ['videoid', 'playlistid', 'videoplay', 'videotitle'];
	    }
	    connectedCallback() {
	        this.addEventListener('pointerover', () => LiteYTEmbed.warmConnections(this), {
	            once: true,
	        });
	        this.addEventListener('click', () => this.addIframe());
	    }
	    get videoId() {
	        return encodeURIComponent(this.getAttribute('videoid') || '');
	    }
	    set videoId(id) {
	        this.setAttribute('videoid', id);
	    }
	    get playlistId() {
	        return encodeURIComponent(this.getAttribute('playlistid') || '');
	    }
	    set playlistId(id) {
	        this.setAttribute('playlistid', id);
	    }
	    get videoTitle() {
	        return this.getAttribute('videotitle') || 'Video';
	    }
	    set videoTitle(title) {
	        this.setAttribute('videotitle', title);
	    }
	    get videoPlay() {
	        return this.getAttribute('videoplay') || 'Play';
	    }
	    set videoPlay(name) {
	        this.setAttribute('videoplay', name);
	    }
	    get videoStartAt() {
	        return this.getAttribute('videoStartAt') || '0';
	    }
	    get autoLoad() {
	        return this.hasAttribute('autoload');
	    }
	    get autoPause() {
	        return this.hasAttribute('autopause');
	    }
	    get noCookie() {
	        return this.hasAttribute('nocookie');
	    }
	    get posterQuality() {
	        return this.getAttribute('posterquality') || 'hqdefault';
	    }
	    get posterLoading() {
	        return (this.getAttribute('posterloading') ||
	            'lazy');
	    }
	    get params() {
	        return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
	    }
	    set params(opts) {
	        this.setAttribute('params', opts);
	    }
	    setupDom() {
	        const shadowDom = this.attachShadow({ mode: 'open' });
	        let nonce = '';
	        if (window.liteYouTubeNonce) {
	            nonce = `nonce="${window.liteYouTubeNonce}"`;
	        }
	        shadowDom.innerHTML = `
      <style ${nonce}>
        :host {
          --aspect-ratio: var(--lite-youtube-aspect-ratio, 16 / 9);
          --aspect-ratio-short: var(--lite-youtube-aspect-ratio-short, 9 / 16);
          --frame-shadow-visible: var(--lite-youtube-frame-shadow-visible, yes);
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          aspect-ratio: var(--aspect-ratio);
        }

        @media (max-width: 40em) {
          :host([short]) {
            aspect-ratio: var(--aspect-ratio-short);
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder, slot[name=image]::slotted(*) {
          object-fit: cover;
          width: 100%;
        }

        @container style(--frame-shadow-visible: yes) {
          #frame::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
            height: 60px;
            width: 100%;
            z-index: 1;
          }
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <slot name="image">
            <source id="webpPlaceholder" type="image/webp">
            <source id="jpegPlaceholder" type="image/jpeg">
            <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
          </slot>
        </picture>
        <button id="playButton"></button>
      </div>
    `;
	        this.domRefFrame = shadowDom.querySelector('#frame');
	        this.domRefImg = {
	            fallback: shadowDom.querySelector('#fallbackPlaceholder'),
	            webp: shadowDom.querySelector('#webpPlaceholder'),
	            jpeg: shadowDom.querySelector('#jpegPlaceholder'),
	        };
	        this.domRefPlayButton = shadowDom.querySelector('#playButton');
	    }
	    setupComponent() {
	        this.initImagePlaceholder();
	        this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
	        this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
	        if (this.autoLoad || this.isYouTubeShort() || this.autoPause) {
	            this.initIntersectionObserver();
	        }
	    }
	    attributeChangedCallback(name, oldVal, newVal) {
	        if (oldVal !== newVal) {
	            this.setupComponent();
	            if (this.domRefFrame.classList.contains('activated')) {
	                this.domRefFrame.classList.remove('activated');
	                this.shadowRoot.querySelector('iframe').remove();
	                this.isIframeLoaded = false;
	            }
	        }
	    }
	    addIframe(isIntersectionObserver = false) {
	        if (!this.isIframeLoaded) {
	            let autoplay = isIntersectionObserver ? 0 : 1;
	            const wantsNoCookie = this.noCookie ? '-nocookie' : '';
	            let embedTarget;
	            if (this.playlistId) {
	                embedTarget = `?listType=playlist&list=${this.playlistId}&`;
	            }
	            else {
	                embedTarget = `${this.videoId}?`;
	            }
	            if (this.autoPause) {
	                this.params = `enablejsapi=1`;
	            }
	            if (this.isYouTubeShort()) {
	                this.params = `loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`;
	                autoplay = 1;
	            }
	            const iframeHTML = `
<iframe credentialless frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${wantsNoCookie}.com/embed/${embedTarget}autoplay=${autoplay}&${this.params}"
></iframe>`;
	            this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
	            this.domRefFrame.classList.add('activated');
	            this.isIframeLoaded = true;
	            this.attemptShortAutoPlay();
	            this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded', {
	                detail: {
	                    videoId: this.videoId,
	                },
	                bubbles: true,
	                cancelable: true,
	            }));
	        }
	    }
	    initImagePlaceholder() {
	        const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
	        const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
	        this.domRefImg.fallback.loading = this.posterLoading;
	        this.domRefImg.webp.srcset = posterUrlWebp;
	        this.domRefImg.jpeg.srcset = posterUrlJpeg;
	        this.domRefImg.fallback.src = posterUrlJpeg;
	        this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
	        this.domRefImg?.fallback?.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
	    }
	    initIntersectionObserver() {
	        const options = {
	            root: null,
	            rootMargin: '0px',
	            threshold: 0,
	        };
	        const observer = new IntersectionObserver((entries, observer) => {
	            entries.forEach(entry => {
	                if (entry.isIntersecting && !this.isIframeLoaded) {
	                    LiteYTEmbed.warmConnections(this);
	                    this.addIframe(true);
	                    observer.unobserve(this);
	                }
	            });
	        }, options);
	        observer.observe(this);
	        if (this.autoPause) {
	            const windowPause = new IntersectionObserver((e, o) => {
	                e.forEach(entry => {
	                    if (entry.intersectionRatio !== 1) {
	                        this.shadowRoot
	                            .querySelector('iframe')
	                            ?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
	                    }
	                });
	            }, { threshold: 1 });
	            windowPause.observe(this);
	        }
	    }
	    attemptShortAutoPlay() {
	        if (this.isYouTubeShort()) {
	            setTimeout(() => {
	                this.shadowRoot
	                    .querySelector('iframe')
	                    ?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	            }, 2000);
	        }
	    }
	    isYouTubeShort() {
	        return (this.getAttribute('short') === '' &&
	            window.matchMedia('(max-width: 40em)').matches);
	    }
	    static addPrefetch(kind, url) {
	        const linkElem = document.createElement('link');
	        linkElem.rel = kind;
	        linkElem.href = url;
	        linkElem.crossOrigin = 'true';
	        document.head.append(linkElem);
	    }
	    static warmConnections(context) {
	        if (LiteYTEmbed.isPreconnected || window.liteYouTubeIsPreconnected)
	            return;
	        LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
	        LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
	        if (!context.noCookie) {
	            LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
	            LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
	            LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
	            LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
	        }
	        else {
	            LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
	        }
	        LiteYTEmbed.isPreconnected = true;
	        window.liteYouTubeIsPreconnected = true;
	    }
	}
	LiteYTEmbed.isPreconnected = false;
	customElements.define('lite-youtube', LiteYTEmbed);

	/**
	 *
	 * The shadowDom / Intersection Observer version of Paul's concept:
	 * https://github.com/paulirish/lite-youtube-embed
	 *
	 * A lightweight YouTube embed. Still should feel the same to the user, just
	 * MUCH faster to initialize and paint.
	 *
	 * Thx to these as the inspiration
	 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
	 *   https://autoplay-youtube-player.glitch.me/
	 *
	 * Once built it, I also found these (👍👍):
	 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube
	 *   https://github.com/Daugilas/lazyYT https://github.com/vb/lazyframe
	 */
	/*
	 * Vimeo example embed markup:
	<iframe src="https://player.vimeo.com/video/364402896"
	  width="640" height="360"
	  frameborder="0"
	  allow="autoplay; fullscreen" allowfullscreen>
	</iframe>
	<p><a href="https://vimeo.com/364402896">
	  Alex Russell - The Mobile Web: MIA</a> from
	    <a href="https://vimeo.com/fronteers">Fronteers</a>
	    on <a href="https://vimeo.com">Vimeo</a>.
	</p>
	 */
	let LiteVimeoEmbed = /** @class */ (() => {
	    class LiteVimeoEmbed extends HTMLElement {
	        constructor() {
	            super();
	            this.iframeLoaded = false;
	            this.setupDom();
	        }
	        static get observedAttributes() {
	            return ['videoid'];
	        }
	        connectedCallback() {
	            this.addEventListener('pointerover', LiteVimeoEmbed.warmConnections, {
	                once: true,
	            });
	            this.addEventListener('click', () => this.addIframe());
	        }
	        get videoId() {
	            return encodeURIComponent(this.getAttribute('videoid') || '');
	        }
	        set videoId(id) {
	            this.setAttribute('videoid', id);
	        }
	        get videoTitle() {
	            return this.getAttribute('videotitle') || 'Video';
	        }
	        set videoTitle(title) {
	            this.setAttribute('videotitle', title);
	        }
	        get videoPlay() {
	            return this.getAttribute('videoPlay') || 'Play';
	        }
	        set videoPlay(name) {
	            this.setAttribute('videoPlay', name);
	        }
	        get videoStartAt() {
	            return this.getAttribute('videoPlay') || '0s';
	        }
	        set videoStartAt(time) {
	            this.setAttribute('videoPlay', time);
	        }
	        get autoLoad() {
	            return this.hasAttribute('autoload');
	        }
	        set autoLoad(value) {
	            if (value) {
	                this.setAttribute('autoload', '');
	            }
	            else {
	                this.removeAttribute('autoload');
	            }
	        }
	        get autoPlay() {
	            return this.hasAttribute('autoplay');
	        }
	        set autoPlay(value) {
	            if (value) {
	                this.setAttribute('autoplay', 'autoplay');
	            }
	            else {
	                this.removeAttribute('autoplay');
	            }
	        }
	        /**
	         * Define our shadowDOM for the component
	         */
	        setupDom() {
	            const shadowDom = this.attachShadow({ mode: 'open' });
	            shadowDom.innerHTML = `
      <style>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
          background-position: top;
          background-repeat: repeat-x;
          height: 60px;
          padding-bottom: 50px;
          width: 100%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          z-index: 1;
        }
        /* play button */
        .lvo-playbtn {
          width: 70px;
          height: 46px;
          background-color: #212121;
          z-index: 1;
          opacity: 0.8;
          border-radius: 10%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          border: 0;
        }
        #frame:hover .lvo-playbtn {
          background-color: rgb(98, 175, 237);
          opacity: 1;
        }
        /* play button triangle */
        .lvo-playbtn:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }
        .lvo-playbtn,
        .lvo-playbtn:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        /* Post-click styles */
        .lvo-activated {
          cursor: unset;
        }

        #frame.lvo-activated::before,
        .lvo-activated .lvo-playbtn {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder"
               referrerpolicy="origin"
               width="1100"
               height="619"
               decoding="async"
               loading="lazy">
        </picture>
        <button class="lvo-playbtn"></button>
      </div>
    `;
	            this.domRefFrame = this.shadowRoot.querySelector('#frame');
	            this.domRefImg = {
	                fallback: this.shadowRoot.querySelector('#fallbackPlaceholder'),
	                webp: this.shadowRoot.querySelector('#webpPlaceholder'),
	                jpeg: this.shadowRoot.querySelector('#jpegPlaceholder'),
	            };
	            this.domRefPlayButton = this.shadowRoot.querySelector('.lvo-playbtn');
	        }
	        /**
	         * Parse our attributes and fire up some placeholders
	         */
	        setupComponent() {
	            this.initImagePlaceholder();
	            this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
	            this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
	            if (this.autoLoad) {
	                this.initIntersectionObserver();
	            }
	        }
	        /**
	         * Lifecycle method that we use to listen for attribute changes to period
	         * @param {*} name
	         * @param {*} oldVal
	         * @param {*} newVal
	         */
	        attributeChangedCallback(name, oldVal, newVal) {
	            switch (name) {
	                case 'videoid': {
	                    if (oldVal !== newVal) {
	                        this.setupComponent();
	                        // if we have a previous iframe, remove it and the activated class
	                        if (this.domRefFrame.classList.contains('lvo-activated')) {
	                            this.domRefFrame.classList.remove('lvo-activated');
	                            this.shadowRoot.querySelector('iframe').remove();
	                        }
	                    }
	                    break;
	                }
	            }
	        }
	        /**
	         * Inject the iframe into the component body
	         */
	        addIframe() {
	            if (!this.iframeLoaded) {
	                /**
	                 * Vimeo example embed markup:
	                 *
	                 *  <iframe src="https://player.vimeo.com/video/364402896#t=1m3s"
	                 *    width="640" height="360"
	                 *    frameborder="0"
	                 *    allow="autoplay; fullscreen" allowfullscreen>
	                 *  </iframe>
	                 */
	                // FIXME: add a setting for autoplay
	                const apValue = ((this.autoLoad && this.autoPlay) || (!this.autoLoad)) ?
	                    "autoplay=1" : "";
	                const srcUrl = new URL(`/video/${this.videoId}?${apValue}&#t=${this.videoStartAt}`, "https://player.vimeo.com/");
	                // TODO: construct src value w/ URL constructor
	                const iframeHTML = `
<iframe frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen src="${srcUrl}"></iframe>`;
	                this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
	                this.domRefFrame.classList.add('lvo-activated');
	                this.iframeLoaded = true;
	            }
	        }
	        /**
	         * Setup the placeholder image for the component
	         */
	        async initImagePlaceholder() {
	            // TODO(slightlyoff): TODO: cache API responses
	            // we don't know which image type to preload, so warm the connection
	            LiteVimeoEmbed.addPrefetch('preconnect', 'https://i.vimeocdn.com/');
	            // API is the video-id based
	            // http://vimeo.com/api/v2/video/364402896.json
	            const apiUrl = `https://vimeo.com/api/v2/video/${this.videoId}.json`;
	            // Now fetch the JSON that locates our placeholder from vimeo's JSON API
	            const apiResponse = (await (await fetch(apiUrl)).json())[0];
	            // Extract the image id, e.g. 819916979, from a URL like:
	            // thumbnail_large: "https://i.vimeocdn.com/video/819916979_640.jpg"
	            const tnLarge = apiResponse.thumbnail_large;
	            const imgId = (tnLarge.substr(tnLarge.lastIndexOf("/") + 1)).split("_")[0];
	            // const posterUrlWebp =
	            //    `https://i.ytimg.com/vi_webp/${this.videoId}/hqdefault.webp`;
	            const posterUrlWebp = `https://i.vimeocdn.com/video/${imgId}.webp?mw=1100&mh=619&q=70`;
	            const posterUrlJpeg = `https://i.vimeocdn.com/video/${imgId}.jpg?mw=1100&mh=619&q=70`;
	            this.domRefImg.webp.srcset = posterUrlWebp;
	            this.domRefImg.jpeg.srcset = posterUrlJpeg;
	            this.domRefImg.fallback.src = posterUrlJpeg;
	            this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
	            this.domRefImg.fallback.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
	        }
	        /**
	         * Setup the Intersection Observer to load the iframe when scrolled into view
	         */
	        initIntersectionObserver() {
	            if ('IntersectionObserver' in window &&
	                'IntersectionObserverEntry' in window) {
	                const options = {
	                    root: null,
	                    rootMargin: '0px',
	                    threshold: 0,
	                };
	                const observer = new IntersectionObserver((entries, observer) => {
	                    entries.forEach(entry => {
	                        if (entry.isIntersecting && !this.iframeLoaded) {
	                            LiteVimeoEmbed.warmConnections();
	                            this.addIframe();
	                            observer.unobserve(this);
	                        }
	                    });
	                }, options);
	                observer.observe(this);
	            }
	        }
	        /**
	         * Add a <link rel={preload | preconnect} ...> to the head
	         * @param {*} kind
	         * @param {*} url
	         * @param {*} as
	         */
	        static addPrefetch(kind, url, as) {
	            const linkElem = document.createElement('link');
	            linkElem.rel = kind;
	            linkElem.href = url;
	            if (as) {
	                linkElem.as = as;
	            }
	            linkElem.crossOrigin = 'true';
	            document.head.append(linkElem);
	        }
	        /**
	         * Begin preconnecting to warm up the iframe load Since the embed's netwok
	         * requests load within its iframe, preload/prefetch'ing them outside the
	         * iframe will only cause double-downloads. So, the best we can do is warm up
	         * a few connections to origins that are in the critical path.
	         *
	         * Maybe `<link rel=preload as=document>` would work, but it's unsupported:
	         * http://crbug.com/593267 But TBH, I don't think it'll happen soon with Site
	         * Isolation and split caches adding serious complexity.
	         */
	        static warmConnections() {
	            if (LiteVimeoEmbed.preconnected)
	                return;
	            // Host that Vimeo uses to serve JS needed by player
	            LiteVimeoEmbed.addPrefetch('preconnect', 'https://f.vimeocdn.com');
	            // The iframe document comes from player.vimeo.com
	            LiteVimeoEmbed.addPrefetch('preconnect', 'https://player.vimeo.com');
	            // Image for placeholder comes from i.vimeocdn.com
	            LiteVimeoEmbed.addPrefetch('preconnect', 'https://i.vimeocdn.com');
	            LiteVimeoEmbed.preconnected = true;
	        }
	    }
	    LiteVimeoEmbed.preconnected = false;
	    return LiteVimeoEmbed;
	})();
	// Register custom element
	customElements.define('lite-vimeo', LiteVimeoEmbed);

	window.jQuery = window.$ = jquery;
	select2(jquery, jquery);

	var collegeDlsUmd = {
	    // Alert,
	    Button,
	    Carousel,
	    Collapse,
	    Dropdown,
	    Modal,
	    Offcanvas,
	    Popover,
	    ScrollSpy,
	    Tab,
	    Toast,
	    Popper: Popper$1,
	    Tooltip
	};

	jquery(document).ready(function () {

	    // Navbar Toggle
	    if (jquery(".glide").length != 0) {
	        var facultyCount = parseInt(document.getElementById("facultyCount").value);
	        facultyCount=Math.floor(Math.random() * facultyCount);
	        new Glide('.glide', {
	            type: 'carousel',
	            startAt: facultyCount,
	            perView: 4,
	            autoplay: 3000,
	            breakpoints: {
	                768: {
	                    perView: 2
	                },
	                576: {
	                    perView: 1
	                }
	            }
	        }).mount();
	    }
	  
	    jquery('.search-btn').click(function () {
	        jquery(this).parents('#header').toggleClass('search-bar-active');
	        if (jquery('.search-bar-active').length > 0) {
	            jquery("#q").focus();
	        }
	    });

	    

	    jquery('.navbar-toggler').click(function () {
	        jquery(this).toggleClass('toggle-active');
	    });

	    jquery('.video-Controls .play-pause-btn').on('click', function () {
	        if (jquery(this).attr('data-click') == 1) {
	            jquery(this).attr('data-click', 0);
	            jquery(this).html('Play Video <span class="play-icon"><i class="fal fa-play-circle"></i></span>');
	            jquery('#banner-video video')[0].pause();
	        } else {
	            jquery(this).attr('data-click', 1);
	            jquery(this).html('Pause Video <span class="pause-icon"><i class="fal fa-pause"></i></span>');
	            jquery('#banner-video video')[0].play();
	        }
	    });

	    jquery('#header.main-header .navbar-toggler-icon').click(function () {
	        jquery('body').addClass('nav-slide');
	    });
	    jquery('#header.main-header .navbar-toggler-close-icon').click(function () {
	        jquery('body').removeClass('nav-slide');
	    });

	    // Sidebar Toggle
	    jquery('.sidebar-toggler').click(function () {
	        jquery(this).parents('.typography-pages-sec').toggleClass('active');
	    });

	    jquery('.card-link').click(function () {
	        jquery(this).parent().toggleClass('active');
	    });

	    jquery('.toggle-span').click(function () {
	        jquery(this).parent().toggleClass('activate');
	    });

	    // Skip button
	    jquery('.Skip-btn').focus(function () {
	        jquery(this).parent().addClass('active');
	    });
	    jquery('.Skip-btn').on('blur', function () {
	        jquery(this).parent().removeClass('active');
	    }).on('focus', function () {
	        jquery(this).parent().addClass('active');
	    });

	    // Navbar Sticky
	    if (!jquery(".accordion-button").length > 0) { //Check if page has accordions
	        var lastScrollTop = jquery(window).scrollTop();
	        jquery(window).scroll(function () {
	            var scroll = jquery(window).scrollTop();
	            if (scroll < lastScrollTop && scroll != 0 || jquery(".navbar-toggler").hasClass("toggle-active")) {
	                jquery(".sticky-header").addClass("active");
	            } else {
	                jquery(".sticky-header").removeClass("active");
	            }
	            lastScrollTop = scroll;
	        });

	    } else {
	        //Always show top nav when accordions are present
	        jquery(window).scroll(function () {
	            var scroll = jquery(window).scrollTop();
	            if (scroll > 250) {
	                jquery(".sticky-header").addClass("active");
	            } else {
	                jquery(".sticky-header").removeClass("active");
	            }

	        });
	    }

	    //Adding loading="lazy" to iframes
	    if (jquery(".video iframe").length > 0) {
	        jquery(".video iframe").prop('loading', 'lazy');
	        //A11y updates
	        jquery(".video iframe").prop('title', 'Video embed');
	        jquery(".video iframe").append('Loading...');
	    }

	    // Carousel Slide Numbers Js
	    var totalItems = jquery('.item').length;
	    var currentIndex = jquery('div.item.active').index() + 1;
	    var down_index;
	    jquery('.num').html('' + currentIndex + '/' + totalItems + '');

	    const carouselElement = document.querySelector('#hero-slider');
	    if (carouselElement != null) {
	        const carousel = new Carousel(carouselElement, {
	            interval: 12000,
	            touch: true,
	            hover: false,
	            keyboard: true
	        });
	        carousel.cycle();

	        carouselElement.addEventListener('slide.bs.carousel', event => {
	            console.log("attempting to transition to next slide");
	        });

	        jquery(".carousel-control-next").on('click', function () {
	            let currentIndex_active = jquery('div.item.active').index() + 2;
	            if (totalItems >= currentIndex_active) {
	                down_index = jquery('div.item.active').index() + 2;
	                jquery('.num').html('' + currentIndex_active + '/' + totalItems + '');
	            }
	        });

	        jquery(".carousel-control-prev").on('click', function () {
	            down_index = down_index - 1;
	            if (down_index >= 1) {
	                jquery('.num').html('' + down_index + '/' + totalItems + '');
	            }
	        });

	        // carousel controls
	        jquery('#carousel-button .carousel-controls').on('click', function () {
	            if (jquery(this).attr('data-click') == 1) {
	                jquery(this).attr('data-click', 0);
	                jquery(this).html('<button id="playButton" type="button" class="btn" aria-label="play" aria-label="Start automatic slide show"><i class="fas fa-play-circle" aria-hidden="true"></i></button>');
	                console.log("attempting to pause carousel");
	                carousel.pause();
	            } else {
	                jquery(this).attr('data-click', 1);
	                jquery(this).html('<button id="pauseButton" type="button" class="btn" aria-label="pause" aria-label="Stop automatic slide show"><i class="fas fa-pause-circle" aria-hidden="true"></i></button>');
	                console.log("attempting to restart carousel");
	                carousel.cycle();
	            }
	        });
	    }

	    // select box js
	    var $disabledResults = jquery(".js-example-disabled-results");
	    if ($disabledResults.length) {
	        $disabledResults.select2();
	    }

	    // Escape Key Js

	    jquery('body').keydown(function (e) {
	        if (e.keyCode == 27) {
	            jquery('#accordion .card-header').removeClass('active');
	            jquery('#accordion .card>div').removeClass('show');
	            jquery('#accordion .card>div').removeClass('open');
	            jquery('#accordion .card>div').removeClass('active');
	            jquery('body').removeClass('search-bar-active');
	            jquery('.navbar-collapse').removeClass('show');
	            jquery('.navbar-toggler').removeClass('toggle-active');
	            jquery('.category-list-wrapper .collapse').removeClass('show');
	            jquery('.category-list-wrapper>ul>li').removeClass('activate');
	        }
	    });

	    //BEGIN: YOUTUBE POPUP MAGNIFIC-POPUP
	    /// COMMENT: INITIALIZES POPUP FOR VIDEOS WITH .popupYoutube CLASS
	    if (jquery(".popupYoutube").length != 0) {
	        jquery(".popupYoutube").magnificPopup({
	            type: "iframe",
	            mainClass: "mfp-fade",
	            removalDelay: 160,
	            preloader: false,
	            fixedContentPos: false,
	        });
	    }
	    //END: YOUTUBE POPUP MAGNIFIC-POPUP

	    // YOUTUBE POPUP MAGNIFIC-POPUP
	    if (jquery(".popupYoutube").length > 0) {
	        jquery(".popupYoutube").magnificPopup({
	            //disableOn: 700,
	            type: "iframe",
	            mainClass: "mfp-fade",
	            removalDelay: 160,
	            preloader: false,
	            fixedContentPos: false,
	        });
	    }
	    // END YOUTUBE POPUP

	    // IMAGE GALLERY MAGNIFIC-POPUP
	    if (jquery(".popup-gallery").length > 0) {
	        jquery(".popup-gallery").magnificPopup({
	            type: "image",
	            gallery: {
	                enabled: true,
	                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
	                tPrev: "Previous (Left arrow key)", // title for left button
	                tNext: "Next (Right arrow key)", // title for right button
	            },
	            image: {
	                titleSrc: function (item) {
	                    return (
	                        "<strong>" +
	                        item.el.attr("title") +
	                        "</strong><br>" +
	                        item.el.attr("data-caption")
	                    );
	                },
	            },
	        });
	    }
	    // END IMAGE GALLERY MAGNIFIC-POPUP

	    //Start Directory Form info
	    // Prevent Submit
	    if(document.getElementById("form-search")){
	        var preventFormSubmit = function(event) {
	            event.preventDefault();
	            
	            const name = document.getElementById("search-directory").value;
	            let queryString="?";
	            
	            if(name!==null){
	                queryString=queryString + "name=" + name + "&";
	            }
	            
	            const directory = document.getElementById("filter-discipline").value;
	            
	            if(directory){
	                queryString=queryString + "directory=" + directory;
	            }
	            
	            // console.log(queryString);
	            window.location = document.getElementById("form-search").action + queryString;
	            
	        };
	    
	        // attach event listener for form submissions
	        document.getElementById("form-search").addEventListener("submit", preventFormSubmit);
	    }
	    //End directory form     
	});


	jquery(document).ready(function () {
	    // BEGIN: BACK TO TOP LINK
	    if(jquery("#top-link")){
	        jquery("#top-link").show().hide();
	        // COMMENT: ADDS SCROLL FUNCTIONALITY TO #top-link ELEMENTS BACK TO TOP BUTTON/LINK
	        jquery(window).scroll(function () {
	            if (jquery(this).scrollTop() > 100) {
	            jquery("#top-link").fadeIn();
	            } else {
	            jquery("#top-link").fadeOut();
	            }
	        });
	        jquery("#top-link").click(function () {
	            jquery("html, body").animate(
	            {
	                scrollTop: 0,
	            },
	            0
	            );
	            return false;
	        });
	    }
	    // END: BACK TO TOP LINK
	});

	// // Code Snippet Js
	// function copyText(element) {
	//     var $copyText = document.getElementById(element).innerText;
	//     var button = document.getElementById(element + '-button');
	//     navigator.clipboard.writeText($copyText).then(function () {
	//         var originalText = button.innerText;
	//         button.innerText = 'Copied!';
	//         setTimeout(function () {
	//             button.innerText = originalText;
	//         }, 750);
	//     }, function () {
	//         button.style.cssText = "background-color: var(--red);";
	//         button.innerText = 'Error';
	//     });
	// }
	// //End Code Snippet Js

	return collegeDlsUmd;

}));
