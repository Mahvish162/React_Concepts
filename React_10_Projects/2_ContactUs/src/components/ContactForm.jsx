// // const ContactInput = ({ label, isTextarea }) => {
// //   return (
// //     <div className="relative w-full">
// //       {/* Label */}
// //       <span className="absolute -top-3 left-4 bg-white px-2 text-lg font-semibold">
// //         {label}
// //       </span>

// //       {/* Input / Textarea */}
// //       {isTextarea ? (
// //         <textarea
// //           className="w-full border border-gray-400 rounded-md p-4 pt-6 focus:outline-none focus:border-black"
// //           rows="5"
// //         ></textarea>
// //       ) : (
// //         <input
// //           type="text"
// //           className="w-full border border-gray-400 rounded-md p-4 pt-6 focus:outline-none focus:border-black"
// //         />
// //       )}
// //     </div>
// //   );
// // };

// const ContactInput=({label})=>{
//     return (
//         <div className="relative w-full">
//             <span className="absolute -top-3 bg-white text-lg px-2 ">{label}</span>
//         </div>
//     )
// }

// export default function ContactForm() {
//   return (
//     <div className="flex flex-col gap-10 max-w-xl w-full">
//       <ContactInput label="Name" />
//       <ContactInput label="E-Mail" />
//       {/* <ContactInput label="TEXT" isTextarea={true} /> */}
//     </div>
//   );
// }

import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex flex-col gap-5 ml-5 mt-10 w-[440px]'>
            <div className='relative border-black border-[1] rounded-[8px] p-5 h-[40px]'>
                <span className='absolute -top-3 bg-white'>
                    Name
                </span>
            </div>
            <div className='relative border-black border-[1] rounded-[8px] p-5 h-[40px]'>
                <span className='absolute -top-3 bg-white'>
                    Email
                </span>
            </div>
            <div className='relative border-black  border-[1] rounded-[8px] p-5 h-[100px]'>
                <span className='absolute -top-3 bg-white'>
                    Textarea
                </span>
            </div>
        </div>
    )
}

export default ContactForm
