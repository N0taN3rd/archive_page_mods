/**
 * @desc
 * Override attribute using getters and setters
 * @example
 * var orig_getter = get_orig_getter(obj, attr);
 * var orig_setter = get_orig_setter(obj, attr);
 *  var setter = function(orig) {
 *    var val = rewrite_url(orig, false, mod);
 *    if (orig_setter) {
 *      return orig_setter.call(this, val);
 *    } else if (default_to_setget) {
 *      return wb_setAttribute.call(this, attr, val);
 *    }
 *  }
 *  var getter = function() {
 *       var res = undefined;
 *      if (orig_getter) {
 *        res = orig_getter.call(this);
 *     } else if (default_to_setget) {
 *      res = wb_getAttribute.call(this, attr);
 *    }
 *    res = extract_orig(res);
 *       return res;
 *     }
 *  def_prop(obj, attr, setter, getter);
 */
function override_attr (obj, attr, mod, default_to_setget) {}

/**
 * @desc more fun times for url rewriting
 * {@link make_parser}
 * {@link def_prop}
 * @param loc_obj
 * @param orig_setter
 * @param orig_getter
 */
function init_loc_override(loc_obj, orig_setter, orig_getter) {}

/**
* @example
* if (!$wbwindow.DOMParser ||
*   !elemtype ||
*   !elemtype.prototype) {
*   return;
* }
*
* var obj = elemtype.prototype;
*
* var orig_getter = get_orig_getter(obj, prop);
* var orig_setter = get_orig_setter(obj, prop);
*
* if (!orig_setter) {
*   return;
* }
*
* var setter = function(orig) {
*   var res = orig;
*   if (!this._no_rewrite) {
*     //init_iframe_insert_obs(this);
*     if (this.tagName == "STYLE") {
*       res = rewrite_style(orig);
*     } else {
*       res = rewrite_html(orig);
*     }
*   }
*   orig_setter.call(this, res);
* }
*
* def_prop(obj, prop, setter, orig_getter);
*/
function override_html_assign(elemtype, prop) {}

/**
 * @desc rewrite urls of the elements
 * @param elem
 * @param name
 * @param abs_url_only
 */
function rewrite_attr(elem, name, abs_url_only) {}

/**
 * @desc
 * {@link rewrite_attr}
 * @example
 * if (!elem) {
 *   return;
 * }
 *
 * var changed;
 *
 * if (elem.tagName == "STYLE") {
 *   var new_content = rewrite_style(elem.textContent);
 *   if (elem.textContent != new_content) {
 *     elem.textContent = new_content;
 *     changed = true;
 *   }
 * } else if (elem.tagName == "OBJECT") {
 *   changed = rewrite_attr(elem, "data", true);
 * } else if (elem.tagName == "FORM") {
 *   changed = rewrite_attr(elem, "action", true);
 * } else if (elem.tagName == "INPUT") {
 *   changed = rewrite_attr(elem, "value", true);
 * } else if (elem.tagName == "IFRAME" || elem.tagName == "FRAME") {
 *   changed = rewrite_frame_src(elem, "src");
 * } else {
 *   changed = rewrite_attr(elem, "src");
 *   changed = rewrite_attr(elem, "srcset") || changed;
 *   changed = rewrite_attr(elem, "href") || changed;
 *   changed = rewrite_attr(elem, "style") || changed;
 *   changed = rewrite_attr(elem, "poster") || changed;
 * }
 *
 * if (elem.getAttribute) {
 *   if (elem.getAttribute("crossorigin")) {
 *     elem.removeAttribute("crossorigin");
 *     changed = true;
 *   }
 *
 *   if (elem.getAttribute("integrity")) {
 *     elem.removeAttribute("integrity");
 *     changed = true;
 *   }
 * }
 *
 * return changed;
 *
 */
function rewrite_elem (elem) {}

