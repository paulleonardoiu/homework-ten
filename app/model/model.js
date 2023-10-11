var homeContent = `<div class="site-container">
<section class="hero">
    <div class="overlay"></div>
    <div class="container">
        <h1>travel-fly</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
        <a href="#">
            <div class="read-more">READ MORE</div>
        </a>
    </div>
</section>
<section class="promos">
    <div class="promo-container">
        <div class="promo promo-bg-1">
            <div class="overlay"></div>
            <h1>ISRAEL</h1>
            <h2>from $1000</h2>
            <a id="israel" href="#">
                <div class="learn-more">LEARN MORE</div>
            </a>
        </div>
        <div class="promo promo-bg-2">
            <div class="overlay"></div>
            <h1>U.S.A</h1>
            <h2>from $1500</h2>
            <a id="usa" href="#">
                <div class="learn-more">LEARN MORE</div>
            </a>
        </div>
        <div class="promo promo-bg-3">
            <div class="overlay"></div>
            <h1>AUSTRALIA</h1>
            <h2>from $1800</h2>
            <a id="australia" href="#">
                <div class="learn-more">LEARN MORE</div>
            </a>
        </div>
    </div>
</section>
<section class="booking">
   <div class="form">
        <h1>Booking form</h1>
        <div class="double-input">
            <input class="left" type="text" placeholder="name.">
            <input class="right" type="text" placeholder="email.">
        </div>
        <div class="double-input">
            <input class="left" type="text" placeholder="country.">
            <input class="right" type="text" placeholder="hotel.">
        </div>
        <div class="checkInOut">
            <div class="date-input">
                <label class="dateLabel" for="checkIn"><p>Check-In</p></label>
                <input type="date" name="checkIn" id="checkIn">
            </div>
            <div class="date-input">
                <label class="dateLabel" for="checkIn"><p>Check-Out</p></label>
                <input type="date" name="checkOut" id="checkOut">
            </div>
        </div>
        <div class="guest-count">
            <div class="container">
                <div class="selector">
                    <label for="#">Adult</label>
                    <select name="number-dd" id="number-dd">
                        <option value="zero">0</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                        <option value="ten">10</option>
                    </select>
                </div>
                <div class="selector">
                    <label for="#">Children</label>
                    <select name="number-dd" id="number-dd">
                        <option value="zero">0</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                        <option value="ten">10</option>
                    </select>
                </div>
                <div class="selector">
                    <label for="#">Rooms</label>
                    <select name="number-dd" id="number-dd">
                        <option value="zero">0</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                        <option value="ten">10</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="message">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="message."></textarea>
        </div>
        <input type="submit" class="submit" value="SUBMIT">
        <!-- <div class="submit">SUBMIT</div> -->
    </div>
</section>
</div>`;
var aboutContent = `<div class="about-page">
<div class="about">
    <div class="container">
        <div class="header">
            <h1>ABOUT:</h1>
            <hr>
        </div>
        <div class="text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
</div>
<div class="client">
    <div class="container">
        <div class="header">
            <h1>CLIENT QUOTES:</h1>
            <hr>
        </div>
        <div class="content">
            <div class="img">
                <img src="images/about-client-01.png" alt="client 1">
            </div>
            <div class="textbox">
                <div class="quote">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div class="author"><p>- Miranda Brown</p></div>
            </div>
        </div>
        <div class="content">
            <div class="img">
                <img src="images/about-client-02.png" alt="client 2">
            </div>
            <div class="textbox">
                <div class="quote">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div class="author"><p>- Johnathan wes</p></div>
            </div>
        </div>
    </div>
</div>
</div>`;
var toursContent = `<div class="tours-page">
<div class="tours-container">
    <div class="tours-banner">
        <!-- <img src="images/tours/tours-banner.png" alt=""> -->
        <div class="header">
            <p>TOURS:</p>
        </div>
    </div>
    <div class="tours-content">
        <div class="wrapper">
            <div class="tour">
                <img src="images/tours/israel.png" alt="israel">
                <div class="content">
                    <h1>Israel</h1>
                    <h2>from $1000</h2>
                    <a id="israel" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/usa.png" alt="usa">
                <div class="content">
                    <h1>U.S.A</h1>
                    <h2>from $1500</h2>
                    <a id="usa" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/australia.png" alt="australia">
                <div class="content">
                    <h1>Australia</h1>
                    <h2>from $1800</h2>
                    <a id="australia" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/new-zealand.png" alt="new zealand">
                <div class="content">
                    <h1>New Zealand</h1>
                    <h2>from $1200</h2>
                    <a id="newZealand" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/france.png" alt="france">
                <div class="content">
                    <h1>France</h1>
                    <h2>from $2500</h2>
                    <a id="france" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/egypt.png" alt="egypt">
                <div class="content">
                    <h1>Egypt</h1>
                    <h2>from $900</h2>
                    <a id="egypt" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/japan.png" alt="japan">
                <div class="content">
                    <h1>Japan</h1>
                    <h2>from $1300</h2>
                    <a id="japan" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/canada.png" alt="canada">
                <div class="content">
                    <h1>Canada</h1>
                    <h2>from $2000</h2>
                    <a id="canada" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
            <div class="tour">
                <img src="images/tours/uae.png" alt="U.A.E.">
                <div class="content">
                    <h1>U.A.E</h1>
                    <h2>from $3000</h2>
                    <a id="uae" href="#">
                        <div class="learn-more">LEARN MORE</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
var specialOffersContent = `<div class="special-offers-page">
<div class="container">
    <div class="title">
        <p>SPECIAL OFFER(S):</p>
        <hr>
    </div>
    <div class="content">
        <div class="offer-left"><img src="images/special-offers/special-offer-01.png" alt="barcelona"></div>
        <div class="offer-right">
            <div class="header">
                <p>BARCELONA, SPAIN</p>
                <hr>
            </div>
            <div class="text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
            <a href="#">
                <div class="learnMore">LEARN MORE</div>
            </a>
        </div>
    </div>
    <div class="content">
        <div class="offer-left"><img src="images/special-offers/special-offer-02.png" alt="bangkok"></div>
        <div class="offer-right">
            <div class="header">
                <p>BANGKOK, THAILAND</p>
                <hr>
            </div>
            <div class="text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
            <a href="#">
                <div class="learnMore">LEARN MORE</div>
            </a>
        </div>
    </div>
