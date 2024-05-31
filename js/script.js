function setAttributeFromObject(element, obj){
    for (const key in obj) {
        element.setAttribute(key,obj[key]);
   }
   return element;
}

function createMyElement(elem){
    return document.createElement(elem);
}

var link = createMyElement("link");
var script = createMyElement('script');

var myObject = {
    'rel':'stylesheet',
    'href': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
};

var myScriptObject = {
    'src' : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
}



var link = setAttributeFromObject(link, myObject)
var s = setAttributeFromObject(script,myScriptObject)

// var myArr = Array.from(myObject);

// link.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css')
// link.setAttribute('rel','stylesheet')

function appendToHead(elem){
    document.head.append(elem);
}

appendToHead(link);
appendToHead(s);

var h = createMyElement('header');

var headerTop = createMyElement('div');
var headerTopInner = createMyElement('div')

headerTopInner.setAttribute('class','container')

headerTop.append(headerTopInner)
var headerBottom = createMyElement('div');

var headerBottomInner = createMyElement('div');
headerBottomInner = setAttributeFromObject(headerBottomInner, {"class":"container"});
headerBottom.appendChild(headerBottomInner);

headerTop = setAttributeFromObject(headerTop, {"class":"s_headertop"});
headerBottom = setAttributeFromObject(headerBottom, {"class":"s_headerbottom"});

// headerTop.classList.add('container')
// headerBottom.classList.add('container')

h = setAttributeFromObject(h,{ 'class':'s_header'})
h.appendChild(headerTop)
h.appendChild(headerBottom)

document.body.append(h);

function select(selector){
    return document.querySelector(selector);
}

select('.s_header').style.border = '1px dashed #000';

select('.s_headertop').style.height = '58px';
select('.s_headertop').style.border = '1px dashed blue';
select('.s_headertop').style.background = '#2874f0';

select('.s_headerbottom').style.height = '111px';
select('.s_headerbottom').style.border = '1px dashed green';
select('.s_headerbottom').style.background = '#fff';

select('.s_headertop > div.container').style.border = '1px dashed red';
select('.s_headertop > div.container').style.height = '100%';

select('.s_headerbottom > div.container').style.border = '1px dashed blue';
select('.s_headerbottom > div.container').style.height = '100%';