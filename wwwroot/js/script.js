    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menu = item.querySelector('.dropdown-menu');
            const toggle = item.querySelector('.dropdown-toggle');
            menu.classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
        });
        item.addEventListener('mouseleave', () => {
            const menu = item.querySelector('.dropdown-menu');
            const toggle = item.querySelector('.dropdown-toggle');
            menu.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });


    const popularSearches = [
        'Finans Uzmanı',
        'Dijital Pazarlama Uzmanı',
        'Yazılım Geliştirme Uzmanı',
        'Proje Yöneticisi',
        'İK Uzmanı'
    ];

    const popularCities = [
        'İstanbul (Avrupa)',
        'İstanbul (Asya)',
        'Ankara',
        'İzmir',
        'Bursa',
        'İstanbul'
    ];

    const popularSearchesContainer = document.getElementById('popularSearches');
    popularSearches.forEach(search => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'tag';
        link.textContent = search;
        popularSearchesContainer.appendChild(link);
    });

    // Populate popular cities
    const popularCitiesContainer = document.getElementById('popularCities');
    popularCities.forEach(city => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'tag';
        link.textContent = city;
        popularCitiesContainer.appendChild(link);
    });


    document.getElementById("devaminiOkuBtn").addEventListener("click", function () {
        const metinTamami = document.getElementById("metinTamami");
        const metinKisaltma = document.getElementById("metinKisaltma");
        const buton = document.getElementById("devaminiOkuBtn");
    
        if (metinTamami.classList.contains("d-none")) {
            metinTamami.classList.remove("d-none");
            metinKisaltma.classList.add("d-none");
            buton.textContent = "Kısalt";
        } else {
            metinTamami.classList.add("d-none");
            metinKisaltma.classList.remove("d-none");
            buton.textContent = "Devamını Oku";
        }
    });

    document.getElementById("devaminiOkuBtn-card").addEventListener("click", function () {
        const metinTamami = document.getElementById("metinTamami-card");
        const metinKisaltma = document.getElementById("metinKisaltma-card");
        const buton = document.getElementById("devaminiOkuBtn-card");
    
        if (metinTamami.classList.contains("d-none")) {
            metinTamami.classList.remove("d-none");
            metinKisaltma.classList.add("d-none");
            buton.textContent = "Kısalt";
        } else {
            metinTamami.classList.add("d-none");
            metinKisaltma.classList.remove("d-none");
            buton.textContent = "Devamını Oku";
        }
    });

    

    $(document).ready(function() {
        // Başlıklar tıklanabilir olacak
        $('.footer-column h4').click(function() {
            // Bu başlık altında bulunan menüye "open" sınıfını ekle
            var $this = $(this).parent();
    
            // Eğer bu başlık zaten açık ise, kapat
            if ($this.hasClass('open')) {
                $this.removeClass('open');
            } else {
                // Diğer başlıklardan "open" sınıfını kaldır
                $('.footer-column').removeClass('open');
                // Bu başlığa "open" sınıfını ekle
                $this.addClass('open');
            }
        });
    });
    