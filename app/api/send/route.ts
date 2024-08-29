// re_J19mczno_Aah2Aex6U4DECVhMgG43sVhL
import { Resend } from "resend";

import { EmailTemplateProps } from "@/components/email_template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try{
        const dataForm = await request.json();
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["lucascueli4@gmail.com"],
                subject: "Lucas Portfolio",
                react: EmailTemplateProps({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email
                }),
                text: "Lucas Cueli",
            });
            return Response.json(data);
        } catch (error) { 
            return Response.json({ error });
        }
    } catch(error) {
        return Response.json({ error });
    }
}