</div>
</div>`;
var blogContent = `<div class="blog-page">
<div class="container">
    <div class="title">
        <div class="header">
            <p>BLOG:</p>
            <hr>
        </div>
    </div>
    <div class="content">
        <div class="left">
            <div class="date">
                <div class="day"><h1>06</h1></div>
                <div class="month"><p>JUN</p></div>
            </div>
        </div>
        <div class="right">
            <div class="img"><img src="images/blog/blog-img-01.png" alt="blog img"></div>
            <div class="header"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div>
    <div class="content">
        <div class="left">
            <div class="date">
                <div class="day"><h1>23</h1></div>
                <div class="month"><p>JUL</p></div>
            </div>
        </div>
        <div class="right">
            <div class="img"><img src="images/blog/blog-img-01.png" alt="blog img"></div>
            <div class="header"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div>
</div>
</div>`;
var contactContent = `<div class="contact-page">
<div class="container">
    <div class="title">
        <div class="header">
            <p>CONTACT US:</p>
            <hr>
        </div>
    </div>
    <div class="content">
        <div class="map">
            <div class="img"><img src="images/contact/map.png" alt="map"></div>
            <div class="address">
                <p>
                    travel-fly Inc. <br>
                    8901 Marmora Road, <br>
                    Glasgow, D04 89GR. <br>
                    Freephone:+1 800 559 6580 <br>
                    Telephone:+1 800 603 6035 <br>
                    FAX:+1 800 889 9898 <br>
                    E-mail: mail@travelfly.org <br>
                </p>
            </div>
        </div>
        <div class="form">
            <form action="#">
                <input class="text-input" type="text" placeholder="Your name...">
                <input class="text-input" type="text" placeholder="Email Address...">
                <input class="text-input" type="text" placeholder="Company...">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message..."></textarea>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
</div>
</div>`;

// Tours
var israelContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/israel/tour-01.png" alt="israel tour">
        <h1>Israel tour package:</h1>
        <p>STARTING FROM $1000</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/israel/israel-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/israel/israel-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/israel/israel-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var usaContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/usa/tour-02.png" alt="usa tour">
        <h1>USA tour package:</h1>
        <p>STARTING FROM $1500</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/usa/usa-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/usa/usa-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/usa/usa-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var australiaContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/australia/tour-03.png" alt="australia tour">
        <h1>Australia tour package:</h1>
        <p>STARTING FROM $1800</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/australia/aus-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/australia/aus-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/australia/aus-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var newZealandContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/new-zealand/tour-04.png" alt="New Zealand tour">
        <h1>New Zealand tour package:</h1>
        <p>STARTING FROM $1200</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/new-zealand/nz-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/new-zealand/nz-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/new-zealand/nz-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var franceContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/france/tour-05.png" alt="France tour">
        <h1>France tour package:</h1>
        <p>STARTING FROM $2500</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/france/france-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/france/france-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/france/france-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var egyptContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/egypt/tour-06.png" alt="Egypt tour">
        <h1>Egypt tour package:</h1>
        <p>STARTING FROM $900</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/egypt/egypt-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/egypt/egypt-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/egypt/egypt-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var japanContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/japan/tour-07.png" alt="Japan tour">
        <h1>Japan tour package:</h1>
        <p>STARTING FROM $1300</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/japan/japan-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/japan/japan-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/japan/japan-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var canadaContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/canada/tour-08.png" alt="Canada tour">
        <h1>Canada tour package:</h1>
        <p>STARTING FROM $2000</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/canada/canada-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/canada/canada-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/canada/canada-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;
var uaeContent = `<div class="site-container">
<div class="tour-hero">
    <div class="hero-container">
        <img src="images/tours/packages/uae/tour-09.png" alt="U.A.E tour">
        <h1>U.A.E tour package:</h1>
        <p>STARTING FROM $3000</p>
    </div>
</div>
<div class="photo-container">
    <div class="wrapper">
        <div class="photo"><img src="images/tours/packages/uae/uae-tour-01.png" alt="image 1"></div>
        <div class="photo"><img src="images/tours/packages/uae/uae-tour-02.png" alt="image 2"></div>
        <div class="photo"><img src="images/tours/packages/uae/uae-tour-03.png" alt="image 3"></div>
    </div>
</div>
<div class="day-container">
    <div class="day-content">
        <h1>Day #1:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #2:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
    <div class="day-content">
        <h1>Day #3:</h1>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
    </div>
</div>
</div>`;

export function changePageContent(pageID){
    let pageName = pageID + "Content";

    // Change Page Content
    $("#app").html(eval(pageName));

    // Change Nav Bar
    if(pageID == "home"){
        $("#navbar").addClass("main-nav");
        $("#navbar").removeClass("white-nav");
    }else{
        $("#navbar").addClass("white-nav");
        $("#navbar").removeClass("main-nav");
    }

    // Highlight Active Nav Link
    $("nav a").removeClass("active"); /* Removes active class from all <a>'s in nav */
    $("#"+pageID).addClass("active"); /* Adds active class to <a> with specific ID */
}