/**
 * @desc
 * {@link rewrite_elem}
 * @example
 * if (!string) {
 *   return string;
 * }
 *
 * if (write_buff) {
 *   string = write_buff + string;
 *   write_buff = "";
 * }
 * var inner_doc = new DOMParser().parseFromString(string, "text/html");
 *
 * if (!inner_doc) {
 *   return string;
 * }
 *
 * string = string.toString();
 *
 * var changed = false;
 *
 * for (var i = 0; i < inner_doc.all.length; i++) {
 *   changed = rewrite_elem(inner_doc.all[i]) || changed;
 * }
 *
 * if (!changed) {
 *   return string;
 * }
 *
 * var new_html = "";
 *
 * // if original had <html> tag, add full document HTML
 * if (string && string.indexOf("<html") >= 0) {
 *   new_html = inner_doc.documentElement.outerHTML;
 * } else {
 *   // otherwise, just add contents of head and body
 *   new_html = inner_doc.head.innerHTML;
 *   new_html += inner_doc.body.innerHTML;
 *
 *   if (check_end_tag) {
 *     if (inner_doc.all.length > 3) {
 *       var end_tag = "</" + inner_doc.all[3].tagName.toLowerCase() + ">";
 *       if (ends_with(new_html, end_tag) && !ends_with(string, end_tag)) {
 *         new_html = new_html.substring(0, new_html.length - end_tag.length);
 *       }
 *     } else if (string[0] != "<" || string[string.length - 1] != ">") {
 *       write_buff += string;
 *       return;
 *     }
 *   }
 * }
 *
 * return new_html;
 */
function rewrite_html (string, check_end_tag) {}

/**
 * @example
 * //imp
 * if (!src || src == "" || src == "about:blank" || src.indexOf("javascript:") >= 0) {
 *   win._WBWombat = wombat_internal(win);
 *   win._wb_wombat = new win._WBWombat(wb_info);
 * } else {
 *   // These should get overriden when content is loaded, but just in case...
 *   //win._WB_wombat_location = win.location;
 *   //win.document.WB_wombat_location = win.document.location;
 *   //win._WB_wombat_top = $wbwindow.WB_wombat_top;
 *
 *   init_proto_pm_origin(win);
 *   //init_postmessage_override(win);
 * }
 *
 * @param win
 * @param src
 */
function init_new_window_wombat (win, src) {}

/**
 * @desc
 *  setup iframe for either captured pages or replay iframe
 * {@link init_new_window_wombat}
 * @example
 * // imp
 * var win;
 *
 * if (iframe._get_contentWindow) {
 *    win = iframe._get_contentWindow.call(iframe);
 *  } else {
 *    win = iframe.contentWindow;
 *  }
 *
 * try {
 *    if (!win || win == $wbwindow || win._skip_wombat || win._wb_wombat) {
 *      return;
 *    }
 *  } catch (e) {
 *   return;
 * }
 *
 * //var src = iframe.src;
 * var src = wb_getAttribute.call(iframe, "src");
 *
 * init_new_window_wombat(win, src);
 */
function init_iframe_wombat (iframe) {}

/**
 * @desc
 * replace dom function with own
 * {@link init_iframe_wombat}
 * @example
 * //imp
 * var orig = $wbwindow.Node.prototype[funcname];
 *
 * $wbwindow.Node.prototype[funcname] = function() {
 *   var child = arguments[0];
 *
 *   if (child) {
 *
 *     if (child instanceof $wbwindow.Element) {
 *       rewrite_elem(child);
 *     } else if (child instanceof $wbwindow.Text) {
 *       if (this.tagName == "STYLE") {
 *         child.textContent = rewrite_style(child.textContent);
 *       }
 *     }
 *
 *     // if fragment, rewrite children before adding
 *     //if (child instanceof DocumentFragment) {
 *     //   rewrite_children(child);
 *     //}
 *   }
 *
 *   var created = orig.apply(this, arguments);
 *
 *   if (created && created.tagName == "IFRAME") {
 *     init_iframe_wombat(created);
 *   }
 *
 *   return created;
 * }
 * @param funcname
 */
function replace_dom_func (funcname) {}

/**
 * @desc
 * if proxy mode no extraction
 * else if href contains ignored prefixes ["#", "about:", "data:", "mailto:", "javascript:", "{", "*"] ignore
 * else remove wb url part and return original
 * @param href
 * @return {string} original href
 */
function extract_orig (href) {}

/**
* {@link override_attr}
* @example
* var do_init_forms = function() {
*   for (var i = 0; i < $wbwindow.document.forms.length; i++) {
*     var new_action = rewrite_url($wbwindow.document.forms[i].action);
*     if (new_action != $wbwindow.document.forms[i].action) {
*       $wbwindow.document.forms[i].action = new_action;
*     }
*     override_attr($wbwindow.document.forms[i], "action", "", true);
*   }
* }
*
* if (document.readyState == "loading") {
*   document.addEventListener("DOMContentLoaded", do_init_forms);
* } else {
*   do_init_forms();
* }
*/
function init_form_overrides($wbwindow) {}

