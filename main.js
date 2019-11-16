window.onload = load();
// On load, load self,

function load(){
    document.getElementById('self').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('sendMessage').style.display = "none";
};

//NAV ITEMS
var myProjects = function(){
    document.getElementById('navWork').addEventListener('click', function(){
        document.getElementById('projects').style.display = "block";
        document.getElementById('self').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('sendMessage').style.display = "none";
    });
}

myProjects();

//when message icon is clicked, hide it, and show contact
var sendMessage = function(){
    document.getElementById('sendEmail').addEventListener('click', function(){
        document.getElementById('projects').style.display = "none";
        document.getElementById('self').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('sendMessage').style.display = "block";
        document.getElementById('sendEmail').style.display = "none";
    });
}
sendMessage();

var aboutMe = function(){
    document.getElementById('navAbout').addEventListener('click', function(){
        document.getElementById('projects').style.display = "none";
        document.getElementById('self').style.display = "none";
        document.getElementById('about').style.display = "block";
        document.getElementById('sendMessage').style.display = "none";
        document.getElementById('sendEmail').style.display = "block";
    });
}
aboutMe();

var contactMe = function(){
    document.getElementById('navContact').addEventListener('click', function(){
        document.getElementById('projects').style.display = "none";
        document.getElementById('self').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('sendMessage').style.display = "block";
        document.getElementById('sendEmail').style.display = "none";
    });
}
contactMe();