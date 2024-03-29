const load = document.getElementById("loader")

window.addEventListener("load", function () {
    load.style.transform = "translateY(-100%)";
    console.log("Chargée");
})

const aPropos = document.querySelector(".l1")
const accueil = document.querySelector(".l2")
const contact = document.querySelector(".l3")
const title = document.querySelector(".title")

accueil.addEventListener("click", (e) => {
    e.preventDefault();
    load.style.transform = "translateY(0%)"
    setTimeout(() => {
        document.location.href = "index.html"
    }, 1000);

})

aPropos.addEventListener("click", (e) => {
    e.preventDefault();
    load.style.transform = "translateY(0%)"
    setTimeout(() => {
        document.location.href = "about.html"
    }, 1000);

})
contact.addEventListener("click", (e) => {
    e.preventDefault();
    load.style.transform = "translateY(0%)"
    setTimeout(() => {
        document.location.href = "contact.html"
    }, 1000);

})

title.addEventListener("click", (e) => {
    e.preventDefault();
    load.style.transform = "translateY(0%)"
    setTimeout(() => {
        document.location.href = "index.html"
    }, 1000);

})




var nav = document.querySelector("#header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.514)";
    } else {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

})



try {
    window.onload = () => {
        window.sr = new ScrollReveal();

        sr.reveal(".skll", {
            scale: 0.8,
            origin: "top",
            distance: "50px",
            reset: true,
            duration: 1000,
            interval: 100
        })

        sr.reveal(".box", {
            delay: 200,
            origin: "left",
            distance: "100px",
            reset: true,
            duration: 1000
        })

        sr.reveal(".myCs", {
            scale: 0.3,
            delay: 300,
            origin: "right",
            distance: "100px",
            reset: true,
            duration: 1000
        })


    }

} catch (error) {
    console.log();

}

const contactForm = document.querySelector("#contact")
let send = false
 
try {

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (send == true ) {
            return;
        }
        send = true;

        let data = new FormData(contactForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.response)
                
                const res = this.response;

                if (res.succes) {
                    
                    // alert(res.msg)
                    contactForm.reset();
                    // contactForm.style.marginTop = "100px";
                    document.createElement("p").setAttribute("id", "succes");
                    document.querySelector("#succes").style.display = "block";
                    document.querySelector("#succes").style.opacity = "1";      
                    // return false;

                    setTimeout(() => {
                        document.location.href = "index.html";
                    }, 6000);
                    setTimeout(() => {
                        load.style.transform = "translateY(0%)";
                    }, 5000);
                    document.querySelector("#error").style.display = "none";
                } else {
                    send = false;
                    // contactForm.style.marginTop = "100px";
                    document.querySelector("#error").style.display = "block";
                    document.querySelector("#error").textContent = res.msg;
                    document.querySelector("#succes").style.display = "none";
                    // alert(res.msg);
                }
            } else if (this.readyState == 4) {
                alert("Une erreur est survenu (404 not found)");
                return false;
            }
        };

        xhr.open("POST", "async/script.php", true);
        xhr.responseType = "json";
        try {
            xhr.send(data);
        } catch (error) {
            setTimeout(xhr.send(data), 1000)
            console.log("Error : (send data)");
        }

        return false;

    })

} catch (error) {
    console.log(error);

}


