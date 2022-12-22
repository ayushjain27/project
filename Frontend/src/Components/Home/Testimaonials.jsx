import React from 'react';
import styles from './Testimaonials.module.css'

const Testimaonials = () => {
    return (
        <div className='container mt-5'>
            <div className={`${styles.test} row m-5`}>
                <div className='col-md-4 p-4'>
                    <div className='w-100'>
                        <img src="./images/6262498.jpg" height={300} className="w-100" alt="" />
                    </div>
                </div>
                <div className={`${styles.text} col-md-8 d-flex justify-content-center align-items-center p-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus quo dolore accusamus veniam temporibus doloremque recusandae cum adipisci dignissimos ipsam aliquid placeat, tempora corporis eaque quisquam molestiae culpa magni saepe. Consequatur, asperiores voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quis eius velit odio deserunt porro quisquam ab perferendis! Alias in voluptates architecto ab eligendi quod repellat beatae explicabo, quia iusto suscipit, consequatur minus illum.
                </div>
            </div>
            <div className={`${styles.test} row m-5`}>
                <div className={`${styles.text} col-md-8 d-flex justify-content-center align-items-center p-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus quo dolore accusamus veniam temporibus doloremque recusandae cum adipisci dignissimos ipsam aliquid placeat, tempora corporis eaque quisquam molestiae culpa magni saepe. Consequatur, asperiores voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quis eius velit odio deserunt porro quisquam ab perferendis! Alias in voluptates architecto ab eligendi quod repellat beatae explicabo, quia iusto suscipit, consequatur minus illum.
                </div>
                <div className='col-md-4 p-4'>
                    <div className='w-100'>
                        <img src="./images/6262498.jpg" height={300} className="w-100" alt="" />
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