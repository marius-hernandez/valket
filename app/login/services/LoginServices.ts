import { supabase } from "@/lib/supabaseClient"

export const loginUser=async(email:string, password:string)=>{
    try {
        let {data, error}=await supabase.auth.signInWithPassword({email,password})
        if(data.session) console.log(data)
        if(error) console.log(error)
    } catch (error) {
        console.log(error)
    }
}