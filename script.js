// Тек барлық элементтер жүктелгеннен кейін ғана код іске қосылады
document.addEventListener('DOMContentLoaded', function() {
    // Модальді терезе жұмысын қосу
    var modal = document.getElementById("myModal");
    var images = document.querySelectorAll(".open-modal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    // Модальды терезені көрсету
    images.forEach(function(image) {
        image.onclick = function() {
            modal.style.display = "flex"; // Модальды терезе көрсетіледі
            modalImg.src = this.src; // Сурет модальға салынады
            captionText.innerHTML = this.alt; // Суреттің alt мәтіні
            sessionStorage.setItem("modalOpen", "true"); // Модальдің ашық күйін сақтау
        };
    });

    // Модальді терезені жабу үшін крестке басу
    span.onclick = function() {
        modal.style.display = "none"; // Модальды терезе жабылады
        sessionStorage.setItem("modalOpen", "false"); // Модальдің жабық күйін сақтау
    };

    // Бет жаңартылғанда модальды терезе ашылмауы үшін
    window.onload = function() {
        if (sessionStorage.getItem("modalOpen") === "true") {
            modal.style.display = "flex"; // Егер модаль ашық болса, ашық күйде қалдыру
        } else {
            modal.style.display = "none"; // Жабық күйде басталады
        }
    };

    // Батырма басылғанда 2ГИС картасын ашу
    document.querySelector('.show-2gis-btn').addEventListener('click', function() {
        // Адрес Бокейханова 19А
        var address = 'Бокейханова 19А, Алматы';
        var mapUrl = 'https://2gis.kz/almaty/search/' + encodeURIComponent(address); // 2ГИС іздеу сілтемесі
        
        // Сілтемені жаңа терезеде ашу
        window.open(mapUrl, '_blank'); // Сілтемені жаңа терезеде ашу
    });
});
document.querySelector('.whatsapp').addEventListener('click', function() {
    var phoneNumber = '87788745750'; // WhatsApp нөмірі
    var message = 'Здравствуйте, я хотел(а) заказать шар'; // Хабарлама мәтіні
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Сілтемені жаңа терезеде ашу
    window.open(whatsappLink, '_blank'); // WhatsApp чат ашылады
});
