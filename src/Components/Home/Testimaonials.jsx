import React from 'react';
import styles from './Testimaonials.module.css'

const Testimaonials = () => {
    return (
        <div className={` ${styles.bg} container mt-5 `}>
            <div className={`${styles.test} row m-5`}>
                <div className='col-md-4 p-4'>
                    <div className='w-100'>
                        <img src="https://www.w3schools.com/w3css/img_avatar3.png" height={300} className="w-100" alt="" />
                    </div>
                </div>
                <div className={`${styles.text} col-md-8 d-flex justify-content-center align-items-center p-5`} style={{fontSize: 22}}>
                Hi there, I'm Prince , and I want to share my experience with this fantastic website. It's not just any platform; it's where I've found a simple yet impactful way to give back. Donating footwear, clothes, and books here is a breeze, and knowing they're going directly to those who need them makes every contribution meaningful. It's more than just donations; it's about making a real difference in people's lives, one item at a time. If you're looking for a way to give back that truly matters, this website is where it's at.
                </div>
            </div>
            <div className={`${styles.divider} row m-5`}></div>
            <div className={`${styles.test} row m-5`}>
                <div className={`${styles.text} col-md-8 d-flex justify-content-center align-items-center p-5`}  style={{fontSize: 20}}>
                Hi there, I'm Suhani Kala, and I want to share my journey with this incredible website. It's not just a platform; it's become my go-to for making a difference in the world. Donating footwear, clothes, and books here is not only seamless but also deeply fulfilling. Each item I contribute feels like a step towards positive change. What's remarkable is how this platform connects donors like me with those in need, fostering a sense of community and compassion. Knowing that my contributions are bringing smiles to faces and hope to hearts is what keeps me coming back. If you're ready to join me in making a meaningful impact, this website is your perfect partner on the journey of giving back.
                </div>
                <div className='col-md-4 p-4'>
                    <div className='w-100'>
                        <img src="	https://www.w3schools.com/howto/img_avatar2.png" height={300} className="w-100" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className={`${styles.test} row m-5`}>
                <div className='col-8 d-flex justify-content-center align-items-center p-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus quo dolore accusamus veniam temporibus doloremque recusandae cum adipisci dignissimos ipsam aliquid placeat, tempora corporis eaque quisquam molestiae culpa magni saepe. Consequatur, asperiores voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas hic dicta explicabo, accusamus nemo, soluta cumque voluptatibus dolor at repudiandae alias rerum, aperiam corrupti. Natus laborum eum repellat excepturi, ratione a id? Ad, numquam!
                </div>
                <div className='col-4 p-4'>
                    <img src="./images/6262498.jpg" height={300} width={300} alt="" />
                </div>
            </div> */}
        </div>
    )
}

export default Testimaonials