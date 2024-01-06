const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="logo">  
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">TOPS</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">hoodies</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">jackets</a></li>
            <li><a href="#" class="footer-link">blazers</a></li>
            <li><a href="#" class="footer-link">sport-tops</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">TROUSERS</li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">tracks</a></li>
            <li><a href="#" class="footer-link">chinos</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">sweatpants</a></li>
            <li><a href="#" class="footer-link">woolen</a></li>
            <li><a href="#" class="footer-link">linen</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">FOOTWEARS</li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">running-shoes</a></li>
            <li><a href="#" class="footer-link">sneakers</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">sandals</a></li>
            <li><a href="#" class="footer-link">flip-flops</a></li>
            <li><a href="#" class="footer-link">boots</a></li>
        </ul>
    </div>  
</div>    
    <p class="footer-title">about us</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis necessitatibus praesentium quia suscipit eveniet ea facilis sit reiciendis dolore eaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nihil suscipit. Nisi molestiae, ducimus odit fugit dolor cum excepturi fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa atque repellendus accusamus doloribus quae impedit minus veniam cum corrupti magni!</p> 
    <hr>
    <p class="info">customer care - help@wardrobe.com</p>
    <p class="info">contact email - contact@wardrobe.com</p>
    <p class="info">contact no: 01-575902, 9728080095</p>
    <hr>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms and conditions</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">FACEBOOK</a>
            <a href="#" class="social-link">twitter</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Tik Tok</a>
        </div>
    </div>
    <hr>
    <p class="footer-credit">WARDROBE-YOUR ONE STOP MEN'S FASHION DESTINATION</p>
    
    `;
}

createFooter();