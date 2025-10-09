function load_nav(){
    document.getElementById("header").innerHTML = 
    `<div class="flex container">
        <a href="index.html"><img class="header_logo" src="images/pong_banner-logo_v1.webp"></a>
        <nav>
            <ul class="flex">
                <a href="about.html"><li class="header_button">About</li></a>
                <a href="sponsors.html"><li class="header_button">Sponsors</li></a>
                <a href="lan.html"><li class="header_button">LAN</li></a>
                <a href="info.html"><li class="header_button">Events/Info</li></a>
            </ul>
        </nav>
    </div> `;
}