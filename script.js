function showHome() {
    document.getElementById('content').innerHTML = `
        <section class="hero">
            <div class="container">
                <h2>Sağlıkta Teknoloji Öncüsü</h2>
                <p>Sisoft, sağlık sektörüne yönelik yenilikçi çözümler sunmaktadır. Hasta deneyimini iyileştirmek için teknolojiyi kullanıyoruz.</p>
            </div>
        </section>
    `;
}

function showAbout() {
    document.getElementById('content').innerHTML = `
        <section class="about">
            <div class="container">
                <h2>Hakkımızda</h2>
                <p>Sisoft, sağlık teknolojileri alanında faaliyet gösteren öncü bir şirkettir. Misyonumuz, sağlık hizmetlerini daha erişilebilir ve etkili hale getirmektir.</p>
            </div>
        </section>
    `;
}

function showServices() {
    document.getElementById('content').innerHTML = `
        <section class="services">
            <div class="container">
                <h2>Hizmetlerimiz</h2>
                <ul>
                    <li>Doktor randevu sistemleri</li>
                    <li>Hasta takip yazılımları</li>
                    <li>Sağlık veri analizi</li>
                    <li>Telemedicine çözümleri</li>
                </ul>
            </div>
        </section>
    `;
}

function showContact() {
    document.getElementById('content').innerHTML = `
        <section class="contact">
            <div class="container">
                <h2>İletişim</h2>
                <p>Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
                <ul>
                    <li>Telefon: 123-456-7890</li>
                    <li>E-posta: info@sisoft.com.tr</li>
                </ul>
            </div>
        </section>
    `;
}

function showLogin() {
    document.getElementById('content').innerHTML = `
        <section class="login">
            <div class="container">
                <div class="login-form">
                    <h2>Giriş Yap</h2>
                    <form onsubmit="return login(event)">
                        <label for="username">Kullanıcı Adı:</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Şifre:</label>
                        <input type="password" id="password" name="password" required>
                        <button type="submit">Giriş Yap</button>
                    </form>
                    <p>Şifrenizi unuttuysanız, <a href="#">buraya tıklayarak</a> şifrenizi sıfırlayabilirsiniz.</p>
                </div>
            </div>
        </section>
    `;
}

function login(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'simo' && password === 'babamrb') {
        // Kullanıcı bilgilerini localStorage ve sessionStorage'da sakla
        localStorage.setItem('username', username);
        localStorage.setItem('password ', password);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);

        // Şifreyi konsola yazdır
        console.log('Şifre: ' + password);

        alert('Giriş başarılı! Şimdi yönlendiriliyorsunuz...');
        // Belirtilen siteyi yeni sekmede aç
        window.open('https://sisoft.com.tr/tr/', '_blank');
    } else {
        alert('Geçersiz kullanıcı adı veya şifre.');
    }
}

// Sayfa yüklendiğinde localStorage'dan veya sessionStorage'dan kullanıcı adını al ve göster
document.addEventListener('DOMContentLoaded', (event) => {
    var storedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedUsername) {
        alert('Hoşgeldiniz, ' + storedUsername + '!');
        showHome();
    }
});