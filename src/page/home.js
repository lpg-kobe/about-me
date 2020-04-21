import React, { PureComponent } from 'react'
export default class Home extends PureComponent {
  render () {
    return [
      <div>
        <img src="img/element_parallax1.png" className="vx" alt="" data-enllax-ratio="0.3" data-enllax-type="foreground" />
        <img src="img/element_parallax2.png" className="vx2" alt="" data-enllax-ratio="-1" data-enllax-type="foreground" />
        <img src="img/element_animation.png" className="vx" alt="" data-enllax-ratio="0.8" data-enllax-type="foreground" />
      </div>,
      <div className="page-loading">
        <img src="img/loader.gif" alt="" />
        <span>Skip Loader</span>
      </div>,
      <section id="start">
        <div className="block start_bg double_gap_top double_gap_bottom">
          <div className="container fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="start_sec">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-xl-5 text-center order-last">
                      <div className="user_img">
                        <div className="element">
                          <img src="img/element_square.png" alt="" />
                        </div>
                        <div className="element_circle_yellow">
                          <img src="img/element_yellow_circle.png" alt="" />
                        </div>
                        <div className="element_circle_pink">
                          <img src="img/element_pink_circle.png" alt="" />
                        </div>
                        <div className="element_circle_small_pink">
                          <img src="img/element_pink_circle_small.png" alt="" />
                        </div>
                        <div className="element_square">
                          <img src="img/element_square_yes.png" alt="" />
                        </div>
                        <div className="element_circle_purple">
                          <img src="img/element_purple_circle.png" alt="" />
                        </div>
                        <div className="element_line">
                          <img src="img/line.png" alt="" />
                        </div>
                        <div className="element_circle_gray">
                          <img src="img/element_gray_circle.png" alt="" />
                        </div>
                        <img src="img/me.png" alt="" />
                      </div>
                    </div>
                    <div className="col-xl-4 order-first">
                      <div className="start_intro">
                        <span className="RedTextColor">Hi, I' Am</span>
                        <div className="glitch" data-text="Korty Doe">
                          Korty Doe
           </div>
                        <h4>
                          <i className="fa fa-connectdevelop"></i>Designer / Developer</h4>
                        <p>I am 27 years old front-end developer from Canada <br />London in the business since 2009!</p>
                        <div className="start_btn">
                          <a href="#" title="" className="theme_btn RedBgShadow mr-4">
                            <i className="fa fa-long-arrow-down"></i>Download Resume</a>
                          <a href="#" title="" className="theme_btn  blank">
                            <i className="fa PurpleTextColor  fa-lastfm"></i>Hire me</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <header className="main-nav">
        <div className="container">
          <div className="wrapper-menu" id="open-full-screen">
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#start" className="RedTextColor" title="">
                  <span>Start</span></a>
              </li>
              <li>
                <a href="#experience" className="SkyBlueTextColor" title="">
                  <span>Experience</span></a>
              </li>
              <li>
                <a href="#skills" className="PurpleTextColor" title="">
                  <span>Skills</span></a>
              </li>
              <li>
                <a href="#education" className="PinkTextColor" title="">
                  <span>Education</span></a>
              </li>
              <li>
                <a href="#projects" className="YellowTextColor" title="">
                  <span>Projects</span></a>
              </li>
              <li>
                <a href="#contact_us" className="GrayTextColor" title="">
                  <span>Contact</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>,
      <section>
        <div className="block">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="about_me_sec">
                  <div className="element_about_left">
                    <img src="img/element_about_left.png" alt="" />
                  </div>
                  <div className="element_about_right">
                    <img src="img/element_about_right.png" alt="" />
                  </div>
                  <div className="heading">
                    <span className="RedTextColor">Here you will find my resume</span>
                    <h1>About Me</h1>
                  </div>
                  <p>Hi! I m front-end developer and PSD Designer with experience of more than 5 years. Working for the international market place Envato(http://market.envato.com/) for more than 4 years.</p>
                  <p>I am also an author on themeforest.net (http://themeforest.net/). I have more than 60 approved items on themeforest. You can check my work on in the portfolio section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section id="experience">
        <div className="block remove_top">
          <div className="container fluid">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="heading center">
                  <span className="PurpleTextColor">SOME COOL EXPERIENCE</span>
                  <h1>10 years of <i>experience</i>
                  </h1>
                </div>
                <div className="exp_slider_sec">
                  <div className="element_triangle">
                    <img src="img/element_experience.png" alt="" />
                  </div>
                  <ul className="exp_slider">
                    <li>
                      <div className="experience">
                        <div className="exp_tip">
                          <h4>Front-End Developer</h4>
                          <span>Software Technology</span>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot RedLight">
                              <i className="RedDark"></i>
                            </div>
                          </div>
                        </div>
                        <span className="RedTextColor">2016 - 2017</span>
                        <div className="exp_logo">
                          <img src="img/exp_logo1.png" alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience flip">
                        <div className="exp_logo">
                          <img src="img/exp_logo2.png" alt="" />
                        </div>
                        <span className="SkyBlueTextColor">2012 - Current</span>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot SkyBlueLight">
                              <i className="SkyBlueDark"></i>
                            </div>
                          </div>
                        </div>
                        <div className="exp_tip">
                          <h4>Web Designer at KCA</h4>
                          <span>Computer Academy</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience">
                        <div className="exp_tip">
                          <h4>Corporate Designer</h4>
                          <span>at Behria City</span>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot PinkLight">
                              <i className="PinkDark"></i>
                            </div>
                          </div>
                        </div>
                        <span className="PinkTextColor">2016 - 2017</span>
                        <div className="exp_logo">
                          <img src="img/exp_logo3.png" alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience">
                        <div className="exp_tip">
                          <h4>Front-End Developer</h4>
                          <span>Software Technology</span>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot PurpleLight">
                              <i className="PurpleDark"></i>
                            </div>
                          </div>
                        </div>
                        <span className="PurpleTextColor">2016 - 2017</span>
                        <div className="exp_logo">
                          <img src="img/exp_logo1.png" alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience flip">
                        <div className="exp_logo">
                          <img src="img/exp_logo2.png" alt="" />
                        </div>
                        <span className="GreenTextColor">2012 - Current</span>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot GreenLight">
                              <i className="GreenDark"></i>
                            </div>
                          </div>
                        </div>
                        <div className="exp_tip">
                          <h4>Web Designer at KCA</h4>
                          <span>Computer Academy</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience">
                        <div className="exp_tip">
                          <h4>Corporate Designer</h4>
                          <span>at Behria City</span>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="dot YellowLight">
                              <i className="YellowDark"></i>
                            </div>
                          </div>
                        </div>
                        <span className="YellowTextColor">2016 - 2017</span>
                        <div className="exp_logo">
                          <img src="img/exp_logo3.png" alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section id="skills">
        <div className="block remove_top">
          <div className="element_city">
            <img src="img/element_city.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading">
                  <span className="SkyBlueTextColor">Some Cool Skills</span>
                  <h1>Skills &amp; <i>abilities</i>
                  </h1>
                </div>
                <div className="skill_sec">
                  <div className="progress_sec">
                    <h3>Wordpress/Php</h3>
                    <div className="skill_shape">
                      <div className="skill_bar RedBgShadow" style={{ width: '68%' }}>
                        <span className="RedTextColor">68<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="progress_sec">
                    <h3>Html &amp; Css</h3>
                    <div className="skill_shape">
                      <div className="skill_bar PurpleBgShadow" style={{ width: '55%' }}>
                        <span className="PurpleTextColor">55<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="progress_sec">
                    <h3>Web Designing</h3>
                    <div className="skill_shape">
                      <div className="skill_bar SkyBlueBgShadow" style={{ width: '75%' }}>
                        <span className="SkyBlueTextColor">75<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="progress_sec">
                    <h3>JavaScript / jQuery</h3>
                    <div className="skill_shape">
                      <div className="skill_bar GreenBgShadow" style={{ width: '60%' }}>
                        <span className="GreenTextColor">60<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section>
        <div className="block bg_light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading center">
                  <span className="YellowTextColor">Some Cool Skills</span>
                  <h1>Hobbies &amp; <i>Interests</i>
                  </h1>
                </div>
                <div className="hobbies_sec">
                  <div className="hobbies">
                    <div className="element_hobbies">
                      <img src="img/element_hobbies1.png" alt="" />
                    </div>
                    <div className="hobbies_icon_box">
                      <img src="img/hobbies_icon1.png" alt="" />
                    </div>
                    <h4>Mountains &amp; Forest</h4>
                    <span>Adventure</span>
                  </div>
                  <div className="hobbies">
                    <div className="element_hobbies">
                      <img src="img/element_hobbies2.png" alt="" />
                    </div>
                    <div className="hobbies_icon_box">
                      <img src="img/hobbies_icon2.png" alt="" />
                    </div>
                    <h4>Nature &amp; Classical</h4>
                    <span>Photography</span>
                  </div>
                  <div className="hobbies">
                    <div className="element_hobbies">
                      <img src="img/element_hobbies3.png" alt="" />
                    </div>
                    <div className="hobbies_icon_box">
                      <img src="img/hobbies_icon3.png" alt="" />
                    </div>
                    <h4>Speed &amp; Adrenaline</h4>
                    <span>Snowboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section id="education">
        <div className="block">
          <div className="element_moutains_left">
            <img src="img/element_mountains.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading">
                  <span className="PinkTextColor">Some Cool Skills</span>
                  <h1>My <i>Education</i>
                  </h1>
                  <div className="heading_paragraph">
                    <div className="row">
                      <div className="col-xl-8">
                        <p>This is probably the greatest thing to happen in my life - to be able to share this with you. Happy painting, God bless.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education_sec">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="education_box PinkDarkBorder">
                        <i className="fa  fa-graduation-cap PinkTextColor"></i>
                        <h3>Matric in Cadet Quoto</h3>
                        <span>1990 to 1988</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="education_box YellowDarkBorder">
                        <i className="fa  fa-graduation-cap YellowTextColor"></i>
                        <h3>Inter in Media College</h3>
                        <span>1990 to 1988</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                      <div className="education_box GreenDarkBorder">
                        <i className="fa  fa-graduation-cap GreenTextColor"></i>
                        <h3>Graduate at Panda Suit</h3>
                        <span>1990 to 1988</span>
                      </div>
                    </div>
                    <div className="col-xl-2  col-lg-12"></div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="education_box SkyBlueDarkBorder">
                        <i className="fa  fa-graduation-cap SkyBlueTextColor"></i>
                        <h3>Matric in Cadet Quoto</h3>
                        <span>1990 to 1988</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="education_box RedDarkBorder">
                        <i className="fa  fa-graduation-cap RedTextColor"></i>
                        <h3>Inter in Media College</h3>
                        <span>1990 to 1988</span>
                      </div>
                    </div>
                    <div className="col-xl-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section id="projects">
        <div className="block remove_top">
          <div className="element_moutains_right">
            <img src="img/element_mountains_flip.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading center">
                  <h1>
                    <strong>
                      <i>5000+</i>
                    </strong>clients and agencies are using my projects</h1>
                </div>
                <section id="options">
                  <div className="option-isotop">
                    <ul id="filter" className="option-set portfolio-nav" data-option-key="filter">
                      <li>
                        <a href="#all" data-option-value="*" className="selected">
                          <span>All</span></a>
                      </li>
                      <li>
                        <a href="#creative" data-option-value=".cat1">
                          <span>Creative</span></a>
                      </li>
                      <li>
                        <a href="#design" data-option-value=".cat2">
                          <span>Designing</span></a>
                      </li>
                      <li>
                        <a href="#artistics" data-option-value=".cat3">
                          <span>Artistics</span></a>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="grids-sec">
                  <div className="row" id="masonry">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 cat2">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project1.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Creative &amp; Minimal</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn SkyBlueMediumBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project1.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12 cat2">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project2.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Artistics Design</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn RedBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project2.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12 cat1">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project3.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Elementor Suits</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn PurpleBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project3.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12 cat3 ">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project4.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Creative &amp; Minimal</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn GreenBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project4.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12 cat1">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project5.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Creative &amp; Minimal</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn PinkBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project5.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12 cat3">
                      <div className="project_box">
                        <div className="project_img">
                          <img src="img/project6.jpg" alt="" />
                        </div>
                        <div className="project_details">
                          <h3>
                            <a href="#" title="">Creative &amp; Minimal</a>
                          </h3>
                          <span>Minimal, Agency</span>
                          <div className="project_btns">
                            <a href="#" title="" className="link_btn GrayBgShadow">
                              <i className="fa fa-unlink"></i>
                            </a>
                            <div className="pop_link">
                              <a href="img/project6.jpg" title="" className="popup_btn">
                                <i className="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section>
        <div className="block bg_light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading">
                  <span className="GreenTextColor">Some Recent Reviews</span>
                  <h1>Client <i>Reviews</i>
                  </h1>
                </div>
                <div className="reviews_sec">
                  <ul id="review_slider">
                    <li>
                      <div className="reviews">
                        <div className="review_img">
                          <img src="img/reviews1.jpg" alt="" />
                        </div>
                        <h3>Jonathan Doe</h3>
                        <span className="RedTextColor">Creative Designer</span>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John has encompassed</p>
                      </div>
                    </li>
                    <li>
                      <div className="reviews">
                        <div className="review_img">
                          <img src="img/reviews2.jpg" alt="" />
                        </div>
                        <h3>Kerilana Hiest</h3>
                        <span className="GrayTextColor">Developer</span>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John has encompassed</p>
                      </div>
                    </li>
                    <li>
                      <div className="reviews">
                        <div className="review_img">
                          <img src="img/reviews1.jpg" alt="" />
                        </div>
                        <h3>Jonathan Doe</h3>
                        <span className="PinkTextColor">Creative Designer</span>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John has encompassed</p>
                      </div>
                    </li>
                    <li>
                      <div className="reviews">
                        <div className="review_img">
                          <img src="img/reviews2.jpg" alt="" />
                        </div>
                        <h3>Kerilana Hiest</h3>
                        <span className="GreenTextColor">Developer</span>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John has encompassed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section>
        <div className="block">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading">
                  <span className="GrayTextColor">Checkout Prices</span>
                  <h1>Check out my <i>prices</i>
                  </h1>
                </div>
                <div className="prices-table">
                  <div className="prices-head SkyBlueLight">
                    <span>01</span>
                    <h3>Basic</h3>
                  </div>
                  <div className="prices-box  SkyBlueDark">
                    <i>$</i>
                    <span>10</span>
                    <p>per month</p>
                  </div>
                  <div className="price_side_padding">
                    <div className="prices-features-list">
                      <ul>
                        <li>High-quality code</li>
                        <li>Extra Features</li>
                        <li>Visual Composer</li>
                        <li className="not-included">Listing Builders</li>
                        <li className="not-included">Standard Listing</li>
                        <li>Quality Sticky Headers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-btn SkyBlueTextColor">
                    <a href="#" title="">SIGN UP NOW</a>
                  </div>
                </div>
                <div className="prices-table">
                  <div className="prices-head GreenLight">
                    <span>02</span>
                    <h3>Gold</h3>
                  </div>
                  <div className="prices-box GreenDarkest">
                    <i>$</i>
                    <span>45</span>
                    <p>per month</p>
                  </div>
                  <div className="price_side_padding">
                    <div className="prices-features-list">
                      <ul>
                        <li>High-quality code</li>
                        <li>Extra Features</li>
                        <li>Visual Composer</li>
                        <li className="not-included">Listing Builders</li>
                        <li className="not-included">Standard Listing</li>
                        <li>Quality Sticky Headers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-btn GreenTextColor">
                    <a href="#" title="">SIGN UP NOW</a>
                  </div>
                </div>
                <div className="prices-table">
                  <div className="prices-head RedLight">
                    <span>03</span>
                    <h3>Silver</h3>
                  </div>
                  <div className="prices-box RedDark">
                    <i>$</i>
                    <span>29</span>
                    <p>per month</p>
                  </div>
                  <div className="price_side_padding">
                    <div className="prices-features-list">
                      <ul>
                        <li>High-quality code</li>
                        <li>Extra Features</li>
                        <li>Visual Composer</li>
                        <li className="not-included">Listing Builders</li>
                        <li className="not-included">Standard Listing</li>
                        <li>Quality Sticky Headers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="prices-btn RedTextColor">
                    <a href="#" title="">SIGN UP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section id="contact_us">
        <div className="block bg_light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading with_btn">
                  <h1>Have a <i>Questions?</i>
                  </h1>
                  <button id="OpenMap" className="PinkBgShadow">
                    <i className="fa fa-map-marker"></i>WHERE I AM LOCATED</button>
                </div>
                <div className="contact_sec">
                  <div className="row">
                    <div className="col-xl-7">
                      <div className="contact_form">
                        <div id="contact" className="get-in-touch">
                          <div id="message"></div>
                          <form method="post" action="contact.php" name="contactform" id="contactform">
                            <div className="row">
                              <div className="col-md-12">
                                <h3>Hello! My name is</h3>
                                <input name="name" type="text" id="name" className="input-style" />
                              </div>
                              <div className="col-md-12">
                                <h3>and here is my message:</h3>
                                <textarea name="comments" id="comments" className="input-style"></textarea>
                              </div>
                              <div className="col-md-12">
                                <h3>I will left you my e-mail - please reply:</h3>
                                <input name="email" type="text" id="email" className="input-style" />
                              </div>
                              <button type="submit" className="theme_btn RedBgShadow" id="submit">
                                <i className="fa  fa-share"></i>Send Message</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="contact_box">
                        <div className="contact_img">
                          <div className="contact_element">
                            <img src="img/element_contact1.png" alt="" />
                          </div>
                          <img src="img/contact_icon1.png" alt="" />
                        </div>
                        <div className="contact_info">
                          <span>2512 Cherry tree drive</span>
                          <span>jacksonville</span>
                        </div>
                      </div>
                      <div className="contact_box">
                        <div className="contact_img">
                          <div className="contact_element">
                            <img src="img/element_contact2.png" alt="" />
                          </div>
                          <img src="img/contact_icon2.png" alt="" />
                        </div>
                        <div className="contact_info">
                          <span>+92 25482 6582</span>
                          <span>061 - 52148 - 545</span>
                        </div>
                      </div>
                      <div className="contact_box">
                        <div className="contact_img">
                          <div className="contact_element">
                            <img src="img/element_contact3.png" alt="" />
                          </div>
                          <img src="img/contact_icon3.png" alt="" />
                        </div>
                        <div className="contact_info">
                          <span>info@example.com</span>
                          <span>xyz@example.com</span>
                        </div>
                      </div>
                      <div className="m_on_social">
                        <h3>Search me on Social</h3>
                        <a href="#" title="" className="fb_color">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" title="" className="twitter_color">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" title="" className="google_color">
                          <i className="fa fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ]
  }
}