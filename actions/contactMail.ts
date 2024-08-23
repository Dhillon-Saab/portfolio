"use server"
import { Resend } from "resend"

export const sendMail = async (formData: FormData) =>{
    const resend = new Resend(process.env.RESEND_API)

    const name: any = formData.get('name')
    const email: any = formData.get('email')
    const message: any = formData.get('message')

    const {data, error} = await resend.emails.send({
        from: `${name} <admin@dhillonsaab.xyz>`,
        to: ['ad70138@gmail.com'],
        subject: `Message from ${email} `,
        html: `<strong>${email}</strong>
        <p>${message}</p>`,
    });
    
    if(error){
        return console.log({message: error, status: true})
    }
    if(data){
        return {message: "Message Sent Successfully", status:true}
    }

}