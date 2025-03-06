import React from 'react';
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
    return (
       <AnimatedCursor 
        innerSize={40}
           outerSize={0}
           color='#FF6500'
           outerAlpha={0}
           innerScale={0}
           outerScale={2}
           innerStyle={{
               border: '2px solid rgb(255, 136, 91)',
               borderRadius: '50%', 
               
           }}
           outerStyle={{
            mixBlendMode: 'exclusion'
          }}
           clickables={[
               'a',
               'input[type="text"]',
               'input[type="email"]',
               'input[type="number"]',
               'input[type="submit"]',
               'input[type="image"]',
               'label[for]',
               'select',
               'textarea',
               'button',
               '.link'
              
           ]}
       
       />
    );
}

export default AnimCursor;