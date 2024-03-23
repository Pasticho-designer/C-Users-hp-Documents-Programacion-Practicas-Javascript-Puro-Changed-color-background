var index = 0;

function changedColors() {
     var colors = [ "brown","red","orange","yellow","green","blue","purple","pink"];

    document.getElementsByTagName("body")[0].
    style.backgroundColor = colors[index++];

    if (index > colors.length -1) 
        index = 0;
}