/**
 * @desc
 *  create an a tag in top frame(not replay iframe)
 *  and use the tag to parse href after {@link extract_orig}
 *  special case: for newly opened blank windows, use the opener
 *     to create parser to have the proper baseURI
 * @param href
 * @returns {Element}
 */
function make_parser (href) {}

/**
 * @example
 * str.indexOf("www.") == 0 -> true
 *
 * @example
 * // hostname:port (port required)
 * str.match(/^[\w-]+(\.[\w-_]+)+(:\d+)(\/|$)/) and match len < 64 -> true
 *
 * @example
 * // ip:port
 * str.match(/^\d+\.\d+\.\d+\.\d+(:\d+)?(\/|$)/) and match len < 64 -> true
 *
 * @param {string} str
 * @returns {boolean} if is host url
 */
function is_host_url (str) {}

/**
 * @desc Override a DOM property
 * @param {Object} obj  the object to define custom prop of
 * @param {String} prop the prop to be overridden
 * @param {function} set_func own setter function
 * @param {function} get_func own getter function
 * @param {boolean} enumerable is enumerable
 * @return {boolean|undefined} if override was successful or not
 */
function def_prop (obj, prop, set_func, get_func, enumerable) {}

/**
 *
 * @desc
 * override window.fetch
 * rewrite url and call original
 */
function fetch (input, init) {}

class WombatLocation {
  /**
   * @desc override the win.location
   * @param {Object} orig_loc
   * @link WombatLocation.init_loc_override
   */
  constructor (orig_loc) {}

  /**
   * @desc
   * override getters and setters for
   * ["href", "hash", "pathname", "host", "hostname", "protocol", "origin", "search", "port"]
   * @link WombatLocation.make_get_loc_prop
   * @link WombatLocation.make_set_loc_prop
   */
  init_loc_override (loc_obj, orig_setter, orig_getter) {}

  /**
   * @desc
   * call original if no rewrite else
   *
   * call original and if prop is href return extract origin
   * if self.original_href != the current href set_loc to new href
   * else value = this["_" + prop] return value;
   *
   * @param prop
   */
  make_get_loc_prop (prop) {}

  /**
   * @desc
   * call original if no rewrite else
   * this["_" + prop] = value;
   * get original value
   * if self.original_href != the current href set_loc to new href
   * else
   * value = this["_" + prop] return value;
   * check for Special case for href="." assignment
   * rewrite and update globals if changes actual location and call original setter
   * @param prop
   */
  make_set_loc_prop (prop) {}

  /**
   * @example
   * // the imp
   * var new_url = rewrite_url(url);
   *  var orig = extract_orig(new_url);
   * if (orig == this.href) {
   *       return orig;
   * }
   * return this._orig_loc.replace(new_url);
   * @param {string} url
   */
  replace (url) {}

  /**
   * @example
   * // the imp
   * var new_url = rewrite_url(url);
   * var orig = extract_orig(new_url);
   * if (orig == this.href) {
   *       return orig;
   * }
   * return this._orig_loc.assign(new_url);
   * @param {string} url
   */
  assign (url) {}

  reload (url) {}

  /**
   * @desc get a prop from original window.loc
   * @param prop
   */
  orig_getter (prop) {}

  /**
   * @desc set a prop from original window.loc
   * @param prop
   */
  orig_setter (prop) {}
}

class Math {
  constructor () {
    /**
     * @desc pywb determined number
     * @type {number}
     */
    this.seed = 123;
  }

  /**
   * @link Math.seeded_random
   */
  random () {}

  /**
   * @example
   * // imp
   *  $wbwindow.Math.seed = ($wbwindow.Math.seed * 9301 + 49297) % 233280;
   *  return $wbwindow.Math.seed / 233280;
   */
  seeded_random () {}
}

class Crypto {
  /**
   * uses {@link Math.random}
   * @param array
   */
  getRandomValues (array) {}
}

class History {
  /**
   * @link History.override_history_func
   */
  pushState () {}

  /**
   * @link History.override_history_func
   */
  replaceState () {}

  /**
   * @link History.override_history_nav
   */
  go () {}

  /**
   * @link History.override_history_nav
   */
  back () {}

  /**
   * @link History.override_history_nav
   */
  forward () {}

  /**
   * @desc
   * rewrite url and house keeping with communication with top frame
   */
  override_history_func () {}

  /**
   * @desc
   * rewrite url and house keeping with communication with top frame
   * minute diff with other method
   */
  override_history_nav () {}

}

class XMLHttpRequest {
  /**
   * @desc
   * rewrite url if rewrite enabled
   * call original check if url starts with data:
   * if does set 'X-Pywb-Requested-With', 'XMLHttpRequest'
   */
  open (method, url, async, user, password) {}
}

