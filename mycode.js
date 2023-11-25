function ChangeImg( parameter){
    var element = parameter.target;
    var tmpImg = parameter.target.src;
    element.src = element.getAttribute('changeImg');
    element.setAttribute('changeImg',tmpImg);
}