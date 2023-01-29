(function(window, undefined) {
  var dictionary = {
    "1676b0cd-e42e-4fb7-9d02-6e579ceae931": "Eat Local",
    "42d1b441-293d-4c8d-adc2-7f62b5d76890": "Book Now",
    "bbceeff9-2e97-4839-a733-7c6a7d63e315": "FAQ",
    "c2f647b5-7e56-4e68-8626-459b9e2409e9": "Entertainment",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing Page",
    "2cf276e3-f49a-40c9-8f43-ea6bc65b7867": "Lodging",
    "6f85d252-7228-4781-89dc-0df96eb1a29d": "Transportation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);