class HTMLBaseElement {
  /**
   * @desc
   * call original and if name name is href rewrite
   * @param {string} name
   */
  getAttribute (name) {}

  /**
   * call {@link HTMLBaseElement.getAttribute}
   * {@link def_prop}
   */
  get href () {}
}

class Node {
  /**
   * @desc returns the absolute base URL of a node
   * override it with own getter who call original and {@link extract_orig}
   * {@link def_prop}
   */
  get baseURI () {}

  /**
   * @desc
   * {@link replace_dom_func}
   */
  appendChild () {}

  /**
   * @desc
   * {@link replace_dom_func}
   */
  inertBefore () {}

  /**
   * @desc
   * {@link replace_dom_func}
   */
  replaceChild () {}
}

class Element {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
   * @desc
   * rewrite ["src", "href", "poster"] attributes
   * if script then add js_ to url
   * if style and if value is string rewrite value urls
   * call original
   */
  setAttribute () {}

  /**
   * @desc
   * call original
   * if ["src", "href", "poster"] attributes
   * or attributes who start with data- or http://, https://, //
   * extract origin from original call results
   * return value
   */
  getAttribute () {}
}

class HTMLElement {
  /**
   * {@link override_html_assign}
   */
  get innerHTML (){}
}

class document {
  /**
   * @desc
   * if form override action {@link override_attr}
   * if no rewrite add _no_rewrite = true to object property
   * return new element
   */
  createElement () {}

  /**
   * @desc
   * Creates an element with the specified namespace URI and qualified name
   * extract origin {@link extract_orig} from namespaceURI call
   * return call to original method using extracted origin
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
   */
  createElementNS () {}

  /**
   * {@link rewrite_html}
   * @param string
   */
  write (string) {}

  /**
   * {@link rewrite_html}
   * @param string
   */
  writeln (string) {}
}

class Date {
  /**
   * @desc
   * Override to create Date object using time of capture
   */
  constructor () {}

  /**
   * @desc
   * Override to use original (not time of capture)
   */
  UTC () {}

  /**
   * @desc
   * Override to use original (not time of capture)
   */
  parse () {}

  /**
   * @desc
   * Override to time of capture
   */
  now () {}
}

/**
 * @desc
 * Disabled
 */
class Worker {
}

class HTMLScriptElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class HTMLIFrameElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class HTMLStyleElement {
  /**
   * {@link override_html_assign}
   */
  get textContent () {}

  /**
   * {@link override_html_assign}
   */
  set textContent (arg) {}
}

class HTMLSourceElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get srcset () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set srcset (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}

  /**
   * {@link rewrite_html}
   */
  get insertAdjacentHTML () {}

  /**
   * {@link rewrite_html}
   */
  set insertAdjacentHTML (arg) {}
}

class CSSStyleDeclaration {
  /**
   * @desc
   * see {@link override_attr}
   */
  get listStyle () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set listStyle (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get borderImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set borderImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get backgroundImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set backgroundImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get cssText () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set cssText (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get listStyleImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set listStyleImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get border () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set border (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get borderImageSource () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set borderImageSource (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get background () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set background (args) {}
}

class HTMLEmbedElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class HTMLImageElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class HTMLVideoElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get poster () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set poster (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class CSSStyleSheet {
  /**
   * @desc
   * see {@link override_attr}
   */
  get href () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set href (args) {}
}

class HTMLObjectElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get data () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set data (args) {}
}

class HTMLAudioElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get poster () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set poster (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class CSS2Properties {
  /**
   * @desc
   * see {@link override_attr}
   */
  get listStyle () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set listStyle (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get borderImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set borderImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get backgroundImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set backgroundImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get cssText () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set cssText (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get listStyleImage () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set listStyleImage (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get border () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set border (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get borderImageSource () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set borderImageSource (args) {}

  /**
   * @desc
   * see {@link override_attr}
   */
  get background () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set background (args) {}
}

class HTMLInputElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get src () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set src (args) {}
}

class HTMLLinkElement {
  /**
   * @desc
   * see {@link override_attr}
   */
  get href () {}

  /**
   * @desc
   * see {@link override_attr}
   */
  set href (args) {}
}

/**
 * @desc
 * keep a copy of the original element get/set properties in back pocket
 * {@link init_loc_override}
 *
 */
class HTMLAnchorElement {

}

