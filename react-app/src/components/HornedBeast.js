import React from 'react';

const hornedBeast = [{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },
  
  {
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a creepy unicorn head mask",
    "keyword": "unicorn", 
    "horns": 1
}]
class HornedBeast  extends React.Component {
    render (){
        return (
            <div>
                <section>
                    <h2>{hornedBeast[0].title}</h2>
                    <img src = {hornedBeast[0].image_url} alt= {hornedBeast[0].title} title= {hornedBeast[0].title}></img>
                    <p>{hornedBeast[0].description}<br></br> 
                    keyword : {hornedBeast[0].keyword}
                    <br></br>
                    Horns : {hornedBeast[0].horns} Horns</p>

                </section>
                <section>
                    <h2>{hornedBeast[1].title}</h2>
                    <img src = {hornedBeast[1].image_url} alt= {hornedBeast[1].title} title= {hornedBeast[1].title}></img>
                    <p>{hornedBeast[1].description}<br></br> 
                    keyword : {hornedBeast[1].keyword}
                    <br></br>
                    Horns : {hornedBeast[1].horns} Horns</p>

                </section>
                <section>
                    <h2>{hornedBeast[2].title}</h2>
                    <img src = {hornedBeast[2].image_url} alt= {hornedBeast[2].title} title= {hornedBeast[2].title}></img>
                    <p>{hornedBeast[2].description}<br></br> 
                    keyword : {hornedBeast[2].keyword}
                    <br></br>
                    Horns : {hornedBeast[2].horns} Horns</p>

                </section>
                

            </div>
            
            
        )
    }
}

export default HornedBeast ;