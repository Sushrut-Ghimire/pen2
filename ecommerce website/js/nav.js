const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
                <a href="#"><img src="img/logo.jpg" class="brand-logo" alt="logo"></a>
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">Search</button>
                        <a href="#"><img src="img/user.jpg" alt="user"></a>
                        <a href="#"><img src="img/cart.jpg" alt="cart"></a>
                    </div>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="index.html" class="link">home</a></li>
                <li class="link-item"><a href="search.html" class="link">Formal</a></li>
                <li class="link-item"><a href="search.html" class="link">Casual</a></li>
                <li class="link-item"><a href="search.html" class="link">Specials</a></li>
                <li class="link-item"><a href="search.html" class="link">Lorem</a></li>
            </ul>
    `;
}

createNav();