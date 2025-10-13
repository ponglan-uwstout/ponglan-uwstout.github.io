function load_nav(level = ""){
    document.getElementById("header").innerHTML = 
    `<div class="flex container">
        <a href="` + level + `index.html"><img class="header_logo" src="` + level + `images/pong_banner-logo_v1.webp"></a>
        <nav>
            <ul class="flex">
                <a href="` + level + `about.html"><li class="header_button">About</li></a>
                <a href="` + level + `sponsors.html"><li class="header_button">Sponsors</li></a>
                <a href="` + level + `lan.html"><li class="header_button">LAN</li></a>
                <a href="` + level + `info.html"><li class="header_button">Events/Info</li></a>
            </ul>
        </nav>
    </div> `;
}