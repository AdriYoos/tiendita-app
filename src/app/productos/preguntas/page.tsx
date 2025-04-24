import React from 'react';
import MyComponentP from "@/app/components/MyComponentP";

const MenuElementos=[
    {
        pregunta:"How do i know if a product is available in boutiques?",
        respuesta:"Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.",
        numero:1
    },
    {
        pregunta:"How can i find the prices or get other information about chanel products?",
        respuesta:"Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.",
        numero:2
    },
    {
        pregunta:"How many collections come out every year?",
        respuesta:"Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.",
        numero:3
    },
    {
        pregunta:"Are all of the fashion collections features on the website?",
        respuesta:"Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.  ",
        numero:4
    },
    {
        pregunta:"Where do i find products that i have seen in magazines or Social Media?",
        respuesta:"Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.",
        numero:5
    }
]

export default function Preguntas() {
    return (

        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-black lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                        <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg" alt="search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">

                <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                {
                    MenuElementos.map((elemento) => (
                        <div key={elemento.numero}>
                            <MyComponentP 
                                question={elemento.pregunta} 
                                answer={elemento.respuesta} 
                                number={elemento.numero} 
                            />
                            <hr className="w-full lg:mt-10 my-8" />
                        </div>
                    ))
                }
            </div>
        </div>

    );

}
