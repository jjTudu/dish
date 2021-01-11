import React, { useLayoutEffect, useEffect, useState } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import icon2 from "../../static/icon2.png"
import icon1 from "../../static/icon1.png"
import icon3 from "../../static/icon3.png"
import page1_img2 from "../../static/page1_img2.jpg"
import page1_img1 from "../../static/page1_img1.jpg"
import page1_img3 from "../../static/page1_img3.jpg"


function shuffleArray(array) {
  let tempArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return tempArray;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        completelist: allIndianFoodDatasetCsv {          
            ...IndianFoodDatasetCsvConnectionFragment          
        }

        distinctCourse:allIndianFoodDatasetCsv {
          distinct(field: Course)
        }

      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />

    <div class="container">
      <div class="row">
        {
          data.distinctCourse.distinct.length > 0 &&
          shuffle(data.distinctCourse.distinct).slice(0, 3).map((course, index) => 
 
          {    if(index === 1) { return (
            <div class="grid_4">
            <div class="banner">
              <div class="gall_block">
                <div class="bann_capt  bn__1">
                  <div class="maxheight">
                    <img src={icon2} alt="" />
                    <div class="bann_title">{course}</div>
                    <a href="#">more</a>
                  </div>
                </div>
                <img src={page1_img2} alt="" />
              </div>
            </div>
          </div>) 
          }
            return (<div class="grid_4">
            <div class="banner">
              <div class="gall_block">

                {(index===0)
                ?<img src={page1_img1} alt="" />
                :<img src={page1_img3} alt="" />}
                <div class="bann_capt ">
                  <div class="maxheight">
                    {(index===0)
                    ?<img src={icon1} alt="" />
                    :<img src={icon3} alt="" />}
                    <div class="bann_title">{course}</div>
                    <a href="#">more</a>
                  </div>
                </div>

              </div>
            </div>
          </div>);  
        }    
          )
        }


        <div class="grid_4">
          <div class="block1">
            <div class="count">1.</div>
          Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo. Praesent faucibus malesuada faucibus. Donec laeet metus id laoreet malesuadarem ipsum dolor
          <br />
            <a href="#" class="btn">more</a>
          </div>
        </div>

        <div class="grid_4">
          <div class="block1">
            <div class="count">2.</div>
          Dasamus at magna non nunc tristique rhoncus. Kliquam nibh ante, egestas id dictum a, commodo. Praesent faucibus malesuada faucibus. Donec laeet metus id laoreet malesuadarem ipsumer
          <br />
            <a href="#" class="btn">more</a>
          </div>

        </div>
        <div class="grid_4">
          <div class="block1">
            <div class="count">3.</div>
          Tervamus at magna non nunc tristique rhoncus. Oliquam nibh ante, egestas id dictum a, commodo. Iraesent faucibus malesuada faucibus. Donec laeet etus id laoreet malesuadarem ipsolo
          <br />
            <a href="#" class="btn">more</a>
          </div>
        </div>


        <div class="grid_12">
          <div class="box">
            <div class="row">
              <div class="grid_5 preffix_1">
                <h2>Welcome</h2>
                <p>Post about this <strong class="color1"><a href="http://blog.templatemonster.com/free-website-templates/" rel="nofollow">freebie</a></strong> will tell all you need to know about it. Need a good choice of <strong class="color1"><a href="http://www.templatemonster.com/properties/topic/food-restaurant/" rel="nofollow">themes</a></strong>? Visit TemplateMonster’s website.</p>
              Aliquam nibh e,estas id dictum a, commodo. Praesent faucibus malesuada faucibusonec laeet metus id laoreet malesuadarem ipsum dolor sit <br />
                <a href="#" class="btn">more</a>
              </div>

              <div class="grid_5">
                <h2>Feel the Savor of Life</h2>
              Dervamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo. Praesent faucibus malesuada ucibus. Donec laeet metus id laoreet malesuadarem ipsum dosit ametctetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. <br />
                <a href="#" class="btn">more</a>
              </div>

            </div>
          </div>
        </div>
        <div class="grid_12">
          <h2>Dishes for You to Try</h2>
        </div>
        <div class="gallery">
          <div class="grid_4"><a href="images/big1.jpg" class="gall_item"><img src="images/page1_img4.jpg" alt="" /></a><a href="#" class="link1">+</a><div class="clear"></div></div>
          <div class="grid_4"><a href="images/big2.jpg" class="gall_item"><img src="images/page1_img5.jpg" alt="" /></a><a href="#" class="link1">+</a><div class="clear"></div></div>
          <div class="grid_4"><a href="images/big3.jpg" class="gall_item"><img src="images/page1_img6.jpg" alt="" /></a><a href="#" class="link1">+</a><div class="clear"></div></div>
        </div>
        <div class="grid_4">
          <h2>Testimonials</h2>
          <blockquote class="bq1">
            <img src="images/page1_img7.jpg" alt="" class="img_inner fleft noresize" />
            <div class="extra_wrapper">
              <div class="bq_title color1">Mark Wood</div>
            Sivamus at magna non nuncer tristique rhoncus. Aliquame nibh ante, egestas id dictumertolom  commodo. Praesent faucib mal.
            <a href="#"><span class="fa fa-chevron-right"></span>more testimonials</a>
            </div>
          </blockquote>
        </div>
        <div class="grid_4">
          <h2>What’s new</h2>
          <div class="block2">
            <time datetime="2014-01-01">11<br />June</time>
            <div class="extra_wrapper">
              <div class="text1"><a href="#">Vivamus at magna non nunc </a></div>Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibus
          </div>
          </div>
          <div class="block2">
            <time datetime="2014-01-01">15<br />APR</time>
            <div class="extra_wrapper">
              <div class="text1"><a href="#">Tivamus at magna non nunc </a></div>Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibu
          </div>
          </div>
        </div>
        <div class="grid_4">
          <h2>Opening Hours</h2>
          <ul class="shed">
            <li><span>Breakfast:</span> 8AM - 11AM</li>
            <li><span>Grill Menu:</span> 12AM - 12PM</li>
            <li><span>Live Musiс:</span> 8AM - 11AM</li>
          </ul>
        </div>
      </div>
    </div>

    <h1>Using a CSV as a data source in Gatsby</h1>
    <p>These people were found in the CSV file.</p>
    <ul>
      {data.completelist.nodes.length > 0 &&
        data.completelist.nodes.map(receipe => (
          <li>
            <Link to={`/receipe/${receipe.Srno}-${receipe.TotalTimeInMins}-${receipe.RecipeName}`}>
              {receipe.RecipeName}
            </Link>
          </li>
        ))}
    </ul>


  </Layout>
)